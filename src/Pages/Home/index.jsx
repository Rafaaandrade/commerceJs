import React, { useEffect } from "react";
import { useCommerceContext } from "../../Components/Context/commerceContext";
import Navbar from "../../Components/Navbar";
import Produtos from "../../Components/Produtos";

const Home = () => {
  const { produtos, fetchProdutos, adicionarCarrinho, carrinho } =
    useCommerceContext();

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div>
      <Navbar quantidade={carrinho.total_items} />
      <Produtos products={produtos} adicionarCarrinho={adicionarCarrinho} />
    </div>
  );
};

export default Home;
