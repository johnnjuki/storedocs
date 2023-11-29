"use client"

import { megabytesToBytes } from "@storedocs/lib/unit-conversion";
import { useDropzone } from "react-dropzone";
import { Card, CardContent } from "./card";

type DocumentDropZoneProps = {
  className?: string;
  disabled?: boolean;
  onDrop?: (_file: File) => void | Promise<void>;
  [key: string]: unknown;
};

export const DocumentDropZone = ({
  className,
  onDrop,
  disabled,
  ...props
}: DocumentDropZoneProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
    disabled,
    onDrop: ([acceptedFile]) => {
      if (acceptedFile && onDrop) {
        onDrop(acceptedFile);
      }
    },
    maxSize: megabytesToBytes(50),
  });

  return (
    <Card role="button" className="group p-8 hover:cursor-pointer" aria-disabled={disabled} {...getRootProps()} {...props}>
      <CardContent className="flex flex-col items-center justify-center">
        <input {...getInputProps()} />
        <p className="font-medium text-muted-foreground group-hover:text-foreground">
          Add a document
        </p>
        <p className="mt-1 text-sm text-muted-foreground/80">
          Drag & drop your document here.
        </p>
      </CardContent>
    </Card>
  );
};
