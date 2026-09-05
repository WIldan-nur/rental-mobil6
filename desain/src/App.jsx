import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import OperationalHeader from './components/OperationalHeader';
import KpiGrid from './components/KpiGrid';
import FinancialChart from './components/FinancialChart';
import RentalsTable from './components/RentalsTable';
import CriticalAlerts from './components/CriticalAlerts';
import QuickAccess from './components/QuickAccess';
import PlaceholderPage from './components/PlaceholderPage';

function DashboardPage() {
  return (
    <div className="flex flex-col w-full gap-space-lg">
      <OperationalHeader />
      <KpiGrid />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <div className="lg:col-span-8 flex flex-col gap-space-lg">
          <FinancialChart />
          <RentalsTable />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-space-lg">
          <CriticalAlerts />
          <QuickAccess />
        </div>
      </div>
    </div>
  );
}

function Shell() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Sidebar activePath={location.pathname} onNavigate={(path) => navigate(path)} />
      <div className="pl-72">
        <Header />
        <main className="w-full pt-16 bg-background px-space-xl py-space-lg">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/manajemen-armada" element={<PlaceholderPage title="Manajemen Armada" subtitle="Kelola daftar unit kendaraan, spesifikasi, status servis, dan dokumen operasional armada rental." />} />
            <Route path="/pemesanan-and-reservasi" element={<PlaceholderPage title="Pemesanan & Reservasi" subtitle="Pusat booking, jadwal ketersediaan, dan alokasi unit untuk pelanggan korporat maupun personal." />} />
            <Route path="/pelanggan" element={<PlaceholderPage title="Pelanggan & e-KYC" subtitle="Database pelanggan, verifikasi identitas digital, dan histori transaksi penyewaan." />} />
            <Route path="/manajemen-supir" element={<PlaceholderPage title="Manajemen Supir" subtitle="Daftar supir profesional, jadwal tugas, rating layanan, dan dokumen SIM." />} />
            <Route path="/pelacakan-gps-and-keamanan" element={<PlaceholderPage title="Pelacakan GPS & Keamanan" subtitle="Live tracking armada, geofencing perimeter operasional, dan pusat keamanan perjalanan." />} />
            <Route path="/laporan-and-keuangan" element={<PlaceholderPage title="Laporan & Keuangan" subtitle="Laporan keuangan, analisis profitabilitas unit, dan rekonsiliasi pembayaran." />} />
            <Route path="/pengaturan-sistem" element={<PlaceholderPage title="Pengaturan Sistem" subtitle="Konfigurasi hak akses pengguna, integrasi payment gateway, dan preferensi aplikasi." />} />
            <Route path="*" element={<PlaceholderPage title="Halaman Tidak Ditemukan" subtitle="Modul yang Anda akses belum tersedia." />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}

export default App;