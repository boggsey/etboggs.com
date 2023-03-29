const Hero = () => (
  <section className="flex min-h-screen w-full flex-row justify-center overflow-hidden py-20 text-white">
    <div className="container mx-auto flex flex-row">
      <div className="flex h-full w-1/2 flex-col justify-center text-left">
        <h1 className="w-full pb-2 font-heading text-2xl font-bold uppercase leading-normal tracking-wide text-gray-300 md:text-6xl">
          Eric Boggs
        </h1>
        <p className="my-0 w-3/4 pb-2 font-heading text-xl font-bold leading-loose tracking-wide text-gray-300 md:text-4xl">
          Software Engineer, Teacher
        </p>
      </div>

      <div className="flex w-1/2 flex-col items-center justify-center">
        <img
          src="/assets/images/me-square.jpg"
          className="w-1/2 rounded-full"
          alt="Eric Boggs"
        />
      </div>
    </div>
  </section>
);

export { Hero };
