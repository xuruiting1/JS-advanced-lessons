import {ConbineReducers, combineReducers} from 'redux';

let counter= (state=0,action)=>{
    switch(action.type){
        case 'Add':
            return state+action.value;
        case 'Dec':
            return state-1;
        default:
            return state;
    }
}
let initValue={
    list:[1,2,3]
}
let Todo= (state=initValue,action)=>{
    let newState=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'Add_item':
            //相当于深拷贝
            newState.list.push(action.value);
            // let obj=Object.assign({},state,{a:100})
            return newState;
        case 'Dec_item':
            newState.list.splice(action.value,1);
            return newState;
        default:
            return state;
    }
}
export default combineReducers({
    counter,Todo
})