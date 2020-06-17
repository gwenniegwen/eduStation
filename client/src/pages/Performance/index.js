import React, { useReducer, useRef } from "react";
import AddEmoji from "../../components/Emoji/Emoji";

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
      <h1>Performance</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <table
          className="table table-bordered"
          style={{ marginLeft: 80, marginRight: 170, width: "80%" }}
        >
          <thead>
            <tr>
              <th scope="col"> </th>
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
              <th scope="row">List 1</th>
              <td>
                <AddEmoji onClick={(emoji) => alert(JSON.stringify(emoji))} />
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    let gradeBtn = document.getElementById("grade");
                    console.log("click");
                  }}
                  class="btn btn-info"
                  id="grade"
                ></button>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">List 2</th>
              <td>
                <input className="form-control" ref={inputRef} />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">List 3</th>
              <td>
                <input className="form-control" ref={inputRef} />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Start typing what you need to do..."
        />

        <button
          className="btn btn-success mt-3 mb-5"
          type="submit"
          i
          class="far fa-smile"
        >
          Add to List
        </button>
      </form>
      <h4 i class="fa fa-list-ul">
        >My Todo List:
      </h4>
      <ul className="list-group">
        {grades.map((grades, index) => (
          <li className="list-group-item" key={grades.id}>
            {grades.name}
            <button
              className="btn btn-danger ml-5"
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
