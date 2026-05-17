# Medora Admin Frontend

Medora Admin, klinik randevularını yönetmek için geliştirilen React ve TypeScript tabanlı bir yönetim paneli arayüzüdür. Arayüz Vite, Tailwind CSS, React Router, TanStack Query, Axios ve lucide-react ikonları ile oluşturulmuştur.

## Frontend Özeti

Frontend, klinik personeli için responsive bir yönetim paneli sunar. Uygulamada panel, doktorlar, randevular, takvim, bildirimler, randevu geçmişi, yönetici profili, giriş ve kayıt sayfaları bulunur. Yönetici kullanıcılar günlük randevu akışını görüntüleyebilir, doktor kayıtlarını yönetebilir, randevu durumlarını güncelleyebilir, randevuları erteleyebilir ve bildirimleri takip edebilir.

Veriler şu anda `src/services/api.ts` içinde bulunan simüle edilmiş API katmanı üzerinden yerel mock verilerden sağlanmaktadır. TanStack Query, bu verileri almak ve güncellemek için kullanılır; böylece arayüz davranışı gerçek bir backend API ile çalışıyormuş gibi tasarlanmıştır.

## Kullanılan Teknolojiler

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Axios
- lucide-react

## 📁 Klasör Yapısı

```
src/
├── components/        # Tekrar kullanılabilir UI bileşenleri
├── pages/             # Sayfa bileşenleri (her route için bir sayfa)
│   ├── LoginPage.tsx          # Giriş sayfası
│   ├── RegisterPage.tsx       # Kayıt sayfası
│   ├── DashboardPage.tsx      # Kontrol paneli
│   ├── DoctorsPage.tsx        # Doktor listesi ve yönetimi
│   ├── AppointmentsPage.tsx   # Randevu yönetimi
│   ├── CalendarPage.tsx       # Haftalık takvim görünümü
│   ├── NotificationsPage.tsx  # Bildirimler
│   ├── HistoryPage.tsx        # Randevu geçmişi
│   └── ProfilePage.tsx        # Profil ve klinik bilgileri
├── services/
│   └── api.ts         # Mock API katmanı (simüle edilmiş backend)
├── App.tsx            # Ana uygulama ve route tanımları
└── main.tsx           # Uygulama giriş noktası
```

---

## 🔗 Sayfa İlişkileri

```
/login          →  Giriş yapılınca → /dashboard
/register       →  Kayıt sonrası  → /login
/dashboard      →  Yan menü üzerinden tüm sayfalara erişim
/doctors        →  Doktor ekleme/düzenleme/silme (modal)
/appointments   →  Randevu onaylama/iptal/erteleme/tamamlama
/calendar       →  Doktor bazlı haftalık takvim görünümü
/notifications  →  Sistem bildirimleri listesi
/history        →  Geçmiş ve yaklaşan randevular (filtrelenebilir)
/profile        →  Yönetici hesabı ve klinik bilgileri
```

---


## Yerelde Çalıştırma

### Gereksinimler
- Node.js 18+
- npm


Bağımlılıkları yükleyin:

```bash
npm install
```

Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Production build almak için:

```bash
npm run build
```

## 📋 Sayfalar ve İşlevleri

### 🔐 Giriş Ekranı (Login)
Uygulama açıldığında kullanıcıları karşılayan ilk ekrandır. Sol tarafta Medora marka kimlik alanı yer alır; panelin sunduğu temel özellikler burada özetlenir. Sağ tarafta ise giriş formu bulunmaktadır.

- **E-posta:** Kayıtlı yönetici e-posta adresi girilir
- **Parola:** Hesap parolası girilir
- **Giriş yap** butonuna basılarak panele erişim sağlanır
- Hesabı olmayan kullanıcılar **Kaydol** bağlantısına tıklayarak kayıt ekranına yönlendirilir

<!-- ![Giriş Ekranı](screenshots/login.png) -->

---

### 📝 Hesap Oluşturma Ekranı (Register)
Giriş ekranındaki **Kaydol** bağlantısına tıklanarak ulaşılan formda yeni klinik yöneticisi hesabı oluşturulur. Form iki sütunlu düzenle sunulmakta olup aşağıdaki alanları içermektedir:

- **Ad Soyad** ve **Klinik Adı:** Yönetici ve kliniğe ait kimlik bilgileri
- **E-posta** ve **Telefon:** İletişim bilgileri
- **Şehir, İlçe** ve **Açık Adres:** Kliniğin fiziksel konum bilgileri
- **Belge Yükleme:** Klinik ruhsatı veya yetki belgesi (PDF, PNG, JPG)
- **Parola:** En az 8 karakter uzunluğunda olmalıdır

<!-- ![Kayıt Ekranı](screenshots/register.png) -->

---

### 🖥️ Kontrol Paneli (Dashboard)
Panel, günlük klinik faaliyetlerin anlık özetini sunan ana ekrandır. Giriş yapıldıktan sonra otomatik olarak bu ekrana yönlendirilir.

