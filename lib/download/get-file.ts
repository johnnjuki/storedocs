// import { match } from "ts-pattern";
import { base64 } from "@scure/base";

import { DocumentDataType } from "@prisma/client";

type GetFileOptions = {
  type: DocumentDataType;
  data: string;
};

// export const getFile = ({ type, data }: GetFileOptions) => {
//   return match(type)
//     .with(DocumentDataType.BYTES, () => getFileFromBytes(data))
//     .with(DocumentDataType.BYTES_64, () => getFileFromBytes64(data));
// };

export const getFile = ({ data }: GetFileOptions) => {
  return getFileFromBytes64(data);
};

const getFileFromBytes = (data: string) => {
  const encoder = new TextEncoder();

  const binaryData = encoder.encode(data);

  return binaryData;
};

const getFileFromBytes64 = (data: string) => {
  const binaryData = base64.decode(data);

  return binaryData;
};

// TODO: Get from S3
