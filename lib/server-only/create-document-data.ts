"use server";

import { prisma } from "../db";
import { DocumentDataType } from "@prisma/client";

type CreateDocumentDataOptions = {
  type: DocumentDataType;
  data: string;
};

export const createDocumentData = async ({
  type,
  data,
}: CreateDocumentDataOptions) => {
  return await prisma.documentData.create({
    data: {
      type,
      data,
    },
  });
};
