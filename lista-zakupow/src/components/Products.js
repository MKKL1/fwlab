import Product from "./Product";
import { FiX } from "react-icons/fi"

export default function Products({products, onDelete}) {
    return (
        <div className='products'>
            {products.map((product) => (
                <>
                    <Product key={product.id} product={product} onDelete={onDelete} />
                </>
))}
        </div>);
}