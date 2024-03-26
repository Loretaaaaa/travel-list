const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go on your trip! 🎉"
          : `You have ${numItems} items on your packing list and you already packed 
        ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
