
let { createStore,combineReducers }=require('redux');

let todosOne=(state=0,action)=>{
    return ++state;
};

let todosTwo=(state=0,action)=>{
    switch (action.type){
        case 'add':
            return ++state;
        default:
            return state;
    }
};

let todosThree=(state=0,action)=>{
    switch (action.type){
        case 'add':{
            switch (action.index){
                case 1:
                    return Math.pow((state+2),2);
                default:
                    return state;
            }
            return state;
        }
        default:
            return state;
    }
};

//将多个Reducer 合并到一个Reducer 集合中
let myReducers=combineReducers({todosOne,todosTwo,todosThree});
var Store=createStore(myReducers);
console.log(Store.getState());

Store.dispatch({
    type:'add',
    index:1,
});

Store.dispatch({
    type:'add',
    index:1,
});

console.log(Store.getState());

