import React from "react";
import css from "./DogsView.scss";
import LoadingSpinner from "./LoadingSpinner";
import DogImage from "./DogImage";
import { Router } from "../routes";

const DogsView = ({ list, isLoading, category, error }) => {
  return isLoading ? (
    <LoadingSpinner style={{ marginTop: 40 }} />
  ) : (
    <div className={css.DogsView}>
      {error && <div className={css.DogsViewError}>{error}</div>}
      {list.map((item, index) => {
        return (
          <DogImage
            imageURL={item}
            key={index}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );

  function handleClick(index) {
    Router.pushRoute(`/feed?category=${category}&id=${index}`);
  }
};

export default DogsView;
