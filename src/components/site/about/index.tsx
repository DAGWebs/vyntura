/* eslint no-use-before-define: 0 */ // --> OFF
const About = () => {
  const faqs = [
    {
      question: 'How does Vyntura improve organizational workflow?',
      answer:
        "Vyntura's productivity app integrates with key tools like Stripe and offers features such as a web builder and task management to streamline operations.",
    },
    {
      question: 'Can I sell products with Vyntura?',
      answer:
        'Yes, our seamless integration with Stripe allows for effortless product sales directly through the platform.',
    },
    {
      question: 'What features are included in Vyntura?',
      answer:
        'Features include website building, Kanban-like pipelines, automations, invoicing, calendar setup, team management, and more, with continuous development for new features.',
    },
  ];
  return (
    <section
      className='flex justify-center items-center flex-col gap-4 mt-[150px] bg-black/60 p-10 text-white'
      id='about'
    >
      <h2 className='text-4xl text-center'> Want to know who we are</h2>
      <p className='dark:text-muted-foreground text-white text-center'>
        Our goal is to provide a product that is both easy to use and loved.
      </p>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-10 items-start'>
          <div className='md:col-span-3 space-y-6'>
            <h2 className='font-bold text-4xl mb-6 text-indigo-600'>
              About Vyntura
            </h2>
            <p className='text-lg text-gray-300'>
              Vyntura is a software development company focused on enhancing
              organizational workflow. Our flagship productivity app integrates
              seamlessly with Stripe, enabling organizations to sell products
              effortlessly.
            </p>
            <p className='text-lg text-gray-300'>
              Features include a versatile website builder, a Kanban-like board
              called Pipelines for task management, and numerous add-ons such as
              automations, invoicing, calendar setups, and team management
              tools. We are committed to continuous improvement and actively
              develop new features to meet our clients' evolving needs.
            </p>
          </div>
          <div className='md:col-span-3 bg-gradient-to-r from-stone-800 to-gray-900 p-6 rounded-lg shadow-xl text-white'>
            <h3 className='font-bold text-2xl mb-6 text-indigo-700'>
              Frequently Asked Questions
            </h3>
            <div className='divide-y divide-gray-00'>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className='py-4'
                >
                  <h4 className='font-semibold text-lg text-indigo-600 hover:text-indigo-800 cursor-pointer'>
                    {faq.question}
                  </h4>
                  <p className='text-gray-200 mt-2'>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
