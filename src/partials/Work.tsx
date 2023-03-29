import { Gdi } from '@/partials/work//Gdi';
import { Alchemy } from '@/partials/work/Alchemy';
import { Avfti } from '@/partials/work/Avfti';

const Work = () => {
  return (
    <section
      className="flex w-full flex-row justify-between bg-gray-100 py-20"
      id="work"
    >
      <div className="container mx-auto flex flex-row justify-between">
        <div className="prose prose-xl flex w-1/3 items-center text-[#333]">
          Since serving in the United States Marine Corps, I've committed myself
          to learning, sharing and crafting technology. I've spent half of my
          time building websites and apps for profit and the other half focused
          on technology that improves people's lives. Since 2012, I have served
          as a board member for AVFTI, a nonprofit organization that helps those
          affected by sexual violence. I've also taught over 150 students about
          the principles of web development through Girl Develop It Cincinnati.
        </div>
        <div className="grid auto-rows-fr grid-cols-2 gap-4">
          <Alchemy />
          <Avfti />
          <Gdi />
        </div>
      </div>
    </section>
  );
};

export { Work };
