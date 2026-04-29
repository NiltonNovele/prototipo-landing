"use client";

import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import {
  CheckCircle,
  Layers,
  Settings,
  Sparkles,
  Target,
} from "lucide-react";

interface Prototype {
  id: number;
  type: string;
  description: string;
  media: string;
  colSpan?: number;
  rowSpan?: any;
  price: string;
  purpose: string;
  details: string;
  focuses: string[];
  features: string[];
  howItWorks: string;
  suitableFor: string[];
  demoLink: string;
}

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  children: ReactNode;
}

const primaryColor = "#2563EB";
const greyColor = "#64748B";
const borderColor = "#E2E8F0";

const InfoCard = ({ icon, title, children }: InfoCardProps) => (
  <Box
    p={{ base: 4, md: 5 }}
    rounded="2xl"
    bg="gray.50"
    border="1px solid"
    borderColor="gray.100"
  >
    <Flex align="center" mb={3} gap={2}>
      <Icon as={icon} boxSize={5} color={primaryColor} />
      <Heading size="sm">{title}</Heading>
    </Flex>
    {children}
  </Box>
);

const prototypes: Prototype[] = [
  {
    id: 1,
    type: "Confeitaria",
    description:
      "Loja moderna para cafés, padarias e pastelarias, com foco em produtos frescos e encomendas rápidas.",
    media: "/4.png",
    colSpan: 2,
    price: "A partir de 3,000MZN",
    purpose:
      "Permitir que clientes façam encomendas rápidas de produtos frescos com opção de entrega ou recolha.",
    details:
      "Este template destaca produtos frescos, promoções do dia e especialidades, incentivando compras imediatas com navegação simples.",
    focuses: [
      "Produtos frescos em destaque",
      "Encomendas rápidas",
      "Mobile-first",
      "Promoções diárias",
    ],
    features: [
      "Carrinho integrado",
      "Produtos por horário",
      "Checkout rápido",
      "Integração com WhatsApp",
      "Gestão básica de produtos",
    ],
    howItWorks:
      "Os clientes visualizam os produtos, adicionam ao carrinho e finalizam o pedido em poucos passos.",
    suitableFor: ["Padarias", "Pastelarias", "Cafés", "Takeaways"],
    demoLink: "https://amysabores.vercel.app",
  },
  {
    id: 2,
    type: "Eletrónicos",
    description:
      "Loja otimizada para venda de gadgets, smartphones e produtos tecnológicos.",
    media: "/3.jpeg",
    price: "A partir de 3,000MZN",
    purpose:
      "Maximizar conversões e vendas de produtos tecnológicos com uma experiência organizada.",
    details:
      "Ideal para lojas de tecnologia que precisam apresentar produtos de forma clara, com categorias e promoções visíveis.",
    focuses: [
      "Alta conversão",
      "Categorias organizadas",
      "Promoções visíveis",
      "Experiência profissional",
    ],
    features: [
      "Catálogo completo",
      "Filtros inteligentes",
      "Produtos em promoção",
      "Checkout rápido",
      "Pagamentos locais",
    ],
    howItWorks:
      "Os clientes encontram produtos por categorias ou filtros, adicionam ao carrinho e finalizam a compra.",
    suitableFor: [
      "Smartphones",
      "Gadgets",
      "Acessórios tecnológicos",
      "Informática",
    ],
    demoLink: "https://prototipo-eletronicos.vercel.app",
  },
  {
    id: 3,
    type: "Produtos",
    description:
      "Loja completa para venda de múltiplos produtos com gestão avançada.",
    media: "/5.jpeg",
    rowSpan: { base: 1, md: 2 },
    price: "A partir de 3,000MZN",
    purpose:
      "Oferecer uma solução robusta para negócios que vendem vários produtos.",
    details:
      "Template versátil para negócios com muitos produtos, gestão de stock, relatórios e campanhas promocionais.",
    focuses: ["Escalabilidade", "Gestão avançada", "Organização", "Automação"],
    features: [
      "Gestão de stock",
      "Relatórios de vendas",
      "Promoções automáticas",
      "Dashboard administrativo",
    ],
    howItWorks:
      "O administrador gere produtos e stock, enquanto os clientes compram numa experiência simples.",
    suitableFor: ["Supermercados", "Lojas multivendas", "Armazéns"],
    demoLink: "https://pasargad.vercel.app",
  },
  {
    id: 4,
    type: "Moda",
    description:
      "Loja elegante para marcas de roupa, acessórios e moda premium.",
    media: "/2.jpeg",
    price: "A partir de 3,000MZN",
    purpose:
      "Criar uma experiência visual premium que valoriza a marca e aumenta vendas.",
    details:
      "Focado em estética e branding, ideal para marcas de moda que querem transmitir elegância.",
    focuses: ["Design premium", "Branding forte", "Coleções", "Visual elegante"],
    features: [
      "Catálogo visual",
      "Coleções em destaque",
      "Carrinho integrado",
      "Checkout otimizado",
    ],
    howItWorks:
      "Os clientes exploram coleções, selecionam produtos e compram através de um processo simples.",
    suitableFor: ["Boutiques", "Marcas de roupa", "Acessórios"],
    demoLink: "https://bfashion.sale",
  },
  {
    id: 5,
    type: "Personalizado",
    description:
      "Loja feita à medida, com design e funcionalidades adaptadas ao seu negócio.",
    media: "/6.jpg",
    price: "A partir de 10,000MZN",
    purpose:
      "Criar uma loja personalizada para necessidades específicas, sem limitações de estrutura.",
    details:
      "Solução totalmente personalizada para quem quer algo único e alinhado com a sua visão.",
    focuses: [
      "Personalização total",
      "Flexibilidade máxima",
      "Identidade única",
      "Escalabilidade",
    ],
    features: [
      "Design personalizado",
      "Funcionalidades à medida",
      "Integrações específicas",
      "Estrutura adaptada",
    ],
    howItWorks:
      "Entendemos as suas necessidades e criamos uma loja alinhada com os seus objetivos.",
    suitableFor: ["Marcas únicas", "Empresas em crescimento", "Projetos inovadores"],
    demoLink: "#",
  },
  {
    id: 6,
    type: "Serviços",
    description:
      "Plataforma moderna para apresentação de serviços e agendamento online.",
    media: "/1.png",
    colSpan: 2,
    price: "A partir de 3,000MZN",
    purpose:
      "Permitir que clientes visualizem serviços e façam marcações de forma simples.",
    details:
      "Criado para negócios baseados em serviços, com apresentação clara e possibilidade de agendamento.",
    focuses: ["Agendamento online", "Simplicidade", "Conversão", "Automação"],
    features: [
      "Sistema de marcações",
      "Serviços detalhados",
      "WhatsApp integrado",
      "Gestão de horários",
    ],
    howItWorks:
      "Clientes visualizam serviços, escolhem o desejado e fazem a marcação diretamente.",
    suitableFor: ["Barbearias", "Salões", "Consultorias", "Freelancers"],
    demoLink: "https://synctechx.com",
  },
];

