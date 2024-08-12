import {
  createContext,
  useContext,
  useState,
} from "react";

const NavbarContext = createContext();
const navs = ["", "about", "portfolio", "contact"];

export function NavbarProvider({ children }) {
  const [currentNav, setNav] = useState("/");

  return (
    <NavbarContext.Provider value={[navs, currentNav, setNav]}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbarContext() {
  return useContext(NavbarContext);
}
