function Button({ children, className, size, dark, ...props }) {
  return (
    <>
      <button
        type="button"
        className={
          `font-medium rounded-lg text-sm px-5 py-2.5 ` +
          (dark
            ? `text-white bg-gray-800 border border-gray-600 hover:bg-gray-700 hover:border-gray-600 active:outline-none active:ring-4 active:ring-gray-700`
            : `text-white bg-blue-700 hover:bg-blue-800 active:ring-4 active:ring-blue-300 active:outline-none`) +
          " " +
          className
        }
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
