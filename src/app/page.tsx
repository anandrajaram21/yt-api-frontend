import { Video, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Video[]> {
  const url = new URL("https://task.volt.place/videos");
  url.searchParams.set("pageSize", "200");
  url.searchParams.set("pageNumber", "1");
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
