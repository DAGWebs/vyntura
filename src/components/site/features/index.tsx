/* eslint no-use-before-define: 0 */ // --> OFF
import { Brain, Coins, PuzzleIcon, Calendar, Wrench } from 'lucide-react'; // Assuming usage of Heroicons for demonstration
const FeatureBlock = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: any;
}) => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-r from-stone-800 to-gray-900 p-6 rounded-lg shadow-md'>
      <Icon className='text-indigo-500 w-16 h-16 mb-4' />
      <h4 className='font-bold text-indigo-400 text-lg mb-2'>{title}</h4>
      <p className='text-gray-300 text-center'>{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Productivity App',
      description:
        'A productivity app that helps organizations improve their workflow, connect with Stripe, and sell products.',
      Icon: Brain,
    },
    {
      title: 'Stripe Integration',
      description:
        'Seamless integration with Stripe to facilitate easy product sales directly through the platform.',
      Icon: Coins,
    },
    {
      title: 'Website Builder & Pipelines',
      description:
        'Includes a versatile website builder and a Kanban-like board called Pipelines for task management.',
      Icon: PuzzleIcon,
    },
    {
      title: 'Calendar Setup & Team Management',
      description:
        'Features for calendar setup, team management, and more, facilitating efficient project and team coordination.',
      Icon: Calendar,
    },
    {
      title: 'Continuous Development',
      description:
        "Continuous development of new features to meet our clients' evolving needs, including automations, invoicing, and more.",
      Icon: Wrench,
    },
  ];
  return (
    <section
      className='flex justify-center items-center flex-col gap-4 mt-[150px]'
      id='features'
    >
      <h2 className='text-4xl text-center'>
        {' '}
        We offer some really cool features
      </h2>
      <p className='dark:text-muted-foreground text-white text-center'>
        Take a look maybe we can help you.
      </p>
      <div className='py-12'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-indigo-600 mb-12'>
            Key Features
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <FeatureBlock
                key={index}
                {...feature}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
