import Image from "next/image";
import Photo1 from "../../public/photo1.png";
import Photo2 from "../../public/photo2.png";
import Photo3 from "../../public/photo3.png";
import Photo4 from "../../public/photo4.png";
import Photo5 from "../../public/photo5.png";
import Photo6 from "../../public/photo6.png";

const Team = () => {
  return (
    <section className="flex flex-wrap ml-3 md:grid md:grid-cols-3 md:gap-0 ">
        <div className="w-[156px] h-[237px] md:w-[264px] md:h-[383px]">
            <div className="">
            <p className="rotate-90 transform origin-bottom uppercase font-medium absolute z-10 mt-11 ml-[70px] md:ml-[170px]">Product owner</p>
        <Image
        src={Photo1}
        alt="teams"
        className="w-[138.72px] md:w-[238px] h-auto relative object-contain "
        />
        </div>
        <p className="text-xl font-extrabold mt-2">Bill Mahoney</p>
        </div>
        <div className="w-[157px] h-[237px] mt-14 ml-3 md:w-[264px] md:h-[383px]">
            <div className="">
            <p className="rotate-90 transform origin-bottom uppercase font-medium absolute z-10 mt-9 ml-[85px] md:ml-[180px] ">Art director</p>
        <Image
        src={Photo2}
        alt="teams"
        className="w-[138.72px] md:w-[238px] h-auto relative object-contain"
        />
        </div>
        <p className="text-xl font-extrabold mt-2">Saba Cabrera</p>
        </div>
        <div className="w-[156px] h-[237px] md:w-[264px] md:h-[383px]">
            <div className="">
            <p className="rotate-90 transform origin-bottom uppercase font-medium absolute z-10 mt-4 ml-[95px] md:ml-[195px] ">Tech Lead</p>
        <Image
        src={Photo3}
        alt="teams"
        className="w-[138.72px] md:w-[238px] h-auto relative object-contain"
        />
        </div>
        <p className="text-xl font-extrabold mt-2">Shae Le</p>
        </div>
        <div className="w-[157px] h-[237px] mt-14 ml-3 md:w-[264px] md:h-[383px]">
            <div className="">
            <p className="rotate-90 transform origin-bottom uppercase font-medium absolute z-10 mt-7 ml-[87px] md:ml-[185px] ">Ux designer</p>
        <Image
        src={Photo4}
        alt="teams"
        className="w-[138.72px] md:w-[238px] h-auto relative object-contain"
        />
        </div>
        <p className="text-xl font-extrabold mt-2">Skylah Lu</p>
        </div>
        <div className="w-[156px] h-[237px] md:w-[264px] md:h-[383px] mt-32">
            <div className="">
            <p className="rotate-90 transform origin-bottom uppercase font-medium absolute z-10 mt-4 ml-[95px] md:ml-[195px] ">developer</p>
        <Image
        src={Photo5}
        alt="teams"
        className="w-[138.72px] md:w-[238px] h-auto relative object-contain"
        />
        </div>
        <p className="text-xl font-extrabold mt-2">Gridd Richards</p>
        </div>
        <div className="w-[157px] h-[237px] mt-14 ml-3 md:w-[264px] md:h-[383px]">
            <div className="">
            <p className="rotate-90 transform origin-bottom uppercase font-medium absolute z-10 mt-5 ml-[94px] md:ml-[195px] ">developer</p>
        <Image
        src={Photo6}
        alt="teams"
        className="w-[138.72px] md:w-[238px] h-auto relative object-contain"
        />
        </div>
        <p className="text-xl font-extrabold mt-2">Stan John</p>
        </div>

    </section>
  )
}

export default Team
