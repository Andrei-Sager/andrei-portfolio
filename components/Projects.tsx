import { ProjectSectionContent as ProjectList } from "@/constants/SectionContent";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { IoGlobe } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";

const sizeIcon = 30;

type TagsProps = {
  tags: Array<TagProps>;
};

type TagProps = {
  id: number;
  tag: string;
};

function ProjectTags({ tags }: TagsProps) {
  return (
    <ul className="projectTags">
      {tags.map(({ id, tag }) => (
        <li key={id} className="projectTag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

type ProjectLinksProps = {
  githubUrl: string;
  livedemoUrl: string;
};

function ProjectLinks({ githubUrl, livedemoUrl }: ProjectLinksProps) {
  return (
    <div className="projectLinks">
      <a
        href={githubUrl}
        target="_blank"
        className="projectLink sectionLeading"
      >
        <BsGithub size={sizeIcon} />
        Source Code
      </a>
      <a
        href={livedemoUrl}
        target="_blank"
        className="projectLink sectionLeading"
      >
        <IoGlobe size={sizeIcon} />
        Live Demo
      </a>
    </div>
  );
}

function FeaturedProjects() {
  return (
    <div className="projectsList">
      {ProjectList.map(
        ({
          id,
          thumbnailDesktop,
          thumbnailMobile,
          desktopAlt,
          mobileAlt,
          title,
          subtitle,
          description,
          tags,
          githubUrl,
          livedemoUrl,
        }) => (
          <div key={id} className="projectItem">
            <div className="projectItem__right">
              <Link href={livedemoUrl} target="_blank">
                <div className="projectThumbnails">
                  <div className="projectThumbnailDesktop">
                    <Image
                      src={thumbnailDesktop}
                      width={950}
                      height={700}
                      alt={desktopAlt}
                      loading="lazy"
                      quality={100}
                      sizes="(min-width: 768px) 50vw, (min-width: 1024px) 75vw, (min-width: 1280px) 100vw, 25vw"
                      className="rounded-2xl object-cover object-top"
                    />
                  </div>
                  <div className="projectThumbnailMobile">
                    <div>
                      <Image
                        src={thumbnailMobile}
                        width={200}
                        height={50}
                        alt={mobileAlt}
                        loading="lazy"
                        quality={100}
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <HiOutlineExternalLink
                    size={30}
                    className="projectThumbnail__external-link"
                  />
                </div>
              </Link>
              <div className="projectTags__container">
                <ProjectTags tags={tags} />
              </div>
            </div>
            <div className="projectDetails">
              <div>
                <h1 className="sectionHeading-2 !text-center lg:!text-left">
                  {title}
                </h1>
                <h1 className="sectionOverline-2 !text-center lg:!text-left">
                  {subtitle}
                </h1>
              </div>
              {description}
              <ProjectLinks githubUrl={githubUrl} livedemoUrl={livedemoUrl} />
            </div>
          </div>
        )
      )}
    </div>
  );
}

function OtherProjects() {
  return <div>Other projects, snippets, and contributions</div>;
}

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-full flex justify-center items-center md:text-left"
    >
      <div className="flex flex-col w-full gap-[50px] sectionPadding">
        <div className="">
          <h1 className="sectionOverline !text-center">Projects</h1>
          <h1 className="sectionHeading !text-center">
            Check Out My Projects!
          </h1>
        </div>
        <FeaturedProjects />
        {/* <div className="">
              <h1 className="sectionOverline">{overline}</h1>
              <h1 className="sectionHeader">{header}</h1>
          </div>
          <OtherProjects/> */}
      </div>
    </div>
  );
}
