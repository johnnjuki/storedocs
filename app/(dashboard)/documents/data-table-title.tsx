import { useSession } from "next-auth/react";

type DataTableTitleProps = {
  title: string;
};

export const DataTableTitle = ({ title }: DataTableTitleProps) => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return <div className="block max-w-[10rem] truncate font-medium md:max-w-[20rem]">{title}</div>;
};
