import { createContext, useContext } from "react";

const formContext = createContext(null);
const useFormContext = () => useContext(formContext);

export { useFormContext, formContext };