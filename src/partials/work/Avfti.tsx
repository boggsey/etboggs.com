const Avfti = () => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center bg-[url('https://res.cloudinary.com/ericboggs/image/upload/v1563324011/avfti_va2uwo.jpg')] bg-cover bg-center px-4 md:flex-row">
      <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 text-white md:w-1/4">
        <h3 className="mb-0 font-sans text-2xl font-bold uppercase">
          A Voice for the Innocent
        </h3>
        <p className="mt-0 text-xl italic">Co-Founder</p>
        <div className="mt-2 h-[2px] w-8 text-center md:mx-auto md:text-right" />
        <p className="pt-2 text-lg leading-normal">
          In 2012, I co-founded A Voice for the Innocent is a non-profit
          community dedicated to the support of those affected by sexual
          violence. We use technology to provide access to long term resources.
          My primary focus is the development and growth of the storytelling and
          resource platforms.
        </p>
      </div>
    </div>
  );
};

export { Avfti };
