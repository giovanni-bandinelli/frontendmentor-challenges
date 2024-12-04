import desktopImage from '../assets/image-product-desktop.jpg';
import mobileImage from '../assets/image-product-mobile.jpg';

import CheckoutButton from './checkout-button';


/*some silly stuff 'cause I'm bored*/
const handleClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1", "_blank");
};

function ProductPreviewCard() {

    return (
        <article className="product-preview-card">
            <picture className="image-product-wrapper">
                <source srcSet={mobileImage} media="(max-width: 768px)"/>
                <source srcSet={desktopImage} media="(min-width: 769px)"/>
                <img src={desktopImage} alt="Product image of Gabrielle Essence perfume"/>
            </picture>

            <section className="product-info-section">

                <h2 className="product-category">Perfume</h2>
    
                <h1 className="product-name">Gabrielle Essence Eau De Parfum</h1>

                <p className="product-description"> A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                Perfumer-Creator for the House of CHANEL.</p>

                <div className='price'>
                <span className="product-price"> $149.99</span>
                <span className="product-original-price">$169.99</span>
                </div>
                <CheckoutButton onClick={handleClick}>Add to Cart</CheckoutButton>
            </section>
        </article>
    )
  }
  
  export default ProductPreviewCard