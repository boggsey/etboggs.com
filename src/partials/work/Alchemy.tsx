const Alchemy = () => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center bg-[url('https://res.cloudinary.com/ericboggs/image/upload/v1563324005/alchemy_bi6keb.jpg')] bg-cover bg-center px-4 md:flex-row">
      <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 text-white md:w-1/4">
        <h3 className="mb-0 font-sans text-2xl font-bold uppercase">Alchemy</h3>
        <p className="mt-0 text-xl italic">Software Engineer</p>
        <div className="mt-2 h-[2px] w-8 text-center md:mx-auto md:text-right" />
        <p className="pt-2 text-lg leading-normal">
          At Alchemy, I work to create excellent user experiences on websites
          and mobile applications for Procter and Gamble's Home Care team. I
          work with React and React Native on a day-to-day basis and spend the
          rest of my time working to advance our Front End practice.
        </p>
      </div>
    </div>
  );
};

export { Alchemy };
