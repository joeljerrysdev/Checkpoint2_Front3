import { useEffect } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../api";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const DetailCard = () => {
  const { theme } = useTheme();
  const [dentista, setDentista] = useState([]);
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api passando o
    //id do dentista que está vindo do react-router e carregar os dados em algum estado

    fetch(`${apiUrl}/dentista?matricula=${id}`).then((response) => {
      response.json().then((data) => setDentista(data));

      console.log(response);
    });
  }, []);
  console.log(dentista);
  return (
    //As instruções que estão com {''} precisam ser
    //substituídas com as informações que vem da api
    <>
      <h1>{`Dentista ${dentista.nome}`}</h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div className={`card-body row ${theme}`}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {`${dentista.nome}`}</li>
              <li className="list-group-item">
                Sobrenome: {`${dentista.sobrenome}`}
              </li>
              <li className="list-group-item">Matricula: {`${dentista.matricula}`}</li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn  btn-${theme} ${styles.button}`}
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
