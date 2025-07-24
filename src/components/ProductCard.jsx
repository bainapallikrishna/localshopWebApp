import './ProductCard.css';
function ProductCard({title,price,image,rating})
{

    return(<>

    <div className='grid-container'>
   <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3>{title}</h3>
  
        <p>Price: ₹{price}</p>
                <p>Rating: {rating.rate}</p>
      </div>
    </div>
    </div>

    </>)
}
export default ProductCard;