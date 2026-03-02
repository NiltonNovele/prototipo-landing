"use client";
import { StargateColors } from "#/src/utils/Colors";
import {
  Button,
  Flex,
  Heading,
  Text,
  Grid,
  Box,
} from "@chakra-ui/react";
import React from "react";
import FooterTopSVG from "./FooterTopSVG";
import FooterBg from "./FooterBg";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const steps = [
  {
    title: "Preencha o Formulário",
    desc: "Conte-nos mais sobre o seu negócio: nome, marca, tipo, sector e necessidades. Isto ajuda-nos a criar a loja ideal para si.",
  },
  {
    title: "Personalize a Loja",
    desc: "Escolha um protótipo/template, carregue o logótipo, defina cores e temas. Configure tudo para refletir a identidade da sua marca.",
  },
  {
    title: "Revisão & Lançamento",
    desc: "Conformidade, termos e condições. O nosso time leva 2-3 dias para personalizar a loja. Podemos entrar em contacto para ajustes finais e dar-lhe um walkthrough completo.",
  },
];

const Footer = () => {
  return (
    <Flex
      py={32}
      position="relative"
      justify="center"
      align="center"
      direction="column"
      id="footer"
      overflow="hidden"
    >
      <FooterTopSVG />
      <FooterBg />

      {/* Footer Intro */}
      <Flex mt={16} direction="column" align="center" px={4} maxW={1100}>
        <Text color={StargateColors.white} fontSize="sm" mb={2}>
          <Text
            as="span"
            fontWeight={700}
            bg="rgba(255,255,255,0.2)"
            backdropFilter="blur(6px)"
            px={3}
            py={1}
            rounded="full"
            mr={2}
          >
            Loja.Sale
          </Text>
          Protótipos Para o Teu Tipo de Negócio
        </Text>

        <Heading
          fontSize={{ base: 34, md: 56 }}
          textAlign="center"
          color="white"
          mb={20}
          lineHeight="1.2"
        >
          Lance a sua loja online em{" "}
          <Text as="span" color={StargateColors.primary}>
            3 passos simples
          </Text>
        </Heading>

        {/* ROADMAP */}
        <Box position="relative" w="100%">
          {/* Animated Timeline Line */}
          <MotionBox
            position="absolute"
            top={{ base: 0, md: "50%" }}
            left={{ base: "50%", md: 0 }}
            transform={{ base: "translateX(-50%)", md: "translateY(-50%)" }}
            height={{ base: "100%", md: "2px" }}
            width={{ base: "2px", md: "100%" }}
            bg={StargateColors.primary}
            initial={{ scaleY: 0, scaleX: 0 }}
            whileInView={{ scaleY: 1, scaleX: 1 }}
            transition={{ duration: 1.2 }}
            style={{ transformOrigin: "top left" }}
          />

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={{ base: 16, md: 10 }}
            position="relative"
          >
            {steps.map((step, index) => (
              <MotionFlex
                key={index}
                direction="column"
                align="center"
                textAlign="center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
              >
                {/* Step Number Circle */}
                <Flex
                  w={70}
                  h={70}
                  rounded="full"
                  bg={StargateColors.primary}
                  align="center"
                  justify="center"
                  color="white"
                  fontSize="xl"
                  fontWeight="bold"
                  mb={6}
                  boxShadow="0 0 25px rgba(255,255,255,0.15)"
                  zIndex={2}
                >
                  0{index + 1}
                </Flex>

                {/* Glass Card */}
                <Flex
                  direction="column"
                  bg="rgba(255,255,255,0.05)"
                  backdropFilter="blur(12px)"
                  border="1px solid rgba(255,255,255,0.1)"
                  rounded="2xl"
                  p={8}
                  maxW="350px"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-8px)",
                    borderColor: StargateColors.primary,
                  }}
                >
                  <Heading
                    fontSize="xl"
                    mb={4}
                    color={StargateColors.primary}
                  >
                    {index + 1}. {step.title}
                  </Heading>

                  <Text fontSize="sm" color="whiteAlpha.900">
                    {step.desc}
                  </Text>

                  {index === 2 && (
                    <Button
                      as={motion.a}
                      href="#product"
                      rightIcon={<LuArrowRight />}
                      bg={StargateColors.primary}
                      color="white"
                      _hover={{ opacity: 0.85 }}
                      mt={6}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Começar Agora
                    </Button>
                  )}
                </Flex>
              </MotionFlex>
            ))}
          </Grid>
        </Box>
      </Flex>

      {/* Footer Bottom */}
      <Flex
        mt={32}
        direction={{ base: "column", md: "row" }}
        gap={4}
        align="center"
        justify="center"
      >
        <Text color={StargateColors.white} fontSize="sm" textAlign="center">
          &copy; {new Date().getFullYear()} Loja.Sale - Todos os direitos reservados
        </Text>
        <Text color={StargateColors.white} fontSize="sm" textAlign="center">
          Desenvolvido por SyncTechX
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;