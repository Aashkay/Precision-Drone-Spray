import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import  { hostUrl } from '../../constants';


const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList({ coordinates }) {
  // eslint-disable-next-line
  const [dense, setDense] = React.useState(false);
  // eslint-disable-next-line
  const [secondary, setSecondary] = React.useState(false);

  const handleDelete = (coordinatesItem) => {
    console.log(coordinatesItem)
    const longitude = coordinatesItem.long;
    const latitude = coordinatesItem.lat;
    if (longitude && latitude) {
      fetch(`${hostUrl}/getCoordinates`, {
        method: "POST",
        body: JSON.stringify({ coordinates: coordinatesItem }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      window.location.reload()
    } else {
      alert("Please enter details");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Coordinates List
          </Typography>
          <Demo>
            <List dense={dense}>
              {coordinates.map((item, index) => (
                <ListItem
                  onClick={() => handleDelete(item)}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={`Latitude: ${item.lat}`}
                    secondary={`Longitude: ${item.long}`}
                  />
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
