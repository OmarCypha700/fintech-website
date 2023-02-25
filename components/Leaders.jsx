import Image from "next/image";
import Profile1 from "../public/profile1.webp";
import Profile2 from "../public/profile2.webp";
import Profile3 from "../public/profile3.webp";

export default function Leaders() {
  return (
    <div className="py-6">
      <h2 className="text-center text-xl font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>

      <div className="flex flex-col py-4 gap-4 md:flex-row md:justify-center items-center ">
        <div className="md:w-1/6 w-4/6 ">
          <Image
            src={Profile1}
            alt="profile picture"
            className="w-6/6 h-64 md:h-56 rounded-lg overflow-hidden"
          />

          <p className="text-md pt-2">Omar Cypha</p>
          <p className="text-gray-500 text-sm">Lorem ipsium</p>
        </div>

        <div className="md:w-1/6 w-4/6">
          <Image
            src={Profile2}
            alt="profile picture"
            className="w-6/6 h-64 md:h-56 rounded-lg overflow-hidden"
          />

          <p className="text-md pt-2">Omar Cypha</p>
          <p className="text-gray-500 text-sm">Lorem ipsium</p>
        </div>

        <div className="md:w-1/6 w-4/6">
          <Image
            src={Profile3}
            alt="profile picture"
            className="w-6/6 h-64 md:h-56 rounded-lg overflow-hidden"
          />

          <p className="text-md pt-2">Omar Cypha</p>
          <p className="text-gray-500 text-sm">Lorem ipsium</p>
        </div>
      </div>
    </div>
  );
}
