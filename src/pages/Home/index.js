import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

import minion1 from '../../assets/images/minion1.jpg';
import minion2 from '../../assets/images/minion2.jpg';
import minion3 from '../../assets/images/minion3.jpg';
import minion4 from '../../assets/images/minion4.jpg';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src={minion1} alt="minion" />
        <strong>Minion divertido</strong>
        <span>R$ 49,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={minion2} alt="minion" />
        <strong>Minion divertido</strong>
        <span>R$ 49,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={minion3} alt="minion" />
        <strong>Minion divertido</strong>
        <span>R$ 49,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={minion4} alt="minion" />
        <strong>Minion divertido</strong>
        <span>R$ 49,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
