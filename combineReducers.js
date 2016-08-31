

let redux=require('redux');

function todos(state=[],action){
    switch (action.type){
        case 'add_todo':
            return state.concat(action.text);
        default:
            return state;
    }
}
console.log(123);

function counter(state=0,action){
    switch (action.type){
        case 'add':
            return ++state;
        case 'remove':
            return --state;
        default:
            return state;
    }
}

function counter1(state=0,action){
    switch (action.type){
        case 'add':
            return ++state;
        case 'remove':
            return --state;
        default:
            return state;
    }
}

let myCombineReducers=redux.combineReducers({
    todos,
    counter,
    counter1
})

let store=redux.createStore(myCombineReducers);

console.log(store.getState());

console.log(store.dispatch({
    type:'add',
    text:'new',
}))

console.log(store.getState());

