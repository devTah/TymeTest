import React from "react";
import TopBanner from "./components/TopBanner";
import Filter from "./components/Filter";
import Card from "./components/Card";
import Result from "./components/Result";
import Image from "next/image";

async function getData() {
  const params = new URLSearchParams();
  params.append("page", "1");
  params.append("pageSize", "20");

  const res = await fetch(`http://localhost:3007/?${params.toString()}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Marketplace = async () => {
  const data = await getData();



  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <TopBanner />
      <div className="body-content mt-24">
        <Filter />
        <div className="col-span-2">
          <Result data={data} />
        </div>
      </div>
      <div className="w-full relative h-60 mt-12">
        <Image src={"/images/bottom-banner.png"} fill alt="bottom-banner" />
      </div>
    </main>
  );
};

export default Marketplace;
