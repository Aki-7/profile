import Image, { StaticImageData } from "next/image";

import perfectFitImage from "../../public/perfect-fit.webp";
import { Anchor } from "../component/anchor";

type Props = {
  title: string;
  venue: string;
  doi: string;
  image: StaticImageData;
  abstract: string;
  authors: React.FC<{ className?: string }>[];
  video: string;
  citation: string;
};

const ResearchPage: React.FC<Props> = ({ title, venue, doi, image, abstract, authors, video, citation }) => {
  return (
    <main className="min-h-screen min-w-full bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto bg-red-050 py-12 px-4 sm:px-10">
        <div className="grid grid-cols-12 gap-8 text-sm lg:text-base">
          <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8">
            <p className="text-center">{venue}</p>
            <h1 className="mt-4 text-xl lg:text-4xl text-center font-bold">{title}</h1>
            <p className="mt-4 text-lg text-center leading-normal lg:leading-loose">
              {authors.map((author, i) => author.call(author, { className: "mx-2 text-sm lg:text-xl lg:mx-4" }))}
            </p>
            <div className="mt-4 text-center">
              <Anchor href={`https://doi.org/${doi}`} className="text-xs lg:text-sm">
                DOI: {doi}
              </Anchor>
            </div>
            <Image src={image} alt="Representative Image" className="mt-4" />
            <p className="mt-8 font-bold">Abstract</p>
            <p className="mt-2">{abstract}</p>
            <p className="mt-8 font-bold">Video</p>
            <div className="relative h-0 pb-[75%] mt-2">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={video}
                width="640"
                height="480"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={title}
              />
            </div>
            <p className="mt-8 font-bold">Citation</p>
            <p className="mt-2 text-xs lg:text-sm">{citation}</p>
            <div className="mb-28" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResearchPage;
