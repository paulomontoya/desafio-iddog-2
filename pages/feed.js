import css from "./feed.scss";
import { useObserver } from "mobx-react-lite";
import { useContext } from "react";
import { UserStoreContext, DogsStoreContext } from "../stores";
import Navigation from "../components/CategoriesNav";
import TokenPersister from "../components/TokenPersister";

const Feed = () => {
  const UserStore = useContext(UserStoreContext);
  const DogsStore = useContext(DogsStoreContext);

  return useObserver(() => (
    <TokenPersister currentToken={UserStore.token}>
      <div className={css.FeedPage}>
        <header>
          <h1>
            The <span>IDDog</span>
          </h1>
        </header>

        <Navigation />
      </div>
    </TokenPersister>
  ));
};

export default Feed;
