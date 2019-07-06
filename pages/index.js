import LoadingSpinner from "../components/LoadingSpinner";
import HomeForm from "../components/HomeForm";
import css from "./index.scss";
import { useObserver } from "mobx-react-lite";
import { useContext } from "react";
import { UserStoreContext } from "../store";

const Index = () => {
  const UserStore = useContext(UserStoreContext);

  return useObserver(() => (
    <div className={css.IndexPage}>
      <header>
        <h1>
          The <span>IDDog</span>
        </h1>
      </header>
      {UserStore.isLoading ? (
        <LoadingSpinner />
      ) : (
        <HomeForm submitCallback={UserStore.login} />
      )}
    </div>
  ));
};

export default Index;
