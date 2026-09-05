const navItems = [
  { icon: 'dashboard', label: 'Dashboard & Analitik', path: '/' },
  { icon: 'directions_car', label: 'Manajemen Armada', path: '/manajemen-armada' },
  { icon: 'calendar_month', label: 'Pemesanan & Reservasi', path: '/pemesanan-and-reservasi' },
  { icon: 'badge', label: 'Pelanggan & e-KYC', path: '/pelanggan' },
  { icon: 'person_pin', label: 'Manajemen Supir', path: '/manajemen-supir' },
  { icon: 'fmd_good', label: 'Pelacakan GPS & Keamanan', path: '/pelacakan-gps-and-keamanan' },
  { icon: 'query_stats', label: 'Laporan & Keuangan', path: '/laporan-and-keuangan' },
  { icon: 'settings', label: 'Pengaturan Sistem', path: '/pengaturan-sistem' },
];

export default function Sidebar({ activePath = '/', onNavigate }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="h-16 px-space-lg flex items-center gap-space-sm">
          <img alt="VeloxFleet Logo" className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1W5pbSOlL8iLQwumSfdYtZIpvSdOIAzDCKudp5bHCd0qN6BWnjOTtmvP8b46GewRbPV_T7qQaL2oT6ZS_YBxTecQw9rjZuRylY_XO0VgbY4kf3GMgiioyRCv9PI5OE5CCv1YygFZgDR9Kta_i4YJKib1tVwYYPkF2syZ69CNxSON4YTBxCyNtj3BV4oEIFgbRhj5JweSxLYrf-EPqp7dsvN88GbhaioquqL9gjkOwh18xL1_cvJPAPc3Bpt" />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">VeloxFleet</span>
            <span className="font-mono-data text-label-sm text-on-surface-variant tracking-wider uppercase">Enterprise OS</span>
          </div>
        </div>
        <div className="px-space-md py-space-xs"><div className="h-px w-full bg-surface-container-high"></div></div>
        <nav className="flex flex-col gap-space-2xs px-space-sm pt-space-xs">
          {navItems.map((item) => {
            const isActive = item.path === activePath;
            return (
              <a key={item.path}
                className={`flex items-center gap-space-sm px-space-md py-space-sm rounded-xl transition-all group cursor-pointer ${
                  isActive ? 'bg-primary-container text-on-primary font-bold shadow-sm'
                          : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
                onClick={(e) => { e.preventDefault(); onNavigate?.(item.path); }}
                href={`#${item.path}`}>
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="font-label-lg text-label-lg">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
      <div className="p-space-md mb-space-xs">
        <div className="bg-secondary-container p-space-md rounded-xl flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-wider">Dispatch Status</span>
            <span className="font-headline-sm text-headline-sm text-on-secondary-fixed">Gate 04 Online</span>
          </div>
          <span className="material-symbols-outlined text-secondary">sensors</span>
        </div>
      </div>
    </aside>
  );
}