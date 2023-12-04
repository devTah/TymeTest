"use client";
import StyledBadge from "@/app/components/atoms/AvatarWithBadge";
import { Avatar, Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

export type TCard = {
  id: any;
  tier: "epic" | "common" | "mythic" | "legendary" | "rare";
  character: "dj" | "assasin" | "basketball" | "mafia" | "neon";
  characterName: string;
  price: number | string;
  currency: string;
  user: {
    name: string;
    check: "green" | "red";
  };
};

const Card: React.FC<TCard> = (props) => {
  return (
    <div
      className="relative min-w-[235px] min-h-[333px] rounded-lg p-4"
      style={{
        background: "rgba(58, 56, 65, 0.60)",
        cursor: "pointer",
      }}
    >
      <div className={classNames("rounded flex items-center flex-col", props.tier)} style={{}}>
        <div className="flex flex-row justify-between items-center w-full p-2">
          <Typography
            className="px-3 py-1 text-white rounded capitalize"
            style={{
              background: "rgba(49, 59, 69, 0.50)",
            }}
          >
            {props.tier}
          </Typography>
          <Image src={"/icons/heart.svg"} width={24} height={24} alt={"heart"} />
        </div>
        <Image src={`/images/${props.character}.png`} width={160} height={150} alt={"heart"} />
      </div>
      <div className="center mt-6 flex flex-row justify-between">
        <Typography className=" text-white">{props.characterName}</Typography>
        <div className="display-center gap-2">
          <Image src={"/icons/eth.svg"} width={8} height={8} alt={"eth"} />
          <Typography className=" text-white">{props.price}</Typography>
          <Typography className=" text-white">{props.currency}</Typography>
        </div>
      </div>
      <div className="bottom flex flex-row items-center gap-4 mt-8">
        <div className="relative">
          <Avatar alt="Remy Sharp" src="/images/static-user.png" />
          <Image width={16} height={16} alt="Remy Sharp" className="absolute right-0 bottom-0" src={`/icons/check-${props.user.check}.svg`} />
        </div>
        <Typography className="text-white capitalize">{props.user.name}</Typography>
      </div>
    </div>
  );
};

Card.defaultProps = {
  tier: "common",
  character: "assasin",
  characterName: "Assasin",
  price: 1.2,
  currency: "ETH",
  user: {
    name: "akali",
    check: "green",
  },
};

export default Card;
