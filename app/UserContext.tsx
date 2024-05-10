import { createContext, Dispatch, SetStateAction } from 'react';

export interface User {
  id:string;
}

export interface UserContextType {
  user: string;
  loading: boolean;
  rerenderFlag: boolean;
  userInfo: (userId:string) => void; 
  renderFlag: (render: boolean) => void;
}

const UserContext = createContext<UserContextType>({
  user: "",
  loading: false,
  rerenderFlag: false,
  userInfo: () => {},
  renderFlag: () => {},
});

export default UserContext;