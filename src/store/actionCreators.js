import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'
import axios from 'axios'
export const changeInputAction = (value) => ({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type:ADD_ITEM,
})

export const deleteItemAction = (index) => ({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type:GET_LIST,
    data
})

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://www.studyinghome.com/mock/5e5ca8a583482d5224c003dc/ssm/list').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
            
        })
    }
}

