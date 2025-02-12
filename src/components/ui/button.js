import React from "react";

export function Button({ children, onClick, variant }) {
  const baseStyles = "px-4 py-2 rounded-md font-medium";
  const styles = variant === "default" ? "bg-blue-600 text-white" : "bg-gray-300";
  return (
    <button className={`${baseStyles} ${styles}`} onClick={onClick}>
      {children}
    </button>
  );
}
