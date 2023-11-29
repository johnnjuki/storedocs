"use client";

import { Loader } from "lucide-react";
import { useState } from "react";

import { DocumentDropZone } from "@storedocs/components/ui/document-dropzone";
import { useToast } from "@storedocs/components/ui/use-toast";
import { putFile } from "@storedocs/lib/upload/put-file";
import { cn } from "@storedocs/lib/utils";

export type UploadDocumentProps = {
  className?: string;
};

export const UploadDocument = ({ className }: UploadDocumentProps) => {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const onFileDrop = async (file: File) => {
    try {
      setIsLoading(true);

      const { type, data } = await putFile(file);

      toast({
        title: "Document uploaded",
        description: "Your document has been uploaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "An error occurred while uploading your document. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("relative max-w-lg mx-auto mt-8", className)}>
      <DocumentDropZone onDrop={onFileDrop} />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-background/50">
          <Loader className="h-12, w-12 animate-spin text-muted-foreground" />
        </div>
      )}
    </div>
  );
};
