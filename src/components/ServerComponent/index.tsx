import requestManager from "@/lib/requestManager";
import sleep from "@/lib/sleep";

async function getData(url: string) {
  await sleep(Math.floor(Math.random() * 5000));
  const data = await requestManager(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error("Failed to fetch data");
    });
  return data;
}

export default async function Posts() {
  const posts: any = await getData("posts");

  return <>{Object.keys(posts).length}</>;
}
