import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import { MainLayout } from "./Components/MainLayout";

import { ThemeProvider } from "./hooks/useTheme";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Login from "./Routes/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "login", element: <LoginForm /> },
        { path: "dentista/:id", element: <Detail /> },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
}

export default App;
