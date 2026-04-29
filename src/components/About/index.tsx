"use client";

import { StargateColors } from "#/src/utils/Colors";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
  LuCoffee,
  LuLayoutTemplate,
  LuMonitor,
  LuPackage,
  LuPalette,
  LuPill,
  LuRocket,
  LuShirt,
  LuShoppingBag,
  LuSparkles,
  LuZap,
} from "react-icons/lu";

const About = () => {
  return (
    <Box
      id="about"
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
        right={{ base: "-120px", md: "-90px" }}
        w={{ base: "240px", md: "360px" }}
        h={{ base: "240px", md: "360px" }}
        bg={`${StargateColors.primary}20`}
        rounded="full"
        filter="blur(85px)"
      />

      <Box
        position="absolute"
        bottom={{ base: "-110px", md: "-150px" }}
        left={{ base: "-120px", md: "-100px" }}
        w={{ base: "260px", md: "380px" }}
        h={{ base: "260px", md: "380px" }}
        bg="#4ECDC420"
        rounded="full"
        filter="blur(90px)"
      />

      <Flex
        position="relative"
        zIndex={1}
        direction="column"
        align="center"
        maxW="1200px"
        mx="auto"
        gap={{ base: 11, md: 14, lg: 16 }}
      >
        <VStack spacing={{ base: 4, md: 5 }} textAlign="center" maxW="860px">
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
            Sobre a Loja.Sale
          </Badge>

          <Heading
            fontSize={{ base: "31px", sm: "40px", md: "52px", lg: "60px" }}
            lineHeight={{ base: "1.1", md: "1.05" }}
            letterSpacing={{ base: "-0.8px", md: "-1.6px" }}
          >
            Uma forma simples de levar o seu negócio para o digital
          </Heading>

          <Text
            fontSize={{ base: "sm", sm: "md", md: "xl" }}
            color={StargateColors.grey}
            lineHeight={{ base: "1.7", md: "1.8" }}
            maxW="780px"
          >
            A Loja.Sale ajuda negócios locais a criarem lojas online modernas,
            rápidas e profissionais usando templates e protótipos prontos —
            sem depender de programação ou processos complicados.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 4, md: 6 }}
          w="full"
        >
          {WorkflowCards.map((card, index) => (
            <StepCard
              key={card.title}
              number={`0${index + 1}`}
              icon={card.icon}
              title={card.title}
              color={card.color}
            >
              {card.text}
            </StepCard>
          ))}
        </SimpleGrid>

        <SectionHeader
          eyebrow="Para vários negócios"
          title="Casos de Uso"
          description="A Loja.Sale adapta-se a diferentes áreas, ajudando cada negócio a vender melhor e apresentar-se online de forma profissional."
        />

        <Accordion allowMultiple w="full" maxW="980px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {UseCases.map((caseItem) => (
              <AccordionItem
                key={caseItem.title}
                border="1px solid"
                borderColor="blackAlpha.100"
                bg="white"
                rounded="2xl"
                overflow="hidden"
                shadow="sm"
                transition="all 0.25s ease"
                _hover={{
                  shadow: { base: "sm", md: "lg" },
                  transform: { base: "none", md: "translateY(-3px)" },
                  borderColor: `${StargateColors.primary}55`,
                }}
              >
                <AccordionButton
                  px={{ base: 4, md: 5 }}
                  py={{ base: 4, md: 5 }}
                  _hover={{ bg: "blackAlpha.50" }}
                >
                  <HStack flex="1" spacing={3} textAlign="left" minW={0}>
                    <Flex
                      w={{ base: "42px", md: "46px" }}
                      h={{ base: "42px", md: "46px" }}
                      align="center"
                      justify="center"
                      rounded="xl"
                      bg={`${StargateColors.primary}15`}
                      color={StargateColors.primary}
                      flexShrink={0}
                    >
                      <Icon as={caseItem.icon} fontSize={{ base: 21, md: 24 }} />
                    </Flex>

                    <Box minW={0}>
                      <Text fontWeight={800} fontSize={{ base: "sm", md: "md" }}>
                        {caseItem.title}
                      </Text>
                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color={StargateColors.grey}
                      >
                        Ver detalhes
                      </Text>
                    </Box>
                  </HStack>

                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel
                  px={{ base: 4, md: 5 }}
                  pt={0}
                  pb={5}
                  color={StargateColors.grey}
                  fontSize="sm"
                  lineHeight="1.8"
                >
                  {caseItem.description}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </SimpleGrid>
        </Accordion>
      </Flex>
    </Box>
  );
};

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => (
  <VStack spacing={3} textAlign="center" maxW="760px" px={{ base: 1, md: 0 }}>
    <HStack
      spacing={2}
      px={4}
      py={2}
      rounded="full"
      bg="blackAlpha.50"
      color={StargateColors.primary}
      fontWeight={800}
      fontSize={{ base: "xs", md: "sm" }}
    >
      <Icon as={LuSparkles} />
      <Text>{eyebrow}</Text>
    </HStack>

    <Heading
      fontSize={{ base: "26px", sm: "32px", md: "42px" }}
      letterSpacing={{ base: "-0.5px", md: "-0.9px" }}
      lineHeight="1.12"
    >
      {title}
    </Heading>

    <Text
      color={StargateColors.grey}
      fontSize={{ base: "sm", md: "md" }}
      lineHeight="1.8"
    >
      {description}
    </Text>
  </VStack>
);

