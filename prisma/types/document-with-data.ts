import { Document, DocumentData } from "@prisma/client";

export type DocumentWithData = Document & {
  documentData?: DocumentData | null;
  }