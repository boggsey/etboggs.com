const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-row items-center justify-between bg-[url('https://res.cloudinary.com/ericboggs/image/upload/v1563389045/me-full_timtsx.jpg')] bg-cover bg-left-bottom md:bg-right-bottom"
    >
      <div className="container w-5/6 md:w-full">
        <div className="flex w-full flex-col items-start justify-center font-sans text-xl leading-normal md:w-2/5 md:pl-[10%]">
          <h2 className="my-0 text-center font-sans text-2xl font-bold uppercase md:text-left">
            History
          </h2>
          <p>
            Since serving in the United States Marine Corps, I&apos;ve committed
            myself to learning, sharing and crafting technology. I've spent half
            of my time building websites and apps for profit and the other half
            focused on technology that improves people&apos;s lives. Since 2012,
            I have served as a board member for AVFTI, a nonprofit organization
            that helps those affected by sexual violence. I've also taught over
            150 students about the principles of web development through Girl
            Develop It Cincinnati.
          </p>
        </div>
      </div>
    </section>
  );
};

export { About };
