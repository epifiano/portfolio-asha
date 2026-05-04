export const Hero = () => {
  return (
    <section className="flex h-screen items-center justify-between gap-8">
      <div className="flex w-2/3 flex-col border-r">
        <span className="text-6xl">Desarrollador</span>
        <span className="font-serif text-6xl italic">Diseñador</span>
        <span className="font-serif text-6xl italic">Web</span>
        <p className="mt-4">
          <span className="pr-2 font-serif italic">Hola!</span>
          Mi nombre es{' '}
          <span className="pr-2 font-serif italic">Javier Rojas.</span>
          Desarrollador Web Full Stack y Productor de Medios. Construyendo
          experiencias digitales meticulosas con un enfoque en diseño
          estructural y rendimiento técnico impecable.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p>Contactame para trabajar juntos.</p>
      </div>
    </section>
  )
}
