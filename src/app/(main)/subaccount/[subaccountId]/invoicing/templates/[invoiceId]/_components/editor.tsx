import { PlusCircle, Trash2Icon, TrashIcon } from 'lucide-react';
import React, { useState } from 'react';

const EditableField = ({
  value,
  onChange,
  fieldType = 'text',
  ...props
}: any) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <input
      type={fieldType}
      value={value}
      onChange={onChange}
      className={`bg-transparent border-b-2 border-transparent focus:border-gray-400 outline-none ${
        isEditing ? 'border-gray-400' : ''
      }`}
      onFocus={() => setIsEditing(true)}
      onBlur={() => setIsEditing(false)}
      {...props}
    />
  );
};

const InvoiceTemplate = () => {
  // Initial state setup with sample data - replace as needed
  const [invoice, setInvoice] = useState({
    id: '123456',
    date: new Date().toLocaleDateString(),
    customerName: 'John Doe',
    customerAddress: '123 Main St, City, State, 10001',
    items: [
      { description: 'Service 1', quantity: 1, price: 100.0 },
      { description: 'Service 2', quantity: 2, price: 200.0 },
    ],
    notes: 'Thank you for your business.',
  });

  const handleChange = (e: any, index: any, field: any) => {
    if (field) {
      // For items array
      const newItems: any = [...invoice.items];
      newItems[index][field] = e.target.value;
      setInvoice({ ...invoice, items: newItems });
    } else {
      // For other fields
      setInvoice({ ...invoice, [e.target.name]: e.target.value });
    }
  };

  const calculateTotal = () => {
    return invoice.items
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };

  const addItem = () => {
    const newItem = { description: '', quantity: 1, price: 0.0 };
    setInvoice({ ...invoice, items: [...invoice.items, newItem] });
  };

  // Function to remove an item by index
  const removeItem = (index) => {
    const filteredItems = invoice.items.filter((_, i) => i !== index);
    setInvoice({ ...invoice, items: filteredItems });
  };

  return (
    <div className='max-w-4xl mx-auto p-8 border-2 dark:text-white border-black  shadow-xl'>
      <div className='flex items center justify-between'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white'>
            Invoice{' '}
            <EditableField
              value={invoice.id}
              onChange={(e: any) => handleChange(e)}
              name='id'
            />
          </h1>
          <p className='text-white'>
            Date:{' '}
            <EditableField
              value={invoice.date}
              onChange={(e: any) => handleChange(e)}
              name='date'
              type='date'
            />
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white'>
            <EditableField
              value='{COMPANY NAME}'
              onChange={(e: any) => handleChange(e)}
              name='companyname'
              type='text'
            />
          </h1>
          <p className='text-white'>
            <EditableField
              value='{COMPANY Address}'
              onChange={(e: any) => handleChange(e)}
              name='Address'
              type='text'
            />
          </p>
        </div>
      </div>

      <div className='mb-6'>
        <h2 className='text-xl font-semibold text-white'>Bill To:</h2>
        <EditableField
          value={invoice.customerName}
          onChange={(e) => handleChange(e)}
          name='customerName'
        />
        <EditableField
          value={invoice.customerAddress}
          onChange={(e) => handleChange(e)}
          name='customerAddress'
        />
      </div>

      <div className='mb-6'>
        <table className='w-full'>
          <thead className='bg-black'>
            <tr>
              <th className='text-left py-2 px-4'>Description</th>
              <th className='text-left py-2 px-4'>Quantity</th>
              <th className='text-left py-2 px-4'>Price</th>
              <th className='text-left py-2 px-4'>Amount</th>
              <th className='text-left py-2 px-4'>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, index) => (
              <tr
                key={index}
                className='border-b'
              >
                <td className='py-2 px-4'>
                  <EditableField
                    value={item.description}
                    onChange={(e) => handleChange(e, index, 'description')}
                    placeholder='Enter Item Name'
                  />
                </td>
                <td className='py-2 px-4'>
                  <EditableField
                    value={item.quantity}
                    onChange={(e) => handleChange(e, index, 'quantity')}
                    fieldType='number'
                    placeholder='Enter Quantity'
                  />
                </td>
                <td className='py-2 px-4'>
                  <EditableField
                    value={item.price}
                    onChange={(e) => handleChange(e, index, 'price')}
                    fieldType='number'
                    placeholder='Enter Price'
                  />
                </td>
                <td className='py-2 px-4'>
                  ${(item.quantity * item.price).toFixed(2)}
                </td>
                <td className='py-2 px-4'>
                  <button
                    onClick={() => removeItem(index)}
                    className='text-red-500  p-2 rounded'
                  >
                    <Trash2Icon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex justify-end'>
        <h3 className='text-xl mt-6 mr-4 text-white'>
          Total:{' '}
          <span className='font-bold mb-2 border-b-2-white'>
            $ {calculateTotal()}
          </span>
        </h3>
        <button
          onClick={addItem}
          className='mt-4 text-blue-500 p-2 rounded'
        >
          <PlusCircle />
        </button>
      </div>

      <div className='mt-8'>
        <label htmlFor="notes" className='text-muted-foreground mb-3 p-4'>Add Some Notes Downe here</label>
        <textarea
          value={invoice.notes}
          onChange={(e) => handleChange(e)}
          id="notes"
          name='notes'
          className='w-full mt-4 border-black border-2 bg-transparent rounded-lg p-6'
        />
      </div>
      <div className='flex justify-end'>
        <button className='bg-blue-500 py-3 px-12 mt-5 justify-end rounded-lg'>
          Save
        </button>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
