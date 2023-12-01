"use client";

import { Document } from "@prisma/client";
import { Download } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button } from "@storedocs/components/ui/button";
import { getFile } from "@storedocs/lib/download/get-file";
import {
  getRequiredServerComponentSession
} from "@storedocs/lib/next-auth/get-server-component-session";
import { getDocumentById } from "@storedocs/lib/server-only/get-document-by-id";
import { DocumentWithData } from "@storedocs/prisma/types/document-with-data";

type DataTableActionButtonProps = {
  row: Document;
};

export const DataTableActionButton = ({ row }: DataTableActionButtonProps) => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  const onDownloadClick = async () => {
    let document: DocumentWithData | null = null;

    const { user } = await getRequiredServerComponentSession();
    document = await getDocumentById({ id: row.id, userId: user.id });

    const documentData = document?.documentData;

    if (!documentData) {
      return;
    }

    const documentBytes = getFile(documentData);

    const blob = new Blob([documentBytes], { type: "application/pdf" });

    const link = window.document.createElement("a");
    const baseTitle = row.title.includes(".pdf")
      ? row.title.split(".pdf")[0]
      : row.title;

    link.href = window.URL.createObjectURL(blob);
    link.download = baseTitle ? `${baseTitle}.pdf` : "document.pdf";

    link.click();

    window.URL.revokeObjectURL(link.href);
  };

  return (
    <Button className="w-32" onClick={onDownloadClick}>
      <Download className="-ml-1 mr-2 inline h-4 w-4" />
      Download
    </Button>
  );
};
