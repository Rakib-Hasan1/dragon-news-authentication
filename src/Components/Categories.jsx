import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <>
      <h2 className="font-semibold text-xl text-accent-content">
        All Categories
      </h2>

      <div className="grid grid-cols-1 gap-2 mt-5">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className={
              "bg-base-100 font-medium text-xl pl-10 py-3 rounded-md text-accent hover:bg-base-300 hover:text-black hover:font-semibold"
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Categories;
