// Script to parse raw module data and append to ni_catalog.ts
const fs = require('fs');
const path = require('path');

// Raw data from user (simplified parser)
const rawData = `NI PXIe-6375|208 Single-Ended/104 Differential|3.86 MS/s|16 bits|993500
NI PXIe-6365|144 Single-Ended/72 Differential|2 MS/s|16 bits|722600
NI PXIe-6363|32 Single-Ended/16 Differential|2 MS/s|16 bits|360000
NI PXIe-6361|16 Single-Ended/8 Differential|2 MS/s|16 bits|292600
NI PXIe-6355|80 Single-Ended/40 Differential|1.25 MS/s|16 bits|451800
NI PXIe-6351|16 Single-Ended/8 Differential|1.25 MS/s|16 bits|201300
NI PXIe-6353|32 Single-Ended/16 Differential|1.25 MS/s|16 bits|262600
NI PXIe-6357|208 Single-Ended/104 Differential|1.25 MS/s|16 bits|525300
NI PXIe-6378|16 Differential|3.5 MS/s|16 bits|1592200
NI PXIe-6376|8 Differential|3.5 MS/s|16 bits|925600
NI PXIe-6368|16 Differential|2 MS/s|16 bits|1401500
NI PXIe-6366|8 Differential|2 MS/s|16 bits|759900
NI PXIe-6386|8 Differential|14 MS/s|16 bits|1136200
NI PXIe-6396|8 Differential|14 MS/s|18 bits|1154200
NI PXIe-6358|16 Differential|1.25 MS/s|16 bits|1099500
NI PXIe-6356|8 Differential|1.25 MS/s|16 bits|641900
NI PXIe-6349|32 Differential|500 KS/s|16 bits|881200
NI PXIe-6124|4 Differential|4 MS/s|16 bits|666700
NI PXIe-6345|80 Single-Ended|500 kS/s|16 bits|307400
NI PXIe-6321|16 Single-Ended/8 Diferential|250 kS/s|16 bits|87500
NI PXIe-6323|32 Single-Ended/16 Differential|250 kS/s|16 bits|113800
NI PXIe-6343|32 Single-Ended/16 Differentiall|500 kS/s|16 bits|210100
NI PXIe-6341|16 Single-Ended/8 Differential|500 kS/s|16 bits|184300`;

const modules = [];

// Parse the data
const lines = rawData.trim().split('\n');
lines.forEach(line => {
    const parts = line.split('|');
    if (parts.length >= 5) {
        const price = parts[4].trim().replace('INR ', '').replace(',', '').replace('.00', '');
        modules.push({
            category: "Multifunction DAQ",
            model: parts[0].trim(),
            description: `${parts[1].trim()}, ${parts[2].trim()}, ${parts[3].trim()}`,
            specs: {
                channels: parts[1].trim(),
                voltage: "N/A",
                bandwidth: parts[2].trim()
            },
            busType: "PXIe",
            price: price === "Call for Price" ? null : parseInt(price)
        });
    }
});

// Generate TypeScript code
const moduleCode = modules.map(m => `        {
            category: "${m.category}",
            model: "${m.model}",
            description: "${m.description}",
            specs: { channels: "${m.specs.channels}", voltage: "${m.specs.voltage}", bandwidth: "${m.specs.bandwidth}" },
            busType: "${m.busType}",
            price: ${m.price}
        }`).join(',\n');

console.log('Generated module entries:');
console.log(moduleCode);

// Instructions
console.log('\n\n=== INSTRUCTIONS ===');
console.log('Copy the generated code above and paste it into ni_catalog.ts');
console.log('Add it before the closing bracket of the modules array');
