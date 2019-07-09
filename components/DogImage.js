import css from "./DogImage.scss";
import { useState } from "react";

const DogImage = ({ imageURL }) => {
  const [loaded, setLoaded] = useState(false);
  const className = `${css.DogImage} ${loaded ? css.ImageLoaded : ""}`;

  return (
    <div className={className}>
      <figure>
        <img src={imageURL} onLoad={() => setLoaded(true)} />
      </figure>
    </div>
  );
};

export default DogImage;
