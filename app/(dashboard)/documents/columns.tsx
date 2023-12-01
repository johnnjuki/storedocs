"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Document } from "@prisma/client";

import { LocaleDate } from "@storedocs/components/formatter/locale-date";

import { DataTableTitle } from "./data-table-title";
import { DataTableActionButton } from "./data-table-action-button";

export const columns: ColumnDef<Document>[] = [
  {
    header: "Created",
    accessorKey: "createdAt",
    cell: ({ row }) => <LocaleDate date={row.original.createdAt} />,
  },
  {
    header: "Title",
    accessorKey: "title",
    cell: ({ row }) => <DataTableTitle title={row.original.title} />,
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-x-4">
          <DataTableActionButton row={row.original} />
          {/* <DataTableActionDropdown row={row.original} /> */}
        </div>
      );
    },
  },
];
