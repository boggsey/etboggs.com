const Hero = () => (
  <section className="flex min-h-[60vh] w-full flex-row justify-center bg-zinc-300 text-white">
    <div className="flex w-3/4 flex-row justify-end bg-[url('assets/images/me.png')] bg-contain bg-no-repeat">
      <div className="flex w-1/2 flex-col justify-center">
        <p className="font-body my-0 pb-2 font-bold leading-loose tracking-wide text-zinc-600 md:text-2xl">
          I'm a Staff Software Engineer and Marine Corps Veteran that is
          dedicated to building excellent software and engineering teams. I
          currently work at P&G.
        </p>
      </div>
    </div>
  </section>
);

export { Hero };
