"use server";

import { DocumentWithData } from "@storedocs/prisma/types/document-with-data";
import { prisma } from "../db";

type DeleteDocument = {
  id: number;
  userId: number;
};

export const deleteDocument = async ({ id, userId }: DeleteDocument) => {
  let document: DocumentWithData | null = null;

  document = await prisma.document.delete({
    where: {
      id,
      userId,
    },
  });

  await prisma.documentData.delete({
    where: {
      id: document.documentDataId,
    },
  });
};
