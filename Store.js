
let { createStore }=require('redux');

function todos(state=[],action){
    switch (action.type){
        case 'add_todo':
            return state.concat(action.text);
        default:
            return state;
    }
}

let Store=createStore(todos,['Use Redux']);

let newValue=Store.getState();
function handleChange() {
    let oldValue=newValue;
    newValue=Store.getState();
    if(oldValue!==newValue){
        console.log('value is changed from'+ oldValue + 'to' + newValue);
    }
}

let unsubscribe = Store.subscribe(handleChange);

function Add_todu(text) {
    return{
        type:'add_todo',
        text
    }
}

console.log(Store);

// Store.dispatch(Add_todu('once'));
// Store.dispatch(Add_todu('twice'));
//
// console.log(unsubscribe);
// console.log(unsubscribe());
//
// Store.dispatch(Add_todu('three'));
// Store.dispatch(Add_todu('four'));