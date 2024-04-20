import axios from "axios";
import { useState, useEffect } from "react";
import { Product } from "../../types";
import moduleStyle from "./product-detail.module.scss";
import coffee from "../../assets/images/coffee_background.png";

const ProductDetail = ({ productId, handleClose }: any | Product) => {
  const [selectedObj, setSelectedObj] = useState({
    size: "",
    extra: "",
    milkType: "",
  });
  const [sizeList, setSizeList] = useState([
    {
      tit: "Short",
      value: "short",
    },
    {
      tit: "Tall",
      value: "tall",
    },
    {
      tit: "Grande",
      value: "grande",
    },
    {
      tit: "Venti",
      value: "venti",
    },
  ]);
  const [extraList, setExtraList] = useState([
    {
      tit: "SUGAR",
      value: "SUGAR",
    },
    {
      tit: "MILK",
      value: "MILK",
    },
  ]);
  const [milkTypeList, setMilkTypeList] = useState([
    {
      tit: "OAT MILK",
      value: "OAT_MILK",
    },
    {
      tit: "SOY MILK",
      value: "SOY_MILK",
    },
    {
      tit: "ALMOND MILK",
      value: "ALMOND_MILK",
    },
  ]);

  const [productItem, setProductItem] = useState<Product>();
  useEffect(() => {
    const getProductItem = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      console.log(res.data);
      setProductItem(res.data);
    };

    getProductItem();
  }, []);
  return (
    <>
      <div className={moduleStyle.detailWrap}>
        <div className={moduleStyle.backBtn}>
          <button type="button" onClick={handleClose}>
            <span>BACK TO MENU</span>
          </button>
        </div>
        <div className={moduleStyle.detailCont}>
          <img src={coffee} alt="" />

          <div className={moduleStyle.detailBtnList}>
            <h1>{productItem?.title}</h1>
            <div className={moduleStyle.desc}>{productItem?.description}</div>
            <div className={moduleStyle.detailBtnListWrap}>
              {/* <div>{productItem?.category}</div> */}
              {/* <div>{productItem?.image}</div> */}

              <ul className={moduleStyle.btnList}>
                <li>
                  {sizeList.map((i) => {
                    return <button className={selectedObj.size == i.value ? "active" : ""}>{i.tit}</button>;
                  })}
                </li>
                <li>
                  {extraList.map((i) => {
                    return <button>{i.tit}</button>;
                  })}
                </li>
                <li>
                  {milkTypeList.map((i) => {
                    return <button>{i.tit}</button>;
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
