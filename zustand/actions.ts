//
//
//
//
//
//
//

import { SetType } from "./types";

//

//
export const actions = (set: SetType) => {
  return {
    methods: {
      setOpenCloseMenu: () => {
        set(({ menu }) => ({ menu: { ...menu, isOpen: !menu.isOpen } }));
      },
    },
  };
};

export interface ActionsTypes {
  methods: {
    setOpenCloseMenu: () => void;
  };
}
