function FilterBar({ selectedModel, setSelectedModel }) {
  return (
    <select
      value={selectedModel}
      onChange={(event) => setSelectedModel(event.target.value)}
    >
      <option value="">All</option>
      <option value="11">iPhone 11</option>
      <option value="14">iPhone 14</option>
      <option value="15">iPhone 15</option>
    </select>
  );
}

export default FilterBar;