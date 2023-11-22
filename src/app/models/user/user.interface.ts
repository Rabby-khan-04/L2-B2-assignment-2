// FullName Interface
export type TFullName = {
  firstName: string;
  lastName: string;
};

// Address Interface
export type TAddress = {
  street: string;
  city: string;
  country: string;
};

// Order Interface
export type TOrder = {
  productName: string;
  price: number;
  quantity: number;
};

// User Interface
export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive?: boolean;
  hobbies: string[];
  address: TAddress;
  orders?: TOrder[];
};
