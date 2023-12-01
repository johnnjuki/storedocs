import { Download, MoreHorizontal, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Document } from "@prisma/client";

import { DocumentWithData } from "@storedocs/prisma/types/document-with-data";

import { getFile } from "@storedocs/lib/download/get-file";
import { getRequiredServerComponentSession } from "@storedocs/lib/next-auth/get-server-component-session";
import { deleteDocument } from "@storedocs/lib/server-only/delete-document";
import { getDocumentById } from "@storedocs/lib/server-only/get-document-by-id";


import { Button } from "@storedocs/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@storedocs/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@storedocs/components/ui/dropdown-menu";
import { useToast } from "@storedocs/components/ui/use-toast";

type DataTableActionDropdownProps = {
  row: Document;
};

export const DataTableActionDropdown = ({
  row,
}: DataTableActionDropdownProps) => {
  const { data: session } = useSession();

  const router = useRouter();

  const { toast } = useToast();

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  if (!session) return null;

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

  const onDocumentDelete = async () => {
    const { user } = await getRequiredServerComponentSession();

    try {
      await deleteDocument({ id: row.id, userId: user.id });
      router.refresh();

      toast({
        title: "Document deleted",
        description: "The document has been deleted.",
      });

      setIsDeleteDialogOpen(false);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description:
          "The document could not be deleted at this time. Please try again.",
      });
    }
  };

  return (
    <Dialog open={isDeleteDialogOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={onDownloadClick}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setIsDeleteDialogOpen(true)}>
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Do you want to delete this document?</DialogTitle>

          <DialogDescription>
            Please note that this action is irreversible. Once confirmed, your
            document will be permanetly deleted.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <div className="flex w-full flex-1 flex-nowrap gap-1">
            <Button
              type="button"
              variant="secondary"
              className="flex-1"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>

            <Button type="button" onClick={onDocumentDelete} className="flex-1">
              Delete
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
