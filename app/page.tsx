import Image, { StaticImageData } from "next/image";
import profileImage from "../public/profile.webp";
import { Anchor } from "../app/component/anchor";
import twitterIcon from "../public/twitter.webp";
import githubIcon from "../public/github.webp";
import cvIcon from "../public/cv.svg";
import zwinImage from "../public/zwin.webp";
import zigenPosterImage from "../public/zigen-poster.webp";
import jenkinsImage from "../public/jenkins.webp";
import React from "react";

const UILab = () => <Anchor href="https://www-ui.is.s.u-tokyo.ac.jp/en/">User Interface Research Group</Anchor>;
const UTokyo = () => <Anchor href="https://www.u-tokyo.ac.jp/en/index.html">the University of Tokyo</Anchor>;
const Igarashi = () => <Anchor href="https://www-ui.is.s.u-tokyo.ac.jp/~takeo/index.html">Takeo Igarashi</Anchor>;

const Twitter = ({ href, accountName }: { href: string; accountName: string }) => (
  <Anchor href={href} className="text-lg">
    <Image src={twitterIcon} alt="twitter" className="w-5 inline mr-2 align-text-middle" />
    {accountName}
  </Anchor>
);

const GitHub = ({ href, accountName }: { href: string; accountName: string }) => (
  <Anchor href={href} className="text-lg">
    <Image src={githubIcon} alt="github" className="w-5 inline mr-2 mb-1" />
    {accountName}
  </Anchor>
);

const CV = () => (
  <Anchor href="https://github.com/Aki-7/Aki-7/blob/main/CV.adoc" className="text-lg">
    <Image src={cvIcon} alt="github" className="w-5 inline mr-2 mb-1" />
    CV
  </Anchor>
);

type ProjectItemProps = {
  title: string;
  link: string;
  image: StaticImageData;
  children?: React.ReactNode;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ title, children, link, image }) => (
  <>
    <div className="col-start-1 col-span-12 lg:col-start-2 lg:col-span-3">
      <Anchor href={link}>
        <Image src={image} alt={title} />
      </Anchor>
    </div>
    <div className="col-start-1 col-span-12 lg:col-start-5 lg:col-span-7">
      <Anchor href={link}>
        <h3 className="text-center text-xl lg:text-left lg:text-2xl">{title}</h3>
      </Anchor>
      <div className="text-left text-sm lg:text-base">{children}</div>
    </div>
  </>
);

type PublicationItemProps = {
  image: StaticImageData;
  link: string;
  title: string;
  authors: string;
  publish: string;
};

const PublicationItem: React.FC<PublicationItemProps> = ({ image, link, title, authors, publish }) => (
  <>
    <div className="col-start-1 col-span-12 lg:col-start-2 lg:col-span-3">
      <Anchor href={link}>
        <Image src={image} alt={title} />
      </Anchor>
    </div>
    <div className="col-start-1 col-span-12 lg:col-start-5 lg:col-span-7">
      <Anchor href={link}>
        <h3 className="text-center text-lg lg:text-left lg:text-xl">{title}</h3>
      </Anchor>
      <div className="text-left text-sm lg:text-base italic">{authors}</div>
      <div className="text-left text-sm lg:text-base italic">{publish}</div>
    </div>
  </>
);

