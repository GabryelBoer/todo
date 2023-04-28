import { useState, KeyboardEvent } from "react";
import * as C from "./styles";
import {BsFillPlusCircleFill} from 'react-icons/bs'

type Props = {
  onEnter: (taskName: string) => void;
};

const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText)
      setInputText('')
    }
  };

  return (
    <C.Container>
      <div className="image"><BsFillPlusCircleFill /></div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};

export default AddArea;
