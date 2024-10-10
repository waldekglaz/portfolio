import { useState } from "react";
// import { Menu } from "../../components/Menu/Menu";
// import { MenuToggle } from "../../components/MenuToggle/MenuToggle";
import useMenuAnimation from "../../hooks/useMenuAnimation";
import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";
import { Menu, MenuToggle } from "../../components";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope} className={styles.container}>
      <Menu />
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      <main>
        <Outlet context={setIsOpen} />
      </main>
    </div>
  );
};

export default RootLayout;
