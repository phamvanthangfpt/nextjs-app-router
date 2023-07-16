import { config } from "@/src/config/config";

export const post = async (query: any, variables?: any) => {
  try {
    const link = config.apiUrl ? config.apiUrl : "";
    const { data } = await fetch(link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 10 },
    }).then((res) => res.json());
    return data;
  } catch (err: any) {
    throw err;
  }
};

export const postRestApi = (link: string, body: any) => {
  return fetch(link, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};
