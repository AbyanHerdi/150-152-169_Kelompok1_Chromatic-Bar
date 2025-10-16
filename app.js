// Chromatic Bar — SPA sederhana untuk navigasi, menu, keranjang, dan reservasi

// Util format uang IDR
const rupiah = (n) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n)

// Data menu (gambar sudah ada di /public/images/menu)
const MENU = [
  // Mocktail
  {
    id: "neon-mojito",
    name: "Neon Mojito",
    cat: "mocktail",
    price: 39000,
    img: "public/images/menu/neon-mojito.jpg",
    desc: "Lime mint segar tanpa alkohol.",
    badge: true,
  },
  {
    id: "sunset-spritz",
    name: "Sunset Spritz",
    cat: "mocktail",
    price: 42000,
    img: "public/images/menu/sunset-spritz.jpg",
    desc: "Citrus sparkling, fruity.",
    badge: false,
  },
  {
    id: "blue-lagoon",
    name: "Blue Lagoon",
    cat: "mocktail",
    price: 42000,
    img: "public/images/menu/blue-lagoon.jpg",
    desc: "Birunya laut tropis, segar.",
    badge: false,
  },
  {
    id: "citrus-spark",
    name: "Citrus Spark",
    cat: "mocktail",
    price: 38000,
    img: "public/images/menu/citrus-spark.jpg",
    desc: "Jeruk nipis + soda.",
    badge: false,
  },
  {
    id: "berry-basil",
    name: "Berry Basil",
    cat: "mocktail",
    price: 41000,
    img: "public/images/menu/berry-basil.jpg",
    desc: "Strawberry basil segar.",
    badge: false,
  },
  {
    id: "mint-cooler",
    name: "Mint Cooler",
    cat: "mocktail",
    price: 37000,
    img: "public/images/menu/mint-cooler.jpg",
    desc: "Mint dingin menyegarkan.",
    badge: false,
  },
  // Coffee & Tea
  {
    id: "cold-brew",
    name: "Cold Brew",
    cat: "coffee",
    price: 30000,
    img: "public/images/menu/cold-brew.jpg",
    desc: "Kopi seduh dingin bold.",
    badge: false,
  },
  {
    id: "matcha",
    name: "Matcha Latte",
    cat: "coffee",
    price: 35000,
    img: "public/images/menu/matcha-latte.jpg",
    desc: "Matcha Jepang creamy.",
    badge: false,
  },
  {
    id: "earl-grey",
    name: "Earl Grey Tea",
    cat: "coffee",
    price: 25000,
    img: "public/images/menu/earl-grey.jpg",
    desc: "Teh bergamot hangat.",
    badge: false,
  },
  // Main
  {
    id: "ribeye",
    name: "Ribeye Steak",
    cat: "main",
    price: 120000,
    img: "public/images/menu/ribeye-steak.jpg",
    desc: "Ribeye juicy, saus lada.",
    badge: true,
  },
  {
    id: "burger",
    name: "Classic Burger",
    cat: "main",
    price: 65000,
    img: "public/images/menu/classic-burger.jpg",
    desc: "Patty beef + cheddar.",
    badge: false,
  },
  {
    id: "truffle-pasta",
    name: "Truffle Pasta",
    cat: "main",
    price: 78000,
    img: "public/images/menu/truffle-pasta.jpg",
    desc: "Krim jamur truffle.",
    badge: false,
  },
  {
    id: "grilled-salmon",
    name: "Grilled Salmon",
    cat: "main",
    price: 95000,
    img: "public/images/menu/grilled-salmon.jpg",
    desc: "Salmon panggang, lemon herb.",
    badge: false,
  },
  {
    id: "sirloin-steak",
    name: "Sirloin Steak",
    cat: "main",
    price: 110000,
    img: "public/images/menu/sirloin-steak.jpg",
    desc: "Sirloin tender, garlic butter.",
    badge: false,
  },
  // Snack
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    cat: "snack",
    price: 42000,
    img: "public/images/menu/loaded-fries.jpg",
    desc: "Keju leleh & beef bits.",
    badge: false,
  },
  {
    id: "caesar",
    name: "Caesar Salad",
    cat: "snack",
    price: 36000,
    img: "public/images/menu/caesar-salad.jpg",
    desc: "Romaine, crouton, dressing.",
    badge: false,
  },
  {
    id: "crispy-fries",
    name: "Crispy Fries",
    cat: "snack",
    price: 35000,
    img: "public/images/menu/crispy-fries.jpg",
    desc: "Kentang goreng renyah.",
    badge: false,
  },
  {
    id: "chicken-wings",
    name: "Chicken Wings",
    cat: "snack",
    price: 48000,
    img: "public/images/menu/chicken-wings.jpg",
    desc: "Sayap ayam crispy, saus.",
    badge: false,
  },
  {
    id: "truffle-fries",
    name: "Truffle Fries",
    cat: "snack",
    price: 45000,
    img: "public/images/menu/truffle-fries.jpg",
    desc: "Kentang truffle oil.",
    badge: false,
  },
  // Dessert
  {
    id: "cheesecake",
    name: "Cheesecake",
    cat: "dessert",
    price: 38000,
    img: "public/images/menu/cheesecake.jpg",
    desc: "Cream cheese lembut.",
    badge: false,
  },
  {
    id: "lava-cake",
    name: "Lava Cake",
    cat: "dessert",
    price: 42000,
    img: "public/images/menu/lava-cake.jpg",
    desc: "Cokelat lumer hangat.",
    badge: false,
  },
  {
    id: "brownie",
    name: "Brownie",
    cat: "dessert",
    price: 35000,
    img: "public/images/menu/brownie.jpg",
    desc: "Cokelat fudgy, walnut.",
    badge: false,
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    cat: "dessert",
    price: 40000,
    img: "public/images/menu/tiramisu.jpg",
    desc: "Kopi, mascarpone, ladyfinger.",
    badge: false,
  },
]

