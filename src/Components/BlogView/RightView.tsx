import React from "react";
import SingleBlog from "./SingleBlog";

const RightView = () => {
  


  const blogs = [
    {
      title: "Empowering Business Growth.",
      date: "Nov 29, 2023",
      read_time: "5 min",
      comments: 34,
      content:
        "Providing strategic solutions that foster sustainable growth and success for businesses across diverse sectors.",
      image_url: "https://i.ibb.co.com/PT2CgQx/alvaro-reyes-q-Wwp-Hwip31-M-unsplash.jpghttps://i.ibb.co.com/ZzRxsdF/aashish-yadav-MVWWR17bv-Uw-unsplash.jpg"
    },
    {
      title: "The Future of Remote Work.",
      date: "Nov 20, 2023",
      read_time: "4 min",
      comments: 12,
      content:
        "Exploring the trends and technologies that are shaping the future of remote work.",
      image_url: "https://i.ibb.co.com/59xDfYR/austin-distel-w-D1-LRb9-Oe-Eo-unsplash.jpg",
    },
    {
      title: "Cybersecurity in 2024.",
      date: "Nov 15, 2023",
      read_time: "6 min",
      comments: 24,
      content:
        "A comprehensive overview of cybersecurity challenges and solutions for businesses in the coming year.",
      image_url: "https://i.ibb.co.com/Xjc4rhC/nordwood-themes-ub-IWo074-Ql-U-unsplash.jpg",
    },
    {
      title: "Sustainable Business Practices.",
      date: "Nov 10, 2023",
      read_time: "5 min",
      comments: 18,
      content:
        "Implementing sustainable practices that enhance profitability and environmental responsibility.",
      image_url: "https://i.ibb.co.com/PT2CgQx/alvaro-reyes-q-Wwp-Hwip31-M-unsplash.jpghttps://i.ibb.co.com/ZzRxsdF/aashish-yadav-MVWWR17bv-Uw-unsplash.jpg",
    },
    {
      title: "Advancements in AI Technology.",
      date: "Nov 5, 2023",
      read_time: "7 min",
      comments: 29,
      content:
        "How artificial intelligence is revolutionizing industries and driving innovation.",
      image_url: "https://i.ibb.co.com/59xDfYR/austin-distel-w-D1-LRb9-Oe-Eo-unsplash.jpg",
    },
    {
      title: "The Importance of UX Design.",
      date: "Oct 30, 2023",
      read_time: "3 min",
      comments: 9,
      content:
        "Understanding the role of user experience in product development and customer satisfaction.",
      image_url: "https://i.ibb.co.com/Xjc4rhC/nordwood-themes-ub-IWo074-Ql-U-unsplash.jpg",
    },
    {
      title: "Data Analytics for Decision Making.",
      date: "Oct 25, 2023",
      read_time: "5 min",
      comments: 15,
      content:
        "Utilizing data analytics to improve decision-making processes within organizations.",
      image_url: "https://i.ibb.co.com/PT2CgQx/alvaro-reyes-q-Wwp-Hwip31-M-unsplash.jpghttps://i.ibb.co.com/ZzRxsdF/aashish-yadav-MVWWR17bv-Uw-unsplash.jpg",
    },
    {
      title: "Building a Remote Team.",
      date: "Oct 20, 2023",
      read_time: "4 min",
      comments: 11,
      content: "Strategies for building and managing an effective remote team.",
      image_url: "https://i.ibb.co.com/59xDfYR/austin-distel-w-D1-LRb9-Oe-Eo-unsplash.jpg",
    },
    {
      title: "E-commerce Trends in 2024.",
      date: "Oct 15, 2023",
      read_time: "6 min",
      comments: 20,
      content:
        "Analyzing the latest trends in e-commerce and their implications for businesses.",
      image_url: "https://i.ibb.co.com/Xjc4rhC/nordwood-themes-ub-IWo074-Ql-U-unsplash.jpg",
    },
    {
      title: "Effective Marketing Strategies.",
      date: "Oct 10, 2023",
      read_time: "5 min",
      comments: 7,
      content:
        "Exploring marketing strategies that drive engagement and conversions.",
      image_url: "https://i.ibb.co.com/PT2CgQx/alvaro-reyes-q-Wwp-Hwip31-M-unsplash.jpghttps://i.ibb.co.com/ZzRxsdF/aashish-yadav-MVWWR17bv-Uw-unsplash.jpg",
    },
    {
      title: "The Role of Blockchain in Business.",
      date: "Oct 5, 2023",
      read_time: "6 min",
      comments: 17,
      content:
        "Understanding how blockchain technology is changing the landscape of business.",
      image_url: "https://i.ibb.co.com/59xDfYR/austin-distel-w-D1-LRb9-Oe-Eo-unsplash.jpg",
    },
    {
      title: "Digital Transformation in 2024.",
      date: "Oct 1, 2023",
      read_time: "5 min",
      comments: 22,
      content:
        "How businesses are adapting to digital transformation and its impact on operations.",
      image_url: "https://i.ibb.co.com/Xjc4rhC/nordwood-themes-ub-IWo074-Ql-U-unsplash.jpg",
    },
  ];

  return <div>
    <li className="text-[16px] w-[174px] h-[46px] text-[#282828] rounded-[8px] border-[1px] border-[#F5F5F5] py-[10px] px-[24px]">
        Latest Project
      </li>
    {blogs.map((blog,index)=> <SingleBlog key={index} blog={blog} ></SingleBlog>)}
  </div>;
};

export default RightView;
