import type { NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import {
  ElasticAnimatableText,
  Button,
  ProjectCard,
  BlogCard,
  Globe,
  Tendrils,
} from "../components";
// const Globe = dynamic(() => import("../components/Globe"));
import { socialLinks } from "../constants";
import { useBreakpoints } from "../hooks";
import { Section, Container } from "../layouts";
import {
  getAllFilesFrontMatter,
  getAllPortfolioFilesData,
  GreyMatter,
  Portfolio,
} from "../lib/mdx";
import { useInView } from "react-intersection-observer";
import { ElasticAnimatableTextProps } from "../components/ElasticAnimatableText";
import { SocialLinks } from "../types";
import InlineLink from "../components/Link";
import Link from "next/link";

const Home: NextPage<{ posts: GreyMatter[]; projects: Portfolio[] }> = ({
  posts,
  projects,
}) => {
  const introHeading: Partial<ElasticAnimatableTextProps>[] = [
    { text: "Hi,", level: 1 },
    { text: "I'm Sherry.", level: 1 },
  ];
  const { queryBreakpoints } = useBreakpoints();
  const { ref, inView } = useInView();

  let radius = 400 / 1.5;
  if (queryBreakpoints("lg")) {
    radius = 300 / 1.5;
  }
  if (queryBreakpoints("xs")) {
    radius = 190 / 1.5;
  }
  const filterRecentPosts = useMemo(() => {
    return posts
      .sort(
        (a, b) =>
          Number(new Date(a.publishDate)) - Number(new Date(b.publishDate))
      )
      .slice(0, 2);
  }, []);

  return (
    <>
      {!queryBreakpoints("lg") && <Tendrils options={{}} />}
      <Container>
        <section className="relative h-[calc(100vh-8rem)]  flex items-center">
          <div className="inline-block text-left pb-8">
            {introHeading.map((val, i) => {
              return (
                <ElasticAnimatableText
                  key={i}
                  stagger
                  blockStagger
                  previousBlockSize={introHeading[i - 1]?.text?.length || 0}
                  {...(val as ElasticAnimatableTextProps)}
                />
              );
            })}

            <div className="mt-8">
              <p className="mt-4 text-lg font-medium text-gray-300 max-w-2xl">
                I'm a Software Engineer currently focused on building building
                exceptional digital experience for the web at{" "}
                <InlineLink href={SocialLinks.Remotebase}>
                  Remotebase
                </InlineLink>
              </p>
              <a
                className="m-auto"
                href={`mailto:${socialLinks.email}`}
                rel="noopener noreferrer"
              >
                <Button className=" mt-10">Get In touch</Button>
              </a>
            </div>
          </div>
        </section>
        <Section title="About Me">
          <div className="grid grid-cols-12 ">
            <div className=" pt-16 pb-8 col-span-12 xl:col-span-6">
              <p>
                Hi! I am Sheharyar Anwar and I am a web developer based in{" "}
                Pakistan. I realized my true calling was in the world of
                programming when I took an introductory programming course while
                pursuing engineering. It was love at first sight and I haven't
                looked back ever since.
              </p>
              <p className="my-4">
                I now have a Bachelor&apos;s degree in Computer Sciences, and
                have been active as a web developer ever since I started my
                career as a freelance developer back in 2020.
              </p>
              <p className="mb-4">
                I have had the opportunity to work at fast growing, high impact
                startups like{" "}
                <InlineLink href={SocialLinks.Qureos}>Qureos</InlineLink> and{" "}
                <InlineLink href={SocialLinks.Remotebase}>
                  Remotebase
                </InlineLink>{" "}
                as a frontend lead to create digital experiences and products
                with focus on accessibility, performance and maintainability.
              </p>
              <p>
                When I am not working, I like to indulge myself in anime, web
                novels and scientific documentaries.{" "}
              </p>
            </div>
            <div
              ref={ref}
              className="flex items-center justify-center xl:justify-end col-span-12 xl:col-span-6"
            >
              {inView && <Globe radius={radius} />}
            </div>
          </div>
        </Section>
        <Section title="Featured Projects">
          {projects.map((val, i) => {
            let reversed = i % 2 === 0;

            return val.featured ? (
              <ProjectCard key={i} {...val} reversed={!reversed} />
            ) : null;
          })}
          <Link href={`/portfolio`}>
            <a className="m-auto">
              <Button>See More</Button>
            </a>
          </Link>
        </Section>
        <Section title="Featured Articles">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10 py-16">
            {filterRecentPosts.map((val, i) => {
              return <BlogCard key={i} {...val} />;
            })}
            {/* <BlogCard></BlogCard>
            <BlogCard></BlogCard> */}
          </div>
          <Link href={`/blog`}>
            <a className="m-auto">
              <Button>See More</Button>
            </a>
          </Link>
        </Section>
      </Container>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const post = await getAllFilesFrontMatter("blog");
  const projects = await getAllPortfolioFilesData();

  return { props: { posts: post, projects } };
}
