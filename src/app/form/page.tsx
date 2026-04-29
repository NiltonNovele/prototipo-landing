"use client";

import {
  Badge,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
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
  {
    name: "Confeitaria",
    desc: "Loja moderna para cafés, padarias e pastelarias.",
  },
  {
    name: "Eletrónicos",
    desc: "Venda de gadgets, smartphones e tecnologia.",
  },
  {
    name: "Produtos",
    desc: "Loja completa para múltiplos produtos.",
  },
  {
    name: "Moda",
    desc: "Design elegante para roupa e acessórios.",
  },
  {
    name: "Personalizado",
    desc: "Design e funcionalidades feitas à medida.",
  },
  {
    name: "Serviços",
    desc: "Ideal para marcações, consultorias e serviços.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "3 000 MZN + 500 MZN/mês",
    desc: "Ideal para começar rapidamente com uma loja profissional.",
    popular: true,
  },
  {
    name: "Premium",
    price: "9 000 MZN + 1 500 MZN/mês",
    desc: "Ideal para negócios que precisam de personalização avançada.",
  },
];

const QuestionnairePage = () => {
  const toast = useToast();

  const [form, setForm] = useState<any>({
    businessTypes: [],
    brandColors: [],
    productCategories: [],
    paymentMethods: [],
    deliveryMethods: [],
    selectedPrototype: "",
    selectedPlan: "Starter",
  });

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

  const handleSubmit = () => {
    if (!form.storeName || !form.ownerName || !form.whatsapp) {
      toast({
        title: "Campos obrigatórios em falta",
        description:
          "Preencha pelo menos o nome da loja, nome do responsável e WhatsApp.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    console.log("QUESTIONÁRIO LOJA.SALE:", form);

    toast({
      title: "Questionário pronto",
      description: "Os dados foram recolhidos com sucesso.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Flex bg="gray.50" minH="100vh" py={{ base: 12, md: 16 }} px={4}>
      <Flex direction="column" maxW={980} mx="auto" w="100%" gap={8}>
        <Box textAlign="center">
          <Badge
            px={4}
            py={2}
            mb={4}
            borderRadius="full"
            colorScheme="blue"
            textTransform="none"
          >
            Loja.Sale
          </Badge>

          <Heading mb={3} fontSize={{ base: "3xl", md: "5xl" }}>
            Criação de Loja Online
          </Heading>

          <Text color={greyColor} maxW={680} mx="auto" fontSize="md">
            Preencha este questionário para entendermos o seu negócio,
            produtos, identidade visual, pagamentos, entregas e necessidades
            técnicas.
          </Text>
        </Box>

        <Section
          icon={User}
          title="Dados do Responsável"
          description="Informações da pessoa que será contactada durante o processo."
        >
          <Stack spacing={4}>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <Label>Nome completo *</Label>
                <Input
                  placeholder="Ex: Nilton Novele"
                  {...inputStyle}
                  onChange={(e) => handleChange("ownerName", e.target.value)}
                />
              </Box>

              <Box>
                <Label>WhatsApp *</Label>
                <Input
                  placeholder="Ex: +258 84 000 0000"
                  {...inputStyle}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                />
              </Box>
            </Grid>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="email@exemplo.com"
                  {...inputStyle}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Box>

              <Box>
                <Label>Cidade</Label>
                <Input
                  placeholder="Ex: Maputo"
                  {...inputStyle}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
              </Box>
            </Grid>
          </Stack>
        </Section>

        <Section
          icon={Store}
          title="Identificação da Loja"
          description="Dados principais sobre o negócio."
        >
          <Stack spacing={4}>
            <Box>
              <Label>Nome da loja *</Label>
              <Input
                placeholder="Ex: Bella Fashion"
                {...inputStyle}
                onChange={(e) => handleChange("storeName", e.target.value)}
              />
            </Box>

            <Box>
              <Label>Tipo de negócio</Label>
              <CheckboxGroup
                onChange={(value) => handleChange("businessTypes", value)}
              >
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

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <Label>Tem loja física?</Label>
                <Select
                  placeholder="Selecione uma opção"
                  {...inputStyle}
                  onChange={(e) => handleChange("hasPhysicalStore", e.target.value)}
                >
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </Select>
              </Box>

              <Box>
                <Label>Tempo de existência</Label>
                <Select
                  placeholder="Selecione uma opção"
                  {...inputStyle}
                  onChange={(e) => handleChange("businessAge", e.target.value)}
                >
                  <option value="novo">Ainda estou a começar</option>
                  <option value="menos-1-ano">Menos de 1 ano</option>
                  <option value="1-3-anos">1–3 anos</option>
                  <option value="3-mais">Mais de 3 anos</option>
                </Select>
              </Box>
            </Grid>

            <Box>
              <Label>Descreva brevemente o seu negócio</Label>
              <Textarea
                placeholder="Fale sobre o que vende, público-alvo e objetivo principal."
                {...inputStyle}
                onChange={(e) => handleChange("businessDescription", e.target.value)}
              />
            </Box>
          </Stack>
        </Section>

        <Section
          icon={Palette}
          title="Identidade Visual"
          description="Ajuda-nos a criar uma loja alinhada com a sua marca."
        >
          <Stack spacing={4}>
            <Box>
              <Label>Cores preferidas</Label>
              <CheckboxGroup
                onChange={(value) => handleChange("brandColors", value)}
              >
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3}>
                  <Checkbox value="azul">Azul</Checkbox>
                  <Checkbox value="preto-dourado">Preto & Dourado</Checkbox>
                  <Checkbox value="vermelho">Vermelho</Checkbox>
                  <Checkbox value="verde">Verde</Checkbox>
                  <Checkbox value="rosa">Rosa</Checkbox>
                  <Checkbox value="minimalista">Minimalista</Checkbox>
                  <Checkbox value="luxo">Luxo</Checkbox>
                  <Checkbox value="nao-sei">Ainda não sei</Checkbox>
                </Grid>
              </CheckboxGroup>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <Label>Link do logotipo</Label>
                <Input
                  placeholder="Google Drive, Instagram, site, etc."
                  {...inputStyle}
                  onChange={(e) => handleChange("logoLink", e.target.value)}
                />
              </Box>

              <Box>
                <Label>Instagram / Facebook / Website</Label>
                <Input
                  placeholder="@sualoja ou link"
                  {...inputStyle}
                  onChange={(e) => handleChange("socialLinks", e.target.value)}
                />
              </Box>
            </Grid>

            <Box>
              <Label>Estilo desejado</Label>
              <Textarea
                placeholder="Ex: moderno, simples, premium, colorido, elegante..."
                {...inputStyle}
                onChange={(e) => handleChange("brandStyle", e.target.value)}
              />
            </Box>
          </Stack>
        </Section>

        <Section
          icon={Package}
          title="Produtos e Catálogo"
          description="Informações sobre produtos, categorias e organização da loja."
        >
          <Stack spacing={4}>
            <Box>
              <Label>Principais produtos ou serviços</Label>
              <Textarea
                placeholder="Liste os principais produtos/serviços que pretende vender."
                {...inputStyle}
                onChange={(e) => handleChange("mainProducts", e.target.value)}
              />
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <Label>Quantidade inicial de produtos</Label>
                <Select
                  placeholder="Selecione uma opção"
                  {...inputStyle}
                  onChange={(e) => handleChange("productQuantity", e.target.value)}
                >
                  <option value="1-20">1–20</option>
                  <option value="20-50">20–50</option>
                  <option value="50-100">50–100</option>
                  <option value="100-mais">100+</option>
                </Select>
              </Box>

              <Box>
                <Label>Tem fotos dos produtos?</Label>
                <Select
                  placeholder="Selecione uma opção"
                  {...inputStyle}
                  onChange={(e) => handleChange("hasProductPhotos", e.target.value)}
                >
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                  <option value="algumas">Tenho algumas</option>
                </Select>
              </Box>
            </Grid>

            <Box>
              <Label>Como deseja categorizar os produtos?</Label>
              <CheckboxGroup
                onChange={(value) => handleChange("productCategories", value)}
              >
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3}>
                  {productOptions.map((option) => (
                    <Checkbox key={option} value={option}>
                      {option}
                    </Checkbox>
                  ))}
                </Grid>
              </CheckboxGroup>
            </Box>

            <Box>
              <Label>Observações sobre produtos</Label>
              <Textarea
                placeholder="Ex: produtos com variações, tamanhos, stock limitado, promoções, etc."
                {...inputStyle}
                onChange={(e) => handleChange("productNotes", e.target.value)}
              />
            </Box>
          </Stack>
        </Section>

        <Section
          icon={CreditCard}
          title="Pagamentos"
          description="Métodos de pagamento que pretende aceitar."
        >
          <Stack spacing={4}>
            <CheckboxGroup
              onChange={(value) => handleChange("paymentMethods", value)}
            >
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3}>
                <Checkbox value="mpesa">M-Pesa</Checkbox>
                <Checkbox value="emola">e-Mola</Checkbox>
                <Checkbox value="mkesh">mKesh</Checkbox>
                <Checkbox value="transferencia">Transferência Bancária</Checkbox>
                <Checkbox value="cod">Pagamento na Entrega</Checkbox>
                <Checkbox value="pos">POS / Cartão</Checkbox>
              </Grid>
            </CheckboxGroup>

            <Box>
              <Label>Dados ou observações sobre pagamento</Label>
              <Textarea
                placeholder="Ex: número M-Pesa, banco, regras de confirmação, etc."
                {...inputStyle}
                onChange={(e) => handleChange("paymentNotes", e.target.value)}
              />
            </Box>
          </Stack>
        </Section>

        <Section
          icon={Truck}
          title="Entregas e Recolha"
          description="Como os clientes vão receber os produtos."
        >
          <Stack spacing={4}>
            <CheckboxGroup
              onChange={(value) => handleChange("deliveryMethods", value)}
            >
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3}>
                <Checkbox value="retirada">Retirada na loja</Checkbox>
                <Checkbox value="delivery">Delivery</Checkbox>
                <Checkbox value="motoboy">Motoboy</Checkbox>
                <Checkbox value="correios">Envio por transportadora</Checkbox>
              </Grid>
            </CheckboxGroup>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <Label>Cobra taxa de entrega?</Label>
                <Select
                  placeholder="Selecione uma opção"
                  {...inputStyle}
                  onChange={(e) => handleChange("deliveryFee", e.target.value)}
                >
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                  <option value="depende">Depende da zona</option>
                </Select>
              </Box>

              <Box>
                <Label>Zonas de entrega</Label>
                <Input
                  placeholder="Ex: Maputo, Matola, Cidade..."
                  {...inputStyle}
                  onChange={(e) => handleChange("deliveryAreas", e.target.value)}
                />
              </Box>
            </Grid>

            <Box>
              <Label>Regras de entrega</Label>
              <Textarea
                placeholder="Ex: entregas em 24h, taxa por bairro, horários, etc."
                {...inputStyle}
                onChange={(e) => handleChange("deliveryRules", e.target.value)}
              />
            </Box>
          </Stack>
        </Section>

        <Section
          icon={MessageCircle}
          title="Comunicação e Pedidos"
          description="Defina como pretende receber contactos e pedidos."
        >
          <Stack spacing={4}>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <Label>WhatsApp principal da loja</Label>
                <Input
                  placeholder="+258 84 000 0000"
                  {...inputStyle}
                  onChange={(e) => handleChange("storeWhatsapp", e.target.value)}
                />
              </Box>

              <Box>
                <Label>Receber pedidos via</Label>
                <Select
                  placeholder="Selecione uma opção"
                  {...inputStyle}
                  onChange={(e) => handleChange("orderMethod", e.target.value)}
                >
                  <option value="whatsapp">WhatsApp</option>
                  <option value="checkout">Checkout automático</option>
                  <option value="ambos">Ambos</option>
                </Select>
              </Box>
            </Grid>

            <Box>
              <Label>Mensagem automática desejada</Label>
              <Textarea
                placeholder="Ex: Olá, recebemos o seu pedido. Em breve entraremos em contacto..."
                {...inputStyle}
                onChange={(e) => handleChange("autoMessage", e.target.value)}
              />
            </Box>
          </Stack>
        </Section>

        <Section
          icon={Globe}
          title="Configuração Técnica"
          description="Domínio, hospedagem e integrações."
        >
          <Stack spacing={4}>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <Label>Domínio</Label>
                <Select
                  placeholder="Selecione uma opção"
                  {...inputStyle}
                  onChange={(e) => handleChange("domainStatus", e.target.value)}
                >
                  <option value="tenho">Já tenho domínio</option>
                  <option value="preciso">Preciso de ajuda</option>
                  <option value="subdominio">Quero começar com subdomínio</option>
                </Select>
              </Box>

              <Box>
                <Label>Nome de domínio desejado</Label>
                <Input
                  placeholder="Ex: minhaloja.co.mz"
                  {...inputStyle}
                  onChange={(e) => handleChange("desiredDomain", e.target.value)}
                />
              </Box>
            </Grid>

            <Box>
              <Label>Integrações necessárias</Label>
              <Textarea
                placeholder="Ex: WhatsApp, pagamentos, Google Analytics, Facebook Pixel, sistema de stock..."
                {...inputStyle}
                onChange={(e) => handleChange("integrations", e.target.value)}
              />
            </Box>
          </Stack>
        </Section>

        <Section
          icon={ShieldCheck}
          title="Informação Legal"
          description="Dados para termos, recibos, política de privacidade e identificação."
        >
          <Stack spacing={4}>
            <Box>
              <Label>Negócio registado?</Label>
              <Select
                placeholder="Selecione uma opção"
                {...inputStyle}
                onChange={(e) => handleChange("registered", e.target.value)}
              >
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </Select>
            </Box>

            {form.registered === "sim" && (
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                <Box>
                  <Label>Nome da empresa</Label>
                  <Input
                    placeholder="Nome legal da empresa"
                    {...inputStyle}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                  />
                </Box>

                <Box>
                  <Label>NUIT</Label>
                  <Input
                    placeholder="NUIT da empresa"
                    {...inputStyle}
                    onChange={(e) => handleChange("nuit", e.target.value)}
                  />
                </Box>
              </Grid>
            )}

            {form.registered === "nao" && (
              <Stack spacing={4}>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                  <Box>
                    <Label>Nome</Label>
                    <Input
                      placeholder="Nome"
                      {...inputStyle}
                      onChange={(e) => handleChange("legalFirstName", e.target.value)}
                    />
                  </Box>

                  <Box>
                    <Label>Apelido</Label>
                    <Input
                      placeholder="Apelido"
                      {...inputStyle}
                      onChange={(e) => handleChange("legalLastName", e.target.value)}
                    />
                  </Box>
                </Grid>

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                  <Box>
                    <Label>Data de nascimento</Label>
                    <Input
                      type="date"
                      {...inputStyle}
                      onChange={(e) => handleChange("birthDate", e.target.value)}
                    />
                  </Box>

                  <Box>
                    <Label>BI / Passaporte</Label>
                    <Input
                      placeholder="Número de identificação"
                      {...inputStyle}
                      onChange={(e) => handleChange("documentNumber", e.target.value)}
                    />
                  </Box>
                </Grid>
              </Stack>
            )}

            <Box>
              <Label>Observações legais</Label>
              <Textarea
                placeholder="Alguma informação importante para termos, políticas ou identificação?"
                {...inputStyle}
                onChange={(e) => handleChange("legalNotes", e.target.value)}
              />
            </Box>
          </Stack>
        </Section>

        <Section
          icon={LayoutTemplate}
          title="Protótipo e Plano"
          description="Escolha o modelo e o plano que pretende usar."
        >
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
                      boxShadow={
                        active ? "0px 10px 25px rgba(37,99,235,0.18)" : "none"
                      }
                      onClick={() =>
                        handleChange("selectedPrototype", prototype.name)
                      }
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
                      boxShadow={
                        active ? "0px 10px 25px rgba(37,99,235,0.18)" : "none"
                      }
                      onClick={() => handleChange("selectedPlan", plan.name)}
                    >
                      {plan.popular && (
                        <Badge colorScheme="blue" mb={2}>
                          Mais Popular
                        </Badge>
                      )}

                      <Heading size="md">{plan.name}</Heading>
                      <Text fontWeight="bold" mt={1}>
                        {plan.price}
                      </Text>
                      <Text fontSize="sm" color={greyColor} mt={1}>
                        {plan.desc}
                      </Text>
                    </Box>
                  );
                })}
              </Grid>
            </Box>
          </Stack>
        </Section>

        <Section
          icon={Calendar}
          title="Prazo e Observações Finais"
          description="Quando pretende lançar e quais detalhes finais devemos considerar?"
        >
          <Stack spacing={4}>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <Label>Data desejada para lançamento</Label>
                <Input
                  type="date"
                  {...inputStyle}
                  onChange={(e) => handleChange("launchDate", e.target.value)}
                />
              </Box>

              <Box>
                <Label>Urgência</Label>
                <Select
                  placeholder="Selecione uma opção"
                  {...inputStyle}
                  onChange={(e) => handleChange("urgency", e.target.value)}
                >
                  <option value="normal">Normal</option>
                  <option value="urgente">Urgente</option>
                  <option value="sem-pressa">Sem pressa</option>
                </Select>
              </Box>
            </Grid>

            <Flex align="center" gap={2}>
              <Icon as={Info} color={primaryColor} />
              <Text fontSize="sm" color={greyColor}>
                Normalmente levamos 2–3 dias para personalizar a loja após
                recebermos todas as informações.
              </Text>
            </Flex>

            <Box>
              <Label>Observações finais</Label>
              <Textarea
                placeholder="Algum pedido especial, referência visual, concorrente, funcionalidade extra ou detalhe importante?"
                {...inputStyle}
                minH="120px"
                onChange={(e) => handleChange("finalNotes", e.target.value)}
              />
            </Box>
          </Stack>
        </Section>

        <Button
          bg={primaryColor}
          color="white"
          size="lg"
          borderRadius="xl"
          py={7}
          _hover={{ opacity: 0.9, transform: "translateY(-2px)" }}
          boxShadow="0px 10px 25px rgba(37,99,235,0.3)"
          transition="all 0.2s ease"
          onClick={handleSubmit}
        >
          Enviar Questionário
        </Button>
      </Flex>
    </Flex>
  );
};

export default QuestionnairePage;