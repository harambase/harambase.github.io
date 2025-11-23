import { Product, SteelProduct, StationFrameProduct, MountingPartProduct } from './types';

export const products: Product[] = [
  {
    id: "mono-x-635",
    name: "ASTRO N5s",
    series: "CHSM72N(DG)/F-BH",
    category: "Monocrystalline",
    efficiency: "23.3%",
    wattage_range: "625~650W",
    description: "N-type TOPCon Bifacial Double Glass Module. High efficiency and durability for utility-scale projects.",
    image: "/api/placeholder/400/800",
    specs: {
      dimensions: "2278 x 1134 x 30 mm",
      weight: "32.1 kg",
      cell_type: "n-type monocrystalline",
      no_of_cells: "144 (6x24)",
      front_glass: "2.0mm, Anti-Reflection Coating",
      frame: "Anodized Aluminum Alloy",
      junction_box: "IP68, 3 Diodes",
      output_cables: "4.0mm², (+)350mm, (-)250mm (Customizable)"
    },
    electrical_stc: {
      max_power_pmax: [625, 630, 635, 640, 645, 650],
      voltage_at_max_power_vmpp: [47.33, 47.51, 47.68, 47.86, 48.03, 48.20],
      current_at_max_power_impp: [13.20, 13.26, 13.32, 13.37, 13.43, 13.48],
      open_circuit_voltage_voc: [56.28, 56.46, 56.68, 56.88, 57.08, 57.28],
      short_circuit_current_isc: [13.96, 14.02, 14.08, 14.14, 14.20, 14.26],
      module_efficiency: ["22.4%", "22.5%", "22.7%", "22.9%", "23.1%", "23.3%"]
    },
    electrical_bnpi: {
      max_power_pmax: [685, 690, 695, 700, 705, 710],
      voltage_at_max_power_vmpp: [47.42, 47.56, 47.74, 47.89, 48.05, 48.20],
      current_at_max_power_impp: [14.44, 14.50, 14.56, 14.62, 14.67, 14.73],
      open_circuit_voltage_voc: [56.45, 56.64, 56.82, 57.00, 57.17, 57.35],
      short_circuit_current_isc: [15.34, 15.39, 15.45, 15.51, 15.57, 15.63]
    },
    temp_coefficients: {
      pmax: "-0.29%/°C",
      voc: "-0.25%/°C",
      isc: "+0.043%/°C",
      noct: "45±2°C"
    },
    operating_params: {
      operating_temp: "-40°C ~ +85°C",
      max_system_voltage: "1500VDC (IEC/UL)",
      max_series_fuse: "30A",
      power_tolerance: "0~+3%"
    }
  },
  {
    id: "mono-p-450",
    name: "ASTRO 5s",
    series: "CHSM54M-HC",
    category: "Monocrystalline",
    efficiency: "21.5%",
    wattage_range: "440~460W",
    description: "Small form factor PERC module, ideal for residential rooftops.",
    image: "/api/placeholder/400/800",
    specs: {
      dimensions: "1722 x 1134 x 30 mm",
      weight: "21.5 kg",
      cell_type: "p-type monocrystalline",
      no_of_cells: "108 (6x18)",
      front_glass: "3.2mm Tempered",
      frame: "Black Anodized Aluminum",
      junction_box: "IP68",
      output_cables: "4.0mm², 1200mm"
    },
    electrical_stc: {
      max_power_pmax: [440, 445, 450, 455, 460],
      voltage_at_max_power_vmpp: [31.2, 31.4, 31.6, 31.8, 32.0],
      current_at_max_power_impp: [14.10, 14.17, 14.24, 14.31, 14.38],
      open_circuit_voltage_voc: [37.4, 37.6, 37.8, 38.0, 38.2],
      short_circuit_current_isc: [14.85, 14.92, 14.99, 15.06, 15.13],
      module_efficiency: ["20.8%", "21.0%", "21.3%", "21.5%", "21.7%"]
    },
    electrical_bnpi: {
      max_power_pmax: [0],
      voltage_at_max_power_vmpp: [0],
      current_at_max_power_impp: [0],
      open_circuit_voltage_voc: [0],
      short_circuit_current_isc: [0]
    },
    temp_coefficients: {
      pmax: "-0.34%/°C",
      voc: "-0.28%/°C",
      isc: "+0.05%/°C",
      noct: "45±2°C"
    },
    operating_params: {
      operating_temp: "-40°C ~ +85°C",
      max_system_voltage: "1000/1500VDC",
      max_series_fuse: "25A",
      power_tolerance: "0~+5W"
    }
  },
  {
    id: "bifacial-700",
    name: "ASTRO N7",
    series: "CHSM66N(DG)/F-BH",
    category: "Bifacial",
    efficiency: "22.8%",
    wattage_range: "680~700W",
    description: "Ultra-high power module for large scale ground-mounted stations.",
    image: "/api/placeholder/400/800",
    specs: {
      dimensions: "2384 x 1303 x 33 mm",
      weight: "38.5 kg",
      cell_type: "n-type monocrystalline",
      no_of_cells: "132 (6x22)",
      front_glass: "2.0mm + 2.0mm",
      frame: "Anodized Aluminum",
      junction_box: "IP68, Split Type",
      output_cables: "4.0mm², 300mm"
    },
    electrical_stc: {
      max_power_pmax: [680, 685, 690, 695, 700],
      voltage_at_max_power_vmpp: [48.6, 48.8, 49.0, 49.2, 49.4],
      current_at_max_power_impp: [14.00, 14.04, 14.08, 14.13, 14.17],
      open_circuit_voltage_voc: [58.8, 59.0, 59.2, 59.4, 59.6],
      short_circuit_current_isc: [14.75, 14.80, 14.85, 14.90, 14.95],
      module_efficiency: ["22.0%", "22.2%", "22.4%", "22.6%", "22.8%"]
    },
    electrical_bnpi: {
      max_power_pmax: [748, 754, 759, 765, 770],
      voltage_at_max_power_vmpp: [48.6, 48.8, 49.0, 49.2, 49.4],
      current_at_max_power_impp: [15.40, 15.44, 15.49, 15.54, 15.59],
      open_circuit_voltage_voc: [58.8, 59.0, 59.2, 59.4, 59.6],
      short_circuit_current_isc: [16.23, 16.28, 16.34, 16.39, 16.45]
    },
    temp_coefficients: {
      pmax: "-0.30%/°C",
      voc: "-0.26%/°C",
      isc: "+0.045%/°C",
      noct: "44±2°C"
    },
    operating_params: {
      operating_temp: "-40°C ~ +85°C",
      max_system_voltage: "1500VDC",
      max_series_fuse: "35A",
      power_tolerance: "0~+3%"
    }
  }
]

