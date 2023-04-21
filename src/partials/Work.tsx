import { Gdi } from '@/partials/work//Gdi';
import { Avfti } from '@/partials/work/Avfti';
import { PG } from '@/partials/work/PG';

const Work = () => {
  return (
    <section
      className="relative flex w-full flex-row justify-between bg-zinc-300 bg-gradient-to-b from-zinc-300 to-zinc-200"
      id="work"
    >
      <div className="container mx-auto flex flex-col justify-between bg-zinc-200 p-6 md:p-20">
        <div className="flex w-full flex-col justify-between md:flex-row">
          <div className="flex w-full flex-col md:w-2/5">
            <h2 className="pb-6 font-heading text-2xl uppercase text-[#2a2c39]">
              About Me
            </h2>
            <div className="prose-md prose flex items-center text-zinc-900 md:prose-lg">
              Since serving in the United States Marine Corps, I've committed to
              learning, sharing, and crafting technology. I've built many
              websites, apps, and APIs for large and small companies. I've also
              spent many years focused on building and sharing technology that
              improves people's lives. I co-founded and served as President of
              the Board for AVFTI, a nonprofit organization that helps those
              affected by sexual violence. I've also taught over 150 students
              about web development principles through Girl Develop It
              Cincinnati.
            </div>
          </div>
          <div className="grid auto-rows-fr grid-cols-1 gap-4 pt-6 md:grid-cols-2 md:pt-0 md:pl-6">
            <PG />
            <Avfti />
            <Gdi />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Work };
