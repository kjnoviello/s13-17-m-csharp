import mobileLogo from '../../../assets/logo-header-mobile.svg';
import desktopLogo from '../../../assets/logo-header-desktop.svg';

const Header = () => {
  return (
    <header className="w-full h-14 flex justify-between items-center font-font-main text-base pt-5">
      <picture>
        <source media="(min-width:768px)" srcSet={desktopLogo} />
        <img
          className="ml-4 w-24 md:w-40 md:ml-10"
          alt="logo"
          src={mobileLogo}
        />
      </picture>

      <nav className="hidden md:flex w-2/5 justify-self-center">
        <ul className="flex justify-evenly  w-full">
          <li>
            <a className="text-color-primary" href="/home">
              Home
            </a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <section className="flex text-sm">
        <button className="h-10 w-24 bg-color-primary  rounded-full flex items-center justify-center mr-4 md:mr-10 md:rounded-md md:h-7">
          Ingresar
        </button>
      </section>
    </header>
  );
};

export { Header };
