import { createContext,useState,useEffect } from "react";

export const AuthContext=createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))|| null);
  
    const login = () => {
        setCurrentUser({id: 1,
            name:"Anshul Sharma",
            profilePic:"https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=600"
        })
    };
  
    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);
  
    return (
      <AuthContext.Provider value={{ currentUser,login }}>
        {children}
      </AuthContext.Provider>
    );
  };