import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import { MainLayout } from "./Components/MainLayout";

import { ThemeProvider } from "./hooks/useTheme";
import { TokenProvider } from "./hooks/useToken";
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
    <TokenProvider>
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
    </TokenProvider>
  );
}

export default App;
