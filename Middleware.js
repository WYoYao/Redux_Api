
let { createStore, applyMiddleware }=require('redux');


function todos(state=[],action){
    switch (action.type){
        case 'add_todo':
            return state.concat(action.text);
        default:
            return state;
    }
}

//每个 middleware 接受 Store 的 dispatch 和 getState 函数作为命名参数
function logger({ dispatch,getState }) {

    //这个时候传入的参数有两个 {getState,dispatch}
    console.log(arguments);
    //并返回一个函数。  //并返回一个接收 action 的新函数
    return (next) => (action) => {
        //这个地方的next 可以执行类似dispatch 的功能，但是不能使用最开始方法中的传入的dispatch 这样会出现死循环
        console.log('will dispatch', action)

        // 调用 middleware 链中下一个 middleware 的 dispatch。
        let returnValue = next(action)

        console.log(returnValue);

        console.log('state after dispatch', getState())

        // 一般会是 action 本身，除非
        // 后面的 middleware 修改了它。依旧沿用的dispatch 的方法然会这个执行的参数，从而使加完middleware 后还是和之前一样。
        return returnValue
    }
}
//这个地方执行的时候先将刚才创建的logger 方法传入进入，然后返回的方法将create redux 的createStore 当作参数传入
let createStoreWithMiddleware = applyMiddleware(logger)(createStore)
//通过创建的 中间的createStoreWithMiddleware 来创建Store
let store = createStoreWithMiddleware(todos, [ 'Use Redux' ])
//这个时候在将store patch 的时候都将经过刚才我们创建的middleware 附加的方法里面
store.dispatch({
    type: 'ADD_TODO',
    text: 'Understand one middleware'
})

