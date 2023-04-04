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

const Context = createContext();

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  //   const [theme, setTheme] = useState("light");
  return (
    <Context.Provider value={[darkTheme, setDarkTheme]}>
      {children}
    </Context.Provider>
  );
}

export function useThemeContext() {
  return useContext(Context);
}
