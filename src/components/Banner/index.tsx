"use client";
import useBannerVisibility from "#/src/utils/BannerVisibility";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { X, Rocket } from "lucide-react";

const Banner = () => {
  const [showBanner, setShowBanner] = useBannerVisibility("stargate-banner");

  return showBanner ? (
    <Flex
      justify="center"
      h="45px"
      bg="#000000"
      w="100%"
      align="center"
      px={4}
      position="relative"
      gap={2}
    >
      <Icon as={Rocket} color={StargateColors.white} fontSize="md" />
      <Text
        fontSize={{
          base: "sm",
          md: "md",
        }}
        color={StargateColors.white}
        fontWeight={600}
        textAlign="center"
      >
        Embarque agora para digitalizar o seu Biznu!
      </Text>

      <Icon
        as={X}
        color={StargateColors.white}
        fontSize="lg"
        cursor="pointer"
        position="absolute"
        right={4}
        onClick={() => {
          localStorage.setItem("stargate-banner", "true");
          setShowBanner(false);
        }}
      />
    </Flex>
  ) : null;
};

export default Banner;