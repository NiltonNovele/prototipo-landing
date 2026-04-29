"use client";

import { StargateColors } from "#/src/utils/Colors";
import useCookieVisibility from "#/src/utils/CookieVisibility";
import {
  Button,
  Flex,
  Text,
  Box,
  HStack,
} from "@chakra-ui/react";
import React, { FC } from "react";

const Cookie: FC = () => {
  const [showCookie, setShowCookie] = useCookieVisibility("stargate-cookie");

  if (!showCookie) return null;

  return (
    <Flex
      position="fixed"
      bottom={6}
      left="50%"
      transform="translateX(-50%)"
      zIndex={1000}
      w={{ base: "92%", md: "80%", lg: "auto" }}
      maxW="900px"
      px={{ base: 4, md: 6 }}
      py={{ base: 4, md: 5 }}
      rounded="2xl"
      backdropFilter="blur(14px)"
      bg="rgba(255,255,255,0.75)"
      border="1px solid"
      borderColor="blackAlpha.100"
      boxShadow="0 10px 40px rgba(0,0,0,0.08)"
      align="center"
      justify="space-between"
      gap={4}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box flex="1">
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color={StargateColors.grey}
          lineHeight="1.6"
        >
          Utilizamos cookies para melhorar a sua experiência, analisar tráfego
          e personalizar conteúdos. Ao continuar, está a concordar com o uso de
          cookies.
        </Text>
      </Box>

      <HStack spacing={3}>
        <Button
          variant="ghost"
          size="sm"
          fontSize="sm"
          color={StargateColors.grey}
          _hover={{ bg: "blackAlpha.50" }}
        >
          Preferências
        </Button>

        <Button
          size="sm"
          rounded="full"
          px={6}
          fontSize="sm"
          bg={StargateColors.black}
          color={StargateColors.white}
          transition="all 0.2s ease"
          _hover={{
            transform: "scale(1.05)",
            opacity: 0.9,
          }}
          onClick={() => {
            localStorage.setItem("stargate-cookie", "true");
            setShowCookie(false);
          }}
        >
          Aceitar
        </Button>
      </HStack>
    </Flex>
  );
};

export default Cookie;