interface CardProps {
  icon: React.ElementType;
  title: string;
  children: ReactNode;
  color?: string;
}

interface StepCardProps extends CardProps {
  number: string;
}

const StepCard = ({ icon, title, children, color, number }: StepCardProps) => (
  <Flex
    direction="column"
    gap={{ base: 4, md: 5 }}
    p={{ base: 5, md: 7 }}
    bg="white"
    rounded={{ base: "2xl", md: "3xl" }}
    border="1px solid"
    borderColor="blackAlpha.100"
    shadow="sm"
    position="relative"
    overflow="hidden"
    transition="all 0.25s ease"
    role="group"
    _hover={{
      transform: { base: "none", md: "translateY(-6px)" },
      shadow: { base: "md", md: "xl" },
    }}
  >
    <Text
      position="absolute"
      top={{ base: 3, md: 3 }}
      right={{ base: 4, md: 5 }}
      fontSize={{ base: "42px", md: "52px" }}
      fontWeight={900}
      color="blackAlpha.100"
      lineHeight="1"
    >
      {number}
    </Text>

    <Flex
      w={{ base: "52px", md: "58px" }}
      h={{ base: "52px", md: "58px" }}
      rounded="2xl"
      align="center"
      justify="center"
      bg={`${color ?? StargateColors.primary}22`}
      color={color ?? StargateColors.primary}
      transition="all 0.25s ease"
      _groupHover={{
        bg: color ?? StargateColors.primary,
        color: "white",
        transform: { base: "none", md: "scale(1.06)" },
      }}
    >
      <Icon as={icon} fontSize={{ base: 26, md: 30 }} />
    </Flex>

    <VStack align="flex-start" spacing={2}>
      <Heading fontSize={{ base: "lg", md: "xl" }}>{title}</Heading>
      <Text fontSize="sm" color={StargateColors.grey} lineHeight="1.8">
        {children}
      </Text>
    </VStack>
  </Flex>
);

const WorkflowCards = [
  {
    icon: LuLayoutTemplate,
    title: "Escolha",
    text: "Selecione o template ou protótipo que melhor combina com o seu tipo de negócio.",
    color: "#70A4D4",
  },
  {
    icon: LuZap,
    title: "Personalize",
    text: "Adapte cores, imagens, textos, produtos e conteúdos de forma simples.",
    color: "#CA71FF",
  },
  {
    icon: LuRocket,
    title: "Publique",
    text: "Coloque o seu negócio online rapidamente e comece a receber clientes digitais.",
    color: "#48B9E6",
  },
];

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
      "Para lojas de eletrónica, é possível criar uma vitrine digital, listar produtos como computadores e acessórios, e aceitar pagamentos online sem desenvolver tudo do zero.",
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
      "Padarias e lojas de doces podem montar um catálogo online, mostrar produtos disponíveis e permitir que os clientes façam encomendas rapidamente.",
  },
  {
    title: "Restaurantes",
    icon: LuShoppingBag,
    description:
      "Restaurantes podem criar menus digitais, destacar pratos, organizar categorias e permitir pedidos online, aumentando a visibilidade e agilidade do serviço.",
  },
  {
    title: "Artesãos",
    icon: LuPalette,
    description:
      "Artesãos podem apresentar o seu portfólio, destacar peças únicas e vender online de forma simples, visual e direta.",
  },
  {
    title: "Lojas de Retalho",
    icon: LuPackage,
    description:
      "Pequenas lojas podem montar rapidamente um catálogo online de produtos variados, simplificando a gestão, apresentação e vendas digitais.",
  },
];

export default About;