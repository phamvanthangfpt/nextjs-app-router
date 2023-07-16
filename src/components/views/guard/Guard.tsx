"use client";
import { postRestApi } from "@/src/utils/request";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface GuardProps {
  children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
  const [lang, setLang] = useState(Cookies.get("lang"));
  // console.log("qua day");
 
  useEffect(() => {
    const securePage = async () => {
      // const response = await postRestApi("api/auth", {});
      // console.log("response", response);
    };
    securePage();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLang = Cookies.get("lang");
      if (newLang !== lang) {
      console.log("newLang", newLang);
        setLang(newLang);
        window.location.reload();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  return <>{children}</>;
};

export default Guard;
