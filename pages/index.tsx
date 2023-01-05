import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchSocial } from "../utils/fetchSocials";
import { fetchProjects } from "../utils/fetchProjects";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="background_full text-white h-screen snap-mandatory snap-y overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-green-400/20 scrollbar-thumb-[#F7AB0A]">
      <Head>
        <title>Kevins Portfolio</title>
      </Head>
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contactMe" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex flex-col items-center justify-center">
            <ChevronDoubleUpIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer text-[#F7AB0A]" />
            <p className="text-xs">HOME</p>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      socials,
      skills,
    },
    revalidate: 100000,
  };
};
