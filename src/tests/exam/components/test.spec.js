import { render, screen } from "../../test-utils"
import Login from '../../../Routes/Login';
import ScheduleForm from "../../../Components/ScheduleForm";
import Navbar from "../../../Components/Navbar";
import Home from "../../../Routes/Home";


test('Teste tela login form', () => {
  render(<Login />)
  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('Teste tela Navbar', () => {
  render(<Navbar />)
  expect(screen.getByText('DH Odonto')).toBeInTheDocument();
});

test('Teste do componente ScheduleForm', () => {
  render(<ScheduleForm />)
  expect(screen.getByText('Dentist')).toBeInTheDocument();
});

test('Teste do componente Home', () => {
  render(<Home />)
  expect(screen.getByText('HOME')).toBeInTheDocument();
});
test('Teste do componente Navbar', () => {
  render(<Navbar />)
  expect(screen.getByText('Login')).toBeInTheDocument();
});