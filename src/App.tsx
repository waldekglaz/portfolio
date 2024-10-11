import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, WelcomePage, RootLayout, Experience, Skills } from "./pages";

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
      {
        path: "/experience",
        element: <Experience />,
      },
      { path: "/skills", element: <Skills /> },
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
