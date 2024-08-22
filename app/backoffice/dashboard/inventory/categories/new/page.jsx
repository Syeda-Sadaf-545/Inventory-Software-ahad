"use client"; //because we using react-hooks so we need use client
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import FormHeader from "/components/dashboard/FormHeader";
import { useForm } from "react-hook-form";
import TextInput from "../../../../../../components/dashboard/FormInputs/TextInput";
export default function NewCategories() {
  // We download React-hook-form and applying code here
  const {
    register,
    handleSubmit,
    reset, //reset function use to clear field after submit
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  // making own custom function to handle submission
  function onSubmit(data) {
    console.log(data);
    reset(); //reset function use to clear field after submit
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Category" href="#" />
      {/* <FormHeader /> */}
      {/* flowbite code for form crud */}
      <form
        // React-hook-code for data submission on form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Download Code From the open source of creating Normal Form */}
          {/* Title */}
          {/* We make a code as component check file TextInput in components */}
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
        </div>
        {/* button also from flowbite form with card inputs */}
        <div className="sm:col-span-1">
          {/* <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button> */}

          {/* COde from notes */}
          {/* Submit button code LOADING */}
          {loading ? (
            <button
              disabled
              type="button"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Saving Course Please wait...
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              <Plus className="w-5 h-5 mr-2" />
              <span>Save Category</span>
            </button>
          )}
        </div>
      </form>
      {/* Footer */}
    </div>
  );
}
