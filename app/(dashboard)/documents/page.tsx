import { UploadDocument } from "./upload-document";

import { findDocuments } from "@storedocs/lib/server-only/find-documents";
import { getRequiredServerComponentSession } from "@storedocs/lib/next-auth/get-server-component-session";

import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function DocumentsPage() {
  const { user } = await getRequiredServerComponentSession();

  const data = await findDocuments({
    userId: user.id,
  });

  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 md:px-8">
      <UploadDocument />

      <div className="mt-12">
        <h1 className="text-4xl font-semibold">Documents</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
