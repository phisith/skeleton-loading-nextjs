"use client";

import ListBox from "@/components/ListBox";
import { useCommentsInfo, usePostsInfo, useUserInfo } from "@/hooks/dashboard";

export default function Page() {
  const userInfo = useUserInfo();
  const postsInfo = usePostsInfo();
  const commentsInfo = useCommentsInfo();
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <h1 className="text-xl font-extrabold">Dashboard</h1>
      <section id="dashboard-section" className="grid grid-cols-2 gap-6">
        <ListBox
          title="User"
          data={userInfo.data}
          isLoading={userInfo.isLoading}
          isError={userInfo.error}
        />
        <ListBox
          title="Posts"
          data={postsInfo.data}
          isLoading={postsInfo.isLoading}
          isError={postsInfo.error}
        />
        <ListBox
          title="Comments"
          data={commentsInfo.data}
          isLoading={commentsInfo.isLoading}
          isError={commentsInfo.error}
        />
      </section>
    </div>
  );
}
