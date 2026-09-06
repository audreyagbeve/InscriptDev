import { cases } from "../data/cases";
import CaseCard from "../components/CaseCard";

function Catalogue() {
  return (
    <main>
      <h1>Catalogue</h1>

      <p>Browse our available phone cases.</p>

      <div className="case-grid">
        {cases.map((caseItem) => (
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