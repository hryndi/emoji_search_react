import Card from "@mui/material/Card";
import ReactImage from "../assets/react-img.svg";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const EmojiCards = () => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia image={ReactImage} component="svg" height={200} width={200} />
      <Typography gutterBottom variant="h5" component="div">
        Emoji
      </Typography>

      <ul>
        <li>something</li>
        <li>will</li>
        <li>be</li>
        <li>displayed</li>
        <li>hier</li>
      </ul>
    </Card>
  );
};

export default EmojiCards;
