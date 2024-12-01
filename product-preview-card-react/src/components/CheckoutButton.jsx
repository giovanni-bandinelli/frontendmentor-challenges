import iconCart from '../assets/icon-cart.svg';

function CheckoutButton({ children, onClick }) {
    return (
            <button onClick={onClick} className='checkout-btn'>
                <img src={iconCart} className='checkout-btn-img' alt=''/> <span className='checkout-btn-text'>{children}</span>
            </button>
    );
}

export default CheckoutButton;
