import { FaTwitter } from "react-icons/fa";
import { Inter } from "next/font/google";

// Load the Inter font
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen ">
        {/* Left Sidebar */}
        <div className="col-span-3 flex items-center justify-center">
          <FaTwitter className="text-blue-500 text-4xl" />
        </div>

        {/* Center Feed */}
        <div className="col-span-6 border-x border-white">
          {/* Future: Add posts, tweets, etc. here */}
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
