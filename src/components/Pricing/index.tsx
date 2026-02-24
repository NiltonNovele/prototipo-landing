"use client";
import {
  Badge,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";

const primaryColor = "#2563EB"; // Azul moderno
const darkColor = "#0F172A";
const borderColor = "#E2E8F0";
const greyColor = "#64748B";

const Pricing = () => {
  const [currentBilling, setCurrentBilling] = useState("mensal");

  const plans = [
    {
      name: "Individual",
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
      popular: true,
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

      <Text textAlign="center" color={greyColor} mb={8}>
        Digitalize a sua loja com a Vendo.Sale e comece a vender online hoje.
      </Text>

      {/* Toggle */}
      <Flex
        mb={10}
        gap={2}
        p={2}
        borderRadius={16}
        border={`1px solid ${borderColor}`}
      >
        {["mensal", "anual"].map((type) => (
          <Flex
            key={type}
            cursor="pointer"
            onClick={() => setCurrentBilling(type)}
            px={5}
            py={2}
            borderRadius={12}
            bg={currentBilling === type ? darkColor : "transparent"}
            transition="all 0.25s ease"
            align="center"
            gap={2}
          >
            <Text
              fontWeight="bold"
              fontSize="sm"
              color={currentBilling === type ? "white" : greyColor}
            >
              {type === "mensal" ? "Mensal" : "Anual"}
            </Text>

            {type === "anual" && (
              <Badge
                bg={currentBilling === "anual" ? "white" : primaryColor}
                color={currentBilling === "anual" ? darkColor : "white"}
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
            <Flex
              as={motion.div}
              key={`${plan.name}-${currentBilling}`}
              direction="column"
              p={8}
              borderRadius={24}
              border={`1px solid ${
                plan.popular ? primaryColor : borderColor
              }`}
              boxShadow={
                plan.popular
                  ? "0px 10px 40px rgba(37, 99, 235, 0.15)"
                  : "none"
              }
              w="100%"
              position="relative"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.2 }}
              transition={{ duration: 0.25 }}
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
                mb={3}
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
                mb={6}
              >
                {currentBilling === "mensal"
                  ? "por mês"
                  : "por ano"}
              </Text>

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
                _hover={{ opacity: 0.85 }}
                borderRadius="xl"
              >
                Começar Agora
              </Button>
            </Flex>
          ))}
        </AnimatePresence>
      </Stack>
    </Flex>
  );
};

export default Pricing;