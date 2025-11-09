export type SteelComponent = {
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

export const STEEL_COMPONENTS: SteelComponent[] = [
  {
    id: 's1',
    name: '热镀锌扁钢',
    nameEn: 'hot dip galvanized flat steel',
    model: 'Q235B',
    material: 'Q235B',
    materialEn: 'Q235B',
    surfaceTreatment: '热镀锌',
    surfaceTreatmentEn: 'hot dip galvanizing',
    image3d: '/static/picture/steel/flat-3d.png',
  },
  {
    id: 's2',
    name: '热镀锌角钢',
    nameEn: 'hot dip galvanized angle steel',
    model: 'Q235B',
    material: 'Q235B',
    materialEn: 'Q235B',
    surfaceTreatment: '热镀锌',
    surfaceTreatmentEn: 'hot dip galvanizing',
    image3d: '/static/picture/steel/angle-3d.png',
  },
  {
    id: 's3',
    name: '热镀锌圆钢',
    nameEn: 'hot dip galvanized round steel',
    model: 'Q235B',
    material: 'Q235B',
    materialEn: 'Q235B',
    surfaceTreatment: '热镀锌',
    surfaceTreatmentEn: 'hot dip galvanizing',
    image3d: '/static/picture/steel/round-3d.png',
  },
  {
    id: 's4',
    name: '热镀锌槽钢',
    nameEn: 'hot dip galvanized channel steel',
    model: 'Q235B',
    material: 'Q235B',
    materialEn: 'Q235B',
    surfaceTreatment: '热镀锌',
    surfaceTreatmentEn: 'hot dip galvanizing',
    image3d: '/static/picture/steel/channel-3d.png',
  },
  {
    id: 's5',
    name: '热镀锌工字钢',
    nameEn: 'hot dip galvanized I-beam',
    model: 'Q235B',
    material: 'Q235B',
    materialEn: 'Q235B',
    surfaceTreatment: '热镀锌',
    surfaceTreatmentEn: 'hot dip galvanizing',
    image3d: '/static/picture/steel/ibeam-3d.png',
  },
  {
    id: 's6',
    name: '热镀锌H型钢',
    nameEn: 'hot dip galvanized H-beam',
    model: 'Q235B',
    material: 'Q235B',
    materialEn: 'Q235B',
    surfaceTreatment: '热镀锌',
    surfaceTreatmentEn: 'hot dip galvanizing',
    image3d: '/static/picture/steel/hbeam-3d.png',
  },
];

export function getSteelComponentById(id: string): SteelComponent | undefined {
  return STEEL_COMPONENTS.find(c => c.id === id);
}

