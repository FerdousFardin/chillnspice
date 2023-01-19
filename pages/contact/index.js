import { BiSelectMultiple } from "react-icons/bi";

function index() {
  const handleSubmit = (e) => {
    // handle Submit here
  };
  return (
    <div className="container flex justify-center px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center w-full">
      <div className="w-1/2 lg:w-full mx-auto">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
            Easiest way to create your website
          </h1>

          <div className="mt-8 space-y-5">
            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <BiSelectMultiple className="w-6 h-6 mx-2 text-blue-500" />

              <span className="mx-2">Clean and Simple Layout</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <BiSelectMultiple className="w-6 h-6 mx-2 text-blue-500" />

              <span className="mx-2">Just Copy Paste Codeing</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <BiSelectMultiple className="w-6 h-6 mx-2 text-blue-500" />

              <span className="mx-2">Easy to Use</span>
            </p>
          </div>
        </div>

        <div className="w-full mt-8 bg-transparent border border-grayish rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 h-10 px-4 py-2 m-1 bg-white rounded placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
            />

            <button
              type="button"
              className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary/80 focus:outline-none focus:bg-primary/80"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default index;
