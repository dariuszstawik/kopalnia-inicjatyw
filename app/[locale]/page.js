import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import HeroSection from "./components/main-page/hero-section";
import HomePageAboutSection from "./components/main-page/homepage-about-section";
import { client } from "@/lib/contentful/client";
import ParagraphWithImageOnTheLeft from "./components/global-components/paragraph-with-image-on-the-left";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import HomepageProjectsSection from "./components/main-page/homepage-projects-section";
import HomepageNewsSection from "./components/main-page/homepage-news-section";
import PartnersSection from "./components/main-page/partners-section";
// import locales from "..";

async function getContentfulContent(locale) {
  const resHomepageAboutSection = await client.getEntries({
    content_type: "homepageAboutSection",
    locale: locale,
  });

  // const resNews = await client.getEntries({
  //   content_type: "news",
  //   locale: locale,
  // });

  const resProjects = await client.getEntries({
    content_type: "project",
    locale: locale,
  });
  const resPartners = await client.getEntries({
    content_type: "partners",
    locale: locale,
  });

  return {
    homepageAboutSection: resHomepageAboutSection.items,
    // news: resNews.items,
    projects: resProjects.items,
    partners: resPartners.items,
  };
}

export default async function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const homepageAboutSection = (await getContentfulContent(locale))
    .homepageAboutSection[0].fields;

  // const newsPosts = (await getContentfulContent(locale)).news;

  const projects = (await getContentfulContent(locale)).projects;

  const partners = (await getContentfulContent(locale)).partners;

  return (
    <>
      <HeroSection />
      {/* <section>
        <div>{t("title")}</div>
      </section> */}
      {/* <HomePageAboutSection /> */}
      <ParagraphWithImageOnTheLeft
        title={homepageAboutSection.title}
        buttonTitle={homepageAboutSection.buttonTitle}
        buttonLink={homepageAboutSection.buttonLink}
        img={homepageAboutSection.image}
      >
        {documentToReactComponents(homepageAboutSection.content)}
      </ParagraphWithImageOnTheLeft>
      <HomepageProjectsSection projects={projects} />
      {/* <HomepageNewsSection newsPosts={newsPosts} locale={locale} /> */}
      <PartnersSection partners={partners} />
    </>
  );
}