const PrototypesGrid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState<Prototype | null>(null);

  const openModal = (proto: Prototype) => {
    setSelected(proto);
    onOpen();
  };

  const handleSelect = () => {
    if (!selected) return;
    window.location.href = `/form?template=${encodeURIComponent(selected.type)}`;
  };

  const handleDemo = () => {
    if (!selected || selected.demoLink === "#") return;
    window.open(selected.demoLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      as="section"
      py={{ base: 14, md: 20, lg: 24 }}
      px={{ base: 4, md: 8 }}
      bg="gray.50"
    >
      <Flex direction="column" align="center" maxW="1200px" mx="auto">
        <VStack spacing={4} textAlign="center" maxW="760px" mb={{ base: 8, md: 12 }}>
          <Badge colorScheme="blue" rounded="full" px={4} py={2}>
            Protótipos
          </Badge>

          <Heading
            fontSize={{ base: "30px", md: "46px" }}
            lineHeight="1.1"
            letterSpacing="-1px"
          >
            Escolha o modelo ideal para o seu negócio
          </Heading>

          <Text color={greyColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.8">
            Veja opções prontas para diferentes tipos de negócios e escolha a
            base ideal para lançar a sua loja online.
          </Text>
        </VStack>

        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{ base: 4, md: 5 }}
          w="100%"
        >
          {prototypes.map((proto) => (
            <GridItem
              key={proto.id}
              colSpan={{ base: 1, sm: 1, lg: proto.colSpan ?? 1 }}
              rowSpan={{ base: 1, lg: proto.rowSpan ?? 1 }}
              rounded={{ base: "2xl", md: "3xl" }}
              overflow="hidden"
              cursor="pointer"
              position="relative"
              role="group"
              onClick={() => openModal(proto)}
              minH={{ base: "240px", md: "300px" }}
              transition="all 0.25s ease"
              _hover={{
                transform: { base: "none", md: "translateY(-6px)" },
                shadow: { base: "md", md: "2xl" },
              }}
            >
              <Box
                as="img"
                src={proto.media}
                alt={proto.type}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="all 0.4s ease"
                _groupHover={{ transform: { base: "none", md: "scale(1.05)" } }}
              />

              <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.18))"
              />

              <Flex position="absolute" bottom={5} left={5} right={5} direction="column">
                <Badge w="fit-content" mb={3} colorScheme="blue">
                  {proto.price}
                </Badge>

                <Heading color="white" fontSize={{ base: "xl", md: "2xl" }}>
                  {proto.type}
                </Heading>

                <Text color="whiteAlpha.800" fontSize="sm" noOfLines={3} mt={2}>
                  {proto.description}
                </Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={{ base: "full", md: "4xl" }}
          isCentered
          scrollBehavior="inside"
        >
          <ModalOverlay backdropFilter="blur(12px)" />

          <ModalContent
            rounded={{ base: "none", md: "3xl" }}
            overflow="hidden"
            maxH={{ base: "100vh", md: "90vh" }}
          >
            {selected && (
              <>
                <Box position="relative" h={{ base: "220px", md: "300px" }}>
                  <Box
                    as="img"
                    src={selected.media}
                    alt={selected.type}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />

                  <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(to top, rgba(0,0,0,0.92), transparent)"
                  />

                  <Box position="absolute" bottom={6} left={6} right={12}>
                    <Heading color="white" fontSize={{ base: "2xl", md: "4xl" }}>
                      {selected.type}
                    </Heading>

                    <Badge mt={3} colorScheme="blue">
                      {selected.price}
                    </Badge>
                  </Box>
                </Box>

                <ModalCloseButton color="white" />

                <ModalBody p={{ base: 5, md: 8 }}>
                  <Stack spacing={6}>
                    <Text color="gray.600" lineHeight="1.8" fontSize="sm">
                      {selected.details}
                    </Text>

                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                      <InfoCard icon={Target} title="Objetivo">
                        <Text fontSize="sm" color={greyColor}>
                          {selected.purpose}
                        </Text>
                      </InfoCard>

                      <InfoCard icon={Sparkles} title="Foco">
                        <Flex gap={2} wrap="wrap">
                          {selected.focuses.map((focus) => (
                            <Badge key={focus}>{focus}</Badge>
                          ))}
                        </Flex>
                      </InfoCard>

                      <InfoCard icon={Settings} title="Funcionalidades">
                        <Stack spacing={2}>
                          {selected.features.map((feature) => (
                            <Flex key={feature} gap={2} align="flex-start">
                              <Text color={primaryColor}>•</Text>
                              <Text fontSize="sm" color={greyColor}>
                                {feature}
                              </Text>
                            </Flex>
                          ))}
                        </Stack>
                      </InfoCard>

                      <InfoCard icon={Layers} title="Como funciona">
                        <Text fontSize="sm" color={greyColor}>
                          {selected.howItWorks}
                        </Text>
                      </InfoCard>
                    </Grid>

                    <InfoCard icon={CheckCircle} title="Ideal para">
                      <Flex gap={2} wrap="wrap">
                        {selected.suitableFor.map((item) => (
                          <Badge key={item} colorScheme="green">
                            {item}
                          </Badge>
                        ))}
                      </Flex>
                    </InfoCard>

                    <Divider />

                    <Flex gap={3} direction={{ base: "column", md: "row" }}>
                      <Button
                        bg={primaryColor}
                        color="white"
                        size="lg"
                        flex={1}
                        rounded="xl"
                        _hover={{ opacity: 0.9 }}
                        onClick={handleSelect}
                      >
                        Selecionar este modelo
                      </Button>

                      <Button
                        variant="outline"
                        size="lg"
                        flex={1}
                        rounded="xl"
                        onClick={handleDemo}
                        isDisabled={selected.demoLink === "#"}
                      >
                        Ver demo
                      </Button>
                    </Flex>
                  </Stack>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};

export default PrototypesGrid;