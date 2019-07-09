import { observable } from "mobx";
import axios from "axios";
import { Router } from "../routes";

export const DogsStore = observable({
  isLoading: false,
  error: "",
  currentCategory: ""
});
