import { Checkbox, CircularProgress, TextField } from "@mui/material";
import "./login.css";
import { FormEvent, useState } from "react";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
export function LoginForm() {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  async function handleSubmitLogin(event: FormEvent) {
    if (email == "" || password == "") {
    } else {
      event.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/home");
      }, 1000);
    }
  }

  return (
    <div
      id="formContainer"
      className="  flex flex-col  justify-around items-center"
    >
      <div className="text-white mb-6 text-3xl"> {"Bem-vindo de volta"}</div>
      <form
        id={"textBox"}
        className="flex items-center justify-center w-full  text-slate-200 flex-col"
        onSubmit={handleSubmitLogin}
      >
        <TextField
          className=""
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
          className="username !text-red-400"
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

        <div className="flex items-center mt-5 w-[250px] justify-start">
          <Checkbox
            defaultChecked
            sx={{
              color: green[800],
              "&.Mui-checked": {
                color: green[600],
              },
            }}
            id="check"
            className="mr-4"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label
            htmlFor="check"
            className="text-slate-800 font-semibold text-lg"
          >
            Lembre de Mim
          </label>
        </div>

        <br />
        <button
          id="submitButton"
          type="submit"
          className="flex justify-center items-center"
        >
          {loading ? (
            <CircularProgress size={30} color="inherit" />
          ) : (
            <div>LOGIN</div>
          )}
        </button>
        <footer className="mt-4">
          <h2 className={"text-white"}>
            Ainda não tem uma conta?{" "}
            <a
              className="text-green-600 underline cursor-pointer  hover:text-green-500 transition-all"
              onClick={() => {
                navigate("/singup");
              }}
            >
              Criar Conta
            </a>
          </h2>
          <h2 className="text-white flex flex-col justify-center items-center">
            <a
              className="text-green-600 underline cursor-pointer text-lg  hover:text-green-500 transition-all"
              onClick={() => {
                navigate("/RecoverPassword");
              }}
            >
              Esqueceu a sua senha?{" "}
            </a>
          </h2>
        </footer>
      </form>
    </div>
  );
}
