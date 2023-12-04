"use client";
import CssTextField from "@/app/components/atoms/CssTextField";
import CustomSlider, { AirbnbThumbComponent } from "@/app/components/atoms/CustomSlider";
import SelectCustom from "@/app/components/atoms/SelectCustom";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

function valuetext(value: number) {
  return `${value} ETH`;
}

const marks = [
  {
    value: 0,
    label: "0.01 ETH",
  },
  {
    value: 100,
    label: "200 ETH",
  },
];

const Filter = () => {
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState<number[]>([0, 37]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="">
      <CssTextField
        fullWidth
        className="text-white"
        placeholder="Quick search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image src={"/icons/search.svg"} width={12} height={12} alt="search" />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />

      <CustomSlider
        className="mt-6"
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChangeSlider}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
      />

      <FormControl fullWidth className="mt-6">
        <InputLabel id="demo-simple-select-label" className="text-white">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          className="text-white border-white"
          input={<SelectCustom />}
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth className="mt-6">
        <InputLabel id="demo-simple-select-label" className="text-white">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          className="text-white border-white"
          input={<SelectCustom />}
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth className="mt-6">
        <InputLabel id="demo-simple-select-label" className="text-white">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          className="text-white border-white"
          input={<SelectCustom />}
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth className="mt-6">
        <InputLabel id="demo-simple-select-label" className="text-white">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          className="text-white border-white"
          input={<SelectCustom />}
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <div className="flex flex-row justify-between mt-8 flex-wrap">
        <button className="display-center gap-2 h-12 cursor-pointer">
          <Image src={"icons/close.svg"} alt="close" width={16} height={16} />
          <Typography className="text-white">Reset filter</Typography>
        </button>
        <Button className="primary-button capitalize" variant="contained" color="secondary" size="medium">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Filter;
