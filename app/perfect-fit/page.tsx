import {
  AkihiroKiuchi,
  AnranQi,
  ChristianSandor,
  DavidMaruscsak,
  EveMingxiaoLi,
  TakeoIgarashi,
} from "../component/authors";

import PerfectFitImage from "../../public/perfect-fit.webp";
import ResearchPage from "../component/research-page";

let authors = [AkihiroKiuchi, AnranQi, EveMingxiaoLi, DavidMaruscsak, ChristianSandor, TakeoIgarashi];

const abstract = `
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
  system will give the visitor an immersive experience of customizing the garment like a tailor.`;

const citation = `
  Akihiro Kiuchi, Anran Qi, Eve Mingxiao Li, Dávid Maruscsák, Christian Sandor, and Takeo Igarashi. 2023.
  PerfectFit: Custom-Fit Garment Design in Augmented Reality. In SIGGRAPH Asia 2023 XR (SA XR ’23), December
  12–15, 2023, Sydney, NSW, Australia. ACM, New York, NY, USA, 2 pages.
  https://doi.org/10.1145/3610549.3614592`;

const Page = () => (
  <ResearchPage
    title="PerfectFit: Custom-Fit Garment Design in Augmented Reality"
    venue="SIGGRAPH Asia 2023 XR"
    doi="10.1145/3610549.3614592"
    image={PerfectFitImage}
    abstract={abstract}
    authors={authors}
    video="https://drive.google.com/file/d/1HpvDs7XrVFOd3XMKP3e92RN9I4JqlunK/preview"
    citation={citation}
  />
);

export default Page;
