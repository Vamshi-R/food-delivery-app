import ItemCards from "./ItemCards";

const RestaurantCategory = ({data}) => {

    return (
        <div className="restaurant-category">
            {/* Header */}
            <div className="accordion-header">
                <span>{data?.title} ({data?.itemCards.length})</span> <span>⬇️</span>
            </div>
            {/* Body */}
            <div className="accordion-body">
                <ItemCards itemCards={data?.itemCards}/>
            </div>
        </div>
    )
}

export default RestaurantCategory;