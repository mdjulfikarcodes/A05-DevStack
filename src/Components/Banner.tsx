import banner from "../assets/banner-stack.png";

const Banner = () => {
  const handleExplore = () => {
    const technologySection = document.getElementById("technologies");

    if (technologySection) {
      technologySection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleLearnMore = () => {
    const technologySection = document.getElementById("technologies");

    if (technologySection) {
      technologySection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="h-175 bg-white flex items-center py-12 sm:py-16 lg:py-0">
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[60px] font-extrabold leading-[0.95] tracking-tight">

              <span className="block text-[#111827]">
                Build Your Ideal
              </span>

              <span className="block bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                Development Stack
              </span>

            </h1>

            <p className="mt-6 sm:mt-7 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-slate-500">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            {/* Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3">

              <button
                onClick={handleExplore}
                className="
                  rounded-lg
                  block bg-linear-to-r from-[#FF5722] to-[#EC4899]
                  px-4 sm:px-5
                  py-2.5
                  text-sm font-semibold text-white
                  cursor-pointer
                  transition
                  hover:opacity-90
                "
              >
                Explore Technologies
              </button>

              <button
                onClick={handleLearnMore}
                className="
                  rounded-lg
                  border border-slate-200
                  bg-white
                  px-6 sm:px-8
                  py-2.5
                  text-sm font-medium text-slate-600
                  cursor-pointer
                  transition
                  hover:bg-slate-50
                "
              >
                Learn More
              </button>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">

            <img
              src={banner}
              alt="Development Stack"
              className="
                w-64
                xs:w-72
                sm:w-80
                md:w-88
                lg:w-100
                xl:w-110
                max-w-full
                h-auto
                object-contain
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;