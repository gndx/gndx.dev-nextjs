import React from "react";

const Newsletter = () => {
  return (
    <div className="mb-8 mt-6">
      <form
        className="mb-4"
        action="https://www.getrevue.co/profile/gndx/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div className="mb-3">
          <label
            htmlFor="member_email"
            className="block mb-2 text-md font-medium text-gray-600 dark:text-gray-400"
          >
            ¡Suscríbete al newsletter!
          </label>
          <input
            type="text"
            name="member[email]"
            id="member_email"
            placeholder="Tu correo electrónico"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          />
        </div>
        <div className="mb-2">
          <input type="hidden" value="1" name="embed" />
          <input
            type="submit"
            value="Subscribe"
            name="member[subscribe]"
            id="member_submit"
            className="cursor-pointer w-full px-1 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out"
          />
        </div>
        <p className="text-sm text-center text-gray-400">Sin envio de SPAM 😉</p>
      </form>
    </div>
  );
};

export default Newsletter;
