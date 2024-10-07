import cn from "@/lib/cn";
import Marquee from "@/Components/ui/marquee";
import React from "react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const feedback = [
  {
    name: "Alinak d",
    position: "CEO",
    comment:
      "Acro Nation's technical expertise is unmatched. They provided us with the perfect solutions for our complex challenges.",
    img: "https://avatar.vercel.sh/jack", // Replace with actual image path
  },
  {
    name: "cartona",
    position: "CTO",
    comment:
      "Their collaborative approach made the project enjoyable and successful. I couldn't ask for a better partner.",
    img: "https://avatar.vercel.sh/jill", // Replace with actual image path
  },
  {
    name: "onil",
    position: "Founder",
    comment:
      "Acro Nation has been instrumental in our growth journey. Their dedication and creativity set them apart.",
    img: "https://avatar.vercel.sh/john", // Replace with actual image path
  },
  {
    name: "elies",
    position: "Oparations manager",
    comment:
      "Acro Nation transformed our digital strategy. Their innovative solutions helped us reach our target audience effectively",
    img: "https://avatar.vercel.sh/jane", // Replace with actual image path
  },
  {
    name: "Sarah Johnson",
    position: "CEO",
    comment:
      "Their team is incredibly creative and responsive. They truly understand our vision and bring it to life.",
    img: "https://avatar.vercel.sh/jenny", // Replace with actual image path
  },
  {
    name: "poll",
    position: "manager",
    comment:
      "Their forward-thinking approach and attention to detail transformed our digital platforms and gave us a competitive edge.",
    img: "https://avatar.vercel.sh/james", // Replace with actual image path
  },
  {
    name: "Jessica Smith",
    position: "marketing manager",
    comment: "Great collaboration and excellent results.",
    img: "https://avatar.vercel.sh/jill", // Replace with actual image path
  },
  {
    name: "Robert Martinez",
    position: "CEO",
    comment:
      "Acro Nation's insights and tools have streamlined our processes, leading to higher efficiency and better results.",
    img: "https://avatar.vercel.sh/jill", // Replace with actual image path
  },
];

export default function Testimonial() {
  return (
    <div className=" my-[50px] px-4">
      <h1 className="text-4xl font-bold text-center mb-4">
        Client Comments <span className="text-blue-600">Comments</span> About Us
      </h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        Our clients value our creative solutions, seamless collaboration, and
        consistent results that drive growth and success
      </p>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
