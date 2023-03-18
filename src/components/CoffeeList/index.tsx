import { CoffeeCard } from "./CoffeeCard";
import { CoffeeListContainer, CoffeeListWrapper, OurCoffees, OurCoffeesWrapper } from "./styles";

export function CoffeeeList() {
  return (
    <CoffeeListContainer>
      <OurCoffeesWrapper>
        <OurCoffees>
          Nossos cafés
        </OurCoffees>
      </OurCoffeesWrapper>
      <CoffeeListWrapper>
        <CoffeeCard image="Expresso Tradicional" name="Expresso Tradicional" description="O tradicional café feito com água quente e grãos moídos" tags={["tradicional"]} />
        <CoffeeCard image="Expresso Americano" name="Expresso Americano" description="Expresso diluído, menos intenso que o tradicional" tags={["tradicional"]} />
        <CoffeeCard image="Expresso Cremoso" name="Expresso Cremoso" description="Café expresso tradicional com espuma cremosa" tags={["tradicional"]} />
        <CoffeeCard image="Expresso Gelado" name="Expresso Gelado" description="Bebida preparada com café expresso e cubos de gelo" tags={["tradicional", "gelado"]} />
        <CoffeeCard image="Café com Leite" name="Café com Leite" description="Meio a meio de expresso tradicional com leite vaporizado" tags={["tradicional", "com leite"]} />
        <CoffeeCard image="Latte" name="Latte" description="Uma dose de café expresso com o dobro de leite e espuma cremosa" tags={["tradicional", "com leite"]} />
        <CoffeeCard image="Capuccino" name="Capuccino" description="Bebida com canela feita de doses iguais de café, leite e espuma" tags={["tradicional", "com leite"]} />
        <CoffeeCard image="Macchiato" name="Macchiato" description="Café expresso misturado com um pouco de leite quente e espuma" tags={["tradicional", "com leite"]} />
        <CoffeeCard image="Mocaccino" name="Mocaccino" description="Café expresso com calda de chocolate, pouco leite e espuma" tags={["tradicional", "com leite"]} />
        <CoffeeCard image="Chocolate Quente" name="Chocolate Quente" description="Bebida feita com chocolate dissolvido no leite quente e café" tags={["especial", "com leite"]} />
        <CoffeeCard image="Cubano" name="Cubano" description="Drink gelado de café expresso com rum, creme de leite e hortelã" tags={["especial", "alcoólico", "gelado"]} />
        <CoffeeCard image="Havaiano" name="Havaiano" description="Bebida adocicada preparada com café e leite de coco" tags={["especial"]} />
        <CoffeeCard image="Árabe" name="Árabe" description="Bebida preparada com grãos de café árabe e especiarias" tags={["especial"]} />
        <CoffeeCard image="Irlandês" name="Irlandês" description="Bebida a base de café, uísque irlandês, açúcar e chantilly" tags={["especial", "alcoólico"]} />
      </CoffeeListWrapper>
    </CoffeeListContainer>
  )
}
