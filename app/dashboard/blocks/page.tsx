import { Suspense } from "react";
import BlocksTable from "@/app/ui/blocks/table";
import Loading from "@/app/ui/loading";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <BlocksTable />
    </Suspense>
  );
}