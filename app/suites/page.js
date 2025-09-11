import React from "react";
import { PageHeading } from "../_components/Headings";
import SuiteCard from "./SuiteCard";
import suiteList from "../data/data-suite";

export const metadata = {
  title: "Rooms & Suites | Hotel X",
  description: "Rooms & Suites",
};

export default async function page() {
  const suites = suiteList;
  console.log(suites)
  return (
    <div>
      <PageHeading>Rooms & Suites</PageHeading>
      <p className="text-primary-200 text-lg mb-10">
        Experience over 200 thoughtfully designed suites, each offering
        breathtaking sea views, soaring high ceilings, and elegant loft-style
        living — the perfect blend of comfort and sophistication.
      </p>
      {suiteList.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 py-10">
          {suiteList.map((suite) => (
            <SuiteCard suite={suite} key={suite.id} />
          ))}
        </div>
      )}
    </div>
  );
}
