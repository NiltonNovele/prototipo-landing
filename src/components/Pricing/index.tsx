"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";
import Link from "next/link";

const primaryColor = "#2563EB";
const darkColor = "#0F172A";
const borderColor = "#E2E8F0";
const greyColor = "#64748B";

const MotionBox = motion(Box);

type BillingType = "mensal" | "anual";
type PlanType = "starter" | "premium";

const Pricing = () => {
  const [currentBilling, setCurrentBilling] = useState<BillingType>("mensal");
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("starter");

  const plans = useMemo(
    () => [
      {
        id: "starter" as PlanType,
        name: "Starter",
        badge: "Mais Popular",
        setup: "3 000 MZN",
        price: currentBilling === "mensal" ? "500 MZN" : "5 000 MZN",
        note: currentBilling === "mensal" ? "/mês" : "/ano",
        description: "Ideal para começar online com uma loja profissional.",
        href: "/form?plan=starter",
        features: [
          "Loja completa pronta a usar",
          "Produtos ilimitados",
          "Checkout automático",
          "Pagamentos locais",
          "Pedidos via WhatsApp",
          "Design moderno",
          "Suporte e manutenção",
        ],
      },
      {
        id: "premium" as PlanType,
        name: "Premium",
        badge: "Recomendado",
        setup: "9 000 MZN",
        price: currentBilling === "mensal" ? "1 500 MZN" : "15 000 MZN",
        note: currentBilling === "mensal" ? "/mês" : "/ano",
        description: "Para negócios que precisam de mais controlo e personalização.",
        href: "/form?plan=premium",
        features: [
          "Tudo do Starter",
          "Design personalizado",
          "Domínio incluído",
          "Relatórios avançados",
          "Gestão de stock avançada",
          "Promoções automáticas",
          "Suporte prioritário",
        ],
      },
    ],
    [currentBilling]
  );

  return (
    <Box
      id="pricing"
      as="section"
      bg="gray.50"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
    >
      <Flex direction="column" align="center" maxW="1120px" mx="auto">
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 10 }} maxW="680px">
          <Badge
            mx="auto"
            px={4}
            py={2}
            rounded="full"
            colorScheme="blue"
            textTransform="none"
          >
            Preços
          </Badge>

          <Heading
            fontSize={{ base: "30px", md: "46px" }}
            lineHeight="1.1"
            letterSpacing="-1px"
          >
            Planos simples para lançar e manter a sua loja
          </Heading>

          <Text color={greyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.7">
            Escolha o plano ideal para o seu negócio. A configuração é paga uma
            vez, e a mensalidade inclui suporte, manutenção e atualizações.
          </Text>
        </Stack>

        <Flex
          mb={{ base: 8, md: 12 }}
          bg="white"
          border={`1px solid ${borderColor}`}
          borderRadius="full"
          p={1}
          shadow="sm"
          w={{ base: "100%", sm: "auto" }}
        >
          {(["mensal", "anual"] as BillingType[]).map((type) => {
            const active = currentBilling === type;

            return (
              <Button
                key={type}
                flex={{ base: 1, sm: "unset" }}
                size="sm"
                rounded="full"
                px={{ base: 4, md: 6 }}
                bg={active ? darkColor : "transparent"}
                color={active ? "white" : greyColor}
                _hover={{ bg: active ? darkColor : "gray.100" }}
                onClick={() => setCurrentBilling(type)}
              >
                {type === "mensal" ? "Mensal" : "Anual"}
                {type === "anual" && (
                  <Badge
                    ml={2}
                    bg={active ? "white" : primaryColor}
                    color={active ? darkColor : "white"}
                    rounded="full"
                    fontSize="10px"
                  >
                    2 meses grátis
                  </Badge>
                )}
              </Button>
            );
          })}
        </Flex>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} w="100%">
          {plans.map((plan) => {
            const active = selectedPlan === plan.id;

            return (
              <MotionBox
                key={plan.id}
                layout
                as="article"
                cursor="pointer"
                bg="white"
                borderRadius="3xl"
                border="2px solid"
                borderColor={active ? primaryColor : borderColor}
                p={{ base: 6, md: 8 }}
                shadow={active ? "0px 20px 60px rgba(37,99,235,0.16)" : "sm"}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedPlan(plan.id)}
                whileHover={{ y: -4 }}
              >
                <Flex justify="space-between" align="flex-start" gap={4} mb={5}>
                  <Box>
                    <Heading size="md">{plan.name}</Heading>
                    <Text mt={2} color={greyColor} fontSize="sm" lineHeight="1.6">
                      {plan.description}
                    </Text>
                  </Box>

                  <Badge
                    bg={active ? primaryColor : "gray.100"}
                    color={active ? "white" : greyColor}
                    rounded="full"
                    px={3}
                    py={1}
                    flexShrink={0}
                  >
                    {plan.badge}
                  </Badge>
                </Flex>

                <Text color={greyColor} fontSize="sm" mb={2}>
                  Configuração: <b>{plan.setup}</b>
                </Text>

                <Flex align="flex-end" gap={2} mb={6} wrap="wrap">
                  <Heading fontSize={{ base: "36px", md: "46px" }} lineHeight="1">
                    {plan.price}
                  </Heading>
                  <Text color={greyColor} fontSize="sm" pb={1}>
                    {plan.note}
                  </Text>
                </Flex>

                {currentBilling === "anual" && (
                  <Text color={primaryColor} fontSize="sm" fontWeight={700} mb={5}>
                    Inclui 2 meses grátis no pagamento anual.
                  </Text>
                )}

                <Stack spacing={3} mb={7}>
                  {plan.features.map((feature) => (
                    <Flex key={feature} align="flex-start" gap={3}>
                      <Icon as={LuCheck} color={primaryColor} mt={0.5} flexShrink={0} />
                      <Text fontSize="sm" color={darkColor}>
                        {feature}
                      </Text>
                    </Flex>
                  ))}
                </Stack>

                <Button
                  as={Link}
                  href={plan.href}
                  w="100%"
                  size="lg"
                  rounded="xl"
                  bg={active ? primaryColor : darkColor}
                  color="white"
                  _hover={{ opacity: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {plan.id === "starter" ? "Começar com Starter" : "Escolher Premium"}
                </Button>
              </MotionBox>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Pricing;