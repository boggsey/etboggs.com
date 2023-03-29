import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const Writing = (props: IRecentPostsProps) => {
  return (
    <section
      id="writing"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-white py-8"
    >
      <div className="flex w-5/6 flex-col items-stretch justify-start md:w-3/4 md:flex-row">
        <div className="w-full text-left md:w-1/5">
          {/* font: 700 24px/28px "Alegreya Sans"; */}
          <h2 className="mt-0 text-center font-sans font-bold uppercase">
            Writing
          </h2>
        </div>
        <article className="w-full px-8 text-xl leading-normal md:w-2/3">
          {
            /* Your post list here. */
            props.postList.map((post, index) => (
              <div key={index.toString()}>
                <a
                  className="w-full text-black no-underline"
                  href={post.url}
                  key={post.Content.name}
                >
                  {/* font: 700 24px/28px "Alegreya Sans"; */}
                  <h1 className="mt-0 font-sans font-bold leading-loose">
                    {post.Content.name}
                  </h1>
                </a>
                <p>Post excerpt here</p>
                <a
                  className="w-full text-black no-underline"
                  href={post.url}
                  key={post.Content.name}
                >
                  <p className="read-more">Read more</p>
                </a>
              </div>
            ))
          }
        </article>
      </div>
    </section>
  );
};

export { Writing };
