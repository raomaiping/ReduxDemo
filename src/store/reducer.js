const defaultState = {
    inputValue:'Write Someting',
    list:[
        '早上八点开晨会，分配今天的代码任务',
        '早九点和项目经理沟通会',
        '早上八点开晨会，分配今天的代码任务'
    ]
}

export default (state = defaultState,action)=>{
    console.log(state,action);
    //Reduce里只能接收state,不能改变state
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    
    return state
}