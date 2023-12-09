import FastFoodItem from "../FastFoodItem/fastFoodItem";


const FastFoodList = ({fastFoodItem}) =>{
    return(
        <div className="row">
        {
            fastFoodItem.map(fastFood =>{
                return(
                    <div className="col-md-4 col-sm-6 mb-grid-gutter" key={fastFood.id}>
                        <FastFoodItem {...fastFood}></FastFoodItem>
                    </div>
                )
            })
        }
        </div>
    )
}

export default FastFoodList;