import { useState } from "react";
import { cases } from "../data/cases";
import CaseCard from "../components/CaseCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

function Catalogue() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const filteredCases = cases.filter((caseItem) => {
    const matchesSearch = caseItem.model
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

    const matchesModel =
      selectedModel === "" ||
      caseItem.model === selectedModel;

    return matchesSearch && matchesModel;
  });

  return (
    <main>
      <h1>Catalogue</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <FilterBar
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
      />
      <p>Browse our available phone cases.</p>

      <div className="case-grid">
        {filteredCases.map((caseItem) => (
          <CaseCard
            key={caseItem.id}
            caseItem={caseItem}
          />
        ))}
      </div>
    </main>
  );
}

export default Catalogue;