export const steelProducts: SteelProduct[] = [
  {
    id: "carbon-steel-plate",
    name: "Carbon Steel Plate",
    category: "Carbon Steel",
    description: "General purpose structural steel plate used in construction and manufacturing.",
    image: "/api/placeholder/400/300",
    grades: [
      {
        china_gb: { grade: "Q235-F" },
        japan_jis: { grade: "SS41", standard_no: "G3101" },
        usa_astm: { grade: "A36" },
        germany_din: { grade: "USt37-2", material_no: "1.0112", standard_no: "DIN17100" }
      },
      {
        china_gb: { grade: "Q235" },
        japan_jis: { grade: "SS41", standard_no: "G3101" },
        usa_astm: { grade: "A283-C" },
        germany_din: { grade: "RSt37-2", material_no: "1.0114", standard_no: "DIN17100" }
      },
      {
        china_gb: { grade: "Q255A" },
        japan_jis: { grade: "SS50", standard_no: "G3101" },
        usa_astm: { grade: "A283-D" },
        germany_din: { grade: "(RSt42-2)", material_no: "1.0134", standard_no: "DIN17100" }
      },
      {
        china_gb: { grade: "(A3R)" },
        japan_jis: { grade: "SPV24", standard_no: "G3115" },
        usa_astm: { grade: "A285-C" },
        germany_din: { grade: "", material_no: "", standard_no: "" }
      },
      {
        china_gb: { grade: "20g" },
        japan_jis: { grade: "SB42", standard_no: "G3103" },
        usa_astm: { grade: "A515. Cr60" },
        germany_din: { grade: "H II", material_no: "1.0425", standard_no: "DIN17155" }
      },
       {
        china_gb: { grade: "(15g)" },
        japan_jis: { grade: "SB35", standard_no: "G3103" },
        usa_astm: { grade: "A515. Cr55" },
        germany_din: { grade: "H I", material_no: "1.0345", standard_no: "DIN17155" }
      },
      {
        china_gb: { grade: "(25g)" },
        japan_jis: { grade: "SB46", standard_no: "G3103" },
        usa_astm: { grade: "A515. Cr65" },
        germany_din: { grade: "H III", material_no: "1.0435", standard_no: "DIN17155" }
      },
      {
         china_gb: { grade: "25" },
         japan_jis: { grade: "SM41A", standard_no: "G3103" },
         usa_astm: { grade: "" },
         germany_din: { grade: "", material_no: "", standard_no: "DIN17100" }
       }
    ]
  },
  {
    id: "low-alloy-steel",
    name: "Low Alloy Steel Plate",
    category: "Low Alloy",
    description: "High strength low alloy steel for heavy machinery and pressure vessels.",
    image: "/api/placeholder/400/300",
    grades: [
      {
        china_gb: { grade: "16Mn" },
        japan_jis: { grade: "SM50-B.C", standard_no: "G3106" },
        usa_astm: { grade: "" },
        germany_din: { grade: "St52-3", material_no: "1.0841", standard_no: "DIN17155" }
      },
      {
        china_gb: { grade: "16MnR" },
        japan_jis: { grade: "SM41B", standard_no: "G3106" },
        usa_astm: { grade: "A299/A537-I.II" },
        germany_din: { grade: "17Mn4", material_no: "1.0841", standard_no: "" }
      },
      {
        china_gb: { grade: "16MngC" },
        japan_jis: { grade: "SPV36", standard_no: "G3115" },
        usa_astm: { grade: "" },
        germany_din: { grade: "St52-3", material_no: "", standard_no: "" }
      }
    ]
  },
  {
      id: "heat-resistant-steel",
      name: "Heat Resistant Steel",
      category: "Heat Resistant",
      description: "Steel plates designed for high-temperature environments and boilers.",
      image: "/api/placeholder/400/300",
      grades: [
          {
              china_gb: { grade: "16Mo" },
              japan_jis: { grade: "SB46M", standard_no: "G3103" },
              usa_astm: { grade: "A204-Gr A.B" },
              germany_din: { grade: "15 Mo3", material_no: "1.5414", standard_no: "DIN17155" }
          },
          {
              china_gb: { grade: "12CrMo" },
              japan_jis: { grade: "SCMV1", standard_no: "G4109" },
              usa_astm: { grade: "A387-Gr. 2" },
              germany_din: { grade: "", material_no: "", standard_no: "" }
          },
           {
              china_gb: { grade: "15CrMo" },
              japan_jis: { grade: "SCMV2", standard_no: "G4109" },
              usa_astm: { grade: "A387-Gr. 12" },
              germany_din: { grade: "13 CrMo44", material_no: "1.7335", standard_no: "DIN17155" }
          }
      ]
  },
   {
      id: "low-temp-steel",
      name: "Low Temperature Steel",
      category: "Low Temp",
      description: "Steel grades specifically designed for cryogenic and low-temperature service.",
      image: "/api/placeholder/400/300",
      grades: [
          {
              china_gb: { grade: "16MnR" },
              japan_jis: { grade: "SLA24B", standard_no: "G3126" },
              usa_astm: { grade: "A516-Gr55" },
              germany_din: { grade: "TTSTE26", material_no: "1.0463", standard_no: "SEW089" }
          },
          {
              china_gb: { grade: "15MnVR" },
              japan_jis: { grade: "SLA33A", standard_no: "" },
              usa_astm: { grade: "A516-Gr60" },
              germany_din: { grade: "TTSTE29", material_no: "1.0488", standard_no: "" }
          }
      ]
  }
]

