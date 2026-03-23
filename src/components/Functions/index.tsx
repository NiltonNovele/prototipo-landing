"use client";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Stack,
  Badge,
  Button,
  Divider,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Target,
  Sparkles,
  Settings,
  CheckCircle,
  Layers,
} from "lucide-react";

interface Prototype {
  id: number;
  type: string;
  description: string;
  media: string;
  colSpan?: number;
  rowSpan?: number | object;
  price: string;
  purpose: string;
  details: string;
  focuses: string[];
  features: string[];
  howItWorks: string;
  suitableFor: string[];
  demoLink: string;
}

const primaryColor = "#2563EB";

const prototypes: Prototype[] = [
  {
    id: 1,
    type: "Confeitaria",
    description:
      "Loja moderna e envolvente para lojas individuais, cafés, padarias e pastelarias, com foco em produtos frescos e encomendas rápidas.",
    media:
      "/4.png",
    colSpan: 2,
    price: "A partir de 3,000MZN",
    purpose:
      "Permitir que clientes façam encomendas rápidas de produtos frescos com opção de entrega ou recolha, aumentando vendas diárias.",
    details:
      "Este template foi pensado especificamente para negócios de alimentação rápida como confeitarias. O design destaca produtos frescos, promoções do dia e especialidades, incentivando compras imediatas. A navegação é simples e intuitiva, ideal para clientes que querem fazer pedidos rápidos sem complicações. Também permite destacar produtos disponíveis por horário, como pão quente ou bolos do dia.",
    focuses: [
      "Produtos frescos em destaque",
      "Encomendas rápidas e simples",
      "Experiência mobile-first",
      "Promoções diárias",
    ],
    features: [
      "Sistema de encomendas com carrinho integrado",
      "Destaque automático de produtos por horário",
      "Checkout simples e rápido",
      "Integração com WhatsApp para pedidos",
      "Gestão básica de produtos",
    ],
    howItWorks:
      "Os clientes entram na loja, visualizam os produtos disponíveis (com destaque para os mais recentes ou frescos), adicionam ao carrinho e finalizam o pedido em poucos passos. O pedido pode ser enviado automaticamente ou via WhatsApp, facilitando o contacto direto com o cliente.",
    suitableFor: [
      "Padarias",
      "Pastelarias",
      "Cafés",
      "Takeaways",
      "Negócios de comida artesanal",
    ],
    demoLink: "https://amysabores.vercel.app",
  },

  {
    id: 2,
    type: "Eletrónicos",
    description:
      "Loja moderna e altamente otimizada para venda de gadgets, smartphones e produtos tecnológicos.",
    media: "/3.jpeg",
    price: "A partir de 3,000MZN",
    purpose:
      "Maximizar conversões e vendas de produtos tecnológicos através de uma experiência profissional e organizada.",
    details:
      "Este template foi desenhado para lojas de tecnologia que precisam apresentar muitos produtos de forma clara e organizada. Inclui categorias bem estruturadas, filtros inteligentes e destaque para promoções e produtos populares. O design transmite confiança e profissionalismo, essencial para vender eletrónica. Ideal para quem quer escalar vendas online com uma loja completa e eficiente.",
    focuses: [
      "Alta conversão",
      "Organização por categorias",
      "Promoções visíveis",
      "Experiência profissional",
    ],
    features: [
      "Catálogo completo com categorias organizadas",
      "Filtros inteligentes (preço, tipo, marca)",
      "Destaque para produtos em promoção",
      "Sistema de checkout rápido",
      "Integração com pagamentos locais",
    ],
    howItWorks:
      "Os clientes navegam por categorias ou utilizam filtros para encontrar produtos rapidamente. Após selecionar, adicionam ao carrinho e finalizam a compra com um checkout otimizado para conversão.",
    suitableFor: [
      "Lojas de smartphones",
      "Gadgets",
      "Acessórios tecnológicos",
      "Informática",
      "Revendedores de tecnologia",
    ],
    demoLink: "https://prototipo-eletronicos.vercel.app",
  },

  {
    id: 3,
    type: "Produtos",
    description:
      "Loja completa e escalável para venda de múltiplos tipos de produtos com gestão avançada.",
    media: "/5.jpeg",
    rowSpan: { base: 1, md: 2 },
    price: "A partir de 3,000MZN",
    purpose:
      "Oferecer uma solução robusta para negócios que vendem vários produtos e precisam de controlo total.",
    details:
      "Este é o template mais completo e versátil, ideal para negócios que trabalham com muitos produtos diferentes. Inclui funcionalidades avançadas como gestão de stock, relatórios e campanhas promocionais. É perfeito para quem quer escalar o negócio e ter controlo total sobre vendas, produtos e desempenho.",
    focuses: [
      "Escalabilidade",
      "Gestão avançada",
      "Organização eficiente",
      "Automação de vendas",
    ],
    features: [
      "Gestão de stock em tempo real",
      "Relatórios de vendas",
      "Promoções automáticas",
      "Sistema completo de produtos",
      "Dashboard administrativo",
    ],
    howItWorks:
      "O administrador adiciona e gere produtos facilmente. O sistema atualiza stock automaticamente conforme as vendas. Os clientes compram normalmente, enquanto o sistema gere tudo em segundo plano.",
    suitableFor: [
      "Supermercados",
      "Lojas multivendas",
      "Armazéns",
      "Negócios em crescimento",
    ],
    demoLink: "https://pasargad.vercel.app",
  },

  {
    id: 4,
    type: "Moda",
    description:
      "Loja elegante e moderna para marcas de roupa, acessórios e moda premium.",
    media: "/2.jpeg",
    price: "A partir de 3,000MZN",
    purpose:
      "Criar uma experiência visual premium que valoriza a marca e aumenta vendas de moda.",
    details:
      "Este template é focado em estética e branding. Ideal para marcas de moda que querem transmitir elegância e profissionalismo. O design destaca coleções, looks e produtos em alta, criando uma experiência semelhante a grandes lojas online. Perfeito para quem quer construir uma marca forte.",
    focuses: [
      "Design premium",
      "Branding forte",
      "Experiência visual",
      "Apresentação de coleções",
    ],
    features: [
      "Catálogo visual com imagens grandes",
      "Destaque para coleções e tendências",
      "Sistema de carrinho integrado",
      "Checkout otimizado",
      "Layout moderno e elegante",
    ],
    howItWorks:
      "Os clientes exploram coleções e produtos com forte apelo visual, selecionam itens e compram através de um processo simples e fluido.",
    suitableFor: [
      "Boutiques",
      "Marcas de roupa",
      "Acessórios",
      "Moda feminina e masculina",
    ],
    demoLink: "https://bfashion.sale",
  },

  {
  id: 5,
  type: "Personalizado",
  description:
    "Crie uma loja totalmente à sua medida, com design e funcionalidades adaptadas exatamente ao seu negócio.",
  media: "/6.jpg",
  price: "A partir de 10,000MZN",
  purpose:
    "Permitir a criação de uma loja completamente personalizada, adaptada às necessidades específicas do seu negócio, sem limitações de estrutura ou funcionalidades.",
  details:
    "Este template não segue um modelo fixo — é uma solução totalmente personalizada. Ideal para quem quer algo único, diferente e alinhado com a sua visão. Desde o design até às funcionalidades, tudo pode ser ajustado para refletir a identidade da sua marca e os seus objetivos. Pode incluir funcionalidades específicas, integrações personalizadas e layouts exclusivos, garantindo uma experiência única para os seus clientes.",
  focuses: [
    "Personalização total",
    "Flexibilidade máxima",
    "Identidade única da marca",
    "Escalabilidade sem limitações",
  ],
  features: [
    "Design completamente personalizado",
    "Funcionalidades feitas à medida",
    "Integrações específicas conforme necessidade",
    "Estrutura adaptada ao seu tipo de negócio",
    "Possibilidade de evoluir e adicionar novas funcionalidades",
  ],
  howItWorks:
    "Após entender as suas necessidades, criamos uma loja totalmente adaptada ao seu negócio. Desde o layout até às funcionalidades, tudo é construído com base nos seus objetivos. O resultado é uma plataforma única, pensada para maximizar resultados e oferecer a melhor experiência possível aos seus clientes.",
  suitableFor: [
    "Negócios com necessidades específicas",
    "Marcas que querem destacar-se",
    "Empresas em crescimento",
    "Projetos inovadores",
    "Qualquer tipo de negócio que precise de algo único",
  ],
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
      "Permitir que clientes visualizem serviços e façam marcações de forma simples e rápida.",
    details:
      "Este template foi criado para negócios baseados em serviços. Permite apresentar serviços de forma clara, com descrições e preços, e integrar um sistema de agendamento online. Ideal para automatizar marcações e reduzir comunicação manual.",
    focuses: [
      "Agendamento online",
      "Simplicidade",
      "Conversão de clientes",
      "Automação",
    ],
    features: [
      "Sistema de marcações online",
      "Apresentação detalhada de serviços",
      "Integração com WhatsApp",
      "Gestão de horários",
      "Interface simples e intuitiva",
    ],
    howItWorks:
      "Os clientes visualizam os serviços disponíveis, escolhem o desejado e fazem a marcação diretamente na plataforma, podendo também entrar em contacto via WhatsApp.",
    suitableFor: [
      "Barbearias",
      "Salões de beleza",
      "Consultorias",
      "Freelancers",
      "Serviços profissionais",
    ],
    demoLink: "https://synctechx.com",
  },
];

