"use client";
import {
  StargateColors,
} from "#/src/utils/Colors";
import {
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  HStack,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import {
  LuTarget,
  LuRocket,
  LuUsers,
  LuLayoutTemplate,
  LuZap,
  LuShoppingBag,
  LuCoffee,
  LuMonitor,
  LuShirt,
  LuPill,
  LuPalette,
  LuPackage,
} from "react-icons/lu";

const About = () => {
  return (
    <Flex
      id="about"
      direction="column"
      justify="center"
      align="center"
      my={24}
      px={2}
      maxW={1200}
      mx="auto"
      gap={16}
    >
      {/* Título */}
      <Heading fontSize={{ base: 32, md: 48 }} textAlign="center">
        Sobre a Loja.Sale
      </Heading>

      {/* Descrição resumida */}
      <Text
        fontSize={{ base: 16, md: 20 }}
        textAlign="center"
        maxW={800}
        color={StargateColors.grey}
      >
        A Loja.Sale permite que qualquer negócio crie a sua presença digital rapidamente,
        usando templates e protótipos prontos para lojas de moda, eletrónica, farmácias, padarias, restaurantes, artesãos e muito mais,
        sem precisar de programador.
      </Text>

      {/* Missão, Visão e Valores */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={10}
      >
        {AboutCards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} color={card.color}>
            {card.text}
          </Card>
        ))}
      </Grid>

      {/* Workflow / Como Funciona */}
      <Heading fontSize={{ base: 24, md: 36 }} textAlign="center">
        Como Funciona
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={10}
      >
        {WorkflowCards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} color={card.color}>
            {card.text}
          </Card>
        ))}
      </Grid>

      {/* Use Cases / Casos de Uso */}
      <Heading fontSize={{ base: 24, md: 36 }} textAlign="center">
        Casos de Uso
      </Heading>
      <Accordion
        allowMultiple
        w="full"
        maxW={900}
        border="none"
        color={StargateColors.grey}
        gap={4}
      >
        {UseCases.map((caseItem, idx) => (
          <AccordionItem
            key={idx}
            border="none"
            mb={4}
            _last={{ mb: 0 }}
            rounded="lg"
            overflow="hidden"
            boxShadow="sm"
            transition="all 0.25s ease"
            _hover={{ shadow: "md" }}
          >
            <AccordionButton
              _hover={{ bg: `${StargateColors.primary}20` }}
              px={4}
              py={3}
              bg={StargateColors.lightGrey}
            >
              <HStack flex="1" spacing={3} align="center">
                <Icon as={caseItem.icon} fontSize={24} color={StargateColors.primary} />
                <Box flex="1" textAlign="left" fontWeight={600} fontSize="lg">
                  {caseItem.title}
                </Box>
              </HStack>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              px={4}
              py={3}
              bg={`${StargateColors.primary}10`}
              rounded="md"
              fontSize="md"
              color={StargateColors.grey}
            >
              {caseItem.description}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

interface CardProps {
  icon: React.ElementType;
  title: string;
  children: ReactNode;
  color?: string;
}

const Card = ({ icon, title, children, color }: CardProps) => (
  <Flex maxW={350} role="group">
    <Icon
      as={icon}
      fontSize={48}
      mr={5}
      p={2}
      bg={color ?? StargateColors.lightGrey}
      color="white"
      rounded="md"
      transition="all 0.25s ease"
      _groupHover={{
        bg: StargateColors.black,
        shadow: "dark-lg",
        transform: "scale(1.05)",
      }}
    />
    <Flex direction="column" gap={1}>
      <Heading fontSize="xl">{title}</Heading>
      <Text fontSize="sm" color={StargateColors.grey}>
        {children}
      </Text>
    </Flex>
  </Flex>
);

// Missão, Visão, Valores
const AboutCards = [
  {
    icon: LuTarget,
    title: "Missão",
    text: "Capacitar negócios a digitalizarem-se de forma rápida e acessível.",
    color: "#FF6B6B",
  },
  {
    icon: LuRocket,
    title: "Visão",
    text: "Ser referência em templates e protótipos de e-commerce em Moçambique e África.",
    color: "#4ECDC4",
  },
  {
    icon: LuUsers,
    title: "Valores",
    text: "Simplicidade, eficiência e confiança para negócios locais.",
    color: "#FFD93D",
  },
];

// Workflow / Como funciona
const WorkflowCards = [
  {
    icon: LuLayoutTemplate,
    title: "Escolha",
    text: "Selecione o template ou protótipo que melhor se adapta ao seu negócio.",
    color: "#70A4D4",
  },
  {
    icon: LuZap,
    title: "Personalize",
    text: "Adapte cores, imagens e conteúdos facilmente.",
    color: "#CA71FF",
  },
  {
    icon: LuRocket,
    title: "Publique",
    text: "Com um clique, coloque o seu negócio online rapidamente.",
    color: "#48B9E6",
  },
];

// Use Cases / Casos de Uso
const UseCases = [
  {
    title: "Moda",
    icon: LuShirt,
    description:
      "Quem possui uma loja de roupa pode configurar rapidamente uma loja online de moda, adicionar coleções, imagens de produtos e métodos de pagamento, tornando a experiência de compra simples e elegante.",
  },
  {
    title: "Eletrónica",
    icon: LuMonitor,
    description:
      "Para lojas de eletrónica, é possível criar uma vitrine digital, listar produtos como computadores e acessórios, e aceitar pagamentos online sem precisar de desenvolver do zero.",
  },
  {
    title: "Farmácias / Produtos",
    icon: LuPill,
    description:
      "Lojas de produtos e farmácias podem adicionar rapidamente os seus itens, criar categorias e facilitar pedidos online, oferecendo uma experiência profissional e prática aos clientes.",
  },
  {
    title: "Padarias / Doces",
    icon: LuCoffee,
    description:
      "Padarias e lojas de doces podem montar um catálogo online, mostrar os produtos disponíveis e permitir que os clientes façam encomendas rapidamente.",
  },
  {
    title: "Restaurantes",
    icon: LuShoppingBag,
    description:
      "Restaurantes podem criar menus digitais e permitir pedidos online, aumentando a visibilidade e agilidade do serviço.",
  },
  {
    title: "Artesãos",
    icon: LuPalette,
    description:
      "Artesãos podem mostrar o seu portfólio de produtos e vender online de forma simples e direta.",
  },
  {
    title: "Lojas de Retalho",
    icon: LuPackage,
    description:
      "Pequenas lojas podem montar rapidamente um catálogo online de produtos variados, simplificando a gestão e vendas digitais.",
  },
];

export default About;