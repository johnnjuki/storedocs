"use server";

import { prisma } from "../db";

type FindDocumentsOptions = {
  userId: number;
};

export const findDocuments = async ({ userId }: FindDocumentsOptions) => {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      id: userId,
    },
  });

  const documents = await prisma.document.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      id: "desc",
    },
  });

  return documents;
};
