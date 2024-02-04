import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moduleStyle from "../pages/menu-index.module.scss";
import { Product } from "../types";

const showPopup = (item: any): any => {
  console.log("item id: ", item);
};

const MenuCard = ({ category, description, id, image, price, rating, title }: Product) => {
  return (
    <Card sx={{ maxWidth: 345, height: "100%", boxShadow: "none" }} className={moduleStyle.card} onClick={() => showPopup(id)}>
      <CardMedia sx={{ backgroundSize: "contain", height: 140, borderRadius: "20px" }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MenuCard;
