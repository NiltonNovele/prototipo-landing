"use client";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
  Icon,
  Textarea,
  Badge,
  Select,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Store,
  Palette,
  Package,
  CreditCard,
  Truck,
  MessageCircle,
  LayoutTemplate,
  Globe,
  ShieldCheck,
  Info,
  Calendar,
} from "lucide-react";

const primaryColor = "#2563EB";
const darkColor = "#0F172A";
const greyColor = "#64748B";
const borderColor = "#E2E8F0";

const inputStyle = {
  bg: "gray.50",
  border: "1px solid #E2E8F0",
  _focus: {
    borderColor: primaryColor,
    boxShadow: `0 0 0 1px ${primaryColor}`,
  },
};

const Section = ({ icon, title, children }: any) => (
  <Box
    border={`1px solid ${borderColor}`}
    borderRadius="2xl"
    p={{ base: 5, md: 8 }}
    bg="white"
    boxShadow="0px 10px 30px rgba(0,0,0,0.04)"
  >
    <Flex align="center" mb={6} gap={3}>
      <Flex p={3} bg="gray.100" borderRadius="xl">
        <Icon as={icon} boxSize={5} color={darkColor} />
      </Flex>
      <Heading size="md">{title}</Heading>
    </Flex>
    {children}
  </Box>
);

const Label = ({ children }: any) => (
  <Text fontSize="sm" fontWeight="600">
    {children}
  </Text>
);

