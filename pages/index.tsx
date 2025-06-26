import { FaTwitter } from "react-icons/fa";
import { Inter } from "next/font/google";

// Load the Inter font
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        {/* Left Sidebar */}
        <div className="col-span-3 flex justify-start pt-8">
             <div className="text-blue-500 text-3xl h-fit hover:bg-blue-800 rounded-full p-2 transition duration-200 ease-in-out cursor-pointer">
               <FaTwitter />
             </div>

        </div>
        <div className="bg-red-500 hover:bg-blue-500 text-white p-4">
  Hover Test
</div>

        

        {/* Center Feed */}
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400">
          {/* Future: Add posts, tweets, etc. here */}
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
