import React, { useEffect } from "react";
import Carrinho from "../../Components/Carrinho";
import { useCommerceContext } from "../../Components/Context/commerceContext";
import Navbar from "../../Components/Navbar";


const CarrinhoCompras = () => {
  const {
    fetchCarrinho,
    carrinho,
    handleQuantityChange,
    removerCarrinho,
    limparCarrinho,
  } = useCommerceContext();

  useEffect(() => {
    fetchCarrinho();
  }, []);

  return (
    <>
      <Navbar quantidade={carrinho.total_items} />
      <Carrinho
        carrinho={carrinho}
        handleQuantityChange={handleQuantityChange}
        removerCarrinho={removerCarrinho}
        limparCarrinho={limparCarrinho}
      />
    </>
  );
};

export default CarrinhoCompras;
