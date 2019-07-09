import css from "./DogsView.scss";
import LoadingSpinner from "./LoadingSpinner";
import DogImage from "./DogImage";

const DogsView = ({ list, isLoading }) => {
  return isLoading ? (
    <LoadingSpinner style={{ marginTop: 40 }} />
  ) : (
    <div className={css.DogsView}>
      {list.map((item, index) => {
        return <DogImage imageURL={item} key={index} />;
      })}
    </div>
  );

  function handleImageLoad(event) {}
};

export default DogsView;
