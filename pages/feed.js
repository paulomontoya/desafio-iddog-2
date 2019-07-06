import css from "./feed.scss";
import { useObserver } from "mobx-react-lite";
import { useContext } from "react";
import { UserStoreContext } from "../store";

const Feed = () => {
  const UserStore = useContext(UserStoreContext);

  return useObserver(() => (
    <div className={css.FeedPage}>{UserStore.token}</div>
  ));
};

export default Feed;
