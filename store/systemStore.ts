// store/systemStore.ts
import { create } from "zustand";
import { PXIChassis, PXIController, PXIModule, PXISystem } from "@/lib/pxi-data/types";

type SystemState = {
  system: PXISystem;
  setSystem: (s: Partial<PXISystem>) => void;
  updateSystem: (s: PXISystem) => void;
  addModuleInstance: (m: Omit<PXIModule, "id">) => void;
  assignModuleToSlot: (id: string, slot: number | null) => void;
  removeModule: (id: string) => void;
  reset: () => void;
};

export const useSystemStore = create<SystemState>((set, get) => ({
  system: {
    chassis: { model: null, slots: null, slotDetails: null },
    controller: { model: null, type: null, processor: null, ram: null, storage: null },
    modules: []
  },
  setSystem: (partial) => set(state => ({ system: { ...state.system, ...partial } })),
  updateSystem: (s) => set(() => ({ system: s })),
  addModuleInstance: (m) => {
    const id = crypto.randomUUID?.() ?? Date.now().toString();
    set(state => ({ system: { ...state.system, modules: [...state.system.modules, { ...m, id, slot: m.slot ?? null }] } }));
  },
  assignModuleToSlot: (id, slot) => {
    set(state => ({
      system: {
        ...state.system,
        modules: state.system.modules.map(mod => mod.id === id ? { ...mod, slot } : mod)
      }
    }));
  },
  removeModule: (id) => set(state => ({ system: { ...state.system, modules: state.system.modules.filter(m => m.id !== id) } })),
  reset: () => set(() => ({
    system: {
      chassis: { model: null, slots: null, slotDetails: null },
      controller: { model: null, type: null, processor: null, ram: null, storage: null },
      modules: []
    }
  }))
}));
