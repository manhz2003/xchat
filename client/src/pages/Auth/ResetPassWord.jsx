import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "../../assets/images/vite-removebg-preview.png";
import icons from "../../ultils/icons";
import { Link, useNavigate } from "react-router-dom";

const ResetPassWord = () => {
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
                  <TextField fullWidth label="Email address" id="fullWidth" />
                </Box>
              </div>
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                >
                  <TextField fullWidth label="New password" id="fullWidth" />
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
                    fullWidth
                    label="Re-enter new password"
                    id="fullWidth"
                  />
                </Box>
              </div>
              <Button
                style={{ width: "100%", padding: "10px 0" }}
                variant="contained"
              >
                reset password
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPassWord;
