'use client';

import BlurPage from "@/components/global/blur-page";
import Editor from "@/app/(main)/subaccount/[subaccountId]/invoicing/templates/[invoiceId]/_components/editor";
import { useParams } from "next/navigation";
function TemplateEditor() {
 const template = useParams().invoiceId

  return (
    <BlurPage>
        <Editor />
    </BlurPage>
  );
}

export default TemplateEditor;
