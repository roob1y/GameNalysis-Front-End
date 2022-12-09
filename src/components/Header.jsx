import { useState, useRef } from "react";
import { Burger, Menu } from "../components";
import { useOnClickOutside } from "../hooks";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <header ref={node}>
      <h1>GameNalysis</h1>
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <Menu open={open} setOpen={setOpen} id={menuId} />
    </header>
  );
};

export default Header;
