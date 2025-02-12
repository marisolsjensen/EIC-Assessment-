import React from "react";

export function Select({ children, onValueChange }) {
  return (
    <select className="border p-2 rounded-md" onChange={(e) => onValueChange(e.target.value)}>
      {children}
    </select>
  );
}

export function SelectTrigger({ children }) {
  return <option disabled selected>{children}</option>;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ children, value }) {
  return <option value={value}>{children}</option>;
}
