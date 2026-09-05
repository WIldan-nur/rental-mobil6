export default function Header() {
  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-xl flex items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md flex-1 max-w-lg">
        <div className="w-full flex items-center bg-surface-container-lowest rounded-xl px-space-md py-space-xs shadow-[0_1px_3px_rgba(31,26,36,0.04)]">
          <span className="material-symbols-outlined text-on-surface-variant text-[20px] mr-space-xs">search</span>
          <input className="w-full bg-transparent border-none outline-none font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60"
            placeholder="Cari plat nomor, booking ID, atau unit armada..." readOnly type="text" />
          <kbd className="hidden sm:inline-flex items-center px-space-2xs py-0.5 rounded bg-surface-container text-on-surface-variant font-mono-data text-label-sm border-none">Ctrl+K</kbd>
        </div>
      </div>
      <div className="flex items-center gap-space-lg">
        <div className="hidden md:flex items-center gap-space-xs bg-secondary-container px-space-md py-space-xs rounded-full">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-label-sm text-label-sm text-on-secondary-container font-semibold">142 Mobil Aktif</span>
        </div>
        <div className="relative">
          <button className="p-space-xs rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all flex items-center justify-center" type="button">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
          </button>
        </div>
        <div className="h-8 w-px bg-surface-container-high"></div>
        <div className="flex items-center gap-space-sm pl-space-2xs">
          <div className="flex flex-col text-right hidden lg:flex">
            <span className="font-label-lg text-label-lg text-on-surface leading-tight">Rina Melati</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Fleet Ops Lead</span>
          </div>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-[0_1px_3px_rgba(31,26,36,0.08)]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAV6hCBItkj0RBAnkRefOHi57-xXIady8Fezwt0bJvOZTa-LUy4E89ABZqUx_hrSfxcrz-yomemQ2dKbSeWtYgWOExiDVuveWTPQVpqyDNQ1Tx1eyF9YWXmLcS-_AfkE3c2m3-DDSWJ7auYUTIFeUOGYeJn4Mf3UlC4WjmdPoWtoraBI0XKX5uEmtJUHANmCccBQ-WU43Fjl56C_hjqTAUKjNhqX4kPKZh5LFJxh7YmBwhIKm2CLBVDw" />
        </div>
      </div>
    </header>
  );
}