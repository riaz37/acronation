"use client";
// import background from '../../public/circle.svg';

const Contact = () => {
  return (
    <div className="w-[350px] lg:w-full flex items-center content-center h-[500px] p-10 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between flex-1 gap-36 items-center">
        <div>
          <div
            className="relative"
            style={{
              background:
                "radial-gradient(circle at top left, #ffffff 50%, #6fb8ff 100%)",
              height: "200px",
              width: "200px",
              borderRadius: "100%",
            }}
          ></div>
          <div className="space-y-4 ml-6">
            <div className="">
              <h1 className="text-4xl font-bold absolute -bottom-[1040px]">
                Talk to us to improve your
                <span className="flex items-center">
                  website <img src="/bg.png" alt="" className="h-10" />
                </span>
              </h1>
            </div>
            <div className="pt-10 space-y-4">
              <div className="flex items-center gap-2">
                <img className="h-4" src="/right.png" alt="" />
                <p>We will respond to you within 24 hours.</p>
              </div>
              <div className="flex items-center gap-2">
                <img className="h-4" src="/right.png" alt="" />
                <p>
                  You'll be talking to product and tech experts (no account
                  manager)
                </p>
              </div>

              <div className="flex gap-1">
                <button className="btn bg-[#1877F2] text-white rounded-tl-full rounded-bl-full rounded-tr-4 rounded-br-4 p-3 hover:bg-gradient-to-br from-[#6d4cff] via-[#6d4cff] to-[#1177F2]">
                  Emergency Chat
                </button>
                <button className="bg-[#1877F2] rounded-tl-4 rounded-tr-full rounded-br-full rounded-l-4 p-3 hover:bg-gradient-to-br from-[#6d4cff] via-[#6d4cff] to-[#1177F2]">
                  <img src="/btn.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form>
            <div className="flex gap-2">
              <div>
                <label>
                  <span className="font-semibold">Enter Your Name</span>
                </label>
                <br />
                <input
                  type="text"
                  className="bg-[#F5F5F5] mt-2 h-[38px] w-[200px] p-2 outline-slate-300"
                />
              </div>
              <div>
                <label>
                  <span className="font-semibold">Enter Your Email</span>
                </label>
                <br />
                <input
                  type="email"
                  className="bg-[#F5F5F5] mt-2 h-[38px] w-[200px] p-2 outline-slate-300"
                />
              </div>
            </div>
            <div className="mt-4">
              <label>
                <span className="font-semibold">
                  Which services are you interested in?
                </span>
              </label>
              <br />
              <select className="bg-[#F5F5F5] mt-2 h-[38px] w-[408px] p-2 outline-slate-300">
                <option value="landing">Landing page</option>
              </select>
            </div>
            <div className="mt-4">
              <label>
                <span className="font-semibold">Type your message:</span>
              </label>
              <br />
              <textarea className="bg-[#F5F5F5] mt-4 h-[100px] w-[408px] p-2 outline-slate-300" />
            </div>

            <button className="bg-[#1877F2] p-3 text-white flex justify-center items-center gap-2 rounded-full mt-2 hover:bg-gradient-to-br from-[#6d4cff] via-[#6d4cff] to-[#1177F2]">
              Send
              <img src="/send.png" alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
