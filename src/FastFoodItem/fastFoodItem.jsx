
const FastFoodItem = ({name,price,ingredients,imageUrl}) =>{
    return(
        <div className="card product-card h-100 border-0 shadow-sm pb-1">
            <span className="badge badge-end badge-shadow bg-success fs-md fw-medium">
                قیمت: {price.toLocaleString()} تومان
            </span>
            <img className="card-img-top" src={imageUrl}/>
            <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
                <h5 className="mb-2">{name}</h5>
                <div className="fs-sm fw-bold text-muted mb-3">{ingredients}</div>
            </div>
            <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
                افزودن به سبد خرید
            </button>
        </div>
    )
}

export default FastFoodItem;