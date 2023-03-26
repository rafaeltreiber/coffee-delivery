import { CoffeeDetails } from "./CoffeeDetails";
import { CoffeeSelectionContainer, Divider } from "./styles";

export function CoffeeSelection() {
  return (
    <CoffeeSelectionContainer>
      <CoffeeDetails name="Expresso Tradicional" />
      <Divider />
      <CoffeeDetails name="Latte" />
      <Divider />
      <Divider />
    </CoffeeSelectionContainer>
  )
}