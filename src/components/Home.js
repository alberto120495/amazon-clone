import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title=" Control Inalámbrico Xbox One - Standard Edition - Blanco"
            price={94.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71WX6wVepIL._AC_SX569_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Consola Xbox One S 1TB + Roblox - Xbox One S - Roblox Edition"
            price={295.99}
            image="https://images-na.ssl-images-amazon.com/images/I/719L0QbxsRL._AC_SX569_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Xiaomi Mi Band 4"
            price={29.88}
            image="https://images-na.ssl-images-amazon.com/images/I/61KbCI7wMjL._AC_SL1500_.jpg"
            rating={4}
          />{" "}
          <Product
            id="4"
            title="JBL JBLGO2BLK Bocina Inalámbrica, Color Negro"
            price={34.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91JPrxbYLeL._AC_SL1500_.jpg"
            rating={5}
          />{" "}
          <Product
            id="5"
            title="Apple iPad Air MD785LL/A (16GB, Wi-Fi, Black with Space Gray) (Renewed)"
            price={70.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71YHduDAsdL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung Class TU7000 UN43TU7000FXZX - TV 43 Crystal 4K UHD Smart TV (2020)"
            price={399.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91qg80XG6jL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
