/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Papa Parse
	v4.1.4
	https://github.com/mholt/PapaParse
*/
!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=b():a.Papa=b()}(this,function(){"use strict";function a(a,b){if(b=b||{},b.dynamicTyping=b.dynamicTyping||!1,b.worker&&y.WORKERS_SUPPORTED){var c=j();return c.userStep=b.step,c.userChunk=b.chunk,c.userComplete=b.complete,c.userError=b.error,b.step=q(b.step),b.chunk=q(b.chunk),b.complete=q(b.complete),b.error=q(b.error),delete b.worker,void c.postMessage({input:a,config:b,workerId:c.id})}var g=null;return"string"==typeof a?g=b.download?new d(b):new f(b):(s.File&&a instanceof File||a instanceof Object)&&(g=new e(b)),g.stream(a)}function b(a,b){function c(){"object"==typeof b&&("string"==typeof b.delimiter&&1===b.delimiter.length&&y.BAD_DELIMITERS.indexOf(b.delimiter)===-1&&(j=b.delimiter),("boolean"==typeof b.quotes||b.quotes instanceof Array)&&(h=b.quotes),"string"==typeof b.newline&&(k=b.newline),"string"==typeof b.quoteChar&&(l=b.quoteChar),"boolean"==typeof b.header&&(i=b.header))}function d(a){if("object"!=typeof a)return[];var b=[];for(var c in a)b.push(c);return b}function e(a,b){var c="";"string"==typeof a&&(a=JSON.parse(a)),"string"==typeof b&&(b=JSON.parse(b));var d=a instanceof Array&&a.length>0,e=!(b[0]instanceof Array);if(d&&i){for(var g=0;g<a.length;g++)g>0&&(c+=j),c+=f(a[g],g);b.length>0&&(c+=k)}for(var h=0;h<b.length;h++){for(var l=d?a.length:b[h].length,m=0;m<l;m++){m>0&&(c+=j);var n=d&&e?a[m]:m;c+=f(b[h][n],m)}h<b.length-1&&(c+=k)}return c}function f(a,b){if("undefined"==typeof a||null===a)return"";a=a.toString().replace(m,l+l);var c="boolean"==typeof h&&h||h instanceof Array&&h[b]||g(a,y.BAD_DELIMITERS)||a.indexOf(j)>-1||" "===a.charAt(0)||" "===a.charAt(a.length-1);return c?l+a+l:a}function g(a,b){for(var c=0;c<b.length;c++)if(a.indexOf(b[c])>-1)return!0;return!1}var h=!1,i=!0,j=",",k="\r\n",l='"';c();var m=new RegExp(l,"g");if("string"==typeof a&&(a=JSON.parse(a)),a instanceof Array){if(!a.length||a[0]instanceof Array)return e(null,a);if("object"==typeof a[0])return e(d(a[0]),a)}else if("object"==typeof a)return"string"==typeof a.data&&(a.data=JSON.parse(a.data)),a.data instanceof Array&&(a.fields||(a.fields=a.meta&&a.meta.fields),a.fields||(a.fields=a.data[0]instanceof Array?a.fields:d(a.data[0])),a.data[0]instanceof Array||"object"==typeof a.data[0]||(a.data=[a.data])),e(a.fields||[],a.data||[]);throw"exception: Unable to serialize unrecognized input"}function c(a){function b(a){var b=o(a);b.chunkSize=parseInt(b.chunkSize),a.step||a.chunk||(b.chunkSize=null),this._handle=new g(b),this._handle.streamer=this,this._config=b}this._handle=null,this._paused=!1,this._finished=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},b.call(this,a),this.parseChunk=function(a){if(this.isFirstChunk&&q(this._config.beforeFirstChunk)){var b=this._config.beforeFirstChunk(a);void 0!==b&&(a=b)}this.isFirstChunk=!1;var c=this._partialLine+a;this._partialLine="";var d=this._handle.parse(c,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var e=d.meta.cursor;this._finished||(this._partialLine=c.substring(e-this._baseIndex),this._baseIndex=e),d&&d.data&&(this._rowCount+=d.data.length);var f=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(u)s.postMessage({results:d,workerId:y.WORKER_ID,finished:f});else if(q(this._config.chunk)){if(this._config.chunk(d,this._handle),this._paused)return;d=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(d.data),this._completeResults.errors=this._completeResults.errors.concat(d.errors),this._completeResults.meta=d.meta),!f||!q(this._config.complete)||d&&d.meta.aborted||this._config.complete(this._completeResults,this._input),f||d&&d.meta.paused||this._nextChunk(),d}},this._sendError=function(a){q(this._config.error)?this._config.error(a):u&&this._config.error&&s.postMessage({workerId:y.WORKER_ID,error:a,finished:!1})}}function d(a){function b(a){var b=a.getResponseHeader("Content-Range");return null===b?-1:parseInt(b.substr(b.lastIndexOf("/")+1))}a=a||{},a.chunkSize||(a.chunkSize=y.RemoteChunkSize),c.call(this,a);var d;t?this._nextChunk=function(){this._readChunk(),this._chunkLoaded()}:this._nextChunk=function(){this._readChunk()},this.stream=function(a){this._input=a,this._nextChunk()},this._readChunk=function(){if(this._finished)return void this._chunkLoaded();if(d=new XMLHttpRequest,this._config.withCredentials&&(d.withCredentials=this._config.withCredentials),t||(d.onload=p(this._chunkLoaded,this),d.onerror=p(this._chunkError,this)),d.open("GET",this._input,!t),this._config.chunkSize){var a=this._start+this._config.chunkSize-1;d.setRequestHeader("Range","bytes="+this._start+"-"+a),d.setRequestHeader("If-None-Match","webkit-no-cache")}try{d.send()}catch(a){this._chunkError(a.message)}t&&0===d.status?this._chunkError():this._start+=this._config.chunkSize},this._chunkLoaded=function(){if(4==d.readyState){if(d.status<200||d.status>=400)return void this._chunkError();this._finished=!this._config.chunkSize||this._start>b(d),this.parseChunk(d.responseText)}},this._chunkError=function(a){var b=d.statusText||a;this._sendError(b)}}function e(a){a=a||{},a.chunkSize||(a.chunkSize=y.LocalChunkSize),c.call(this,a);var b,d,e="undefined"!=typeof FileReader;this.stream=function(a){this._input=a,d=a.slice||a.webkitSlice||a.mozSlice,e?(b=new FileReader,b.onload=p(this._chunkLoaded,this),b.onerror=p(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var a=this._input;if(this._config.chunkSize){var c=Math.min(this._start+this._config.chunkSize,this._input.size);a=d.call(a,this._start,c)}var f=b.readAsText(a,this._config.encoding);e||this._chunkLoaded({target:{result:f}})},this._chunkLoaded=function(a){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(a.target.result)},this._chunkError=function(){this._sendError(b.error)}}function f(a){a=a||{},c.call(this,a);var b,d;this.stream=function(a){return b=a,d=a,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var a=this._config.chunkSize,b=a?d.substr(0,a):d;return d=a?d.substr(a):"",this._finished=!d,this.parseChunk(b)}}}function g(a){function b(){if(w&&n&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+y.DefaultDelimiter+"'"),n=!1),a.skipEmptyLines)for(var b=0;b<w.data.length;b++)1===w.data[b].length&&""===w.data[b][0]&&w.data.splice(b--,1);return c()&&d(),f()}function c(){return a.header&&0===v.length}function d(){if(w){for(var a=0;c()&&a<w.data.length;a++)for(var b=0;b<w.data[a].length;b++)v.push(w.data[a][b]);w.data.splice(0,1)}}function e(b,c){return(a.dynamicTyping[b]||a.dynamicTyping)===!0?"true"===c||"TRUE"===c||"false"!==c&&"FALSE"!==c&&j(c):c}function f(){if(!w||!a.header&&!a.dynamicTyping)return w;for(var b=0;b<w.data.length;b++){for(var c=a.header?{}:[],d=0;d<w.data[b].length;d++){var f=d,g=w.data[b][d];a.header&&(f=d>=v.length?"__parsed_extra":v[d]),g=e(f,g),"__parsed_extra"===f?(c[f]=c[f]||[],c[f].push(g)):c[f]=g}w.data[b]=c,a.header&&(d>v.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+v.length+" fields but parsed "+d,b):d<v.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+v.length+" fields but parsed "+d,b))}return a.header&&w.meta&&(w.meta.fields=v),w}function g(b,c){for(var d,e,f,g=[",","\t","|",";",y.RECORD_SEP,y.UNIT_SEP],i=0;i<g.length;i++){var j=g[i],k=0,l=0;f=void 0;for(var m=new h({delimiter:j,newline:c,preview:10}).parse(b),n=0;n<m.data.length;n++){var o=m.data[n].length;l+=o,"undefined"!=typeof f?o>1&&(k+=Math.abs(o-f),f=o):f=o}m.data.length>0&&(l/=m.data.length),("undefined"==typeof e||k<e)&&l>1.99&&(e=k,d=j)}return a.delimiter=d,{successful:!!d,bestDelimiter:d}}function i(a){a=a.substr(0,1048576);var b=a.split("\r"),c=a.split("\n"),d=c.length>1&&c[0].length<b[0].length;if(1===b.length||d)return"\n";for(var e=0,f=0;f<b.length;f++)"\n"===b[f][0]&&e++;return e>=b.length/2?"\r\n":"\r"}function j(a){var b=p.test(a);return b?parseFloat(a):a}function k(a,b,c,d){w.errors.push({type:a,code:b,message:c,row:d})}var l,m,n,p=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,r=this,s=0,t=!1,u=!1,v=[],w={data:[],errors:[],meta:{}};if(q(a.step)){var x=a.step;a.step=function(d){if(w=d,c())b();else{if(b(),0===w.data.length)return;s+=d.data.length,a.preview&&s>a.preview?m.abort():x(w,r)}}}this.parse=function(c,d,e){if(a.newline||(a.newline=i(c)),n=!1,a.delimiter)"function"==typeof a.delimiter&&(a.delimiter=a.delimiter(c),w.meta.delimiter=a.delimiter);else{var f=g(c,a.newline);f.successful?a.delimiter=f.bestDelimiter:(n=!0,a.delimiter=y.DefaultDelimiter),w.meta.delimiter=a.delimiter}var j=o(a);return a.preview&&a.header&&j.preview++,l=c,m=new h(j),w=m.parse(l,d,e),b(),t?{meta:{paused:!0}}:w||{meta:{paused:!1}}},this.paused=function(){return t},this.pause=function(){t=!0,m.abort(),l=l.substr(m.getCharIndex())},this.resume=function(){t=!1,r.streamer.parseChunk(l)},this.aborted=function(){return u},this.abort=function(){u=!0,m.abort(),w.meta.aborted=!0,q(a.complete)&&a.complete(w),l=""}}function h(a){a=a||{};var b=a.delimiter,c=a.newline,d=a.comments,e=a.step,f=a.preview,g=a.fastMode,h=a.quoteChar||'"';if(("string"!=typeof b||y.BAD_DELIMITERS.indexOf(b)>-1)&&(b=","),d===b)throw"Comment character same as delimiter";d===!0?d="#":("string"!=typeof d||y.BAD_DELIMITERS.indexOf(d)>-1)&&(d=!1),"\n"!=c&&"\r"!=c&&"\r\n"!=c&&(c="\n");var i=0,j=!1;this.parse=function(a,k,l){function m(a){w.push(a),z=i}function n(b){return l?p():("undefined"==typeof b&&(b=a.substr(i)),y.push(b),i=r,m(y),v&&q(),p())}function o(b){i=b,m(y),y=[],D=a.indexOf(c,i)}function p(a){return{data:w,errors:x,meta:{delimiter:b,linebreak:c,aborted:j,truncated:!!a,cursor:z+(k||0)}}}function q(){e(p()),w=[],x=[]}if("string"!=typeof a)throw"Input must be a string";var r=a.length,s=b.length,t=c.length,u=d.length,v="function"==typeof e;i=0;var w=[],x=[],y=[],z=0;if(!a)return p();if(g||g!==!1&&a.indexOf(h)===-1){for(var A=a.split(c),B=0;B<A.length;B++){var y=A[B];if(i+=y.length,B!==A.length-1)i+=c.length;else if(l)return p();if(!d||y.substr(0,u)!==d){if(v){if(w=[],m(y.split(b)),q(),j)return p()}else m(y.split(b));if(f&&B>=f)return w=w.slice(0,f),p(!0)}}return p()}for(var C=a.indexOf(b,i),D=a.indexOf(c,i),E=new RegExp(h+h,"g");;)if(a[i]!==h)if(d&&0===y.length&&a.substr(i,u)===d){if(D===-1)return p();i=D+t,D=a.indexOf(c,i),C=a.indexOf(b,i)}else if(C!==-1&&(C<D||D===-1))y.push(a.substring(i,C)),i=C+s,C=a.indexOf(b,i);else{if(D===-1)break;if(y.push(a.substring(i,D)),o(D+t),v&&(q(),j))return p();if(f&&w.length>=f)return p(!0)}else{var F=i;for(i++;;){var F=a.indexOf(h,F+1);if(F===-1)return l||x.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:w.length,index:i}),n();if(F===r-1){var G=a.substring(i,F).replace(E,h);return n(G)}if(a[F+1]!==h){if(a[F+1]===b){y.push(a.substring(i,F).replace(E,h)),i=F+1+s,C=a.indexOf(b,i),D=a.indexOf(c,i);break}if(a.substr(F+1,t)===c){if(y.push(a.substring(i,F).replace(E,h)),o(F+1+t),C=a.indexOf(b,i),v&&(q(),j))return p();if(f&&w.length>=f)return p(!0);break}}else F++}}return n()},this.abort=function(){j=!0},this.getCharIndex=function(){return i}}function i(){var a=document.getElementsByTagName("script");return a.length?a[a.length-1].src:""}function j(){if(!y.WORKERS_SUPPORTED)return!1;if(!v&&null===y.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var a=y.SCRIPT_PATH||r;a+=(a.indexOf("?")!==-1?"&":"?")+"papaworker";var b=new s.Worker(a);return b.onmessage=k,b.id=x++,w[b.id]=b,b}function k(a){var b=a.data,c=w[b.workerId],d=!1;if(b.error)c.userError(b.error,b.file);else if(b.results&&b.results.data){var e=function(){d=!0,l(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},f={abort:e,pause:m,resume:m};if(q(c.userStep)){for(var g=0;g<b.results.data.length&&(c.userStep({data:[b.results.data[g]],errors:b.results.errors,meta:b.results.meta},f),!d);g++);delete b.results}else q(c.userChunk)&&(c.userChunk(b.results,f,b.file),delete b.results)}b.finished&&!d&&l(b.workerId,b.results)}function l(a,b){var c=w[a];q(c.userComplete)&&c.userComplete(b),c.terminate(),delete w[a]}function m(){throw"Not implemented."}function n(a){var b=a.data;if("undefined"==typeof y.WORKER_ID&&b&&(y.WORKER_ID=b.workerId),"string"==typeof b.input)s.postMessage({workerId:y.WORKER_ID,results:y.parse(b.input,b.config),finished:!0});else if(s.File&&b.input instanceof File||b.input instanceof Object){var c=y.parse(b.input,b.config);c&&s.postMessage({workerId:y.WORKER_ID,results:c,finished:!0})}}function o(a){if("object"!=typeof a)return a;var b=a instanceof Array?[]:{};for(var c in a)b[c]=o(a[c]);return b}function p(a,b){return function(){a.apply(b,arguments)}}function q(a){return"function"==typeof a}var r,s=function(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof s?s:{}}(),t=!s.document&&!!s.postMessage,u=t&&/(\?|&)papaworker(=|&|$)/.test(s.location.search),v=!1,w={},x=0,y={};if(y.parse=a,y.unparse=b,y.RECORD_SEP=String.fromCharCode(30),y.UNIT_SEP=String.fromCharCode(31),y.BYTE_ORDER_MARK="\ufeff",y.BAD_DELIMITERS=["\r","\n",'"',y.BYTE_ORDER_MARK],y.WORKERS_SUPPORTED=!t&&!!s.Worker,y.SCRIPT_PATH=null,y.LocalChunkSize=10485760,y.RemoteChunkSize=5242880,y.DefaultDelimiter=",",y.Parser=h,y.ParserHandle=g,y.NetworkStreamer=d,y.FileStreamer=e,y.StringStreamer=f,s.jQuery){var z=s.jQuery;z.fn.parse=function(a){function b(){if(0===f.length)return void(q(a.complete)&&a.complete());var b=f[0];if(q(a.before)){var e=a.before(b.file,b.inputElem);if("object"==typeof e){if("abort"===e.action)return void c("AbortError",b.file,b.inputElem,e.reason);if("skip"===e.action)return void d();"object"==typeof e.config&&(b.instanceConfig=z.extend(b.instanceConfig,e.config))}else if("skip"===e)return void d()}var g=b.instanceConfig.complete;b.instanceConfig.complete=function(a){q(g)&&g(a,b.file,b.inputElem),d()},y.parse(b.file,b.instanceConfig)}function c(b,c,d,e){q(a.error)&&a.error({name:b},c,d,e)}function d(){f.splice(0,1),b()}var e=a.config||{},f=[];return this.each(function(a){var b="INPUT"===z(this).prop("tagName").toUpperCase()&&"file"===z(this).attr("type").toLowerCase()&&s.FileReader;if(!b||!this.files||0===this.files.length)return!0;for(var c=0;c<this.files.length;c++)f.push({file:this.files[c],inputElem:this,instanceConfig:z.extend({},e)})}),b(),this}}return u?s.onmessage=n:y.WORKERS_SUPPORTED&&(r=i(),document.body?document.addEventListener("DOMContentLoaded",function(){v=!0},!0):v=!0),d.prototype=Object.create(c.prototype),d.prototype.constructor=d,e.prototype=Object.create(c.prototype),e.prototype.constructor=e,f.prototype=Object.create(f.prototype),f.prototype.constructor=f,y});


