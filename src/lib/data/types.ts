export interface Product {
  id: string
  name: string
  series: string
  category: string
  efficiency: string
  wattage_range: string
  description: string
  image: string
  specs: {
    dimensions: string
    weight: string
    cell_type: string
    no_of_cells: string
    front_glass: string
    frame: string
    junction_box: string
    output_cables: string
  }
  electrical_stc: {
    max_power_pmax: number[]
    voltage_at_max_power_vmpp: number[]
    current_at_max_power_impp: number[]
    open_circuit_voltage_voc: number[]
    short_circuit_current_isc: number[]
    module_efficiency: string[]
  }
  electrical_bnpi: {
    max_power_pmax: number[]
    voltage_at_max_power_vmpp: number[]
    current_at_max_power_impp: number[]
    open_circuit_voltage_voc: number[]
    short_circuit_current_isc: number[]
  }
  temp_coefficients: {
    pmax: string
    voc: string
    isc: string
    noct: string
  }
  operating_params: {
    operating_temp: string
    max_system_voltage: string
    max_series_fuse: string
    power_tolerance: string
  }
}

export interface SteelGradeRow {
  china_gb: { grade: string }
  japan_jis: { grade: string; standard_no: string }
  usa_astm: { grade: string }
  germany_din: { grade: string; material_no: string; standard_no: string }
}

export interface SteelProduct {
  id: string
  name: string
  category: string
  description: string
  image: string
  grades: SteelGradeRow[]
}

export interface StationFrameProduct {
  id: string
  name: string
  category: string
  image: string
  description: string
  technical_params: {
    installation_location: string
    mounting_angle: string
    wind_load: string
    snow_load: string
    battery_panel_arrangement: string
    design_criteria: string
    profile_material: string
    fastener_material: string
    accessory_material: string
    warranty: string
  }
  components: {
    name: string
    image: string
  }[]
}

export interface MountingPartProduct {
  id: string
  name: string
  category: string
  image: string
  model: string
  material: string
  surface_treatment: string
}

