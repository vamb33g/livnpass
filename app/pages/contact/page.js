'use client';

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 min-h-screen pt-20 border-solid mt-10 pb-10">
      <div className="w-full flex items-center justify-center ">
        <div className="top-40 bg-white dark:bg-gray-700 shadow rounded py-16 lg:px-28 px-10">
          <p className="md:text-3xl text-3xl font-bold leading-7 text-center text-gray-700 dark:text-white">
            Contactez-nous
          </p>
          <div className="md:flex items-center mt-12">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Prénom et Nom :
              </label>
              <input
                tabIndex="0"
                aria-label="Please input name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input name"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Adresse e-mail :
              </label>
              <input
                tabIndex="0"
                aria-label="Please input email address"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Numéro de téléphone :
              </label>
              <input
                tabIndex="0"
                role="input"
                aria-label="Please input company name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input company name"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Sujet :
              </label>
              <input
                tabIndex="0"
                aria-label="Please input country name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input country name"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Message :
              </label>
              <textarea
                tabIndex="0"
                aria-label="leave a message"
                role="textbox"
                type="name"
                className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
              />
            </div>
            {/*             <p className="text-gray-700">...........................................................................................................</p>
             */}{' '}
          </div>
          <div className="flex items-center justify-center w-full">
            <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
