import { observable } from "mobx";
import { createContext } from "react";
import axios from "axios";
import { Router } from "./routes";

const UserStore = observable({
  isLoading: false,
  email: "",
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
        UserStore.email = response.data.user.email;
        UserStore.token = response.data.user.token;
        UserStore.error = "";
        setTimeout(() => {
          // To animate dog icon
          UserStore.isLoading = false;
          Router.pushRoute("feed");
        }, 2000);
      })
      .catch(response => {
        UserStore.isLoading = false;
        UserStore.email = "";
        UserStore.token = "";
        UserStore.error = response.message;
      });
  }
});

export const UserStoreContext = createContext(UserStore);
