import React from "react";
import { useSystemStore } from "@/store/systemStore";
import Tooltip from "../ui/Tooltip";

export default function ChassisView() {
  const system = useSystemStore((s) => s.system);
  const assignModuleToSlot = useSystemStore((s) => s.assignModuleToSlot);

  const totalSlots = system.chassis.slots ?? 18;

  // Detect controller from system state, not modules array
  const controllerData = system.controller;
  const hasController = !!controllerData.model;

  // Normal modules mapped by slot number
  const modulesBySlot = new Map<number, any>();
  system.modules.forEach((m) => {
    if (m.slot && m.slot !== 0) modulesBySlot.set(m.slot, m);
  });

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-sm text-slate-700 w-full max-w-4xl">
        <Tooltip content={
          <div>
            <div className="font-bold">{system.chassis.model ?? "Unknown Model"}</div>
            <div>Slots: {system.chassis.slots ?? "N/A"}</div>
          </div>
        }>
          <span className="cursor-help">
            <strong className="font-semibold text-slate-900">Chassis:</strong> {system.chassis.model ?? "Not selected"} • Slots:{" "}
            {system.chassis.slots ?? "Unknown"}
          </span>
        </Tooltip>
      </div>

      {/* 3D RACK MOUNT CHASSIS CONTAINER - LIGHT THEME */}
      <div
        className="relative bg-[#e0e7ff] p-4 rounded-lg shadow-2xl border-t border-white/50 border-b-4 border-b-slate-400 w-full max-w-4xl"
        style={{
          boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)"
        }}
      >
        {/* RACK EARS (Visual only) */}
        <div className="absolute left-0 top-4 bottom-4 w-4 border-r border-slate-400 bg-slate-300"></div>
        <div className="absolute right-0 top-4 bottom-4 w-4 border-l border-slate-400 bg-slate-300"></div>

        {/* SLOTS GRID */}
        <div
          className="grid gap-1 px-6 py-2 bg-slate-200/50 rounded inner-shadow"
          style={{
            gridTemplateColumns: `repeat(${totalSlots + 3}, 1fr)`,
            boxShadow: "inset 0 2px 10px rgba(0,0,0,0.1)"
          }}
        >
          {/* ---------- CONTROLLER (3-wide) ---------- */}
          <div className="col-span-3">
            <Tooltip content={
              hasController ? (
                <div className="text-left">
                  <div className="font-bold border-b border-slate-700 pb-1 mb-1">{controllerData.model}</div>
                  <div>Type: {controllerData.type}</div>
                  {controllerData.processor && <div>CPU: {controllerData.processor}</div>}
                  {controllerData.ram && <div>RAM: {controllerData.ram}</div>}
                  {controllerData.storage && <div>Storage: {controllerData.storage}</div>}
                </div>
              ) : "Empty Controller Slot"
            }>
              <div
                onClick={() => {
                  // Controller interaction logic could go here
                  // For now, just a visual placeholder or removal if needed
                  if (hasController) {
                    if (confirm(`Remove controller ${controllerData.model}?`)) {
                      // Logic to remove controller would need a store action
                      // assignModuleToSlot(controllerModule.id, null); // This won't work directly as it's not in modules
                      alert("To remove controller, please ask the chat to remove it.");
                    }
                  } else {
                    alert("Please ask the chat to add a controller.");
                  }
                }}
                className={`
              w-full h-full min-h-[180px] relative group cursor-pointer transition-all duration-200
              ${hasController
                    ? "bg-gradient-to-b from-blue-50 to-blue-100 border-l border-r border-blue-200"
                    : "bg-slate-100/50 border border-slate-300 border-dashed opacity-70 hover:opacity-100"
                  }
            `}
              >
                {/* MODULE FACEPLATE */}
                {hasController ? (
                  <div className="absolute inset-0.5 bg-blue-50 shadow-inner flex flex-col">
                    {/* Top Screw */}
                    <div className="h-4 w-full flex justify-center items-center border-b border-blue-200 bg-blue-100">
                      <div className="w-2 h-2 rounded-full bg-slate-400 shadow-sm"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-2 flex flex-col items-center justify-center text-center">
                      <div className="font-bold text-lg text-slate-800 tracking-tight leading-tight mb-1">
                        {controllerData.model}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                        {controllerData.type}
                      </div>
                      <div className="mt-2 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Bottom Screw */}
                    <div className="h-4 w-full flex justify-center items-center border-t border-blue-200 bg-blue-100">
                      <div className="w-2 h-2 rounded-full bg-slate-400 shadow-sm"></div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-slate-400">
                    <span className="text-xs font-medium uppercase tracking-widest">Controller</span>
                    <span className="text-[10px] opacity-50">Slot 1</span>
                  </div>
                )}
              </div>
            </Tooltip>
          </div>

          {/* ---------- NORMAL SLOTS ---------- */}
          {Array.from({ length: totalSlots }).map((_, idx) => {
            const slotNum = idx + 1;
            const mod = modulesBySlot.get(slotNum) ?? null;

            // Determine slot type (Default to Hybrid for testing if not specified, or alternating pattern)
            // In a real app, this comes from system.chassis.slotDetails
            // For now, let's simulate: Slots 2-4 are PXIe, 5-18 are Hybrid (common config)
            const slotType = system.chassis.slotDetails?.[slotNum] ?? (slotNum <= 4 ? "PXIe" : "Hybrid");

            return (
              <div key={slotNum}>
                <Tooltip content={
                  mod ? (
                    <div className="text-left">
                      <div className="font-bold border-b border-slate-700 pb-1 mb-1">{mod.model}</div>
                      <div>Type: {mod.type}</div>
                      {mod.bandwidth && <div>BW: {mod.bandwidth}</div>}
                      {mod.voltage && <div>Voltage: {mod.voltage}</div>}
                      {mod.channels && <div>Ch: {mod.channels}</div>}
                      {mod.specDetails && <div className="text-[10px] italic mt-1">{mod.specDetails}</div>}
                      <div className="mt-1 pt-1 border-t border-slate-700 text-[10px]">Bus: {mod.busType ?? "PXIe"}</div>
                    </div>
                  ) : `Empty ${slotType} Slot`
                }>
                  <div
                    onClick={() => {
                      if (!mod) {
                        const unassigned = system.modules.find((m) => !m.slot);
                        if (unassigned) {
                          // Compatibility Check
                          const bus = unassigned.busType ?? "PXIe"; // Default to PXIe if unknown

                          if (bus === "PCIe" && slotType !== "Hybrid") {
                            alert(`Incompatible: PCIe modules can only go in Hybrid slots. Slot ${slotNum} is ${slotType}.`);
                            return;
                          }
                          // PXIe modules work in both PXIe and Hybrid slots

                          assignModuleToSlot(unassigned.id, slotNum);
                        }
                        else alert("No unassigned modules. Add modules first.");
                      } else {
                        const ok = confirm(
                          `Remove module ${mod.model} from slot ${slotNum}?`
                        );
                        if (ok) assignModuleToSlot(mod.id, null);
                      }
                    }}
                    className={`
                  w-full h-full min-h-[180px] relative group cursor-pointer transition-all duration-200
                  ${mod
                        ? "z-10"
                        : "bg-slate-100/30 border-r border-slate-300/50 hover:bg-blue-50/30"
                      }
                `}
                  >
                    {mod ? (
                      <div className="absolute inset-y-0 left-0 right-0 mx-[1px] bg-blue-50 shadow-lg flex flex-col border-l border-r border-white/50">
                        {/* Top Screw */}
                        <div className="h-4 w-full flex justify-center items-center border-b border-blue-200 bg-blue-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shadow-sm"></div>
                        </div>

                        {/* Label Area */}
                        <div className="flex-1 py-2 flex flex-col items-center justify-center overflow-hidden w-full">
                          {/* Removed rotate-180 to fix upside down text */}
                          <div className="writing-vertical-lr text-xs font-bold text-slate-700 tracking-wide whitespace-nowrap overflow-hidden text-ellipsis max-h-[110px] w-full text-center">
                            {mod.model}
                          </div>
                          <div className="mt-1 text-[9px] text-slate-400 font-mono">
                            {slotNum}
                          </div>
                        </div>

                        {/* Bottom Screw */}
                        <div className="h-4 w-full flex justify-center items-center border-t border-blue-200 bg-blue-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shadow-sm"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col justify-end items-center pb-2">
                        {/* Slot Type Marker */}
                        {slotType === "Hybrid" && (
                          <div className="mb-1 w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-[8px] font-bold text-slate-500 bg-white" title="Hybrid Slot">
                            H
                          </div>
                        )}
                        <span className="text-[9px] text-slate-400 font-mono">{slotNum}</span>
                      </div>
                    )}
                  </div>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
