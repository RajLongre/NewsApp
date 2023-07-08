import React from "react";

const Card = (props) => {
  // const [title,description,urlToImage,url]=props
  return (
    <>
      <div className="card col-sm-4 my-4">
        <img
          src={
            props.urlToImage
              ? props.urlToImage
              : "https://c.biztoc.com/210/og.png"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {props.title ? props.title.slice(0, 50) : ""}...
          </h5>
          <p className="card-text">
            {props.description ? props.description.slice(0, 600) : ""}...
          </p>
          <a href={props.url} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
