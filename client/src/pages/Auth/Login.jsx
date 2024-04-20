import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "../../assets/images/vite-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../ultils/icons";
const { FaGoogle } = icons;

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordEmptyError, setPasswordEmptyError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
    if (!email) {
      setEmailEmptyError(true);
      setEmailError(false);
    } else if (!emailRegex.test(email)) {
      setEmailError(true);
      setEmailEmptyError(false);
    } else {
      setEmailError(false);
      setEmailEmptyError(false);
    }
    if (!password) {
      setPasswordEmptyError(true);
    } else {
      setPasswordEmptyError(false);
    }
  };

  return (
    <>
      <div className="container  px-6 ">
        <div className="flex justify-center ml-[640px]">
          <img className="w-[350px] h-[160px]" src={logo} alt="" />
        </div>

        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            <form>
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    error={emailError || emailEmptyError}
                    fullWidth
                    label={
                      emailEmptyError
                        ? "Email không được bỏ trống"
                        : emailError
                        ? "Email không đúng định dạng"
                        : "Email address"
                    }
                    id="fullWidth"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
              </div>
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    error={passwordEmptyError}
                    fullWidth
                    label={
                      passwordEmptyError
                        ? "Password không được bỏ trống"
                        : "Password"
                    }
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Box>
              </div>
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[0.1rem]">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                      />
                    }
                    label="Remember me"
                  />
                </div>

                <Link
                  to="/forgot-password"
                  className="text-[#20405a] focus:outline-none"
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                type="submit"
                style={{
                  width: "100%",
                  background: "#3a71ca",
                  padding: "10px 0",
                }}
                variant="contained"
                onClick={handleSubmit}
              >
                Sign in
              </Button>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>
              <Button
                style={{
                  width: "100%",
                  background: "#3c5997",
                  padding: "10px 0",
                }}
                variant="contained"
                startIcon={<FaGoogle />}
              >
                Continue with Google
              </Button>

              <div className="mt-[20px]">
                <Link to="/Register">
                  <Button
                    style={{
                      width: "100%",
                      background: "#54aced",
                      padding: "10px 0",
                    }}
                    variant="contained"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
