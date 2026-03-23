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
import { motion, AnimatePresence } from "framer-motion";
import { LuCheck } from "react-icons/lu";

const primaryColor = "#2563EB";
const darkColor = "#0F172A";
const borderColor = "#E2E8F0";
const greyColor = "#64748B";

const MotionBox = motion(Box);

const Pricing = () => {
  const [currentBilling, setCurrentBilling] = useState<
    "mensal" | "anual"
  >("mensal");

  const [selectedPlan, setSelectedPlan] = useState<"starter" | "premium">("starter");

  const starter = {
    name: "Starter",
    setup: "3 000 MZN",
    price: currentBilling === "mensal" ? "500 MZN" : "5 000 MZN",
    note:
      currentBilling === "mensal"
        ? "/mês"
        : "/ano (2 meses grátis)",
    features: [
      "Loja completa pronta a usar",
      "Produtos ilimitados",
      "Checkout automático",
      "Pagamentos locais (M-Pesa, e-Mola, mKesh)",
      "Pedidos via WhatsApp + sistema automático",
      "Design moderno e profissional",
      "Entrega personalizada",
      "Gestão simples",
      "Suporte + manutenção incluídos",
    ],
  };

  const premium = {
    name: "Premium",
    setup: "9 000 MZN",
    price: currentBilling === "mensal" ? "1 500 MZN" : "15 000 MZN",
    note:
      currentBilling === "mensal"
        ? "/mês"
        : "/ano (2 meses grátis)",
    features: [
      "Tudo do Starter",
      "Design totalmente personalizado",
      "Domínio incluído",
      "Relatórios avançados",
      "Gestão de stock avançada",
      "Promoções automáticas",
      "Suporte prioritário",
    ],
  };

  const isStarter = selectedPlan === "starter";

  return (
    <Flex
      direction="column"
      align="center"
      py={24}
      px={{ base: 5, md: 10 }}
      bg="gray.50"
    >
      {/* HEADER */}
      <Stack spacing={3} textAlign="center" mb={12} maxW={600}>
        <Heading size="lg">
          Planos simples, feitos para crescer consigo
        </Heading>
        <Text color={greyColor}>
          Sem complicações. Tudo incluído — manutenção,
          atualizações e suporte contínuo.
        </Text>
        <Text color={greyColor}>
          Toque para ver
        </Text>
      </Stack>

      {/* TOGGLE */}
      <Flex
        mb={16}
        bg="white"
        border={`1px solid ${borderColor}`}
        borderRadius="full"
        p={1}
      >
        {["mensal", "anual"].map((type) => (
          <Flex
            key={type}
            px={6}
            py={2}
            borderRadius="full"
            cursor="pointer"
            bg={currentBilling === type ? darkColor : "transparent"}
            color={currentBilling === type ? "white" : greyColor}
            fontSize="sm"
            fontWeight="600"
            align="center"
            gap={2}
            onClick={() =>
              setCurrentBilling(type as "mensal" | "anual")
            }
          >
            {type === "mensal" ? "Mensal" : "Anual"}

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
                fontSize="xs"
                borderRadius="full"
              >
                -2 meses
              </Badge>
            )}
          </Flex>
        ))}
      </Flex>

      {/* MAIN */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={6}
        w="100%"
        maxW={1100}
      >
        {/* STARTER */}
        <MotionBox
          layout
          onClick={() => setSelectedPlan("starter")}
          flex={isStarter ? 2 : 1}
          cursor="pointer"
          bg="white"
          borderRadius="3xl"
          p={{ base: 6, md: isStarter ? 10 : 6 }}
          border={`2px solid ${
            isStarter ? primaryColor : borderColor
          }`}
          boxShadow={
            isStarter
              ? "0px 20px 60px rgba(37,99,235,0.15)"
              : "0px 8px 25px rgba(0,0,0,0.05)"
          }
          transition={{ duration: 0.4 }}
        >
          <Flex justify="space-between" align="center" mb={6}>
            <Heading size="md">{starter.name}</Heading>
            {isStarter && (
              <Badge bg={primaryColor} color="white">
                Mais Popular
              </Badge>
            )}
          </Flex>

          <Stack mb={6}>
            <Text fontSize="sm" color={greyColor}>
              Configuração: {starter.setup}
            </Text>

            <Heading fontSize={isStarter ? "5xl" : "3xl"}>
              {starter.price}
              <Text as="span" fontSize="sm" color={greyColor}>
                {starter.note}
              </Text>
            </Heading>
          </Stack>

          <AnimatePresence>
            {isStarter && (
              <MotionBox
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <Flex wrap="wrap" gap={4} mb={8}>
                  {starter.features.map((f) => (
                    <Flex
                      key={f}
                      align="center"
                      gap={2}
                      w={{ base: "100%", md: "48%" }}
                    >
                      <Icon as={LuCheck} color={primaryColor} />
                      <Text fontSize="sm">{f}</Text>
                    </Flex>
                  ))}
                </Flex>

                <Button
                  size="lg"
                  w="100%"
                  bg={primaryColor}
                  color="white"
                  borderRadius="xl"
                  _hover={{ opacity: 0.9 }}
                >
                  Começar com Starter
                </Button>
              </MotionBox>
            )}
          </AnimatePresence>
        </MotionBox>

        {/* PREMIUM */}
        <MotionBox
          layout
          onClick={() => setSelectedPlan("premium")}
          flex={!isStarter ? 2 : 1}
          cursor="pointer"
          bg="white"
          borderRadius="3xl"
          p={{ base: 6, md: !isStarter ? 10 : 6 }}
          border={`2px solid ${
            !isStarter ? primaryColor : borderColor
          }`}
          boxShadow={
            !isStarter
              ? "0px 20px 60px rgba(37,99,235,0.15)"
              : "0px 8px 25px rgba(0,0,0,0.05)"
          }
          transition={{ duration: 0.4 }}
        >
          <Flex justify="space-between" align="center" mb={6}>
            <Heading size="md">{premium.name}</Heading>
            {!isStarter && (
              <Badge bg={primaryColor} color="white">
                Recomendado
              </Badge>
            )}
          </Flex>

          <Stack mb={6}>
            <Text fontSize="sm" color={greyColor}>
              Configuração: {premium.setup}
            </Text>

            <Heading fontSize={!isStarter ? "5xl" : "3xl"}>
              {premium.price}
              <Text as="span" fontSize="sm" color={greyColor}>
                {premium.note}
              </Text>
            </Heading>
          </Stack>

          <AnimatePresence>
            {!isStarter && (
              <MotionBox
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <Stack spacing={3} mb={6}>
                  {premium.features.map((f) => (
                    <Flex key={f} align="center" gap={2}>
                      <Icon as={LuCheck} color={primaryColor} />
                      <Text fontSize="sm">{f}</Text>
                    </Flex>
                  ))}
                </Stack>

                <Button
                  w="100%"
                  bg={primaryColor}
                  color="white"
                  borderRadius="xl"
                  _hover={{ opacity: 0.9 }}
                >
                  Escolher Premium
                </Button>
              </MotionBox>
            )}
          </AnimatePresence>
        </MotionBox>
      </Flex>
    </Flex>
  );
};

export default Pricing;