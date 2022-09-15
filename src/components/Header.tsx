import Container from "./Container";

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center bg-violet-700">
      <Container className="mx-auto flex justify-between items-center py-4">
        <picture>
          <h1 className="text-3xl uppercase font-bold">Aprovei</h1>
        </picture>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#">Sobre</a>
            </li>

            <li>
              <a href="#">Contato</a>
            </li>

            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
