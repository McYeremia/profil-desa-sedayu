// components/KegiatanGrid.tsx
"use client";

import Link from "next/link";
import { kegiatanList, slugify } from "../data/kegiatan";

type Props = {
  limit?: number; // untuk membatasi jumlah yang ditampilkan (opsional)
};

export default function KegiatanGrid({ limit }: Props) {
  const list = limit ? kegiatanList.slice(0, limit) : kegiatanList;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {list.map((item, index) => (
        <Link href={`/kegiatan/${slugify(item)}`} key={index}>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center font-semibold text-lg text-black hover:shadow-xl transition duration-300 hover:bg-blue-100 cursor-pointer">
            {item}
          </div>
        </Link>
      ))}
    </div>
  );
}
