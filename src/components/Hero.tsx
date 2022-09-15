import Container from "./Container";

const Hero = () => {
  return (
    <section>
      <Container className="mx-auto flex justify-between items-center py-4">
        <div className="flex-1 flex flex-col">
          <span className="text-6xl font-semibold mt-32">
            O lugar onde a familia encontra a escola
          </span>
          <a
            href="#"
            className="py-2 px-6 bg-violet-600 flex max-w-fit rounded mt-8"
          >
            Saber mais
          </a>
        </div>
        <div className="flex-1"></div>
      </Container>
    </section>
  );
};

export default Hero;
