import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useTheme } from "../hooks/useTheme";
import { apiUrl } from "../api";
import { useToken } from "../hooks/useToken";




const Home = () => {
  const {token} = useToken()
  console.log(token)
  const { theme} = useTheme()
  const [dentistas, setDentistas]=useState([])
  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
    fetch(`${apiUrl}/dentista`).then(
      response =>{
        response.json().then(
          data => setDentistas(data)
          
        )
        
      }
    )

  }, []);
  
  return (
    
    <div className={theme} >
      
      <h1>Home</h1>
      <div className="card-grid container">
        {
          dentistas.map(
            Component =>{
              return(
                <Card 
                item={Component}
                />
              )
            }
          )
        
        }
      </div>
    </div>
  );
};

export default Home;
