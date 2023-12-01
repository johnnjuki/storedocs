import { base64 } from "@scure/base";

import { DocumentDataType } from "@prisma/client";

import { createDocumentData } from "../server-only/create-document-data";

type File = {
  name: string;
  type: string;
  arrayBuffer: () => Promise<ArrayBuffer>;
};

export const putFile = async (file: File) => {
  const { type, data } = await putFileInDatabase(file);

  return await createDocumentData({ type, data });
};

// TODO: Uplod to s3

const putFileInDatabase = async (file: File) => {
  const contents = await file.arrayBuffer();

  const binaryData = new Uint8Array(contents);

  const asciiData = base64.encode(binaryData);

  return {
    type: DocumentDataType.BYTES_64,
    data: asciiData,
  };
};
