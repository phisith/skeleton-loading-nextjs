import requestManager from "@/lib/requestManager";
import sleep from "@/lib/sleep";

async function getData() {
  await sleep(Math.floor(Math.random() * 5000));
  await requestManager("posts")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
}

export default async function Posts() {
  const posts: any = await getData();

  return <>{Object.keys(posts).length > 0}</>;
}
