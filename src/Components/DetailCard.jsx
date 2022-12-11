import { useEffect } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../api";
import { useState } from "react";


const DetailCard = () => {
  const [authToken, setAutoToken] = useState()
  const [dentista, setDentista] = useState([])
  const {id} = useParams()
  const Navigate = useNavigate()
  console.log(id)
  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api passando o 
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
    localStorage.setItem('autoToken','eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBcGkgREggRWNvbW1lcmNlIiwic3ViIjoiZGVudGlzdGFBZG1pbiIsImlhdCI6MTY3MDgwMjIwNywiZXhwIjoxNjcwODA1ODA3fQ.OhFXXcfNf3CJFJe4vB1mw4Tw3EuONabYLqrq3-EHMpQ')
    setAutoToken(localStorage.getItem('autoToken'))
    console.log(authToken)
    if(authToken === ""){
      fetch(`${apiUrl}/dentist/${id}`).then(
        response =>{
          response.json().then(
            data => setDentista(data)
          )
          
          console.log(response)
          
        }
      )
    }else{
      Navigate('/login')
      alert("Você precisa logar primeiro")
      
    }
   
  }, []);
  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      <h1>`Dentista ${}` </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {'Nome do Dentista'}</li>
              <li className="list-group-item">
                Sobrenome: {'Sobrenome do Dentista'}
              </li>
              <li className="list-group-item">
                Usuário: {'Nome de usuário do Dentista'}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
