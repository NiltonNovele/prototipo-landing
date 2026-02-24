import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuShirt, LuShoppingBag, LuGem } from "react-icons/lu";

const Moda = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      w={"100%"}
      mt={6}
      gap={6}
      px={6}
    >
      <ProductCard icon={LuShirt} title={"Template Moda Minimalista"}>
        Ideal para boutiques e lojas de roupa modernas. Design elegante,
        foco nas coleções e experiência de compra simples e intuitiva.
      </ProductCard>

      <ProductCard icon={LuShoppingBag} title={"Loja de Moda Completa"}>
        Inclui catálogo organizado por categorias, carrinho de compras
        integrado e sistema de pagamento pronto a usar.
      </ProductCard>

      <ProductCard icon={LuGem} title={"Moda Premium"}>
        Perfeito para marcas exclusivas. Destaque para produtos em alta,
        banners promocionais e layout sofisticado.
      </ProductCard>
    </Grid>
  );
};

export default Moda;