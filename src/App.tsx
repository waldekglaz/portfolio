import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, WelcomePage, RootLayout } from "./pages";

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
        element: <About />,
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
