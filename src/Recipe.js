import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Mymodal from "./Mymodal";

export default function Recipe(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="col-sm-6 col-lg-3 mt-5">
      <div className="card h-100" style={{ width: "19rem" }}>
        <img src={props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Calories : {Math.ceil(props.calories)} </p>
          <button
            className="btn btn-primary"
            onClick={() => setModalShow(true)}
          >
            More...
          </button>
        </div>
      </div>
      <Mymodal
        show={modalShow}
        title={props.title}
        imgUrl={props.imgUrl}
        calories={props.calories}
        ingredients={props.ingredients}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
