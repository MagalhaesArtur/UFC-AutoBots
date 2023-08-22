import { CircularProgress, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import "./index.css";
import Preloader from "../components/Preloader";
export function RecoverPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingPreloader, setLoadingPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPreloader(false);
    }, 1000);
  }, []);
  async function handleSubmitForm(event: FormEvent) {
    if (email == "") {
    } else {
      event.preventDefault();
      setLoading(true);
    }
  }

  return (
    <>
      {loadingPreloader ? (
        <Preloader />
      ) : (
        <div className=" flex items-center w-screen h-screen bg-[#130f40] justify-center">
          <div id="form" className="w-[600px] h-[800px] rounded-lg p-4 ">
            <div className="  flex-col hidden md:flex h-full justify-center items-center">
              <div className="text-3xl text-white font-semibold  w-[50%]">
                Recupere sua senha
              </div>
              <br />

              <form
                id={"textBox"}
                className="flex items-center justify-center w-full  text-slate-200 flex-col"
                onSubmit={handleSubmitForm}
              >
                <br />

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
                <button
                  id="submitButton"
                  type="submit"
                  className="flex justify-center items-center"
                >
                  {loading ? (
                    <CircularProgress size={30} color="inherit" />
                  ) : (
                    <div>ENVIAR EMAIL</div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
