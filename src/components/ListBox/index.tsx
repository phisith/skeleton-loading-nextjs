import Empty from "./empty";
import { useRequest } from "@/hooks/useRequest";
import { ListBoxProps } from "./type";

export default async function ListBox({ title, url }: ListBoxProps) {
  const { data, error }: any = useRequest(url);

  if (error) {
    throw error;
  }

  if (!data) {
    return <>Loading...</>;
  }

  return (
    <article className="bg-gray-800 rounded-xl shadow-xl p-4">
      <h2 className="text-lg font-bold px-4 pb-2 border-b mb-4">{title} : </h2>
      <div className="flex flex-col overflow-auto h-56 w-96">
        {data && Object.keys(data).length > 0 ? (
          <ul className="list-disc ml-4">
            {Array.isArray(data)
              ? data.slice(0, 2).map((list, index) => {
                  return (
                    <li key={index + list?.id}>
                      {Object.keys(list).map((key, index) => {
                        return (
                          <p key={key + index}>
                            {key}: {list[key]}
                          </p>
                        );
                      })}
                    </li>
                  );
                })
              : Object.keys(data).map((key, index) => {
                  return (
                    <li key={index + key}>
                      {key}: {data[key]}
                    </li>
                  );
                })}
          </ul>
        ) : (
          <Empty />
        )}
      </div>
    </article>
  );
}
