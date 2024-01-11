import { useState } from "react";

export default function DynamicForm() {
  const [inputCount, setInputCount] = useState(1);
  const [formData, setFormData] = useState({});

  const handleInputChange = (e, index) => {
    setFormData({
      ...formData,
      [`input${index}`]: e.target.value,
    });
  };

  const addInput = () => {
    setInputCount(inputCount + 1);
  };

  return (
    <form>
      {[...Array(inputCount)].map((_, index) => (
        <input
          key={index}
          type="text"
          value={formData[`input${index}`] || ""}
          onChange={(e) => handleInputChange(e, index)}
        />
      ))}
      <button type="button" onClick={addInput}>
        Add Input
      </button>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </form>
  );
}
