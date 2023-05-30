import React from "react";
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Typography variant="h1">welcome </Typography>
    </div>
  );
}
