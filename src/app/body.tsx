"use client";
import { useEffect, useState } from "react";
import { Locale } from "@/i18n-config";

const Body = ({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) => {

  return (
    <body>
      <>
        {children}
        {/* add loading */}
      </>
    </body>
  );
};
export default Body;
