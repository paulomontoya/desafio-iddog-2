import css from "./DogImage.scss";
import React, { useState } from "react";

const DogImage = ({ imageURL, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const className = `${css.DogImage} ${loaded ? css.ImageLoaded : ""}`;

  return (
    <div className={className} onClick={onClick}>
      <figure>
        <img src={imageURL} onLoad={() => setLoaded(true)} />
      </figure>
    </div>
  );
};

export default DogImage;
