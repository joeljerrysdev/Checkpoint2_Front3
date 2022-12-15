import { useState } from "react";
import { createContext, useContext } from "react";

const TokenContext = createContext();

export function TokenProvider(props) {
    const [token, setToken] = useState('')
//   const themeLocalStorage = localStorage.getItem("theme");
//   const [theme, setTheme] = useState(
//     themeLocalStorage === null ? "dark" : themeLocalStorage
//   );
  function changeToken(tokenRecieved) {
    if (tokenRecieved !== token) {
      setToken(tokenRecieved);
      localStorage.setItem("token", tokenRecieved);
    }
  }
  function deleteToken(){
    localStorage.removeItem('token')
    setToken('')
  }

  return (
    <TokenContext.Provider value={{ token, changeToken, deleteToken }}>
      {props.children}
    </TokenContext.Provider>
  );
}
export function useToken() {

    const context = useContext(TokenContext)

    return context

}