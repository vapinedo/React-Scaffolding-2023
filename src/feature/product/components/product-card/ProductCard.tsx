import "./ProductCard.css";
const imgPath = "src/assets/img/products/";

export default function ProductCard({ product }) {
  return (
    <article className="col">
      <div className="card h-100">
        <img src={imgPath + product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text price">
            <i className="bx bx-dollar"></i>
            <span>{product.price}</span>
          </p>
        </div>
      </div>
    </article>
  )
}