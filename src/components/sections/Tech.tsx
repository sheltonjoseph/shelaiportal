import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">Technologies We Work With</h2>
        <p className="text-secondary mt-2 text-lg">
          Explore the cutting-edge tools and frameworks that drive our solutions.
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(Tech, "tech");
