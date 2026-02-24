"use client";
import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import {
  Box,
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
  { name: "Funcionalidades", href: "/#features" },
  { name: "Produto", href: "/#product" },
  { name: "Preços", href: "/#pricing" },
];

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner] = useBannerVisibility("vendo-banner");
  const [activeSection, setActiveSection] = useState("");
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (showBanner ? 45 : 0));

      const sectionIDs = NavItems.map((item) =>
        item.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      );

      const currentSection = sectionIDs.find((sectionID) => {
        const sectionElement = document.getElementById(sectionID);
        if (sectionElement) {
          const { top, bottom } = sectionElement.getBoundingClientRect();
          const isSectionInView = top >= 0 && bottom <= window.innerHeight;
          return isSectionInView;
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection);
      else setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showBanner]);

  return (
    <>
      <Flex
        position={isScrolled ? "fixed" : "absolute"}
        top={0}
        zIndex={100}
        w="100%"
        justify="center"
        align="center"
        bg={isScrolled ? "white" : "#ffffff25"}
        backdropFilter="blur(24px)"
        minH={75}
        transition="all .25s ease"
        borderBottom="1px solid #ffffff50"
        direction="column"
      >
        {/* Navbar principal */}
        <Flex
          maxW={1440}
          w="100%"
          py={5}
          px={{ base: 10, xl: 5 }}
          align="center"
          justify="space-between"
        >
          <Text
            as={Link}
            href="/"
            fontSize="3xl"
            fontWeight={700}
            userSelect="none"
            color={isScrolled ? "black" : "white"}
          >
            Vendo.sale
          </Text>

          {/* Links desktop */}
          <Flex
            gap={5}
            display={{ base: "none", lg: "flex" }}
            color={isScrolled ? "black" : "white"}
          >
            {NavItems.map((item, index) => (
              <Flex
                as={Link}
                href={item.href}
                key={index}
                px={5}
                py={2}
                borderRadius={12}
                transition="all .25s ease"
                _hover={{ bg: isScrolled ? "#00000010" : "#ffffff25" }}
                bg={
                  activeSection ===
                  item.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    ? isScrolled
                      ? "#00000010"
                      : "#ffffff25"
                    : "transparent"
                }
              >
                <Text fontWeight={500}>{item.name}</Text>
              </Flex>
            ))}
          </Flex>

          {/* Botões desktop */}
          <Flex gap={4} display={{ base: "none", lg: "flex" }}>
            <Button variant="link" color={isScrolled ? "black" : "white"}>
              Entrar
            </Button>
            <Button
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              href="#footer"
              rounded="full"
              background={isScrolled ? StargateColors.primary : "white"}
              color={isScrolled ? "white" : "black"}
              _hover={{ bg: isScrolled ? StargateColors.primary : "white" }}
              px={6}
            >
              Comece grátis
            </Button>
          </Flex>

          {/* Hamburger mobile */}
          <IconButton
            icon={<Icon as={isOpen ? X : Menu} />}
            aria-label="Menu"
            variant="unstyled"
            onClick={onToggle}
            color={isScrolled ? "black" : "white"}
            display={{ base: "flex", lg: "none" }}
            fontSize="lg"
          />
        </Flex>

        {/* Menu mobile */}
        <Collapse in={isOpen} animateOpacity>
          <Flex
            zIndex={10000}
            w="100%"
            justify="center"
            align="center"
            display={{ base: "flex", md: "none" }}
            direction="column"
            mb={5}
            gap={4}
          >
            {NavItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <Text
                  fontWeight={500}
                  fontSize="lg"
                  color={isScrolled ? "black" : "white"}
                >
                  {item.name}
                </Text>
              </Link>
            ))}
            <Flex gap={4} mt={3} direction="column">
              <Button variant="link" color={isScrolled ? "black" : "white"}>
                Entrar
              </Button>
              <Button
                as={motion.a}
                whileHover={{ scale: 1.05 }}
                href="#footer"
                rounded="full"
                background={isScrolled ? StargateColors.primary : "white"}
                color={isScrolled ? "white" : "black"}
              >
                Comece grátis
              </Button>
            </Flex>
          </Flex>
        </Collapse>
      </Flex>
    </>
  );
};

export default Navbar;