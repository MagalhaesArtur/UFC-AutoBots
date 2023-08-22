import { CircularProgress, TextField } from "@mui/material";
import "./Login/login.css";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
export function SingUpForm() {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmitLogin(event: FormEvent) {
    if (email == "" || password == "") {
    } else {
      event.preventDefault();
      setLoading(true);
    }
  }
  confirmPassword;

  return (
    <div
      id="formContainer"
      className="  flex flex-col  justify-around items-center"
    >
      <div className="text-white mb-6 text-3xl"> {"Crie sua conta"}</div>
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

        <br />

        <TextField
          className="username !text-red-400"
          label="Confirmar Senha"
          type="password"
          variant="outlined"
          inputProps={{ maxLength: 30 }}
          value={password}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
        <button
          id="submitButton"
          type="submit"
          className="flex justify-center items-center"
        >
          {loading ? (
            <CircularProgress size={30} color="inherit" />
          ) : (
            <div>REGISTRAR</div>
          )}
        </button>
        <footer className="mt-4">
          <h2 className={"text-white"}>
            Já tem uma conta?{" "}
            <a
              className="text-green-600 underline cursor-pointer  hover:text-green-500 transition-all"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </a>
          </h2>
        </footer>
      </form>
    </div>
  );
}
