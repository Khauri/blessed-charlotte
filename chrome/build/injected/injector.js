import StateManager from './StateManager';
import Charlotte from './Charlotte';
import Module from './Module';

var frame, popin;
var m = new Module();
/** Injects the popin */
function injectPopin(){
    if(!frame){
        var frame = document.createElement('div');
        frame.className = "cep-charlotte-extension-popin-container charlotte-container-minimized";
        //frame.innerHTML = '<div class="cep-charlotte-extension-popin-dragbar"></div>'
        popin  = document.createElement('div');
        popin.className = "cep-charlotte-extension-popin";
        //popin.src  = chrome.extension.getURL("popin/popin.html");
        // make element draggable
        frame.appendChild(popin);
    }
    document.body.appendChild(frame);
    // Highlight element on mouseover
    // unhighlight on mouseout or click

    function onDrop(event, ui){
        // create new module
        var helper = ui.helper[0],
            pos = ui.position;
        console.log(helper);
        var module = new Module({
            url : helper.baseURI,
            html : helper.outerHTML,
            pos:{
                top: pos.top,
                left : pos.left
            }
        });
        m.addChild(module);
        // create module container
        var cont = document.createElement('div');
        cont.className = "charlotte-module";
        cont.style.position = "absolute";
        cont.style.left = module.pos.left;
        cont.style.top = module.pos.top;
        cont.innerHTML = "<div class='charlotte-module-options'>"+
                            "<input>"+
                            "</div>"+
                            "<div class='charlotte-module-inner'>"+
                            module.html +
                            "</div>";
        popin.appendChild(cont);

        console.log(ui, module)
    }

    // Makes the window droppable
    $(".cep-charlotte-extension-popin-container").droppable({
        classes:{ 
            "ui-droppable-hover": "cep-charlotte-dragover-active"
        },
        drop : onDrop
    });
        $(document).on('mouseover',function (e) {
            e.stopPropagation();
            $(e.target).addClass('charlotte-highlight');
        }).on('mouseout mousedown mouseup', function (e) {
            e.stopPropagation();
            $(e.target).removeClass('charlotte-highlight');
        });

    // Makes all the elements on the page draggable
    $("*").not("body, html, .cep-charlotte-extension-popin-container, .cep-charlotte-extension-popin-container> *").draggable({
        helper:"clone", 
        cursor : "move",
        start: function(event, ui){
            $(this).draggable('instance').offset.click = {
                left: Math.floor(ui.helper.width() / 2),
                top: Math.floor(ui.helper.height() / 2)
            };
            // add maximize class to window 
            $('.cep-charlotte-extension-popin-container').toggleClass('charlotte-container-maximized');
            $('.cep-charlotte-extension-popin-container').toggleClass('charlotte-container-minimized');
        },
        stop: function(event, ui){
            $('.cep-charlotte-extension-popin-container').toggleClass('charlotte-container-maximized');
            $('.cep-charlotte-extension-popin-container').toggleClass('charlotte-container-minimized');
        },
        containment: "document", 
        addClasses: false, 
        appendTo: "body", 
        iframeFix: true, 
        zIndex:2147483647 
    });
    
}
/**
 * Remove the popin
 */
function removePopin(){
    document.removeChild(frame);
}
/**
 * Function to call when the frame is resized
 */
function onFrameResize(){

}
/**
 * Recieve messages from our extension to inject or remove the popin
 */
chrome.runtime.onMessage.addListener(function(req, sen, res){
    if(sen.id == chrome.runtime.id){ // We only accept messages from our extension
        switch(req.request){
            case "injectPopin":
                injectPopin();
                break;
            case "closePopin":
                removePopin();
                break;
        }
    }
});