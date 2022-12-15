import { response } from "msw";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../api";
import { useTheme } from "../hooks/useTheme";
import { useToken } from "../hooks/useToken";
import styles from "./ScheduleForm.module.css";

const ScheduleForm = () => {
  const [dentistas, setDentistas] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [dentista, setDentista] = useState();
  const [paciente, setPaciente] = useState();
  const [dataHora, setDataHora] = useState();
  const { token, changeToken } = useToken();
  const { theme } = useTheme();
  const navigate = useNavigate();
 
  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api buscando TODOS os dentistas
    //e pacientes e carregar os dados em 2 estados diferentes
    fetch(`${apiUrl}/dentista`).then((response) => {
      response.json().then((data) => setDentistas(data));
    });
    fetch(`${apiUrl}/paciente`).then((response) => {
      response.json().then(
        // data => console.log(data)
        (data) => setPacientes(data.body)
      );
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(token !== null){
      const requestHeaders = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      };
      console.log(token)
      console.log(dentista)
      console.log(paciente)
  
      const requestBody = {
        paciente: {
          
          matricula: paciente
        },
        dentista: {
          
          matricula: dentista
        },
        dataHoraAgendamento: dataHora,
      };
      const requestConfig = {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(requestBody)
      };
  
      fetch(`${apiUrl}/consulta`, requestConfig).then((response) => {
        if (response.ok) {
          navigate("/home");
          alert("Consulta agendada ");
          
        } else {
          alert("parece que algo deu errado :(");
        }
      });
    }else{
      alert('Você precisa fazer login primeiro')
      navigate('/login')
    }
    

    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`text-center container ${theme}}`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select
                className="form-select"
                name="dentist"
                id="dentist"
                onChange={(event) => setDentista(event.target.value)}
              >
                {
                  /*Aqui deve ser feito um map para listar todos os dentistas*/
                  dentistas.map((dentista) => (
                    <option key={dentista.matricula} value={dentista.matricula}>
                      {`${dentista.nome} ${dentista.sobrenome}`}
                    </option>
                  ))
                }
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select
                className="form-select"
                name="patient"
                id="patient"
                onChange={(event) => setPaciente(event.target.value)}
              >
                {
                  /*Aqui deve ser feito um map para listar todos os pacientes*/
                  pacientes.map((paciente) => (
                    <option key={paciente.matricula} value={paciente.matricula}>
                      {`${paciente.nome} ${paciente.sobrenome}`}
                    </option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
                onChange={(event) => setDataHora(event.target.value)}
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button className={`btn btn-light ${styles.button}`} type="submit"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal">
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
