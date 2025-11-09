export type SolarPanelComponent = {
  id: string;
  name: string;
  nameEn: string;
  model: string;
  powerRange: string;
  powerRangeEn: string;
  efficiency: string;
  efficiencyEn: string;
  image3d: string;
  productId: string; // Link to the actual product detail page
};

export const SOLAR_PANEL_COMPONENTS: SolarPanelComponent[] = [
  {
    id: 'sp1',
    name: '双面太阳能电池板',
    nameEn: 'Bifacial Solar Panel',
    model: '625-650W',
    powerRange: '625-650W',
    powerRangeEn: '625-650W',
    efficiency: '23.3%',
    efficiencyEn: '23.3%',
    image3d: '/static/picture/625.jpg',
    productId: 'p15',
  },
  {
    id: 'sp2',
    name: '双面太阳能电池板',
    nameEn: 'Bifacial Solar Panel',
    model: '605-630W',
    powerRange: '605-630W',
    powerRangeEn: '605-630W',
    efficiency: '23.1%',
    efficiencyEn: '23.1%',
    image3d: '/static/picture/625.jpg',
    productId: 'p16',
  },
  {
    id: 'sp3',
    name: '双面太阳能电池板',
    nameEn: 'Bifacial Solar Panel',
    model: '580-600W',
    powerRange: '580-600W',
    powerRangeEn: '580-600W',
    efficiency: '22.9%',
    efficiencyEn: '22.9%',
    image3d: '/static/picture/625.jpg',
    productId: 'p17',
  },
  {
    id: 'sp4',
    name: '双面太阳能电池板',
    nameEn: 'Bifacial Solar Panel',
    model: '695-720W',
    powerRange: '695-720W',
    powerRangeEn: '695-720W',
    efficiency: '23.5%',
    efficiencyEn: '23.5%',
    image3d: '/static/picture/625.jpg',
    productId: 'p18',
  },
  {
    id: 'sp5',
    name: '双面太阳能电池板',
    nameEn: 'Bifacial Solar Panel',
    model: '715-740W',
    powerRange: '715-740W',
    powerRangeEn: '715-740W',
    efficiency: '23.7%',
    efficiencyEn: '23.7%',
    image3d: '/static/picture/625.jpg',
    productId: 'p19',
  },
];

export function getSolarPanelComponentById(id: string): SolarPanelComponent | undefined {
  return SOLAR_PANEL_COMPONENTS.find(c => c.id === id);
}

export function getSolarPanelComponentByProductId(productId: string): SolarPanelComponent | undefined {
  return SOLAR_PANEL_COMPONENTS.find(c => c.productId === productId);
}

