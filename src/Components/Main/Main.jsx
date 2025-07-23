import {
  CircleUserRound,
  Code,
  Compass,
  ImagePlus,
  Lightbulb,
  MessageSquare,
  Mic,
  Send,
  Sparkle,
} from "lucide-react";
import React, { useContext } from "react";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompts,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="flex-1 pb-[15vh] relative">
      {/* NAVIGATION */}
      <div className="flex items-center justify-between text-xl md:text-3xl p-5 text-gray-600">
        <p>MY_AI</p>
        <CircleUserRound className="w-10 h-10 md:w-12 md:h-12" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-[900px] m-auto">
        {!showResult ? (
          <>
            {/* GREETING */}
            <div className="my-[30px] text-3xl md:text-6xl font-medium px-5 text-gray-300">
              <p>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b90ff] to-[#ff5546]">
                  Hello, Dev.
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>

            {/* CARDS - Hidden on small screens (phones) */}
            <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
              {[
                {
                  icon: <Compass />,
                  text: "Suggest beautiful places to see on an upcoming trip",
                },
                {
                  icon: <Lightbulb />,
                  text: "Briefly summarize this concept: urban planning",
                },
                {
                  icon: <MessageSquare />,
                  text: "Brainstorm team bonding activities for our work retreat",
                },
                {
                  icon: <Code />,
                  text: "Improve the readability of the following code",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="relative h-[200px] p-[15px] rounded-2xl cursor-pointer bg-blue-50 hover:bg-blue-100 hover:shadow-md transition-transform hover:scale-[1.02]"
                >
                  <p className="text-base md:text-lg text-gray-600">
                    {card.text}
                  </p>
                  <div className="h-8 w-8 p-1 text-gray-600 absolute bg-white bottom-[10px] right-[10px] rounded-full">
                    {card.icon}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollhide">
            <div className="my-[40px] mx-[0px] flex items-center gap-[20px]">
              <CircleUserRound className="w-6.5 h-6.5" />
              <p className="text-base sm:text-lg">{recentPrompts}</p>
            </div>

            {/* RESULT DATA */}
            <div className="flex items-start gap-[20px]">
              <Sparkle className="w-7 h-7 flex-shrink-0" />
              {loading ? (
                <div className="flex flex-col gap-[10px] flex-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded h-[20px] w-full bg-[#f6f7f8] bg-[linear-gradient(to_right,#f6f7f8,#e0e0e0,#f6f7f8)] bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"
                    />
                  ))}
                </div>
              ) : (
                <p
                  className="w-full text-base sm:text-lg leading-7 text-gray-800 space-y-4 [&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>strong]:font-semibold [&>p]:mt-2"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        {/* MAIN BOTTOM */}
        <div className="absolute bottom-0 left-0 right-0 max-w-[900px] px-5 mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 px-5 rounded-2xl bg-gray-100 border border-gray-300">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSent();
                }
              }}
              value={input}
              type="text"
              placeholder="Ask me anything..."
              className="outline-none flex-1 w-full bg-transparent text-gray-700"
            />
            <div className="flex gap-3">
              <ImagePlus className="cursor-pointer hover:text-blue-500 transition" />
              <Mic className="cursor-pointer hover:text-blue-500 transition" />
              <Send
                onClick={() => onSent()}
                className="cursor-pointer hover:text-blue-500 transition"
              />
            </div>
          </div>

          <p className="text-sm sm:text-md my-[15px] text-center font-semibold text-gray-500">
            This is your own personal AI assistant, with end-to-end privacy
            encryption. Enjoy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
