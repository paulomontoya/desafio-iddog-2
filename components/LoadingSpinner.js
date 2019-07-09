import css from "./LoadingSpinner.scss";

const LoadingSpinner = props => (
  <div className={css.LoadingSpinner} style={props.style} />
);

export default LoadingSpinner;
