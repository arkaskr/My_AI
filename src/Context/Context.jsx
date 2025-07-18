import { createContext, useState } from "react";
import main from "../config/ai";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompts, setRecentPrompts] = useState("");
  const [previousPromts, setPreviousPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setRecentPrompts(input)
    setInput("")
    setResultData("")
    setLoading(true)
    setShowResult(true)
    const response=await main(input)
    setResultData(response)
    setLoading(false)
  };

  const contextvalue = {
    previousPromts,
    setPreviousPrompts,
    onSent,
    recentPrompts,
    setRecentPrompts,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return(
  <Context.Provider value={contextvalue}>
    {props.children}
  </Context.Provider>
  );
};

export default ContextProvider;
