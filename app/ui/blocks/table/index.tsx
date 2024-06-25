import BlocksTableClient from "./client";

import { fetchBlocks } from "@/app/lib/data";

export default async function BlocksTable() {
  const blocks = await fetchBlocks()
  
  return <BlocksTableClient blocks={blocks} />;
}
