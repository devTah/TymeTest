"use client";
import { Slider, SliderThumb, styled } from "@mui/material";
import Image from "next/image";
import React from "react";

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "var(--primary)",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    color: "var(--primary)",
    height: 3,
  },
  "& .MuiSlider-markLabel": {
    color: "var(--white)",
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "var(--primary)" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));
interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

export function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <Image src={"/icons/checked.svg"} width={24} height={24} alt="thumb" />
    </SliderThumb>
  );
}

export default CustomSlider;