// Elemen DOM
const sections = {
  home: document.getElementById("home"),
  reserve: document.getElementById("reserve"),
  menu: document.getElementById("menu"),
}
const menuGrid = document.getElementById("menuGrid")
const menuTpl = document.getElementById("menuCardTpl")
const chips = document.querySelectorAll(".chip")

const cartAside = document.getElementById("cart")
const cartToggle = document.getElementById("cartToggle")
const cartClose = document.getElementById("cartClose")
const cartItemsEl = document.getElementById("cartItems")
const cartCountEl = document.getElementById("cartCount")
const subtotalEl = document.getElementById("subtotal")
const serviceFeeEl = document.getElementById("serviceFee")
const totalEl = document.getElementById("total")
const checkoutBtn = document.getElementById("checkoutBtn")

const reserveForm = document.getElementById("reserveForm")
const reserveMsg = document.getElementById("reserveMessage")
const reservationList = document.getElementById("reservationList")

// State & Storage
const CART_KEY = "chromatic_bar_cart_v1"
const RSV_KEY = "chromatic_bar_reservations_v1"
const SERVICE_RATE = 0.1

let cart = load(CART_KEY) || { items: {} }
const reservations = load(RSV_KEY) || []

// Helpers storage
function load(key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (_) {
    return null
  }
}
function save(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

// Navigasi section
document.querySelectorAll("[data-nav]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault()
    const target = el.getAttribute("data-nav")
    showSection(target)
  })
})
function showSection(id) {
  Object.entries(sections).forEach(([k, sec]) => {
    if (k === id) {
      sec.classList.remove("hidden")
      sec.classList.add("visible")
    } else {
      sec.classList.add("hidden")
      sec.classList.remove("visible")
    }
  })
  if (id === "menu") renderMenu(currentFilter)
}
showSection("home")

// Filter menu
let currentFilter = "all"
chips.forEach((ch) =>
  ch.addEventListener("click", () => {
    chips.forEach((c) => {
      c.classList.remove("active")
      c.setAttribute("aria-selected", "false")
    })
    ch.classList.add("active")
    ch.setAttribute("aria-selected", "true")
    currentFilter = ch.dataset.filter
    renderMenu(currentFilter)
  }),
)

// Render menu cards
function renderMenu(filter = "all") {
  menuGrid.innerHTML = ""
  const list = MENU.filter((m) => (filter === "all" ? true : m.cat === filter))
  list.forEach((item) => {
    const node = menuTpl.content.firstElementChild.cloneNode(true)
    const img = node.querySelector(".thumb")
    const caption = node.querySelector(".badge-silver")
    img.src = item.img
    img.alt = item.name
    node.querySelector(".item-name").textContent = item.name
    node.querySelector(".item-desc").textContent = item.desc
    node.querySelector(".price").textContent = rupiah(item.price)
    if (!item.badge) caption.style.display = "none"

    // Qty controls
    const qtyInput = node.querySelector(".qty-input")
    node.querySelectorAll(".qty-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const act = btn.dataset.act
        let val = Number.parseInt(qtyInput.value || "1", 10)
        val = isNaN(val) ? 1 : val
        if (act === "inc") val++
        if (act === "dec") val = Math.max(1, val - 1)
        qtyInput.value = val
      })
    })

    // Tambah ke keranjang
    node.querySelector(".add-btn").addEventListener("click", () => {
      const qty = Math.max(1, Number.parseInt(qtyInput.value || "1", 10))
      addToCart(item, qty)
      // Buka keranjang saat item pertama ditambahkan
      if (Object.keys(cart.items).length === 1) {
        openCart(true)
      }
    })

    menuGrid.appendChild(node)
  })
}

