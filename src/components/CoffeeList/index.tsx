import { CoffeeCard } from "./CoffeeCard";
import { Container, OurCoffees } from "./styles";

export function CoffeeeList() {
  return (
    <Container>
      <OurCoffees>
        Nossos cafés
      </OurCoffees>
      <CoffeeCard />
    </Container>
  )
}
