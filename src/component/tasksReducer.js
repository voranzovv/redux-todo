import { ADD_TASK } from "./taskConstants";
const initialState = {
  data: [{ id: 1, task: "cleaning" }]
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, data:state.data.concat( action.payload) };
  }

  return state;
};

export default tasksReducer;
