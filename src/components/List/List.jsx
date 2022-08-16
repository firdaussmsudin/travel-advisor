import {
  Box,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Typography,
} from "@mui/material";
import { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  // const [elRefs, setElRefs] = useState([]);

  // useEffect(() => {
  //   const refs = Array(places?.length)
  //     .fill()
  //     .map((_, i) => elRefs[i] || createRef());
  //   setElRefs(refs);
  //   console.log(refs);
  // }, [places]);

  return (
    <Box p="25px 0 25px 25px">
      <Typography variant="h4">
        Restaurants, Hotels and Attractions around you
      </Typography>
      {isLoading ? (
        <Box
          sx={{
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="5rem" />
        </Box>
      ) : (
        <>
          <CustomFormControl variant="standard">
            <InputLabel>Types</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </CustomFormControl>
          <CustomFormControl variant="standard">
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </CustomFormControl>
          <Grid container sx={{ height: "60vh", overflow: "auto" }}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={childClicked && +childClicked === i}
                  // refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default List;
