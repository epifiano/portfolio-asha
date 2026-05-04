import { ProjectsData } from '../utils/data'
import { ArrowRight } from 'lucide-react'

export const Projects = () => {
  return (
    <section>
      <h2 className="font-serif text-4xl italic">Proyectos</h2>
      <hr className="my-4" />
      <p>Conoce algunos de mis proyectos de desarrollo.</p>
      <div className="grid grid-cols-1 gap-4 pt-4">
        {ProjectsData.map((project) => (
          <div key={project.title}>
            <h3 className="font-serif text-2xl italic">
              {project.title} <ArrowRight className="inline" />
            </h3>
            <p className="">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
