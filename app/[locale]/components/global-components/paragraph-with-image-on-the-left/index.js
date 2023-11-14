"use client";
import { Slide } from "react-awesome-reveal";
import SectionTitle from "../section-title";
import Link from "next/link";

export default function ParagraphWithImageOnTheLeft({
  title,
  children,
  img,
  buttonTitle,
  buttonLink,
}) {
  return (
    <div className={`w-full py-16 flex flex-col lg:flex-row`}>
      <Slide direction="left" delay={600} triggerOnce>
        <div className="relative w-[700px] shrink-0 rounded-md">
          <img
            src={img?.fields.file.url ? img.fields.file.url : ""}
            alt={
              img?.fields.file.description ? img.fields.file.description : ""
            }
            className="rounded-md"
          />
        </div>
      </Slide>
      <div className="ml-16 mr-16 lg:ml-16 lg:mr-32 flex flex-col gap-2 text-lg">
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        {children}
        {buttonTitle && buttonLink && (
          <button className="mr-auto mt-6">
            <Link href={buttonLink}>{buttonTitle}</Link>
          </button>
        )}
      </div>
    </div>
  );
}