**Özet Kartlar**

| Kart | Açıklama |
|------|----------|
| Toplam Doktor | Sistemde kayıtlı tüm doktorların sayısı |
| Bugünkü Randevular | O güne ait onaylanmış ve bekleyen randevu sayısı |
| Bekleyen Talepler | Henüz onaylanmamış randevu taleplerinin sayısı |
| İptal Edilen Randevular | O gün iptal edilen randevu sayısı |

Kartların altında bugüne ait randevular doktora göre gruplanmış ve saate göre sıralanmış biçimde listelenir. Sağ panelde son sistem olayları (bildirimler) kronolojik sırayla görüntülenir.

<!-- ![Dashboard](screenshots/dashboard.png) -->

---

### 👨‍⚕️ Doktorlar Modülü
Klinikteki tüm doktorların profillerini, iletişim bilgilerini ve çalışma programlarını yönetmek için kullanılır.

**Doktor Listesi:** Doktor adı, uzmanlık, iletişim, çalışma günleri, saatler ve durum (Aktif/Pasif) tablo formatında listelenir. Ad ile anlık arama yapılabilir.

**Yeni Doktor Ekleme:** `+ Doktor Ekle` butonuyla açılan modal formda doktor adı, uzmanlık, iletişim bilgileri, durum ve her çalışma günü için başlangıç/bitiş/mola saatleri girilir.

**Doktor Düzenleme:** Kalem ikonu ile mevcut bilgiler düzenlenebilir.

**Doktor Silme:** Çöp kutusu ikonu ile onay alındıktan sonra kalıcı olarak silinir. Bu işlem geri alınamaz.

<!-- ![Doktorlar](screenshots/doctors.png) -->

---

### 📋 Randevular Modülü
Tüm hasta randevularının yönetildiği merkezi ekrandır. Onaylama, iptal, erteleme ve tamamlama işlemleri bu ekrandan gerçekleştirilir.

**Durum Renk Kodları:**

| Durum | Renk | Açıklama |
|-------|------|----------|
| Onaylandı | 🔵 Mavi | Randevu onaylanmış, gerçekleşmeyi bekliyor |
| Beklemede | 🟠 Turuncu | Henüz onaylanmamış yeni talep |
| İptal edildi | 🔴 Kırmızı | Hasta veya yönetici tarafından iptal edildi |
| Tamamlandı | 🟢 Yeşil | Muayene gerçekleşti ve kaydedildi |

**Randevu İşlemleri:** Her satırın sağında onayla (✓), tarih değiştir (📅), yönlendir (→) ve tamamlandı işaretle (⊙) ikonları bulunur.

<!-- ![Randevular](screenshots/appointments.png) -->

---

### 📅 Takvim Modülü
Doktor bazlı haftalık uygunluk ve dolu randevu saatlerini görselleştiren ekrandır. Her doktor için ayrı takvim bloğu sunulur. Hücreler **Uygun**, **Kapalı** veya **Hasta Adı Kartı** (teal — dolu randevu) şeklinde görünür. Dolu bir hücreye tıklanarak randevu detayına ulaşılabilir.

<!-- ![Takvim](screenshots/calendar.png) -->

---

### 🔔 Bildirimler Modülü
Sistemdeki tüm randevu olaylarını kronolojik sırayla listeler. Okunmamış bildirim sayısı yan menüde rozet olarak gösterilir.

**Bildirim Türleri:** Yeni randevu talebi, hasta iptali, randevu tamamlandı, randevu ertelendi.

Her bildirim kartında **Okundu olarak işaretle** / **Okunmadı olarak işaretle** butonu bulunur.

<!-- ![Bildirimler](screenshots/notifications.png) -->

---

### 🕐 Randevu Geçmişi Modülü
Tüm geçmiş ve yaklaşan randevuların filtrelenebilir şekilde görüntülenebildiği kayıt ekranıdır.

**Filtreler:** Hasta adı, doktor adı, başlangıç tarihi, bitiş tarihi, durum (Tümü / Onaylandı / Beklemede / İptal edildi / Tamamlandı).

**Dönem Sütunu:** Randevunun bugüne göre konumunu belirtir; tarihi gelmemiş → **Yaklaşan**, tarihi geçmiş → **Geçmiş**.

<!-- ![Geçmiş](screenshots/history.png) -->

---

### 👤 Profil ve Klinik Bilgileri
Sağ üst köşedeki kullanıcı simgesine tıklanarak ulaşılır. Yönetici hesabı ve klinik bilgilerinin görüntülenmesi ve güncellenmesi bu ekrandan yapılır.

- **Hesap Bilgileri:** Ad Soyad, Rol, E-posta, Telefon
- **Klinik Bilgileri:** Klinik Adı, E-posta, Telefon, Konum, Ruhsat belgesi (PDF)

Herhangi bir alan güncellendikten sonra **Bilgileri Kaydet** butonuna tıklanır.

<!-- ![Profil](screenshots/profile.png) -->

---


