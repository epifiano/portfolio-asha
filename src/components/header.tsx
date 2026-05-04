export const Header = () => {
  return (
    <header className="">
      <div className="flex justify-between items-center">
        <h1 className="font-serif text-xl sm:text-base">asha</h1>
        <nav>
          <ul className="flex gap-3 sm:gap-4 text-sm sm:text-base">
            <li>Proyectos</li>
            <li>Sobre Mi</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </div>
      <hr className="my-4" />
    </header>
  )
}
