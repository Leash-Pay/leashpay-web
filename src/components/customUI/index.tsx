interface PrimaryButtonProps {
  text: string;
  onClickHandler?: () => void;
  type?: 1 | 2;
}

const PrimaryButton = ({
  text,
  onClickHandler,
  type = 1,
}: PrimaryButtonProps) => {
  return (
    <button
      className={` group
       ${
         type === 1 ? "bg-primary text-white" : "bg-white text-primary"
       } rounded-[40px] h-auto w-auto  px-6  whitespace-nowrap py-3  uppercase  font-extralight 
    hover:bg-secondary 
       transition-all  transform hover:scale-x-105
    
    `}
    >
      <div className="group-hover:scale-75 transition-all  transform ease-in-out text-xs">
        {text}
      </div>
    </button>
  );
};

const SecondaryButton = ({ text, onClickHandler }: PrimaryButtonProps) => {
  return (
    <button
      className={` group
      border bg-primary rounded-[40px] h-auto w-auto text-white px-6  whitespace-nowrap py-4  uppercase  font-extralight 
    hover:bg-white hover:text-primary hover:border-primary 
      text-sm transition-all  transform hover:scale-105
    
    `}
    >
      <div className="group-hover:scale-75 transition-all  transform ease-in-out">
        {text}
      </div>
    </button>
  );
};

export { PrimaryButton, SecondaryButton };
