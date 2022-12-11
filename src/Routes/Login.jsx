import LoginForm from "../Components/LoginForm";
import { useTheme } from "../hooks/useTheme";

const Contact = () => {
  const { theme} = useTheme()
  return (
    <div className={theme}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Contact;
