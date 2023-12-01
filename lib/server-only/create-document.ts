"use server"

import { prisma } from "../db";

type CreateDocumentDataOptions = {
  title: string;
  userId: number;
  documentDataId: string;
};

export const createDocument = async ({
  title,
  userId,
  documentDataId,
}: CreateDocumentDataOptions) => {
  return await prisma.document.create({
    data: {
      title,
      userId,
      documentDataId,
    },
  });
};
