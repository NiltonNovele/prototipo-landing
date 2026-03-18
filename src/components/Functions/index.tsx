"use client";
import { StargateColors } from "#/src/utils/Colors";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";

interface Prototype {
  id: number;
  type: string;
  description: string;
  media: string;
  href: string;
  colSpan?: number;
  rowSpan?: number | object;
}

const prototypes: Prototype[] = [
  {
    id: 1,
    type: "Cafeteria",
    description: "Loja moderna para cafés, padarias e pastelarias.",
    media:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZuZTFwYXloMXJnaHo0MjB4NTVqbmZjNno1bWZlY2didzVybGt1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ehwuBgKNA2NACoFa7w/giphy.gif",
    href: "/prototypes/cafeteria",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 2,
    type: "Eletrónicos",
    description: "Loja para gadgets, smartphones e produtos tecnológicos.",
    media: "https://media.giphy.com/media/l0HlQ7LRal2m9KZC0/giphy.gif",
    href: "/prototypes/eletronicos",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 3,
    type: "Produtos",
    description:
      "Venda de produtos diversos com gestão avançada de stock.",
    media: "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
    href: "/prototypes/produtos",
    colSpan: 1,
    rowSpan: { base: 1, md: 2 },
  },
  {
    id: 4,
    type: "Roupa & Moda",
    description: "Loja elegante para vestuário, acessórios e moda.",
    media: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    href: "/prototypes/roupa-moda",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 5,
    type: "Alimentação",
    description: "Venda de produtos alimentares frescos e gourmet.",
    media: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
    href: "/prototypes/alimentacao",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 6,
    type: "Serviços",
    description: "Apresentação de serviços e agendamentos online.",
    media: "/1.png",
    href: "/prototypes/servicos",
    colSpan: 2,
    rowSpan: 1,
  },
];

const PrototypesGrid = () => {
  return (
    <Flex
      id="prototypes"
      direction="column"
      justify="center"
      align="center"
      my={24}
      px={4}
      maxW={1200}
      mx="auto"
    >
      <Heading
        mb={12}
        textAlign="center"
        fontSize={{ base: "24px", md: "36px" }}
        fontWeight="bold"
        color={StargateColors?.black || "gray.800"}
      >
        Escolha o protótipo ideal para o seu ofício...
      </Heading>

      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
        w="100%"
      >
        {prototypes.map((proto) => (
          <GridItem
            key={proto.id}
            colSpan={proto.colSpan ?? 1}
            rowSpan={proto.rowSpan ?? 1}
            rounded={32}
            overflow="hidden"
            cursor="pointer"
            position="relative"
            transition="all 0.3s ease"
            _hover={{ shadow: "xl", transform: "scale(1.05)" }}
            onClick={() => (window.location.href = proto.href)}
            minH={{ base: "180px", md: "320px" }}
          >
            {/* Background Image */}
            <Box
              as="img"
              src={proto.media}
              alt={proto.type}
              w="100%"
              h="100%"
              objectFit="cover"
            />

            {/* Dark Gradient Overlay (ensures text visibility) */}
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.65))"
            />

            {/* Overlay Content */}
            <Flex
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              direction="column"
              align="center"
              textAlign="center"
              px={4}
              zIndex={2}
            >
              <Heading
                color="white"
                fontSize={{ base: 16, md: 22 }}
                mb={2}
                textShadow="0 2px 8px rgba(0,0,0,0.8)"
              >
                {proto.type}
              </Heading>
              <Text
                color="whiteAlpha.900"
                fontSize={{ base: 12, md: 14 }}
                maxW="200px"
                textShadow="0 2px 6px rgba(0,0,0,0.8)"
              >
                {proto.description}
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default PrototypesGrid;