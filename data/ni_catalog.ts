export const NI_CATALOG = {
    chassis: [
        {
            model: "NI PXIe-1095",
            slots: 17,
            power: null,
            description: "17-slot high-performance PXI Express chassis with 24 GB/s system bandwidth.",
            price: 1474000
        },
        {
            model: "NI PXIe-1095 (Timing and Sync Option)",
            slots: 17,
            power: null,
            description: "17-slot high-performance PXI Express chassis with 24 GB/s bandwidth and integrated timing and synchronization.",
            price: 1610700
        },
        {
            model: "NI PXIe-1092",
            slots: 9,
            power: null,
            description: "9-slot PXI Express chassis with 24 GB/s system bandwidth for compact high-speed systems.",
            price: 729200
        },
        {
            model: "NI PXIe-1092 (Timing and Sync Option)",
            slots: 9,
            power: null,
            description: "9-slot PXI Express chassis with 24 GB/s bandwidth and built-in timing and synchronization.",
            price: 845200
        },
        {
            model: "NI PXIe-1088",
            slots: 8,
            power: null,
            description: "8-slot PXI Express chassis with 8 GB/s system bandwidth for medium-scale systems.",
            price: 410200
        },
        {
            model: "NI PXIe-1085",
            slots: 17,
            power: null,
            description: "17-slot PXI Express chassis with 24 GB/s system bandwidth for large test systems.",
            price: 1832600
        },
        {
            model: "NI PXIe-1084",
            slots: 17,
            power: null,
            description: "17-slot PXI Express chassis with 4 GB/s system bandwidth for general-purpose systems.",
            price: 813300
        },
        {
            model: "NI PXIe-1084 (Timing and Sync Option)",
            slots: 17,
            power: null,
            description: "17-slot PXI Express chassis with 4 GB/s bandwidth and integrated timing and synchronization.",
            price: 902100
        },
        {
            model: "NI PXIe-1081",
            slots: 17,
            power: null,
            description: "17-slot PXI Express chassis with 2 GB/s system bandwidth for entry-level large systems.",
            price: 656700
        },
        {
            model: "NI PXIe-1086",
            slots: 17,
            power: null,
            description: "17-slot PXI Express chassis with 12 GB/s system bandwidth for high-performance validation systems.",
            price: 2338200
        },
        {
            model: "NI PXIe-1086DC",
            slots: 17,
            power: null,
            description: "17-slot PXI Express DC-powered chassis with 12 GB/s system bandwidth for mobile and rugged deployments.",
            price: 2434500
        },
        {
            model: "NI PXIe-1071",
            slots: 3,
            power: null,
            description: "3-slot PXI Express chassis with 3 GB/s system bandwidth for ultra-compact systems.",
            price: 173600
        },

        // ✅ Integrated Controller + Chassis

        {
            model: "NI PXIe-1090",
            slots: 2,
            power: null,
            description: "2-slot PXI Express chassis with integrated Thunderbolt 3 controller and 2 GB/s system bandwidth.",
            price: 155200
        },
        {
            model: "NI PXIe-1083 with PCIe Controller and 3m Cable",
            slots: 0,
            power: null,
            description: "PXI Express chassis with integrated Thunderbolt 3 PCIe controller and 2 GB/s bandwidth including 3 m cable.",
            price: 231400
        },
        {
            model: "NI PXIe-1073 with PCIe Controller and 3m Cable",
            slots: 0,
            power: null,
            description: "PXI Express chassis with integrated PCI Express desktop controller and 250 MB/s system bandwidth with 3 m cable.",
            price: 256300
        },
        {
            model: "NI PXIe-1073 with PCIe Controller, No Cable",
            slots: 0,
            power: null,
            description: "PXI Express chassis with integrated PCI Express desktop controller and 250 MB/s system bandwidth without cable.",
            price: 247000
        }
    ],
    controllers: [

        //newly added from website 


        {
            model: "NI PXIe-8822",
            type: "Embedded",
            processor: "Core i3-11100HE (4-Core)",
            description: "Embedded PXI controller for entry-level test and measurement automation.",
            price: 322800
        },
        {
            model: "PXIe-8822, Win 11 64-bit",
            type: "Embedded",
            processor: "Core i3-11100HE (4-Core)",
            description: "Embedded PXI controller with Windows 11 for general automation tasks.",
            price: 322800
        },
        {
            model: "NI PXIe-8822RT",
            type: "Real-Time",
            processor: "Core i3-11100HE (4-Core)",
            description: "Real-time PXI controller for deterministic control and timing applications.",
            price: 403500
        },
        {
            model: "NI PXIe-8842",
            type: "Embedded",
            processor: "Core i5-11500HE (6-Core)",
            description: "Mid-range embedded PXI controller for validation and production test.",
            price: 642300
        },
        {
            model: "NI PXIe-8842, No GPIB, TPM",
            type: "Embedded",
            processor: "Core i5-11500HE (6-Core)",
            description: "Mid-range embedded PXI controller with TPM, designed for secure validation systems.",
            price: 455300
        },
        {
            model: "PXIe-8842, Win 11 64-bit",
            type: "Embedded",
            processor: "Core i5-11500HE (6-Core)",
            description: "Embedded PXI controller with Windows 11 for semiconductor and RF validation.",
            price: 642300
        },
        {
            model: "NI PXIe-8842, Win 11, No GPIB, TPM",
            type: "Embedded",
            processor: "Core i5-11500HE (6-Core)",
            description: "Secure embedded PXI controller with Windows 11 and TPM support.",
            price: 455300
        },
        {
            model: "NI PXIe-8842RT, No GPIB, No TPM",
            type: "Real-Time",
            processor: "Core i5-11500HE (6-Core)",
            description: "Real-time PXI controller optimized for control and HIL systems.",
            price: 455300
        },
        {
            model: "NI PXIe-8862",
            type: "Embedded",
            processor: "Core i7-11850HE (8-Core)",
            description: "High-performance embedded PXI controller for advanced validation workloads.",
            price: 791100
        },
        {
            model: "NI PXIe-8862 Removable Drive, Win 11",
            type: "Embedded",
            processor: "Core i7-11850HE (8-Core)",
            description: "High-performance PXI controller with removable drive and Windows 11.",
            price: 858700
        },
        {
            model: "NI PXIe-8862 Removable Drive, TPM",
            type: "Embedded",
            processor: "Core i7-11850HE (8-Core)",
            description: "Secure PXI controller with removable drive and TPM support.",
            price: 858700
        },
        {
            model: "NI PXIe-8862 Removable Drive, No TPM",
            type: "Embedded",
            processor: "Core i7-11850HE (8-Core)",
            description: "High-speed PXI controller with removable drive and no TPM.",
            price: 898400
        },
        {
            model: "NI PXIe-8862, Win 11 64-bit",
            type: "Embedded",
            processor: "Core i7-11850HE (8-Core)",
            description: "Embedded PXI controller with Windows 11 for compute-intensive testing.",
            price: 791100
        },
        {
            model: "NI PXIe-8862, Win 11, No GPIB, TPM",
            type: "Embedded",
            processor: "Core i7-11850HE (8-Core)",
            description: "Secure embedded PXI controller with Windows 11 and TPM.",
            price: 595400
        },
        {
            model: "NI PXIe-8862 Removable Drive, Win 11, No GPIB, TPM",
            type: "Embedded",
            processor: "Core i7-11850HE (8-Core)",
            description: "Secure Windows 11 PXI controller with removable drive.",
            price: 612900
        },
        {
            model: "NI PXIe-8862, Win 10 LTSC 64-bit",
            type: "Embedded",
            processor: "Core i7-11850HE (8-Core)",
            description: "Long-term support PXI controller for regulated production environments.",
            price: 791100
        },
        {
            model: "NI PXIe-8862, Win 10 LTSC, No GPIB, TPM",
            type: "Embedded",
            processor: "Core i7-11850HE (8-Core)",
            description: "Secure LTSC PXI controller for industrial automation.",
            price: 595400
        },
        {
            model: "NI PXIe-8862RT",
            type: "Real-Time",
            processor: "Core i7-11850HE (8-Core)",
            description: "Real-time PXI controller for advanced deterministic control systems.",
            price: 830800
        },
        {
            model: "NI PXIe-8862RT, No GPIB, No TPM",
            type: "Real-Time",
            processor: "Core i7-11850HE (8-Core)",
            description: "Real-time PXI controller optimized for HIL and control validation.",
            price: 604100
        },
        {
            model: "NI PXIe-8881",
            type: "Embedded",
            processor: "Intel Xeon W-2295 (18-Core)",
            description: "Ultra high-performance PXI controller for simulation and data processing.",
            price: 1563300
        },
        {
            model: "NI PXIe-8881",
            type: "Embedded",
            processor: "Intel Xeon W-2245 (8-Core)",
            description: "High-performance embedded PXI controller for compute-heavy validation.",
            price: 1291400
        },
        {
            model: "PXIe-8881 Windows 11 64-bit",
            type: "Embedded",
            processor: "Intel Xeon W-2245 (8-Core)",
            description: "High-performance PXI controller with Windows 11.",
            price: 1179300
        },
        {
            model: "NI PXIe-8881",
            type: "Embedded",
            processor: "Intel Xeon W-2225 (4-Core)",
            description: "Entry Xeon-based embedded PXI controller for precision measurement.",
            price: 1087600
        },
        {
            model: "NI PXIe-8881, No TPM",
            type: "Embedded",
            processor: "Intel Xeon W-2245 (8-Core)",
            description: "High-performance PXI controller without TPM.",
            price: 1291600
        },
        {
            model: "NI PXIe-8881 RT, No TPM",
            type: "Real-Time",
            processor: "Intel Xeon W-2245 (8-Core)",
            description: "Real-time PXI controller for deterministic and simulation workloads.",
            price: 1359500
        },
        {
            model: "PXIe-8881 Xeon 8 Core Controller, No OS",
            type: "Embedded",
            processor: "Intel Xeon W-2245 (8-Core)",
            description: "Bare-metal embedded PXI controller for custom OS deployments.",
            price: null
        }



    ],
    modules: [

        // Additional Multifunction DAQ Modules
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6375",
            description: "208 SE/104 Diff AI, 3.86 MS/s, 16-bit",
            specs: { channels: "208 SE/104 Diff", voltage: "N/A", bandwidth: "3.86 MS/s" },
            busType: "PXIe",
            price: 993500
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6365",
            description: "144 SE/72 Diff AI, 2 MS/s, 16-bit",
            specs: { channels: "144 SE/72 Diff", voltage: "N/A", bandwidth: "2 MS/s" },
            busType: "PXIe",
            price: 722600
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6361",
            description: "16 SE/8 Diff AI, 2 MS/s, 16-bit",
            specs: { channels: "16 SE/8 Diff", voltage: "N/A", bandwidth: "2 MS/s" },
            busType: "PXIe",
            price: 292600
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6355",
            description: "80 SE/40 Diff AI, 1.25 MS/s, 16-bit",
            specs: { channels: "80 SE/40 Diff", voltage: "N/A", bandwidth: "1.25 MS/s" },
            busType: "PXIe",
            price: 451800
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6351",
            description: "16 SE/8 Diff AI, 1.25 MS/s, 16-bit",
            specs: { channels: "16 SE/8 Diff", voltage: "N/A", bandwidth: "1.25 MS/s" },
            busType: "PXIe",
            price: 201300
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6378",
            description: "16 Diff AI, 3.5 MS/s, 16-bit, Simultaneous",
            specs: { channels: "16 Diff", voltage: "N/A", bandwidth: "3.5 MS/s" },
            busType: "PXIe",
            price: 1592200
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6376",
            description: "8 Diff AI, 3.5 MS/s, 16-bit, Simultaneous",
            specs: { channels: "8 Diff", voltage: "N/A", bandwidth: "3.5 MS/s" },
            busType: "PXIe",
            price: 925600
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6321",
            description: "16 SE/8 Diff AI, 250 kS/s, 16-bit",
            specs: { channels: "16 SE/8 Diff", voltage: "N/A", bandwidth: "250 kS/s" },
            busType: "PXIe",
            price: 87500
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6323",
            description: "32 SE/16 Diff AI, 250 kS/s, 16-bit",
            specs: { channels: "32 SE/16 Diff", voltage: "N/A", bandwidth: "250 kS/s" },
            busType: "PXIe",
            price: 113800
        },

        // Additional Simultaneous Sampling DAQ Modules
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6368",
            description: "16 Diff AI, 2 MS/s, 16-bit, Simultaneous",
            specs: { channels: "16 Diff", voltage: "N/A", bandwidth: "2 MS/s" },
            busType: "PXIe",
            price: 1401500
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6366",
            description: "8 Diff AI, 2 MS/s, 16-bit, Simultaneous",
            specs: { channels: "8 Diff", voltage: "N/A", bandwidth: "2 MS/s" },
            busType: "PXIe",
            price: 759900
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6386",
            description: "8 Diff AI, 14 MS/s, 16-bit, Simultaneous",
            specs: { channels: "8 Diff", voltage: "N/A", bandwidth: "14 MS/s" },
            busType: "PXIe",
            price: 1136200
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6396",
            description: "8 Diff AI, 14 MS/s, 18-bit, Simultaneous",
            specs: { channels: "8 Diff", voltage: "N/A", bandwidth: "14 MS/s" },
            busType: "PXIe",
            price: 1154200
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6358",
            description: "16 Diff AI, 1.25 MS/s, 16-bit, Simultaneous",
            specs: { channels: "16 Diff", voltage: "N/A", bandwidth: "1.25 MS/s" },
            busType: "PXIe",
            price: 1099500
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6356",
            description: "8 Diff AI, 1.25 MS/s, 16-bit, Simultaneous",
            specs: { channels: "8 Diff", voltage: "N/A", bandwidth: "1.25 MS/s" },
            busType: "PXIe",
            price: 641900
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6349",
            description: "32 Diff AI, 500 kS/s, 16-bit, Simultaneous",
            specs: { channels: "32 Diff", voltage: "N/A", bandwidth: "500 kS/s" },
            busType: "PXIe",
            price: 881200
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6143",
            description: "8 Diff AI, 250 kS/s, 16-bit",
            specs: { channels: "8 Diff", voltage: "N/A", bandwidth: "250 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6133/32 MSamples",
            description: "8 Diff AI, 3 MS/s, 14-bit, 32 MSamples",
            specs: { channels: "8 Diff", voltage: "N/A", bandwidth: "3 MS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6133/16 MSamples",
            description: "8 Diff AI, 3 MS/s, 14-bit, 16 MSamples",
            specs: { channels: "8 Diff", voltage: "N/A", bandwidth: "3 MS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6132",
            description: "4 Diff AI, 3 MS/s, 14-bit",
            specs: { channels: "4 Diff", voltage: "N/A", bandwidth: "3 MS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6124",
            description: "4 Diff AI, 4 MS/s, 16-bit",
            specs: { channels: "4 Diff", voltage: "N/A", bandwidth: "4 MS/s" },
            busType: "PXIe",
            price: 666700
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6123/32 MSamples",
            description: "8 Diff AI, 500 kS/s, 16-bit, 32 MSamples",
            specs: { channels: "8 Diff", voltage: "N/A", bandwidth: "500 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6123/16 MSamples",
            description: "8 Diff AI, 500 kS/s, 16-bit, 16 MSamples",
            specs: { channels: "8 Diff", voltage: "N/A", bandwidth: "500 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6122",
            description: "4 Diff AI, 500 kS/s, 16-bit",
            specs: { channels: "4 Diff", voltage: "N/A", bandwidth: "500 kS/s" },
            busType: "PXI",
            price: null
        },

        // Isolated Analog Input Modules
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6238",
            description: "8 Diff AI, 250 kS/s, 16-bit, Isolated",
            specs: { channels: "8 Diff", voltage: "N/A", bandwidth: "250 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6236",
            description: "4 Diff AI, 250 kS/s, 16-bit, Isolated",
            specs: { channels: "4 Diff", voltage: "N/A", bandwidth: "250 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6232",
            description: "16 SE/8 Diff AI, 250 kS/s, 16-bit, Isolated",
            specs: { channels: "16 SE/8 Diff", voltage: "N/A", bandwidth: "250 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6230",
            description: "8 SE/4 Diff AI, 250 kS/s, 16-bit, Isolated",
            specs: { channels: "8 SE/4 Diff", voltage: "N/A", bandwidth: "250 kS/s" },
            busType: "PXI",
            price: null
        },

        // Value Series DAQ Modules
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6345",
            description: "80 SE AI, 500 kS/s, 16-bit",
            specs: { channels: "80 SE", voltage: "N/A", bandwidth: "500 kS/s" },
            busType: "PXIe",
            price: 307400
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6343",
            description: "32 SE/16 Diff AI, 500 kS/s, 16-bit",
            specs: { channels: "32 SE/16 Diff", voltage: "N/A", bandwidth: "500 kS/s" },
            busType: "PXIe",
            price: 210100
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXIe-6341",
            description: "16 SE/8 Diff AI, 500 kS/s, 16-bit",
            specs: { channels: "16 SE/8 Diff", voltage: "N/A", bandwidth: "500 kS/s" },
            busType: "PXIe",
            price: 184300
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6289",
            description: "32 SE/16 Diff AI, 500 kS/s, 18-bit",
            specs: { channels: "32 SE/16 Diff", voltage: "N/A", bandwidth: "500 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6284",
            description: "32 SE/16 Diff AI, 500 kS/s, 18-bit",
            specs: { channels: "32 SE/16 Diff", voltage: "N/A", bandwidth: "500 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6281",
            description: "16 SE/8 Diff AI, 500 kS/s, 18-bit",
            specs: { channels: "16 SE/8 Diff", voltage: "N/A", bandwidth: "500 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6280",
            description: "16 SE/8 Diff AI, 500 kS/s, 18-bit",
            specs: { channels: "16 SE/8 Diff", voltage: "N/A", bandwidth: "500 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6229",
            description: "32 SE/16 Diff AI, 250 kS/s, 16-bit",
            specs: { channels: "32 SE/16 Diff", voltage: "N/A", bandwidth: "250 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6225",
            description: "80 SE/40 Diff AI, 250 kS/s, 16-bit",
            specs: { channels: "80 SE/40 Diff", voltage: "N/A", bandwidth: "250 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6224",
            description: "32 SE/16 Diff AI, 250 kS/s, 16-bit",
            specs: { channels: "32 SE/16 Diff", voltage: "N/A", bandwidth: "250 kS/s" },
            busType: "PXI",
            price: null
        },
        {
            category: "Multifunction DAQ",
            model: "NI PXI-6221",
            description: "16 SE/8 Diff AI, 250 kS/s, 16-bit",
            specs: { channels: "16 SE/8 Diff", voltage: "N/A", bandwidth: "250 kS/s" },
            busType: "PXI",
            price: null
        },

        // Analog Output Modules
        {
            category: "Analog Output",
            model: "NI PXIe-4463",
            description: "2-ch, 24-bit, 51.2 kS/s AO",
            specs: { channels: 2, voltage: "N/A", bandwidth: "51.2 kS/s" },
            busType: "PXIe",
            price: 346900
        },
        {
            category: "Analog Output",
            model: "NI PXIe-4322",
            description: "8-ch Isolated AO, 16-bit, 250 kS/s/ch",
            specs: { channels: 8, voltage: "N/A", bandwidth: "250 kS/s/ch" },
            busType: "PXIe",
            price: 434800
        },
        {
            category: "Analog Output",
            model: "NI PXIe-6739",
            description: "64-ch AO, 16-bit, 1 MS/s/ch",
            specs: { channels: 64, voltage: "N/A", bandwidth: "1 MS/s/ch" },
            busType: "PXIe",
            price: 514000
        },
        {
            category: "Analog Output",
            model: "NI PXIe-6738",
            description: "32-ch AO, 16-bit, 1 MS/s/ch",
            specs: { channels: 32, voltage: "N/A", bandwidth: "1 MS/s/ch" },
            busType: "PXIe",
            price: 314200
        },

        // Additional DMMs
        {
            category: "DMM",
            model: "NI PXIe-4082",
            description: "6.5-digit DMM, 300V AC/DC",
            specs: { channels: 1, voltage: "300V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 456900
        },
        {
            category: "DMM",
            model: "NI PXI-4065",
            description: "6.5-digit DMM, 300V AC/DC",
            specs: { channels: 1, voltage: "300V", bandwidth: "N/A" },
            busType: "PXI",
            price: 161100
        },

        // Additional Oscilloscopes
        {
            category: "Oscilloscope",
            model: "NI PXIe-5122",
            description: "100 MS/s, 100 MHz, 14-bit",
            specs: { channels: 2, bandwidth: "100 MHz", voltage: "N/A" },
            busType: "PXIe",
            price: 1648400
        },
        {
            category: "Oscilloscope",
            model: "NI PXIe-5163",
            description: "1 GS/s, 200 MHz, 14-bit",
            specs: { channels: 2, bandwidth: "200 MHz", voltage: "N/A" },
            busType: "PXIe",
            price: 1998400
        },
        {
            category: "Oscilloscope",
            model: "NI PXIe-5160",
            description: "5 GS/s, 500 MHz, 10-bit",
            specs: { channels: 2, bandwidth: "500 MHz", voltage: "N/A" },
            busType: "PXIe",
            price: 2074700
        },

        // Additional SMUs
        {
            category: "SMU",
            model: "NI PXIe-4138",
            description: "1-ch SMU, 60V, 3A",
            specs: { channels: 1, voltage: "60V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 610800
        },
        {
            category: "SMU",
            model: "NI PXIe-4137",
            description: "1-ch SMU, 200V, 3A",
            specs: { channels: 1, voltage: "200V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 792700
        },
        {
            category: "SMU",
            model: "NI PXIe-4163",
            description: "1-ch SMU, 24V, 50mA, High Precision",
            specs: { channels: 1, voltage: "24V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 3244000
        },

        // Counter/Timers
        {
            category: "Counter/Timer",
            model: "NI PXIe-6614",
            description: "8-ch, 32-bit, 100 MHz",
            specs: { channels: 8, voltage: "N/A", bandwidth: "100 MHz" },
            busType: "PXIe",
            price: 591100
        },
        {
            category: "Counter/Timer",
            model: "NI PXIe-6612",
            description: "8-ch, 32-bit, 100 MHz",
            specs: { channels: 8, voltage: "N/A", bandwidth: "100 MHz" },
            busType: "PXIe",
            price: 197400
        },

        // RF Signal Analyzers
        {
            category: "RF Signal Analyzer",
            model: "NI PXIe-5841 VST",
            description: "9 kHz to 6 GHz, 1 GHz BW",
            specs: { channels: 1, voltage: "N/A", bandwidth: "1 GHz" },
            busType: "PXIe",
            price: 9672200
        },
        {
            category: "RF Signal Analyzer",
            model: "NI PXIe-5668R",
            description: "20 Hz to 14 GHz, 50 MHz BW",
            specs: { channels: 1, voltage: "N/A", bandwidth: "50 MHz" },
            busType: "PXIe",
            price: 11615700
        },

        // High Speed Digital I/O
        {
            category: "Digital I/O",
            model: "NI PXIe-6570",
            description: "32 DIO, 200 Mbps, Programmable",
            specs: { channels: 32, voltage: "6.0V", bandwidth: "200 Mbps" },
            busType: "PXIe",
            price: 2454200
        },
        {
            category: "Digital I/O",
            model: "NI PXIe-6537",
            description: "32 DIO, 50 Mbps, 5V TTL/CMOS",
            specs: { channels: 32, voltage: "5V", bandwidth: "50 Mbps" },
            busType: "PXIe",
            price: 499900
        },
        {
            category: "Digital I/O",
            model: "NI PXIe-6509",
            description: "96 DIO, Industrial, Software-Timed",
            specs: { channels: 96, voltage: "5V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 82300
        },
        // SMUs
        {
            category: "SMU",
            model: "PXIe-4139",
            description: "1-channel System SMU, 60V, 3A",
            specs: { channels: 1, voltage: "60V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 5500
        },
        {
            category: "SMU",
            model: "PXIe-4147",
            description: "4-channel SMU, 24V, 3A",
            specs: { channels: 4, voltage: "24V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 7200
        },
        // DAQ / Multifunction I/O
        {
            category: "DAQ",
            model: "PXIe-6363",
            description: "Multifunction I/O, 32 AI, 48 DIO, 4 AO",
            specs: { channels: "32 AI / 48 DIO", voltage: "10V", bandwidth: "2 MS/s" },
            busType: "PXIe",
            price: 3800
        },
        {
            category: "DAQ",
            model: "PXIe-6341",
            description: "Multifunction I/O, 16 AI, 24 DIO, 2 AO",
            specs: { channels: "16 AI / 24 DIO", voltage: "10V", bandwidth: "500 kS/s" },
            busType: "PXIe",
            price: 2100
        },
        // Digital I/O
        {
            category: "Digital I/O",
            model: "PXIe-6535",
            description: "32-channel Digital I/O",
            specs: { channels: 32, voltage: "5V", bandwidth: "10 MHz" },
            busType: "PXIe",
            price: 1500
        },

        // Dynamic Signal Analysis
        {
            category: "Dynamic Signal Analysis",
            model: "NI PXIe-4468",
            description: "2 Diff AI, 250 kS/s, 24-bit",
            specs: { channels: 2, voltage: "N/A", bandwidth: "250 kS/s" },
            busType: "PXIe",
            price: 560200
        },
        {
            category: "Dynamic Signal Analysis",
            model: "NI PXIe-4480",
            description: "6-ch, 1.25 MS/s, 24-bit",
            specs: { channels: 6, voltage: "N/A", bandwidth: "1.25 MS/s" },
            busType: "PXIe",
            price: 1396600
        },
        {
            category: "Dynamic Signal Analysis",
            model: "NI PXIe-4481",
            description: "6-ch SE, 1.25 MS/s, 24-bit",
            specs: { channels: 6, voltage: "N/A", bandwidth: "1.25 MS/s" },
            busType: "PXIe",
            price: 1217200
        },
        {
            category: "Dynamic Signal Analysis",
            model: "NI PXIe-4492",
            description: "16 Diff, 204.8 kS/s, 24-bit",
            specs: { channels: 16, voltage: "N/A", bandwidth: "204.8 kS/s" },
            busType: "PXIe",
            price: 746900
        },
        {
            category: "Dynamic Signal Analysis",
            model: "NI PXIe-4464",
            description: "4 Diff, 204.8 kS/s, 24-bit",
            specs: { channels: 4, voltage: "N/A", bandwidth: "204.8 kS/s" },
            busType: "PXIe",
            price: 705300
        },

        // Programmable Power Supplies
        {
            category: "Power Supply",
            model: "NI PXIe-4113",
            description: "2-ch, 10V, 6A Power Supply",
            specs: { channels: 2, voltage: "10V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 361500
        },
        {
            category: "Power Supply",
            model: "NI PXIe-4112",
            description: "2-ch, 60V, 1A Power Supply",
            specs: { channels: 2, voltage: "60V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 361500
        },
        {
            category: "Power Supply",
            model: "NI PXIe-4150",
            description: "1-ch, 60V, 10A Power Supply",
            specs: { channels: 1, voltage: "60V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 346100
        },
        {
            category: "Power Supply",
            model: "NI PXIe-4151",
            description: "1-ch, 20V, 25A Power Supply",
            specs: { channels: 1, voltage: "20V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 362600
        },

        // Additional High-Precision SMUs
        {
            category: "SMU",
            model: "NI PXIe-4145",
            description: "1-ch SMU, 6V, 500mA, 15 pA",
            specs: { channels: 1, voltage: "6V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 1842500
        },
        {
            category: "SMU",
            model: "NI PXIe-4144",
            description: "1-ch SMU, 6V, 500mA, 150 pA",
            specs: { channels: 1, voltage: "6V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 1167200
        },
        {
            category: "SMU",
            model: "NI PXIe-4143",
            description: "1-ch SMU, 24V, 150mA, 10 pA",
            specs: { channels: 1, voltage: "24V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 1842500
        },
        {
            category: "SMU",
            model: "NI PXIe-4142",
            description: "1-ch SMU, 24V, 150mA, 100 pA",
            specs: { channels: 1, voltage: "24V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 1167200
        },
        {
            category: "SMU",
            model: "NI PXIe-4141",
            description: "1-ch SMU, 10V, 100mA, 10 pA",
            specs: { channels: 1, voltage: "10V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 1451100
        },
        {
            category: "SMU",
            model: "NI PXIe-4140",
            description: "1-ch SMU, 10V, 100mA, 100 pA",
            specs: { channels: 1, voltage: "10V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 859800
        },

        // Switches - Matrix/Multiplexer
        {
            category: "Switch",
            model: "NI PXIe-2527",
            description: "64x1 Multiplexer, 300 VDC, 2A",
            specs: { channels: 64, voltage: "300V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 271900
        },
        {
            category: "Switch",
            model: "NI PXIe-2529",
            description: "4x32 Matrix, 150 VDC, 1A",
            specs: { channels: 128, voltage: "150V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 441700
        },
        {
            category: "Switch",
            model: "NI PXIe-2575",
            description: "196x1 Multiplexer, 100 VDC, 1A",
            specs: { channels: 196, voltage: "100V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 395600
        },
        {
            category: "Switch",
            model: "NI PXIe-2569",
            description: "100-ch SPST, 100 VDC, 1A",
            specs: { channels: 100, voltage: "100V", bandwidth: "N/A" },
            busType: "PXIe",
            price: 358700
        },

        // RF Switches
        {
            category: "RF Switch",
            model: "NI PXIe-2542",
            description: "Quad 2x1 Mux, 6.6 GHz, Solid State",
            specs: { channels: 8, voltage: "N/A", bandwidth: "6.6 GHz" },
            busType: "PXIe",
            price: 686200
        },
        {
            category: "RF Switch",
            model: "NI PXIe-2544",
            description: "8x1 Mux, 6.6 GHz, Solid State",
            specs: { channels: 8, voltage: "N/A", bandwidth: "6.6 GHz" },
            busType: "PXIe",
            price: 686200
        },
        {
            category: "RF Switch",
            model: "NI PXIe-2746",
            description: "Quad 4x1 Mux, 2.7 GHz",
            specs: { channels: 16, voltage: "N/A", bandwidth: "2.7 GHz" },
            busType: "PXIe",
            price: 441700
        },
        {
            category: "RF Switch",
            model: "NI PXIe-2747",
            description: "Dual 8x1 Mux, 2.7 GHz",
            specs: { channels: 16, voltage: "N/A", bandwidth: "2.7 GHz" },
            busType: "PXIe",
            price: 482900
        },
        {
            category: "RF Switch",
            model: "NI PXIe-2748",
            description: "16x1 Mux, 3 GHz",
            specs: { channels: 16, voltage: "N/A", bandwidth: "3 GHz" },
            busType: "PXIe",
            price: 478200
        },

        // FlexRIO FPGA Modules
        {
            category: "FlexRIO",
            model: "NI PXIe-7976R",
            description: "Kintex-7 K410T, 2 GB, 250k LUTs",
            specs: { channels: "N/A", voltage: "N/A", bandwidth: "N/A" },
            busType: "PXIe",
            price: 1930200
        },
        {
            category: "FlexRIO",
            model: "NI PXIe-7975R",
            description: "Kintex-7 K410T, 2 GB, 250k LUTs",
            specs: { channels: "N/A", voltage: "N/A", bandwidth: "N/A" },
            busType: "PXIe",
            price: 1716800
        },
        {
            category: "FlexRIO",
            model: "NI PXIe-7972R",
            description: "Kintex-7 K325T, 2 GB, 200k LUTs",
            specs: { channels: "N/A", voltage: "N/A", bandwidth: "N/A" },
            busType: "PXIe",
            price: 1382000
        },
        {
            category: "FlexRIO",
            model: "NI PXIe-7971R",
            description: "Kintex-7 K325T, 0 MB, 200k LUTs",
            specs: { channels: "N/A", voltage: "N/A", bandwidth: "N/A" },
            busType: "PXIe",
            price: 1084000
        },

        // Signal Generators - Arbitrary Waveform
        {
            category: "Signal Generator",
            model: "NI PXIe-5433 2-ch",
            description: "800 MS/s, ±12V, 2-ch AWG",
            specs: { channels: 2, voltage: "12V", bandwidth: "800 MS/s" },
            busType: "PXIe",
            price: 1942700
        },
        {
            category: "Signal Generator",
            model: "NI PXIe-5433 1-ch",
            description: "800 MS/s, ±12V, 1-ch AWG",
            specs: { channels: 1, voltage: "12V", bandwidth: "800 MS/s" },
            busType: "PXIe",
            price: 1292600
        },
        {
            category: "Signal Generator",
            model: "NI PXIe-5423 2-ch",
            description: "800 MS/s, ±12V, 2-ch AWG",
            specs: { channels: 2, voltage: "12V", bandwidth: "800 MS/s" },
            busType: "PXIe",
            price: 1111000
        },
        {
            category: "Signal Generator",
            model: "NI PXIe-5413 2-ch",
            description: "800 MS/s, ±12V, 2-ch AWG",
            specs: { channels: 2, voltage: "12V", bandwidth: "800 MS/s" },
            busType: "PXIe",
            price: 633900
        },
        {
            category: "Signal Generator",
            model: "NI PXIe-5413 1-ch",
            description: "800 MS/s, ±12V, 1-ch AWG",
            specs: { channels: 1, voltage: "12V", bandwidth: "800 MS/s" },
            busType: "PXIe",
            price: 422700
        },

        // R Series Multifunction RIO
        {
            category: "Multifunction RIO",
            model: "NI PXIe-7846R",
            description: "Kintex-7 160T, 8 AI, 500 kS/s/ch",
            specs: { channels: 8, voltage: "N/A", bandwidth: "500 kS/s/ch" },
            busType: "PXIe",
            price: 544200
        },
        {
            category: "Multifunction RIO",
            model: "NI PXIe-7856R",
            description: "Kintex-7 160T, 8 AI, 1 MS/s/ch",
            specs: { channels: 8, voltage: "N/A", bandwidth: "1 MS/s/ch" },
            busType: "PXIe",
            price: 725400
        },
        {
            category: "Multifunction RIO",
            model: "NI PXIe-7857R",
            description: "Kintex-7 160T, 8 AI, 1 MS/s/ch",
            specs: { channels: 8, voltage: "N/A", bandwidth: "1 MS/s/ch" },
            busType: "PXIe",
            price: 852200
        },
        {
            category: "Multifunction RIO",
            model: "NI PXIe-7858R",
            description: "Kintex-7 325T, 8 AI, 1 MS/s/ch",
            specs: { channels: 8, voltage: "N/A", bandwidth: "1 MS/s/ch" },
            busType: "PXIe",
            price: 1269300
        }

    ]
};
