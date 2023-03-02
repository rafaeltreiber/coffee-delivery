import { CoffeeeList } from '../CoffeeList';
import { Header } from '../Header';
import { MainContainer } from './styles';

export function Main() {
  return (
    <MainContainer>
      <Header />
      <CoffeeeList />
    </MainContainer>
  );
}
