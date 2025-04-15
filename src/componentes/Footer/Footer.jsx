import React, { useEffect, useState } from "react";
import { Footer , FooterCopyright} from "flowbite-react";

export default function MainFooter() {
  const [first, setfirst] = useState(0);

  useEffect(() => {}, []);

  return (
    <>
     <footer className="bg-teal-700 text-white mt-16 py-6">
     <div className=" mx-auto text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} <a href="https://my-portfolio-five-murex-15.vercel.app/" className="underline hover:text-gray-200" target="_blank" rel="noopener noreferrer">Raslan</a>. All rights reserved.
    </p>
     </div>
    </footer>
    </>
  );
}