/*
 * ----
 * Charlotte.js
 * 
 * Open Source Web Scraping Library
 * ---
 */
class Charlotte{
    constructor(){
    }

    crawlTo(url){
        var p = new Promise(function(resolve, reject){
            var req = new XMLHttpRequest();
            req.addEventListener("load", function(){
                resolve(new Spider(this.response));
            });
            req.responseType = "document";
            req.open("GET", url);
            req.send();
        });
        return p;
    }

    static isValidURL(url){
        var pattern = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i; // fragment locater
        return pattern.test(url);
    }

    static isSameOrigin(url1, url2){
        return url1.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[0] == url2.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[0];
        return true;
    }
    /**
     * Performs data collection and exports data to file
     */
    static convert2JSON(as, data){
        switch(as ? as.toLowerCase() : "json"){
            case "csv":
                return Papa.unparse(data);
                break;
            case "xml":
                break;
            case "yaml":
            case "yml":
                break;
            case "json":
            default:
                return data.toString();
                break;
        }
    }
    /**
     * Map a website
     */
    mapSite(url, max){
        var that = this;
        var p = new Promise(function(resolve, reject){
            var result = [], queue = [];
            function queueHelper(){
                if(queue.length <= 0 || result.length == max){
                    resolve(result);
                }else{
                    var href = queue.splice(0,1);
                    that.crawlTo(href).then(function(spider){
                        var aarr = spider.doc.getElementsByTagName("a"), link;
                        for(var i = 0; i < aarr.length; i++){
                            link = aarr[i].href;
                            if(result.indexOf(link) == -1 && Charlotte.isValidURL(link) && Charlotte.isSameOrigin(link, url)){
                                queue.push(link);
                                if(result.length < max){
                                    result.push(link);
                                } else {
                                    resolve(result);
                                }
                            }
                        }
                        if (result.length <= max)
                            queueHelper()
                    });
                }
            }
            queue.push(url);
            queueHelper();
        })
        return p;
         
    }
}

