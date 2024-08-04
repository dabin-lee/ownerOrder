import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moduleStyle from "../pages/menu-index.module.scss";
import { Product } from "../types";

const MenuCard = ({ category, description, id, image, price, rating, title, detailModalOpen }: Product & { detailModalOpen: () => any }) => {
  return (
    <Card onClick={detailModalOpen} sx={{ maxWidth: 345, height: "100%", boxShadow: "none" }} className={moduleStyle.card}>
      <CardMedia sx={{ backgroundSize: "contain", height: 140, borderRadius: "20px" }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={moduleStyle.cardName}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className={moduleStyle.cardCont}>
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
