import Profile from "@/src/components/views/profile/Profile";
import { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "My Page Profile",
};

export default async function ProfilePage() {
  const lang: any = cookies().get("lang");
  const t = await getDictionary(lang.value);

  return <Profile t={t} />;
}
