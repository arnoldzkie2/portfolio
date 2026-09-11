import ServiceVisual from "./ServiceVisual";
import { serviceTexts, projectTexts } from "@/lib/texts";
import { Icon } from "@/components/ui/icon";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import SectionHeading from "./SectionHeading";

export default function Service() {
  return (
    <section id="Service" className="py-[104px] max-md:py-16 border-y bg-card">
      <div className="w-[min(1184px,calc(100%-96px))] mx-auto max-md:w-[calc(100%-40px)]">
        <SectionHeading
          number="04"
          label="How I can help"
          title="Your next idea, made real."
          description="A home for your business. A tool for your team. Let’s build something that earns its place."
        />
        <div className="border-t">
          {serviceTexts.services.map((service, index) => {
            const project = projectTexts.projects.find(
              (project) => project.name === service.projectName,
            );
            return (
              <article
                key={service.category}
                className="service-row grid gap-6 border-b py-9 sm:grid-cols-[48px_minmax(0,1fr)] lg:grid-cols-[64px_minmax(0,1fr)_280px] lg:gap-10 lg:py-10"
              >
                <div
                  className="flex items-center gap-4 font-mono text-sm text-muted-foreground sm:flex-col sm:items-start sm:gap-6 [&_svg]:text-accent"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                  <Icon icon={service.icon} width={22} height={22} />
                </div>
                <div className="[&_h3]:mb-4 [&_h3]:mt-4 [&_h3]:max-w-lg [&_h3]:text-3xl [&_h3]:font-medium [&_h3]:leading-tight [&_h3]:tracking-[-0.045em]">
                  <p className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-accent [&_>_span]:text-muted-foreground">
                    {service.category}
                  </p>
                  <h3>{service.title}</h3>
                  <p className="max-w-lg text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                  <ul
                    aria-label={`${service.category} deliverables`}
                    className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs [&_li]:flex [&_li]:items-center [&_li]:gap-2 [&_svg]:shrink-0 [&_svg]:text-accent"
                  >
                    {service.deliverables.map((item) => (
                      <li key={item}>
                        <Icon
                          icon={faCheck}
                          width={11}
                          height={11}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {project && (
                  <a
                    href={project.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block self-center overflow-hidden rounded-lg border border-border bg-background transition-colors hover:border-accent/50 sm:col-start-2 sm:w-full sm:max-w-[320px] lg:col-start-auto"
                    aria-label={`Explore ${project.name}, an example of ${service.category.toLowerCase()} (opens in a new tab)`}
                  >
                    <ServiceVisual index={index} />
                    <div className="flex items-center justify-between gap-4 p-4 [&_span]:text-[9px] [&_span]:uppercase [&_span]:tracking-widest [&_span]:text-muted-foreground [&_p]:mt-1 [&_p]:text-sm [&_>_svg]:text-accent">
                      <div>
                        <span>See it in practice</span>
                        <p>{project.name}</p>
                      </div>
                      <Icon
                        icon={faArrowUpRightFromSquare}
                        width={13}
                        height={13}
                        aria-hidden="true"
                      />
                    </div>
                  </a>
                )}
              </article>
            );
          })}
        </div>
        <div className="mt-9 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center [&_p]:text-sm [&_p]:leading-6 [&_p_span]:mt-1 [&_p_span]:block [&_p_span]:text-xs [&_p_span]:text-muted-foreground">
          <p>
            Have the idea, but not the full brief?
            <span>That’s a good place to start.</span>
          </p>
          <Button asChild variant="outline" className="h-11 gap-5">
            <a href="#Contact">
              Let’s figure it out{" "}
              <Icon
                icon={faArrowRight}
                width={14}
                height={14}
                aria-hidden="true"
              />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
