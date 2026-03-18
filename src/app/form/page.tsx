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
  Target,
  Package,
  CreditCard,
  Truck,
  MessageCircle,
  Settings,
  Calendar,
  LayoutTemplate,
  Globe,
  ShieldCheck,
} from "lucide-react";

const primaryColor = "#2563EB";
const darkColor = "#0F172A";
const greyColor = "#64748B";
const borderColor = "#E2E8F0";

const Section = ({
  icon,
  title,
  children,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
}) => (
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

const QuestionnairePage = () => {
  const [form, setForm] = useState<any>({});
  const [selectedPlan, setSelectedPlan] = useState("Individual");

  const handleChange = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  const plans = [
    {
      name: "Individual",
      price: "1 500 MZN",
      popular: true,
      features: [
        "Loja pronta",
        "Produtos ilimitados",
        "Checkout incluído",
      ],
    },
    {
      name: "Business",
      price: "3 500 MZN",
      features: [
        "Stock avançado",
        "Promoções",
        "Relatórios",
      ],
    },
    {
      name: "Ultimate",
      price: "9 500 MZN",
      features: [
        "Domínio incluído",
        "Pagamentos locais",
        "Suporte dedicado",
      ],
    },
  ];

  return (
    <Flex bg="gray.50" minH="100vh" py={16} px={4}>
      <Flex direction="column" maxW={900} mx="auto" w="100%" gap={10}>
        
        {/* Header */}
        <Box textAlign="center">
          <Heading mb={3}>Criação de Loja Online</Heading>
          <Text color={greyColor}>
            Preencha com o máximo de detalhe possível. Isto permite-nos criar
            uma loja completa, funcional e pronta para vender.
          </Text>
        </Box>

        {/* Loja */}
        <Section icon={Store} title="Identificação da Loja">
          <Stack spacing={4}>
            <Input placeholder="Nome da Loja" onChange={(e)=>handleChange("nome",e.target.value)} />
            
            <CheckboxGroup onChange={(v)=>handleChange("tipoNegocio",v)}>
              <Grid templateColumns="repeat(2,1fr)">
                <Checkbox value="eletronicos">Eletrônicos</Checkbox>
                <Checkbox value="moda">Roupa / Moda</Checkbox>
                <Checkbox value="farmacia">Farmácia</Checkbox>
                <Checkbox value="padaria">Padaria</Checkbox>
                <Checkbox value="cosmeticos">Cosméticos</Checkbox>
                <Checkbox value="supermercado">Supermercado</Checkbox>
              </Grid>
            </CheckboxGroup>

            <Select placeholder="Possui loja física?" onChange={(e)=>handleChange("fisica",e.target.value)}>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </Select>

            <Input placeholder="Cidade / Área" onChange={(e)=>handleChange("cidade",e.target.value)} />
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
                <Checkbox value="rosa">Rosa</Checkbox>
                <Checkbox value="minimal">Minimalista</Checkbox>
              </Grid>
            </CheckboxGroup>

            <Select onChange={(e)=>handleChange("branding",e.target.value)}>
              <option value="">Já tem identidade?</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </Select>

            <Input placeholder="Link do logotipo (Drive/WhatsApp)" onChange={(e)=>handleChange("logo",e.target.value)} />
            <Input placeholder="Instagram ou site atual" onChange={(e)=>handleChange("social",e.target.value)} />
          </Stack>
        </Section>

        {/* Objetivo */}
        <Section icon={Target} title="Objetivo da Loja">
          <CheckboxGroup onChange={(v)=>handleChange("objetivo",v)}>
            <Stack>
              <Checkbox value="vendas">Vender online</Checkbox>
              <Checkbox value="whatsapp">Pedidos via WhatsApp</Checkbox>
              <Checkbox value="catalogo">Mostrar catálogo</Checkbox>
              <Checkbox value="delivery">Delivery</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Section>

        {/* Produtos */}
        <Section icon={Package} title="Produtos">
          <Stack spacing={4}>
            <Select onChange={(e)=>handleChange("quantidade",e.target.value)}>
              <option value="">Quantidade de produtos</option>
              <option>1–20</option>
              <option>20–50</option>
              <option>50–100</option>
              <option>100+</option>
            </Select>

            <CheckboxGroup onChange={(v)=>handleChange("variacoes",v)}>
              <Stack direction="row">
                <Checkbox value="tamanho">Tamanho</Checkbox>
                <Checkbox value="cor">Cor</Checkbox>
                <Checkbox value="modelo">Modelo</Checkbox>
              </Stack>
            </CheckboxGroup>

            <Select onChange={(e)=>handleChange("fotos",e.target.value)}>
              <option value="">Fotos dos produtos</option>
              <option value="sim">Já tenho</option>
              <option value="nao">Preciso de ajuda</option>
            </Select>
          </Stack>
        </Section>

        {/* Pagamentos */}
        <Section icon={CreditCard} title="Pagamentos">
          <CheckboxGroup onChange={(v)=>handleChange("pagamentos",v)}>
            <Grid templateColumns="repeat(2,1fr)">
              <Checkbox value="mpesa">M-Pesa</Checkbox>
              <Checkbox value="emola">e-Mola</Checkbox>
              <Checkbox value="mkesh">mKesh</Checkbox>
              <Checkbox value="cartao">Cartão</Checkbox>
              <Checkbox value="entrega">Pagamento na entrega</Checkbox>
            </Grid>
          </CheckboxGroup>
        </Section>

        {/* Entregas */}
        <Section icon={Truck} title="Entregas">
          <Stack spacing={4}>
            <CheckboxGroup onChange={(v)=>handleChange("entrega",v)}>
              <Stack>
                <Checkbox value="retirada">Retirada</Checkbox>
                <Checkbox value="delivery">Delivery próprio</Checkbox>
                <Checkbox value="motoboy">Motoboy</Checkbox>
              </Stack>
            </CheckboxGroup>

            <Select onChange={(e)=>handleChange("taxa",e.target.value)}>
              <option value="">Cobra taxa?</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </Select>
          </Stack>
        </Section>

        {/* Comunicação */}
        <Section icon={MessageCircle} title="Comunicação">
          <Stack spacing={4}>
            <Select onChange={(e)=>handleChange("pedidos",e.target.value)}>
              <option value="">Receber pedidos via</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="checkout">Checkout automático</option>
              <option value="ambos">Ambos</option>
            </Select>

            <Input placeholder="WhatsApp" onChange={(e)=>handleChange("telefone",e.target.value)} />
          </Stack>
        </Section>

        {/* Funcionalidades */}
        <Section icon={Settings} title="Funcionalidades Extras">
          <CheckboxGroup onChange={(v)=>handleChange("extras",v)}>
            <Stack>
              <Checkbox value="cupons">Cupões</Checkbox>
              <Checkbox value="promocoes">Promoções</Checkbox>
              <Checkbox value="stock">Controle de stock</Checkbox>
              <Checkbox value="relatorios">Relatórios</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Section>

        {/* Técnico */}
        <Section icon={Globe} title="Configuração Técnica">
          <Stack spacing={4}>
            <Select onChange={(e)=>handleChange("dominio",e.target.value)}>
              <option value="">Domínio</option>
              <option value="sim">Já tenho domínio</option>
              <option value="nao">Preciso de domínio</option>
            </Select>

            <Input placeholder="Nome desejado do domínio" onChange={(e)=>handleChange("dominioNome",e.target.value)} />
          </Stack>
        </Section>

        {/* Legal */}
        <Section icon={ShieldCheck} title="Informação Legal">
          <Stack spacing={4}>
            <Input placeholder="Nome da empresa (opcional)" onChange={(e)=>handleChange("empresa",e.target.value)} />
            <Input placeholder="NUIT (opcional)" onChange={(e)=>handleChange("nuit",e.target.value)} />
          </Stack>
        </Section>

        {/* Data */}
        <Section icon={Calendar} title="Lançamento">
          <Stack spacing={3}>
            <Input type="date" onChange={(e)=>handleChange("data",e.target.value)} />
            <Text fontSize="sm" color={greyColor}>
              Tempo médio de entrega: 2–3 dias após envio completo.
            </Text>
          </Stack>
        </Section>

        {/* Planos */}
        <Section icon={LayoutTemplate} title="Plano">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6}>
            {plans.map((plan) => (
              <Box
                key={plan.name}
                border={`1px solid ${selectedPlan === plan.name ? primaryColor : borderColor}`}
                p={5}
                borderRadius="xl"
                cursor="pointer"
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.popular && <Badge colorScheme="blue">Popular</Badge>}
                <Heading size="md">{plan.name}</Heading>
                <Text fontWeight="bold">{plan.price}</Text>
              </Box>
            ))}
          </Grid>
        </Section>

        <Button bg={primaryColor} color="white" size="lg">
          Enviar
        </Button>

      </Flex>
    </Flex>
  );
};

export default QuestionnairePage;