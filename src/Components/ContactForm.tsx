"use client"
import React from 'react';

const ContactForm = () => {
    return (
        <div>
           <form>
                   <div className="flex gap-2">
                   <div>
                   <label>
                   <span className="font-semibold"> Enter Your Name</span>
                    </label>
                    <br />
                   <input type="text" className="bg-[#F5F5F5] mt-2 h-[38px] w-[200px] p-2 outline-slate-300"/>
                   </div>
                   <div>
                   <label htmlFor="">
                    <span className="font-semibold">Enter Your Email</span>
                    </label>
                   <br />
                   <input type="email"  className="bg-[#F5F5F5] mt-2 h-[38px] w-[200px] p-2 outline-slate-300"/>
                   </div>
                   </div>
                   <div className="mt-4">
                   <label htmlFor="">
                  <span className="font-semibold">which services interested?</span>
                    </label>
                   <br />
                   <select name="" id="" className="bg-[#F5F5F5] mt-2 h-[38px] w-[408px] p-2 outline-slate-300">
                    <option value="landing" >landing page</option>
                   </select>
                   </div>
                   <div className="mt-4">
                   <label htmlFor="">
                    <span className="font-semibold">Type your message: </span>
                    </label>
                   <br />
                   <input type="textarea"  className="bg-[#F5F5F5] mt-4 h-[100px] w-[408px] p-2 outline-slate-300"/>
                   </div>
                   <button
                    className="group bg-[#1877F2] p-3 text-white flex justify-center items-center gap-2 rounded-full mt-2 hover:bg-gradient-to-br from-[#6d4cff] via-[#6d4cff] to-[#1177F2]">
                    Send
                    <img  className="transform  group-hover:rotate-45 transition-transform duration-300 "  src="/send.png" alt=""  />
                    </button>
                </form> 
        </div>
    );
};

export default ContactForm;