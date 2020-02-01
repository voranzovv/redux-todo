import { ADD_TASK } from './taskConstants';
export const addTask=(data)=>{
    return{
        type:ADD_TASK,
        payload:data
    }
}