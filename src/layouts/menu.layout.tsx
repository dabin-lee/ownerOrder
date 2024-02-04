import moduleStyle from "./menu-layout.module.scss";
const MenuLayout = (props: any) => {
  return (
    <div className={moduleStyle.categoryWrap}>
      <div className={moduleStyle.inner}>
        {props.category.map((item: string, index: number) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default MenuLayout;
