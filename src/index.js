import React from "react";
import { createRoot } from 'react-dom/client';

import SingleComment from "./SingleComment";



const App = () => {

  return <div className="ui comments">
  <SingleComment />
  <SingleComment />
  <SingleComment />
  </div>;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);


