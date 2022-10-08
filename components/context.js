import { createContext } from "react";
import { useContext } from "react";

const WorkContext = createContext();

export default WorkContext;

export function useWorkContext() {
  return useContext(WorkContext);
}
