import { observable } from "mobx";
import { createContext } from "react";
import axios from "axios";
import { Router } from "./routes";

const UserStore = observable({
  email: "",
  isLoading: false,
  error: "",
  token: "",

  login: email => {
    UserStore.email = email;
    UserStore.isLoading = true;

    const url = "https://api-iddog.idwall.co/signup";
    axios
      .post(url, {
        email
      })
      .then(response => {
        UserStore.isLoading = false;
        UserStore.email = response.data.user.email;
        UserStore.token = response.data.user.token;
        Router.pushRoute("feed");
        // TODO: CHANGE HREF
        // dispatch(push("/feed"));
      })
      .catch(response => {
        console.log("UserStore error", UserStore);
        UserStore.error = response;
      });
  }
});

export const UserStoreContext = createContext(UserStore);
