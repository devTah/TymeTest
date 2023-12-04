"use client";
import React, { useEffect, useState } from "react";
import Card, { TCard } from "./Card";
import { it } from "node:test";
import { Button } from "@mui/material";

async function getData(page?: any) {
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

const Result: React.FC<{ data: any }> = ({ data }) => {
  const [page, setPage] = useState<any>(data.page || 1);
  const [dataDraft, setDataDraft] = useState<any>(data.items);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const loadMoreData = async () => {
    setLoading(true);
    try {
      const newData = await getData(page + 1);
      console.log({ newData });

      setDataDraft((prevData: any) => prevData.concat(newData.items));
      setPage((prevPage: number) => prevPage + 1);
    } catch (error: any) {
      setError(error?.message || "");
    } finally {
      setLoading(false);
    }
  };

  const refreshData = () => {
    // Call the loadData function to refresh data
    getData();
  };

  useEffect(() => {
    // Load data on mount
    getData();

    // Set up interval to refresh data every 60 seconds
    const intervalId = setInterval(refreshData, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [page]); // Include 'page' as a dependency to refresh data when the page changes


  return (
    <div className="flex flex-col items-center gap-4">
      <div className="card-container overflow-auto w-full h-[1000px] gap-[40px]">
        {(dataDraft ?? []).map((it: TCard) => {
          return <Card key={it.id} {...it} />;
        })}
      </div>
      <Button className="primary-button capitalize" variant="contained" color="secondary" size="medium" onClick={loadMoreData}>
        View more
      </Button>
    </div>
  );
};

export default Result;
