// "use client";
// import React, { useEffect } from "react";
// import { useSystemStore } from "@/store/systemStore";
// import ChassisView from "./ChassisView";
// import ModuleCard from "./ModuleCard";
// console.log("ChassisView =", ChassisView);
// console.log("ModuleCard =", ModuleCard);

// export default function SystemVisualizer() {
//   const system = useSystemStore(state => state.system);
//   const reset = useSystemStore(state => state.reset);

//   useEffect(() => {
//     console.log("this is system",system)
//   },[])

//   return (
//     <div style={{ padding: 20, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 12 }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h2 style={{ margin: 0 }}>PXI System Visualizer</h2>
//         <div style={{ display: "flex", gap: 8 }}>
//           <button onClick={() => {
//             // export JSON
//             const blob = new Blob([JSON.stringify(system, null, 2)], {type: "application/json"});
//             const url = URL.createObjectURL(blob);
//             const a = document.createElement("a");
//             a.href = url; a.download = "pxi_system.json"; a.click();
//             URL.revokeObjectURL(url);
//           }}>Export JSON</button>
//           <button onClick={reset}>Reset</button>
//         </div>
//       </div>

//       <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flex: 1 }}>
//         <div style={{ flex: 1, minWidth: 0 }}>
//           <ChassisView />
//         </div>

//         <div style={{ width: 280 }}>
//           <h3 style={{ marginTop: 0 }}>Modules</h3>
//           {system.modules.length === 0 && <div style={{ color: "#666" }}>No modules added yet.</div>}
//           <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
//             {system.modules && system.modules.map(mod => <ModuleCard key={mod.id} module={mod} />)}



//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useEffect } from "react";
import { useSystemStore } from "@/store/systemStore";
import ChassisView from "./ChassisView";
import ModuleCard from "./ModuleCard";

export default function SystemVisualizer() {
  const system = useSystemStore((s) => s.system);
  const reset = useSystemStore((s) => s.reset);

  useEffect(() => {
    console.log("Current PXI System:", system);
  }, [system]);

  return (
    <div className="h-full flex flex-col gap-6 p-6 bg-slate-50 text-slate-900">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">
          Conversational PXI Configurator
        </h2>

        <div className="flex gap-3">
          <button
            className="px-4 py-2 border border-slate-300 rounded-md bg-white hover:bg-slate-50 text-slate-700 font-medium transition-colors shadow-sm"
            onClick={() => {
              const blob = new Blob([JSON.stringify(system, null, 2)], {
                type: "application/json",
              });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "pxi_system.json";
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            Export JSON
          </button>

          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors shadow-sm"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>

      {/* CHASSIS CARD */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <ChassisView />
      </div>

      {/* MODULE LIST */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex-1 overflow-auto">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          Modules
        </h3>

        {system.modules.length === 0 && (
          <div className="text-slate-500 italic p-2">
            No modules added yet.
          </div>
        )}

        <div className="flex flex-col gap-3">
          {system.modules.map((mod) => (
            <ModuleCard key={mod.id} module={mod} />
          ))}
        </div>
      </div>
    </div>
  );
}
