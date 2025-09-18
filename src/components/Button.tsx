const Button = ({ children }) => {
  return (
    <button className="w-full bg-amber-900 text-white rounded py-2 cursor-pointer hover:bg-amber-800 mb-2">
      {children}
    </button>
  );
};

export default Button;
