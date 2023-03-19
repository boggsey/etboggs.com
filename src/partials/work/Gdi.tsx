const Gdi = () => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center bg-[url('https://res.cloudinary.com/ericboggs/image/upload/v1563324020/gdi_i2wd3c.jpg')] bg-cover bg-center px-4 md:flex-row">
      <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 text-white md:w-1/4">
        <h3 className="mb-0 font-sans text-2xl font-bold uppercase">
          Girl Develop It
        </h3>
        <p className="mt-0 text-xl italic">Instructor</p>
        <div className="mt-2 h-[2px] w-8 text-center md:mx-auto md:text-right" />
        <p className="pt-2 text-lg leading-normal">
          As a long time instructor for Girl Develop It Cincinnati, I have
          taught more than 150 students about the principles of web development.
          I primarily teach Intermediate level classes which focus on the real
          world implementation of technologies that students have learned.
        </p>
      </div>
    </div>
  );
};

export { Gdi };
