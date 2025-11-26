// lib/pxi-types.ts
export type PXIModule = {
  id: string;           // unique instance id (uuid)
  model: string;        // e.g., "PXIe-6581"
  type: string;         // e.g., "High-Speed Digital"
  bandwidth?: string | null;
  slot?: number | null; // assigned slot index (1-based)
  busType?: "PXIe" | "PCIe" | "PXI" | null; // New: Bus type for compatibility
  voltage?: string | null; // e.g., "±10 V"
  channels?: string | number | null; // e.g., "32 ch"
  specDetails?: string | null; // Generic catch-all for other specs
  price?: number | null; // Estimated price
};

export type PXIController = {
  model?: string | null;
  type?: "embedded" | "remote" | null;
  processor?: string | null; // e.g., "Intel Xeon"
  ram?: string | null; // e.g., "16 GB"
  storage?: string | null; // e.g., "512 GB SSD"
  price?: number | null; // Estimated price
};

export type PXIChassis = {
  model?: string | null;
  slots?: number | null; // total slots (e.g., 14, 18)
  slotDetails?: Record<number, "Hybrid" | "PXIe" | "PXI"> | null; // New: Slot type definitions
  price?: number | null; // Estimated price
};

export type PXISystem = {
  chassis: PXIChassis;
  controller: PXIController;
  modules: PXIModule[];  // array of modules with optional slot assignment
};
