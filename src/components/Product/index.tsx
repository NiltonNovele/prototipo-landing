"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Moda from "./categories/moda";
import Eletronica from "./categories/eletronica";
import Farmacias from "./categories/farmacias";
import Padarias from "./categories/padarias";
import Restaurantes from "./categories/restaurantes";
import LojasProdutos from "./categories/lojasProdutos";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Product = () => {
  const [currentCategory, setCurrentCategory] = useState("padarias");

  const currentDemo = Categories.find(
    (c) => c.key === currentCategory
  )?.demoLink;

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

      {/* DEMO BUTTON */}
      <Button
  mt={4}
  mb={6}
  size="md"
  borderRadius="xl"
  bg={StargateColors.black}
  color="white"
  px={6}
  gap={2}
  rightIcon={<ExternalLink size={16} />}
  _hover={{
    opacity: 0.9,
    transform: "translateY(-2px)",
    boxShadow: "lg",
  }}
  _active={{
    transform: "scale(0.98)",
  }}
  transition="all 0.2s ease"
  onClick={() => {
    if (currentDemo) {
      window.open(currentDemo, "_blank");
    }
  }}
>
  Ver demo
</Button>

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
  { key: "padarias", label: "Confeitaria", demoLink: "https://amysabores.vercel.app" },
  { key: "moda", label: "Moda", demoLink: "https://www.bfashion.sale" },
  { key: "eletronica", label: "Eletrónica", demoLink: "https://prototipo-eletronicos.vercel.app" },
  { key: "farmacias", label: "Farmácias", demoLink: "#" },
  // { key: "restaurantes", label: "Restaurantes", demoLink: "/demo/restaurantes" },
  { key: "lojas", label: "Lojas de Produtos", demoLink: "https://pasargad.vercel.app" },
];

export default Product;