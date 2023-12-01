import { useSession } from "next-auth/react"

type DataTableActionDropdownProps = {
  row: Document
}


export const DataTableActionDropdown = ({ row }: DataTableActionDropdownProps) => {
  const {data: session} = useSession() 
  
}