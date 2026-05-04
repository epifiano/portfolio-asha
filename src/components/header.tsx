export const Header = () => {
  return (
    <header className="">
      <div className="flex justify-between">
        <h1 className="font-serif">asha</h1>
        <nav>
          <ul className="flex gap-4">
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
