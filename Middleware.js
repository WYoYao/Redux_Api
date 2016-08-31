
let { createStore, applyMiddleware }=require('redux');

let {dispatch} = createStore;

function todos(state=[],action){
    switch (action.type){
        case 'add_todo':
            return state.concat(action.text);
        default:
            return state;
    }
}
//每个 middleware 接受 Store 的 dispatch 和 getState 函数作为命名参数
function logger({ getState }) {
    //并返回一个函数。  //并返回一个接收 action 的新函数
    return (next) => (action) => {

        console.log('will dispatch', action)

        // 调用 middleware 链中下一个 middleware 的 dispatch。
        let returnValue = next(action)

        console.log(returnValue);

        console.log('state after dispatch', getState())

        // 一般会是 action 本身，除非
        // 后面的 middleware 修改了它。
        return returnValue
    }
}

let createStoreWithMiddleware = applyMiddleware(logger)(createStore)

let store = createStoreWithMiddleware(todos, [ 'Use Redux' ])

store.dispatch({
    type: 'ADD_TODO',
    text: 'Understand one middleware'
})

store.dispatch({
    type: 'add_todo',
    text: 'Understand two middleware'
})


store.dispatch({
    type: 'add_todo',
    text: 'Understand three middleware'
})
