import { createContext, useContext, useState } from "react";
import { commerce } from "../../Commerce/commerce";

const CommerceContext = createContext();

export default function CommerceContextProvider({ children }) {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  const fetchProdutos = async () => {
    const { data } = await commerce.products.list();
    setProdutos(data);
  };

  const fetchCarrinho = async () => {
    setCarrinho(await commerce.cart.retrieve());
  };

  const adicionarCarrinho = async (id, quantity) => {
    const item = await commerce.cart.add(id, quantity);
    setCarrinho(item.cart);
  };

  const handleQuantityChange = async (id, quantity) => {
    const { cart } = await commerce.cart.update(id, { quantity });
    setCarrinho(cart);
  };

  const removerCarrinho = async (id) => {
    const { cart } = await commerce.cart.remove(id);
    setCarrinho(cart);
  };

  const limparCarrinho = async () => {
    const { cart } = await commerce.cart.empty();
    setCarrinho(cart);
  };

  // const generateToken = async (id) => {
  //   try{
  //     const token = await commerce.checkout.generateToken(id, {type: 'cart'});
  //     console.log(token);
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  //EnderecoForm

  const fetchFreteCidades = async (checkoutToken) => {
    const { data } = await commerce.services.localeListShippingCountries(
      checkoutToken
    );
  };

  return (
    <CommerceContext.Provider
      value={{
        produtos,
        fetchProdutos,
        fetchCarrinho,
        carrinho,
        adicionarCarrinho,
        handleQuantityChange,
        removerCarrinho,
        limparCarrinho,
        fetchFreteCidades,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
}

export function useCommerceContext() {
  const {
    produtos,
    fetchProdutos,
    fetchCarrinho,
    adicionarCarrinho,
    carrinho,
    handleQuantityChange,
    removerCarrinho,
    limparCarrinho,
    fetchFreteCidades,
  } = useContext(CommerceContext);
  return {
    fetchProdutos,
    fetchCarrinho,
    adicionarCarrinho,
    produtos,
    carrinho,
    handleQuantityChange,
    removerCarrinho,
    limparCarrinho,
    fetchFreteCidades,
  };
}
