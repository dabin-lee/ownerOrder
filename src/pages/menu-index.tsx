import { Dialog, Slide, TextField } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { useEffect, useState } from "react";
import MenuCard from "../components/menu-card";
import MenuLayout from "../layouts/menu.layout";
import moduleStyle from "./menu-index.module.scss";
import React from "react";
import axios from "axios";
import ProductDetail from "./products/product-detail";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MenuIndex = () => {
  const [categoryList, setCategoryList] = useState<any>([]);
  const [card, setCard] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get<any>("https://fakestoreapi.com/products/categories");
      setCategoryList([...res.data, ...res.data, ...res.data]);
    };

    getCategory();
  }, []); //값이 변하면 useEffect가 변함

  useEffect(() => {
    const getCardList = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${selectedCategory ? `category/${selectedCategory}` : ""} `);
      setCard(res.data);
    };

    getCardList();
  }, [selectedCategory]);

  // useEffect(() => {
  //   const getProductItem = async () => {
  //     const res = await axios.get(`https://fakestoreapi.com/products/${selectedProductId}`);
  //     console.log(res.data);
  //     setProductItem(res.data);
  //   };

  //   getProductItem();
  // }, [selectedProductId]);

  return (
    <>
      <main className={moduleStyle.main}>
        <section className={moduleStyle.menuSection}>
          <MenuLayout categoryList={categoryList} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></MenuLayout>
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
                <MenuCard
                  {...product}
                  key={product.id}
                  detailModalOpen={() => {
                    setSelectedProductId(product.id);
                    setOpen(true);
                  }}
                ></MenuCard>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <ProductDetail productId={selectedProductId} handleClose={handleClose}></ProductDetail>
      </Dialog>
    </>
  );
};

export default MenuIndex;

// 표현식, 구문
// 리액는 값을 넣어서 (표현식)
// 구문은 없음 if문: 삼항연산자, for문: map
