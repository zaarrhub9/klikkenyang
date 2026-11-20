        let cart = [];

        // Tab Navigation Switcher
        function switchTab(tabId) {
            document.querySelectorAll('section[id^="tab-"]').forEach(el => el.classList.add('hidden'));
            document.getElementById(`tab-${tabId}`).classList.remove('hidden');
            
            document.querySelectorAll('.nav-link').forEach(el => {
                el.classList.remove('text-amber-500');
                el.classList.add('text-slate-300');
            });
            
            // Highlight active
            event && event.currentTarget && event.currentTarget.classList.add('text-amber-500');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Render Featured Stalls on Home
        function renderFeaturedStalls() {
            const container = document.getElementById('featured-stalls-container');
            const featured = stallsData.slice(0, 3);
            container.innerHTML = featured.map(stall => `
                <div class="bg-slate-950/60 border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between">
                    <div>
                        <div class="relative h-36 bg-slate-800 overflow-hidden">
                            <img src="${stall.image}" alt="${stall.name}" class="w-full h-full object-cover">
                            <span class="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${stall.status === 'open' ? 'bg-emerald-500 text-slate-950' : 'bg-amber-500 text-slate-950'}">
                                ${stall.status === 'open' ? 'BUKA' : 'PRE-ORDER'}
                            </span>
                        </div>
                        <div class="p-4 space-y-2">
                            <span class="text-xs font-semibold text-amber-500">${stall.category}</span>
                            <h3 class="font-bold text-white text-base leading-tight">${stall.name}</h3>
                            <p class="text-xs text-slate-400"><i class="fa-solid fa-location-dot mr-1 text-slate-500"></i>${stall.address}</p>
                        </div>
                    </div>
                    <div class="p-4 pt-0 flex justify-between items-center border-t border-slate-800/60 mt-2 pt-3">
                        <span class="text-xs font-semibold text-emerald-400"><i class="fa-solid fa-bolt mr-1"></i>${stall.stockStatus}</span>
                        <button onclick="switchTab('menu')" class="bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-xl transition">Pilih Menu</button>
                    </div>
                </div>
            `).join('');
        }

        // Render Stalls Grid with Filter
        function renderStalls(filter = 'all') {
            const grid = document.getElementById('stalls-grid');
            let filtered = stallsData;
            if (filter === 'open') filtered = stallsData.filter(s => s.status === 'open');
            if (filter === 'preorder') filtered = stallsData.filter(s => s.status === 'preorder');

            grid.innerHTML = filtered.map(stall => `
                <div class="bg-slate-950/60 border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between">
                    <div>
                        <div class="relative h-40 bg-slate-800">
                            <img src="${stall.image}" alt="${stall.name}" class="w-full h-full object-cover">
                            <span class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${stall.status === 'open' ? 'bg-emerald-500 text-slate-950' : 'bg-amber-500 text-slate-950'}">
                                ${stall.statusText}
                            </span>
                        </div>
                        <div class="p-5 space-y-2">
                            <div class="flex justify-between items-center">
                                <span class="text-xs font-semibold text-amber-500 uppercase tracking-wider">${stall.category}</span>
                                <span class="text-xs text-amber-400 font-bold"><i class="fa-solid fa-star mr-1"></i>${stall.rating}</span>
                            </div>
                            <h3 class="font-bold text-white text-lg">${stall.name}</h3>
                            <p class="text-xs text-slate-400"><i class="fa-solid fa-location-dot mr-1.5 text-slate-500"></i>${stall.address}</p>
                            <p class="text-xs font-medium text-emerald-400 pt-1"><i class="fa-solid fa-circle-check mr-1.5"></i>${stall.stockStatus}</p>
                        </div>
                    </div>
                    <div class="p-5 pt-0 flex space-x-2 border-t border-slate-800/80 pt-4 mt-2">
                        <button onclick="switchTab('menu')" class="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold py-2.5 rounded-xl transition text-center shadow-md">
                            Pre-Order Menu
                        </button>
                        <a href="https://wa.me/${stall.phone}?text=Halo%20${encodeURIComponent(stall.name)},%20saya%20ingin%20tanya%20menu%20malam%20ini%20lewat%20Klikkenyang.id" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center">
                            <i class="fa-brands fa-whatsapp text-base"></i>
                        </a>
                    </div>
                </div>
            `).join('');
        }

        function filterStalls(type) {
            document.querySelectorAll('.stall-filter-btn').forEach(btn => {
                btn.classList.remove('bg-amber-500', 'text-slate-950');
                btn.classList.add('bg-slate-800', 'text-slate-300');
            });
            event.currentTarget.classList.remove('bg-slate-800', 'text-slate-300');
            event.currentTarget.classList.add('bg-amber-500', 'text-slate-950');
            renderStalls(type);
        }

        // Render Menu Catalog
        function renderMenu() {
            const grid = document.getElementById('menu-grid');
            grid.innerHTML = menuData.map(item => `
                <div class="bg-slate-950/60 border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between">
                    <div>
                        <div class="relative h-36 bg-slate-800">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                            <span class="absolute top-2.5 right-2.5 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-bold px-2 py-1 rounded-lg border border-slate-700">
                                Sisa: ${item.remaining} porsi
                            </span>
                        </div>
                        <div class="p-4 space-y-1.5">
                            <span class="text-[11px] text-slate-400 font-medium block truncate">${item.stallName}</span>
                            <h3 class="font-bold text-white text-sm leading-snug">${item.name}</h3>
                            <p class="text-amber-500 font-extrabold text-base pt-1">Rp ${item.price.toLocaleString('id-ID')}</p>
                        </div>
                    </div>
                    <div class="p-4 pt-0">
                        <button onclick="addToCart(${item.id})" class="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold py-2.5 rounded-xl transition shadow-md flex items-center justify-center space-x-1.5">
                            <i class="fa-solid fa-plus"></i>
                            <span>Tambah ke Pre-Order</span>
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Render Directory WhatsApp
        function renderDirectory(searchQuery = '') {
            const grid = document.getElementById('directory-grid');
            let filtered = stallsData;
            if (searchQuery) {
                filtered = stallsData.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.category.toLowerCase().includes(searchQuery.toLowerCase()));
            }

            grid.innerHTML = filtered.map(stall => `
                <div class="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg flex flex-col justify-between">
                    <div class="space-y-2">
                        <div class="flex justify-between items-start">
                            <span class="text-xs font-semibold bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg text-amber-400">${stall.category}</span>
                            <span class="text-xs text-emerald-400 font-medium"><i class="fa-solid fa-circle text-[8px] mr-1"></i>Aktif WA</span>
                        </div>
                        <h3 class="font-bold text-white text-base">${stall.name}</h3>
                        <p class="text-xs text-slate-400"><i class="fa-solid fa-location-dot mr-1.5 text-slate-500"></i>${stall.address}</p>
                    </div>
                    <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                        <span class="text-xs text-slate-400 font-mono">+${stall.phone}</span>
                        <a href="https://wa.me/${stall.phone}?text=Halo%20${encodeURIComponent(stall.name)},%20saya%20mendapatkan%20kontak%20ini%20dari%20Direktori%20Klikkenyang.id" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shadow-md">
                            <i class="fa-brands fa-whatsapp text-sm"></i>
                            <span>Chat WA</span>
                        </a>
                    </div>
                </div>
            `).join('');
        }

        function filterDirectory() {
            const query = document.getElementById('wa-search').value;
            renderDirectory(query);
        }

        // Cart Logic
        function addToCart(itemId) {
            const item = menuData.find(m => m.id === itemId);
            const existing = cart.find(c => c.id === itemId);
            if (existing) {
                if (existing.qty < item.remaining) {
                    existing.qty++;
                } else {
                    showAlert('Batas Stok', 'Stok pre-order maksimum untuk menu ini telah tercapai.');
                    return;
                }
            } else {
                cart.push({ ...item, qty: 1 });
            }
            updateCartBadge();
            showAlert('Ditambahkan', `${item.name} berhasil dimasukkan ke daftar pre-order!`);
        }

        function updateCartBadge() {
            const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
            document.getElementById('cart-badge').innerText = totalQty;
        }

        function openCartModal() {
            if (cart.length === 0) {
                showAlert('Keranjang Kosong', 'Silakan pilih menu pre-order terlebih dahulu di katalog menu.');
                return;
            }
            const container = document.getElementById('cart-items-container');
            container.innerHTML = cart.map((item, idx) => `
                <div class="bg-slate-950 border border-slate-800 rounded-xl p-3 flex justify-between items-center">
                    <div>
                        <h4 class="text-xs font-bold text-white">${item.name}</h4>
                        <span class="text-xs text-amber-500">Rp ${item.price.toLocaleString('id-ID')} x ${item.qty}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button onclick="changeQty(${idx}, -1)" class="bg-slate-800 hover:bg-slate-700 text-white w-6 h-6 rounded-lg text-xs font-bold">-</button>
                        <span class="text-xs font-bold text-white w-4 text-center">${item.qty}</span>
                        <button onclick="changeQty(${idx}, 1)" class="bg-slate-800 hover:bg-slate-700 text-white w-6 h-6 rounded-lg text-xs font-bold">+</button>
                    </div>
                </div>
            `).join('');

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const total = subtotal + 2000; // Flat delivery fee
            document.getElementById('cart-total-price').innerText = `Rp ${total.toLocaleString('id-ID')}`;
            document.getElementById('cart-modal').classList.remove('hidden');
        }

        function closeCartModal() {
            document.getElementById('cart-modal').classList.add('hidden');
        }

        function changeQty(index, delta) {
            cart[index].qty += delta;
            if (cart[index].qty <= 0) {
                cart.splice(index, 1);
            }
            updateCartBadge();
            if (cart.length === 0) {
                closeCartModal();
            } else {
                openCartModal();
            }
        }

        function submitPreOrder() {
            const name = document.getElementById('order-name').value.trim();
            const phone = document.getElementById('order-phone').value.trim();
            const address = document.getElementById('order-address').value.trim();
            const time = document.getElementById('order-time').value;

            if (!name || !phone || !address) {
                showAlert('Data Belum Lengkap', 'Mohon lengkapi Nama, Nomor WhatsApp, dan Alamat Kos sebelum mengirim pesanan.');
                return;
            }

            let message = `Halo Admin Klikkenyang.id, saya ingin melakukan Pre-Order Malam:\n\n`;
            message += `*Nama:* ${name}\n`;
            message += `*No WA:* ${phone}\n`;
            message += `*Alamat:* ${address}\n`;
            message += `*Slot Waktu:* Pengiriman pukul ${time}\n\n`;
            message += `*Detail Pesanan:*\n`;
            
            let subtotal = 0;
            cart.forEach(item => {
                message += `- ${item.name} (${item.qty}x) @Rp ${item.price.toLocaleString('id-ID')}\n`;
                subtotal += item.price * item.qty;
            });
            const total = subtotal + 2000;
            message += `\n*Total (+Ongkir Rp2.000):* Rp ${total.toLocaleString('id-ID')}\n\nMohon konfirmasi pesanan saya. Terima kasih!`;

            const adminPhone = "6281234567890"; // Admin Klikkenyang
            const waUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
            
            closeCartModal();
            cart = [];
            updateCartBadge();
            
            window.open(waUrl, '_blank');
            showAlert('Pesanan Berhasil Disiapkan!', 'Aplikasi akan mengarahkan Anda ke WhatsApp Admin Klikkenyang.id untuk konfirmasi akhir.');
        }

        // Custom Modal Alert
        function showAlert(title, message) {
            document.getElementById('alert-title').innerText = title;
            document.getElementById('alert-message').innerText = message;
            document.getElementById('alert-modal').classList.remove('hidden');
        }

        function closeAlertModal() {
            document.getElementById('alert-modal').classList.add('hidden');
        }

        // Initialize on Load
        window.onload = function() {
            renderFeaturedStalls();
            renderStalls('all');
            renderMenu();
            renderDirectory();
        }
