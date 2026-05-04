import { WorkData } from '../utils/data'

export const Work = () => {
  const sorted = [...WorkData].sort(
    (a, b) => parseInt(b.initial) - parseInt(a.initial),
  )

  return (
    <section className="pt-12 md:pt-16">
      <h2 className="font-serif text-4xl italic">Work</h2>
      <hr className="my-4" />
      <div className="border-font/20 relative ml-3 border-l-[1.5px] pt-1 pb-4">
        {sorted.map((work) => (
          <div key={work.title} className="relative mb-8 pl-6 last:mb-0">
            <span className="border-font/40 bg-background absolute top-[0.4rem] left-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-[1.5px]" />
            <h3 className="font-serif text-2xl italic">{work.title}</h3>
            <p className="mt-1 text-sm opacity-70">{work.range}</p>
            <p className="text-sm opacity-50">
              {work.initial} — {work.final}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
