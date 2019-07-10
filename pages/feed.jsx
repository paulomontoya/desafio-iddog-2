import css from "./feed.scss";
import { useObserver } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { UserStoreContext, DogsStoreContext } from "../stores";
import CategoriesNav from "../components/CategoriesNav";
import TokenPersister from "../components/TokenPersister";
import { get } from "lodash";
import DogsView from "../components/DogsView";
import DogModal from "../components/DogModal";
import { Router } from "../routes";

const Feed = ({ currentCategory, selectedIndex }) => {
  const UserStore = useContext(UserStoreContext);
  const DogsStore = useContext(DogsStoreContext);

  DogsStore.currentCategory = currentCategory;

  useEffect(() => {
    console.log("useEffect current category");
    DogsStore.getList(UserStore.token);
  }, [currentCategory]);

  useEffect(() => {
    DogsStore.selectedIndex = selectedIndex;
  }, [selectedIndex]);

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

          <DogsView
            list={DogsStore.list}
            isLoading={DogsStore.isLoading}
            category={DogsStore.currentCategory}
            error={DogsStore.error}
          />
        </div>

        {DogsStore.list.length > 0 && (
          <DogModal
            imageURL={DogsStore.list[DogsStore.selectedIndex] || undefined}
            onClick={() => {
              Router.pushRoute(`/feed?category=${currentCategory}`);
            }}
          />
        )}
      </TokenPersister>
    );
  });
};
Feed.getInitialProps = req => {
  const currentCategory = get(req, "query.category", "husky");
  const selectedIndex = get(req, "query.id", false);

  return {
    currentCategory,
    selectedIndex
  };
};

export default Feed;
