function Button({
  children,
  className,
  size,
  dark,
  disabled = false,
  ...props
}) {
  return (
   <>
    <button
     type="button"
     className={`font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer 
        ${
         dark
          ? "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        } 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
        ${className}`}
     disabled={disabled}
     {...props}
    >
     {children}
    </button>
   </>
  );
}

export default Button;
