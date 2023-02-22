interface AnswersProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  
}

export function AnswersButton({ ...props }: AnswersProps) {
  return (
    <button
      type="button"
      className="bg-[#252d4a] 
    w-full sm:w-64 flex justify-center items-center border-4 
    border-[#234668] px-2 py-5 h-10 rounded-lg hover:bg-[#555e7d] "
      {...props}
    >
      
    </button>
  );
}
