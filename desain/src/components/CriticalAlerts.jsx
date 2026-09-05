const alerts = [
  {
    badge: { icon: 'alarm', label: 'Sisa 2 Jam', tone: 'bg-error-container text-on-error-container font-bold' },
    plate: 'B 888 VIP', title: 'Toyota Alphard Gen 4',
    desc: 'Penyewa: Hendra Wijaya (Executive)',
    actions: [
      { icon: 'call', label: 'Kontak', tone: 'bg-surface-container-highest text-primary hover:bg-surface-container-high' },
      { icon: 'update', label: 'Perpanjang', tone: 'bg-primary-container text-on-primary hover:bg-primary' },
    ],
  },
  {
    badge: { icon: 'build_circle', label: 'Lewat 500 km', tone: 'bg-surface-container-highest text-primary-container font-bold' },
    plate: 'B 1904 TKN', title: 'Mitsubishi Pajero Sport',
    desc: 'Jadwal ganti oli transmisi & filter udara besok (09:00 WIB di Bengkel Resmi).',
    actions: [
      { icon: 'task_alt', label: 'Konfirmasi SPK Bengkel', tone: 'bg-secondary-container text-on-secondary-fixed hover:bg-secondary-fixed-dim font-semibold', full: true },
    ],
  },
  {
    badge: { icon: 'event_busy', label: 'Tempo 5 Hari', tone: 'bg-secondary-container text-on-secondary-fixed font-semibold' },
    plate: 'B 2033 PAW', title: 'Toyota Avanza Veloz',
    desc: 'Pajak tahunan & perpanjangan STNK Samsat Jakarta Selatan.',
    actions: [
      { icon: 'description', label: 'Urus Samsat Online', tone: 'bg-surface-container-highest text-primary hover:bg-surface-container-high', full: true },
    ],
  },
];

export default function CriticalAlerts() {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[22px]">notification_important</span>
          <h2 className="font-headline-md text-headline-md text-primary">Peringatan Kritis</h2>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold animate-pulse">3 Tindakan</span>
      </div>
      <div className="flex flex-col gap-space-sm">
        {alerts.map((a, i) => (
          <div key={i} className="p-space-sm bg-surface-container-low rounded-xl flex flex-col gap-space-xs group hover:bg-surface-container transition-all">
            <div className="flex items-center justify-between">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-label-sm text-label-sm ${a.badge.tone}`}>
                <span className="material-symbols-outlined text-[13px]">{a.badge.icon}</span>
                {a.badge.label}
              </span>
              <span className="font-mono-data text-label-sm text-on-surface-variant">{a.plate}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary">{a.title}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{a.desc}</span>
            </div>
            <div className="flex items-center gap-space-xs mt-1">
              {a.actions.map((btn, j) => (
                <button key={j} type="button"
                  className={`py-1.5 px-space-xs rounded-lg font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1 ${btn.tone} ${btn.full ? 'w-full' : 'flex-1'}`}>
                  <span className="material-symbols-outlined text-[15px]">{btn.icon}</span>
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}