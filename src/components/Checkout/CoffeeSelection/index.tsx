import { CoffeeDetails } from "./CoffeeDetails";
import { CoffeeSelectionContainer, ConfirmationButton, ConfirmationButtonWrapper, Divider, LeftSideInfo, LineInfo, SumDescription, TotalLineInfo } from "./styles";

export function CoffeeSelection() {
  return (
    <CoffeeSelectionContainer>
      <CoffeeDetails name="Expresso Tradicional" />

      <Divider />

      <CoffeeDetails name="Latte" />

      <Divider />
      <CoffeeDetails name="Latte" />

      <Divider />

      <SumDescription>
        <LineInfo>
          <LeftSideInfo>Total de itens</LeftSideInfo>
          <span>R$ 29,70</span>
        </LineInfo>
        <LineInfo>
          <LeftSideInfo>Entrega</LeftSideInfo>
          <span>R$ 3,50</span>
        </LineInfo>
        <TotalLineInfo>
          <span>Total</span>
          <span>R$ 33,20</span>
        </TotalLineInfo>
      </SumDescription>

      <ConfirmationButtonWrapper>
        <ConfirmationButton>
          Confrmar pedido
        </ConfirmationButton>
      </ConfirmationButtonWrapper>
    </CoffeeSelectionContainer>
  )
}