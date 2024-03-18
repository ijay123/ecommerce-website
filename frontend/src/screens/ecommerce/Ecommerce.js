import React, { useState, useEffect } from "react";
import styles from "./Ecommerce.module.css";
import Ecommerce1 from "./Ecommerce1";
import { categories } from "./catData";

import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../redux/action/product";

function Ecommerce() {
  const dispatch = useDispatch();
  const {
    allProducts: { products },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const totalTimeInSeconds = 48 * 3600 + 30 * 60 + 45;

  const [timeRemaining, setTimeRemaining] = useState(totalTimeInSeconds);

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timeRemaining]);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <main>
        <div className={styles.main}>
          <div className={styles.main1}>
            <nav className={styles.sideNav}>
              <ul>
                <li>Woman's Fashion</li>
                <li>Men's Fashion</li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby's & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
              </ul>
            </nav>
          </div>

          <div className={styles.main2}>
            <div>
              <img src="/e-commerce-assets/iphone.png" alt="iphone" />
            </div>
            <div className={styles.apple1}>
              <div className={styles.apple}>
                <img src="/e-commerce-assets/Apple-gray-logo.png" alt="apple" />
                <span className={styles.iphone}>iPhone 14 Series</span>
              </div>
              <p className={styles.up}>
                Up to 10%
                <br />
                0ff Voucher
              </p>
              <p className={styles.shop}>
                <span>
                  <a href="/">Shop Now</a>
                </span>
                <span>
                  <img src="/e-commerce-assets/icons-arrow-right.png" alt="" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cat1}>
          <img src="/wishlist-asset/Category Rectangle.png" alt="" />
          <span>Today's</span>
        </div>
        <div className={styles.counts}>
          <p className={styles.flash}>Flash Sales</p>
          <p className="text-[30px] font-bold">
            {hours} <span className="text-[red]">:</span> {minutes}{" "}
            <span className="text-[red]">:</span> {seconds}
          </p>
        </div>
      </main>

      <div className={styles.epro1}>
        {products &&
          products
            .slice(0, 4)
            .map((eproduct) => (
              <Ecommerce1
                key={eproduct._id}
                productName={eproduct.productName}
                price={eproduct.price}
                imageUrl={eproduct.imageUrl}
                discountPrice={eproduct.discountPrice}
                percentDiscount={eproduct.percentDiscount}
                desc={eproduct.desc}
                productId={eproduct._id}
              />
            ))}
      </div>

      <div>
        <button className={styles.view}>View All Products</button>
        <div className={styles.contain}>
          <hr />
          <div className={styles.cat}>
            <img src="/wishlist-asset/Category Rectangle.png" alt="" />{" "}
            <span>Categories</span>
          </div>
          <div className={styles.brow1}>
            <span className={styles.brow}>Browse By Category</span>
          </div>
        </div>
      </div>
      <div className="flex gap-[40px] mt-[100px] items-center justify-center">
        {categories &&
          categories.map((cat) => (
            <div
              key={cat.id}
              className="border p-[40px] w-[200px] flex  flex-col items-center justify-center flex-wrap hover:bg-[#d04a4a] hover:text-white"
            >
              <p className={styles.phones}>{cat.accessaries}</p>
              <p>{cat.name}</p>
            </div>
          ))}
      </div>
      <div>
        <div className={styles.cat1}>
          <img src="/wishlist-asset/Category Rectangle.png" alt="" />
          <span>Today's</span>
        </div>
        <div className="flex justify-between px-[100px]">
          <p>Best Selling Products</p>
          <button>View All</button>
        </div>

        <div className={styles.epro1}>
          {products &&
            products.slice(4, 8).map((eproduct) => (
              <Ecommerce1
                key={eproduct._id}
                productName={eproduct.productName}
                price={eproduct.price}
                imageUrl={eproduct.imageUrl}
                discountPrice={eproduct.discountPrice}
                percentDiscount={eproduct.percentDiscount}

                // _id={eproduct.id}
              />
            ))}
        </div>
      </div>

      <div className={styles.container4}>
        <div className={styles.ecom4}>
          <div>
            <p className={styles.cont1}>Categories</p>
            <p className={styles.cont2}>Enhance Your Music Experience</p>
            <div className={styles.cont3}>
              <span>{hours}</span>
              <span>{minutes}</span>
              <span>{seconds}</span>
            </div>
            <button className={styles.btn4}>Buy Now!</button>
          </div>
          <div>
            <img src="Home-asset/radio.png" alt="radio" />
          </div>
        </div>
        <p className={styles.cont4}>
          <img src="/wishlist-asset/category rectangle.png" alt="rec" />
          <span>Our Products</span>
        </p>
        <p className={styles.cont5}>Explore Our Products</p>
      </div>
      {/* end */}

      <div className={styles.epro1}>
        {products &&
          products
            .slice(8, 14)
            .map((eproduct) => (
              <Ecommerce1
                key={eproduct._id}
                productName={eproduct.productName}
                price={eproduct.price}
                imageUrl={eproduct.imageUrl}
                discountPrice={eproduct.discountPrice}
                percentDiscount={eproduct.percentDiscount}
                eproduct={eproduct}
                _id={eproduct.id}
              />
            ))}
      </div>

      {/* end */}

      <div>
        <button className={styles.view}>View All Products</button>
        <p className={styles.cont4}>
          <img src="/wishlist-asset/category rectangle.png" alt="rec" />
          <span>Featured</span>
        </p>
        <p className={styles.cont5}>New Arrival</p>

        <div className={styles.cont6}>
          <div className={styles.playstation}>
            <img src="/Home-asset/playstation.png" alt="playstation" />
          </div>

          <div className={styles.cont6 - 1}>
            <div className={styles.woman}>
              <img src="/Home-asset/black_white_woman.png" alt="" />
            </div>
            <div className={styles.cont62}>
              <div className={styles.speaker}>
                <img src="/Home-asset/speakers.png" alt="" />
              </div>
              <div className={styles.perfume}>
                <img src="/Home-asset/perfume.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* text1 */}
        <div className={styles.text1}>
          <p className={styles.play1}>PlayStation 5</p>
          <p className={styles.play2}>
            Black and White version of the PS5
            <br /> coming out on sale.
          </p>
          <p>Shop Now</p>
        </div>

        {/* text2 */}

        <div className={styles.text2}>
          <p className={styles.play1}>Women’s Collections</p>
          <p className={styles.play2}>
            Featured woman collections that
            <br /> give you another vibe.
          </p>
          <p>Shop Now</p>
        </div>

        {/* text3 */}

        <div className={styles.text3}>
          <p className={styles.play1}>Speakers</p>
          <p className={styles.play2}>Amazon wireless speakers</p>
          <p>Shop Now</p>
        </div>

        {/* text4 */}

        <div className={styles.text4}>
          <p className={styles.play1}>Perfume</p>
          <p className={styles.play2}>GUCCI INTENSE OUD EDP</p>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
