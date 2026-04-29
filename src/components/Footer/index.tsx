"use client";

import { StargateColors } from "#/src/utils/Colors";
import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import FooterTopSVG from "./FooterTopSVG";
import FooterBg from "./FooterBg";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

const steps = [
  {
    title: "Preencha o Formulário",
    desc: "Partilhe os detalhes do seu negócio para entendermos o que precisa.",
  },
  {
    title: "Personalize a Loja",
    desc: "Escolha um template, envie o logótipo e defina cores e conteúdos.",
  },
  {
    title: "Lançamento",
    desc: "Configuramos, revemos e lançamos a sua loja online em poucos dias.",
  },
];

const Footer = () => {
  return (
    <Flex
      id="footer"
      position="relative"
      overflow="hidden"
      direction="column"
      align="center"
      justify="center"
      py={{ base: 20, md: 28 }}
      px={{ base: 4, md: 8 }}
    >
      <FooterTopSVG />
      <FooterBg />

      <Box
        position="absolute"
        top="-120px"
        right="-120px"
        w={{ base: "220px", md: "320px" }}
        h={{ base: "220px", md: "320px" }}
        bg={`${StargateColors.primary}20`}
        rounded="full"
        filter="blur(90px)"
      />

      <Flex
        position="relative"
        zIndex={1}
        direction="column"
        align="center"
        maxW="1100px"
        w="100%"
        mt={{ base: 10, md: 16 }}
      >
        <Text
          color="whiteAlpha.800"
          fontSize={{ base: "xs", md: "sm" }}
          mb={4}
          textAlign="center"
        >
          Loja.Sale · Lançamento rápido para negócios locais
        </Text>

        <Heading
          color="white"
          textAlign="center"
          fontSize={{ base: "32px", md: "52px" }}
          lineHeight="1.12"
          letterSpacing={{ base: "-0.6px", md: "-1.2px" }}
          maxW="780px"
          mb={{ base: 12, md: 16 }}
        >
          Lance a sua loja online em{" "}
          <Text as="span" color={StargateColors.primary}>
            3 passos
          </Text>
        </Heading>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={{ base: 5, md: 6 }}
          w="100%"
        >
          {steps.map((step, index) => (
            <MotionFlex
              key={step.title}
              direction="column"
              bg="rgba(255,255,255,0.06)"
              border="1px solid rgba(255,255,255,0.12)"
              rounded="2xl"
              p={{ base: 6, md: 7 }}
              minH={{ base: "auto", md: "230px" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              _hover={{
                borderColor: "rgba(255,255,255,0.28)",
                transform: { base: "none", md: "translateY(-4px)" },
              }}
            >
              <Text
                color={StargateColors.primary}
                fontSize="sm"
                fontWeight={800}
                mb={5}
              >
                0{index + 1}
              </Text>

              <Heading color="white" fontSize={{ base: "lg", md: "xl" }} mb={3}>
                {step.title}
              </Heading>

              <Text color="whiteAlpha.700" fontSize="sm" lineHeight="1.7">
                {step.desc}
              </Text>

              {index === 2 && (
                <Button
                  as={motion.a}
                  href="/form"
                  rightIcon={<LuArrowRight />}
                  bg={StargateColors.primary}
                  color="white"
                  rounded="full"
                  mt={6}
                  size="md"
                  whileTap={{ scale: 0.96 }}
                  _hover={{ opacity: 0.9 }}
                >
                  Começar Agora
                </Button>
              )}
            </MotionFlex>
          ))}
        </Grid>
      </Flex>

      <Flex
        position="relative"
        zIndex={1}
        mt={{ base: 14, md: 20 }}
        pt={6}
        borderTop="1px solid rgba(255,255,255,0.12)"
        w="100%"
        maxW="1100px"
        direction={{ base: "column", md: "row" }}
        gap={2}
        align="center"
        justify="space-between"
      >
        <Text color="whiteAlpha.700" fontSize="sm" textAlign="center">
          &copy; {new Date().getFullYear()} Loja.Sale — Todos os direitos
          reservados
        </Text>

        <Text color="whiteAlpha.600" fontSize="sm" textAlign="center">
          Desenvolvido por SyncTechX
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;