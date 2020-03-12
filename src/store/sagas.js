import {takeEvery,put} from 'redux-saga/effects'
import {GET_MY_LIST} from './actionTypes'
import {getListAction} from './actionCreators'
import axios from 'axios'
//generator
function* mySaga(){
    yield takeEvery(GET_MY_LIST,getList)
}

function* getList(){
    // axios.get('https://www.studyinghome.com/mock/5e5ca8a583482d5224c003dc/ssm/list').then((res)=>{
    //     const data = res.data
    //     const action = getListAction(data)
    //     put(action)  
    // })
    const res = yield axios.get('https://www.studyinghome.com/mock/5e5ca8a583482d5224c003dc/ssm/list')
    const action = getListAction(res.data)
    yield put(action)
    
}

export default mySaga