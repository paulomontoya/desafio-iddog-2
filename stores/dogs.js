import { observable } from "mobx";
import axios from "axios";

export const DogsStore = observable({
  isLoading: false,
  error: "",
  currentCategory: "",
  list: [],
  selectedIndex: false,

  getList: token => {
    const category = DogsStore.currentCategory;
    if (!category) {
      DogsStore.list = [];
      DogsStore.error = "No category specified";
      return;
    }

    DogsStore.isLoading = true;
    const url = "https://api-iddog.idwall.co/feed";
    axios
      .get(url, {
        headers: {
          Authorization: token
        },
        params: {
          category
        }
      })
      .then(response => {
        DogsStore.isLoading = false;
        DogsStore.list = response.data.list;
      })
      .catch(response => {
        DogsStore.isLoading = false;
        DogsStore.list = [];
        DogsStore.error = response.message;
      });
  }
});
