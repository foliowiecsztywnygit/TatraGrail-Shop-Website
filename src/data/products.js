// Czysty, 2D minimalistyczny SVG placeholder koszulki zakodowany jako Data URI. 
export const tshirtFront = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 240' fill='none' stroke='%23333' stroke-width='1.5'%3E%3Cpath d='M 60 20 Q 100 40 140 20 L 190 35 L 180 95 L 150 85 L 150 220 L 50 220 L 50 85 L 20 95 L 10 35 Z' fill='%23050505'/%3E%3C/svg%3E";

// Alternatywny widok tyłu (z napisem BACK)
export const tshirtBack = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 240' fill='none' stroke='%23333' stroke-width='1.5'%3E%3Cpath d='M 60 20 Q 100 20 140 20 L 190 35 L 180 95 L 150 85 L 150 220 L 50 220 L 50 85 L 20 95 L 10 35 Z' fill='%23050505'/%3E%3Ctext x='100' y='130' font-family='sans-serif' font-size='12' fill='%23333' text-anchor='middle' font-weight='bold' letter-spacing='0.2em'%3EBACK%3C/text%3E%3C/svg%3E";

const defaultDetails = {
  pl: [
    'Lekko Baggy Fit',
    'Druk DTF',
    'Mocne szycie'
  ],
  en: [
    'Baggy fit',
    'DTF Print',
    'Sewed with care'
  ]
};

const defaultDescription = {
  pl: 'Dunajeckie pomysły spotkały się z Warszawską modą, powstało nie wiem co...',
  en: 'Ideas from the Dunaj river met modern fashion, i dont know what got out...'
};

const defaultMaterial = {
  pl: '100% Bawełna 280 GSM.\nPrać w 30 stopniach, na lewej stronie. Nie prasować nadruku.',
  en: '100% Cotton. 280 GSM.\nWash at 30 degrees, inside out. Do not iron the print.'
};

export const categoriesData = [
  {
    id: 'drop01',
    title: { pl: 'DROP 01', en: 'DROP 01' },
    products: [
      { 
        id: 'drop-01-tee-1', 
        title: { pl: 'TatraGrail TEE 01', en: 'TatraGrail TEE 01' },
        price: '199.00 PLN', 
        images: [tshirtFront, tshirtBack], 
        colors: ['#000000', '#FFFFFF'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: defaultDescription,
        details: defaultDetails,
        material: defaultMaterial,
        dropFeatured: true
      },
      { 
        id: 'drop-01-tee-2', 
        title: { pl: 'TatraGrail TEE 02', en: 'TatraGrail TEE 02' },
        price: '199.00 PLN', 
        images: [tshirtFront, tshirtBack], 
        colors: ['#0F0F0F', '#FFFFFF'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: defaultDescription,
        details: defaultDetails,
        material: defaultMaterial,
        dropFeatured: true
      },
      { 
        id: 'drop-01-tee-3', 
        title: { pl: 'TatraGrail TEE 03', en: 'TatraGrail TEE 03' },
        price: '199.00 PLN', 
        images: [tshirtFront, tshirtBack], 
        colors: ['#1A1A1A', '#4A4A4A'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: defaultDescription,
        details: defaultDetails,
        material: defaultMaterial,
        dropFeatured: true
      }
    ]
  },
  {
    id: 'originals',
    title: { pl: 'KOLEKCJA TATRAGRAIL', en: "TATRAGRAIL COLLECTION" },
    products: [
      { 
        id: '1', 
        title: { pl: 'Koszulka TATRAGRAIL ORIGINAL', en: 'TATRAGRAIL ORIGINAL Tee' },
        price: '90.00 PLN', 
        images: [tshirtFront, tshirtBack], 
        colors: ['#000000', '#FFFFFF'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: defaultDescription,
        details: defaultDetails,
        material: defaultMaterial
      },
      { 
        id: '2', 
        title: { pl: 'Bluza Zapinana TATRAGRAIL SET', en: 'Zip-up Hoodie TATRAGRAIL ORIGINAL' },
        price: '160.00 PLN', 
        images: [tshirtFront, tshirtBack], 
        colors: ['#1A1A1A'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: defaultDescription,
        details: defaultDetails,
        material: defaultMaterial
      },
      { 
        id: '3', 
        title: { pl: 'Spodnie TATRAGRAIL SET', en: 'TATRAGRAIL SET Pants' },
        price: '120.00 PLN', 
        images: [tshirtFront, tshirtBack], 
        colors: ['#000000', '#4A4A4A'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: defaultDescription,
        details: defaultDetails,
        material: defaultMaterial
      },
      { 
        id: '4', 
        title: { pl: 'Czapka A. La Kapelusik', en: 'A. La Góral Hat' },
        price: '100.00 PLN', 
        images: [tshirtFront, tshirtBack], 
        colors: ['#000000'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: defaultDescription,
        details: defaultDetails,
        material: defaultMaterial
      }
    ]
  },
  {
    id: 'mokasynek',
    title: { pl: 'MOKASYNEK', en: 'MOKASYNEK' },
    products: [
      { 
        id: '5', 
        title: { pl: 'MOKASYNEK 1', en: 'MOKASYNEK 1' },
        price: '120.00 PLN', 
        images: [tshirtFront, tshirtBack], 
        colors: ['#000000', '#999999', '#FFFFFF'],
        sizes: ['ONE SIZE'],
        description: defaultDescription,
        details: defaultDetails,
        material: defaultMaterial
      },
      { 
        id: '6', 
        title: { pl: 'MOKASYNEK 2', en: 'MOKASYNEK 2' },
        price: '120.00 PLN', 
        images: [tshirtFront, tshirtBack], 
        colors: ['#333333'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: defaultDescription,
        details: defaultDetails,
        material: defaultMaterial
      },
      { 
        id: '7', 
        title: { pl: 'MOKASYNEK 3', en: 'MOKASYNEK 3' },
        price: '120.00 PLN', 
        images: [tshirtFront, tshirtBack], 
        colors: ['#000000'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: defaultDescription,
        details: defaultDetails,
        material: defaultMaterial
      },
      { 
        id: '8', 
        title: { pl: 'MOKASYNEK 4', en: 'MOKASYNEK 4' },
        price: '120.00 PLN', 
        images: [tshirtFront, tshirtBack], 
        colors: ['#000000', '#FFFFFF'],
        sizes: ['ONE SIZE'],
        description: defaultDescription,
        details: defaultDetails,
        material: defaultMaterial
      }
    ]
  }
];

// Helper do spłaszczania listy produktów dla stron produktowych
export const getProductById = (id) => {
  for (const cat of categoriesData) {
    const prod = cat.products.find(p => p.id === id);
    if (prod) return prod;
  }
  return null;
};
