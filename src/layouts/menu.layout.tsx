import moduleStyle from "./menu-layout.module.scss";
import SvgIcon from "@mui/material/SvgIcon";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef } from "react";

const MenuLayout = (props: any) => {
  const btnUp = useRef<HTMLButtonElement>(null);
  const btnDown = useRef<HTMLButtonElement>(null);
  const scrollHandler = (param: any) => {
    console.log("param: ", param);
    // homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={moduleStyle.categoryWrap}>
      <div className={moduleStyle.inner}>
        {/* button_top */}
        <button ref={btnUp} type="button" className={moduleStyle.arrowBtn} onClick={() => scrollHandler("up")}>
          <SvgIcon component={KeyboardArrowUpIcon} inheritViewBox />
        </button>

        {/* categories */}
        <div className={moduleStyle.categories}>
          {props.category.map((item: string, index: number) => (
            <div className={moduleStyle.category} key={index}>
              <button type="button">
                <span>{item}</span>
              </button>
            </div>
          ))}
        </div>

        {/* button_bottom */}
        <button ref={btnDown} type="button" className={moduleStyle.arrowBtn} onClick={() => scrollHandler("down")}>
          <SvgIcon component={KeyboardArrowDownIcon} inheritViewBox />
        </button>
      </div>
    </div>
  );
};

export default MenuLayout;
