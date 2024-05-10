/* import { useState } from "react";
import UserContext, { User } from "./app/UserContext";
import Login from "./app/login/page";
import NavBar from "./app/components/NavBar";
import Header from "./app/components/Header";

export function WrapperComponent() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [rerenderFlag, setRerenderFlag] = useState<boolean>(false); 

  const userInfo = (info: User) => {
    console.log("Setting user info:", info);
    setUser(info);
  };  

  const renderFlag = (render: boolean) => {
    console.log("Setting render flag:", render);
    setRerenderFlag(render);
  };

  return (
    <UserContext.Provider value={{ user, renderFlag, rerenderFlag, userInfo, loading }}>
        <Login />
        <Header/>
    </UserContext.Provider>
  );
}
 */