import { useState } from 'react';
export default function EmailComponent() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('/api/mail',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
  };

  return (
    <form action="">
      <div className="grid grid-cols-12 gap-5 ">
        <div className="col-span-5 flex flex-col space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter your name"
                value={form.name}
                onChange={handleForm}
                type="text"
                name="name"
                id="name"
                className="p-4 shadow-sm focus:ring-main-red focus:border-main-red block w-full sm:text-sm border-gray-300 rounded-sm h-[50px]"
              />
            </div>
          </div>

          <div >
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter your email"
                value={form.email}
                onChange={handleForm}
                type="email"
                name="email"
                id="email"
                className="p-4 shadow-sm focus:ring-main-red focus:border-main-red block w-full sm:text-sm border-gray-300 rounded-sm h-[50px]"
              />
            </div>
          </div>
          <div >
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700"
            >
              Subject
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter a subject"
                value={form.subject}
                onChange={handleForm}
                type="text"
                name="subject"
                id="subject"
                className="p-4 shadow-sm focus:ring-main-red focus:border-main-red block w-full sm:text-sm border-gray-300 rounded-sm h-[50px]"
              />
            </div>
          </div>
        </div>

        <div className="col-span-7 ">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={10}
              placeholder="Enter your message"
              value={form.message}
              onChange={handleForm}
              className="p-4 shadow-sm focus:ring-main-red focus:border-main-red block w-full sm:text-sm border-gray-300 rounded-sm h-[272px]"
              defaultValue={''}
            />
          </div>
        </div>

      </div>
      <div className='flex justify-end'>
      <button
        type="submit"
        onClick={handleSubmit}
      className='mt-5 bg-main-red text-white py-3 px-5 rounded-sm'
      >Send Message</button>
      </div>
    </form>
  );
}
