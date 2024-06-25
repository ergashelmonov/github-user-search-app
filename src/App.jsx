import { useForm } from "react-hook-form";
import { createContext, useState } from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./style/main.css";
export const FormContext = createContext(null);
export const Status = createContext(null);

function App() {
  const [isValue, setIsvalue] = useState("octocat");
  const [status, setStatus] = useState(false);
  const { register, handleSubmit } = useForm();
  return (
    <FormContext.Provider
      value={{ isValue, setIsvalue, register, handleSubmit }}
    >
      <div className="wrapper w-full h-screen flex items-center justify-center px-5 bg-[#f6f8ff] dark:bg-[#141d2f]">
        <div className="w-[730px]">
          <Header />
          <Status.Provider value={{ status, setStatus }}>
            <Form />
            <Main />
          </Status.Provider>
        </div>
      </div>
    </FormContext.Provider>
  );
}

export default App;
