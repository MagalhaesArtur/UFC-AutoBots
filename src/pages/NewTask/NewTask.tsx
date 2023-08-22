import { CircularProgress, TextField } from "@mui/material";
import { BotProps } from "../../utils/interfaces";
import { FormEvent, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const NewTask = ({ name }: BotProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

  const [orgao, setOrgao] = useState("");

  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function handleSubmitform(event: FormEvent) {
    if (email == "" || password == "") {
    } else {
      event.preventDefault();
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="max-w-[95%] px-8 py-3  h-full  justify-center"
    >
      <div className="flex  flex-col justify-center">
        <span className="text-white text-4xl  font-semibold">UFC AutoBots</span>
        <span className="text-white mt-10 text-2xl font-semibold">
          <h1>
            Bot <span className="text-[#36bd42]">{name}</span>
          </h1>
          <h2 className="mt-3 mb-5 text-xl">
            Informe os dados para fazer uma nova execução
          </h2>
        </span>
        <form id="textBox" onSubmit={handleSubmitform}>
          <div
            id="form"
            className="w-[400px] sm:w-[600px] md:w-[650px] lg:w-[800px] text-white h-[500px] rounded-lg  md:flex-row flex-col flex  justify-center items-center"
          >
            <div className="flex w-1/2 mb-10 md:mb-0 flex-col justify-center items-center">
              <h2 className="sm:text-2xl  text-lg mb-10">
                Credenciais de acesso
              </h2>
              <TextField
                className="!w-full md:!w-[70%]"
                label="E-mail"
                type={"email"}
                variant="outlined"
                inputProps={{ maxLength: 30 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  width: "70%",
                  "& label.Mui-focused": {
                    color: `${"#2E6CFD"}`,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: `${"#2E6CFD"}`,
                    },
                    "&:hover fieldset": {
                      borderColor: `#0cb41a`,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: `${"#2E6CFD"}`,
                    },
                  },
                }}
                required
              />
              <br />
              <TextField
                className="!w-full md:!w-[70%]"
                label="Senha"
                type="password"
                variant="outlined"
                inputProps={{ maxLength: 30 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  width: "70%",
                  "& label.Mui-focused": {
                    color: `${"#2E6CFD"}`,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: `${"#2E6CFD"}`,
                    },
                    "&:hover fieldset": {
                      borderColor: `#0cb41a`,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: `${"#2E6CFD"}`,
                    },
                  },
                }}
                required
              />
            </div>
            <div className="flex w-1/2 flex-col justify-center items-center">
              <h2 className="sm:text-2xl  text-lg mb-10 ">Planejamento</h2>
              <TextField
                className="!w-full md:!w-[70%]"
                label=""
                type={"date"}
                variant="outlined"
                inputProps={{ maxLength: 30 }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                sx={{
                  width: "70%",
                  "& label.Mui-focused": {
                    color: `${"#2E6CFD"}`,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: `${"#2E6CFD"}`,
                    },
                    "&:hover fieldset": {
                      borderColor: `#0cb41a`,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: `${"#2E6CFD"}`,
                    },
                  },
                }}
                required
              />
              <br />
              <TextField
                className="!w-full md:!w-[70%]"
                label="Órgão"
                type="text"
                variant="outlined"
                inputProps={{ maxLength: 30 }}
                value={orgao}
                onChange={(e) => setOrgao(e.target.value)}
                sx={{
                  width: "70%",
                  "& label.Mui-focused": {
                    color: `${"#2E6CFD"}`,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: `${"#2E6CFD"}`,
                    },
                    "&:hover fieldset": {
                      borderColor: `#0cb41a`,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: `${"#2E6CFD"}`,
                    },
                  },
                }}
                required
              />
            </div>
          </div>
          <button
            id="submitButton"
            type="submit"
            onClick={() => {
              if (email == "" || password == "" || date == "" || orgao == "") {
              } else {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  navigate("/home/" + name.toLowerCase() + "/newtask-2");
                }, 1000);
              }
            }}
            className="flex justify-center !w-52 mt-10 items-center self-end"
          >
            {loading ? (
              <CircularProgress size={30} color="inherit" />
            ) : (
              <div>Próximo</div>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
};
