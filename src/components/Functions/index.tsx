"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";

interface Prototype {
  id: number;
  type: string;
  description: string;
  media: string; // GIF or video URL
  href: string; // link to prototype detail page
  colSpan?: number;
  rowSpan?: number | object;
}

const prototypes: Prototype[] = [
  {
    id: 1,
    type: "Cafeteria",
    description: "Loja moderna para cafés, padarias e pastelarias.",
    media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZuZTFwYXloMXJnaHo0MjB4NTVqbmZjNno1bWZlY2didzVybGt1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ehwuBgKNA2NACoFa7w/giphy.gif",
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
    description: "Venda de produtos diversos com gestão avançada de stock.",
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
    media: "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
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
      px={2}
      maxW={1200}
      mx="auto"
    >
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
            {/* GIF Background */}
            <Box
              as="img"
              src={proto.media}
              alt={proto.type}
              w="100%"
              h="100%"
              objectFit="cover"
              filter="brightness(0.45)"
              transition="all 0.3s ease"
            />

            {/* Overlay Type and Description */}
            <Flex
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              direction="column"
              align="center"
              textAlign="center"
              px={4}
            >
              <Heading
                color="white"
                fontSize={{ base: 16, md: 22 }}
                mb={2}
              >
                {proto.type}
              </Heading>
              <Text
                color="whiteAlpha.900"
                fontSize={{ base: 12, md: 14 }}
                maxW="200px"
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