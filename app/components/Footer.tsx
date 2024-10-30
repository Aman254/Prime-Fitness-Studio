import Link from "next/link";
import { GithubButton } from "./GithubButton";

export const Footer = () => {
  return (
    <footer
      className="relative w-full shadow-xl rounded-t-lg text-black py-8
    bg-gradient-to-r from-white via-yellow-200 to-yellow-300"
    >
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Colonne 2 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-4">
          <h2 className="text-xl font-bold mb-4">Get Code</h2>
          <ul>
            <div>
              <GithubButton />
            </div>
          </ul>
        </div>
        {/* Colonne 3 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-4">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <ul>
            <li>
              <Link
                href="https://github.com/Aman254/PrimeFitnessStudio"
                className="block hover:text-gray-600"
              >
                Email
              </Link>
            </li>
          </ul>
        </div>
        {/* Colonne 4 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-4">
          <h2 className="text-xl font-bold mb-4">Connect Us</h2>
          <ul>
            <li className="flex align-items">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-twitter-x mt-1"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
              <Link
                href="https://x.com/amanmishra_7"
                className="block hover:text-gray-600 ml-2"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-4/5 mt-2 mx-auto " />

      <div className="text-center mt-8">
        <p>© 2024 Prime Fitness Studio All rights reseverd.</p>
      </div>
    </footer>
  );
};
