export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  tags?: string[];
  banner?: string;
  gallery?: string[];
  specs?: Array<{ label: string; value: string }>
};

export const ALL = '全部';

export const CATEGORIES = [
  ALL,
  'Steel',
  'Solar Frame',
  '光伏板',
  '组件',
];

export const PRODUCTS: Product[] = [
  // Steel Products (8)
  {
    id: 'p1',
    name: '热镀锌钢材产品',
    category: 'Steel',
    image: '/static/picture/protfolio-img01.png',
    banner: '/static/picture/protfolio-img01.png'
  },
  // Solar Frame Products (6)
  {
    id: 'p9',
    name: '光伏电站系统',
    category: 'Solar Frame',
    image: '/static/picture/srg-01.jpg',
    banner: '/static/picture/srg-01.jpg'
  },
  {
    id: 'p10',
    name: '光伏支架系统',
    category: 'Solar Frame',
    image: '/static/picture/srg-02.jpg',
    banner: '/static/picture/srg-02.jpg'
  },
  // 光伏板 Products - Main entrance
  {
    id: 'p14',
    name: '光伏板',
    category: '光伏板',
    image: '/static/picture/625.jpg',
    banner: '/static/picture/625.png'
  },
  // 光伏板 Products - Individual panels
  {
    id: 'p15',
    name: '双面太阳能电池板（625-650W）',
    category: '光伏板',
    image: '/static/picture/625.jpg',
    banner: '/static/picture/625.png'
  },
  {
    id: 'p16',
    name: '双面太阳能电池板（605-630W）',
    category: '光伏板',
    image: '/static/picture/625.jpg',
    banner: '/static/picture/625.png'
  },
  {
    id: 'p17',
    name: '双面太阳能电池板（580-600W）',
    category: '光伏板',
    image: '/static/picture/625.jpg',
    banner: '/static/picture/625.png'
  },
  {
    id: 'p18',
    name: '双面太阳能电池板（695-720W）',
    category: '光伏板',
    image: '/static/picture/625.jpg',
    banner: '/static/picture/625.png'
  },
  {
    id: 'p19',
    name: '双面太阳能电池板（715-740W）',
    category: '光伏板',
    image: '/static/picture/625.jpg',
    banner: '/static/picture/625.png'
  },
  // 组件 Products
  {
    id: 'p20',
    name: '光伏支架系统组件',
    category: '组件',
    image: '/static/picture/component/cdc007.png',
    banner: '/static/picture/component/cdc007.png'
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

