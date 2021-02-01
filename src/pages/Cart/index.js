import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

import minion1 from '../../assets/images/minion1.jpg';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={minion1} alt="minion" />
            </td>
            <td>
              <strong>Minion super divertido</strong>
              <span>R$129.90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#c99d20" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#c99d20" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$259.80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#c99d20" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1880.00</strong>
        </Total>
      </footer>
    </Container>
  );
}
