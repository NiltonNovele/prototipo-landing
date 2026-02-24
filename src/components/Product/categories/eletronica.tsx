import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuSmartphone, LuLaptop, LuHeadphones } from "react-icons/lu";

const Eletronica = () => {
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
      <ProductCard icon={LuSmartphone} title={"Loja de Smartphones"}>
        Template moderno ideal para venda de telemóveis e acessórios.
        Inclui destaque para promoções, produtos em alta e pagamento rápido.
      </ProductCard>

      <ProductCard icon={LuLaptop} title={"Loja de Informática"}>
        Estrutura completa para venda de computadores, peças e tecnologia.
        Catálogo organizado por categorias com filtros intuitivos.
      </ProductCard>

      <ProductCard icon={LuHeadphones} title={"Gadgets & Acessórios"}>
        Perfeito para lojas de gadgets, headphones, smartwatches e
        dispositivos tecnológicos. Design dinâmico e focado em conversão.
      </ProductCard>
    </Grid>
  );
};

export default Eletronica;