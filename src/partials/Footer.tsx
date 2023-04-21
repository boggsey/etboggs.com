import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="flex min-h-[50vh] w-full flex-col items-center justify-between bg-[#212121] bg-[url('assets/images/angled-high.png')] bg-cover py-32 text-white md:flex-row">
    <div className="container mx-auto">
      <div className="flex w-full flex-col justify-between md:flex-row">
        <div className="flex w-full flex-col text-center md:w-1/3 md:text-left">
          <h3 className="mt-0 mb-3 w-full text-center font-sans text-2xl font-bold uppercase md:text-left">
            Contact
          </h3>
          <p className="mb-0 w-full font-serif text-xl leading-normal md:w-4/5">
            I&apos;m always interested in discussing programming or non-profit
            projects over a cup of coffee. Hit me up.
          </p>

          <p className="mt-0 font-sans text-xl font-bold leading-normal">
            eric@mlemedia.com
          </p>
        </div>

        <div className="flex w-full flex-col py-12 text-center md:w-1/3 md:py-0">
          <h3 className="mt-0 w-full text-center font-sans text-2xl font-bold uppercase">
            Follow
          </h3>
          <div className="mt-2 h-[2px] w-8 text-center md:mx-auto md:text-right" />
          <div className="flex w-full flex-row justify-center py-8">
            <a
              className="inline-block w-auto px-4 text-white"
              href="https://twitter.com/etboggs"
              aria-label="Twitter"
            >
              <FaTwitter size={45} color="#555" />
            </a>
            <a
              className="inline-block w-auto px-4 text-white"
              href="https://www.linkedin.com/in/etboggs/"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={45} color="#555" />
            </a>
            <a
              className="inline-block w-auto px-4 text-white"
              href="https://github.com/boggsey"
              aria-label="Github"
            >
              <FaGithub size={45} color="#555" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };
