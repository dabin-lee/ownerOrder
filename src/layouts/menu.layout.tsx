import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SvgIcon from "@mui/material/SvgIcon";
import { useRef } from "react";
import moduleStyle from "./menu-layout.module.scss";

const MenuLayout = (props: any) => {
  const scrollCategory = useRef<HTMLDivElement>(null)
  const scrollHandler = (scrollType: 'up' | 'down') => {
    scrollCategory?.current?.scrollTop
    console.log('scrollCategory?.current?.scrollTop: ', scrollCategory?.current?.scrollTop);

    let movePosition;
    
    if(scrollType === 'up') {
      movePosition = (scrollCategory?.current?.scrollTop ?? 0) - 100
      if(movePosition < 0) movePosition = 0

    } else {
      movePosition = (scrollCategory?.current?.scrollTop ?? 0) + 100
    }
    console.log('movePosition: ', movePosition);
    scrollCategory.current?.scrollTo({top: movePosition, left: 0, behavior: 'smooth'})
    console.log('scrollCategory?.current?.scrollTop: ', scrollCategory?.current?.scrollTop);
  };

  return (
    <div className={moduleStyle.categoryWrap}>
      <div className={moduleStyle.inner}>
        {/* button_top */}
        <button type="button" className={moduleStyle.arrowBtn} onClick={() => scrollHandler("up")}>
          <SvgIcon component={KeyboardArrowUpIcon} inheritViewBox />
        </button>

        {/* categories */}
        <div ref={scrollCategory} className={moduleStyle.categoryBox}>   
          <div className={moduleStyle.categories} >
            {props.categoryList.map((item: string, index: number) => (
              <div className={`${moduleStyle.category} ${props.selectedCategory == item ? moduleStyle.active : ''}`} key={index} >
                <button type="button" onClick={() => props.setSelectedCategory(item)}>
                  <span>{item}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* button_bottom */}
        <button type="button" className={moduleStyle.arrowBtn} onClick={() => scrollHandler("down")}>
          <SvgIcon component={KeyboardArrowDownIcon} inheritViewBox />
        </button>
      </div>
    </div>
  );
};

export default MenuLayout;
