import css from "./feed.scss";
import { useObserver } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { UserStoreContext, DogsStoreContext } from "../stores";
import CategoriesNav from "../components/CategoriesNav";
import TokenPersister from "../components/TokenPersister";
import { get } from "lodash";
import DogsView from "../components/DogsView";

const Feed = ({ currentCategory }) => {
  const UserStore = useContext(UserStoreContext);
  const DogsStore = useContext(DogsStoreContext);

  DogsStore.currentCategory = currentCategory;

  useEffect(() => {
    DogsStore.getList(UserStore.token);
  }, [currentCategory]);

  return useObserver(() => {
    return (
      <TokenPersister currentToken={UserStore.token}>
        <div className={css.FeedPage}>
          <header>
            <h1>
              The <span>IDDog</span>
            </h1>
          </header>

          <CategoriesNav currentCategory={DogsStore.currentCategory} />

          <DogsView list={DogsStore.list} isLoading={DogsStore.isLoading} />
        </div>
      </TokenPersister>
    );
  });
};
Feed.getInitialProps = req => {
  const currentCategory = get(req, "query.category", "husky");

  return {
    currentCategory
  };
};

export default Feed;
