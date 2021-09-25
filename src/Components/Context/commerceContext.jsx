import { createContext, useContext, useState } from "react";
import { commerce } from "../../Commerce/commerce";

const CommerceContext = createContext();

export default function CommerceContextProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  const fetchProdutos = async () => {
    const { data } = await commerce.products.list();
    setProdutos(data);
    console.log('produtos', produtos)
  };

  return (
    <CommerceContext.Provider
      value={{
        produtos,
        fetchProdutos,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
}

export function useCommerceContext() {
  const { fetchProdutos } = useContext(CommerceContext);
  return {
    fetchProdutos,
  };
}
