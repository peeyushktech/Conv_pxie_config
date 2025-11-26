import React from "react";
import { useSystemStore } from "@/store/systemStore";
import Tooltip from "../ui/Tooltip";
import { DndContext, useDraggable, useDroppable, DragEndEvent } from "@dnd-kit/core";

// Draggable Module Component
function DraggableModule({ module, slotNum }: { module: any, slotNum: number }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: module.id,
    data: { module, slotNum }
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: 100,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        w-full h-full min-h-[180px] relative group cursor-grab active:cursor-grabbing transition-shadow duration-200
        ${isDragging ? "opacity-80 shadow-2xl rotate-2" : "z-10"}
      `}
    >
      <div className="absolute inset-y-0 left-0 right-0 mx-[1px] bg-blue-50 shadow-lg flex flex-col border-l border-r border-white/50">
        {/* Top Screw */}
        <div className="h-4 w-full flex justify-center items-center border-b border-blue-200 bg-blue-100">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shadow-sm"></div>
        </div>

        {/* Label Area */}
        <div className="flex-1 py-2 flex flex-col items-center justify-center overflow-hidden w-full">
          <div className="writing-vertical-lr text-xs font-bold text-slate-700 tracking-wide whitespace-nowrap overflow-hidden text-ellipsis max-h-[110px] w-full text-center">
            {module.model}
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
    </div>
  );
}

// Droppable Slot Component
function DroppableSlot({ slotNum, slotType, children, isOver }: { slotNum: number, slotType: string, children: React.ReactNode, isOver: boolean }) {
  const { setNodeRef } = useDroppable({
    id: `slot-${slotNum}`,
    data: { slotNum, slotType }
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        w-full h-full min-h-[180px] relative transition-colors duration-200
        ${isOver ? "bg-blue-200/50 ring-2 ring-blue-400 ring-inset" : "bg-slate-100/30 border-r border-slate-300/50 hover:bg-blue-50/30"}
      `}
    >
      {children}
    </div>
  );
}

