# 🌿 Navjeewan Ayurvedic Upchar Kendra (React + Modern JS)

> **A 100% Client-Side React SPA (Vite + Vanilla JS + CSS) designed specifically for free hosting on Vercel.**
> Original ASP.NET Core project files remain untouched in the parent directory.

---

## 🚀 Why This Project Can Be Hosted 100% Free on Vercel
Standard ASP.NET Core / C# applications require continuous backend server hosting (IIS, Docker, or paid cloud VMs) which Vercel's free tier does not support. 

This **new project** has been built from the ground up as a high-performance **React Single Page Application (SPA)**:
- **Zero Backend Required**: All state management, appointment bookings, tracking, doctor consultation notes, patient inquiries, and theme/language preferences are stored and persisted in the browser's `localStorage`.
- **Pre-configured for Vercel**: Includes `vercel.json` so page reloads on routes like `/book`, `/status`, `/treatments`, or `/admin` won't return 404 errors.
- **Fast & Lightweight**: Built with **Vite + React 19**, building a production bundle in ~2 seconds.

---

## 🌟 Included Features & Pages

1. **Home (`/`)**:
   - Hero banner with Dr. Sharvan Kumar portrait, OPD fee badge (₹100), and Facebook 4.8★ verification.
   - 4 Pillars of Classical Ayurveda (Nadi Pariksha, Panchakarma, Physiotherapy, Pure Herbs).
   - Featured treatments catalog with Sanskrit designations.
   - Interactive Dosha quiz callout banner.
   - Patient testimonials and quick consultation booking strip.

2. **About Doctor & Clinic (`/about`)**:
   - Comprehensive profile of **Dr. Sharvan Kumar (BAMS, NET, JRF, SRF, Ph.D. in Ayurveda & Atharvaveda)**.
   - Council Registration: **D-48192** • Estd. 2011 • Siktaur Chauraha, Gorakhpur.
   - Tridosha explanation (Vata, Pitta, Kapha) and clinical chamber photographs.

3. **Treatments Catalog & Details (`/treatments`, `/treatment/:id`)**:
   - Dynamic search by condition, disease, or dosha.
   - Category filtering (Panchakarma, Spine/Joints, Physiotherapy, Skin/Psoriasis, IBS/Digestion, Women's Health, Diabetes).
   - In-depth therapy breakdown with key benefits, duration, and direct booking links.

4. **Interactive Dosha & Prakriti Quiz (`/dosha-quiz`)**:
   - 6-question intuitive self-assessment with live progress indicator.
   - Instant scoring across Vata, Pitta, and Kapha.
   - Customized Ayurvedic diet charts, lifestyle advice (Dinacharya), and recommended treatments.

5. **Appointment Booking (`/book`)**:
   - Full patient registration form (Name, Phone, Email, Age, Gender, In-Clinic vs Online WhatsApp Consultation, Date, Time Slot, Category, Symptoms).
   - Validates client-side and saves to browser `localStorage`.
   - Generates unique reference code (e.g. `NAV-20261101-4821`).

6. **Printable OPD Consultation Slip (`/success`)**:
   - Official letterhead with Nav Jeevan logo, Dr. Sharvan Kumar details, and Siktaur address.
   - Patient details table, presenting complaints, and OPD token.
   - **One-Click WhatsApp Confirmation** button pre-filled with appointment reference.
   - **"Print / Save Slip (PDF)"** utility (`window.print()`).

7. **Track Appointment Status (`/status`)**:
   - Track booking status (Pending, Confirmed, Completed, Cancelled) and Doctor clinical notes.
   - Interactive demo pills for testing instant lookups.

8. **Doctor & Admin Portal (`/admin`, `/admin/login`)**:
   - Password/PIN protected (PIN: `admin123` or `doctor123`).
   - Live counters: Total Appointments, Pending, Today's Schedule, Completed.
   - Filter by status and live search by patient name, phone, or reference.
   - Modal to change status and append Doctor's clinical advice/prescription.
   - 1-click WhatsApp button to message patients directly.
   - Website Inquiries inbox tab (`/admin/messages`).

9. **Bilingual Language Switcher (English & हिन्दी)**:
   - Instant real-time switch between English and Hindi across the entire site without page reload.

10. **Theme & Color Customizer**:
    - Light Mode and Dark Mode.
    - 4 curated Ayurvedic color palettes (Forest Green, Royal Gold, Sandalwood, Vedic Bronze).

---

## 💻 How to Run Locally

Open terminal inside this folder:
```powershell
cd navjeewan-ayurvedic-react
npm install
npm run dev
```

Then open in your browser:
👉 **`http://localhost:5173/`**

To test production build:
```powershell
npm run build
npm run preview
```

---

## ☁️ How to Host on Vercel (100% Free)

### Option A: Via GitHub (Recommended)
1. Push this folder to a GitHub repository (e.g. `navjeewan-ayurvedic-react`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. If this folder is inside a parent repo, set **Root Directory** to `navjeewan-ayurvedic-react`.
5. Framework Preset will automatically detect **Vite**.
6. Click **"Deploy"**!
7. Your website will be live in 30 seconds with a free `.vercel.app` domain and free SSL!

### Option B: Via Vercel CLI (Direct 1-Click from Terminal)
1. In your terminal, run:
```powershell
cd navjeewan-ayurvedic-react
npx vercel
```
2. Follow the 2-step prompt (select your Vercel account, keep defaults).
3. Done! Vercel gives you an instant live URL.

---

## 🔑 Doctor Portal Credentials
- **URL**: `/admin/login`
- **Default PIN / Access Key**: `admin123` (or `doctor123`)
