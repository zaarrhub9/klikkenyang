        // Mock Database Stalls & Menu
        const stallsData = [
            {
                id: 1,
                name: "Warung Nasi Goreng Malam Barokah",
                category: "Nasi & Mie",
                status: "open",
                statusText: "Buka Sekarang (s.d 02.00)",
                stockStatus: "Stok Tersedia (Real-Time)",
                phone: "6281234567891",
                address: "Jl. Raya Dukuhwaluh No. 12 (Dekat Gerbang UMP)",
                rating: 4.8,
                image: "https://placehold.co/600x400/1e293b/f59e0b?text=Nasi+Goreng+Barokah"
            },
            {
                id: 2,
                name: "Pecel Lele & Ayam Penyet Malam Madura",
                category: "Penyetan",
                status: "open",
                statusText: "Buka Sekarang (s.d 01.30)",
                stockStatus: "Sisa 5 Porsi Pre-Order",
                phone: "6281234567892",
                address: "Depan Gang Kantin UMP",
                rating: 4.7,
                image: "https://placehold.co/600x400/1e293b/f59e0b?text=Pecel+Lele+Madura"
            },
            {
                id: 3,
                name: "Mie Ayam & Bakso Titoti Malam",
                category: "Mie & Sup",
                status: "preorder",
                statusText: "Terima Pre-Order (Buka jam 21.00)",
                stockStatus: "Ready for Pre-Order",
                phone: "6281234567893",
                address: "Jl. Dukuhwaluh Perempatan",
                rating: 4.9,
                image: "https://placehold.co/600x400/1e293b/f59e0b?text=Mie+Ayam+Titoti"
            },
            {
                id: 4,
                name: "Bubur Ayam Kuah Kuning Sunda Malam",
                category: "Bubur & Sup",
                status: "open",
                statusText: "Buka Sekarang (s.d 03.00)",
                stockStatus: "Stok Melimpah",
                phone: "6281234567894",
                address: "Selatan Kampus UMP",
                rating: 4.6,
                image: "https://placehold.co/600x400/1e293b/f59e0b?text=Bubur+Ayam+Malam"
            },
            {
                id: 5,
                name: "Sate Madura Cak Harun Malam",
                category: "Sate & Bakar",
                status: "preorder",
                statusText: "Terima Pre-Order (Buka jam 21.30)",
                stockStatus: "Sisa 3 Porsi Spesial",
                phone: "6281234567895",
                address: "Jl. Raden Patah UMP",
                rating: 4.9,
                image: "https://placehold.co/600x400/1e293b/f59e0b?text=Sate+Madura"
            },
            {
                id: 6,
                name: "Warteg Bahari 24 Jam UMP",
                category: "Nasi & Lauk",
                status: "open",
                statusText: "Buka 24 Jam",
                stockStatus: "Lauk Lengkap Real-Time",
                phone: "6281234567896",
                address: "Timur Lapangan UMP",
                rating: 4.5,
                image: "https://placehold.co/600x400/1e293b/f59e0b?text=Warteg+Bahari"
            }
        ];

        const menuData = [
            {
                id: 101,
                stallId: 1,
                stallName: "Warung Nasi Goreng Malam Barokah",
                name: "Nasi Goreng Spesial Pete Telur",
                price: 15000,
                remaining: 4,
                image: "https://placehold.co/400x300/1e293b/f59e0b?text=Nasgor+Pete"
            },
            {
                id: 102,
                stallId: 1,
                stallName: "Warung Nasi Goreng Malam Barokah",
                name: "Nasi Goreng Magelangan Malam",
                price: 14000,
                remaining: 7,
                image: "https://placehold.co/400x300/1e293b/f59e0b?text=Magelangan"
            },
            {
                id: 103,
                stallId: 2,
                stallName: "Pecel Lele & Ayam Penyet Madura",
                name: "Paket Ayam Penyet Sambal Ijo + Nasi",
                price: 18000,
                remaining: 2,
                image: "https://placehold.co/400x300/1e293b/f59e0b?text=Ayam+Penyet"
            },
            {
                id: 104,
                stallId: 2,
                stallName: "Pecel Lele & Ayam Penyet Madura",
                name: "Pecel Lele Krispi Jumbo",
                price: 13000,
                remaining: 5,
                image: "https://placehold.co/400x300/1e293b/f59e0b?text=Pecel+Lele"
            },
            {
                id: 105,
                stallId: 3,
                stallName: "Mie Ayam & Bakso Titoti Malam",
                name: "Mie Ayam Bakso Urat Besar",
                price: 16000,
                remaining: 6,
                image: "https://placehold.co/400x300/1e293b/f59e0b?text=Mie+Ayam+Bakso"
            },
            {
                id: 106,
                stallId: 4,
                stallName: "Bubur Ayam Kuah Kuning Sunda",
                name: "Bubur Ayam Komplit Suwir",
                price: 12000,
                remaining: 10,
                image: "https://placehold.co/400x300/1e293b/f59e0b?text=Bubur+Komplit"
            },
            {
                id: 107,
                stallId: 5,
                stallName: "Sate Madura Cak Harun Malam",
                name: "Sate Ayam Madura 10 Tusuk + Lontong",
                price: 20000,
                remaining: 3,
                image: "https://placehold.co/400x300/1e293b/f59e0b?text=Sate+Ayam"
            },
            {
                id: 108,
                stallId: 6,
                stallName: "Warteg Bahari 24 Jam UMP",
                name: "Nasi Rames Telur Dadar + Oreng Tempe",
                price: 11000,
                remaining: 15,
                image: "https://placehold.co/400x300/1e293b/f59e0b?text=Nasi+Rames"
            }
        ];
