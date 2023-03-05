import Logo from '../../../public/img/Logo.svg'
import Location from '../../../public/img/Location.svg'
import Cart from '../../../public/img/Cart.svg'
import { HeaderContainer, LocationCartContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt='logo svg' />
      <LocationCartContainer>
        <img src={Location} alt='location svg' />
        <img src={Cart} alt='cart svg' />
      </LocationCartContainer>
    </HeaderContainer>
  );
}
