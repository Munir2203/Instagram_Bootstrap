# Profil Feed Bootstrap

Project ini adalah implementasi halaman profil sederhana menyerupai Instagram menggunakan **Bootstrap 5.3**.  
Halaman dibuat **responsif** memanfaatkan sistem grid Bootstrap tanpa framework tambahan.

---

##  Struktur Halaman
1. **Header Profil**
   - Foto profil bulat (`.rounded-circle` dengan CSS custom).
   - Nama akun, tombol Edit Profil, tombol Settings.
   - Bio pengguna (nama, deskripsi singkat).

2. **Statistik**
   - Jumlah Post, Followers, dan Following.

3. **Highlight Story**
   - Ditampilkan sebagai lingkaran (simulasi story highlight).
   - Setiap highlight menggunakan ikon dari **Font Awesome**.

4. **Feed Foto**
   - Grid berisi minimal 12 gambar.
   - Menggunakan class responsive grid:
     - `col-12` → mobile (1 kolom)
     - `col-sm-6` → tablet kecil (2 kolom)
     - `col-md-4` → tablet besar (3 kolom)
     - `col-lg-3` → desktop (4 kolom)

---

##  Fitur Bootstrap yang Digunakan
- **Grid System**: `row`, `col-`, `col-sm-`, `col-md-`, `col-lg-`.  
- **Utility Classes**: `mb-3`, `mb-4`, `py-4`, `text-center`, `d-flex`, `gap-4`.  
- **Responsive Alignment**: `text-center text-md-start`, `order-1 md:order-2`.  
- **Buttons**: kustom dengan `.btn-edit`.  
- **Image Utilities**: `img-fluid`, `rounded-circle`, `object-fit: cover`.  

---

## 📷 Feed Foto
Contoh implementasi grid foto:
```html
<div class="row g-1">
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="post-item">
      <img src="assets/img/foto 1.jpg" />
    </div>
  </div>
  <!-- Ulangi sampai minimal 12 foto -->
</div>
