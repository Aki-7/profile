import { AmalDevParakkat, AnranQi, CharlesDeMalefette, MariePauleCani, TakeoIgarashi } from "../component/authors";

import PerfectDartImage from "../../public/perfect-dart.webp";
import ResearchPage from "../component/research-page";

let authors = [CharlesDeMalefette, AnranQi, TakeoIgarashi, MariePauleCani, AmalDevParakkat];

const abstract = `
Dart, a triangle-shaped folded and stitched tuck in a garment, is
a common sewing technique used to provide custom-fit garments.
Unfortunately, designing and optimally placing these darts requires
knowledge and practice, making it challenging for novice users. We
propose a novel computational dart design framework that takes
rough user cues (the region where the dart will be inserted) and
computes the optimal dart configurations to improve fitness. To
be more specific, our framework utilizes the body-garment rela-
tionship to quantify the fitting using a novel energy composed of
three geometric terms: 1) closeness term encoding the proximity
between the garment and the target body, 2) stretchability term
favouring area-preserving cloth deformation, and 3) smoothness
term promoting an unwrinkled and unfolded garment. We evaluate
these three geometric terms via off-the-shelf cloth simulation and
use it to optimize the dart configuration by minimizing the energy.
As demonstrated by our results, our method is able to automatically
generate darts to improve fitness for various garment designs and
a wide range of body shapes, including animals`;

const citation = `
Charles de Malefette, Anran Qi, Amal Dev Parakkat, Marie-Paule Cani,
and Takeo Igarashi. 2023. PerfectDart: Automatic Dart Design for Garment
Fitting. In SIGGRAPH Asia 2023 Technical Communications (SA Technical
Communications ’23), December 12–15, 2023, Sydney, NSW, Australia. ACM,
New York, NY, USA, 4 pages. https://doi.org/10.1145/3610543.3626154`;

const Page = () => (
  <ResearchPage
    title="PerfectDart: Automatic Dart Design for Garment Fitting"
    venue="SIGGRAPH Asia 2023 Technical Communications"
    doi="10.1145/3610543.3626154"
    image={PerfectDartImage}
    abstract={abstract}
    authors={authors}
    video="https://www.youtube.com/embed/jgdq_a5qpcg?si=IOV5JakaA7cm44jY"
    citation={citation}
  />
);

export default Page;
