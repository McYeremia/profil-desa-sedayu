// data/kegiatan.ts
export const kegiatanList = [
  "Bank Sampah",
  "Karang Taruna",
  "PKK",
  "Kerja Bakti",
  "Posyandu Keliling",
  "Posyandu Remaja",
  "Karawitan",
  "Argosari Cup",
];

export const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