// Keranjang
function addToCart(item, qty = 1) {
  if (!cart.items[item.id]) {
    cart.items[item.id] = { id: item.id, name: item.name, price: item.price, img: item.img, qty: 0 }
  }
  cart.items[item.id].qty += qty
  persistCart()
}
function updateQty(id, qty) {
  const it = cart.items[id]
  if (!it) return
  it.qty = Math.max(1, qty)
  persistCart()
}
function removeItem(id) {
  delete cart.items[id]
  persistCart()
}
function computeTotals() {
  const entries = Object.values(cart.items)
  const subtotal = entries.reduce((s, i) => s + i.price * i.qty, 0)
  const svc = Math.round(subtotal * SERVICE_RATE)
  const total = subtotal + svc
  return { subtotal, svc, total, count: entries.reduce((s, i) => s + i.qty, 0) }
}
function renderCart() {
  const entries = Object.values(cart.items)
  cartItemsEl.innerHTML = ""
  entries.forEach((it) => {
    const row = document.createElement("div")
    row.className = "cart-item"
    row.innerHTML = `
      <img src="${it.img}" alt="${it.name}">
      <div class="meta">
        <strong>${it.name}</strong>
        <span class="muted">${rupiah(it.price)}</span>
      </div>
      <div class="actions">
        <button class="qty-btn" data-act="dec">−</button>
        <input class="qty-input" type="number" min="1" value="${it.qty}">
        <button class="qty-btn" data-act="inc">+</button>
        <button class="icon-btn" data-act="remove" aria-label="Hapus">Hapus</button>
      </div>
    `
    // actions
    const [decBtn, input, incBtn, rmBtn] = [
      row.querySelector('[data-act="dec"]'),
      row.querySelector(".qty-input"),
      row.querySelector('[data-act="inc"]'),
      row.querySelector('[data-act="remove"]'),
    ]
    decBtn.addEventListener("click", () => {
      updateQty(it.id, Math.max(1, Number.parseInt(input.value, 10) - 1))
      input.value = cart.items[it.id].qty
      updateSummary()
    })
    incBtn.addEventListener("click", () => {
      updateQty(it.id, (Number.parseInt(input.value, 10) || 1) + 1)
      input.value = cart.items[it.id].qty
      updateSummary()
    })
    input.addEventListener("input", () => {
      updateQty(it.id, Number.parseInt(input.value, 10) || 1)
      updateSummary()
    })
    rmBtn.addEventListener("click", () => {
      removeItem(it.id)
      renderCart()
      updateSummary()
      if (Object.keys(cart.items).length === 0) closeCart()
    })

    cartItemsEl.appendChild(row)
  })
}
function updateSummary() {
  const { subtotal, svc, total, count } = computeTotals()
  subtotalEl.textContent = rupiah(subtotal)
  serviceFeeEl.textContent = rupiah(svc)
  totalEl.textContent = rupiah(total)
  cartCountEl.textContent = count
  save(CART_KEY, cart)
}
function persistCart() {
  renderCart()
  updateSummary()
}

// Cart toggle
function openCart(force = false) {
  if (!force && Object.keys(cart.items).length === 0) return
  cartAside.classList.add("open")
  cartAside.setAttribute("aria-hidden", "false")
  cartToggle.setAttribute("aria-expanded", "true")
}
function closeCart() {
  cartAside.classList.remove("open")
  cartAside.setAttribute("aria-hidden", "true")
  cartToggle.setAttribute("aria-expanded", "false")
}
cartToggle.addEventListener("click", () => {
  if (Object.keys(cart.items).length === 0) {
    // belum ada item → jangan buka, berikan sedikit indikasi
    cartToggle.style.filter = "brightness(1.15)"
    setTimeout(() => (cartToggle.style.filter = ""), 180)
    return
  }
  if (cartAside.classList.contains("open")) closeCart()
  else openCart(true)
})
cartClose.addEventListener("click", closeCart)

// Checkout sederhana
checkoutBtn.addEventListener("click", () => {
  if (Object.keys(cart.items).length === 0) return
  const { total } = computeTotals()
  alert(`Terima kasih! Total pembayaran Anda: ${rupiah(total)}\nPesanan disimpan (simulasi).`)
  cart = { items: {} }
  persistCart()
  closeCart()
})

// Reservasi
function renderReservations() {
  reservationList.innerHTML = ""
  reservations.forEach((r) => {
    const li = document.createElement("li")
    li.className = "reservation"
    li.innerHTML = `<strong>${r.name}</strong> • ${r.guests} tamu • ${r.date} ${r.time} <span class="muted">(${r.phone})</span>`
    reservationList.appendChild(li)
  })
}
reserveForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(reserveForm).entries())
  const entry = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    date: data.date,
    time: data.time,
    guests: Number(data.guests || 1),
    notes: data.notes || "",
    createdAt: new Date().toISOString(),
  }
  reservations.unshift(entry)
  save(RSV_KEY, reservations)
  reserveMsg.textContent = "Reservasi berhasil dikirim! Kami akan menghubungi kamu via email/telepon."
  reserveForm.reset()
  renderReservations()
  setTimeout(() => (reserveMsg.textContent = ""), 3500)
})

// Init
renderMenu(currentFilter)
renderReservations()
persistCart()