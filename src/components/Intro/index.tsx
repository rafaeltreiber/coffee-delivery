import { AdvertiseText, BoldTitle, Container, ExplanationText, IcontextContainer, IconTextLine, Imagem, Items, LeftSideContainer, LeftSideItems, RightSideContainer, Title } from "./styles";
import SimpleBuy from '../../../public/img/SimpleBuy.svg'
import Package from '../../../public/img/Package.svg'
import FastDelivery from '../../../public/img/FastDelivery.svg'
import FreshCoffee from '../../../public/img/FreshCoffee.svg'
import CoffeeImage from '../../../public/img/CoffeeImage.svg'

export function Intro() {
  return (
    <Container>
      <LeftSideItems>
        <Title>
          <BoldTitle>
            Encontre o café perfeito para qualquer hora do dia
          </BoldTitle>
          <AdvertiseText>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </AdvertiseText>

        </Title>
        <Items>
          <IconTextLine>
            <LeftSideContainer>
              <IcontextContainer>
                <img src={SimpleBuy} alt='Simple buy svg' />
                <ExplanationText>Compra simples e segura</ExplanationText>
              </IcontextContainer>
            </LeftSideContainer>
            <RightSideContainer>
              <IcontextContainer>
                <img src={Package} alt='Package svg' />
                <ExplanationText>Embalagem mantém o café intacto</ExplanationText>
              </IcontextContainer>
            </RightSideContainer>
          </IconTextLine>
          <IconTextLine>
            <LeftSideContainer>
              <IcontextContainer>
                <img src={FastDelivery} alt='Fast delivery svg' />
                <ExplanationText>Entrega rápida e rastreada</ExplanationText>
              </IcontextContainer>
            </LeftSideContainer>
            <RightSideContainer>
              <IcontextContainer>
                <img src={FreshCoffee} alt='Fresh coffee svg' />
                <ExplanationText>O café chega fresquinho até você</ExplanationText>
              </IcontextContainer>
            </RightSideContainer>
          </IconTextLine>
        </Items>

      </LeftSideItems>

      <Imagem>
        <img src={CoffeeImage} alt='Coffe cup image' />
      </Imagem>

    </Container>
  )
}