<template>
  <section id="catalogue" class="py-24 bg-stone-50 overflow-hidden">
    <div class="container mx-auto px-6 md:px-12">
      <!-- Header Section -->
      <div
        class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
      >
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="h-px w-8 bg-amber-600"></span>
            <span
              class="text-amber-600 font-sans tracking-[0.2em] uppercase text-xs font-bold"
              >Katalog Koleksi</span
            >
          </div>
          <h2
            class="text-4xl md:text-5xl font-heading text-stone-900 leading-tight mb-6"
          >
            Katalog Koleksi <span class="italic text-amber-700">Nusantara</span>
          </h2>
          <p class="text-lg text-stone-600 font-body leading-relaxed">
            Jelajahi keberagaman motif dan filosofi dari berbagai penjuru tanah
            air. Temukan keindahan yang diwariskan secara turun-temurun melalui
            sentuhan tangan para maestro batik.
          </p>
        </div>

        <!-- Dropdown Select Filter -->
        <div class="self-start md:self-end">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button
                variant="outline"
                size="lg"
                rounded="none"
                class="min-w-50 justify-between border-stone-300 text-stone-700 hover:bg-stone-100"
              >
                <span class="flex items-center gap-2">
                  <span
                    class="text-xs text-stone-400 font-sans uppercase tracking-wider"
                    >Lokasi:</span
                  >
                  {{ activeFilter }}
                </span>
                <ChevronDown class="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              class="min-w-50 rounded-none border-stone-200"
            >
              <DropdownMenuRadioGroup v-model="activeFilter">
                <DropdownMenuRadioItem
                  v-for="filter in filters"
                  :key="filter"
                  :value="filter"
                  class="rounded-none focus:bg-amber-50 focus:text-amber-900 cursor-pointer pl-4 data-[state=checked]:bg-amber-100 data-[state=checked]:text-amber-900 data-[state=checked]:font-semibold [&>span]:hidden"
                >
                  {{ filter }}
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <!-- Catalogue Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <LandingProductCard
          v-for="product in filteredProducts"
          :key="product.nama"
          :product="product"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="py-20 text-center">
        <p class="text-stone-400 font-serif italic text-xl">
          Tidak ada koleksi ditemukan untuk lokasi ini.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { ChevronDown } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

const filters = ["Semua", "Solo", "Yogyakarta", "Pekalongan", "Semarang"];
const activeFilter = ref("Semua");

const products = [
  {
    nama: "Parang Kusumo Sogan",
    asal: "Solo",
    image: "/images/hero.webp",
    deskripsi:
      "Motif Parang Kusumo yang klasik dengan warna sogan alam yang hangat dan berwibawa.",
    filosofi:
      "Menggambarkan bunga yang sedang mekar, melambangkan kehidupan yang harus dijalani dengan penuh perjuangan namun tetap indah.",
    seller: "Batik Danar Hadi",
    umkmPhone: "628123456789",
    umkmLocation: "Laweyan",
  },
  {
    nama: "Wahyu Tumurun Canting",
    asal: "Yogyakarta",
    image: "/images/hero.webp",
    deskripsi:
      "Batik tulis halus dengan motif Wahyu Tumurun yang penuh dengan simbol keberkahan.",
    filosofi:
      "Melambangkan turunnya petunjuk atau anugerah dari Yang Maha Kuasa untuk masa depan yang lebih baik.",
    seller: "Batik Winotosastro",
    umkmPhone: "628123456789",
    umkmLocation: "Mantrijeron",
  },
  {
    nama: "Pekalongan Buketan",
    asal: "Pekalongan",
    image: "/images/hero.webp",
    deskripsi:
      "Ciri khas batik pesisir dengan motif rangkaian bunga yang cerah dan dinamis.",
    filosofi:
      "Terinspirasi dari pengaruh Eropa dan Cina, melambangkan keterbukaan dan akulturasi budaya yang harmonis.",
    seller: "Oey Soe Tjoen",
    umkmPhone: "628123456789",
    umkmLocation: "Kedungwuni",
  },
  {
    nama: "Semarangan Warak Ngendog",
    asal: "Semarang",
    image: "/images/hero.webp",
    deskripsi:
      "Motif unik yang terinspirasi dari ikon budaya Semarang, Warak Ngendog.",
    filosofi:
      "Simbol persatuan tiga etnis: Jawa, Arab, dan Cina yang hidup rukun berdampingan di Semarang.",
    seller: "Batik Semarang 16",
    umkmPhone: "628123456789",
    umkmLocation: "Tembalang",
  },
  {
    nama: "Sidomukti Magetan",
    asal: "Solo",
    image: "/images/hero.webp",
    deskripsi:
      "Motif klasik yang sering digunakan dalam upacara adat pernikahan Jawa.",
    filosofi:
      "Sido berarti jadi, Mukti berarti mulia. Berharap pemakainya mendapatkan kemuliaan dan kesejahteraan.",
    seller: "Batik Keris",
    umkmPhone: "628123456789",
    umkmLocation: "Grogol",
  },
  {
    nama: "Nitik Karawitan",
    asal: "Yogyakarta",
    image: "/images/hero.webp",
    deskripsi:
      "Motif Nitik yang menyerupai anyaman, dibuat dengan ketelitian tingkat tinggi.",
    filosofi:
      "Melambangkan kesederhanaan, ketenangan, dan keteraturan dalam menjalani kehidupan bermasyarakat.",
    seller: "Batik Rara Djonggrang",
    umkmPhone: "628123456789",
    umkmLocation: "Tirtodipuran",
  },
];

const filteredProducts = computed(() => {
  if (activeFilter.value === "Semua") return products;
  return products.filter((p) => p.asal === activeFilter.value);
});
</script>

<style scoped>
/* Any specific styles for the catalogue section */
</style>
