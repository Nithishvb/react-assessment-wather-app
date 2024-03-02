import React from "react";

type InputTextProps = {
  city: string;
  setCity: (e: any) => void;
  handleSubmit: (e: any) => void;
};

const InputText = ({ city, setCity , handleSubmit }: InputTextProps) => {
  return (
    <div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-1"
          placeholder="Search for city..."
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 px-4 rounded-md"
          disabled={!city}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputText;
