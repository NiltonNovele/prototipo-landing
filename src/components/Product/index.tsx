"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Moda from "./categories/moda";
import Eletronica from "./categories/eletronica";
import Farmacias from "./categories/farmacias";
import Padarias from "./categories/padarias";
import Restaurantes from "./categories/restaurantes";
import LojasProdutos from "./categories/lojasProdutos";
import { AnimatePresence, motion } from "framer-motion";

const Product = () => {
  const [currentCategory, setCurrentCategory] = useState("moda");

  return (
    <Flex
      id="product"
      direction="column"
      justify="center"
      align="center"
      my={24}
      pt={6}
      pb={{
        base: 6,
        md: 12,
      }}
      px={{
        base: 0,
        md: 10,
      }}
      maxW={1200}
      mx={{
        base: 2,
        xl: "auto",
      }}
      border={`1px solid ${StargateColors.lightBg}`}
      borderRadius={24}
    >
      <Heading textAlign="center" px={2}>
        O que pode a Loja.Sale fazer pelo seu negócio?
      </Heading>

      {/* Category Tabs */}
      <Flex
        gap={4}
        py={{
          base: 5,
          md: 4,
        }}
        px={4}
        mt={5}
        borderBottom={{
          base: `1px solid ${StargateColors.lightBg}`,
          md: "none",
        }}
        justify={{
          base: "flex-start",
          md: "center",
        }}
        overflowX="auto"
        w="100%"
        className="hide-scrollbar"
      >
        {Categories.map((category) => {
          const key = category.key;

          return (
            <Flex
              key={key}
              cursor="pointer"
              onClick={() => setCurrentCategory(key)}
              px={4}
              py={2}
              borderRadius={12}
              transition="all 0.25s ease"
              whiteSpace="nowrap"
              {...(currentCategory === key
                ? {
                    bgColor: StargateColors.black,
                    shadow: "lg",
                  }
                : {})}
            >
              <Text
                fontWeight="bold"
                fontSize="sm"
                color={
                  currentCategory === key
                    ? StargateColors.white
                    : StargateColors.grey
                }
              >
                {category.label}
              </Text>
            </Flex>
          );
        })}
      </Flex>

      {/* Animated Category Content */}
      <AnimatePresence mode="wait">
        {Object.entries(categoryComponents).map(
          ([key, Component]) =>
            currentCategory === key && (
              <motion.div
                key={key}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.2 }}
                transition={{ duration: 0.25 }}
                style={{ width: "100%" }}
              >
                <Component />
              </motion.div>
            )
        )}
      </AnimatePresence>
    </Flex>
  );
};

const categoryComponents = {
  moda: Moda,
  eletronica: Eletronica,
  farmacias: Farmacias,
  padarias: Padarias,
  restaurantes: Restaurantes,
  lojas: LojasProdutos,
};

const Categories = [
  { key: "moda", label: "Moda" },
  { key: "eletronica", label: "Eletrónica" },
  { key: "farmacias", label: "Farmácias" },
  { key: "padarias", label: "Padarias" },
  { key: "restaurantes", label: "Restaurantes" },
  { key: "lojas", label: "Lojas de Produtos" },
];

export default Product;