import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [todoTask, setTodoTask] = useState([]);
  const [doneTask, setDoneTask] = useState([]);
  const [newTask, setNewTask] = useState();
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        ></input>
        <button
          disabled={!newTask}
          type="reset"
          onClick={() => {
            setTodoTask([...todoTask, newTask]);
            setNewTask();
          }}
        >
          Add
        </button>
      </form>
      <ul
        onClick={(e) => {
          if (!e.target.value) return;
          const tmp = todoTask.filter((task) => {
            return task !== e.target.value;
          });
          setTodoTask([...tmp]);
          console.log(e.target.value);
          if (e.target.type !== "button")
            setDoneTask([...doneTask, e.target.value]);
        }}
      >
        <h3>TODO</h3>
        {todoTask.map((task) => {
          return ToDo({ title: [task], done: false });
        })}
      </ul>
      <ul
        onClick={(e) => {
          if (!e.target.value) return;
          const tmp = doneTask.filter((task) => {
            return task !== e.target.value;
          });
          setDoneTask([...tmp]);
          console.log(e.target.value);
          if (e.target.type !== "button")
            setTodoTask([...todoTask, e.target.value]);
        }}
      >
        <h3>DONE</h3>
        {doneTask.map((task) => {
          return ToDo({ title: [task], done: true });
        })}
      </ul>
    </div>
  );
}
export function ToDo(props) {
  return (
    <li key={props.title} value={props.title}>
      <input type="checkbox" value={props.title} checked={props.done} />
      <label value={props.title}>{props.title}</label>
      <button type="button" value={props.title}>
        X
      </button>
    </li>
  );
}