class Spider{
    constructor(doc){
        this.doc = doc;
        this.web = []; // things collected by the spider
    }

    toCSV(){

    }

    capture(str){
        //console.log(str);
        //this.web.push({this.doc.querySelectorAll(str)})
        //var m = $(str);//.find('*').contents().filter(function () { return this.nodeType === 3; });
        //console.log(m);
        //return m[0];
        return this.doc.querySelectorAll(str)[0].textContent ;
        //return m;
    }
    /**
     * Finds an element and returns information(?) about it
     */
    querySelector(str){
        document.querySelector(str);
    }
}
if(typeof module !== 'undefined' && module.exports)
    module.exports = Charlotte;
//var spider = new Charlotte();
//console.log(spider);
    //spider.mapSite("http://www.wm.edu/", 500).then(function(res){ console.log( res ); });


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
 * StateManager.js
 * Sort of like a simplified version of REDUX/React's immutable state management system
 */
class StateManager{
    constructor(initialState = {}){
        this['[[state]]'] = {
            history : [],
            current : initialState
        };
        this.__onStateChange__ = [];
    }
    /**
     * Sets an immutable state
     * does a shallow merge though (might fix)
     */
    set state(arg){ 
        if(arg.constructor == Object){
            newState = Object.assign({}, this['[[state]]'].current); // change to deepAssign
            this['[[state]]'].history.push(this['[[state]]'].current);
            Object.assign(newState, arg); // change to deepAssign
            this['[[state]]'].current = newState;
            this.__onStateChange__.map((fn)=>{
                fn(this['[[state]]'].current);
            });
        }
    } 

    /**
     * Get the current state
     */
    get state(){
        return this['[[state]]'].current;
    }
    /**
     * When the state changes send out an event
     */
    register(fn){
        if(typeof fn == "function"){
            this.__onStateChange__.push(fn);
        }
    }
    /**
     * Performs a deep clone while performing a deep assign
     */
    static deepCloneAssign(target, ...sources){
        // clone objects, slice arrays, etc...
    }
}

if(typeof module !== 'undefined' && module.exports)
    module.exports = StateManager;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StateManager__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StateManager___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__StateManager__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Charlotte__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Charlotte___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Charlotte__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Module__);




var frame, popin;
var m = new __WEBPACK_IMPORTED_MODULE_2__Module___default.a();
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
        var module = new __WEBPACK_IMPORTED_MODULE_2__Module___default.a({
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

/***/ })
/******/ ]);