import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "My Page Title",
};

export default async function Page() {
  const theme = cookies().get("token");
  // console.log(theme);
  
  return <h1>Hello, Dashboard Page!</h1>;
}
