import {Link} from "react-router-dom"
import './ProductCardStyles.css'

export const PrductCard = ({ id, title, price, image, description, category, rate, count }) => {
    return(
        <div>            
            <h2 className="productInfo">
                <Link to={`/product/${id}`}>
                    {title}
                </Link>
            </h2>
            <img className="productImage" src={image} alt="Imagen de producto" />
            {description&&<p>{description}</p>}
            <p>Price: {price}</p>
            <p>Category: {category}</p>
            <b><p>Rating</p></b>
            {rate&&<p>Rate: {rate}</p>}
            {count&&<p>Count: {count}</p>}
            
        </div>
    )
}