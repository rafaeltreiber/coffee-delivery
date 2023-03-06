import { Container } from "./styles";
import ExpressoTradicional from '../../../../public/img/ExpressoTradicional.svg';
import Minus from '../../../../public/img/Minus.svg';
import Plus from '../../../../public/img/Plus.svg';
import CartIconButton from '../../../../public/img/CartIconButton.svg';
import { Chip, Typography } from "@mui/material";



export function CoffeeCard() {
  return (
    <Container>
      <img src={ExpressoTradicional} alt='Expresso tradicional' />
      <Chip label="Tradicional" color="secondary" />
      <Typography>Expresso Tradicional</Typography>
      <Typography>O tradicional café feito com água quente e grãos moídos</Typography>
      <Typography>R$ 9,90</Typography>
      <img src={Minus} alt='minus sign' />
      <span>1</span>
      <img src={Plus} alt='plus sign' />
      <img src={CartIconButton} alt='cart button' />


    </Container>
  )
}