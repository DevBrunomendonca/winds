interface DataCardPayments {
  iconUrl: string;
  title: string;
  paragraph: string;
}

export const dataCardPayments: DataCardPayments[] = [
  {
    iconUrl: "/icons/icone-credit-card.svg",
    title: "Cartão de Crédito",
    paragraph: "Receba D14 sem reserva de segurança.",
  },
  {
    iconUrl: "/icons/icone-pix.svg",
    title: "Pix",
    paragraph:
      "Receba de forma instantânea D+0  vendeu hoje, recebe ainda hoje sua venda no pix.",
  },
  {
    iconUrl: "/icons/icone-boleto.svg",
    title: "Boleto",
    paragraph: "Pagamento facilitado em até 2 dias úteis",
  },
];
