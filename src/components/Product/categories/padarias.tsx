import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuCakeSlice, LuShoppingBasket, LuClock } from "react-icons/lu";

const Padarias = () => {
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
      <ProductCard icon={LuCakeSlice} title={"Padaria & Pastelaria Online"}>
        Template ideal para apresentar pães, bolos e produtos frescos.
        Layout apelativo com destaque para especialidades do dia.
      </ProductCard>

      <ProductCard icon={LuShoppingBasket} title={"Sistema de Encomendas"}>
        Permite aos clientes fazer encomendas antecipadas para recolha
        ou entrega, com carrinho simples e intuitivo.
      </ProductCard>

      <ProductCard icon={LuClock} title={"Produtos por Horário"}>
        Destaque automático para produtos disponíveis em horários
        específicos, como pão quente ou promoções do dia.
      </ProductCard>
    </Grid>
  );
};

export default Padarias;