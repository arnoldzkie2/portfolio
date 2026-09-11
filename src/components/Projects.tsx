import FlowLines from "./FlowLines";
import { Icon } from "@/components/ui/icon";
import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { projectTexts, expertiseTexts } from "@/lib/texts";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const previewBackgrounds = [
  "bg-[#242924]",
  "bg-[#252c32]",
  "bg-[#302b25]",
  "bg-[#272635]",
  "bg-[#2d3025]",
];

export default function Projects() {
  return (
    <section
      id="Projects"
      className="relative isolate py-[104px] max-md:py-16 w-[min(1184px,calc(100%-96px))] mx-auto max-md:w-[calc(100%-40px)]"
    >
      <FlowLines variant="projects" />
      <SectionHeading
        number="01"
        label="Selected work"
        title="From idea to out in the world."
        description="A selection of websites, products, and tools. Each one a different problem, thoughtfully solved."
      />
      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
        {projectTexts.projects.map((project, index) => (
          <article
            key={project.name}
            className={`project-card min-w-0 ${index === 0 ? "col-span-full grid items-center gap-8 rounded-xl border border-border bg-card p-6 md:grid-cols-[1.35fr_1fr] lg:gap-12 lg:p-8 max-md:p-4 max-md:gap-4" : ""}`}
          >
            <a
              href={project.links.web}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-preview block overflow-hidden rounded-lg border border-border pb-0 [&:hover_img]:scale-[1.025] ${previewBackgrounds[index % previewBackgrounds.length]} ${index === 0 ? "px-4 pt-4" : "px-5 pt-5"}`}
              aria-label={`Visit ${project.name} (opens in a new tab)`}
            >
              <div
                className="flex h-7 items-center justify-between rounded-t-md bg-[#171a17] px-3 font-mono text-[8px] text-white/50 [&_span:first-child]:tracking-[2px] [&_span:first-child]:text-white/30"
                aria-hidden="true"
              >
                <span className="flex gap-1">
                  <i className="h-1 w-1 rounded-full bg-current" />
                  <i className="h-1 w-1 rounded-full bg-current" />
                  <i className="h-1 w-1 rounded-full bg-current" />
                </span>
                <span>{new URL(project.links.web).hostname}</span>
                <span>
                  <Icon
                    icon={faArrowUpRightFromSquare}
                    width={14}
                    height={14}
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden [&_img]:transition-transform [&_img]:duration-500 [&_img]:ease-[ease]">
                <Image
                  src={project.image}
                  alt={`${project.name} website preview`}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 767px) 90vw, 700px"
                      : "(max-width: 767px) 90vw, 560px"
                  }
                  className="object-cover object-top transition-transform duration-500"
                />
              </div>
            </a>
            <div className={index === 0 ? "py-2" : "pt-6"}>
              <p className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-accent [&_>_span]:text-muted-foreground">
                {String(index + 1).padStart(2, "0")} /{" "}
                {index === 0 ? "Featured project" : "Web development"}
              </p>
              <h3
                className={`my-3 font-medium tracking-[-0.04em] ${index === 0 ? "text-3xl" : "text-2xl"}`}
              >
                <a
                  href={project.links.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-accent"
                >
                  {project.name}
                  <span
                    aria-hidden="true"
                    className="text-lg text-muted-foreground"
                  >
                    <Icon
                      icon={faArrowUpRightFromSquare}
                      width={14}
                      height={14}
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
              <ul
                className="mt-5 flex flex-wrap gap-2 [&_li]:rounded [&_li]:border [&_li]:border-border [&_li]:px-2 [&_li]:py-1 [&_li]:font-mono [&_li]:text-[9px] [&_li]:text-muted-foreground"
                aria-label="Technologies used"
              >
                {project.used.map((icon) => (
                  <li key={icon}>
                    {expertiseTexts.skills.tech.skills.find(
                      (skill) => skill.icon === icon,
                    )?.title ?? icon.split("/").pop()?.replace(".svg", "")}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-6 text-xs">
                <a
                  href={project.links.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent focus-visible:text-accent"
                  aria-label={`Visit ${project.name}`}
                >
                  View project{" "}
                  <Icon
                    icon={faArrowUpRightFromSquare}
                    width={14}
                    height={14}
                    aria-hidden="true"
                  />
                </a>
                {project.links.github !== project.links.web && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent focus-visible:text-accent"
                    aria-label={`View ${project.name} source code`}
                  >
                    Source code{" "}
                    <Icon
                      icon={faCode}
                      width={14}
                      height={14}
                      aria-hidden="true"
                    />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
