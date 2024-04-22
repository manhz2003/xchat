import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "../../assets/images/vite-removebg-preview.png";
import icons from "../../ultils/icons";
import { Link, useNavigate } from "react-router-dom";
import { apiRegister } from "../../apis/user";

const { FaGoogle } = icons;

const Register = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [emailExistsError, setEmailExistsError] = useState(false);
  const [fullnameEmptyError, setFullnameEmptyError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordEmptyError, setPasswordEmptyError] = useState(false);
  const [repassword, setRepassword] = useState("");
  const [repasswordEmptyError, setRepasswordEmptyError] = useState(false);
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
    if (!fullname) {
      setFullnameEmptyError(true);
    } else {
      setFullnameEmptyError(false);
    }
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

    if (!repassword) {
      setRepasswordEmptyError(true);
    } else {
      setRepasswordEmptyError(false);
    }

    if (password && repassword && password !== repassword) {
      setPasswordMismatchError(true);
    } else {
      setPasswordMismatchError(false);
    }
    if (
      !emailError &&
      !emailEmptyError &&
      !passwordEmptyError &&
      !repasswordEmptyError &&
      !passwordMismatchError &&
      !passwordMismatchError
    ) {
      try {
        const response = await apiRegister({ fullname, email, password });
        if (response.status === 200) {
          const confirm = window.confirm(
            "Đăng ký thành công. Bạn có muốn chuyển đến trang đăng nhập?"
          );
          if (confirm) {
            navigate("/login");
          }
        } else if (response.status === 400) {
          setEmailExistsError(true);
        } else {
          console.error(response.message);
        }
      } catch (error) {
        console.error("An error occurred while registering:", error);
      }
    }
  };

  return (
    <>
      <div className="container px-6 ">
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
                    error={fullnameEmptyError}
                    fullWidth
                    label={
                      fullnameEmptyError
                        ? "Full Name không được bỏ trống"
                        : "Full Name"
                    }
                    id="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
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
                    error={emailError || emailEmptyError || emailExistsError}
                    fullWidth
                    label={
                      emailEmptyError
                        ? "Email không được bỏ trống"
                        : emailError
                        ? "Email không đúng định dạng"
                        : emailExistsError
                        ? "Email đã tồn tại"
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
                    error={passwordEmptyError || passwordMismatchError}
                    fullWidth
                    label={
                      passwordEmptyError
                        ? "Password không được bỏ trống"
                        : passwordMismatchError
                        ? "Password không khớp"
                        : "New password"
                    }
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </Box>
              </div>
              <div className="mb-6 flex items-center justify-between">
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    error={repasswordEmptyError || passwordMismatchError}
                    fullWidth
                    label={
                      repasswordEmptyError
                        ? "Re-enter password không được bỏ trống"
                        : passwordMismatchError
                        ? "Password không khớp"
                        : "Re-enter new password"
                    }
                    id="repassword"
                    value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                    type="password"
                  />
                </Box>
              </div>
              <Button
                type="submit"
                style={{ width: "100%", padding: "10px 0" }}
                variant="contained"
                onClick={handleSubmit}
              >
                Register
              </Button>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>
              <Button
                style={{ width: "100%", padding: "10px 0" }}
                variant="contained"
                startIcon={<FaGoogle />}
              >
                Continue with Google
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
