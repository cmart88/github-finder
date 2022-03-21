import { createContext, useReducer } from "react";
import alertReducer from "./alertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ childern }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  return (
    <AlertContext.Provider value={{ alert: state }}>
      {childern}
    </AlertContext.Provider>
  );
};

export default AlertContext;
