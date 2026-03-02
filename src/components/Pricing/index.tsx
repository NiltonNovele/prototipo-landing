"use client";
import {
  Badge,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";

const primaryColor = "#2563EB";
const darkColor = "#0F172A";
const borderColor = "#E2E8F0";
const greyColor = "#64748B";

const MotionFlex = motion(Flex);

const Pricing = () => {
  const [currentBilling, setCurrentBilling] = useState<
    "mensal" | "anual"
  >("mensal");

  const plans = [
    {
      name: "Individual",
      popular: true,
      bestFor:
        "Ideal para empreendedores e pequenos/médios negócios que procuram uma solução digital eficiente e acessível.",
      price: currentBilling === "mensal" ? "1 500 MZN" : "15 000 MZN",
      features: [
        "Loja online pronta a usar",
        "Produtos ilimitados",
        "Carrinho e checkout integrado",
        "Personalização básica",
        "Suporte por email",
      ],
    },
    {
      name: "Business",
      bestFor:
        "Perfeito para negócios em crescimento que precisam de controlo e relatórios avançados.",
      price: currentBilling === "mensal" ? "3 500 MZN" : "35 000 MZN",
      features: [
        "Tudo do plano Individual",
        "Gestão avançada de stock",
        "Promoções e produtos em destaque",
        "Relatórios de vendas",
        "Suporte prioritário",
      ],
    },
    {
      name: "Ultimate",
      bestFor:
        "Solução completa para empresas estabelecidas que pretendem máxima personalização e suporte dedicado.",
      price: currentBilling === "mensal" ? "9 500 MZN" : "95 000 MZN",
      features: [
        "Tudo do plano Business",
        "Domínio personalizado incluído",
        "Integração com pagamentos locais",
        "Configuração personalizada",
        "Suporte dedicado",
      ],
    },
  ];

  return (
    <Flex
      id="pricing"
      direction="column"
      align="center"
      my={28}
      px={{ base: 6, md: 10 }}
      maxW={1200}
      mx="auto"
    >
      <Heading textAlign="center" mb={3}>
        Escolha o plano ideal para o seu negócio
      </Heading>

      <Text textAlign="center" color={greyColor} mb={8} maxW={600}>
        Digitalize a sua loja com a Loja.Sale e comece a vender online
        de forma simples, rápida e profissional.
      </Text>

      {/* Toggle */}
      <Flex
        mb={12}
        gap={2}
        p={2}
        borderRadius="full"
        border={`1px solid ${borderColor}`}
      >
        {["mensal", "anual"].map((type) => (
          <Flex
            key={type}
            cursor="pointer"
            onClick={() =>
              setCurrentBilling(type as "mensal" | "anual")
            }
            px={6}
            py={2}
            borderRadius="full"
            bg={currentBilling === type ? darkColor : "transparent"}
            transition="all 0.3s ease"
            align="center"
            gap={2}
          >
            <Text
              fontWeight="600"
              fontSize="sm"
              color={
                currentBilling === type ? "white" : greyColor
              }
            >
              {type === "mensal" ? "Mensal" : "Anual"}
            </Text>

            {type === "anual" && (
              <Badge
                bg={
                  currentBilling === "anual"
                    ? "white"
                    : primaryColor
                }
                color={
                  currentBilling === "anual"
                    ? darkColor
                    : "white"
                }
                borderRadius="full"
                fontSize="xs"
              >
                2 meses grátis
              </Badge>
            )}
          </Flex>
        ))}
      </Flex>

      {/* Plans */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={8}
        w="100%"
      >
        <AnimatePresence mode="wait">
          {plans.map((plan) => (
            <MotionFlex
              key={`${plan.name}-${currentBilling}`}
              direction="column"
              p={8}
              borderRadius={28}
              border={`1px solid ${
                plan.popular ? primaryColor : borderColor
              }`}
              bg={plan.popular ? "white" : "white"}
              boxShadow={
                plan.popular
                  ? "0px 15px 50px rgba(37, 99, 235, 0.2)"
                  : "0px 8px 30px rgba(0,0,0,0.05)"
              }
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              w="100%"
              position="relative"
            >
              {plan.popular && (
                <Badge
                  position="absolute"
                  top={4}
                  right={4}
                  bg={primaryColor}
                  color="white"
                  borderRadius="full"
                  px={3}
                >
                  Mais Popular
                </Badge>
              )}

              <Text
                fontSize="sm"
                textAlign="center"
                color={greyColor}
                mb={2}
              >
                {plan.name}
              </Text>

              <Heading
                textAlign="center"
                fontSize="4xl"
                fontWeight={700}
                mb={1}
              >
                {plan.price}
              </Heading>

              <Text
                textAlign="center"
                fontSize="sm"
                color={greyColor}
                mb={4}
              >
                {currentBilling === "mensal"
                  ? "por mês"
                  : "por ano"}
              </Text>

              {/* Best For */}
              <Box
                bg="gray.50"
                p={4}
                borderRadius="xl"
                mb={6}
              >
                <Text fontSize="sm" color={greyColor}>
                  {plan.bestFor}
                </Text>
              </Box>

              <Stack spacing={4} mb={8}>
                {plan.features.map((feature) => (
                  <Flex key={feature} align="flex-start">
                    <Icon
                      as={LuCheck}
                      color={primaryColor}
                      mt={1}
                      mr={2}
                    />
                    <Text fontSize="sm">{feature}</Text>
                  </Flex>
                ))}
              </Stack>

              <Button
                mt="auto"
                bg={plan.popular ? primaryColor : darkColor}
                color="white"
                size="lg"
                borderRadius="xl"
                _hover={{ opacity: 0.9 }}
              >
                Começar Agora
              </Button>
            </MotionFlex>
          ))}
        </AnimatePresence>
      </Stack>
    </Flex>
  );
};

export default Pricing;