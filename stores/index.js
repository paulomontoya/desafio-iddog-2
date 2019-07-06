import { UserStore } from "./user";
import { DogsStore } from "./dogs";

import { createContext } from "react";

export const UserStoreContext = createContext(UserStore);
export const DogsStoreContext = createContext(DogsStore);
