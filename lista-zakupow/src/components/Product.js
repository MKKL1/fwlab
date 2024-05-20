import {FiX} from "react-icons/fi";
import {useState} from "react";

export default function Product({product, onDelete}) {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className='product'>
            <div className='product-info'>
                <div className='input-name'>
                    <input type='checkbox' value={isChecked.toString()}
                           onChange={(e) => setIsChecked(!isChecked)}
                           required/>
                    <p className={
                        isChecked ? 'checked' : ''}>{product.name}</p>
                </div>
                <p>{product.quantity}</p>
            </div>
            <div className='product-icons'>
                <FiX onClick={() => onDelete(product.id)}></FiX>
            </div>
        </div>
    )
}