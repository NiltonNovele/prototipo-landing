"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  LuLayoutTemplate,
  LuShoppingBag,
  LuCreditCard,
  LuGlobe,
  LuLifeBuoy,
  LuZap,
} from "react-icons/lu";

const Features = () => {
  return (
    <Flex
      id="features"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={"center"}
      >
        Funcionalidades do Vendo.Sale
      </Heading>

      <Text
        fontSize={{ base: 16, md: 20 }}
        textAlign="center"
        maxW={800}
        my={6}
        color={StargateColors.grey}
      >
        Descubra todas as ferramentas e templates que facilitam a criação rápida de lojas online,
        protótipos prontos a usar, e soluções para negócios de moda, eletrónica, padarias, farmácias e muito mais.
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={10}
        my={10}
      >
        {Cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title}>
            {card.text}
          </Card>
        ))}
      </Grid>
    </Flex>
  );
};

interface CardProps {
  icon: IconType;
  title: string;
  children: ReactNode;
}

const Card = ({ icon, title, children }: CardProps) => (
  <Flex maxW={350} role="group">
    <Icon
      as={icon}
      fontSize={48}
      mr={5}
      p={2}
      bg={StargateColors.lightGrey}
      rounded={"md"}
      strokeWidth={1.5}
      transition={"all 0.25s ease"}
      _groupHover={{
        bg: StargateColors.black,
        color: StargateColors.white,
        shadow: "dark-lg",
        transform: "scale(1.05)",
      }}
    />
    <Flex direction={"column"} gap={1}>
      <Heading fontSize={"xl"}>{title}</Heading>
      <Text fontSize={"small"} color={StargateColors.grey}>
        {children}
      </Text>
    </Flex>
  </Flex>
);

// Vendo.Sale Cards / Features
const Cards = [
  {
    icon: LuLayoutTemplate,
    title: "Templates Prontos",
    text: "Escolha entre uma variedade de templates e protótipos de lojas online adaptáveis a qualquer negócio.",
  },
  {
    icon: LuShoppingBag,
    title: "Lojas Online Rápidas",
    text: "Configure rapidamente lojas de moda, eletrónica, padarias, farmácias ou produtos variados sem programar.",
  },
  {
    icon: LuCreditCard,
    title: "Pagamentos Seguros",
    text: "Integração com sistemas de pagamento confiáveis para que os clientes possam pagar de forma segura online.",
  },
  {
    icon: LuGlobe,
    title: "Presença Digital",
    text: "Coloque o seu negócio online, alcance clientes em Moçambique e além, com uma presença digital profissional.",
  },
  {
    icon: LuZap,
    title: "Personalização Fácil",
    text: "Edite cores, imagens e conteúdos de forma intuitiva para refletir a identidade da sua marca.",
  },
  {
    icon: LuLifeBuoy,
    title: "Suporte ao Cliente",
    text: "Apoio dedicado e rápido para garantir que o seu negócio online funcione sem problemas.",
  },
];

export default Features;