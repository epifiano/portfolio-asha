export const Hero = () => {
  return (
    <section className="flex h-screen items-center justify-between gap-8">
      <div className="flex flex-col">
        <span className="text-6xl">Desarrollador</span>
        <span className="font-serif text-6xl italic">Diseñador</span>
        <span className="font-serif text-6xl italic">Web</span>
      </div>
      <div className="flex flex-col gap-3">
        <p>
          <span className="pr-2 font-serif italic">Hola!</span>
          Mi nombre es{' '}
          <span className="pr-2 font-serif italic">Javier Rojas</span>y soy
          desarrollador web fullstack.
        </p>
      </div>
    </section>
  )
}
