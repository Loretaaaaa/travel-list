const Form = () => {
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item ..." />
      <button>Add</button>
    </form>
  );
};

export default Form;
