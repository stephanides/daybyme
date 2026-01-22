import Image from "next/image";
import { MediaHouseLogo } from "./components/MediaHouseLogo";
import { FacesLogo } from "./components/FacesLogo";
import { DaybymeLogo } from "./components/DaybymeLogo";

const CardLink = ({
  image,
  title,
  href,
  linkLabel,
  description,
  logo,
  color,
}: {
  image: string;
  title: string;
  href: string;
  linkLabel: string;
  description: string;
  logo: React.ReactNode;
  color?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ height: "100%" }}
  >
    <div
      className={`bg-#1A1A1A overflow-hidden border border-[5px] py-5 px-6 h-full flex flex-col`}
      style={{ borderColor: color || "#000000" }}
    >
      <div className="relative aspect-[378/314]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col items-start justify-between h-full">
        <p
          className="text-white font-medium mt-5"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="mt-7">
          <h2
            className="text-[28px] md:text-[38px] font-medium"
            style={{ color: color || "#000000" }}
          >
            {title}
          </h2>

          <button className="flex font-light text-sm md:text-lg bg-white py-3 px-5 items-center gap-4 mt-5 cursor-pointer">
            <span className="text-black">{linkLabel}</span>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.049 18.445L15.9795 4.51453L16.3987 13.3194C16.4187 13.9684 16.9611 14.5287 17.6116 14.5709C18.2616 14.6128 18.7727 14.1213 18.7531 13.4719C18.7528 13.4583 18.7518 13.4446 18.7511 13.4314L18.1964 1.78707C18.1655 1.13754 17.6141 0.586156 16.9642 0.554826L5.32026 0.000500244C4.67166 -0.0190964 4.17941 0.49194 4.22125 1.14199C4.26272 1.77607 4.79776 2.31111 5.43184 2.35258L14.2367 2.77175L0.306221 16.7022C-0.131183 17.1396 -0.095732 17.8843 0.385401 18.3654C0.866534 18.8466 1.61119 18.882 2.04859 18.4446L2.049 18.445Z"
                fill="#FF5C60"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </a>
);

export default function Home() {
  return (
    <div className="bg-[#1A1A1A] min-h-screen pb-25">
      <main>
        <h1 className="text-[42px] md:text-[72px] lg:text-[120px] font-extrabold text-white text-center px-4 md:px-12 pt-26">
          HELLO, WE ARE DAYBYME MEDIA HOUSE
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
          <CardLink
            image="/daybyme-media-house.jpg"
            title="Digital-first marketing agency. "
            href="https://daybymemediahouse.com/"
            linkLabel="DAYBYMEMEDIAHOUSE.COM"
            description="FULLSERVICE MARKETING<br /> AGENCY"
            logo={<MediaHouseLogo />}
            color="#FF5C60"
          />
          <CardLink
            image="/faces.jpg"
            title="Let the microinfluencers speak for you."
            href="https://www.facesbydaybyme.com/"
            linkLabel="FACESBYDAYBYME.COM"
            description="MICROINFLUENCER<br /> MARKETING"
            logo={<FacesLogo />}
            color="#FAA51C"
          />
          <CardLink
            image="/daybyme.jpg"
            title="Your digital lifestyle diary."
            href="https://www.daybyme.com/dbm"
            linkLabel="DAYBYME.COM"
            description="SOCIAL MEDIA<br /> PLATFORM"
            logo={<DaybymeLogo />}
            color="#FFFFFF"
          />
        </div>
      </main>
    </div>
  );
}
