import { useContext, useEffect } from "react";
import { UserStoreContext } from "../stores";
import { Router } from "../routes";
import LoadingSpinner from "./LoadingSpinner";

const TokenPersister = ({ children, currentToken }) => {
  const UserStore = useContext(UserStoreContext);

  useEffect(() => {
    if (currentToken) {
      window.localStorage.setItem("di-token", UserStore.token);
    }
    UserStore.token = window.localStorage.getItem("di-token");
    if (!UserStore.token) {
      Router.pushRoute("/");
    }
  }, []);

  return UserStore.token ? (
    children
  ) : (
    <LoadingSpinner
      style={{
        margin: "50px auto"
      }}
    />
  );
};

export default TokenPersister;
