import FeaturedProjectsCard from "./FeaturedProjectsCard";

import { FeaturedProjectsData } from "@/constants";

interface TagProps {
  id: number;
  tag: string;
}

// MongoDb
// interface tagProps {
//   name?: string;
//   type?: string;
// }

export default function FeaturedProjects() {
  // const featuredProjects = await getFeaturedProjects();

  return (
    <div className="featured-projects">
      <div className="grid-cols-1 md:grid-cols-2">
        <h1 className="sectionOverline">Featured Projects</h1>
        <h1 className="sectionHeading">My Best Works</h1>
      </div>
      <div className="featured-projects__map">
        {FeaturedProjectsData.map((project) => (
          <FeaturedProjectsCard
            key={project.id}
            title={project.title !== null ? project.title : ""}
            subtitle={project.subtitle !== null ? project.subtitle : ""}
            description={
              project.description !== null ? project.description : ""
            }
            desktopThumbnail={
              project.desktopThumbnail !== null ? project.desktopThumbnail : ""
            }
            desktopAlt={project.desktopAlt !== null ? project.desktopAlt : ""}
            mobileThumbnail={
              project.mobileThumbnail !== null ? project.mobileThumbnail : ""
            }
            mobileAlt={project.mobileAlt !== null ? project.mobileAlt : ""}
            platformDesktop={
              project.platformDesktop !== null ? project.platformDesktop : false
            }
            platformMobile={
              project.platformMobile !== null ? project.platformMobile : false
            }
            linkRepository={
              project.linkRepository !== null ? project.linkRepository : ""
            }
            linkLiveDemo={
              project.linkLiveDemo !== null ? project.linkLiveDemo : ""
            }
            linkCaseStudy={
              project.linkCaseStudy !== null ? project.linkCaseStudy : ""
            }
            tags={project.tags as TagProps[]}
          />
        ))}
      </div>
    </div>
  );
}
