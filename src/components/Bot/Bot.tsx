import { BotProps } from "../../utils/interfaces";
import "./index.css";
import { useNavigate } from "react-router-dom";

export const Bot = ({ name }: BotProps) => {
  let navigate = useNavigate();

  return (
    <div
      id="bot"
      onClick={() => {
        navigate("/home/" + name.toLowerCase());
      }}
      className="w-[300px] flex justify-center items-center text-white text-lg font-semibold p-3 rounded-lg h-[400px]"
    >
      Bot {name}
    </div>
  );
};
