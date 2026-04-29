"use client";

import {
  Badge,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { ReactNode, useMemo, useState } from "react";
import {
  Calendar,
  CreditCard,
  Globe,
  Info,
  LayoutTemplate,
  MessageCircle,
  Package,
  Palette,
  ShieldCheck,
  Store,
  Truck,
  User,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const API_BASE_URL = "https://ejem-donations.onrender.com";
const WHATSAPP_NUMBER = "258847529665"; // replace with your real number

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

type Step = "form" | "summary" | "success";

interface SectionProps {
  icon: React.ElementType;
  title: string;
  description?: string;
  children: ReactNode;
}

const Section = ({ icon, title, description, children }: SectionProps) => (
  <Box
    border={`1px solid ${borderColor}`}
    borderRadius="2xl"
    p={{ base: 5, md: 8 }}
    bg="white"
    boxShadow="0px 10px 30px rgba(0,0,0,0.04)"
  >
    <Flex align="flex-start" mb={6} gap={3}>
      <Flex p={3} bg="gray.100" borderRadius="xl" flexShrink={0}>
        <Icon as={icon} boxSize={5} color={darkColor} />
      </Flex>

      <Box>
        <Heading size="md">{title}</Heading>
        {description && (
          <Text mt={1} fontSize="sm" color={greyColor}>
            {description}
          </Text>
        )}
      </Box>
    </Flex>

    {children}
  </Box>
);

const Label = ({ children }: { children: ReactNode }) => (
  <Text fontSize="sm" fontWeight="700" mb={2} color={darkColor}>
    {children}
  </Text>
);

const prototypes = [
  { name: "Confeitaria", desc: "Loja moderna para cafés, padarias e pastelarias." },
  { name: "Eletrónicos", desc: "Venda de gadgets, smartphones e tecnologia." },
  { name: "Produtos", desc: "Loja completa para múltiplos produtos." },
  { name: "Moda", desc: "Design elegante para roupa e acessórios." },
  { name: "Personalizado", desc: "Design e funcionalidades feitas à medida." },
  { name: "Serviços", desc: "Ideal para marcações, consultorias e serviços." },
];

const plans = [
  {
    name: "Starter",
    price: "3 000 MZN + 500 MZN/mês",
    amount: 1,
    desc: "Ideal para começar rapidamente com uma loja profissional.",
    popular: true,
  },
  {
    name: "Premium",
    price: "9 000 MZN + 1 500 MZN/mês",
    amount: 1,
    desc: "Ideal para negócios que precisam de personalização avançada.",
  },
];

const SummaryItem = ({ label, value }: { label: string; value: any }) => {
  if (!value || (Array.isArray(value) && value.length === 0)) return null;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      gap={2}
      py={3}
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Text fontWeight={700} color={darkColor} fontSize="sm">
        {label}
      </Text>
      <Text color={greyColor} fontSize="sm" textAlign={{ base: "left", md: "right" }}>
        {Array.isArray(value) ? value.join(", ") : String(value)}
      </Text>
    </Flex>
  );
};

const QuestionnairePage = () => {
  const toast = useToast();
  const [step, setStep] = useState<Step>("form");
  const [isPaying, setIsPaying] = useState(false);

  const [form, setForm] = useState<any>({
    businessTypes: [],
    brandColors: [],
    productCategories: [],
    paymentMethods: [],
    deliveryMethods: [],
    selectedPrototype: "",
    selectedPlan: "Starter",
    paymentMethod: "M-Pesa",
  });

  const selectedPlanData = plans.find((p) => p.name === form.selectedPlan) || plans[0];

  const handleChange = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  const productOptions = useMemo(() => {
    const tipo = form.businessTypes || [];

    if (tipo.includes("moda")) {
      return ["Tamanho", "Cor", "Modelo", "Coleção", "Género", "Categoria"];
    }

    if (tipo.includes("eletronicos")) {
      return ["Marca", "Modelo", "Capacidade", "Cor", "Versão", "Garantia"];
    }

    if (tipo.includes("farmacia")) {
      return ["Categoria", "Dosagem", "Marca", "Tipo", "Uso"];
    }

    if (tipo.includes("padaria") || tipo.includes("confeitaria")) {
      return ["Tipo de produto", "Tamanho", "Sabor", "Quantidade", "Encomenda"];
    }

    return ["Categoria", "Tipo", "Marca", "Preço", "Disponibilidade"];
  }, [form.businessTypes]);

  const validateForm = () => {
    if (!form.storeName || !form.ownerName || !form.whatsapp) {
      toast({
        title: "Campos obrigatórios em falta",
        description:
          "Preencha pelo menos o nome da loja, nome do responsável e WhatsApp.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return false;
    }

    return true;
  };

  const handleSubmitRequest = () => {
    if (!validateForm()) return;
    setStep("summary");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinalizePurchase = async () => {
    try {
      setIsPaying(true);

      const payload = {
        donorName: form.ownerName,
        donorContact: form.whatsapp,
        anonymousDonation: false,
        amount: selectedPlanData.amount,
        paymentMethod: form.paymentMethod,
        donationMode: "money",
        selectedGoods: [],
        otherDonation: "",
        deliveryMethod: "",
        message: JSON.stringify({
          type: "Loja.Sale Store Request",
          storeName: form.storeName,
          selectedPlan: form.selectedPlan,
          selectedPrototype: form.selectedPrototype,
          questionnaire: form,
        }),
      };

      localStorage.setItem(
        "loja-sale-pending-order",
        JSON.stringify({
          ...form,
          amount: selectedPlanData.amount,
          planPrice: selectedPlanData.price,
          createdAt: new Date().toISOString(),
        })
      );

      const response = await fetch(`${API_BASE_URL}/api/donations/create-payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || result?.status !== "success") {
        throw new Error(result?.message || "Não foi possível iniciar o pagamento.");
      }

      if (result?.data?.checkoutUrl) {
        window.location.href = result.data.checkoutUrl;
        return;
      }

      setStep("success");
    } catch (error: any) {
      toast({
        title: "Erro no pagamento",
        description: error?.message || "Tente novamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsPaying(false);
    }
  };

  const whatsappText = encodeURIComponent(
    `Olá, submeti um pedido na Loja.Sale para a loja "${form.storeName || ""}" e gostaria de falar convosco.`
  );

  if (step === "success") {
    return (
      <Flex bg="gray.50" minH="100vh" py={{ base: 12, md: 20 }} px={4}>
        <Flex maxW={760} mx="auto" w="100%" align="center" justify="center">
          <Box bg="white" p={{ base: 6, md: 10 }} rounded="3xl" shadow="lg" textAlign="center">
            <Badge colorScheme="green" rounded="full" px={4} py={2} mb={5}>
              Pedido submetido
            </Badge>

            <Heading mb={4}>Pagamento iniciado com sucesso</Heading>

            <Text color={greyColor} lineHeight="1.8" mb={8}>
              Obrigado. O seu pedido foi registado. Após a confirmação do
              pagamento, a nossa equipa entrará em contacto para iniciar a
              configuração da sua loja.
            </Text>

            <Button
              as="a"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaWhatsapp />}
              bg="#25D366"
              color="white"
              size="lg"
              rounded="full"
              _hover={{ opacity: 0.9 }}
            >
              Falar connosco no WhatsApp
            </Button>
          </Box>
        </Flex>
      </Flex>
    );
  }

  if (step === "summary") {
    return (
      <Flex bg="gray.50" minH="100vh" py={{ base: 12, md: 16 }} px={4}>
        <Flex direction="column" maxW={980} mx="auto" w="100%" gap={8}>
          <Box textAlign="center">
            <Badge colorScheme="blue" rounded="full" px={4} py={2} mb={4}>
              Resumo do pedido
            </Badge>

            <Heading mb={3} fontSize={{ base: "3xl", md: "5xl" }}>
              Confirme os dados da sua loja
            </Heading>

            <Text color={greyColor} maxW={680} mx="auto">
              Revise as informações abaixo antes de finalizar a compra.
            </Text>
          </Box>

          <Section icon={Store} title="Resumo do Questionário">
            <Stack spacing={1}>
              <SummaryItem label="Nome da loja" value={form.storeName} />
              <SummaryItem label="Responsável" value={form.ownerName} />
              <SummaryItem label="WhatsApp" value={form.whatsapp} />
              <SummaryItem label="Email" value={form.email} />
              <SummaryItem label="Cidade" value={form.city} />
              <SummaryItem label="Tipo de negócio" value={form.businessTypes} />
              <SummaryItem label="Loja física" value={form.hasPhysicalStore} />
              <SummaryItem label="Tempo de existência" value={form.businessAge} />
              <SummaryItem label="Descrição do negócio" value={form.businessDescription} />
              <SummaryItem label="Cores preferidas" value={form.brandColors} />
              <SummaryItem label="Logo" value={form.logoLink} />
              <SummaryItem label="Redes sociais / site" value={form.socialLinks} />
              <SummaryItem label="Estilo desejado" value={form.brandStyle} />
              <SummaryItem label="Produtos / serviços" value={form.mainProducts} />
              <SummaryItem label="Quantidade de produtos" value={form.productQuantity} />
              <SummaryItem label="Fotos dos produtos" value={form.hasProductPhotos} />
              <SummaryItem label="Categorias" value={form.productCategories} />
              <SummaryItem label="Pagamentos" value={form.paymentMethods} />
              <SummaryItem label="Entregas" value={form.deliveryMethods} />
              <SummaryItem label="Zonas de entrega" value={form.deliveryAreas} />
              <SummaryItem label="Receber pedidos via" value={form.orderMethod} />
              <SummaryItem label="Domínio" value={form.domainStatus} />
              <SummaryItem label="Domínio desejado" value={form.desiredDomain} />
              <SummaryItem label="Negócio registado" value={form.registered} />
              <SummaryItem label="Protótipo" value={form.selectedPrototype} />
              <SummaryItem label="Plano" value={form.selectedPlan} />
              <SummaryItem label="Lançamento" value={form.launchDate} />
              <SummaryItem label="Observações finais" value={form.finalNotes} />
            </Stack>
          </Section>

          <Section icon={CreditCard} title="Pagamento">
            <Stack spacing={4}>
              <Box>
                <Text fontWeight={800}>Valor inicial</Text>
                <Heading fontSize={{ base: "3xl", md: "4xl" }} color={primaryColor}>
                  {selectedPlanData.amount.toLocaleString("pt-MZ")} MZN
                </Heading>
                <Text color={greyColor} fontSize="sm">
                  Plano: {selectedPlanData.price}
                </Text>
              </Box>

              <Box>
                <Label>Método de pagamento</Label>
                <Select
                  {...inputStyle}
                  value={form.paymentMethod}
                  onChange={(e) => handleChange("paymentMethod", e.target.value)}
                >
                  <option value="M-Pesa">M-Pesa</option>
                  <option value="e-Mola">e-Mola</option>
                  <option value="Cartão">Cartão</option>
                </Select>
              </Box>

              <Divider />

              <Flex gap={3} direction={{ base: "column", md: "row" }}>
                <Button
                  variant="outline"
                  size="lg"
                  rounded="xl"
                  flex={1}
                  onClick={() => setStep("form")}
                >
                  Editar dados
                </Button>

                <Button
                  bg={primaryColor}
                  color="white"
                  size="lg"
                  rounded="xl"
                  flex={1}
                  isLoading={isPaying}
                  loadingText="A iniciar pagamento"
                  onClick={handleFinalizePurchase}
                  _hover={{ opacity: 0.9 }}
                >
                  Finalizar compra
                </Button>
              </Flex>
            </Stack>
          </Section>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex bg="gray.50" minH="100vh" py={{ base: 12, md: 16 }} px={4}>
      <Flex direction="column" maxW={980} mx="auto" w="100%" gap={8}>
        <Box textAlign="center">
          <Badge px={4} py={2} mb={4} borderRadius="full" colorScheme="blue">
            Loja.Sale
          </Badge>

          <Heading mb={3} fontSize={{ base: "3xl", md: "5xl" }}>
            Criação de Loja Online
          </Heading>

          <Text color={greyColor} maxW={680} mx="auto">
            Preencha o questionário para recebermos todas as informações
            necessárias para criar a sua loja.
          </Text>
        </Box>

        <Section icon={User} title="Dados do Responsável">
          <Stack spacing={4}>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <Label>Nome completo *</Label>
                <Input {...inputStyle} onChange={(e) => handleChange("ownerName", e.target.value)} />
              </Box>
              <Box>
                <Label>WhatsApp *</Label>
                <Input {...inputStyle} onChange={(e) => handleChange("whatsapp", e.target.value)} />
              </Box>
            </Grid>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <Label>Email</Label>
                <Input type="email" {...inputStyle} onChange={(e) => handleChange("email", e.target.value)} />
              </Box>
              <Box>
                <Label>Cidade</Label>
                <Input {...inputStyle} onChange={(e) => handleChange("city", e.target.value)} />
              </Box>
            </Grid>
          </Stack>
        </Section>

        <Section icon={Store} title="Identificação da Loja">
          <Stack spacing={4}>
            <Box>
              <Label>Nome da loja *</Label>
              <Input {...inputStyle} onChange={(e) => handleChange("storeName", e.target.value)} />
            </Box>

            <Box>
              <Label>Tipo de negócio</Label>
              <CheckboxGroup onChange={(value) => handleChange("businessTypes", value)}>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3}>
                  <Checkbox value="moda">Moda</Checkbox>
                  <Checkbox value="eletronicos">Eletrónica</Checkbox>
                  <Checkbox value="farmacia">Farmácia</Checkbox>
                  <Checkbox value="padaria">Padaria</Checkbox>
                  <Checkbox value="confeitaria">Confeitaria</Checkbox>
                  <Checkbox value="cosmeticos">Cosméticos</Checkbox>
                  <Checkbox value="restaurante">Restaurante</Checkbox>
                  <Checkbox value="servicos">Serviços</Checkbox>
                  <Checkbox value="outro">Outro</Checkbox>
                </Grid>
              </CheckboxGroup>
            </Box>

            <Textarea
              placeholder="Descreva brevemente o seu negócio"
              {...inputStyle}
              onChange={(e) => handleChange("businessDescription", e.target.value)}
            />
          </Stack>
        </Section>

        <Section icon={Palette} title="Identidade Visual">
          <Stack spacing={4}>
            <CheckboxGroup onChange={(value) => handleChange("brandColors", value)}>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3}>
                <Checkbox value="azul">Azul</Checkbox>
                <Checkbox value="preto-dourado">Preto & Dourado</Checkbox>
                <Checkbox value="vermelho">Vermelho</Checkbox>
                <Checkbox value="verde">Verde</Checkbox>
                <Checkbox value="minimalista">Minimalista</Checkbox>
                <Checkbox value="luxo">Luxo</Checkbox>
              </Grid>
            </CheckboxGroup>

            <Input placeholder="Link do logotipo" {...inputStyle} onChange={(e) => handleChange("logoLink", e.target.value)} />
            <Input placeholder="Instagram / Facebook / Website" {...inputStyle} onChange={(e) => handleChange("socialLinks", e.target.value)} />
            <Textarea placeholder="Estilo desejado" {...inputStyle} onChange={(e) => handleChange("brandStyle", e.target.value)} />
          </Stack>
        </Section>

        <Section icon={Package} title="Produtos e Catálogo">
          <Stack spacing={4}>
            <Textarea placeholder="Principais produtos ou serviços" {...inputStyle} onChange={(e) => handleChange("mainProducts", e.target.value)} />

            <Select placeholder="Quantidade inicial de produtos" {...inputStyle} onChange={(e) => handleChange("productQuantity", e.target.value)}>
              <option value="1-20">1–20</option>
              <option value="20-50">20–50</option>
              <option value="50-100">50–100</option>
              <option value="100-mais">100+</option>
            </Select>

            <CheckboxGroup onChange={(value) => handleChange("productCategories", value)}>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3}>
                {productOptions.map((option) => (
                  <Checkbox key={option} value={option}>
                    {option}
                  </Checkbox>
                ))}
              </Grid>
            </CheckboxGroup>
          </Stack>
        </Section>

        <Section icon={CreditCard} title="Pagamentos">
          <CheckboxGroup onChange={(value) => handleChange("paymentMethods", value)}>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3}>
              <Checkbox value="mpesa">M-Pesa</Checkbox>
              <Checkbox value="emola">e-Mola</Checkbox>
              <Checkbox value="mkesh">mKesh</Checkbox>
              <Checkbox value="transferencia">Transferência Bancária</Checkbox>
              <Checkbox value="cod">Pagamento na Entrega</Checkbox>
              <Checkbox value="pos">POS / Cartão</Checkbox>
            </Grid>
          </CheckboxGroup>
        </Section>

        <Section icon={Truck} title="Entregas e Recolha">
          <Stack spacing={4}>
            <CheckboxGroup onChange={(value) => handleChange("deliveryMethods", value)}>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3}>
                <Checkbox value="retirada">Retirada na loja</Checkbox>
                <Checkbox value="delivery">Delivery</Checkbox>
                <Checkbox value="motoboy">Motoboy</Checkbox>
                <Checkbox value="transportadora">Transportadora</Checkbox>
              </Grid>
            </CheckboxGroup>

            <Input placeholder="Zonas de entrega" {...inputStyle} onChange={(e) => handleChange("deliveryAreas", e.target.value)} />
          </Stack>
        </Section>

        <Section icon={Globe} title="Configuração Técnica">
          <Stack spacing={4}>
            <Select placeholder="Domínio" {...inputStyle} onChange={(e) => handleChange("domainStatus", e.target.value)}>
              <option value="tenho">Já tenho domínio</option>
              <option value="preciso">Preciso de ajuda</option>
              <option value="subdominio">Quero começar com subdomínio</option>
            </Select>

            <Input placeholder="Nome de domínio desejado" {...inputStyle} onChange={(e) => handleChange("desiredDomain", e.target.value)} />
          </Stack>
        </Section>

        <Section icon={LayoutTemplate} title="Protótipo e Plano">
          <Stack spacing={6}>
            <Box>
              <Label>Escolha o protótipo</Label>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                {prototypes.map((prototype) => {
                  const active = form.selectedPrototype === prototype.name;
                  return (
                    <Box
                      key={prototype.name}
                      p={4}
                      borderRadius="xl"
                      border={`1px solid ${active ? primaryColor : borderColor}`}
                      cursor="pointer"
                      bg={active ? "blue.50" : "white"}
                      onClick={() => handleChange("selectedPrototype", prototype.name)}
                    >
                      <Heading size="sm">{prototype.name}</Heading>
                      <Text fontSize="sm" color={greyColor} mt={1}>
                        {prototype.desc}
                      </Text>
                    </Box>
                  );
                })}
              </Grid>
            </Box>

            <Box>
              <Label>Escolha o plano</Label>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                {plans.map((plan) => {
                  const active = form.selectedPlan === plan.name;
                  return (
                    <Box
                      key={plan.name}
                      p={5}
                      borderRadius="xl"
                      border={`1px solid ${active ? primaryColor : borderColor}`}
                      cursor="pointer"
                      bg={active ? "blue.50" : "white"}
                      onClick={() => handleChange("selectedPlan", plan.name)}
                    >
                      {plan.popular && <Badge colorScheme="blue" mb={2}>Mais Popular</Badge>}
                      <Heading size="md">{plan.name}</Heading>
                      <Text fontWeight="bold" mt={1}>{plan.price}</Text>
                      <Text fontSize="sm" color={greyColor} mt={1}>{plan.desc}</Text>
                    </Box>
                  );
                })}
              </Grid>
            </Box>
          </Stack>
        </Section>

        <Section icon={Calendar} title="Prazo e Observações Finais">
          <Stack spacing={4}>
            <Input type="date" {...inputStyle} onChange={(e) => handleChange("launchDate", e.target.value)} />
            <Textarea placeholder="Observações finais" {...inputStyle} onChange={(e) => handleChange("finalNotes", e.target.value)} />
          </Stack>
        </Section>

        <Button
          bg={primaryColor}
          color="white"
          size="lg"
          borderRadius="xl"
          py={7}
          onClick={handleSubmitRequest}
          _hover={{ opacity: 0.9 }}
        >
          Submeter pedido
        </Button>
      </Flex>
    </Flex>
  );
};

export default QuestionnairePage;