'use client';
import React, { useEffect } from 'react';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { InvoiceTemplate } from '@prisma/client';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

import { Button } from '../ui/button';
import Loading from '../global/loading';
import { CreateInvoiceTemplateSchema } from '@/lib/types';
import {
  saveActivityLogsNotification,
  upsertFunnel,
  getRateSheets,
  CreateInvoiceTemplate,
} from '@/lib/queries';
import { v4 } from 'uuid';
import { toast } from '../ui/use-toast';
import { useModal } from '@/providers/modal-provider';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

interface CreateInvoiceTemplateProps {
  defaultData?: InvoiceTemplate;
  subAccountId: string;
}

//CHALLENGE: Use favicons

const InvoiceTemplateForm: React.FC<CreateInvoiceTemplateProps> = ({
  defaultData,
  subAccountId,
}) => {
  const { setClose } = useModal();
  const router = useRouter();
  const form = useForm<z.infer<typeof CreateInvoiceTemplateSchema>>({
    mode: 'onChange',
    resolver: zodResolver(CreateInvoiceTemplateSchema),
    defaultValues: {
      name: defaultData?.name || '',
      description: defaultData?.description || '',
      id: defaultData?.id,
      layout: defaultData?.layout || '[]',
      status: defaultData?.status || 'Draft',
      invoiceNumber: defaultData?.invoiceNumber || '123456',
      dueDate: defaultData?.dueDate || new Date(),
      customerName: defaultData?.customerName || '',
      customerAddress: defaultData?.customerAddress || '',
      items: defaultData?.items || '[]',
      notes: defaultData?.notes || '',
      subAccountId: defaultData?.subAccountId || subAccountId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  useEffect(() => {
    if (defaultData) {
      form.reset({
        name: defaultData?.name || '',
        description: defaultData?.description || '',
        id: defaultData?.id,
        layout: defaultData?.layout || '[]',
        status: defaultData?.status || 'Draft',
        invoiceNumber: defaultData?.invoiceNumber || '123456',
        dueDate: defaultData?.dueDate || new Date(),
        customerName: defaultData?.customerName || '',
        customerAddress: defaultData?.customerAddress || '',
        items: defaultData?.items || '[]',
        notes: defaultData?.notes || '',
        subAccountId: defaultData?.subAccountId || subAccountId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }, [defaultData]);

  const isLoading = form.formState.isLoading;

  const onSubmit = async (
    values: z.infer<typeof CreateInvoiceTemplateSchema>,
  ) => {
    if (!subAccountId) return;
    if (values === null) return;
    const response = await CreateInvoiceTemplate(subAccountId, {
      ...values,
    });
    await saveActivityLogsNotification({
      agencyId: undefined,
      description: `Update invoice template | ${defaultData?.name || ''}`,
      subaccountId: subAccountId,
    });
    if (response)
      toast({
        title: 'Success',
        description: 'Saved invoice template details',
      });
    else
      toast({
        variant: 'destructive',
        title: 'Oppse!',
        description: 'Could not save invoice template details',
      });
    setClose();
    router.refresh();
  };
  return (
    <Card className='flex-1'>
      <CardHeader>
        <CardTitle>Invoice Template Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-4'
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invoice Template Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Name'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invoice Template Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Tell us a little bit more about this invoice template.'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* <FormField
              disabled={isLoading}
              control={form.control}
              name='RateSheet'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rate Sheet</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select a rate sheet' />
                      </SelectTrigger>
                      <SelectContent>
                        {rateSheets && rateSheets.length > 0 ? (
                          rateSheets.map((sheet: any) => (
                            <SelectItem
                              key={sheet.id}
                              value={sheet.id}
                            >
                              {sheet.name}
                            </SelectItem>
                          ))
                        ) : (
                          <>
                            <SelectItem
                              disabled
                              value='Nothing Selected'
                            >
                              You must create a ratesheet before you can
                              generate an invoice
                            </SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            /> */}
            <Button
              className='w-20 mt-4'
              disabled={isLoading}
              type='submit'
            >
              {form.formState.isSubmitting ? <Loading /> : 'Save'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default InvoiceTemplateForm;
