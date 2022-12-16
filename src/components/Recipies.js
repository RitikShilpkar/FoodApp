import React from "react";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";
import Food from "./Food";

function Recipies({ name, img, ingredient }) {
  // const navigate = useNavigate();
  const conmpleteRecipe = (e) => {

  };
  return (
    <>
   
      <div className="card col-12 col-md-3 my-3">
        <div className="">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"></p>
            <button
              onClick={() => conmpleteRecipe(ingredient)}
              className="btn btn-primary"
              
            >
              Complete Recipe
            </button>
          </div>
        </div>

      </div>

      
    </>
  );
}

export default Recipies;
