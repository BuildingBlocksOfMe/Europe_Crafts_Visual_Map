function CraftPopup({ craft }) {
  return (
    <div className="craft-popup">
      {craft.image && (
        <div className="craft-popup-image-container">
          <img 
            src={craft.image} 
            alt={craft.name}
            className="craft-popup-image"
            loading="lazy"
          />
        </div>
      )}
      <h3 className="craft-popup-title">{craft.name}</h3>
      <div className="craft-popup-info">
        <p className="craft-popup-location">
          <strong>場所:</strong> {craft.city}, {craft.country}
        </p>
        <p className="craft-popup-category">
          <strong>カテゴリ:</strong> {craft.category}
        </p>
        <p className="craft-popup-description">{craft.description}</p>
      </div>
    </div>
  )
}

export default CraftPopup
