"use client";

import { StargateColors } from "#/src/utils/Colors";
import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import {
  LuCreditCard,
  LuGlobe,
  LuLayoutTemplate,
  LuLifeBuoy,
  LuShoppingBag,
  LuSparkles,
  LuZap,
} from "react-icons/lu";

const Features = () => {
  return (
    <Box
      id="features"
      as="section"
      position="relative"
      overflow="hidden"
      bg="gray.50"
      py={{ base: 14, md: 20, lg: 24 }}
      px={{ base: 4, sm: 5, md: 8 }}
    >
      <Box
        position="absolute"
        top={{ base: "-90px", md: "-120px" }}
        right={{ base: "-120px", md: "-100px" }}
        w={{ base: "240px", md: "340px" }}
        h={{ base: "240px", md: "340px" }}
        bg="#70A4D422"
        rounded="full"
        filter="blur(80px)"
      />

      <Flex
        position="relative"
        zIndex={1}
        direction="column"
        align="center"
        maxW="1200px"
        mx="auto"
        gap={{ base: 9, md: 12, lg: 14 }}
      >
        <VStack spacing={{ base: 3, md: 4 }} textAlign="center" maxW="820px">
          <Badge
            px={4}
            py={2}
            rounded="full"
            bg={`${StargateColors.primary}15`}
            color={StargateColors.primary}
            fontSize={{ base: "xs", md: "sm" }}
            textTransform="none"
            fontWeight={800}
          >
            Funcionalidades
          </Badge>

          <Heading
            fontSize={{ base: "30px", sm: "38px", md: "48px", lg: "56px" }}
            lineHeight={{ base: "1.12", md: "1.08" }}
            letterSpacing={{ base: "-0.7px", md: "-1.4px" }}
          >
            Tudo o que precisa para lançar a sua loja online
          </Heading>

          <Text
            fontSize={{ base: "sm", sm: "md", md: "lg" }}
            maxW="760px"
            color={StargateColors.grey}
            lineHeight={{ base: "1.7", md: "1.8" }}
          >
            Ferramentas, templates e soluções prontas para criar lojas online
            modernas para moda, eletrónica, padarias, farmácias, restaurantes e
            muitos outros negócios.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={{ base: 4, md: 6 }}
          w="full"
        >
          {Cards.map((card) => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              color={card.color}
            >
              {card.text}
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

interface CardProps {
  icon: React.ElementType;
  title: string;
  color: string;
  children: ReactNode;
}

const Card = ({ icon, title, color, children }: CardProps) => (
  <Flex
    direction="column"
    gap={{ base: 4, md: 5 }}
    p={{ base: 5, md: 7 }}
    bg="white"
    rounded={{ base: "2xl", md: "3xl" }}
    border="1px solid"
    borderColor="blackAlpha.100"
    shadow="sm"
    minH={{ base: "auto", md: "245px" }}
    transition="all 0.25s ease"
    role="group"
    position="relative"
    overflow="hidden"
    _hover={{
      transform: { base: "none", md: "translateY(-6px)" },
      shadow: { base: "md", md: "xl" },
      borderColor: `${color}55`,
    }}
  >
    <Box
      position="absolute"
      top="-40px"
      right="-40px"
      w={{ base: "100px", md: "120px" }}
      h={{ base: "100px", md: "120px" }}
      rounded="full"
      bg={`${color}12`}
      transition="all 0.25s ease"
      _groupHover={{
        transform: { base: "none", md: "scale(1.25)" },
        bg: `${color}20`,
      }}
    />

    <Flex
      w={{ base: "52px", md: "58px" }}
      h={{ base: "52px", md: "58px" }}
      align="center"
      justify="center"
      rounded="2xl"
      bg={`${color}18`}
      color={color}
      zIndex={1}
      transition="all 0.25s ease"
      _groupHover={{
        bg: color,
        color: "white",
        transform: { base: "none", md: "scale(1.06)" },
      }}
    >
      <Icon as={icon} fontSize={{ base: 26, md: 30 }} strokeWidth={1.8} />
    </Flex>

    <VStack align="flex-start" spacing={2} zIndex={1}>
      <HStack spacing={2} align="flex-start">
        <Icon as={LuSparkles} color={color} fontSize={16} />
        <Heading fontSize={{ base: "lg", md: "xl" }} lineHeight="1.25">
          {title}
        </Heading>
      </HStack>

      <Text fontSize="sm" color={StargateColors.grey} lineHeight="1.8">
        {children}
      </Text>
    </VStack>
  </Flex>
);

const Cards = [
  {
    icon: LuLayoutTemplate,
    title: "Templates Prontos",
    color: "#70A4D4",
    text: "Escolha entre templates e protótipos modernos, adaptáveis a diferentes tipos de negócio.",
  },
  {
    icon: LuShoppingBag,
    title: "Lojas Online Rápidas",
    color: "#CA71FF",
    text: "Configure rapidamente lojas de moda, eletrónica, padarias, farmácias ou produtos variados.",
  },
  {
    icon: LuCreditCard,
    title: "Pagamentos Seguros",
    color: "#41B668",
    text: "Integre métodos de pagamento confiáveis para permitir compras online com segurança.",
  },
  {
    icon: LuGlobe,
    title: "Presença Digital",
    color: "#48B9E6",
    text: "Coloque o seu negócio online e alcance clientes em Moçambique e além.",
  },
  {
    icon: LuZap,
    title: "Personalização Fácil",
    color: "#E6990B",
    text: "Edite cores, imagens, conteúdos e produtos para refletir a identidade da sua marca.",
  },
  {
    icon: LuLifeBuoy,
    title: "Suporte ao Cliente",
    color: "#DA4D8F",
    text: "Conte com apoio dedicado para manter a sua loja online estável e funcional.",
  },
];

export default Features;