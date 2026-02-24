import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuUtensils, LuClipboardList, LuTruck } from "react-icons/lu";

const Restaurantes = () => {
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
      <ProductCard icon={LuUtensils} title={"Restaurante com Menu Digital"}>
        Template moderno com menu organizado por categorias, imagens
        apelativas e destaque para pratos mais vendidos.
      </ProductCard>

      <ProductCard icon={LuClipboardList} title={"Pedidos Online"}>
        Permite aos clientes fazer pedidos diretamente pelo site,
        com carrinho integrado e checkout rápido.
      </ProductCard>

      <ProductCard icon={LuTruck} title={"Entrega & Takeaway"}>
        Sistema preparado para entregas ao domicílio ou recolha no
        local, com gestão simples de encomendas.
      </ProductCard>
    </Grid>
  );
};

export default Restaurantes;