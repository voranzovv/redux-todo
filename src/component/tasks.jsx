import React from "react";
import { connect } from "react-redux";
import { addTask } from "./tasksAction";
const mapState = state => ({
  data: state.data
});

const actions = {
  addTask
};

const Tasks = ({ data, addTask }) => {
  const addData = () => {
    addTask({ id: Math.random(), task: "hello" });
    console.log("wwe", data);
  };

  return (
    <div>
      <input type="text" />
      <input type="button" value="Add" onClick={addData} />
      {data.map(d => {
        return <li key={d.id}>{d.id}</li>;
      })}
    </div>
  );
};

export default connect(mapState, actions)(Tasks);
