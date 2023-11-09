import React from "react";
import { Anchor } from "./anchor";

type AuthorProps = {
  name: string;
  className?: string;
  href?: string;
};

const Author: React.FC<AuthorProps> = ({ href, name, ...other }) => {
  let formattedName = " " + name.replace(/ /g, "\u00a0") + " ";
  return href ? (
    <Anchor href={href} {...other}>
      {formattedName}
    </Anchor>
  ) : (
    <div {...other}>{formattedName}</div>
  );
};

type Props = {
  className?: string;
};

export const AkihiroKiuchi: React.FC<Props> = (props) => <Author name="Akihiro Kiuchi" href="/" {...props} />;

export const CharlesDeMalefette: React.FC<Props> = (props) => (
  <Author name="Charles de Malefette" href="https://www.linkedin.com/in/charles-de-malefette-85586822a" {...props} />
);

export const MariePauleCani: React.FC<Props> = (props) => (
  <Author
    name="Marie-Paule Cani"
    href="https://www.lix.polytechnique.fr/vista/vista-member/marie-paule_cani/"
    {...props}
  />
);

export const AmalDevParakkat: React.FC<Props> = (props) => (
  <Author name="Amal Dev Parakkat" href="https://perso.telecom-paristech.fr/parakkat/" {...props} />
);

export const AnranQi: React.FC<Props> = (props) => (
  <Author name="Anran Qi" href="https://anranqi.github.io/" {...props} />
);

export const EveMingxiaoLi: React.FC<Props> = (props) => (
  <Author name="Eve Mingxiao Li" href="https://evelimx.github.io/" {...props} />
);

export const DavidMaruscsak: React.FC<Props> = (props) => (
  <Author name="Dávid Maruscsák" href="https://ar-lab.org/authors/david-maruscsak/" {...props} />
);

export const ChristianSandor: React.FC<Props> = (props) => (
  <Author name="Christian Sandor" href="https://drsandor.net/" {...props} />
);

export const TakeoIgarashi: React.FC<Props> = (props) => (
  <Author name="Takeo Igarashi" href="https://www-ui.is.s.u-tokyo.ac.jp/~takeo/profile.html" {...props} />
);
