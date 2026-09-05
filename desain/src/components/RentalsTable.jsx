const rentals = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_wooOjH0-mscE5xAYr33bbbVYUXGdfj1hA8k1F69tAMMBd8X3gczcdlxVpgbUZstG79vp77ekk53JCt9-Bw1ITtqX1ZeL0NQ8OKWGxiE9KDarx1HBt35307y0i795DATUlYn2B9-tXjk_mZt44oKVnPRmDD-u6iU31XmShO0duFZ2jDeZ0qzimTyeJ0tnke3r-UnN9OHNQcup9JiYpOOmjTdMVY86tw-9hVL3K85BaFzaCIo0_VbG1w',
    carName: 'Toyota Innova Zenix', plate: 'B 1420 SSX', plateNoIcon: false,
    customer: 'PT Pertamina Petro', sub: 'PIC: Aris Munandar',
    service: { icon: 'key', label: 'Lepas Kunci' },
    schedule: { date: '25 Okt 2024 - 17:00', remain: 'Sisa 26 Jam', remainTone: 'text-secondary font-medium' },
    pay: { icon: 'check', label: 'Lunas', tone: 'bg-secondary-container text-on-secondary-fixed' },
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDedeHJLC7-npDfyUgG4Wx2pdHK9buDyvV5YaWTWF-yApGDRCpWL3fyDRzoKISRq8reSGOltGgWdZsM44HykDb-YFJ9vh422PHRechYsdECF8n4j5cliOjkgaSEhcZ5WWQYgRKhIbmJvbdmISzfg5-Gf10G3kWzN_f066rMQgXQ2_QcSP5q1Lc0imJFJhh3nmw5pWFXzPTxtPP7GFgxti36Nrvy0F4WH31d0Mq9JIujAG5PxrI3ooAliQ',
    carName: 'Hyundai Ioniq 5 EV', plate: 'B 2901 RF', plateNoIcon: true,
    customer: 'Jessica Danubrata', sub: 'Personal VIP (+68119...)',
    service: { icon: 'badge', label: 'Dengan Supir' },
    schedule: { date: '24 Okt 2024 - 21:00', remain: 'Sisa 2 Jam', remainTone: 'text-error font-medium' },
    pay: { icon: 'pending', label: 'Sisa Deposit', tone: 'bg-surface-container-high text-on-primary-fixed-variant' },
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGWpt7_4HaMSm7JTpsveNtgWTZLzZFaEmiHx4owbEM40jc9a7xdVbctzsJNgpRjDpcdxZA3vPbrCvkJ5NtXo18PoAxt6uhIAaBNKC7bCu06lgYwqBhHu7gJPQ4y8uanNVBId2yv6oarA8fnndtdUCvOn-Z4BkgEL5MtKDF9KRcDEvTa5D9sMLppiF_DanRvVmLtAksc-qIZUlqU70UqGaek5VEQslch5WHFbOK2VDXubEddJFFEV6-ww',
    carName: 'Honda CR-V Turbo', plate: 'B 3312 KJA', plateNoIcon: false,
    customer: 'Bambang Wicaksono', sub: 'PT Kencana Travel',
    service: { icon: 'key', label: 'Lepas Kunci' },
    schedule: { date: '27 Okt 2024 - 10:00', remain: 'Sisa 3 Hari', remainTone: 'text-on-surface-variant' },
    pay: { icon: 'check', label: 'Lunas', tone: 'bg-secondary-container text-on-secondary-fixed' },
  },
];

export default function RentalsTable() {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-space-md sm:p-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[20px]">assignment</span>
          <div>
            <h2 className="font-headline-md text-headline-md text-primary">Penyewaan Aktif Terbaru</h2>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Monitoring kendaraan operasional yang sedang dalam durasi sewa aktif</span>
          </div>
        </div>
        <span className="font-label-sm text-label-sm text-on-secondary-container bg-secondary-container px-space-sm py-1 rounded-full font-semibold">Live Feed</span>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low text-primary font-label-md text-label-md uppercase tracking-wider">
              <th className="py-space-sm px-space-md">Mobil & Plat</th>
              <th className="py-space-sm px-space-md">Penyewa</th>
              <th className="py-space-sm px-space-md">Layanan</th>
              <th className="py-space-sm px-space-md">Jadwal Pengembalian</th>
              <th className="py-space-sm px-space-md">Status Bayar</th>
              <th className="py-space-sm px-space-md text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container">
            {rentals.map((r, i) => (
              <tr key={i} className="hover:bg-surface-container transition-colors">
                <td className="py-space-sm px-space-md">
                  <div className="flex items-center gap-space-sm">
                    <img className="w-12 h-10 object-cover rounded-lg shadow-xs" alt={r.carName} src={r.image} />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <span className="font-headline-sm text-headline-sm text-on-surface">{r.carName}</span>
                        {r.plateNoIcon && <span className="material-symbols-outlined text-[14px] text-secondary">bolt</span>}
                      </div>
                      <span className="font-mono-data text-label-sm text-primary font-semibold bg-surface-container px-1.5 py-0.5 rounded w-fit mt-0.5">{r.plate}</span>
                    </div>
                  </div>
                </td>
                <td className="py-space-sm px-space-md">
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg text-on-surface">{r.customer}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{r.sub}</span>
                  </div>
                </td>
                <td className="py-space-sm px-space-md">
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary-container bg-surface-container px-2 py-0.5 rounded-md">
                    <span className="material-symbols-outlined text-[14px]">{r.service.icon}</span>
                    {r.service.label}
                  </span>
                </td>
                <td className="py-space-sm px-space-md">
                  <div className="flex flex-col">
                    <span className="font-mono-data text-body-md text-on-surface">{r.schedule.date}</span>
                    <span className={`font-label-sm text-label-sm ${r.schedule.remainTone}`}>{r.schedule.remain}</span>
                  </div>
                </td>
                <td className="py-space-sm px-space-md">
                  <span className={`inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-1 rounded-full font-semibold ${r.pay.tone}`}>
                    <span className="material-symbols-outlined text-[14px]">{r.pay.icon}</span>
                    {r.pay.label}
                  </span>
                </td>
                <td className="py-space-sm px-space-md text-right">
                  <button className="p-1 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded-lg transition-all" type="button">
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-space-sm px-space-md bg-surface-container-low flex items-center justify-between">
        <span className="font-body-sm text-body-sm text-on-surface-variant">Menampilkan 3 dari 86 kendaraan aktif</span>
        <a className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1" href="#">
          Lihat Seluruh Reservasi
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}