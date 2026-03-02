"use client";
import { Button, Flex, Heading, Text, keyframes } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { StargateColors } from "#/src/utils/Colors";
import { LuZap } from "react-icons/lu";
import Link from "next/link";

// Words highlighting types of stores / businesses
const words = [
  "Loja de Moda",
  "Padaria",
  "Eletrónica",
  "Loja de Produtos",
  "Startups",
  "Negócios Locais",
];

const Header = () => {
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCurrentWord(words[index]);
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Flex
      as={motion.div}
      initial="initial"
      animate="animate"
      minH="100svh"
      bg={
        "linear-gradient(120deg,#70A4D4 0%,#ca71ff 20%,#8469cc 30%,#48B9E6 50%,#8469cc 70%,#9F70D4 100%)"
      }
      bgSize={"200% 200%"}
      animation={`${bgAnimation} 20s ease-in-out alternate infinite`}
      position={"relative"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      px={2}
    >
      {/* Banner acima do título */}
      <Flex bg={"#ffffff50"} px={4} rounded={"full"} mb={5}>
        <Text color={StargateColors.white} fontSize={"xs"}>
          Digitalize o seu negócio de forma rápida e fácil
        </Text>
      </Flex>

      {/* Título principal */}
      <Heading
        fontSize={{
          base: 48,
          md: 64,
          lg: 84,
        }}
        color={StargateColors.white}
        lineHeight={1}
        textAlign={"center"}
        mb={3}
      >
        O seu negócio online
      </Heading>

      {/* Palavras dinâmicas (tipo de loja) */}
      <AnimatePresence mode="wait">
        <Heading
          as={motion.h1}
          fontSize={{
            base: 48,
            md: 64,
            lg: 84,
          }}
          key={currentWord}
          color={StargateColors.darkBg}
          lineHeight={1}
          initial={{ opacity: 0.2, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0.2, filter: "blur(4px)" }}
        >
          {currentWord}
        </Heading>
      </AnimatePresence>

      {/* Subtítulo */}
      <Text
        color={StargateColors.white}
        maxW={400}
        textAlign={"center"}
        mt={5}
        fontSize={{ base: 16, md: 20 }}
      >
        Loja.Sale oferece uma ampla variedade de templates e protótipos
        para qualquer negócio que queira estar online de forma rápida, eficiente
        e sem custos de desenvolvimento.
      </Text>

      {/* CTA */}
      <Button
        leftIcon={<LuZap />}
        as={motion.a}
        href={"#features"}
        whileHover={{ scale: 1.1 }}
        size={"lg"}
        mt={5}
        gap={2}
        cursor={"pointer"}
        bg={StargateColors.primary}
        color={"white"}
      >
        Comece Gratuitamente
      </Button>

      <Text
        mt={2}
        as={Link}
        href={"#features"}
        color={StargateColors.white}
        opacity={0.75}
        transition={"all .25s ease"}
        _hover={{ opacity: 1 }}
        fontSize={{ base: 14, md: 16 }}
      >
        Descubra os nossos templates
      </Text>

      <HeroBottomSVG />
    </Flex>
  );
};

const bgAnimation = keyframes`
  0% {
    background-position: 0% 100%
  }
  100% {
    background-position: 100% 100%
  }
`;

export default Header;