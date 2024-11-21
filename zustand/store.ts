//
//
//
//
import { create } from "zustand";

import { data, DataTypes } from "./data";
import { actions, ActionsTypes } from "./actions";
//
//
//
//
//

//
//
export type MainStoreTypes = DataTypes & ActionsTypes;
//
//

const useStore = create<MainStoreTypes>()((set) => ({
  ...data,
  ...actions(set),
}));

export default useStore;
