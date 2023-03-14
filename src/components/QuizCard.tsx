export interface ListProps {
  id?: string;
  img?: string;
  name?: string;
  title?: string;
  description?: string;
  amount?: number;
  click?: () => void;
  URL?: string;
}

export function QuizCard({
  img,
  title,
  description,
  amount,
  click,
  URL,
}: ListProps) {
  return (
    // <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    //   <button
    //     onClick={click}
    //     className="group p-6 flex flex-col items-start justify-start gap-4 rounded-lg w-80 bg-violet-600"
    //   >
    //     <div className="bg-rose-400 w-10 h-10 rounded-full"> {img} </div>
    //     <div className="min-w-0 flex-1">
    //       <div className="group-hover:text-violet-400 font-medium">
    //         <h1 className="font-medium flex justify-start">{title}</h1>
    //       </div>

    //       <p className="text-sm text-zinc-400 mt-1">{description}</p>
    //       <div className="flex text-zinc-400 text-xs gap-3 mt-4">
    //         <span className="inline-flex items-center gap-1">teste</span>
    //         <span className="inline-flex items-center gap-1">teste</span>
    //       </div>
    //     </div>
    //   </button>
    // </div>

    <div className="w-96 p-4 min-h-[16rem] py-6 mt-10 bg-[#252d4a] shadow-lg rounded-2xl cursor-pointer	">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-16 h-16 rounded-full">
          <img
            className="absolute w-16 h-16 text-green-700 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            src={URL}
            alt="Desenho dos orgãos"
          />
        </div>
        <p className="mt-4 mb-4 text-xl font-medium  text-white">{title}</p>
        <p className="px-2 text-xs text-center text-white">{description}</p>
      </div>
    </div>
  );
}
