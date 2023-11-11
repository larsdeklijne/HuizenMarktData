import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
  

const CustomTable = () => {
  return (
    <div className="flex h-50%">
      <Table className="m-auto lg:w-1/2 sm:w-3/4">
          <TableCaption>Een overzicht van alle hypotheekrentes bij de banken.</TableCaption>
          <TableHeader>
              <TableRow>
              <TableHead className="w-[100px]">Bank</TableHead>
              <TableHead>Rente</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
              <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
          </TableBody>
      </Table>
    </div>
  )
}

export default CustomTable