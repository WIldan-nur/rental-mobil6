import { useState } from 'react';

export default function OperationalHeader() {
  const [range, setRange] = useState('Hari Ini');
  const ranges = ['Hari Ini', '7 Hari', '30 Hari'];
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
      <div className="flex flex-col">
        <div className="flex items-center gap-space-xs">
          <span className="font-mono-data text-label-sm text-secondary tracking-widest uppercase">Pusat Kendali Operasional</span>
          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          <span className="font-mono-data text-label-sm text-on-surface-variant">Zona Waktu: WIB (UTC+7)</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mt-0.5">Ringkasan Operasional Armada</h1>
      </div>
      <div className="flex flex-wrap items-center gap-space-sm">
        <div className="flex items-center p-1 bg-surface-container-high rounded-xl">
          {ranges.map((r) => (
            <button key={r} type="button" onClick={() => setRange(r)}
              className={`px-space-sm py-1 rounded-lg font-label-md text-label-md transition-all ${
                r === range ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {r}
            </button>
          ))}
        </div>
        <button type="button" className="flex items-center gap-space-xs px-space-md py-2 rounded-xl bg-surface-container-lowest text-primary shadow-sm hover:bg-surface-container transition-all">
          <span className="material-symbols-outlined text-[18px]">file_download</span>
          <span className="font-label-md text-label-md">Ekspor Laporan</span>
        </button>
        <button type="button" className="flex items-center gap-space-xs px-space-md py-2 rounded-xl bg-primary-container text-on-primary shadow-md hover:bg-primary transition-all">
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          <span className="font-label-md text-label-md">Tambah Booking Cepat</span>
        </button>
      </div>
    </div>
  );
}