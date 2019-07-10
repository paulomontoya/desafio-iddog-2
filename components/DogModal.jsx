import css from "./DogModal.scss";
import DogImage from "./DogImage";
import { useTransition, animated } from "react-spring";
import React, { useState, useEffect } from "react";

const DogModal = ({ imageURL, onClick }) => {
  const transitions = useTransition(Boolean(imageURL), null, {
    from: { opacity: 0, scale: 0.9 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.9 },
    config: {
      mass: 1,
      tension: 500,
      friction: 30
    }
  });
  const [imageCached, setImageCached] = useState(imageURL);

  useEffect(() => {
    // To prevent image flicker when imageURL === false
    if (imageURL) {
      setImageCached(imageURL);
    }
  }, [imageURL]);

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              className={css.DogModal}
              style={{
                opacity: props.opacity,
                transform: props.scale.interpolate(scale => `scale(${scale})`)
              }}
              key={key}
              onClick={onClick}
            >
              <DogImage imageURL={imageCached} />
            </animated.div>
          )
      )}
    </>
  );
};

export default DogModal;
