export default function FinancialChart() {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[20px]">stacked_line_chart</span>
            <h2 className="font-headline-md text-headline-md text-primary">Grafik Pendapatan & Arus Kas</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Komparasi penerimaan sewa unit vs pengeluaran operasional (BBM & servis berkala)
          </p>
        </div>
        <div className="flex items-center gap-space-xs">
          <div className="flex items-center p-1 bg-surface-container rounded-lg">
            <button className="px-2.5 py-1 rounded font-label-sm text-label-sm bg-surface-container-lowest text-primary shadow-xs" type="button">Mingguan</button>
            <button className="px-2.5 py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface" type="button">Bulanan</button>
            <button className="px-2.5 py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface" type="button">Tahunan</button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-space-lg pt-space-xs">
        <div className="flex items-center gap-space-xs">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="font-label-md text-label-md text-on-surface">Arus Masuk (Penyewaan)</span>
          <span className="font-mono-data text-label-sm text-primary font-bold">Rp 194.8M</span>
        </div>
        <div className="flex items-center gap-space-xs">
          <div className="w-3 h-3 rounded-full bg-secondary"></div>
          <span className="font-label-md text-label-md text-on-surface">Arus Keluar (BBM & Servis)</span>
          <span className="font-mono-data text-label-sm text-secondary font-bold">Rp 38.2M</span>
        </div>
        <div className="ml-auto hidden sm:flex items-center gap-space-xs text-on-surface-variant">
          <span className="font-mono-data text-label-sm">Margin Bersih:</span>
          <span className="font-label-md text-label-md text-on-secondary-fixed bg-secondary-container px-2 py-0.5 rounded-full">80.4%</span>
        </div>
      </div>

      <div className="w-full h-64 relative mt-space-xs flex flex-col justify-end">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 720 220">
          <defs>
            <linearGradient id="incomeGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#450C3F" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#450C3F" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="expenseGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#51643D" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#51643D" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <line stroke="#E9DFED" strokeDasharray="3 3" x1="0" x2="720" y1="30" y2="30" />
          <line stroke="#E9DFED" strokeDasharray="3 3" x1="0" x2="720" y1="80" y2="80" />
          <line stroke="#E9DFED" strokeDasharray="3 3" x1="0" x2="720" y1="130" y2="130" />
          <line stroke="#E9DFED" x1="0" x2="720" y1="180" y2="180" />
          <path d="M0,140 Q60,110 120,120 T240,70 T360,95 T480,45 T600,60 T720,25 L720,180 L0,180 Z" fill="url(#incomeGradient)" />
          <path d="M0,140 Q60,110 120,120 T240,70 T360,95 T480,45 T600,60 T720,25" fill="none" stroke="#450C3F" strokeLinecap="round" strokeWidth="3" />
          <path d="M0,165 Q60,155 120,160 T240,145 T360,150 T480,135 T600,140 T720,120 L720,180 L0,180 Z" fill="url(#expenseGradient)" />
          <path d="M0,165 Q60,155 120,160 T240,145 T360,150 T480,135 T600,140 T720,120" fill="none" stroke="#51643D" strokeLinecap="round" strokeWidth="2.5" />
          <circle cx="480" cy="45" fill="#450C3F" r="5" stroke="#ffffff" strokeWidth="2" />
          <circle cx="480" cy="135" fill="#51643D" r="4" stroke="#ffffff" strokeWidth="2" />
        </svg>
        <div className="flex justify-between font-mono-data text-label-sm text-on-surface-variant pt-space-xs">
          <span>Sen (18)</span><span>Sel (19)</span><span>Rab (20)</span><span>Kam (21)</span><span>Jum (22)</span><span>Sab (23)</span>
          <span className="text-primary font-bold">Min (24)</span>
        </div>
      </div>
    </div>
  );
}