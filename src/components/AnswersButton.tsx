interface AnswersProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function AnswersButton({ ...props }: AnswersProps) {
  return <button type="button" {...props}></button>;
}
