import Link from "next/link";

const AboutSection = ({ pro}) => {
  const aboutSection = pro?.aboutSections;
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-right">
        <h2 className="text-red-600 text-2xl md:text-3xl font-bold mb-10 font-iransans">
          {aboutSection.title}
        </h2>

        <p className="text-gray-600 leading-9 mb-10 font-iransans">
          {aboutSection.paragraphs[0]}
        </p>
        {aboutSection.paragraphs[1]?(
            <p className="text-gray-600 leading-9 mb-10 font-iransans">
          {aboutSection.paragraphs[1]
            .split(aboutSection.highlightWord)
            .map((part, index, arr) => (
              <span key={index} className="">
                {part}
                {index < arr.length - 1 && (
                  <span  className="text-red-600 font-iransans">
                    {aboutSection.highlightWord}
                  </span>
                )}
              </span>
            ))}
        </p>
        ):null

        }
      

        <Link
          href="#"
          className="inline-block border font-iransans border-gray-300 px-6 py-2 rounded-lg text-gray-600 hover:bg-red-600 hover:text-white transition"
        >
          {aboutSection.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
