import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'

const defaultState = {
    inputValue:'Write Someting',
    list:[
        '早上八点开晨会，分配今天的代码任务',
        '早九点和项目经理沟通会',
        '早上八点开晨会，分配今天的代码任务'
    ]
}

export default (state = defaultState,action)=>{
    //Reduce里只能接收state,不能改变state
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    
    return state
}