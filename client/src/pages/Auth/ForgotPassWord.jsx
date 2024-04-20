import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "../../assets/images/vite-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassWord = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);

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
  };

  return (
    <>
      <div className="container px-6">
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

              <Button
                style={{ width: "100%", padding: "10px 0" }}
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                Search
              </Button>
              <div className="mt-4">
                <Link to="/login">
                  <Button
                    style={{
                      width: "100%",
                      padding: "10px 0",
                      background: "#e6e7ec",
                      color: "#000",
                    }}
                    variant="contained"
                  >
                    Cancel
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
export default ForgotPassWord;
