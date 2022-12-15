import { useState } from "react";
import { createContext, useContext } from "react";

const TokenContext = createContext();

export function TokenProvider(props) {
  const tokenLocalStorage = localStorage.getItem('token')
    const [token, setToken] = useState(tokenLocalStorage)
//   const themeLocalStorage = localStorage.getItem("theme");
//   const [theme, setTheme] = useState(
//     themeLocalStorage === null ? "dark" : themeLocalStorage
//   );
  function changeToken(tokenRecieved) {
    if (tokenRecieved !== token) {
      localStorage.setItem("token", tokenRecieved);
      setToken(tokenRecieved);
    }
  }
  function deleteToken(){
    localStorage.removeItem('token')
    setToken(localStorage.getItem('token'))
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