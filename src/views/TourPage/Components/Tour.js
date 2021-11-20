import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "components/CustomButtons/Button.js";

export default function NewProduct() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title="Test Place"
                subheader="September 14, 2021"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://pix10.agoda.net/hotelImages/546/546897/546897_15061016260029175407.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>
                    <IconButton aria-label="add to favorites" style={{color: '#ce0067'}}>
                        <FavoriteIcon />
                    </IconButton>
                    {/* <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton> */}
                </div>
                <Button
                    style={{marginRight: 20}}
                    color="success"
                    size="sm"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See more
                </Button>
            </CardActions>
        </Card>
    );
}
