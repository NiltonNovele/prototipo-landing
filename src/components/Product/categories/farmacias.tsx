import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuPill, LuHeartPulse, LuShoppingCart } from "react-icons/lu";

const Farmacias = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      w="100%"
      mt={6}
      gap={6}
      px={6}
    >
      <ProductCard icon={LuPill} title={"Farmácia Online Moderna"}>
        Template completo para venda de medicamentos, vitaminas e produtos
        de saúde. Estrutura organizada por categorias e pesquisa rápida.
      </ProductCard>

      <ProductCard icon={LuHeartPulse} title={"Saúde & Bem-Estar"}>
        Ideal para farmácias e lojas de produtos naturais. Destaque para
        promoções, recomendações e produtos mais vendidos.
      </ProductCard>

      <ProductCard icon={LuShoppingCart} title={"Sistema de Encomendas"}>
        Permite aos clientes fazer encomendas online com carrinho integrado
        e processo de checkout simples e seguro.
      </ProductCard>
    </Grid>
  );
};

export default Farmacias;