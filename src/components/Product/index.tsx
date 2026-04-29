"use client";

import { StargateColors } from "#/src/utils/Colors";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import Moda from "./categories/moda";
import Eletronica from "./categories/eletronica";
import Farmacias from "./categories/farmacias";
import Padarias from "./categories/padarias";
import Restaurantes from "./categories/restaurantes";
import LojasProdutos from "./categories/lojasProdutos";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  LuCakeSlice,
  LuMonitorSmartphone,
  LuPackage,
  LuPill,
  LuShirt,
  LuSparkles,
} from "react-icons/lu";

type CategoryKey =
  | "padarias"
  | "moda"
  | "eletronica"
  | "farmacias"
  | "restaurantes"
  | "lojas";

const categoryComponents: Record<CategoryKey, React.ComponentType> = {
  moda: Moda,
  eletronica: Eletronica,
  farmacias: Farmacias,
  padarias: Padarias,
  restaurantes: Restaurantes,
  lojas: LojasProdutos,
};

const Categories: {
  key: CategoryKey;
  label: string;
  description: string;
  demoLink: string;
  icon: React.ElementType;
}[] = [
  {
    key: "padarias",
    label: "Confeitaria",
    description: "Ideal para padarias, pastelarias, cafés e doces.",
    demoLink: "https://amysabores.vercel.app",
    icon: LuCakeSlice,
  },
  {
    key: "moda",
    label: "Moda",
    description: "Perfeito para boutiques, roupas e acessórios.",
    demoLink: "https://www.bfashion.sale",
    icon: LuShirt,
  },
  {
    key: "eletronica",
    label: "Eletrónica",
    description: "Venda gadgets, telemóveis e acessórios tecnológicos.",
    demoLink: "https://prototipo-eletronicos.vercel.app",
    icon: LuMonitorSmartphone,
  },
  {
    key: "farmacias",
    label: "Farmácias",
    description: "Organize produtos, categorias e pedidos online.",
    demoLink: "#",
    icon: LuPill,
  },
  {
    key: "lojas",
    label: "Lojas de Produtos",
    description: "Para lojas com vários produtos e categorias.",
    demoLink: "https://pasargad.vercel.app",
    icon: LuPackage,
  },
];

const Product = () => {
  const [currentCategory, setCurrentCategory] =
    useState<CategoryKey>("padarias");

  const selectedCategory = useMemo(
    () => Categories.find((category) => category.key === currentCategory),
    [currentCategory]
  );

  const CurrentComponent = categoryComponents[currentCategory];

  const hasDemo =
    selectedCategory?.demoLink && selectedCategory.demoLink !== "#";

  return (
    <Box
      id="product"
      as="section"
      position="relative"
      overflow="hidden"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
    >
      <Box
        position="absolute"
        top="-140px"
        left="-140px"
        w="340px"
        h="340px"
        rounded="full"
        bg="#70A4D422"
        filter="blur(85px)"
      />

      <Flex
        direction="column"
        align="center"
        maxW="1200px"
        mx="auto"
        bg="white"
        border="1px solid"
        borderColor="blackAlpha.100"
        rounded={{ base: "3xl", md: "32px" }}
        shadow="sm"
        overflow="hidden"
      >
        <VStack spacing={4} textAlign="center" px={5} pt={{ base: 10, md: 14 }}>
          <Badge
            px={4}
            py={2}
            rounded="full"
            bg={`${StargateColors.primary}15`}
            color={StargateColors.primary}
            textTransform="none"
            fontWeight={700}
          >
            <Flex align="center" gap={2}>
              <Icon as={LuSparkles} />
              Produtos & demonstrações
            </Flex>
          </Badge>

          <Heading
            fontSize={{ base: "28px", md: "44px" }}
            letterSpacing="-1px"
            lineHeight="1.1"
            maxW="850px"
          >
            O que pode a Loja.Sale fazer pelo seu negócio?
          </Heading>

          <Text
            color={StargateColors.grey}
            maxW="720px"
            fontSize={{ base: "sm", md: "md" }}
            lineHeight="1.8"
          >
            Escolha uma categoria abaixo para visualizar como a sua loja pode
            funcionar na prática e abrir uma demo real.
          </Text>
        </VStack>

        <Flex
          gap={3}
          px={{ base: 4, md: 8 }}
          py={6}
          mt={4}
          justify={{ base: "flex-start", md: "center" }}
          overflowX="auto"
          w="100%"
          className="hide-scrollbar"
          borderBottom="1px solid"
          borderColor="blackAlpha.100"
        >
          {Categories.map((category) => {
            const isActive = currentCategory === category.key;

            return (
              <Flex
                key={category.key}
                as="button"
                type="button"
                align="center"
                gap={2}
                cursor="pointer"
                onClick={() => setCurrentCategory(category.key)}
                px={5}
                py={3}
                rounded="full"
                transition="all 0.25s ease"
                whiteSpace="nowrap"
                bg={isActive ? StargateColors.black : "blackAlpha.50"}
                color={isActive ? "white" : StargateColors.grey}
                _hover={{
                  bg: isActive ? StargateColors.black : "blackAlpha.100",
                  transform: "translateY(-2px)",
                }}
              >
                <Icon as={category.icon} fontSize={18} />
                <Text fontWeight={800} fontSize="sm">
                  {category.label}
                </Text>
              </Flex>
            );
          })}
        </Flex>

        <Flex
          w="100%"
          px={{ base: 5, md: 8 }}
          py={5}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={4}
          direction={{ base: "column", md: "row" }}
          bg="gray.50"
          borderBottom="1px solid"
          borderColor="blackAlpha.100"
        >
          <Box>
            <Text fontWeight={900} fontSize={{ base: "lg", md: "xl" }}>
              {selectedCategory?.label}
            </Text>
            <Text color={StargateColors.grey} fontSize="sm">
              {selectedCategory?.description}
            </Text>
          </Box>

          <Button
            size="md"
            rounded="full"
            bg={StargateColors.black}
            color="white"
            px={6}
            rightIcon={<ExternalLink size={16} />}
            isDisabled={!hasDemo}
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
              if (hasDemo && selectedCategory?.demoLink) {
                window.open(
                  selectedCategory.demoLink,
                  "_blank",
                  "noopener,noreferrer"
                );
              }
            }}
          >
            {hasDemo ? "Ver demo" : "Demo indisponível"}
          </Button>
        </Flex>

        <Box w="100%" px={{ base: 0, md: 4 }} pb={{ base: 4, md: 8 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              style={{ width: "100%" }}
            >
              <CurrentComponent />
            </motion.div>
          </AnimatePresence>
        </Box>
      </Flex>
    </Box>
  );
};

export default Product;