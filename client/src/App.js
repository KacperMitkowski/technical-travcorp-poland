import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Rating, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { makeStyles } from '@mui/styles';

const CARD_CONTENT_BACKGROUND = "#ebf5ef";
const NO_PHOTO_PATH = "no-photo.jpg";

const useStyles = makeStyles({
  cardContent: {
    backgroundColor: CARD_CONTENT_BACKGROUND
  },
  flex: {
    display: "flex", 
    alignItems: "center"
  },
});

const App = () => {
  const [data, setData] = useState(null);
  const [photosAmount, setPhotosAmount] = useState(10);
  const classes = useStyles();

  const handleChange = (event) => {
    setPhotosAmount(event.target.value);
  };

  useEffect(() => {
    fetch(`/api/${photosAmount}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [photosAmount]);

  return (
    <>
      {!data ? <p>Loading...</p> :
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12}>
            <Typography align="center" variant="h4">Recently view trips</Typography>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Amount</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={photosAmount}
                label="Amount"
                onChange={handleChange}
                
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}></Grid>
          {
            data.map(item => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="350"
                      image={item.imageUrl ? item.imageUrl : NO_PHOTO_PATH }
                      alt="Paella dish"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="caption" color="text.secondary">
                        {item.countries} countries {item.days} days
                      </Typography>
                      <Typography fontWeight={900} variant="h6">
                        {item.name}
                      </Typography>
                      <div className={classes.flex}>
                        <Rating
                          readOnly
                          precision={0.1}
                          name="simple-controlled"
                          value={item.rating}
                        />
                        <Typography variant="subtitle2" color="text.secondary" ml={1} pt={0.5} >
                          {item.rating.toFixed(2)}
                        </Typography>
                      </div>
                      <div className={classes.flex}>
                        <Typography fontSize={10} fontWeight={900} mt={1}>From {item.discountPrice.toFixed(2)} $</Typography>
                        <Typography opacity={0.8} fontSize={10} fontWeight={900} mt={1} ml={1} style={{ textDecoration: "line-through" }}>{item.price.toFixed(2)} $</Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      }
    </>
  );
}

export default App;

