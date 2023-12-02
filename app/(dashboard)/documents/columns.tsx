"use client";

import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Document } from "@prisma/client";

import { LocaleDate } from "@storedocs/components/formatter/locale-date";

import { DataTableTitle } from "./data-table-title";
import { DataTableActionButton } from "./data-table-action-download";
import { DataTableActionDropdown } from "./data-table-action-dropdown";
import { Button } from "@storedocs/components/ui/button";

export const columns: ColumnDef<Document>[] = [
  {
    header: ({column}) => {
      return (
        <div
        className="flex items-center hover:cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created
        <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    accessorKey: "createdAt",
    cell: ({ row }) => <LocaleDate date={row.original.createdAt} />,
  },
  {
    header: ({column}) => {
      return (
        <div
        className="flex items-center hover:cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
        <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    accessorKey: "title",
    cell: ({ row }) => <DataTableTitle title={row.original.title} />,
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-x-4">
          <DataTableActionButton row={row.original} />
          <DataTableActionDropdown row={row.original} />
        </div>
      );
    },
  },
];
