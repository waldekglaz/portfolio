import { useState } from "react";
import { Menu } from "../components/Menu";
import { MenuToggle } from "../components/MenuToggle";
import useMenuAnimation from "../hooks/useMenuAnimation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope}>
      <Menu />
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      <main>
        <Outlet context={setIsOpen} />
      </main>
    </div>
  );
};

export default RootLayout;
