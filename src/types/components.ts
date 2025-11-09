export type Component = {
  id: string;
  name: string;
  nameEn: string;
  model: string;
  material: string;
  materialEn: string;
  surfaceTreatment: string;
  surfaceTreatmentEn: string;
  image3d: string;
};

export const COMPONENTS: Component[] = [
  {
    id: 'c1',
    name: '铝合金导轨',
    nameEn: 'aluminum alloy guide rail',
    model: 'CDC-007',
    material: 'AL6005-T5',
    materialEn: 'AL6005-T5',
    surfaceTreatment: '阳极氧化',
    surfaceTreatmentEn: 'anodic oxidation',
    image3d: '/static/picture/component/CDC007.png',
  },
  {
    id: 'c2',
    name: '铝合金导轨',
    nameEn: 'aluminum alloy guide rail',
    model: 'CDC-008',
    material: 'AL6005-T5',
    materialEn: 'AL6005-T5',
    surfaceTreatment: '阳极氧化',
    surfaceTreatmentEn: 'anodic oxidation',
    image3d: '/static/picture/component/CDC008.png',
  },
  {
    id: 'c3',
    name: '横梁',
    nameEn: 'beam',
    model: 'CDF-001',
    material: 'Q235B',
    materialEn: 'Q235B',
    surfaceTreatment: '热镀锌',
    surfaceTreatmentEn: 'hot dip galvanizing',
    image3d: '/static/picture/component/CDF001.png',
  },
  {
    id: 'c4',
    name: '斜撑',
    nameEn: 'diagonal brace',
    model: 'CDF-002',
    material: 'Q235B',
    materialEn: 'Q235B',
    surfaceTreatment: '热镀锌',
    surfaceTreatmentEn: 'hot dip galvanizing',
    image3d: '/static/picture/component/CDF002.png',

  },
  {
    id: 'c5',
    name: '斜梁',
    nameEn: 'inclined beam',
    model: 'CDF-003',
    material: 'Q235B',
    materialEn: 'Q235B',
    surfaceTreatment: '热镀锌',
    surfaceTreatmentEn: 'hot dip galvanizing',
    image3d: '/static/picture/component/CDF003.png',
  },
];

export function getComponentById(id: string): Component | undefined {
  return COMPONENTS.find(c => c.id === id);
}

