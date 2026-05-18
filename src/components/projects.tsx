import { ArrowRight } from 'lucide-react'

interface Project {
  slug: string;
  data: {
    title: string;
    description: string;
  };
}

export const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="pt-8 md:pt-12">
      <h2 className="font-serif text-4xl italic">Proyectos</h2>
      <hr className="my-4" />
      <p>Conoce algunos de mis proyectos de desarrollo.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {projects.map((project) => (
          <div key={project.slug}>
            <a href={`/projects/${project.slug}`} className="block group">
              <h3 className="font-serif text-2xl italic group-hover:underline">
                {project.data.title} <ArrowRight className="inline" />
              </h3>
              <p className="">{project.data.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}