import { useSession } from "next-auth/react";

type DataTableTitleProps = {
  title: string;
};

export const DataTableTitle = ({ title }: DataTableTitleProps) => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return <div>{title}</div>;
};
