import ItemCards from "./ItemCards";
import { useState } from "react";

const RestaurantCategory = ({data, showItem, setIndex,handleShow}) => {
    // const [showItem, setShowItem] = useState(false);
    const handleCollapse = () => {
        // setShowItem(!showItem)
        setIndex();
        handleShow(true)
    }

    return (
      <div className="restaurant-category">
        {/* Header */}
        <div className="accordion-header" onClick={handleCollapse}>
          <span>
            {data?.title} ({data?.itemCards.length})
          </span>{" "}
          <span>⬇️</span>
        </div>
        {/* Body */}
        {showItem && (
          <div className="accordion-body">
            <ItemCards itemCards={data?.itemCards} />
          </div>
        )}
      </div>
    );
}

export default RestaurantCategory;