import { getInvoiceTemplates, getRateSheets } from '@/lib/queries'
import React from 'react'
import FunnelsDataTable from './data-table'
import { Plus } from 'lucide-react'
import { columns } from './columns'
import BlurPage from '@/components/global/blur-page'
import InvoiceTemplateForm from '@/components/forms/invoice-template-form'

const invoiceTemplates = async ({ params }: { params: { subaccountId: string } }) => {
  const templates = await getInvoiceTemplates(params.subaccountId)
  if (!templates) return null

  return (
    <BlurPage>
      <FunnelsDataTable
        actionButtonText={
          <>
            <Plus size={15} />
            Create New Template
          </>
        }
        modalChildren={
          <InvoiceTemplateForm subAccountId={params.subaccountId}></InvoiceTemplateForm>
        }
        filterValue="name"
        columns={columns}
        data={templates}
      />
    </BlurPage>
  )
}

export default invoiceTemplates
