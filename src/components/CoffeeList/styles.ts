import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const CoffeeListContainer = styled(Box)`
  width: 1440px;
  height: 1645px;

  padding: 0 160px;
`;

export const OurCoffeesWrapper = styled.div`
  padding-bottom: 32px;
`;

export const OurCoffees = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 32px;
`;

export const CoffeeListWrapper = styled.div`
  display: grid;
  grid-template-columns: 256px 256px 256px 256px;
  gap: 32px;
`;
