import { TextField, styled } from "@mui/material";
import MenuCard from "../components/menu-card";
import MenuLayout from "../layouts/menu.layout";
import moduleStyle from "./menu-index.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const MenuIndex = () => {
  const [category, setCategory] = useState<any>([]);
  const [card, setCard] = useState<any>([]);
  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get<any>("https://fakestoreapi.com/products/categories");
      setCategory(res.data);
    };

    getCategory();
  }, []); //값이 변하면 useEffect가 변함

  useEffect(() => {
    const getCardList = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setCard(res.data);
    };

    getCardList();
  }, [category]);

  // const InputTextField = styled(TextField)({
  //   backgroundColor: "#DADADA",
  //   borderRadius: "30px",
  //   width: "100%",
  //   "& fieldset": {
  //     border: "none",
  //   },
  //   "& placeholder": {
  //     color: "red",
  //   },
  //   "& label": {
  //     color: "var(--sub-text)",
  //   },
  // });
  return (
    <main className={moduleStyle.main}>
      <section className={moduleStyle.menuSection}>
        <MenuLayout category={category}></MenuLayout>
      </section>

      <section className={moduleStyle.cardSection}>
        <div className={moduleStyle.searchWrap}>
          {/* <InputTextField /> */}

          <TextField
            fullWidth
            placeholder="Browse your favourite coffee here.."
            label="search menu"
            id="search menu"
            color="primary"
            className={moduleStyle.textField}
          />
          <div className={moduleStyle.orderBell}>
            <div className={moduleStyle.bellImage}>
              <img src="src/assets/images/order_bell.svg" alt="" />
            </div>

            <div className={moduleStyle.bellText}>order bell</div>

            {/* <div className={moduleStyle.bell}></div> */}
            {/* <span>ORDER STATUS</span> */}
            <div className={moduleStyle.count}>
              <span>3</span>
            </div>
          </div>
        </div>
        <div className={moduleStyle.cardWrap}>
          <div className={moduleStyle.inner}>
            {card?.map((product: any) => (
              <MenuCard {...product} key={product.id}></MenuCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MenuIndex;

// 표현식, 구문
// 리액는 값을 넣어서 (표현식)
// 구문은 없음 if문: 삼항연산자, for문: map
