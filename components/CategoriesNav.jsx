import React from "react";
import css from "./CategoriesNav.scss";
import { Link } from "../routes";

const CategoriesNav = ({ currentCategory }) => {
  const categories = ["husky", "hound", "pug", "labrador"];

  return (
    <nav className={css.CategoriesNav}>
      {categories.map(category => {
        return (
          <Link href={`/feed?category=${category}`} key={category}>
            <a className={category === currentCategory ? css.LinkActive : ""}>
              {category}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export default CategoriesNav;
