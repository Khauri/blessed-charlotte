/**
 * This Module class is shared between popup/popup.html
 * and is also injected as a content script into all pages
 * Its purpose is to store, save, and update the extension's 
 * user-generated modules. i.e. Charlotte's "eyes".
 * Each module represents 
 */
var storageString = "charlotte-storage";
var pages = {};
/**
 * Module class
*/
class Module{
    /**
     * @param opts
     */
    constructor(opts = {}){
        Object.assign(this, {
            /**
             * Name of the module
             */
            name : "",
            /**
             * Module Parent
             */
            parent : null,
            /**
             * Module Children
             */
            children : [],
            pos : {
                row : null,
                col : null,
                order : null,
                top: 0,
                left: 0
            },
            type : "get",
            css : "",
            id : null,
            url : null,
            selector : null,
            matches : []
        }, opts);
    }
    /**
     * Add a child to module
     */
    addChild( c ){
        if(!(c instanceof Module)){
            c = new Module(c)
            
        }
        // add child and set child's parent to this
            this.children.push(c);
            c.parent = this;
    }
    /**
     * gets the module from the source using CharlotteAJAX
     */
    get(){
        // if we've already loaded this page don't reload it unless this is a "watch" module
        if ( this.type != "watch" && pages[this.url] ){
        }else{

        }
    }
    /**
     * saves this module to storage
     */
    save(){
        // retrieve current object from storage
        chrome.storage.sync.get([storageString], function(res){

        })
    }
    /**
     * removes current module
     */
    remove(){
        chrome.storage.sync.get;
    }
    /**
     * Generates the html string associated with this module
     */
    generateHTML(){
        
    }
    /**
     * Recursively searches for first reference of val in field of children
     */
    findByField(field, val){

    }
    /**
     * Returns a list of modules loaded from chrome storage
     */
    static loadFromStorage(){

    }
}

if(typeof module !== 'undefined' && module.exports)
    module.exports = Module;