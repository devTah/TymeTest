import React from "react";
import { Button, Divider, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const arrayOfLink = ["Home", "Whitepaper", "FAQs", "About us", "Marketplace", "News", "Our teams", "Roadmap", "Community"];

export default function Footer() {
  return (
    <div className="footer">
      <div className="grid grid-cols-3 content-footer gap-12">
        <div className="grid">
          <Typography className="big-title">Navigation</Typography>
          <ul className="mt-8 grid grid-cols-3 gap-3">
            {arrayOfLink.map((it) => {
              return (
                <Link key={it} className="little-link" href={"/" + it.toLocaleLowerCase()}>
                  {it}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <Typography className="big-title">Contact Us</Typography>
          <div className="flex flex-row gap-2">
            <Image src={"/icons/telephone.svg"} alt="telephone" width={24} height={24} />
            <Typography className="little-link">
              <Link href="tel:+01234568910">01234568910</Link>
            </Typography>
          </div>
          <div className="flex flex-row gap-2">
            <Image src={"/icons/comment.svg"} alt="comment" width={24} height={24} />
            <Typography className="little-link">
              <Link href="mailto:tymex-talent@tyme.com">tymex-talent@tyme.com</Link>
            </Typography>
          </div>
        </div>
        <div className="">
          <Typography className="big-title">Subcribe to receive our latest update</Typography>
          <form className="mt-8 flex flex-row gap-5" method="post" target="subscribe-frame" id="subscribe">
            <input placeholder="Email address" id="email-suscribe" name="email" pattern="^[A-Za-z0-9+_.-]+@(.+)$" required />
            <Button className="primary-button capitalize" variant="contained" color="secondary" size="medium">
              subscribe
            </Button>
          </form>
        </div>
      </div>
      <Divider className="mt-14" />
      <div className="mt-11">
        <p className="little-link">©2023 Tyme - Edit. All Rights reserved.</p>
      </div>
    </div>
  );
}
