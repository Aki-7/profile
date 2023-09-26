import Image from "next/image";
import {
  AkihiroKiuchi,
  AnranQi,
  ChristianSandor,
  DavidMaruscsak,
  EveMingxiaoLi,
  TakeoIgarashi,
} from "../component/authors";

import perfectFitImage from "../../public/perfect-fit.webp";
import { Anchor } from "../component/anchor";

let authorList = [AkihiroKiuchi, AnranQi, EveMingxiaoLi, DavidMaruscsak, ChristianSandor, TakeoIgarashi];

export default function Page() {
  return (
    <main className="min-h-screen min-w-full bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto bg-red-050 py-12 px-4 sm:px-10">
        <div className="grid grid-cols-12 gap-8 text-sm lg:text-base">
          <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8">
            <p className="text-center">SIGGRAPH Asia 2023 XR</p>
            <h1 className="mt-4 text-xl lg:text-4xl text-center font-bold">
              PerfectFit: Custom-Fit Garment Design in Augmented Reality
            </h1>
            <p className="mt-4 text-lg text-center leading-normal lg:leading-loose">
              {authorList.map((author, i) => author.call(author, { className: "mx-2 text-sm lg:text-xl lg:mx-4" }))}
            </p>
            <div className="mt-4 text-center">
              <Anchor href="https://doi.org/10.1145/3610549.3614592" className="text-xs lg:text-sm">
                DOI: 10.1145/3610549.3614592
              </Anchor>
            </div>
            <Image src={perfectFitImage} alt="Representative Image" className="mt-4" />
            <p className="mt-8 font-bold">Abstract</p>
            <p className="mt-2">
              {`
              The mass production of the garment under a standard size in the garment industry does not consider
              individual body shape differences, resulting in unfitted garments and severe overproduction. Unluckily,
              the traditional tailor-fitting process is time-consuming, labour-intensive and expensive. We present
              PerfectFit, an interactive AR garment design system for fitting garments based on individual body shapes.
              Our system simulates the virtual garment reacting realistically to the client's body shape and motion, and
              displays stereoscopic images to the designer via the AR glass. This enables the designer to identify the
              garment fitting via the client's real-time motion from any viewpoint. Additionally, our system provides an
              editing interface to the designer which allows he/she interactively explores the design space of the
              garment and adjusts the fitting. Our system then reflects the changes on the client's body. For the
              exhibit, visitors will play the role of the designer and interact with a person who plays the role of the
              client. The visitor designer role wears the AR Glass and can view the garment fitting issue on the
              client's body. The visitor can explore the garment design space freely, and the author will provide slight
              guidance to the visitor on where and how to edit the garment to achieve better fits when needed. Our
              system will give the visitor an immersive experience of customizing the garment like a tailor.
              `}
            </p>
            <p className="mt-8 font-bold">Video</p>
            <div className="relative h-0 pb-[75%] mt-2">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://drive.google.com/file/d/1HpvDs7XrVFOd3XMKP3e92RN9I4JqlunK/preview"
                width="640"
                height="480"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-8 font-bold">Citation</p>
            <p className="mt-2 text-xs lg:text-sm">
              Akihiro Kiuchi, Anran Qi, Eve Mingxiao Li, Dávid Maruscsák, Christian Sandor, and Takeo Igarashi. 2023.
              PerfectFit: Custom-Fit Garment Design in Augmented Reality. In SIGGRAPH Asia 2023 XR (SA XR ’23), December
              12–15, 2023, Sydney, NSW, Australia. ACM, New York, NY, USA, 2 pages.
              https://doi.org/10.1145/3610549.3614592
            </p>
            <div className="mb-28" />
          </div>
        </div>
      </div>
    </main>
  );
}
