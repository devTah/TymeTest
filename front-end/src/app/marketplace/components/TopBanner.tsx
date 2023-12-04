import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const arrayCharacter = [
  {
    label: "assasin",
    image: "assasin-card.png",
  },
  {
    label: "neon guy",
    image: "neon-card.png",
  },
  {
    label: "mafia england",
    image: "mafia-card.png",
  },
  {
    label: "basketball girl",
    image: "basketball-card.png",
  },
  {
    label: "the dj",
    image: "dj-big.png",
  },
];

const TopBanner = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-3 w-full h-full relative px-24">
        <div className="relative flex flex-col items-end">
          <Image
            width={443}
            height={234}
            alt="new"
            sizes="(max-width: 443px), 30vw"
            src={"new-background.svg"}
            className="object-cover "
          />
          <Image
            width={133}
            height={53}
            alt="new"
            sizes="(max-width: 443px), 30vw"
            src={"shopnow.svg"}
            className="object-cover w-[30%] mr-8"
          />
        </div>
        <div className="col-span-2">
          <Image sizes="60vw" width={636} height={267} alt="arrival" src={"arrival.svg"} className="object-cover w-[70%]" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-12 banner-arrival place-items-center px-24">
        {arrayCharacter.map((it, idx) => {
          if (idx === arrayCharacter.length - 1) {
            return (
              <div key={it.label} className="flex flex-col gap-4 w-full">
                <Image
                  src={"/images/" + it.image}
                  alt={it.label}
                  width={340}
                  height={240}
                  className="absolute bottom-0 right-0"
                />
                <div className="relative w-full h-56 flex justify-center">
                  {/* <Typography className="uppercase text-center z-20 absolute text-white text-2xl bottom-4 right-8" fontFamily={"DroneRangerPro"}>
                    {it.label}
                  </Typography> */}
                  <Image
                    src={"thedj.svg"}
                    alt="background-dj"
                    width={240}
                    height={156}
                    className="absolute bottom-1 left-4 z-10"
                  />
                </div>
              </div>
            );
          }
          return (
            <div key={it.label} className="flex flex-col gap-4">
              <Image src={"/images/" + it.image} alt={it.label} width={200} height={168} />
              <Typography className="uppercase text-center md:text-xs text-lg" fontFamily={"DroneRangerPro"}>
                {it.label}
              </Typography>
            </div>
          );
        })}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default TopBanner;
