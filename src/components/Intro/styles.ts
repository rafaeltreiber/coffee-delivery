import styled from "styled-components";

export const IntroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 1440px;
  height: 544px;
`;

export const AdvertiseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 160px;

  z-index: 10;
`;

export const BackgroundContainer = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  background-image: url("/Background.png");
  filter: blur(80px);

  z-index: 20;
`;

export const LeftSideItems = styled.div`
  display: flex;
  flex-direction: column;

  gap: 80px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 588px;
  height: 192px;

  padding-top: 94px;
`;

export const BoldTitle = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-size: 48px;
  font-weight: 800;
  line-height: 62.4px;
`;

export const AdvertiseText = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
`;

export const Items = styled.div`
  width: 567px;
  height: 84px;

  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const ExplanationText = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.8px;
`;

export const Imagem = styled.div`
  width: 476px;
  height: 360px;
`;

export const IcontextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;

export const IconTextLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 567px;
  height: 32px;

  gap: 40px;
`;

export const LeftSideContainer = styled.div`
  width: 231px;
`;
export const RightSideContainer = styled.div`
  width: 294px;
`;
