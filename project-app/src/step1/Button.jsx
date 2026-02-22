const Button = ({ label, fn }) => {
  return (
    <button
      className="border bg-green-900 text-white px-4 py-2"
      onClick={() => fn()}
    >
      {label}
    </button>
  );
};

export default Button;