interface PrimaryButtonProps {
  text: string;
  onClickHandler?: () => void;
}

const PrimaryButton = ({ text, onClickHandler }: PrimaryButtonProps) => {
  return (
    <button className=" border bg-primary rounded-[40px] text-white px-4 whitespace-nowrap py-2.5 font-light">
      {text}
    </button>
  );
};

export { PrimaryButton };
