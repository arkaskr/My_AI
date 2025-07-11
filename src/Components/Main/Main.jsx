import {
  CircleUserRound,
  Code,
  Compass,
  ImagePlus,
  Lightbulb,
  MessageSquare,
  Mic,
  Send,
} from "lucide-react";
import React from "react";

const Main = () => {
  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      {/* NAVIGATION */}
      <div className="flex items-center justify-between text-3xl p-[20px] text-gray-600">
        <p>MY_AI</p>
        <CircleUserRound className="w-12 h-12" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-[900px] m-auto">
        {/* GREETING */}
        <div className="my-[50px] text-6xl font-medium p-[20px] text-gray-300">
          <p>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b90ff] to-[#ff5546]">
              Hello, Dev.
            </span>
          </p>
          <p>How can I help you today?</p>
        </div>

        {/* CARDS */}
        <div className="grid [grid-template-columns:repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-[20px]">
          {/* CARD */}
          <div className="relative h-[200px] p-[15px] rounded-2xl cursor-pointer bg-blue-50 hover:bg-blue-100 hover:shadow-md transition-transform hover:scale-[1.02]">
            <p className="text-lg text-gray-600">
              Suggest beautiful places to see on an upcoming trip
            </p>
            <Compass className="h-8 w-8 p-[5px] text-gray-600 absolute bg-white bottom-[10px] right-[10px] rounded-full" />
          </div>

          <div className="relative h-[200px] p-[15px] rounded-2xl cursor-pointer bg-blue-50 hover:bg-blue-100 hover:shadow-md transition-transform hover:scale-[1.02]">
            <p className="text-lg text-gray-600">
              Briefly summarize this concept: urban planning
            </p>
            <Lightbulb className="h-8 w-8 p-[5px] text-gray-600 absolute bg-white bottom-[10px] right-[10px] rounded-full" />
          </div>

          <div className="relative h-[200px] p-[15px] rounded-2xl cursor-pointer bg-blue-50 hover:bg-blue-100 hover:shadow-md transition-transform hover:scale-[1.02]">
            <p className="text-lg text-gray-600">
              Brainstorm team bonding activities for our work retreat
            </p>
            <MessageSquare className="h-8 w-8 p-[5px] text-gray-600 absolute bg-white bottom-[10px] right-[10px] rounded-full" />
          </div>

          <div className="relative h-[200px] p-[15px] rounded-2xl cursor-pointer bg-blue-50 hover:bg-blue-100 hover:shadow-md transition-transform hover:scale-[1.02]">
            <p className="text-lg text-gray-600">
              Improve the readability of the following code
            </p>
            <Code className="h-8 w-8 p-[5px] text-gray-600 absolute bg-white bottom-[10px] right-[10px] rounded-full" />
          </div>
        </div>

        {/* MAIN BOTTOM */}
        <div className="absolute bottom-0 left-0 right-0 max-w-[900px] px-[20px] mx-auto">
          {/* SEARCH BOX */}
          <div className="flex items-center justify-between gap-[20px] py-[10px] px-[20px] rounded-2xl bg-gray-100 border border-gray-300">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="outline-none flex-1 bg-transparent text-gray-700"
            />
            <div className="flex gap-3">
              <ImagePlus className="cursor-pointer hover:text-blue-500 transition" />
              <Mic className="cursor-pointer hover:text-blue-500 transition" />
              <Send className="cursor-pointer hover:text-blue-500 transition" />
            </div>
          </div>

          {/* BOTTOM INFO */}
          <p className="text-md my-[15px] text-center font-semibold text-gray-500">
            This is your own personal AI assistant, with end-to-end privacy encryption. Enjoy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
