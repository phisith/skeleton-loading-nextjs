import requestManager from "./requestManager";
import sleep from "./sleep";

export default async function fetcher(url: string) {
  await sleep(Math.floor(Math.random() * 5000));
  const res = await requestManager.get(url);
  return res.data;
}
