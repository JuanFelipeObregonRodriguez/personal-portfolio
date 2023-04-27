import juan from "../assets/juanfe.jfif";

const About = () => {
  return (
    <div name="about" className="p-4 w-full bg-[#90ff17] text-[#004443]">
      <div className="flex flex-col justify-center sm:items-center w-full">
        <div className="sm:text-center pb-2 pl-4">
          <p className="tracking-[.10em] text-4xl font-bold inline border-b-4 border-white">
            About
          </p>
          <img
            className="sm:mx-auto py-8 rounded-full"
            src={juan}
            alt="profile"
            width="100px"
            height="100px"
          />
        </div>

        <div></div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl sm:text-4xl font-bold">
            <p className="font-Readex font-bold">
              Hi! I'm Juan, I'm happy to meet you. Please take a look around!
            </p>
          </div>
          <div>
            <p className="mb-10 text-[#00755c] py-2">
              Highly skilled and motivated Full Stack Developer with 3 years of
              experience in developing and maintaining web applications using
              Node.js, React.js and other modern technologies. Proven ability to
              turn complex business requirements into scalable and efficient
              solutions. Strong communication and problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
