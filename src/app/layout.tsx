import { cookies } from "next/headers";
import Guard from "../components/views/guard/Guard";
import Body from "./body";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang: any = cookies().get("lang");

  console.log(lang);
  

  return (
    <html lang={lang.value}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0, user-scalable=0"
        ></meta>
      </head>
      <body>
        <Guard>
          <Body lang={lang.value}>
            {/* <Header t={dictionaryHeader} lang={params.lang} /> */}
            {children}
          </Body>
        </Guard>
      </body>
    </html>
  );
}
