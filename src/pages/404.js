import Link from "src/components/Link";

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h2 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900  md:text-8xl md:leading-14 md:border-r-2 md:px-6">
          oops!
        </h2>
      </div>
      <div className="max-w-md">
        <img
          src="https://arepa.s3.amazonaws.com/gndx-404m.png"
          alt="404"
          className="w-full"
        />
        <Link href="/">
          <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-blue-700 ">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
