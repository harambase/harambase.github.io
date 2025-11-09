// Product Specifications Data Structure
export interface SpecificationTable {
  title: string;
  parameters: Array<{
    parameter: string;
    value: string | Array<{
      parameter: string;
      value: string;
    }>;
  }>;
  columns?: string[];
  multiColumn?: boolean;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductSpecifications {
  mechanical?: SpecificationTable;
  packaging?: SpecificationTable;
  electrical?: {
    stc: SpecificationTable;
    bnpi: SpecificationTable;
  };
  temperature?: SpecificationTable;
  operating?: SpecificationTable;
  features?: ProductFeature[];
  notes?: string;
}

// 太阳能板 Specifications
export const SOLAR_PANEL_SPECIFICATIONS: ProductSpecifications = {
  mechanical: {
    title: "参数",
    parameters: [
      { parameter: "组件外形尺寸(长x宽x高)", value: "2465x1134x30mm" },
      { parameter: "电池片", value: "n型单晶硅" },
      { parameter: "电池片数量", value: "156 (6*26)" },
      { parameter: "边框类型", value: "银白色阳极氧化铝型材" },
      { parameter: "玻璃厚度", value: "2.0+2.0 mm" },
      { parameter: "电缆长度 (包含连接头)", value: "竖装:(+)350mm, (-)250mm; 或客制化" },
      { parameter: "电缆截面积 (IEC/UL)", value: "4mm²/12 AWG" },
      { parameter: "最大测试机械载荷", value: "5400 Pa(正面)/2400Pa(背面)" },
      { parameter: "接线器类型 (IEC/UL)", value: "HCB40(标准)/MC4-EVO2A(可选)" },
      { 
        parameter: "包装参数", 
        value: [
          { parameter: "组件重量", value: "34.7kg" },
          { parameter: "每托数量", value: "36块/托" },
          { parameter: "单托重量", value: "1304kg" },
          { parameter: "装载量 (17.5m平板车)", value: "628块/车(以合同为准)" }
        ]
      }
    ]
  },
  electrical: {
    stc: {
      title: "STC",
      multiColumn: true,
      columns: ["605W", "610W", "615W", "620W", "625W", "630W"],
      parameters: [
        { parameter: "额定峰值功率(Pmpp/Wp)", value: "605W / 610W / 615W / 620W / 625W / 630W" },
        { parameter: "额定峰值电压(Vmpp/V)", value: "41.18 / 41.31 / 41.43 / 41.56 / 41.69 / 41.82" },
        { parameter: "额定峰值电流(Impp/A)", value: "14.69 / 14.77 / 14.84 / 14.92 / 14.99 / 15.07" },
        { parameter: "开路电压(Voc/V)", value: "48.59 / 48.74 / 48.89 / 49.04 / 49.19 / 49.34" },
        { parameter: "短路电流(Isc/A)", value: "15.86 / 15.94 / 16.02 / 16.11 / 16.19 / 16.27" },
        { parameter: "组件全面积效率", value: "22.4% / 22.6% / 22.8% / 23.0% / 23.1% / 23.3%" }
      ]
    },
    bnpi: {
      title: "BNPI",
      multiColumn: true,
      columns: ["665W", "670W", "675W", "680W", "685W", "690W"],
      parameters: [
        { parameter: "额定峰值功率(Pmpp/Wp)", value: "665W / 670W / 675W / 680W / 685W / 690W" },
        { parameter: "额定峰值电压(Vmpp/V)", value: "41.00 / 41.13 / 41.25 / 41.37 / 41.49 / 41.61" },
        { parameter: "额定峰值电流(Impp/A)", value: "16.22 / 16.29 / 16.36 / 16.44 / 16.51 / 16.58" },
        { parameter: "开路电压(Voc/V)", value: "48.79 / 48.94 / 49.09 / 49.14 / 49.19 / 49.24" },
        { parameter: "短路电流(Isc/A)", value: "17.45 / 17.53 / 17.61 / 17.72 / 17.83 / 17.94" }
      ]
    }
  },
  temperature: {
    title: "温度系数",
    parameters: [
      { parameter: "额定功率温度系数 (Pmpp)", value: "-0.29%/℃" },
      { parameter: "短路电流温度系数 (Isc)", value: "+0.043%/℃" },
      { parameter: "开路电压温度系数 (Voc)", value: "-0.20%/℃" }
    ]
  },
  operating: {
    title: "工作参数",
    parameters: [
      { parameter: "最大系统电压 (IEC/UL)", value: "1500V" },
      { parameter: "双面系数 (Pmpp)", value: "80±5%" },
      { parameter: "接线盒防护等级", value: "IP:68" },
      { parameter: "最大串联保险丝额定电流", value: "30 A" }
    ]
  },
  features: [
    {
      icon: "TOPCon 4.0",
      title: "n型 TOPCon 4.0",
      description: "创新技术,综合提升产品能效"
    },
    {
      icon: "SMBB",
      title: "SMBB 设计",
      description: "增强电流收集能力,降低功率损失"
    },
    {
      icon: "温度",
      title: "更优温度系数",
      description: "低至-0.29%/℃,适应高温环境"
    },
    {
      icon: "双面",
      title: "双面发电",
      description: "更高的双面率,提升背面发电增益"
    },
    {
      icon: "认证",
      title: "认证",
      description: "IEC 61215, IEC 61730\nISO 9001:2015质量管理体系\nISO 14001:2015环境管理体系\nISO 45001:职业健康安全管理体系\nIEC/TS 62941:首家通过光伏行业质量管理体系"
    }
  ],
  notes: "产品规格书若有任何变更，恕不另行通知。请使用我司最新版本。"
};

// Steel Product Specifications
export const STEEL_SPECIFICATIONS: ProductSpecifications = {
  mechanical: {
    title: "机械参数",
    parameters: [
      { parameter: "材质", value: "Q235B热镀锌" },
      { parameter: "表面处理", value: "热镀锌" },
      { parameter: "镀锌层厚度", value: "≥85μm" },
      { parameter: "抗拉强度", value: "375-500 MPa" },
      { parameter: "屈服强度", value: "≥235 MPa" },
      { parameter: "延伸率", value: "≥26%" }
    ]
  },
  packaging: {
    title: "包装参数",
    parameters: [
      { parameter: "包装方式", value: "裸装/木箱" },
      { parameter: "交货地点", value: "成都" },
      { parameter: "服务寿命", value: "≥ 30 年" }
    ]
  }
};

// Solar Frame Specifications
export const SOLAR_FRAME_SPECIFICATIONS: ProductSpecifications = {
  mechanical: {
    title: "系统特点",
    parameters: [
      { parameter: "结构特点", value: "结构简单、无需焊接" },
      { parameter: "设计标准", value: "设计标准化，安装便捷" },
      { parameter: "地形适应", value: "适应复杂地形，组件排布灵活" },
      { parameter: "强度耐腐蚀", value: "强度高、耐腐蚀，适配多种基础形式" }
    ]
  },
  operating: {
    title: "技术参数",
    parameters: [
      { parameter: "安装地点", value: "地面/屋面" },
      { parameter: "适用组件", value: "单晶/多晶" },
      { parameter: "安装角度", value: "0°-60°" },
      { parameter: "设计风速", value: "≤ 60 m/s" },
      { parameter: "设计雪载", value: "≤ 1.6 kN/m²" },
      { parameter: "材质", value: "Q235B/6063-T5 等" }
    ]
  }
};

// Solar Panel 605-630W Specifications
export const SOLAR_PANEL_605_630_SPECIFICATIONS: ProductSpecifications = {
  mechanical: {
    title: "参数",
    parameters: [
      { parameter: "组件外形尺寸(长x宽x高)", value: "2465x1134x30mm" },
      { parameter: "电池片", value: "n型单晶硅" },
      { parameter: "电池片数量", value: "156 (6*26)" },
      { parameter: "边框类型", value: "银白色阳极氧化铝型材" },
      { parameter: "玻璃厚度", value: "2.0+2.0 mm" },
      { parameter: "电缆长度 (包含连接头)", value: "竖装:(+)350mm, (-)250mm; 或客制化" },
      { parameter: "电缆截面积 (IEC/UL)", value: "4mm²/12 AWG" },
      { parameter: "最大测试机械载荷", value: "5400 Pa(正面)/2400Pa(背面)" },
      { parameter: "接线器类型 (IEC/UL)", value: "HCB40(标准)/MC4-EVO2A(可选)" },
      { 
        parameter: "包装参数", 
        value: [
          { parameter: "组件重量", value: "34.7kg" },
          { parameter: "每托数量", value: "36块/托" },
          { parameter: "单托重量", value: "1304kg" },
          { parameter: "装载量 (17.5m平板车)", value: "628块/车(以合同为准)" }
        ]
      }
    ]
  },
  electrical: {
    stc: {
      title: "STC",
      multiColumn: true,
      columns: ["605W", "610W", "615W", "620W", "625W", "630W"],
      parameters: [
        { parameter: "额定峰值功率(Pmpp/Wp)", value: "605W / 610W / 615W / 620W / 625W / 630W" },
        { parameter: "额定峰值电压(Vmpp/V)", value: "41.18 / 41.31 / 41.43 / 41.56 / 41.69 / 41.82" },
        { parameter: "额定峰值电流(Impp/A)", value: "14.69 / 14.77 / 14.84 / 14.92 / 14.99 / 15.07" },
        { parameter: "开路电压(Voc/V)", value: "48.59 / 48.74 / 48.89 / 49.04 / 49.19 / 49.34" },
        { parameter: "短路电流(Isc/A)", value: "15.86 / 15.94 / 16.02 / 16.11 / 16.19 / 16.27" },
        { parameter: "组件全面积效率", value: "22.4% / 22.6% / 22.8% / 23.0% / 23.1% / 23.3%" }
      ]
    },
    bnpi: {
      title: "BNPI",
      multiColumn: true,
      columns: ["665W", "670W", "675W", "680W", "685W", "690W"],
      parameters: [
        { parameter: "额定峰值功率(Pmpp/Wp)", value: "665W / 670W / 675W / 680W / 685W / 690W" },
        { parameter: "额定峰值电压(Vmpp/V)", value: "41.00 / 41.13 / 41.25 / 41.37 / 41.49 / 41.61" },
        { parameter: "额定峰值电流(Impp/A)", value: "16.22 / 16.29 / 16.36 / 16.44 / 16.51 / 16.58" },
        { parameter: "开路电压(Voc/V)", value: "48.79 / 48.94 / 49.09 / 49.14 / 49.19 / 49.24" },
        { parameter: "短路电流(Isc/A)", value: "17.45 / 17.53 / 17.61 / 17.72 / 17.83 / 17.94" }
      ]
    }
  },
  temperature: {
    title: "温度系数",
    parameters: [
      { parameter: "额定功率温度系数 (Pmpp)", value: "-0.29%/℃" },
      { parameter: "短路电流温度系数 (Isc)", value: "+0.043%/℃" },
      { parameter: "开路电压温度系数 (Voc)", value: "-0.20%/℃" }
    ]
  },
  operating: {
    title: "工作参数",
    parameters: [
      { parameter: "最大系统电压 (IEC/UL)", value: "1500V" },
      { parameter: "双面系数 (Pmpp)", value: "80±5%" },
      { parameter: "接线盒防护等级", value: "IP:68" },
      { parameter: "最大串联保险丝额定电流", value: "30 A" }
    ]
  },
  features: [
    {
      icon: "TOPCon 4.0",
      title: "n型 TOPCon 4.0",
      description: "创新技术,综合提升产品能效"
    },
    {
      icon: "SMBB",
      title: "SMBB 设计",
      description: "增强电流收集能力,降低功率损失"
    },
    {
      icon: "温度",
      title: "更优温度系数",
      description: "低至-0.29%/℃,适应高温环境"
    },
    {
      icon: "双面",
      title: "双面发电",
      description: "更高的双面率,提升背面发电增益"
    },
    {
      icon: "认证",
      title: "认证",
      description: "IEC 61215, IEC 61730\nISO 9001:2015质量管理体系\nISO 14001:2015环境管理体系\nISO 45001:职业健康安全管理体系\nIEC/TS 62941:首家通过光伏行业质量管理体系"
    }
  ],
  notes: "产品规格书若有任何变更，恕不另行通知。请使用我司最新版本。"
};

// Solar Panel 580-600W Specifications
export const SOLAR_PANEL_580_600_SPECIFICATIONS: ProductSpecifications = {
  mechanical: {
    title: "参数",
    parameters: [
      { parameter: "组件外形尺寸(长x宽x高)", value: "2465x1134x30mm" },
      { parameter: "电池片", value: "n型单晶硅" },
      { parameter: "电池片数量", value: "156 (6*26)" },
      { parameter: "边框类型", value: "银白色阳极氧化铝型材" },
      { parameter: "玻璃厚度", value: "2.0+2.0 mm" },
      { parameter: "电缆长度 (包含连接头)", value: "竖装:(+)350mm, (-)250mm; 或客制化" },
      { parameter: "电缆截面积 (IEC/UL)", value: "4mm²/12 AWG" },
      { parameter: "最大测试机械载荷", value: "5400 Pa(正面)/2400Pa(背面)" },
      { parameter: "接线器类型 (IEC/UL)", value: "HCB40(标准)/MC4-EVO2A(可选)" },
      { 
        parameter: "包装参数", 
        value: [
          { parameter: "组件重量", value: "34.7kg" },
          { parameter: "每托数量", value: "36块/托" },
          { parameter: "单托重量", value: "1304kg" },
          { parameter: "装载量 (17.5m平板车)", value: "628块/车(以合同为准)" }
        ]
      }
    ]
  },
  electrical: {
    stc: {
      title: "STC",
      multiColumn: true,
      columns: ["580W", "585W", "590W", "595W", "600W"],
      parameters: [
        { parameter: "额定峰值功率(Pmpp/Wp)", value: "580W / 585W / 590W / 595W / 600W" },
        { parameter: "额定峰值电压(Vmpp/V)", value: "40.85 / 40.95 / 41.05 / 41.15 / 41.25" },
        { parameter: "额定峰值电流(Impp/A)", value: "14.20 / 14.28 / 14.36 / 14.44 / 14.52" },
        { parameter: "开路电压(Voc/V)", value: "48.20 / 48.35 / 48.50 / 48.65 / 48.80" },
        { parameter: "短路电流(Isc/A)", value: "15.30 / 15.38 / 15.46 / 15.54 / 15.62" },
        { parameter: "组件全面积效率", value: "21.5% / 21.7% / 21.9% / 22.1% / 22.3%" }
      ]
    },
    bnpi: {
      title: "BNPI",
      multiColumn: true,
      columns: ["640W", "645W", "650W", "655W", "660W"],
      parameters: [
        { parameter: "额定峰值功率(Pmpp/Wp)", value: "640W / 645W / 650W / 655W / 660W" },
        { parameter: "额定峰值电压(Vmpp/V)", value: "40.70 / 40.80 / 40.90 / 41.00 / 41.10" },
        { parameter: "额定峰值电流(Impp/A)", value: "15.72 / 15.80 / 15.88 / 15.96 / 16.04" },
        { parameter: "开路电压(Voc/V)", value: "48.40 / 48.55 / 48.70 / 48.75 / 48.80" },
        { parameter: "短路电流(Isc/A)", value: "16.85 / 16.93 / 17.01 / 17.12 / 17.23" }
      ]
    }
  },
  temperature: {
    title: "温度系数",
    parameters: [
      { parameter: "额定功率温度系数 (Pmpp)", value: "-0.29%/℃" },
      { parameter: "短路电流温度系数 (Isc)", value: "+0.043%/℃" },
      { parameter: "开路电压温度系数 (Voc)", value: "-0.20%/℃" }
    ]
  },
  operating: {
    title: "工作参数",
    parameters: [
      { parameter: "最大系统电压 (IEC/UL)", value: "1500V" },
      { parameter: "双面系数 (Pmpp)", value: "80±5%" },
      { parameter: "接线盒防护等级", value: "IP:68" },
      { parameter: "最大串联保险丝额定电流", value: "30 A" }
    ]
  },
  features: [
    {
      icon: "TOPCon 4.0",
      title: "n型 TOPCon 4.0",
      description: "创新技术,综合提升产品能效"
    },
    {
      icon: "SMBB",
      title: "SMBB 设计",
      description: "增强电流收集能力,降低功率损失"
    },
    {
      icon: "温度",
      title: "更优温度系数",
      description: "低至-0.29%/℃,适应高温环境"
    },
    {
      icon: "双面",
      title: "双面发电",
      description: "更高的双面率,提升背面发电增益"
    },
    {
      icon: "认证",
      title: "认证",
      description: "IEC 61215, IEC 61730\nISO 9001:2015质量管理体系\nISO 14001:2015环境管理体系\nISO 45001:职业健康安全管理体系\nIEC/TS 62941:首家通过光伏行业质量管理体系"
    }
  ],
  notes: "产品规格书若有任何变更，恕不另行通知。请使用我司最新版本。"
};

// Solar Panel 695-720W Specifications
export const SOLAR_PANEL_695_720_SPECIFICATIONS: ProductSpecifications = {
  mechanical: {
    title: "参数",
    parameters: [
      { parameter: "组件外形尺寸(长x宽x高)", value: "2465x1134x30mm" },
      { parameter: "电池片", value: "n型单晶硅" },
      { parameter: "电池片数量", value: "156 (6*26)" },
      { parameter: "边框类型", value: "银白色阳极氧化铝型材" },
      { parameter: "玻璃厚度", value: "2.0+2.0 mm" },
      { parameter: "电缆长度 (包含连接头)", value: "竖装:(+)350mm, (-)250mm; 或客制化" },
      { parameter: "电缆截面积 (IEC/UL)", value: "4mm²/12 AWG" },
      { parameter: "最大测试机械载荷", value: "5400 Pa(正面)/2400Pa(背面)" },
      { parameter: "接线器类型 (IEC/UL)", value: "HCB40(标准)/MC4-EVO2A(可选)" },
      { 
        parameter: "包装参数", 
        value: [
          { parameter: "组件重量", value: "34.7kg" },
          { parameter: "每托数量", value: "36块/托" },
          { parameter: "单托重量", value: "1304kg" },
          { parameter: "装载量 (17.5m平板车)", value: "628块/车(以合同为准)" }
        ]
      }
    ]
  },
  electrical: {
    stc: {
      title: "STC",
      multiColumn: true,
      columns: ["695W", "700W", "705W", "710W", "715W", "720W"],
      parameters: [
        { parameter: "额定峰值功率(Pmpp/Wp)", value: "695W / 700W / 705W / 710W / 715W / 720W" },
        { parameter: "额定峰值电压(Vmpp/V)", value: "42.15 / 42.28 / 42.41 / 42.54 / 42.67 / 42.80" },
        { parameter: "额定峰值电流(Impp/A)", value: "16.48 / 16.55 / 16.62 / 16.69 / 16.76 / 16.83" },
        { parameter: "开路电压(Voc/V)", value: "49.75 / 49.90 / 50.05 / 50.20 / 50.35 / 50.50" },
        { parameter: "短路电流(Isc/A)", value: "17.80 / 17.88 / 17.96 / 18.04 / 18.12 / 18.20" },
        { parameter: "组件全面积效率", value: "25.7% / 25.9% / 26.1% / 26.3% / 26.5% / 26.7%" }
      ]
    },
    bnpi: {
      title: "BNPI",
      multiColumn: true,
      columns: ["755W", "760W", "765W", "770W", "775W", "780W"],
      parameters: [
        { parameter: "额定峰值功率(Pmpp/Wp)", value: "755W / 760W / 765W / 770W / 775W / 780W" },
        { parameter: "额定峰值电压(Vmpp/V)", value: "41.95 / 42.08 / 42.21 / 42.34 / 42.47 / 42.60" },
        { parameter: "额定峰值电流(Impp/A)", value: "18.00 / 18.07 / 18.14 / 18.21 / 18.28 / 18.35" },
        { parameter: "开路电压(Voc/V)", value: "49.95 / 50.10 / 50.25 / 50.30 / 50.35 / 50.40" },
        { parameter: "短路电流(Isc/A)", value: "19.15 / 19.23 / 19.31 / 19.42 / 19.53 / 19.64" }
      ]
    }
  },
  temperature: {
    title: "温度系数",
    parameters: [
      { parameter: "额定功率温度系数 (Pmpp)", value: "-0.29%/℃" },
      { parameter: "短路电流温度系数 (Isc)", value: "+0.043%/℃" },
      { parameter: "开路电压温度系数 (Voc)", value: "-0.20%/℃" }
    ]
  },
  operating: {
    title: "工作参数",
    parameters: [
      { parameter: "最大系统电压 (IEC/UL)", value: "1500V" },
      { parameter: "双面系数 (Pmpp)", value: "80±5%" },
      { parameter: "接线盒防护等级", value: "IP:68" },
      { parameter: "最大串联保险丝额定电流", value: "30 A" }
    ]
  },
  features: [
    {
      icon: "TOPCon 4.0",
      title: "n型 TOPCon 4.0",
      description: "创新技术,综合提升产品能效"
    },
    {
      icon: "SMBB",
      title: "SMBB 设计",
      description: "增强电流收集能力,降低功率损失"
    },
    {
      icon: "温度",
      title: "更优温度系数",
      description: "低至-0.29%/℃,适应高温环境"
    },
    {
      icon: "双面",
      title: "双面发电",
      description: "更高的双面率,提升背面发电增益"
    },
    {
      icon: "认证",
      title: "认证",
      description: "IEC 61215, IEC 61730\nISO 9001:2015质量管理体系\nISO 14001:2015环境管理体系\nISO 45001:职业健康安全管理体系\nIEC/TS 62941:首家通过光伏行业质量管理体系"
    }
  ],
  notes: "产品规格书若有任何变更，恕不另行通知。请使用我司最新版本。"
};

// Solar Panel 715-740W Specifications
export const SOLAR_PANEL_715_740_SPECIFICATIONS: ProductSpecifications = {
  mechanical: {
    title: "参数",
    parameters: [
      { parameter: "组件外形尺寸(长x宽x高)", value: "2465x1134x30mm" },
      { parameter: "电池片", value: "n型单晶硅" },
      { parameter: "电池片数量", value: "156 (6*26)" },
      { parameter: "边框类型", value: "银白色阳极氧化铝型材" },
      { parameter: "玻璃厚度", value: "2.0+2.0 mm" },
      { parameter: "电缆长度 (包含连接头)", value: "竖装:(+)350mm, (-)250mm; 或客制化" },
      { parameter: "电缆截面积 (IEC/UL)", value: "4mm²/12 AWG" },
      { parameter: "最大测试机械载荷", value: "5400 Pa(正面)/2400Pa(背面)" },
      { parameter: "接线器类型 (IEC/UL)", value: "HCB40(标准)/MC4-EVO2A(可选)" },
      { 
        parameter: "包装参数", 
        value: [
          { parameter: "组件重量", value: "34.7kg" },
          { parameter: "每托数量", value: "36块/托" },
          { parameter: "单托重量", value: "1304kg" },
          { parameter: "装载量 (17.5m平板车)", value: "628块/车(以合同为准)" }
        ]
      }
    ]
  },
  electrical: {
    stc: {
      title: "STC",
      multiColumn: true,
      columns: ["715W", "720W", "725W", "730W", "735W", "740W"],
      parameters: [
        { parameter: "额定峰值功率(Pmpp/Wp)", value: "715W / 720W / 725W / 730W / 735W / 740W" },
        { parameter: "额定峰值电压(Vmpp/V)", value: "42.67 / 42.80 / 42.93 / 43.06 / 43.19 / 43.32" },
        { parameter: "额定峰值电流(Impp/A)", value: "16.76 / 16.83 / 16.90 / 16.97 / 17.04 / 17.11" },
        { parameter: "开路电压(Voc/V)", value: "50.35 / 50.50 / 50.65 / 50.80 / 50.95 / 51.10" },
        { parameter: "短路电流(Isc/A)", value: "18.12 / 18.20 / 18.28 / 18.36 / 18.44 / 18.52" },
        { parameter: "组件全面积效率", value: "26.5% / 26.7% / 26.9% / 27.1% / 27.3% / 27.5%" }
      ]
    },
    bnpi: {
      title: "BNPI",
      multiColumn: true,
      columns: ["775W", "780W", "785W", "790W", "795W", "800W"],
      parameters: [
        { parameter: "额定峰值功率(Pmpp/Wp)", value: "775W / 780W / 785W / 790W / 795W / 800W" },
        { parameter: "额定峰值电压(Vmpp/V)", value: "42.47 / 42.60 / 42.73 / 42.86 / 42.99 / 43.12" },
        { parameter: "额定峰值电流(Impp/A)", value: "18.28 / 18.35 / 18.42 / 18.49 / 18.56 / 18.63" },
        { parameter: "开路电压(Voc/V)", value: "50.35 / 50.40 / 50.45 / 50.50 / 50.55 / 50.60" },
        { parameter: "短路电流(Isc/A)", value: "19.53 / 19.64 / 19.75 / 19.86 / 19.97 / 20.08" }
      ]
    }
  },
  temperature: {
    title: "温度系数",
    parameters: [
      { parameter: "额定功率温度系数 (Pmpp)", value: "-0.29%/℃" },
      { parameter: "短路电流温度系数 (Isc)", value: "+0.043%/℃" },
      { parameter: "开路电压温度系数 (Voc)", value: "-0.20%/℃" }
    ]
  },
  operating: {
    title: "工作参数",
    parameters: [
      { parameter: "最大系统电压 (IEC/UL)", value: "1500V" },
      { parameter: "双面系数 (Pmpp)", value: "80±5%" },
      { parameter: "接线盒防护等级", value: "IP:68" },
      { parameter: "最大串联保险丝额定电流", value: "30 A" }
    ]
  },
  features: [
    {
      icon: "TOPCon 4.0",
      title: "n型 TOPCon 4.0",
      description: "创新技术,综合提升产品能效"
    },
    {
      icon: "SMBB",
      title: "SMBB 设计",
      description: "增强电流收集能力,降低功率损失"
    },
    {
      icon: "温度",
      title: "更优温度系数",
      description: "低至-0.29%/℃,适应高温环境"
    },
    {
      icon: "双面",
      title: "双面发电",
      description: "更高的双面率,提升背面发电增益"
    },
    {
      icon: "认证",
      title: "认证",
      description: "IEC 61215, IEC 61730\nISO 9001:2015质量管理体系\nISO 14001:2015环境管理体系\nISO 45001:职业健康安全管理体系\nIEC/TS 62941:首家通过光伏行业质量管理体系"
    }
  ],
  notes: "产品规格书若有任何变更，恕不另行通知。请使用我司最新版本。"
};

// Product Specifications Mapping
export const PRODUCT_SPECIFICATIONS: Record<string, ProductSpecifications> = {
  'Solar Frame': SOLAR_FRAME_SPECIFICATIONS,
  '太阳能板': SOLAR_PANEL_SPECIFICATIONS,
  'Steel': STEEL_SPECIFICATIONS,
};

// Product ID to Specifications Mapping
const PRODUCT_ID_SPECIFICATIONS: Record<string, ProductSpecifications> = {
  'p15': SOLAR_PANEL_SPECIFICATIONS, // 625-650W (original)
  'p16': SOLAR_PANEL_605_630_SPECIFICATIONS, // 605-630W
  'p17': SOLAR_PANEL_580_600_SPECIFICATIONS, // 580-600W
  'p18': SOLAR_PANEL_695_720_SPECIFICATIONS, // 695-720W
  'p19': SOLAR_PANEL_715_740_SPECIFICATIONS, // 715-740W
};

// Helper function to get specifications by product category
export function getProductSpecifications(category: string): ProductSpecifications | undefined {
  return PRODUCT_SPECIFICATIONS[category];
}

// Helper function to get specifications by product ID
export function getProductSpecificationsById(productId: string): ProductSpecifications | undefined {
  return PRODUCT_ID_SPECIFICATIONS[productId];
}
