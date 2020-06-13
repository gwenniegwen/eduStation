import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_POST,
  // REMOVE_POST,
  UPDATE_POSTS,
  ADD_POST,
  
  
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_POST:
    return {
      ...state,
      currentPosts: action.posts,
      
    };

  case UPDATE_POSTS:
    return {
      ...state,
      posts: [...action.posts],
     
    };

  case ADD_POST:
    return {
      ...state,
      posts: [action.post, ...state.posts],
      
    };

  // case REMOVE_POST:
  //   return {
  //     ...state,
  //     posts: state.posts.filter((post) => {
  //       return post._id !== action._id; 
  //     })
  //   };

  
  

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPosts: {
      _id: 0,
      content: " ",
      
    }

  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
