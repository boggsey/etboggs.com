const Alchemy = () => {
  return (
    <div className="flex w-full flex-col justify-center rounded-xl bg-[#111] bg-[url('https://res.cloudinary.com/ericboggs/image/upload/v1563324005/alchemy_bi6keb.jpg')] bg-cover bg-center px-4 shadow-lg md:flex-row">
      <div className="flex w-full flex-col items-center justify-center p-11 text-white md:w-full">
        <h3 className="mb-0 font-heading text-2xl font-bold uppercase">P&G</h3>
        <p className="mt-0 pb-2 text-xl italic">Staff Software Engineer</p>
        <div className="mt-2 h-[2px] w-8 bg-white text-center text-white md:mx-auto md:text-right" />
      </div>
    </div>
  );
};

export { Alchemy };
