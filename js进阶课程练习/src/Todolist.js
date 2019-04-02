import React, { Component } from 'react';
import store from './store';
class Todolist extends Component {
    constructor(){
        super();
        this.state={
            list:store.getState().Todo.list
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().Todo.list
            })
        })
    }
    handleAdd=(e)=>{
        if(e.keyCode===13){
            store.dispatch({
                type:'Add_item',
                value:e.target.value
            });
            e.target.value='';  
        }
        
    }
    handleDel=(i)=>{
        console.log(i);
        store.dispatch({type:'Dec_item',value:i});
       
    }
    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleAdd}/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index} style={{width:'200px'}}>
                                {item}
                                <button onClick={()=>{this.handleDel(index)}} style={{width:'50px',height:'30px'}} value="删除">删除</button>
                            </li>))
                        
                    }
                </ul>
            </div>
        );
    }
}
export default Todolist;
