import React from "react";
//speacial way to make custom button
function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
  //props for some other properties which user might have given and we spread it
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
