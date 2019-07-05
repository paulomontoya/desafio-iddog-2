import HomeForm from "../components/HomeForm";
import css from "./index.scss";

const Index = () => (
  <div className={css.IndexPage}>
    <header>
      <h1>
        The <span>IDDog</span>
      </h1>
    </header>
    <HomeForm />
  </div>
);

export default Index;
