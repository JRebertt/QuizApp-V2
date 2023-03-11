export interface ListProps {
  id?: string;
  img?: string;
  name?: string;
  title?: string;
  description?: string;
  amount?: number;
  click?: () => void;
}

export function QuizCard({
  img,
  title,
  description,
  amount,
  click,
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

    <div className="w-64 p-4 min-h-[16rem] py-6 mt-10 bg-[#252d4a] shadow-lg rounded-2xl cursor-pointer	">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-24 h-24 bg-green-200 rounded-full">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 2304 1792"
            className="absolute w-8 h-8 text-green-700 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z"></path>
          </svg>
        </div>
        <p className="mt-4 mb-4 text-xl font-medium  text-white">{title}</p>
        <p className="px-2 text-xs text-center text-white">{description}</p>
      </div>
    </div>
  );
}
