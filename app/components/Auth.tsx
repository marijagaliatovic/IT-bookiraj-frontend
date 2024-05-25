/* import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'; 

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rerenderFlag, setRerenderFlag] = useState(false); 

  useEffect(() => {
    checkAuthentication();
  },);

  
  const checkAuthentication = async () => {
    try {
      console.log("Auth")
      const response = await axios({
          method: 'get',
          url: 'http://localhost:8080/login/status',
          responseType: 'json',
          withCredentials: true,
          headers: {
              'Accept': 'application/json'
            },
      })
      if(response.data.user != user ){
        setUser(response.data.user)
        setRerenderFlag(true)
      }
      else{
        setRerenderFlag(false)
      }
        

    } catch (error) {
      // If the server responds with an error or the user is not authenticated, set user to null
      setUser(null);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };
  return {user, loading , rerenderFlag };
}
 */