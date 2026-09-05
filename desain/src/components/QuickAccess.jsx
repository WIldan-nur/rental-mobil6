const tools = [
  { icon: 'calculate', iconColor: 'text-primary', title: 'Kalkulator Tarif Dinamis', sub: 'Simulasi harga weekend & peak season' },
  { icon: 'fmd_good', iconColor: 'text-secondary', title: 'Cek Status Geofence', sub: '3 batas perimeter Jabodetabek aman' },
];

export default function QuickAccess() {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
      <h2 className="font-headline-md text-headline-md text-primary">Akses Operasional Cepat</h2>
      <div className="grid grid-cols-1 gap-space-sm">
        {tools.map((t, i) => (
          <div key={i} className="p-space-md bg-surface-container rounded-xl flex items-center justify-between group hover:bg-secondary-container transition-all cursor-pointer">
            <div className="flex items-center gap-space-sm">
              <div className={`w-10 h-10 rounded-xl bg-surface-container-lowest ${t.iconColor} flex items-center justify-center shadow-xs`}>
                <span className="material-symbols-outlined text-[22px]">{t.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary">{t.title}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{t.sub}</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-primary text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        ))}
      </div>

      <div className="mt-space-2xs rounded-xl overflow-hidden relative shadow-inner">
        <div className="w-full h-32 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkRABE6w8Nh_WKTJqSUriNFIeLbYW2WAdIWUyQWovvv4w58cp0Wq8UPO_HcBLBO43E6ezcchvhFLw84K7cmJIGIL6vsztfQqVULW7NT-hK3mESficFCwR6pVVZDCHlXILNZJxoSlhZf_7SCDZKzBww07D248TKTxXlAJA_OTF5TPTRlrTOoEvwmG8b388W1MceHU-IxgRnGuXDh8k7NxKffLXh3ZE6sAO3slYXkztl3rXgNcu7b9m46A')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-sm">
          <div className="flex items-center justify-between w-full text-on-primary">
            <div className="flex items-center gap-space-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-ping"></span>
              <span className="font-label-md text-label-md">Yard Senayan Hub</span>
            </div>
            <span className="font-mono-data text-label-sm text-secondary-container">18 Unit Parkir</span>
          </div>
        </div>
      </div>
    </div>
  );
}