import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import { useEffect, useRef } from "react";

const PlaceDetails = ({ place, selected }) => {

  // if(selected) refProp?.current?.scrollIntoView({behaviour:'smooth', block:'start'});
  const cardRef = useRef();
  useEffect(()=>{
    if(selected){
      cardRef.current.scrollIntoView({behavior:'smooth'})
    }
  },[selected])

  return (
    <Card elevation={6} sx={{ m: "10px 20px" }} ref={cardRef}>
      <CardMedia
        sx={{ height: "350px" }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
        }
        title={place.name}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
         <Rating value={Number(place.rating)} readOnly />
          <Typography variant="subtitle1" gutterBottom> Out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography variant="subtitle1" gutterBottom>
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography variant="subtitle1" gutterBottom align="right">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1}>
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2 "
            color="textSecondary"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <PlaceIcon />
            {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2 "
            color="textSecondary"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <PhoneIcon />
            {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          color="primary"
          onClick={() => {
            window.open(place.web_url, "_blank");
          }}
        >
          Trip Advisor
        </Button>
        <Button
          variant="text"
          color="primary"
          onClick={() => {
            window.open(place.website, "_blank");
          }}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
