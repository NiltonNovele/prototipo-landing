"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  keyframes,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { StargateColors } from "#/src/utils/Colors";
import { LuArrowRight, LuCheckCircle, LuSparkles, LuZap } from "react-icons/lu";
import Link from "next/link";

const words = ["Moda", "Padaria", "Eletrónica", "Produtos", "Startups", "PMEs"];

const stats = ["Templates prontos", "Entrega em 72h", "Sem programar"];

const Header = () => {
  const [index, setIndex] = useState(0);
  const currentWord = words[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      as="section"
      minH="100svh"
      position="relative"
      overflow="hidden"
      align="center"
      justify="center"
      direction="column"
      px={{ base: 4, sm: 5, md: 8 }}
      pt={{ base: 28, md: 32 }}
      pb={{ base: 24, md: 28 }}
      bg="linear-gradient(120deg,#70A4D4 0%,#CA71FF 24%,#8469CC 42%,#48B9E6 64%,#9F70D4 100%)"
      bgSize="220% 220%"
      animation={`${bgAnimation} 18s ease-in-out alternate infinite`}
    >
      <Box
        position="absolute"
        top={{ base: "-90px", md: "-130px" }}
        right={{ base: "-130px", md: "-120px" }}
        w={{ base: "260px", md: "380px" }}
        h={{ base: "260px", md: "380px" }}
        bg="whiteAlpha.300"
        rounded="full"
        filter="blur(90px)"
      />

      <Box
        position="absolute"
        bottom={{ base: "20px", md: "60px" }}
        left={{ base: "-140px", md: "-120px" }}
        w={{ base: "260px", md: "380px" }}
        h={{ base: "260px", md: "380px" }}
        bg="blackAlpha.200"
        rounded="full"
        filter="blur(90px)"
      />

      <VStack
        position="relative"
        zIndex={1}
        spacing={{ base: 5, md: 6 }}
        maxW="1050px"
        textAlign="center"
        w="full"
      >
        <Badge
          px={{ base: 3, md: 4 }}
          py={2}
          rounded="full"
          bg="whiteAlpha.300"
          color="white"
          fontSize={{ base: "xs", md: "sm" }}
          textTransform="none"
          backdropFilter="blur(10px)"
          maxW="100%"
        >
          <HStack spacing={2}>
            <Icon as={LuSparkles} flexShrink={0} />
            <Text noOfLines={1}>Digitalize o seu negócio de forma rápida</Text>
          </HStack>
        </Badge>

        <Box w="full">
          <Heading
            fontSize={{ base: "42px", sm: "52px", md: "72px", lg: "90px" }}
            color={StargateColors.white}
            lineHeight={{ base: "1", md: "0.95" }}
            letterSpacing={{ base: "-1px", md: "-2px" }}
          >
            O seu negócio online
          </Heading>

          <AnimatePresence mode="wait">
            <Heading
              as={motion.h1}
              key={currentWord}
              fontSize={{ base: "42px", sm: "52px", md: "72px", lg: "90px" }}
              color={StargateColors.darkBg}
              lineHeight={{ base: "1", md: "0.95" }}
              letterSpacing={{ base: "-1px", md: "-2px" }}
              mt={{ base: 2, md: 3 }}
              minH={{ base: "48px", sm: "58px", md: "78px", lg: "92px" }}
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
              transition={{ duration: 0.35 }}
            >
              {currentWord}
            </Heading>
          </AnimatePresence>
        </Box>

        <Text
          color="whiteAlpha.900"
          maxW="680px"
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          lineHeight={{ base: "1.7", md: "1.8" }}
          px={{ base: 1, md: 0 }}
        >
          A Loja.Sale oferece templates e protótipos modernos para negócios que
          querem vender online de forma rápida, eficiente e sem custos altos de
          desenvolvimento.
        </Text>

        <Flex
          gap={3}
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="center"
          pt={2}
          w={{ base: "100%", sm: "auto" }}
        >
          <Button
            as={motion.a}
            href="/form"
            size={{ base: "md", md: "lg" }}
            rounded="full"
            px={{ base: 6, md: 8 }}
            h={{ base: "52px", md: "56px" }}
            w={{ base: "100%", sm: "auto" }}
            leftIcon={<LuZap />}
            rightIcon={<LuArrowRight />}
            bg={StargateColors.primary}
            color="white"
            shadow="0 18px 45px rgba(0,0,0,0.18)"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.96 }}
            _hover={{ opacity: 0.95 }}
          >
            Criar loja em 72h
          </Button>

          <Button
            as={Link}
            href="#features"
            size={{ base: "md", md: "lg" }}
            rounded="full"
            px={{ base: 6, md: 8 }}
            h={{ base: "52px", md: "56px" }}
            w={{ base: "100%", sm: "auto" }}
            variant="outline"
            borderColor="whiteAlpha.500"
            color="white"
            bg="whiteAlpha.100"
            backdropFilter="blur(10px)"
            _hover={{ bg: "whiteAlpha.200" }}
          >
            Ver funcionalidades
          </Button>
        </Flex>

        <Flex
          gap={{ base: 2, md: 3 }}
          wrap="wrap"
          align="center"
          justify="center"
          pt={{ base: 2, md: 4 }}
        >
          {stats.map((item) => (
            <HStack
              key={item}
              spacing={2}
              px={{ base: 3, md: 4 }}
              py={2}
              rounded="full"
              bg="whiteAlpha.200"
              color="white"
              backdropFilter="blur(10px)"
            >
              <Icon as={LuCheckCircle} fontSize={{ base: 15, md: 17 }} />
              <Text fontSize={{ base: "xs", md: "sm" }} fontWeight={700}>
                {item}
              </Text>
            </HStack>
          ))}
        </Flex>
      </VStack>

      <HeroBottomSVG />
    </Flex>
  );
};

const bgAnimation = keyframes`
  0% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export default Header;