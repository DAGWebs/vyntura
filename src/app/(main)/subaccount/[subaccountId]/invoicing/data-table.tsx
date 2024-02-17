'use client';
import React from 'react';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Plus, Search } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useModal } from '@/providers/modal-provider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CustomModal from '@/components/global/custom-modal';
import SubaccountPageId from '../page';
import { useParams } from 'next/navigation';

interface InvoiceTemplateDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterValue: string;
  actionButtonText?: React.ReactNode;
  modalChildren?: React.ReactNode;
}

export default function InvoiceTemplateDataTable<TData, TValue>({
  columns,
  data,
  filterValue,
  modalChildren,
  actionButtonText,
}: InvoiceTemplateDataTableProps<TData, TValue>) {
  const { isOpen, setOpen, setClose } = useModal();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex items-center py-4 gap-2'>
          <Search />
          <Input
            placeholder='Search name...'
            value={
              (table.getColumn(filterValue)?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn(filterValue)?.setFilterValue(event.target.value)
            }
            className='h-12 w-36'
          />
        </div>

        <div className='flex items-center justify-end gap-2'>
          <Button
            className='flex- gap-2'
            onClick={() => {
              if (modalChildren)
                setOpen(
                  <CustomModal
                    title='Invoices'
                    subheading='Create Invoices invoices sent out to customers'
                  >
                    {modalChildren}
                  </CustomModal>,
                );
            }}
          >
            {actionButtonText}
          </Button>
          <Button
            className='flex- gap-2'
            onClick={() => {
              if (modalChildren)
                setOpen(
                  <CustomModal
                    title='Customers'
                    subheading='Add a new customer'
                  >
                    {modalChildren}
                  </CustomModal>,
                );
            }}
          >
            <Plus size={15} /> Create A Customer
          </Button>
          <a
            href={`/subaccount/${useParams().subaccountId}/invoicing/templates`}
          >
            <Button>View Templates</Button>
          </a>
        </div>
      </div>

      <div className=' border bg-background rounded-lg'>
        <Table className=''>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No Results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
