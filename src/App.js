import Form from './components/Print.jsx';
import { useReducer, useMemo } from "react";
import { formReducer, initialFormState } from "./reducers/formReducer";
import { formContext } from "./contexts/formContext";
import "./App.css"
function App() {
  const [form, formDispatch] = useReducer(formReducer, initialFormState);
  const formValue = useMemo(() => ({ form, formDispatch }), [form, formDispatch]);

  return (
    <formContext.Provider value={formValue}>
      <div>
        <Form />
      </div>
    </formContext.Provider>
  );
}

export default App;
