import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { stripe } from '@/lib/stripe';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import Link from 'next/link';

import { pricingCards } from '@/lib/constants';
import { User } from '@prisma/client';

type Props = {
  user?: null | User;
};

const PriceCards = async ({ user }: Props) => {
  const prices = await stripe.products.list();

  return (
    <>
      <section
        className='flex justify-center items-center flex-col gap-4 mt-[450px]'
        id='pricing'
      >
        <h2 className='text-4xl text-center'> Choose what fits your needs</h2>
        <p className='text-muted-foreground text-center'>
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not <br />
          ready to commit you can get started for free.
        </p>
        <div className='flex justify-center gap-4 flex-wrap mt-6'>
          {prices.data.map((card) => (
            //WIP: Wire up free product from stripe
            <Card
              key={card.name}
              className={clsx('w-[300px] flex flex-col justify-between', {
                'border-2 border-primary': card.name === 'Vyntura Pro',
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx('', {
                    'text-muted-foreground': card.name !== 'Vyntura Pro',
                  })}
                >
                  {card.name}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className='text-4xl font-bold'>
                  ${card.metadata.price}
                </span>
                <span className='text-muted-foreground'>
                  <span>/ month</span>
                </span>
              </CardContent>
              <CardFooter className='flex flex-col items-start gap-4'>
                <div>
                  {card.features.map((feature: any) => (
                    <div
                      key={feature.name}
                      className='flex gap-2'
                    >
                      <Check />
                      <p>{feature.name}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/agency?plan=${card.default_price}`}
                  className={clsx(
                    'w-full text-center bg-primary p-2 rounded-md',
                    {
                      '!bg-muted-foreground': card.name !== 'Vyntura Pro',
                    },
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
          <Card className={clsx('w-[300px] flex flex-col justify-between')}>
            <CardHeader>
              <CardTitle
                className={clsx({
                  'text-muted-foreground': true,
                })}
              >
                {pricingCards[0].title}
              </CardTitle>
              <CardDescription>{pricingCards[0].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className='text-4xl font-bold'>$0</span>
              <span>/ month</span>
            </CardContent>
            <CardFooter className='flex flex-col  items-start gap-4 '>
              <div>
                {pricingCards
                  .find((c) => c.title === 'Starter')
                  ?.features.map((feature: any) => (
                    <div
                      key={feature}
                      className='flex gap-2'
                    >
                      <Check />
                      <p>{feature}</p>
                    </div>
                  ))}
              </div>
              <Link
                href='/agency'
                className={clsx(
                  'w-full text-center bg-primary p-2 rounded-md',
                  {
                    '!bg-muted-foreground': true,
                  },
                )}
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};
export default PriceCards;
