"use client";
import React from "react";
import { PXIModule } from "@/lib/pxi-data/types";
import { useSystemStore } from "@/store/systemStore";

export default function ModuleCard({ module }: { module: PXIModule }) {
  const assignModuleToSlot = useSystemStore((s) => s.assignModuleToSlot);
  const removeModule = useSystemStore((s) => s.removeModule);

  return (
    <div className="border border-slate-200 p-3 rounded-lg bg-white shadow-sm flex justify-between items-center hover:shadow-md transition-shadow">
      <div>
        <div className="font-bold text-slate-800">{module.model}</div>
        <div className="text-xs text-slate-500 mt-0.5">
          {module.type}{" "}
          {module.bandwidth ? `• ${module.bandwidth}` : ""}
        </div>
        <div className="text-[11px] text-slate-400 mt-1 font-medium flex gap-2 items-center">
          {module.slot ? (
            <span className="text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
              Slot {module.slot}
            </span>
          ) : (
            <span className="text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
              Unassigned
            </span>
          )}
          {module.price && (
            <span className="text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
              ₹{module.price.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
          onClick={() => {
            const system = useSystemStore.getState().system;
            const total = system.chassis.slots ?? 18;
            const slotDetails = system.chassis.slotDetails;

            // find first free AND compatible slot
            const taken = new Set(
              system.modules.map((m) => m.slot).filter(Boolean) as number[]
            );

            let free = 1;
            let found = false;

            while (free <= total) {
              if (!taken.has(free)) {
                // Check compatibility
                // Default logic: Slots 2-4 are PXIe, 5+ are Hybrid (matching ChassisView)
                const slotType = slotDetails?.[free] ?? (free <= 4 ? "PXIe" : "Hybrid");
                const bus = module.busType ?? "PXIe";

                if (bus === "PCIe") {
                  if (slotType === "Hybrid") {
                    found = true;
                    break;
                  }
                } else {
                  // PXIe modules work in both
                  found = true;
                  break;
                }
              }
              free++;
            }

            if (!found) {
              alert("No compatible free slots available.");
              return;
            }
            assignModuleToSlot(module.id, free);
          }}
        >
          Auto-assign
        </button>

        <button
          className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors"
          onClick={() => {
            if (confirm(`Remove ${module.model}?`)) removeModule(module.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
