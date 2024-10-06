import Image from "next/image";

const Testimonial = () => {
  const feedback = [
    {
      name: "Alinak",
      position: "CEO",
      comment:
        "Acro Nation's technical expertise is unmatched. They provided us with the perfect solutions for our complex challenges.",
      img: "https://avatar.vercel.sh/jack", // Replace with actual image path
    },
    {
      name: "John Doe",
      position: "CTO",
      comment:
        "Their collaborative approach made the project enjoyable and successful. I couldn't ask for a better partner.",
      img: "https://avatar.vercel.sh/jill", // Replace with actual image path
    },
    {
      name: "John Doe",
      position: "CTO",
      comment:
        "Acro Nation has been instrumental in our growth journey. Their dedication and creativity set them apart.",
      img: "https://avatar.vercel.sh/john", // Replace with actual image path
    },
    {
      name: "John Doe",
      position: "CTO",
      comment:
        "Acro Nation transformed our digital strategy. Their innovative solutions helped us reach our target audience effectively",
      img: "https://avatar.vercel.sh/jane", // Replace with actual image path
    },
    {
      name: "John Doe",
      position: "CTO",
      comment:
        "Their team is incredibly creative and responsive. They truly understand our vision and bring it to life.",
      img: "https://avatar.vercel.sh/jenny", // Replace with actual image path
    },
    {
      name: "John Doe",
      position: "CTO",
      comment:
        "Their forward-thinking approach and attention to detail transformed our digital platforms and gave us a competitive edge.",
      img: "https://avatar.vercel.sh/james", // Replace with actual image path
    },
    {
      name: "John Doe",
      position: "CTO",
      comment: "Great collaboration and excellent results.",
      img: "https://avatar.vercel.sh/jill", // Replace with actual image path
    },
    {
      name: "John Doe",
      position: "CTO",
      comment:
        "Acro Nation's insights and tools have streamlined our processes, leading to higher efficiency and better results.",
      img: "https://avatar.vercel.sh/jill", // Replace with actual image path
    },
  ];

  return (
    <div className=" my-[50px] px-4 ">
      <h1 className="text-4xl font-bold text-center mb-4">
        Client Comments <span className="text-blue-600">Comments</span> About Us
      </h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        Our clients value our creative solutions, seamless collaboration, and
        consistent results that drive growth and success
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {feedback.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:bg-gradient-to-tr hover:from-[#FFE1E3] hover:to-[#ACE7FF] transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={item.img}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.position}</p>
              </div>
            </div>
            <p className="text-center text-gray-700 italic mt-4">
              {item.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
