const alt = screen.height;
const anc = screen.width;

import Card from "./components/Card";

import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import MainAppBar from "./components/MainAppBar";

import AdidasStars from "/adidas_star.jpg";
import TermoStanley from '/termo_stanley.jpg'
import Ventilador from '/ventilador.jpg'

export default function HomePage() {
  console.log("width", anc);
  console.log("heigth", alt);

  return (
    <Box sx={{ m: 0, p: 0 }}>
      <MainAppBar />
      <Box sx={{display: "flex", alignItems: "center",justifyContent: "space-between", p: 1}}>
        <IconButton>
        <ArrowBackIosIcon/>
        </IconButton>
          <Card
            img={AdidasStars}
            title={"Zapatillas Adidas"}
            description={"All Stars talle 42"}
            state={"usadas"}
            characteristics={"Adidas Stars seminuevas muy poco uso las tengo hace un ano y las he ocupado unas 5 veces"}
            price={30000}
          />
            <Card
            img={TermoStanley}
            title={"Termo Stanley"}
            description={"1 litro"}
            state={"usado"}
            characteristics={"termo stanley color verde seim nuevo dos anos de uso ningun detalle"}
            price={30000}
          />
            <Card
            img={Ventilador}
            title={"Ventilador Liliana"}
            description={"De piso"}
            state={"usado"}
            characteristics={"dos anos de uso buen estado el boton de la velocidad 2 no funciona"}
            price={30000}
          />
          <IconButton>
          <ArrowForwardIosIcon/>
          </IconButton>
      </Box>
    </Box>
  );
}
