function KpiCard({ label, value, unit, icon, iconBg, iconColor, badge, badgeTone, footnote }) {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{label}</span>
          <div className="flex items-baseline gap-space-xs mt-1">
            {typeof value === 'string' && value.startsWith('Rp') ? (
              <>
                <span className="font-mono-data text-body-sm text-on-surface-variant">Rp</span>
                <span className="font-headline-lg text-headline-lg text-primary tracking-tight">{value.replace('Rp ', '')}</span>
              </>
            ) : (
              <>
                <span className="font-display-lg text-display-lg text-primary">{value}</span>
                {unit && <span className="font-label-sm text-label-sm text-on-surface-variant">{unit}</span>}
              </>
            )}
          </div>
        </div>
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}>
          <span className="material-symbols-outlined text-[20px]">{icon}</span>
        </div>
      </div>
      <div className="mt-space-sm flex items-center gap-space-2xs">
        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${badgeTone}`}>
          {badge}
        </span>
        <span className="font-body-sm text-body-sm text-on-surface-variant truncate">{footnote}</span>
      </div>
    </div>
  );
}

export default function KpiGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
      <KpiCard label="Total Armada" value="150" unit="Unit" icon="directions_car"
        iconBg="bg-surface-container" iconColor="text-primary"
        badge={<><span className="material-symbols-outlined text-[14px]">arrow_upward</span>+12 bln ini</>}
        badgeTone="bg-secondary-container text-on-secondary-fixed font-label-sm"
        footnote="Kapasitas 98%" />
      <KpiCard label="Tersedia" value="48" unit="Unit" icon="check_circle"
        iconBg="bg-secondary-container" iconColor="text-on-secondary-fixed"
        badge={<><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Siap Sewa</>}
        badgeTone="bg-secondary-container text-primary-container font-semibold"
        footnote="Pool Utama" />
      <KpiCard label="Sedang Disewa" value="86" unit="Unit" icon="key"
        iconBg="bg-secondary-container" iconColor="text-primary-container"
        badge={<>Okupansi 82%</>}
        badgeTone="bg-secondary-container text-primary-container font-bold"
        footnote="34 Luar Kota" />
      <KpiCard label="Perbaikan & Servis" value="16" unit="Unit" icon="build"
        iconBg="bg-surface-container-highest" iconColor="text-error"
        badge={<><span className="w-1.5 h-1.5 rounded-full bg-error"></span>Maintenance</>}
        badgeTone="bg-error-container text-on-error-container font-semibold"
        footnote="4 Beres Hari Ini" />
      <KpiCard label="Pendapatan Hari Ini" value="Rp 28.450.000" icon="payments"
        iconBg="bg-secondary-container" iconColor="text-primary-container"
        badge={<><span className="material-symbols-outlined text-[14px]">trending_up</span>+14.8%</>}
        badgeTone="bg-secondary-container text-on-secondary-fixed font-semibold"
        footnote="vs kemarin" />
    </div>
  );
}