import { useState, useEffect } from "react";

export function useCharacterLimit({
  maxLength,
  initialValue = "",
  onChange: externalOnChange,
  value: externalValue,
}) {
  const [internalValue, setInternalValue] = useState(initialValue);
  const value = externalValue !== undefined ? externalValue : internalValue;
  const [characterCount, setCharacterCount] = useState(value.length);

  useEffect(() => {
    setCharacterCount(value.length);
  }, [value]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (!maxLength || newValue.length <= maxLength) {
      if (externalOnChange) {
        externalOnChange(event);
      }
      if (externalValue === undefined) {
        setInternalValue(newValue);
      }
    }
  };

  return {
    value,
    characterCount,
    handleChange,
    maxLength,
  };
}
