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