const InfoCard = ({ icon, title, children }: any) => (
  <Box
    border="1px solid #E2E8F0"
    borderRadius="xl"
    p={4}
    bg="gray.50"
  >
    <Flex align="center" mb={2} gap={2}>
      <Icon as={icon} size={16} color={primaryColor} />
      <Heading size="sm">{title}</Heading>
    </Flex>
    {children}
  </Box>
);

const PrototypesGrid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState<Prototype | null>(null);

  const openModal = (proto: Prototype) => {
    setSelected(proto);
    onOpen();
  };

  const handleSelect = () => {
    if (!selected) return;
    window.location.href = `/form?template=${selected.type}`;
  };

  const handleDemo = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Flex direction="column" align="center" my={24} px={4} maxW={1200} mx="auto">
      <Heading mb={12} textAlign="center">
        Escolha o protótipo ideal para o seu negócio
      </Heading>

      <Grid
        templateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)" }}
        gap={4}
        w="100%"
      >
        {prototypes.map((proto) => (
          <GridItem
            key={proto.id}
            colSpan={proto.colSpan ?? 1}
            rowSpan={proto.rowSpan ?? 1}
            rounded="2xl"
            overflow="hidden"
            cursor="pointer"
            position="relative"
            onClick={() => openModal(proto)}
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.06)", shadow: "2xl" }}
            minH={{ base: "180px", md: "300px" }}
          >
            <Box as="img" src={proto.media} w="100%" h="100%" objectFit="cover" />
            <Box
              position="absolute"
              inset={0}
              bg="linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))"
            />

            <Flex
              position="absolute"
              bottom={4}
              left={4}
              right={4}
              direction="column"
            >
              <Heading color="white" fontSize={{ base: 16, md: 20 }}>
                {proto.type}
              </Heading>
              <Text color="whiteAlpha.800" fontSize="sm">
                {proto.description}
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>

      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent borderRadius="2xl" overflow="hidden">
          
          {/* HERO IMAGE */}
          {selected && (
            <Box position="relative" h="220px">
              <Box
                as="img"
                src={selected.media}
                w="100%"
                h="100%"
                objectFit="cover"
              />
              <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
              />

              <Box position="absolute" bottom={4} left={6}>
                <Heading color="white">{selected.type}</Heading>
                <Badge mt={2} colorScheme="blue">
                  {selected.price}
                </Badge>
              </Box>
            </Box>
          )}

          <ModalCloseButton color="white" />

          <ModalBody p={6}>
            {selected && (
              <Stack spacing={6}>
                <Text color="gray.600">{selected.details}</Text>

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                  
                  <InfoCard icon={Target} title="Objetivo">
                    <Text fontSize="sm">{selected.purpose}</Text>
                  </InfoCard>

                  <InfoCard icon={Sparkles} title="Foco">
                    <Flex gap={2} wrap="wrap">
                      {selected.focuses.map((f) => (
                        <Badge key={f}>{f}</Badge>
                      ))}
                    </Flex>
                  </InfoCard>

                  <InfoCard icon={Settings} title="Funcionalidades">
                    <Stack spacing={1}>
                      {selected.features.map((f) => (
                        <Text fontSize="sm" key={f}>• {f}</Text>
                      ))}
                    </Stack>
                  </InfoCard>

                  <InfoCard icon={Layers} title="Como funciona">
                    <Text fontSize="sm">{selected.howItWorks}</Text>
                  </InfoCard>
                </Grid>

                <InfoCard icon={CheckCircle} title="Ideal para">
                  <Flex gap={2} wrap="wrap">
                    {selected.suitableFor.map((s) => (
                      <Badge key={s} colorScheme="green">
                        {s}
                      </Badge>
                    ))}
                  </Flex>
                </InfoCard>

                <Divider />

                {/* CTA */}
                <Flex gap={3} direction={{ base: "column", md: "row" }}>
                  <Button
                    bg={primaryColor}
                    color="white"
                    size="lg"
                    flex={1}
                    borderRadius="xl"
                    _hover={{ opacity: 0.9 }}
                    onClick={handleSelect}
                  >
                    Selecionar este modelo
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    flex={1}
                    borderRadius="xl"
                    onClick={() => selected && handleDemo(selected.demoLink)}
                  >
                    Ver demo
                  </Button>
                </Flex>
              </Stack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default PrototypesGrid;