export default function PlaceholderPage({ title, subtitle }) {
  return (
    <div className="flex flex-col w-full gap-space-lg">
      <div className="flex flex-col">
        <span className="font-mono-data text-label-sm text-secondary tracking-widest uppercase">Modul Operasional</span>
        <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mt-0.5">{title}</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">{subtitle}</p>
      </div>
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col items-center justify-center text-center gap-space-sm min-h-[320px]">
        <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[28px]">construction</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary">Halaman Dalam Pengembangan</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Modul ini akan segera tersedia. Pantau terus pusat kendali operasional untuk pembaruan berikutnya.
        </p>
        <a href="/" className="mt-space-xs flex items-center gap-space-xs px-space-md py-2 rounded-xl bg-primary-container text-on-primary shadow-md hover:bg-primary transition-all font-label-md text-label-md">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Kembali ke Dashboard
        </a>
      </div>
    </div>
  );
}