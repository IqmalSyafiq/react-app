import React from "react";
import image001 from "./images/image-001.jpg"

const SingleComment = ()=>{
    return  <div className="comment">
    <a href="/" className="avatar">
      <img src={image001}  alt="profile" />
    </a>
    <div className="content">
      <a href="/" className="author">
        Sarah
      </a>
      <div className="metadata">
        <span className="date">
          Today at 5:00PM
        </span>
      </div>
      <div className="text">
        it's amazing
      </div>
    </div>
  </div>
}

export default SingleComment;