const QuestionnairePage = () => {
  const [form, setForm] = useState<any>({});
  const [selectedPlan, setSelectedPlan] = useState("Starter");
  const [selectedPrototype, setSelectedPrototype] = useState("");

  const handleChange = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  // 🔥 Dynamic category logic
  const getProductOptions = () => {
    const tipo = form.tipo || [];

    if (tipo.includes("moda")) {
      return ["Tamanho", "Cor", "Modelo", "Coleção", "Género"];
    }

    if (tipo.includes("eletronicos")) {
      return ["Marca", "Modelo", "Capacidade", "Cor", "Versão"];
    }

    if (tipo.includes("farmacia")) {
      return ["Categoria", "Dosagem", "Marca", "Tipo"];
    }

    if (tipo.includes("padaria") || tipo.includes("confeitaria")) {
      return ["Tipo de produto", "Tamanho", "Sabor"];
    }

    return ["Categoria", "Tipo", "Marca"];
  };

  const prototypes = [
    {
      name: "Confeitaria",
      desc: "Loja moderna e envolvente para cafés, padarias e pastelarias.",
    },
    {
      name: "Eletrónicos",
      desc: "Venda de gadgets e tecnologia com alta conversão.",
    },
    {
      name: "Produtos",
      desc: "Loja completa com gestão avançada.",
    },
    {
      name: "Moda",
      desc: "Design elegante para marcas de roupa.",
    },
    {
      name: "Personalizado",
      desc: "Totalmente adaptado ao seu negócio.",
    },
    {
      name: "Serviços",
      desc: "Agendamentos e venda de serviços.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "3 000 MZN + 500 MZN/mês",
      popular: true,
    },
    {
      name: "Premium",
      price: "9 000 MZN + 1 500 MZN/mês",
    },
  ];

  

  return (
    <Flex bg="gray.50" minH="100vh" py={16} px={4}>
      <Flex direction="column" maxW={900} mx="auto" w="100%" gap={10}>
        
        {/* Header */}
        <Box textAlign="center">
          <Heading mb={3}>Criação de Loja Online</Heading>
          <Text color={greyColor} maxW={600} mx="auto">
            Quanto mais detalhes fornecer, melhor conseguimos personalizar a sua loja.
          </Text>
        </Box>

        {/* Identificação */}
        <Section icon={Store} title="Identificação da Loja">
          <Stack spacing={4}>
            <Box>
              <Label>Nome da Loja</Label>
              <Input {...inputStyle} onChange={(e)=>handleChange("nome",e.target.value)} />
            </Box>

            <Box>
              <Label>Tipo de Negócio</Label>
              <CheckboxGroup onChange={(v)=>handleChange("tipo",v)}>
                <Grid templateColumns="repeat(2,1fr)">
                  <Checkbox value="moda">Moda</Checkbox>
                  <Checkbox value="eletronicos">Eletrónica</Checkbox>
                  <Checkbox value="farmacia">Farmácia</Checkbox>
                  <Checkbox value="padaria">Padaria</Checkbox>
                  <Checkbox value="cosmeticos">Cosméticos</Checkbox>
                  <Checkbox value="confeitaria">Confeitaria</Checkbox>
                </Grid>
              </CheckboxGroup>
            </Box>

            <Grid templateColumns="1fr 1fr" gap={4}>
              <Select {...inputStyle} onChange={(e)=>handleChange("fisica",e.target.value)}>
                <option value="">Loja física?</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </Select>

              <Input placeholder="Cidade" {...inputStyle} onChange={(e)=>handleChange("cidade",e.target.value)} />
            </Grid>
          </Stack>
        </Section>

        {/* Branding */}
        <Section icon={Palette} title="Identidade Visual">
          <Stack spacing={4}>
            <CheckboxGroup onChange={(v)=>handleChange("cores",v)}>
              <Grid templateColumns="repeat(2,1fr)">
                <Checkbox value="azul">Azul</Checkbox>
                <Checkbox value="preto">Preto & Dourado</Checkbox>
                <Checkbox value="vermelho">Vermelho</Checkbox>
                <Checkbox value="verde">Verde</Checkbox>
                <Checkbox value="minimal">Minimalista</Checkbox>
              </Grid>
            </CheckboxGroup>

            <Input placeholder="Link do logotipo" {...inputStyle} />
            <Input placeholder="Instagram / Site" {...inputStyle} />

            <Textarea placeholder="Descreva o estilo da sua marca" {...inputStyle} />
          </Stack>
        </Section>

        {/* Produtos */}
        <Section icon={Package} title="Produtos">
          <Stack spacing={4}>
            <Input placeholder="Principais produtos" {...inputStyle} />

            <Select {...inputStyle}>
              <option>Quantidade de produtos</option>
              <option>1–20</option>
              <option>20–50</option>
              <option>50–100</option>
              <option>100+</option>
            </Select>

            <Box>
              <Label>Como deseja categorizar os seus produtos?</Label>
              <CheckboxGroup onChange={(v)=>handleChange("categorias",v)}>
                <Grid templateColumns="repeat(2,1fr)">
                  {getProductOptions().map((opt) => (
                    <Checkbox key={opt} value={opt}>{opt}</Checkbox>
                  ))}
                </Grid>
              </CheckboxGroup>
            </Box>
          </Stack>
        </Section>

        {/* Pagamentos */}
        <Section icon={CreditCard} title="Pagamentos">
          <CheckboxGroup>
            <Grid templateColumns="repeat(2,1fr)">
              <Checkbox>M-Pesa</Checkbox>
              <Checkbox>e-Mola</Checkbox>
              <Checkbox>mKesh</Checkbox>
              <Checkbox>EFT</Checkbox>
              <Checkbox>Cash on Delivery</Checkbox>
            </Grid>
          </CheckboxGroup>
        </Section>

        {/* Entregas */}
        <Section icon={Truck} title="Entregas">
          <Stack spacing={4}>
            <CheckboxGroup>
              <Stack>
                <Checkbox>Retirada</Checkbox>
                <Checkbox>Delivery</Checkbox>
                <Checkbox>Motoboy</Checkbox>
              </Stack>
            </CheckboxGroup>

            <Select {...inputStyle}>
              <option>Cobra taxa?</option>
              <option>Sim</option>
              <option>Não</option>
            </Select>
          </Stack>
        </Section>

        {/* Comunicação */}
        <Section icon={MessageCircle} title="Comunicação">
          <Stack spacing={4}>
            <Input placeholder="WhatsApp" {...inputStyle} />
            <Select {...inputStyle}>
              <option>Receber pedidos via</option>
              <option>WhatsApp</option>
              <option>Checkout</option>
              <option>Ambos</option>
            </Select>
          </Stack>
        </Section>

        {/* Técnico */}
        <Section icon={Globe} title="Configuração Técnica">
          <Stack spacing={4}>
            <Select {...inputStyle}>
              <option>Domínio</option>
              <option>Já tenho</option>
              <option>Preciso de ajuda</option>
            </Select>

            <Input placeholder="Nome do domínio desejado" {...inputStyle} />
          </Stack>
        </Section>

        {/* Legal */}
        <Section icon={ShieldCheck} title="Informação Legal">
          <Stack spacing={4}>
            <Select
              {...inputStyle}
              onChange={(e)=>handleChange("registered", e.target.value)}
            >
              <option value="">Negócio registado?</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </Select>

            {form.registered === "sim" && (
              <>
                <Input placeholder="Nome da empresa" {...inputStyle} />
                <Input placeholder="NUIT" {...inputStyle} />
              </>
            )}

            {form.registered === "nao" && (
              <>
                <Input placeholder="Nome" {...inputStyle} />
                <Input placeholder="Apelido" {...inputStyle} />
                <Input type="date" {...inputStyle} />
                <Input placeholder="Número de identificação (BI/Passaporte)" {...inputStyle} />
                <Input placeholder="WhatsApp" {...inputStyle} />
                <Textarea placeholder="Fale sobre si e o seu negócio" {...inputStyle} />
              </>
            )}
          </Stack>
        </Section>

         {/* 🔥 PROTOTYPE SELECTION */}
        <Section icon={LayoutTemplate} title="Escolha o Protótipo">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            {prototypes.map((p) => (
              <Box
                key={p.name}
                p={4}
                borderRadius="xl"
                border={`1px solid ${
                  selectedPrototype === p.name ? primaryColor : borderColor
                }`}
                cursor="pointer"
                onClick={() => setSelectedPrototype(p.name)}
                boxShadow={
                  selectedPrototype === p.name
                    ? "0px 10px 25px rgba(37,99,235,0.2)"
                    : "none"
                }
              >
                <Heading size="sm">{p.name}</Heading>
                <Text fontSize="sm" color={greyColor}>
                  {p.desc}
                </Text>
              </Box>
            ))}
          </Grid>
        </Section>

        {/* 🔥 PLAN SELECTION */}
        <Section icon={LayoutTemplate} title="Escolha o Plano">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            {plans.map((plan) => (
              <Box
                key={plan.name}
                p={5}
                borderRadius="xl"
                border={`1px solid ${
                  selectedPlan === plan.name ? primaryColor : borderColor
                }`}
                cursor="pointer"
                onClick={() => setSelectedPlan(plan.name)}
                boxShadow={
                  selectedPlan === plan.name
                    ? "0px 10px 25px rgba(37,99,235,0.2)"
                    : "none"
                }
              >
                {plan.popular && (
                  <Badge colorScheme="blue">Mais Popular</Badge>
                )}

                <Heading size="md" mt={2}>{plan.name}</Heading>
                <Text fontWeight="bold">{plan.price}</Text>
              </Box>
            ))}
          </Grid>
        </Section>

        {/* Lançamento */}
        <Section icon={Calendar} title="Lançamento">
          <Stack spacing={3}>
            <Input type="date" {...inputStyle} />
            <Flex align="center" gap={2}>
              <Icon as={Info} />
              <Text fontSize="sm" color={greyColor}>
                Levamos 2–3 dias para personalizar a sua loja.
              </Text>
            </Flex>
          </Stack>
        </Section>

        {/* Submit */}
        <Button
          bg={primaryColor}
          color="white"
          size="lg"
          borderRadius="xl"
          py={7}
          _hover={{ opacity: 0.9 }}
          boxShadow="0px 10px 25px rgba(37,99,235,0.3)"
        >
          Enviar Questionário
        </Button>
      </Flex>
    </Flex>
  );
};

export default QuestionnairePage;