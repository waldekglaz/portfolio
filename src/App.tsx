import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import useMenuAnimation from "./hooks/useMenuAnimation";
import { Menu } from "./components/Menu";
import { MenuToggle } from "./components/MenuToggle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  return (
    <div ref={scope}>
      <RouterProvider router={router}>
        <Menu />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </RouterProvider>
    </div>
  );
};

export default App;
