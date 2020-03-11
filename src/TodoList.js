import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store'
import {changeInputAction,addItemAction,deleteItemAction,getListAction} from './store/actionCreators'
import axios from 'axios'
class TodoList extends Component {

    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <TodoListUI 
                inputValue= {this.state.inputValue}
                changeInputValue= {this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
         );
    }

    componentDidMount(){
        axios.get('https://www.studyinghome.com/mock/5e5ca8a583482d5224c003dc/ssm/list').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            store.dispatch(action)
        })
    }


    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)  
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;