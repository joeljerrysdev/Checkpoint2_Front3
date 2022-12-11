import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./hooks/useTheme";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Login from "./Routes/Login";

function App() {
  const appRouter = createBrowserRouter([
    { path: "", element: <Home /> },
    { path: "home", element: <Home /> },
    { path: "login", element: <Login /> },
    { path: "dentist/:id", element: <Detail/> }
    
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
}

export default App;
