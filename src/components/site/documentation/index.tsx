'use client';
import { useState } from 'react';
import { FaRocket, FaCogs, FaCode, FaUsers, FaChartLine } from 'react-icons/fa';

const Docs = () => {
 const docs = [
   {
     id: 'getting-started',
     title: 'Getting Started',
     content: (
       <>
         <p className='mb-4'>
           Welcome to <strong className='font-bold'>Ventura</strong>, designed
           to streamline organizational and operational efficiency. To begin,
           you must be part of an Agency or create a sub-account under one.
         </p>
         <p className='mb-4'>
           Start by{' '}
           <strong className='font-bold'>registering a new account</strong>. You
           can opt for a free account or select a paid plan for full access.
           Once registered, you'll need to register your organization as an
           "Agency" within Ventura.
         </p>
         <p className='mb-4'>
           You will be greeted by the{' '}
           <strong className='font-bold'>Launchpad</strong> on your screen, your
           central hub for onboarding. If it's not immediately visible, you can
           access it from the left side navigation bar. Follow the onboarding
           steps to fully set up your Agency and unlock all features Ventura has
           to offer.
         </p>
       </>
     ),
     Icon: FaRocket, // Example, replace with your chosen icon component
   },
   {
     id: 'agency-dashboard',
     title: 'The Agency Dashboard',
     content: (
       <>
         <p className='mb-4'>
           The <strong className='font-bold'>Agency Dashboard</strong> serves as
           your command center, providing a comprehensive overview of your
           activities, metrics, and accessible tools.
         </p>
         <ul className='list-disc pl-5 mb-4'>
           <li className='mb-2'>
             At the top of the side navigation bar, you'll find your{' '}
             <strong>Agency Logo and Name</strong>. Clicking the agency name
             reveals a list of all sub-accounts, with an option to create new
             ones.
           </li>
           <li className='mb-2'>
             Use the <strong>Search Bar</strong> to quickly find any navigation
             link.
           </li>
           <li className='mb-2'>
             <strong>Billing</strong> section for managing your account's
             financial aspects.
           </li>
           <li className='mb-2'>
             <strong>Sub Accounts</strong> area to view and manage your
             sub-accounts.
           </li>
           <li className='mb-2'>
             <strong>Settings</strong> for updating user details and agency
             information.
           </li>
           <li className='mb-2'>
             The <strong>Launchpad</strong> for streamlined onboarding.
           </li>
           <li className='mb-2'>
             <strong>Team</strong> management for adding or managing agency team
             members.
           </li>
           <li className='mb-2'>
             A comprehensive view of <strong>Metrics</strong> on the dashboard
             page for insights into your agency's performance.
           </li>
         </ul>
       </>
     ),
     Icon: FaCogs, // Example, replace with your chosen icon component
   },
   {
     id: 'sub-accounts',
     title: 'Sub Accounts',
     content: (
       <>
         <p className='mb-4'>
           Sub-accounts extend the capabilities of your Agency, allowing you to
           leverage Ventura's comprehensive toolset for enhanced operational
           efficiency. Each sub-account has access to:
         </p>
         <ul className='list-disc pl-5 mb-4'>
           <li className='mb-2'>
             A dedicated <strong>Media Bucket</strong> for content storage.
           </li>
           <li className='mb-2'>
             <strong>Funnels</strong> for creating custom web pages and
             marketing funnels.
           </li>
           <li className='mb-2'>
             A <strong>Metrics Dashboard</strong> for performance insights.
           </li>
           <li className='mb-2'>
             <strong>Contacts Management</strong> for organizing your outreach.
           </li>
           <li className='mb-2'>
             <strong>Settings</strong> to tailor the platform to your needs.
           </li>
           <li className='mb-2'>
             <strong>Automations</strong> to streamline your workflows.
           </li>
           <li className='mb-2'>
             <strong>Pipelines</strong> for managing projects and tasks in a
             Kanban-style board.
           </li>
         </ul>
         <p className='mb-4'>
           Initiate your journey with the <strong>Launchpad</strong> for a
           seamless onboarding experience, perfectly setting up your sub-account
           for success.
         </p>
       </>
     ),
     Icon: FaUsers, // Example, replace with your chosen icon component
   },
   {
     id: 'funnels',
     title: 'Funnels',
     content: (
       <>
         <p className='mb-4'>
           Ventura's <strong>Funnels</strong> feature empowers you to create
           custom, high-converting websites and marketing funnels with ease.
           Whether you're launching a product or building a complex marketing
           campaign, Funnels provides the tools you need to succeed.
         </p>
         <h3 className='font-semibold mb-2 mt-4'>Getting Started:</h3>
         <ul className='list-disc pl-5 mb-4'>
           <li className='mb-2'>
             Begin by filling in the basic details of your site, including its{' '}
             <strong>Name</strong>, <strong>Description</strong>,{' '}
             <strong>Subdomain</strong>, and <strong>Favicon</strong>.
           </li>
           <li className='mb-2'>
             Navigate to the <strong>Funnel Steps</strong> section to add and
             organize the pages of your site. Here, you can specify each page's
             name and content, setting up the structure of your funnel.
           </li>
         </ul>
         <h3 className='font-semibold mb-2'>Design and Customization:</h3>
         <p className='mb-4'>
           Ventura offers a range of design templates and customization options
           to ensure your funnel not only performs well but also matches your
           brand's aesthetic. Utilize our drag-and-drop editor to place elements
           precisely where you want them.
         </p>
         <h3 className='font-semibold mb-2'>Integration and Optimization:</h3>
         <p className='mb-4'>
           Integrate your funnels with other Ventura tools for enhanced
           functionality. Add e-commerce capabilities, connect to CRM systems,
           and use analytics to optimize your funnel's performance continually.
         </p>
       </>
     ),
     Icon: FaCode, // Example, replace with your chosen icon component
   },
   {
     id: 'pipelines',
     title: 'Pipelines',
     content: (
       <>
         <p className='mb-4'>
           Ventura's <strong>Pipelines</strong> offer a robust solution for
           managing your projects and workflows with a flexible Kanban-style
           board. Tailor your pipelines to match your process, from lead
           tracking to task management and everything in between.
         </p>
         <h3 className='font-semibold mb-2 mt-4'>
           Creating and Managing Pipelines:
         </h3>
         <ul className='list-disc pl-5 mb-4'>
           <li className='mb-2'>
             Start by creating a new pipeline for your project or workflow.
             Define distinct lanes to represent different stages or aspects of
             your process.
           </li>
           <li className='mb-2'>
             Add tickets to your lanes to represent tasks, leads, or other
             items. Each ticket can hold detailed information, including
             descriptions, attachments, and deadlines.
           </li>
         </ul>
         <h3 className='font-semibold mb-2'>Customization and Flexibility:</h3>
         <p className='mb-4'>
           Customize lanes and tickets to fit your needs. Use tags for
           organization, assign team members to tasks, and set priorities to
           keep your projects on track.
         </p>
         <h3 className='font-semibold mb-2'>Collaboration and Reporting:</h3>
         <p className='mb-4'>
           Pipelines facilitate team collaboration, allowing members to update
           statuses, leave comments, and share feedback in real-time. Utilize
           built-in reporting tools to track progress, identify bottlenecks, and
           analyze the performance of your projects.
         </p>
       </>
     ),
     Icon: FaChartLine, // Example, replace with your chosen icon component
   },
   // Add more sections as needed
 ];




  const [activeDoc, setActiveDoc] = useState(docs[0]);
  return (
    <section
      className='flex justify-center items-center flex-col gap-4 mt-[150px] bg-black/60 p-10'
      id='docs'
    >
      <h2 className='text-4xl text-center'>
        {' '}
        Need Some Help Figuring Things Out
      </h2>
      <p className='dark:text-muted-foreground text-white text-center'>
        Some of our basic info is down below.
      </p>
      <h2 className='text-2xl font-bold text-center mb-8'>
        Quick Documentation
      </h2>
      <div className='flex flex-col md:flex-row container mb-[50px]'>
        {/* Navigation with Icons */}
        <div className='md:w-1/4 flex-shrink-0 container'> 
          <ul className='space-y-4 mb-6 md:mb-0'>
            {docs.map((doc) => (
              <li
                key={doc.id}
                className={`flex items-center space-x-2 cursor-pointer p-2  hover:bg-gradient-to-r hover:from-stone-800 hover:to-gray-900 rounded-l-lg ${
                  activeDoc.id === doc.id
                    ? 'bg-gradient-to-r from-stone-800 to-gray-900 text-blue-600 font-semibold'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveDoc(doc)}
              >
                <doc.Icon className='w-5 h-5' />
                <span>{doc.title}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Active Documentation Content */}
        <div className='flex-1 bg-gradient-to-r from-stone-800 to-gray-900 shadow-xl rounded-r-xl p-6'>
          <div className='flex items-center space-x-3 mb-4'>
            <activeDoc.Icon className='w-8 h-8 text-blue-500' />
            <h3 className='text-2xl font-bold text-blue-500'>{activeDoc.title}</h3>
          </div>
          <p className='text-gray-300'>{activeDoc.content}</p>
        </div>
      </div>
    </section>
  );
};

export default Docs;
