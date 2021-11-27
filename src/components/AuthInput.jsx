import { forwardRef } from "react";
const AuthInput = forwardRef(({ ...otherProps }, ref) => {
  return (
    <div className="pt-2 pb-2 px-20 mx-auto my-auto">
      <input
        className="rounded-lg px-3 focus:outline-none text-lg placeholder-gray-500 dark:bg-gray-300"
        type={otherProps.type}
        ref={ref}
        placeholder={otherProps.placeholder}
        // later figure out how to automatically indent the placeholder text and the inputted text
        //^added
        
      />
    </div>
  );
});

export default AuthInput;