export default function ChassisView() {
  const system = useSystemStore((s) => s.system);
  const assignModuleToSlot = useSystemStore((s) => s.assignModuleToSlot);
  const moveModule = useSystemStore((s) => s.moveModule);

  const totalSlots = system.chassis.slots ?? 18;

  // Detect controller from system state
  const controllerData = system.controller;
  const hasController = !!controllerData.model;

  // Normal modules mapped by slot number
  const modulesBySlot = new Map<number, any>();
  system.modules.forEach((m) => {
    if (m.slot && m.slot !== 0) modulesBySlot.set(m.slot, m);
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const moduleId = active.id as string;
      const targetSlotId = over.id as string;

      // Parse slot number from "slot-N"
      const targetSlotNum = parseInt(targetSlotId.replace("slot-", ""));
      const targetSlotType = over.data.current?.slotType;
      const moduleData = active.data.current?.module;

      // Compatibility Check
      const bus = moduleData?.busType ?? "PXIe";
      if (bus === "PCIe" && targetSlotType !== "Hybrid") {
        alert(`Incompatible: PCIe modules can only go in Hybrid slots. Slot ${targetSlotNum} is ${targetSlotType}.`);
        return;
      }

      moveModule(moduleId, targetSlotNum);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
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
          className="relative bg-[#e0e7ff] p-4 rounded-lg shadow-2xl border-t border-white/50 border-b-4 border-b-slate-400 w-fit min-w-[600px] mx-auto transition-all duration-300"
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
                    if (hasController) {
                      if (confirm(`Remove controller ${controllerData.model}?`)) {
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
            {/* ---------- NORMAL SLOTS ---------- */}
            {(() => {
              const slots: React.ReactNode[] = [];
              const coveredSlots = new Set<number>();

              for (let i = 0; i < totalSlots; i++) {
                const slotNum = i + 1;

                // Skip if this slot is covered by a previous multi-slot module
                if (coveredSlots.has(slotNum)) continue;

                const mod = modulesBySlot.get(slotNum) ?? null;
                const slotType = system.chassis.slotDetails?.[slotNum] ?? (slotNum <= 4 ? "PXIe" : "Hybrid");

                // Determine span
                const span = mod?.slotsRequired ?? 1;

                // Mark subsequent slots as covered
                if (span > 1) {
                  for (let j = 1; j < span; j++) {
                    coveredSlots.add(slotNum + j);
                  }
                }

                const colSpanClasses: Record<number, string> = {
                  1: "col-span-1",
                  2: "col-span-2",
                  3: "col-span-3",
                  4: "col-span-4",
                  5: "col-span-5",
                };

                slots.push(
                  <div key={slotNum} className={colSpanClasses[span] || "col-span-1"} style={{ gridColumn: `span ${span} / span ${span}` }}>
                    <DroppableSlot slotNum={slotNum} slotType={slotType} isOver={false}>
                      <Tooltip content={
                        mod ? (
                          <div className="text-left">
                            <div className="font-bold border-b border-slate-700 pb-1 mb-1">{mod.model}</div>
                            <div>Type: {mod.type}</div>
                            {mod.slotsRequired && mod.slotsRequired > 1 && <div className="text-yellow-400 font-bold">{mod.slotsRequired}-Slot Module</div>}
                            {mod.bandwidth && <div>BW: {mod.bandwidth}</div>}
                            {mod.voltage && <div>Voltage: {mod.voltage}</div>}
                            {mod.channels && <div>Ch: {mod.channels}</div>}
                            {mod.specDetails && <div className="text-[10px] italic mt-1">{mod.specDetails}</div>}
                            <div className="mt-1 pt-1 border-t border-slate-700 text-[10px]">Bus: {mod.busType ?? "PXIe"}</div>
                          </div>
                        ) : `Empty ${slotType} Slot`
                      }>
                        {mod ? (
                          <DraggableModule module={mod} slotNum={slotNum} />
                        ) : (
                          <div
                            className="h-full flex flex-col justify-end items-center pb-2 cursor-pointer"
                            onClick={() => {
                              const unassigned = system.modules.find((m) => !m.slot);
                              if (unassigned) {
                                const bus = unassigned.busType ?? "PXIe";
                                if (bus === "PCIe" && slotType !== "Hybrid") {
                                  alert(`Incompatible: PCIe modules can only go in Hybrid slots. Slot ${slotNum} is ${slotType}.`);
                                  return;
                                }
                                // Check if module fits (slots required)
                                const required = unassigned.slotsRequired ?? 1;
                                if (required > 1) {
                                  // Check if enough consecutive slots are available
                                  for (let k = 1; k < required; k++) {
                                    if (modulesBySlot.has(slotNum + k)) {
                                      alert(`Cannot place ${required}-slot module here. Slot ${slotNum + k} is occupied.`);
                                      return;
                                    }
                                    if (slotNum + k > totalSlots) {
                                      alert(`Cannot place ${required}-slot module here. Not enough slots.`);
                                      return;
                                    }
                                  }
                                }
                                assignModuleToSlot(unassigned.id, slotNum);
                              }
                            }}
                          >
                            {/* Slot Type Marker */}
                            {slotType === "Hybrid" ? (
                              <div className="mb-1 w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center bg-white shadow-sm" title="Hybrid Slot">
                                <span className="text-[10px] font-extrabold text-slate-600">H</span>
                              </div>
                            ) : (
                              <div className="mb-1 w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center bg-slate-50" title="PXIe Slot">
                                <span className="text-[10px] font-bold text-slate-400">P</span>
                              </div>
                            )}
                            <span className="text-[9px] text-slate-400 font-mono">{slotNum}</span>
                          </div>
                        )}
                      </Tooltip>
                    </DroppableSlot>
                  </div>
                );
              }
              return slots;
            })()}
          </div>
        </div>
      </div>
    </DndContext>
  );
}
