import Article from "./Article";

function GrowWithUs() {
  return (
    <section name='about' className="mt-40 flex flex-col">
      <div className="text-center text-2xl lg:text-4xl text-[#FF8800] tracking-[0.39rem] font-prime font-bold">
        <h2 className="mb-2">Grow With Us As We</h2>
        <h2>Grow With Them</h2>
      </div>

      <div className="mt-24 grid grid-cols-1 lg:grid-cols-4">
        {/* Left */}
        <div className="col-span-2 space-y-20">
          <Article
            title="Learning Mode"
            body="Success Airlines App is a detailed educational tool that helps children begin to navigate the many career opportunities in this ever changing world.  The motivation behind building the Success Airline App was to address important curriculums that are not currently being taught in school systems.  With life being filled with so many responsibilities, we support and assist busy parents by introducing easy to follow lessons to help identify different career paths of success that are available for your child."
          />

          <Article
            title="Our Mission"
            body="Our mission is to inspire the next generation to reach for success and to remind them that their potential is limitless, especially with the aid of technology.  It's all about getting into the mindset of success and our app does just that by presenting a glossary of different careers. As we grow, we will add value to your childs development by curating exclusive content with high-profile individuals and other successful people. There are many parents who could use a little help in instilling life lessons into their children.  With that being said, it would be our pleasure to be your resource that teaches kids vital life skills that will help them grow into productive and successful members of the new age, the digital age."
          />

          <Article
            title="The Alpha Generation"
            body="People who are born in the mid 2010s. We seek to empower this generation with all of the tools for success.  As we grow, we will take them on a journey towards greatness and creativity."
          />
        </div>

        {/* Right */}
        <div className="col-span-2 pt-8 lg:pt-0 lg:pl-20 flex items-center lg:items-end">
          <div className="grid grid-cols-4 gap-2">
            <img
              className="col-start-1 col-end-5"
              src="./img/Rectangle 71growImg1.png"
              alt=""
            />
            <img
              className="col-start-1 col-end-3"
              src="./img/Rectangle 72growImg2.png"
              alt=""
            />
            <img
              className="col-start-3 col-end-5"
              src="./img/Rectangle 73growImg3.png"
              alt=""
            />
            <img
              className="col-start-1 col-end-5"
              src="./img/Rectangle 74growImg4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowWithUs;
