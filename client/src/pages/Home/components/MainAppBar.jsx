import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Avatar,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import InfoIcon from "@mui/icons-material/Info";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const alt = screen.height;
const anc = screen.width;

export default function MainAppBar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#F3A954", color: "black" }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "100%",
            minHeight: 100,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4">LOGO</Typography>
            <TextField
              sx={{ width: 500 }}
              name="product"
              // value={product}
              // onChange={handleInputsChange}
              InputProps={{
                sx: { borderRadius: 3, backgroundColor: "white" },
                className: "input-form",
                endAdornment: (
                  <IconButton sx={{ p: 0 }}>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
              label="product name"
              size="small"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: 230,
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 150,
                }}
              >
                <QuestionMarkIcon />
                <InfoIcon />
                <NotificationsNoneIcon />
              </Box>
              <Avatar sx={{ bgcolor: "white", color: "black" }}>N</Avatar>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Typography>Agregar producto</Typography>
            <Typography>Matches</Typography>
            <Typography>Favoritos</Typography>
            <Typography>Categorias</Typography>
            <Typography>Articulos Disponibles</Typography>
            <Typography>Explorar</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
