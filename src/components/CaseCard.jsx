function CaseCard({ caseItem }) {
  return (
    <article className="case-card">
      <div className="case-image">
        Image
      </div>

      <div className="case-info">
        <h3>{caseItem.model}</h3>

        <p>{caseItem.colour}</p>

        <p>{caseItem.inscription}</p>

        <p className="case-price">
          GH₵{caseItem.price}
        </p>

        <p className="case-status">
          {caseItem.status}
        </p>
      </div>
    </article>
  );
}

export default CaseCard;