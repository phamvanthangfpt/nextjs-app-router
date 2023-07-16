"use client";
import Cookies from "js-cookie";
import { postRestApi } from "@/src/utils/request";

const Profile = ({ t }: any) => {
  const setCookies = async () => {
    await postRestApi("/api/login", { token: "thang" });
  };

  const handleChange = () => {
    const currentLang = Cookies.get('lang');
    Cookies.set("lang", currentLang === "en" ? "ja" : "en");
  };
  console.log(t);

  return (
    <>
      <button onClick={setCookies}>{t.home.title}</button>
      <button onClick={handleChange}>{t.home.description}</button>
    </>
  );
};
export default Profile;
