export const Hero = () => {
  return (
    <section className="flex h-screen items-center justify-between gap-8">
      <div className="flex w-2/3 flex-col border-r pr-8">
        <span className="text-6xl">Desarrollador web,</span>
        <span className="font-serif text-6xl italic">Editor &</span>
        <span className="font-serif text-6xl italic">Comunity Manager</span>
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
        <a
          href="https://wa.me/+573143925300"
          className="w-fit rounded-lg border px-2 py-1 font-bold"
        >
          Whatsapp
        </a>
      </div>
    </section>
  )
}
