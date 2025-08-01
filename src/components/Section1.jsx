import Person from "../assets/Person.png";
import { icons } from "../constans";

export const Section1 = () => {
  return (
    <section className="flex-1 relative bg-black text-white overflow-hidden">
      {/* Absolute blocks inside a relative section */}

      {/* White block — at the very bottom of the section */}
      <div className="absolute bottom-[-6vh] left-[-30px] bg-white w-[400px] h-60 z-0 -rotate-15"></div>

      {/* Black block */}
      <div className="absolute bottom-[-6vh] left-[-30px] bg-black/60 w-[400px] h-60 z-10 -rotate-15"></div>

      {/* Images */}
      <img
        src={Person}
        alt="Person"
        className="absolute left-[-20px] top-0 w-[550px] h-auto max-w-none z-9"
      />
      <div className="flex items-center gap-6 px-8 py-4 absolute bottom-10">
        {/* Text */}
        <div className="z-30">
          <p className="font-section1 text-xl font-bold">Hi, I am</p>
          <p className="font-section1 text-3xl font-bold">Tomasz Gajda</p>
          <p className="font-section1 text-xs font-bold">Front-end Developer / UI Designer</p>
        </div>
        {/*Icons*/}
        <ul className="flex flex-col gap-3 z-30">
          {icons.map(({ id, icon, title, url }) => (
            <li key={id}>
              <a href={url} className="social-icon">
                <img src={icon} alt={title} className="object-contain" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