export default function Home() {
  return (
    <main className="min-h-screen min-w-full bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto bg-red-050 py-12 px-4 sm:px-10">
        <div className="grid grid-cols-12 gap-8 text-sm lg:text-base">
          <div className="col-start-3 col-span-8 lg:col-start-2 lg:col-span-3 text-center">
            <Image src={profileImage} alt="Picture of Akihiro Kiuchi" placeholder="blur" />
          </div>

          <div className="col-start-1 col-span-12 mt-4 lg:col-span-7 lg:mt-0">
            <h1 className="text-3xl lg:text-4xl text-center lg:text-left">Akihiro Kiuchi</h1>
            <div className="mt-4">
              <div className="text-center lg:inline-block lg:mr-5">
                <GitHub href="https://github.com/Aki-7" accountName="Aki-7" />
              </div>
              <div className="text-center mt-1 lg:mt-0 lg:inline-block lg:mr-5">
                <Twitter href="https://twitter.com/akihiro_kiuchi" accountName="akihiro_kiuchi" />
              </div>
              <div className="text-center mt-1 lg:mt-0 lg:inline-block">
                <CV />
              </div>
            </div>
            <div className="mt-4 text-left">
              {"I'm"} a first-year Ph.D student in <UILab /> at <UTokyo />, advised by Prof. <Igarashi />.
            </div>
            <div className="mt-4 text-left">
              {`
              My interest is in tools, systems, and standardizations that support creative activities such as
              engineering, design, research, and so on. As for research, I am exploring the possibility of a new mixed
              reality application paradigm where users can simultaneously use multiple applications from different
              developers in a single mixed reality space. This will allow users to select and combine applications from
              the market that suit their work and preferences. It will also make it easier for application developers to
              enter the market, as they will only need to provide the functionality they want to offer. I hope this will
              lead to an inclusive market where developers of all sizes can participate in mixed reality development.
                `}
            </div>
          </div>

          <div className="col-start-1 col-span-12 lg:col-start-2 lg:col-span-10">
            <h2 className="text-2xl lg:text-3xl text-center lg:text-left">Project</h2>
            <hr className="mt-3 border-gray-300" />
          </div>

          <ProjectItem title="Zwin: XR Windowing System" image={zwinImage} link="https://www.zwin.dev">
            <div className="mt-3 lg:mt-2">
              <div className="text-center lg:inline-block lg:mr-5">
                <GitHub href="https://github.com/zwin-project" accountName="zwin-project" />
              </div>
              <div className="text-center mt-1 lg:mt-0 lg:inline-block">
                <Twitter href="https://twitter.com/zwin_project" accountName="zwin_project" />
              </div>
            </div>
            <div className="mt-4">
              Zwin is a Linux windowing system for XR. It allows you to use multiple 3D applications side by side, just
              like on 2D desktops.
            </div>
            <div className="mt-4">
              Talks: <Anchor href="https://youtu.be/g_MvbwKp8Uk">{"MITOU'21"}</Anchor> (Japanese),{" "}
              <Anchor href="https://youtu.be/yS6kJgclavs">{"MITOU Advanced'22"}</Anchor> (Japanese).
            </div>
          </ProjectItem>

          <div className="col-start-3 col-span-8">
            <hr />
          </div>

          <ProjectItem
            title="Jenkins Remoting Monitoring (Google Summer of Code'21)"
            image={jenkinsImage}
            link="https://www.jenkins.io/projects/gsoc/2021/projects/remoting-monitoring/"
          >
            <div className="mt-3 lg:mt-2">
              <div className="text-center lg:inline-block lg:mr-5">
                <GitHub
                  href="https://github.com/jenkinsci/remoting-opentelemetry-plugin"
                  accountName="remoting-opentelemetry-plugin"
                />
              </div>
            </div>
            <div className="mt-4">
              This project supports monitoring and troubleshooting of Jenkins remoting system with OpenTelemetry.
            </div>
            <div className="mt-4">
              Talks:{" "}
              <Anchor href="https://www.cloudbees.com/videos/jenkins-remoting-monitoring-with-opentelemetry">
                {"DevOpsWorld'21"}
              </Anchor>
              , <Anchor href="https://cloudbees.techmatrix.jp/jenkins-day-japan2021">Jenkins Day Japan</Anchor> (No
              public archive).
            </div>
          </ProjectItem>

          <div className="col-start-1 col-span-12 lg:col-start-2 lg:col-span-10">
            <h2 className="text-2xl lg:text-3xl text-center lg:text-left">Publication (Poster)</h2>
            <hr className="mt-3 border-gray-300" />
          </div>

          <PublicationItem
            image={zigenPosterImage}
            title="ZIGEN: A Windowing System Enabling Multitasking Among 3D and 2D Applications in Immersive Environments"
            link="https://doi.org/10.1145/3532719.3543200"
            authors="Akihiro Kiuchi, Taishi Eguchi, Jun Rekimoto, Manabu Tsukada, and Hiroshi Esaki."
            publish="In ACM SIGGRAPH 2022 Posters."
          />
        </div>
      </div>
    </main>
  );
}
