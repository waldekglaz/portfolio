import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import RootLayout from "./pages/RootLayout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
