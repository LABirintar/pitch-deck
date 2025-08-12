import { TEAM_PHOTOS_BASE64, LOGOS_BASE64, COVER_BG, DIAGRAMS_BASE64 } from './images';

// Data for Charts
export const REVENUE_SPLIT_DATA = [
  { name: 'Rede (Educador+Parceiro)', value: 50, fill: '#ffa400' },
  { name: 'LABirintar', value: 30, fill: '#ff595a' },
  { name: 'Escola', value: 20, fill: '#ffe9c9' },
];

export const CAPTABLE_DATA = [
  { name: 'Founders', value: 70, fill: '#ff595a' },
  { name: 'Invest. Anjo', value: 10, fill: '#ffa400' },
  { name: 'Reserva Aberta', value: 20, fill: '#ffe9c9' },
];

export const USE_OF_FUNDS_INVESTOR_DATA = [
  { name: 'Mkt & Vendas', value: 35, fill: '#ff595a' },
  { name: 'Operação', value: 25, fill: '#ffa400' },
  { name: 'Tecnologia', value: 20, fill: '#ffe9c9' },
  { name: 'Consultorias', value: 10, fill: '#a0aec0' },
  { name: 'Dev. Institucional', value: 10, fill: '#718096' },
];

export const USE_OF_FUNDS_DATA = USE_OF_FUNDS_INVESTOR_DATA; // Fallback

export const REVENUE_PROJECTION_DATA = [
  { name: '2025', "Receita (R$)": 240000 },
  { name: '2026', "Receita (R$)": 960000 },
  { name: '2027', "Receita (R$)": 3600000 },
  { name: '2028', "Receita (R$)": 9000000 },
  { name: '2032', "Receita (R$)": 25700000 },
];

export const TICKET_PRICE_DATA = [
    { sessions: '1x semana', price: 'R$ 298/mês' },
    { sessions: '2x semana', price: 'R$ 447/mês' },
    { sessions: '3x semana', price: 'R$ 759/mês' },
    { sessions: '4-5x semana', price: 'R$ 948/mês' },
];

// Images
export const BACKGROUND_IMAGES = {
    cover: COVER_BG
};

export const TEAM_PHOTOS: { [key: string]: string } = {
  maria:
    "https://raw.githubusercontent.com/labirintar/governanca/main/pitchDeck/image/marialivia.jpeg",
  edu: "https://raw.githubusercontent.com/labirintar/governanca/main/pitchDeck/image/edumoreira.jpeg",
  rian: "https://raw.githubusercontent.com/labirintar/governanca/main/pitchDeck/image/rianpolonini.jpg",
};

export const LOGOS: { [key: string]: string } = {
    ...LOGOS_BASE64,
    labirintar_main: "https://labirintar.github.io/governanca/pitchDeck/image/IMG_1229.png",
};

export const DIAGRAMS = DIAGRAMS_BASE64;

export const SOFTWARE_IMAGES = [
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5001.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5002.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5003.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5004.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5005.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5006.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5007.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5008.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5009.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5010.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5011.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5012.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5013.png',
    'https://labirintar.github.io/governanca/pitchDeck/image/software/IMG_5014.png',
];

export const PEDAGOGICAL_CURATORSHIP_IMAGES = [
  "https://labirintar.github.io/governanca/pitchDeck/image/IMG_5029.png",
  "https://labirintar.github.io/governanca/pitchDeck/image/IMG_5030.png",
];

export const NETWORK_IMAGES = [
  "https://labirintar.github.io/governanca/pitchDeck/image/IMG_5052.png",
];
