import { Route, Routes } from 'react-router-dom';
import { Checkout } from './components/Checkout';
import { Intro } from './components/Intro';
import { DefaultLayout } from './layouts/DefaultLayout';


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Intro />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
