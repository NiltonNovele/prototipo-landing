"use client";

import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import {
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { StargateColors } from "#/src/utils/Colors";
import useBannerVisibility from "#/src/utils/BannerVisibility";

const NavItems = [
  { name: "Funcionalidades", href: "/#features", id: "features" },
  { name: "Produto", href: "/#product", id: "product" },
  { name: "Preços", href: "/#pricing", id: "pricing" },
];

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner] = useBannerVisibility("vendo-banner");
  const [activeSection, setActiveSection] = useState("");
  const { isOpen, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (showBanner ? 45 : 10));

      const current = NavItems.find((item) => {
        const element = document.getElementById(item.id);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom >= 180;
      });

      setActiveSection(current?.id || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showBanner]);

  const textColor = isScrolled || isOpen ? "black" : "white";
  const navBg = isScrolled || isOpen ? "whiteAlpha.950" : "rgba(255,255,255,0.08)";

  return (
    <Flex
      as="nav"
      position={isScrolled ? "fixed" : "absolute"}
      top={0}
      zIndex={100}
      w="100%"
      justify="center"
      align="center"
      direction="column"
      bg={navBg}
      backdropFilter="blur(22px)"
      borderBottom={isScrolled || isOpen ? "1px solid #00000010" : "1px solid #ffffff22"}
      transition="all .25s ease"
    >
      <Flex
        maxW="1440px"
        w="100%"
        h={{ base: "72px", md: "80px" }}
        px={{ base: 4, sm: 6, md: 10 }}
        align="center"
        justify="space-between"
      >
        <Text
          as={Link}
          href="/"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight={900}
          letterSpacing="-0.6px"
          color={textColor}
          onClick={onClose}
        >
          Loja
          <Text as="span" color={StargateColors.primary}>
            .Sale
          </Text>
        </Text>

        <Flex gap={2} display={{ base: "none", lg: "flex" }} align="center">
          {NavItems.map((item) => {
            const active = activeSection === item.id;

            return (
              <Flex
                key={item.id}
                as={Link}
                href={item.href}
                px={4}
                py={2}
                rounded="full"
                fontWeight={700}
                fontSize="sm"
                transition="all .2s ease"
                color={textColor}
                bg={active ? (isScrolled ? "blackAlpha.100" : "whiteAlpha.300") : "transparent"}
                _hover={{
                  bg: isScrolled ? "blackAlpha.100" : "whiteAlpha.300",
                }}
              >
                {item.name}
              </Flex>
            );
          })}
        </Flex>

        <Flex gap={3} display={{ base: "none", lg: "flex" }}>
          <Button
            as={motion.a}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="/form"
            rounded="full"
            px={6}
            bg={isScrolled ? StargateColors.primary : "white"}
            color={isScrolled ? "white" : "black"}
            shadow={isScrolled ? "sm" : "0 10px 28px rgba(0,0,0,0.12)"}
            _hover={{ opacity: 0.92 }}
          >
            Começar
          </Button>
        </Flex>

        <IconButton
          icon={<Icon as={isOpen ? X : Menu} boxSize={5} />}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          variant="ghost"
          onClick={onToggle}
          color={textColor}
          display={{ base: "flex", lg: "none" }}
          rounded="full"
          _hover={{
            bg: isScrolled || isOpen ? "blackAlpha.100" : "whiteAlpha.200",
          }}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ width: "100%" }}>
        <Flex
          direction="column"
          align="stretch"
          gap={2}
          px={4}
          pb={5}
          display={{ base: "flex", lg: "none" }}
          bg="whiteAlpha.950"
          borderTop="1px solid #00000008"
        >
          {NavItems.map((item) => (
            <Flex
              key={item.id}
              as={Link}
              href={item.href}
              onClick={onClose}
              px={4}
              py={3}
              rounded="xl"
              color="black"
              fontWeight={700}
              bg={activeSection === item.id ? "blackAlpha.100" : "transparent"}
              _hover={{ bg: "blackAlpha.100" }}
            >
              {item.name}
            </Flex>
          ))}

          <Button
            as={Link}
            href="/form"
            rounded="full"
            bg={StargateColors.primary}
            color="white"
            h="48px"
            mt={2}
            onClick={onClose}
            _hover={{ opacity: 0.9 }}
          >
            Começar agora
          </Button>
        </Flex>
      </Collapse>
    </Flex>
  );
};

export default Navbar;