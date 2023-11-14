import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import HeroSection from "./components/main-page/hero-section";
import HomePageAboutSection from "./components/main-page/homepage-about-section";
import { client } from "@/lib/contentful/client";
import ParagraphWithImageOnTheLeft from "./components/global-components/paragraph-with-image-on-the-left";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getContentfulContent(locale) {
  const resHomepageAboutSection = await client.getEntries({
    content_type: "homepageAboutSection",
    locale: locale,
  });

  return { homepageAboutSection: resHomepageAboutSection.items };
}

export default async function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const homepageAboutSection = (await getContentfulContent(locale))
    .homepageAboutSection[0].fields;
  console.log(homepageAboutSection);

  // const t = await useTranslations("Index");
  // const t = await getTranslator("index");

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
    </>
  );
}
