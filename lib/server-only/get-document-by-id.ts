"use server"

import { prisma } from "../db";

type GetDocumentByIdOptions = {
  id: number;
  userId: number;
}

export const getDocumentById = async ({
  id,
  userId,
}: GetDocumentByIdOptions) => {
  return await prisma.document.findFirstOrThrow({
    where: {
      id,
      userId,
    },
    include: {
      documentData: true,
    },
  });
};