export const stationFrameProducts: StationFrameProduct[] = [
  {
    id: "ground-mount-station",
    name: "Ground Photovoltaic Power Station",
    category: "Station Frames",
    image: "/api/placeholder/800/600",
    description: "Large-scale ground mounting system designed for utility solar farms. Features robust structural integrity and rapid installation.",
    technical_params: {
      installation_location: "Photovoltaic power station (Open Ground)",
      mounting_angle: "0-45°",
      wind_load: "42m/s",
      snow_load: "1.4KN/m²",
      battery_panel_arrangement: "Horizontal or vertical",
      design_criteria: "AS/NZS1170, DIN1055, JIS C 8955:2011",
      profile_material: "AL6005-T5/AL6063-T5 (Anodized)",
      fastener_material: "304 Stainless Steel (SUS304)",
      accessory_material: "AL6005-T5/AL6063-T5 (Anodized) Aluminum Alloy",
      warranty: "10 years"
    },
    components: [
      { name: "C-Steel Profile", image: "/api/placeholder/200/200" },
      { name: "U-Steel Profile", image: "/api/placeholder/200/200" },
      { name: "Ground Screw", image: "/api/placeholder/200/200" },
      { name: "Hot-dip Galv. Bolt", image: "/api/placeholder/200/200" },
      { name: "Hot-dip Galv. Stud", image: "/api/placeholder/200/200" },
      { name: "U-Bolt", image: "/api/placeholder/200/200" },
      { name: "Hot-dip Galv. Nut", image: "/api/placeholder/200/200" },
      { name: "Tension Rod", image: "/api/placeholder/200/200" },
      { name: "Anchor Bolt", image: "/api/placeholder/200/200" }
    ]
  },
  {
    id: "roof-mount-system",
    name: "Commercial Roof Mounting System",
    category: "Station Frames",
    image: "/api/placeholder/800/600",
    description: "Versatile mounting solution for commercial and industrial rooftops. Supports various tilt angles and roof types.",
    technical_params: {
      installation_location: "Concrete / Metal Roof",
      mounting_angle: "10-30° Adjustable",
      wind_load: "60m/s",
      snow_load: "1.6KN/m²",
      battery_panel_arrangement: "Horizontal",
      design_criteria: "AS/NZS1170, Eurocode 1",
      profile_material: "AL6005-T5 (Anodized)",
      fastener_material: "SUS304",
      accessory_material: "AL6005-T5 Aluminum Alloy",
      warranty: "12 years"
    },
    components: [
      { name: "Aluminum Guide Rail", image: "/api/placeholder/200/200" },
      { name: "Triangle Connector", image: "/api/placeholder/200/200" },
      { name: "Mid Clamp", image: "/api/placeholder/200/200" },
      { name: "End Clamp", image: "/api/placeholder/200/200" }
    ]
  },
  {
    id: "carport-system",
    name: "Solar Carport Structure",
    category: "Station Frames",
    image: "/api/placeholder/800/600",
    description: "Dual-function structure providing shade for vehicles and generating clean energy. Waterproof design available.",
    technical_params: {
      installation_location: "Parking Lot",
      mounting_angle: "5-15°",
      wind_load: "38m/s",
      snow_load: "1.2KN/m²",
      battery_panel_arrangement: "Horizontal",
      design_criteria: "JIS C 8955:2011",
      profile_material: "High Strength Aluminum Alloy",
      fastener_material: "SUS304",
      accessory_material: "EPDM Rubber Waterproofing",
      warranty: "10 years"
    },
    components: [
      { name: "Heavy Duty Beam", image: "/api/placeholder/200/200" },
      { name: "Support Column", image: "/api/placeholder/200/200" },
      { name: "Waterproof Rail", image: "/api/placeholder/200/200" }
    ]
  }
]

