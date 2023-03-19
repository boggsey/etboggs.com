import { Gdi } from '@/partials/work//Gdi';
import { Alchemy } from '@/partials/work/Alchemy';
import { Avfti } from '@/partials/work/Avfti';

const Work = () => {
  return (
    <section
      className="flex min-h-screen w-full flex-col items-center justify-center bg-[#2d2d34]"
      id="work"
    >
      <Alchemy />
      <Avfti />
      <Gdi />
    </section>
  );
};

export { Work };
