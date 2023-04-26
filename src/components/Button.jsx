const Button = ({ children, className = "", href ,target}) => {
  return (
    <div className="my-3">
      <a
        href={href}
        target={target}
        className={`cursor-pointer rounded-lg bg-black px-4 py-1.5 text-base font-semibold text-white hover:bg-black/80 transition-all  ${className}`}
      >
        {children}
      </a>
    </div>
  );
};

export default Button;
