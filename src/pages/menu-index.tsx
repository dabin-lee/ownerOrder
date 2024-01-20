import { TextField, styled } from "@mui/material";
import MenuCard from "../components/menu-card";
import MenuLayout from "../layouts/menu.layout";
import moduleStyle from "./menu-index.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const InputTextField = styled(TextField)({
  "& label": {
    color: "var(--sub-text)",
  },
});
const MenuIndex = () => {
  const [category, setCategory] = useState<any>([]);
  const [card, setCard] = useState<any>([]);
  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get<any>("https://dummyjson.com/products/categories");
      setCategory(res.data);
    };

    getCategory();
  }, []); //값이 변하면 useEffect가 변함

  useEffect(() => {
    const getCardList = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      console.log("res: ", res.data.products);
      setCard(res.data.products);
    };

    getCardList();
  }, [category]);

  return (
    <div className={moduleStyle.main}>
      <section>
        <MenuLayout category={category}></MenuLayout>
      </section>

      <section className={moduleStyle.cardSection}>
        <div className={moduleStyle.searchWrap}>
          <InputTextField />
          <div>ORDER STATUS</div>
        </div>
        <div className={moduleStyle.cardWrap}>
          <div className={moduleStyle.inner}>
            {card.map((cd: any) => (
              <MenuCard card={cd}></MenuCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuIndex;

// 표현식, 구문
// 리액는 값을 넣어서 (표현식)
// 구문은 없음 if문: 삼항연산자, for문: map
