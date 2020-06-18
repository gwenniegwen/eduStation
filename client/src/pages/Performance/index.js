import React, { useReducer, useRef } from "react";
import AddEmoji from "../../components/Emoji/Emoji";
import "./style.css"
import "../Calendar/style.css"
// import Emoji from "react-emoji-render";

function Performance() {
  const inputRef = useRef();
  const [grades, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length * Math.random(),
            name: action.name,
          },
        ];
      case "remove":
        return state.filter((_, index) => {
          return index !== action.index;
        });
      default:
        return state;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  };

  return (
    <div className="container text-center">
      <div>
        <h1>Performance</h1>
        <h2>in this week!</h2>
        </div>

      
        <table
          className="table table-bordered"
          style={{ marginLeft: 80, marginRight: 170, width: "80%" }}
        >
          <thead>
            <tr>
              <th scope="col" style={{ width: 150 }}>
                Monday
              </th>
              <th scope="col" style={{ width: 150 }}>
                Tuesday
              </th>
              <th scope="col" style={{ width: 150 }}>
                Wednesday
              </th>
              <th scope="col" style={{ width: 150 }}>
                Thursday
              </th>
              <th scope="col" style={{ width: 150 }}>
                Friday
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th scope="row"></th> */}
              <td>
                <AddEmoji 
                class="btn btn-info"
                onClick={(emoji) => alert(JSON.stringify(emoji))} />
              </td>
              <td>
              <AddEmoji 
                class="btn btn-info"
                onClick={(emoji) => alert(JSON.stringify(emoji))} />
              </td>
              <td>
              <AddEmoji 
                class="btn btn-info"
                onClick={(emoji) => alert(JSON.stringify(emoji))} />
              </td>
              <td>
              <AddEmoji 
                class="btn btn-info"
                onClick={(emoji) => alert(JSON.stringify(emoji))} />
              </td>
              <td>
              <AddEmoji 
                class="btn btn-info"
                onClick={(emoji) => alert(JSON.stringify(emoji))} />
              </td>
            </tr>
            
          </tbody>
        </table>

        <div>
          <h2></h2>
        </div>
        <form className="form-group" 
        style={{ marginLeft: 80, marginRight: 170, width: "80%" }}
        onSubmit={handleSubmit}>
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Start typing what you need to do!"
        />

        <button
          // className="btn btn-success mt-3 mb-5"
          className="btn btn-outline-light justify-content-md-center addEventButton"
          type="submit"
        >
          Add to List
        </button>
      </form>
      <h4>
          My Todo List:
      </h4>
      <ul className="list-group">
        {grades.map((grades, index) => (
          <li className="list-group-item"
          style={{ marginLeft: 80, marginRight: 170, width: "80%" }}
          key={grades.id}>
            {grades.name}
            <button
              className="btn btn-outline-light justify-content-md-center addEventButton"
              onClick={() => dispatch({ type: "remove", index })}
            >
              X Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Performance;
