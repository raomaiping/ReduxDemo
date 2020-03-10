import React, { Component } from 'react';
import {Input , Button ,List} from 'antd'
import 'antd/dist/antd.css' 

const data = [
    '早上八点开晨会，分配今天的代码任务',
    '早九点和项目经理沟通会',
    '早上八点开晨会，分配今天的代码任务'
]
class TodoList extends Component {

    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder='Write Someting' 
                        style={{width:'250px',marginRight:'10px'}}
                    />
                    <Button type='primary'>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
         );
    }
}
 
export default TodoList;