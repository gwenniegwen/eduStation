// import React from "react";
// import Comment from "../components/Todo/CommentForm";

// class Performance extends React.Component {

//   render() {

//     return (
//       <div className='main-wrapper'>
//         <div className='main'>
//           <div className='copy-container'>
//             <h1>Performance.</h1>
//             <h2>From your teacher!</h2>
//           </div>

//           <div className='contact-container'>
//             <h3>Comment</h3>
//             <Comment />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Performance;

import React, { useReducer, useRef } from "react";
import Emoji from "react-emoji-render";

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
            /*need to ask TA*/
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
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <table className="table table-bordered" style={{width:100, marginLeft:170}} >
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">GRADE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <input className="form-control" ref={inputRef} />
              <td>
                <input className="form-control" ref={inputRef} />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
              <button type="button" class="btn btn-info"></button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td></td>
              <td></td>
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
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Start typing what you need to do..."
        />
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Start typing what you need to do..."
        />
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Start typing what you need to do..."
        />
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Start typing what you need to do..."
        />
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Start typing what you need to do..."
        />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Add to List
        </button>
      </form>
      <h4 i class="fa fa-list-ul">>My Todo List:</h4>
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
