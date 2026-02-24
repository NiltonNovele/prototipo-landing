import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuStore, LuPackage, LuTag } from "react-icons/lu";

const LojasProdutos = () => {
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
      <ProductCard icon={LuStore} title={"Loja Online Completa"}>
        Template versátil para lojas com vários tipos de produtos.
        Catálogo organizado por categorias com pesquisa rápida integrada.
      </ProductCard>

      <ProductCard icon={LuPackage} title={"Gestão de Produtos"}>
        Estrutura preparada para adicionar, editar e destacar produtos,
        com controlo simples de stock e preços.
      </ProductCard>

      <ProductCard icon={LuTag} title={"Promoções & Destaques"}>
        Destaque automático para promoções, novos produtos e campanhas
        sazonais para aumentar as conversões.
      </ProductCard>
    </Grid>
  );
};

export default LojasProdutos;