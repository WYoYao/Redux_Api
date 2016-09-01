
let { createStore,combineReducers,dispatch }=require('redux');

let todosOne=(state={number:0},action)=>{
    switch (action.type){
        case 'add':
            let result=Object.assign({},state);
            result.number+=action.number;
            return result;
        default:
            return state;
    }
};

let Store = createStore(todosOne);
console.log('123',Store.getState());
//只要直接创建一个action 来调用dispatch 来执行方法
Store.dispatch({
    type:'add',
    number:10,
})
console.log('234',Store.getState());

//下面书写一个 action创建函数 来生成action,action创建函数 只是用来生成action
let createEvent=(number)=>{
    return {
        type:'add',
        number
    }
};

//这样调用的时候只需要调用createEvent 来生成一个对应的action,但是还是需要单独dispatch,我们可以将dispatch 也添加到对应的创建函数中
Store.dispatch(createEvent(3));

let superCreateEvent=(number)=>Store.dispatch(createEvent(number));

superCreateEvent(9);

console.log(Store.getState());