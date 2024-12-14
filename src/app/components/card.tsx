import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="bg-black flex-justify-center justify-center min-h-screen container-mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="Card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src="/p1.jpg" alt="/p1.jpg" width={500} height={500} />
            </div>
            <h5 className="text-white text-2xl md:text-3xl font-medium">
              Electric stove
            </h5>
            <p className="text-white text-lg mt-3">
              Electric Stove for cooking, Hot Plate heat up in just 2 mins, Easy
              to clean, 1000W, Automatic.
            </p>
            <a
              href="#"
              className="text-center bg-white text-black py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out"
            >
              Explore
            </a>
          </div>
        </div>

        <div className="Card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src="/p2.jpg" alt="/p2.jpg" width={500} height={500} />
            </div>
            <h5 className="text-white text-2xl md:text-3xl font-medium">
              Air-Fryer
            </h5>
            <p className="text-white text-lg mt-3 ">
              Shop from Cookinex for deep fryers, air fryers and turkey fryers.
              Choose from a variety of sizes and models to suit your family.
            </p>
            <a
              href="#"
              className="text-center bg-white text-black py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out"
            >
              Explore
            </a>
          </div>
        </div>

        <div className="Card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src="/p3.webp" alt="/p3.webp" width={500} height={500} />
            </div>
            <h5 className="text-white text-2xl md:text-3xl font-medium">
              Chopper
            </h5>
            <p className="text-white text-lg mt-3">
              AGCO and LOVA Imported Stainless Steel Electric Kitchen Meat
              Grinder, Chopper + Food Processor Machine With Handle -AL-1969 .
            </p>
            <a
              href="#"
              className="text-center bg-white text-black py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out"
            >
              Explore
            </a>
          </div>
        </div>

        <div className="Card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src="/p4.webp" alt="/p4.webp" width={500} height={500} />
            </div>
            <h5 className="text-white text-2xl md:text-3xl font-medium">
              Blender
            </h5>
            <p className="text-white text-lg mt-3 ">
              {" "}
              DAWLANCE TABLE BLENDER DWTB-590 WHITE .
            </p>
            <a
              href="#"
              className="text-center bg-white text-black py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out"
            >
              Explore
            </a>
          </div>
        </div>

        <div className="Card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src="/p5.jpeg" alt="/p5.jpeg" width={500} height={500} />
            </div>
            <h5 className="text-white text-2xl md:text-3xl font-medium">
              Mixture
            </h5>
            <p className="text-white text-lg mt-3">
              Kenwood KHC29.W0SI Stand Mixer Kitchen Machine PROSPERO+ 1000W
              Food Processor Multi Mill Silver.
            </p>
            <a
              href="#"
              className="text-center bg-white text-black py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out"
            >
              Explore
            </a>
          </div>
        </div>

        <div className="Card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src="/p6.jpg" alt="/p6.jpg" width={500} height={500} />
            </div>
            <h5 className="text-white text-2xl md:text-3xl font-medium">
              Electric kettle
            </h5>
            <p className="text-white text-lg mt-3">
              MAJAIT ELECTRIC KETTLE MJ-K402 .
            </p>
            <a
              href="#"
              className="text-center bg-white text-black py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
