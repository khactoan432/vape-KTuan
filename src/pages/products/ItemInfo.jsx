import React, { useEffect, useState } from "react";
import "./Index.css";
import { BiLogoInstagramAlt, BiLogoTiktok, BiHeart } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { BsCart4 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { LButton, RButton } from "../../components/buttons/Button";
import { ToastContainer, toast } from "react-toastify";
import Cvlogo from '../../components/assets/Image/Cvlogo.png'
import Juice01 from '../../components/assets/Image/Juice01.png'
import Device01 from '../../components/assets/Image/Device01.png'
import Pod15 from '../../components/assets/Image/Pod15.png'
import Atomizer19 from '../../components/assets/Image/Atomizer19.png'
import Access06 from '../../components/assets/Image/Access06.png'

function ItemInfo() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const itemInfo = JSON.parse(localStorage.getItem("clickItem"));
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  const handleAddtoCart = () => {
    const newCart = [...cart];
    let itemInCart = newCart.find((item) => itemInfo.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
      toast.success(` ${itemInfo.name} Increase Quantity `, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        className: "success",
      });
    } else {
      itemInCart = {
        ...itemInfo,
        quantity: 1,
      };
      newCart.push(itemInCart);
      toast.success(` ${itemInfo.name} Added to Cart `, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        className: "success",
      });
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div>
      <section className="back__btn container section">
        <RButton displayText="Back" buttonClick={handleBack} />
        <div className="btn__con">
          <button className="cartBtn">
            <BiHeart />
          </button>
          <Link to={"/cart"} className="cartBtn">
            <BsCart4 />
          </Link>
        </div>
      </section>
      <section className="product__main-img container section">
        <div className="img__con">
          <img
            className="item__img-main"
            src={itemInfo.img}
            alt={itemInfo.id}
          />
        </div>
        <div className="product__description-con">
          <h4 className="product__brand">{itemInfo.brand}</h4>
          <h2 className="product__name">{itemInfo.name}</h2>
          <h3 className="product__price">&#8369; {itemInfo.price}</h3>
        </div>
        <div className="selections__con">
          <div className="wishlist">
            <RButton displayText="Add to Wishlist" />
          </div>
        </div>
        <LButton displayText="Add to cart" buttonClick={handleAddtoCart} />
        <ToastContainer limit={2} />
      </section>
      <section className="product__details container section">
        <h5 className="product__brand">Product Description</h5>
        <p className="product__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
          Error voluptates, <br></br>sit quibusdam cupiditate deleniti beatae
          dolores soluta officia, <br></br>itaque consequatur odit veniam
          assumenda voluptatum dicta? <br></br>Fugit quo laboriosam modi
          laborum!
        </p>
      </section>
      <section className="container section">
        <h1 className="shop__header">Related Products</h1>
        <div className="grid__products">
          <div className='products__con'>
              <h1 id='juice' className="shop__header">E-Juice</h1>
              <a href='/juice'><RButton displayText='View All'/></a>
              <div className='juice__con'>
                  <img className='juice_pic' src={Juice01} alt="Vape Juice" />
              </div>
            </div>
            <div className='products__con'>
              <h1 id='device' className="shop__header">Mods & Kits</h1>
              <a href='/mods'><RButton displayText='View All'/></a>
              <div className='juice__con'>
                  <img className='juice_pic' src={Device01} alt="Vape Juice" />
              </div>
            </div>
            <div className='products__con'>
              <h1 id='pods' className="shop__header">Pod Systems</h1>
              <a href='/pods'><RButton displayText='View All'/></a>
              <div className='juice__con'>
                  <img className='juice_pic' src={Pod15} alt="Vape Juice" />
              </div>
            </div>
            <div className='products__con'>
              <h1 id='atomizer' className="shop__header">Atomizers</h1>
              <a href='/atomizer'><RButton displayText='View All'/></a>
              <div className='juice__con'>
                  <img className='juice_pic' src={Atomizer19} alt="Vape Juice" />
              </div>
            </div>
            <div className='products__con'>
              <h1 id='accessories' className="shop__header">Accessories</h1>
              <a href='/accessories'><RButton displayText='View All'/></a>
              <div className='juice__con'>
                  <img className='juice_pic' src={Access06} alt="Vape Juice" />
              </div>
            </div>
          </div>
      </section>
      <section id='contact' className='contact container section'>
          <div className='contact__wrapper'>
            <h5 className='contact__title'> Contacts </h5>
            <a className='contact__link' href="#faqs">FAQs</a>
            <a className='contact__link' href="#contact">Contact Us</a>
            <a className='contact__link' href="#contact">About Us</a>
            <a className='contact__link' href="#contact">Terms of Service</a>
            <a className='contact__link' href="#contact">Refund Policy</a>
          </div>
          <div className='contact__wrapper'>
            <h5 className='contact__title'>Products</h5>
            <a className='contact__link' href="#juice">E-Juice</a>
            <a className='contact__link' href="#device">Mods & Kits</a>
            <a className='contact__link' href="#pods">Pod System</a>
            <a className='contact__link' href="#atomizer">Atomizer</a>
            <a className='contact__link' href="#accessories">Accessories</a>
          </div>
          <div className='contact__wrapper'>
            <h5 className='contact__title'>Platforms</h5>
            <a className='contact__link' href="#facebook">Facebook</a>
            <a className='contact__link' href="#twitter">Twitter</a>
            <a className='contact__link' href="#instagram">Instagram</a>
            <a className='contact__link' href="#tiktok">Tiktok</a>
            <a className='contact__link' href="#shopee">Shopee</a>
          </div>
        </section>
        <footer className='footer container section'>
          <div className='footer__social'>
            <FaFacebookSquare/>
            <AiOutlineTwitter/>
            <BiLogoInstagramAlt/>
            <BiLogoTiktok/>
            <SiShopee/>
          </div>
          <h6 className='footer__text'>© 2023 Covape-19 Garage. All rights reserved.</h6>
          <a href="#home" className='footer__logo'><img id='home' className='header__logo' src={Cvlogo} alt='Covape-19 Garage Logo' title='Back to Top'/></a>
        </footer>
    </div>
  );
}

export default ItemInfo;
