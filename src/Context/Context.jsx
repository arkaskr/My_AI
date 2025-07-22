import { createContext, useState } from "react";
import { marked } from "marked";
import main from "../config/ai";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompts, setRecentPrompts] = useState("");
  const [previousPromts, setPreviousPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 10 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setResultData("");
    setInput("");
    setRecentPrompts("");
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let response;

    if (prompt !== undefined) {
      response = await main(prompt);
      setRecentPrompts(prompt);
    } else {
      setInput("");
      setPreviousPrompts((prev) => [...prev, input]);
      setRecentPrompts(input);
      response = await main(input);
    }

    const htmlFormatted = marked.parse(response);

    const words = htmlFormatted.split(" ");
    for (let i = 0; i < words.length; i++) {
      delayPara(i, words[i] + " ");
    }

    setLoading(false);
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
    newChat,
  };

  return (
    <Context.Provider value={contextvalue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
