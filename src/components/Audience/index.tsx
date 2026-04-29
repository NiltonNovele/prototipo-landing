"use client";

import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import {
  LuBriefcase,
  LuCakeSlice,
  LuLaptop,
  LuPill,
  LuShirt,
  LuShoppingBag,
  LuSparkles,
  LuUtensils,
} from "react-icons/lu";

const Audience = () => {
  return (
    <Box
      id="audience"
      as="section"
      position="relative"
      overflow="hidden"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
    >
      <Box
        position="absolute"
        top="-120px"
        left="-120px"
        w="320px"
        h="320px"
        bg="#70A4D422"
        rounded="full"
        filter="blur(80px)"
      />

      <Box
        position="absolute"
        bottom="-140px"
        right="-140px"
        w="340px"
        h="340px"
        bg="#CA71FF22"
        rounded="full"
        filter="blur(80px)"
      />

      <Flex
        position="relative"
        zIndex={1}
        direction="column"
        justify="center"
        align="center"
        maxW="1200px"
        mx="auto"
        gap={{ base: 10, md: 14 }}
      >
        <VStack spacing={4} textAlign="center" maxW="780px">
          <Badge
            px={4}
            py={2}
            rounded="full"
            bg="blackAlpha.50"
            color="#348FDA"
            fontSize="sm"
            textTransform="none"
            fontWeight={700}
          >
            Público-alvo
          </Badge>

          <Heading
            fontSize={{ base: "32px", md: "48px", lg: "56px" }}
            lineHeight="1.08"
            letterSpacing="-1.4px"
          >
            A{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, #70A4D4, #CA71FF, #48B9E6)"
              bgClip="text"
              fontWeight="900"
            >
              Loja.Sale
            </Text>{" "}
            é ideal para negócios que querem vender online
          </Heading>

          <Text
            color="gray.500"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.8"
          >
            Perfeita para empreendedores, pequenas lojas e marcas locais que
            querem apresentar produtos, receber pedidos e criar uma presença
            digital moderna.
          </Text>
        </VStack>

        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={5}
          w="full"
        >
          {Cards.map((card) => (
            <Card
              key={card.title}
              color={card.color}
              icon={card.icon}
              description={card.description}
            >
              {card.title}
            </Card>
          ))}
        </Grid>

        <Flex
          align="center"
          justify="center"
          gap={3}
          px={{ base: 5, md: 8 }}
          py={{ base: 5, md: 6 }}
          bg="white"
          border="1px solid"
          borderColor="blackAlpha.100"
          rounded="3xl"
          shadow="sm"
          textAlign="center"
          maxW="760px"
        >
          <Icon as={LuSparkles} color="#CA71FF" fontSize={24} />
          <Heading fontSize={{ base: "18px", md: "24px" }} lineHeight="1.4">
            E muitos outros negócios locais prontos para crescer no digital.
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
};

interface CardProps {
  color: string;
  icon: React.ElementType;
  description: string;
  children: ReactNode;
}

const Card = ({ color, icon, description, children }: CardProps) => {
  return (
    <Flex
      direction="column"
      gap={5}
      bg="white"
      p={{ base: 5, md: 6 }}
      minH="210px"
      rounded="3xl"
      border="1px solid"
      borderColor="blackAlpha.100"
      shadow="sm"
      transition="all .25s ease"
      role="group"
      _hover={{
        boxShadow: `0px 18px 45px ${color}24`,
        transform: "translateY(-6px)",
        borderColor: `${color}55`,
      }}
    >
      <Flex
        w="56px"
        h="56px"
        align="center"
        justify="center"
        rounded="2xl"
        bg={`${color}18`}
        color={color}
        transition="all .25s ease"
        _groupHover={{
          bg: color,
          color: "white",
          transform: "scale(1.06)",
        }}
      >
        <Icon as={icon} fontSize={28} />
      </Flex>

      <Box>
        <Text
          color="gray.900"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight={800}
          mb={2}
        >
          {children}
        </Text>

        <Text color="gray.500" fontSize="sm" lineHeight="1.7">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

const Cards = [
  {
    title: "Lojas de Moda",
    color: "#E6990B",
    icon: LuShirt,
    description:
      "Venda roupas, acessórios, coleções e novidades com uma vitrine online elegante.",
  },
  {
    title: "Lojas de Eletrónica",
    color: "#348FDA",
    icon: LuLaptop,
    description:
      "Apresente computadores, celulares, acessórios e produtos tecnológicos de forma profissional.",
  },
  {
    title: "Farmácias & Produtos",
    color: "#41B668",
    icon: LuPill,
    description:
      "Organize produtos por categorias e facilite pedidos ou consultas dos clientes.",
  },
  {
    title: "Padarias & Doces",
    color: "#DA4D8F",
    icon: LuCakeSlice,
    description:
      "Mostre bolos, doces, pães e encomendas especiais com fotos e detalhes claros.",
  },
  {
    title: "Restaurantes",
    color: "#A431C7",
    icon: LuUtensils,
    description:
      "Crie menus digitais, destaque pratos e permita pedidos com uma experiência simples.",
  },
  {
    title: "Empreendedores Digitais",
    color: "#42C9B2",
    icon: LuBriefcase,
    description:
      "Ideal para marcas pessoais, criadores, vendedores independentes e pequenos negócios.",
  },
  {
    title: "Lojas de Retalho",
    color: "#48B9E6",
    icon: LuShoppingBag,
    description:
      "Venda produtos variados com uma página organizada, moderna e fácil de navegar.",
  },
];

export default Audience;