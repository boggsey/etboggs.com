const Gdi = () => {
  return (
    <div className="flex w-full flex-col justify-center rounded-xl bg-[url('https://res.cloudinary.com/ericboggs/image/upload/v1563324020/gdi_i2wd3c.jpg')] bg-cover bg-center px-4 shadow-lg md:flex-row">
      <div className="flex w-full flex-col items-center justify-center p-11 text-white md:w-full">
        <h3 className="mb-0 text-center font-heading text-2xl font-bold uppercase">
          Girl Develop It
        </h3>
        <p className="mt-0 pb-2 text-xl italic">Instructor</p>
        <div className="mt-2 h-[2px] w-8 bg-white text-center text-white md:mx-auto md:text-right" />
      </div>
    </div>
  );
};

export { Gdi };
