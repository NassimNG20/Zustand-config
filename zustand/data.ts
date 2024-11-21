//
//
//
//
//
//
//
//
export const data: DataTypes = {
  dataBase: [],
  app: {
    gap: 5,
  },
  menu: {
    width: 200,
    isOpen: false,
  },
};
export interface DataTypes {
  dataBase: [];
  app: {
    gap: number;
  };
  menu: {
    width: number;
    isOpen: boolean;
  };
}