export const mountingPartProducts: MountingPartProduct[] = [
  {
    id: "alu-guide-rail-007",
    name: "Aluminum Alloy Guide Rail",
    category: "Mounting Accessories",
    image: "/api/placeholder/300/200",
    model: "CDC-007",
    material: "AL6005-T5",
    surface_treatment: "Anodic Oxidation"
  },
  {
    id: "alu-guide-rail-008",
    name: "Aluminum Alloy Guide Rail (Heavy)",
    category: "Mounting Accessories",
    image: "/api/placeholder/300/200",
    model: "CDC-008",
    material: "AL6005-T5",
    surface_treatment: "Anodic Oxidation"
  },
  {
    id: "steel-beam-001",
    name: "C-Steel Beam",
    category: "Mounting Accessories",
    image: "/api/placeholder/300/200",
    model: "CDF-001",
    material: "Q235B",
    surface_treatment: "Hot Dip Galvanizing"
  },
  {
    id: "diagonal-brace-002",
    name: "Diagonal Brace",
    category: "Mounting Accessories",
    image: "/api/placeholder/300/200",
    model: "CDF-002",
    material: "Q235B",
    surface_treatment: "Hot Dip Galvanizing"
  },
  {
    id: "inclined-beam-003",
    name: "Inclined Beam",
    category: "Mounting Accessories",
    image: "/api/placeholder/300/200",
    model: "CDF-003",
    material: "Q235B",
    surface_treatment: "Hot Dip Galvanizing"
  }
]
