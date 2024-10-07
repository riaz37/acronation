"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  image: string;
  // Add other properties as needed
}

const BlogRight = () => {
  const [products, setproducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProjects = () => {
      const api = "https://fakestoreapi.com/products";

      axios
        .get(api)
        .then((res) => {
          console.log(res.data);
          setproducts(res.data);
        })
        .catch((err) => {
          console.log("error", err);
        });
    };
    getProjects();
  });

  console.log(products);

  return (
    <div className="w-[555px] bg-[#ffffff] mt-[180px] font-outfit ">
      <li className="text-[16px] w-[174px] h-[46px] text-[#282828] rounded-[8px] border-[1px] border-[#F5F5F5] py-[10px] px-[24px]">
        Latest Project
      </li>
      {products.map((product) => {
        return (
          <div className="card w-[555px] h-[142px] gap-[24px] bg-transparent rounded-[12px] mt-[25px] p-[16px] duration-300 items-center flex ">
            <div className="w-[133px] h-[110px] bg-slate-200 rounded-[16px] overflow-hidden">
              <img
                className="w-[100%] h-[100%] object-cover"
                src={product.image}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <h1 className="text-[24px] leading-[34px] font-bold">
                Transforming industries and Enhancing lives.
              </h1>
              <li className="text-[#1877f2] font-bold ml-[10px] text-[16px] leading-[26px]">
                july 3, 2022
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogRight;
