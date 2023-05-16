import Loading from "./loading";
import { ListBoxProps } from "./type";

export default function ListBox({ title, isLoading, data }: ListBoxProps) {
  return (
    <article className="bg-gray-800 rounded-xl shadow-xl p-4">
      <h2 className="text-lg font-bold px-4 pb-2 border-b mb-4">{title} : </h2>
      <div className="flex flex-col overflow-auto h-56 w-96">
        {isLoading ? (
          <Loading />
        ) : (
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
        )}
      </div>
    </article>
  );
}
