/* eslint no-use-before-define: 0 */ // --> OFF
import {
  Contact,
  Lane,
  Notification,
  Prisma,
  Role,
  Tag,
  Ticket,
  User,
} from '@prisma/client';
import {
  _getTicketsWithAllRelations,
  getAuthUserDetails,
  getFunnels,
  getInvoiceTemplates,
  getMedia,
  getPipelineDetails,
  getTicketsWithTags,
  getUserPermissions,
} from '@/lib/queries';
import { db } from './db';
import { z } from 'zod';

import Stripe from 'stripe';

export type NotificationWithUser =
  | ({
      User: {
        id: string;
        name: string;
        avatarUrl: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: Role;
        agencyId: string | null;
      };
    } & Notification)[]
  | undefined;

export type UserWithPermissionsAndSubAccounts = Prisma.PromiseReturnType<
  typeof getUserPermissions
>;

export const FunnelPageSchema = z.object({
  name: z.string().min(1),
  pathName: z.string().optional(),
});

export const CreateInvoiceTemplateSchema = z.object({
  name: z.string().min(1, {
    message: 'the template name is required',
  }),
  description: z.string().min(3, {
    message: 'The template description needs at least 3 characters',
  }),
  id: z.string(),
  layout: z.string(),
  status: z.string(),
  invoiceNumber: z.string(),
  dueDate: z.date(),
  customerName: z.string(),
  customerAddress: z.string(),
  items: z.string(),
  notes: z.string(),
  subAccountId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const __getUsersWithAgencySubAccountPermissionsSidebarOptions = async (
  agencyId: string,
) => {
  return await db.user.findFirst({
    where: { Agency: { id: agencyId } },
    include: {
      Agency: { include: { SubAccount: true } },
      Permissions: { include: { SubAccount: true } },
    },
  });
};

export type AuthUserWithAgencySigebarOptionsSubAccounts =
  Prisma.PromiseReturnType<typeof getAuthUserDetails>;

export type UsersWithAgencySubAccountPermissionsSidebarOptions =
  Prisma.PromiseReturnType<
    typeof __getUsersWithAgencySubAccountPermissionsSidebarOptions
  >;

export type GetMediaFiles = Prisma.PromiseReturnType<typeof getMedia>;

export type CreateMediaType = Prisma.MediaCreateWithoutSubaccountInput;

export type TicketAndTags = Ticket & {
  Tags: Tag[];
  Assigned: User | null;
  Customer: Contact | null;
};

export type LaneDetail = Lane & {
  Tickets: TicketAndTags[];
};

export const CreatePipelineFormSchema = z.object({
  name: z.string().min(1),
});

export const CreateFunnelFormSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  subDomainName: z.string().optional(),
  favicon: z.string().optional(),
});

export type PipelineDetailsWithLanesCardsTagsTickets = Prisma.PromiseReturnType<
  typeof getPipelineDetails
>;

export const LaneFormSchema = z.object({
  name: z.string().min(1),
});

export type TicketWithTags = Prisma.PromiseReturnType<
  typeof getTicketsWithTags
>;

const currencyNumberRegex = /^\d+(\.\d{1,2})?$/;

export const TicketFormSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  value: z.string().refine((value) => currencyNumberRegex.test(value), {
    message: 'Value must be a valid price.',
  }),
});

export type TicketDetails = Prisma.PromiseReturnType<
  typeof _getTicketsWithAllRelations
>;

export const ContactUserFormSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email(),
});

export type Address = {
  city: string;
  country: string;
  line1: string;
  postal_code: string;
  state: string;
};

export type ShippingInfo = {
  address: Address;
  name: string;
};


export type StripeCustomerType = {
  email: string;
  name: string;
  shipping: ShippingInfo;
  address: Address;
};

export type PricesList = Stripe.ApiList<Stripe.Price>;

export type FunnelsForSubAccount = Prisma.PromiseReturnType<
  typeof getFunnels
>[0];

export type InvoiceTemplatesForSubAccount = Prisma.PromiseReturnType<typeof getInvoiceTemplates>[0]

export type UpsertFunnelPage = Prisma.FunnelPageCreateWithoutFunnelInput;
