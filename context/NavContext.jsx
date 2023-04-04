import {
  // ReactNode,
  // SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
// type Props = {
//     children: React.ReactNode;
// //     props: object;
//   };

const Navbar = createContext();
const navs = ["", "about", "portfolio", "contact"];

// const navs: string[] = ["", "about", "portfolio", "contact"];
export function NavbarProvider({ children }) {
  const [currentNav, setNav] = useState("/");

  return (
    <Navbar.Provider value={[navs, currentNav, setNav]}>
      {children}
    </Navbar.Provider>
  );
}

export function useNavbarContext() {
  return useContext(Navbar);
}
