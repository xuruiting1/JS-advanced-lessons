import React, { Component } from 'react';
import store from './store';
// console.log(store.getState())
//store 连接action和Reducer的一个对象
//action 是一个对象，描述要做的内容，描述state的变化
//Reducer 定义了如何响应action描述的state的变化。并发送

class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action = {type:'Add',value:10}
        store.dispatch(action);
        // console.log(store.getState());
    }
    handleDec=()=>{
        let action = {type:'Dec'}
        store.dispatch(action);
        // console.log(store.getState());
    }
    handleodd=()=>{

    }
    handleasync=()=>{
        
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span id="value">{this.state.num}</span> times
                    <button id="increment" onClick={this.handleAdd}>+</button>
                    <button id="decrement" onClick={this.handleDec}>-</button>
                    <button id="incrementIfOdd" onClick={this.handleodd}>Increment if odd</button>
                    <button id="incrementAsync" onClick={this.handleasync}>Increment async</button>
                </p>
            </div>
        );
    }
}

export default Counter;
