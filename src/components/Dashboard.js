import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecipeReviewCard from "./Recepiess";
import Recipies from "./Recipies";
function Dashboard() {
  const [recipes, setrecipes] = useState([]);
  const [obj, setobj] = useState({})
  const [type, settype] = useState("all");
  const [api, setapi] = useState(`https://api.edamam.com/api/recipes/v2?type=public&app_id=77097d92&app_key= 843b93c68c3de4282f841ab44079aa98`)
//   const [nextApi, setnextApi] = useState("")

  useEffect(() => {
    fetchApi();
  }, [type]);
  useEffect(() => {
    fetchApi();
  }, [api]);

  const fetchApi = async () => {
    console.log()
    fetch(`${api}&q=${type}`)
      .then((response) => response.json())
       .then((response) =>{ setrecipes(response.hits)
        setobj(response)
    //    console.log(response)
    })
      .catch((err) => console.error(err));
  };




  return (
    <>
      <div className="container d-flex">
        <form className="container my-3 " action="">
          <input
            className="form-control w-25 my-3"
            type="text"
            value={type}
            onChange={(e) => {
              settype(e.target.value);
            }}
            placeholder="Search recipi"
          />
          {/* <button className="btn btn-info">search</button> */}
        </form>

        <li className=" dropdown list-unstyled my-3 mx-3">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </a>
          <ul className="dropdown-menu">
            <li>
              <button
                onClick={() => {
                  settype("veg");
                }}
                className="dropdown-item"
              >
                Veg
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settype("chicken");
                }}
                className="dropdown-item"
              >
                NonVeg
              </button>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button
                onClick={() => {
                  settype("fast-food");
                }}
                className="dropdown-item"
              >
                Fast food
              </button>
            </li>
          </ul>
        </li>

        {/* ////jhjhhlhlhlh */}

        <li className=" dropdown list-unstyled my-3 mx-3">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Food
          </a>
          <ul className="dropdown-menu">
            <li>
              <button
                onClick={() => {
                  settype("paneer");
                }}
                className="dropdown-item"
              >
                paneer
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settype("burger");
                }}
                className="dropdown-item"
              >
                burger
              </button>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button
                onClick={() => {
                  settype("pizza");
                }}
                className="dropdown-item"
              >
                pizza
              </button>
            </li>
          </ul>
        </li>
      </div>

      <div className="container row mx-auto my-3">
      {/* <!-- Button trigger modal --> */}
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}
          
         
        {recipes.map((recipi, i) => {
            // console.log(recipi)
          return (
            // <Recipies
            //   key={i}
            //   name={recipi.recipe.label}
            //   img={recipi.recipe.image}
            //   ingredient={recipi.recipe.ingredients}
            //   recipe={recipi}
            // />
            <RecipeReviewCard
              key={i}
              name={recipi.recipe.label}
              img={recipi.recipe.image}
              ingredient={recipi.recipe.ingredients}
              recipe={recipi}
              calories={recipi.recipe.calories }
              cuisineType={recipi.recipe.cuisineType}
              url={recipi.recipe.url}
            />
          );
        })}
        <button onClick={()=>{setapi(obj._links.next.href); console.log('')}}>next</button>
      </div>
     
    </>
  );
}

export default Dashboard;
