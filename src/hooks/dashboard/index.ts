import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export function useUserInfo() {
  const { data, error, isLoading } = useSWR(`/users/1`, fetcher);

  return {
    data: { name: data?.name, username: data?.username },
    error,
    isLoading,
  };
}

export function usePostsInfo() {
  const { data, error, isLoading } = useSWR(`/posts`, fetcher);
  return { data, error, isLoading };
}

export function useCommentsInfo() {
  const { data, error, isLoading } = useSWR(`/comments`, fetcher);
  return { data, error, isLoading };
}
