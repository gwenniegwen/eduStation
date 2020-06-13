import React, { Fragment } from "react";

import Create from "./Annoucements/Create/create";
import PostsList from "./Annoucements/PostsLists/index";


const Home = () => {
  return (
    <Fragment>
      <Create />
      <PostsList />
      
      
    </Fragment>
  );
};

export default Home;
