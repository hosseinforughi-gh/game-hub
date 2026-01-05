# Game Hub (RAWG)

اپلیکیشن ساده برای جست‌وجو و مرور بازی‌ها با استفاده از **RAWG API**.

## امکانات

- لیست بازی‌ها با **Infinite Scroll**
- فیلتر بر اساس **Genre** و **Platform**
- مرتب‌سازی (Sort)
- جست‌وجو
- صفحه جزئیات بازی (توضیحات، ویژگی‌ها، تریلر و اسکرین‌شات)
- Dark/Light mode

## تکنولوژی‌ها

- React + TypeScript + Vite
- Chakra UI
- TanStack React Query
- Zustand
- React Router

## اجرا روی سیستم (Local)

### 1) نصب
```bash
npm install
```

### 2) تنظیم متغیر محیطی (API Key)

یک فایل `.env` در ریشه پروژه بساز و کلید RAWG را قرار بده:

```env
VITE_RAWG_API_KEY=YOUR_KEY_HERE
```

> نمونه آماده داخل `.env.example` هست.  
> **`.env` را commit نکن.**

### 3) اجرا در حالت توسعه
```bash
npm run dev
```

### 4) Build
```bash
npm run build
npm run preview
```

## Deploy روی Vercel

1) ریپو را روی GitHub push کن  
2) در Vercel یک پروژه جدید بساز و ریپو را Import کن  
3) در **Project Settings → Environment Variables** این مقدار را اضافه کن:

- `VITE_RAWG_API_KEY`

4) Deploy ✅

### نکته مهم برای React Router (Refresh روی routeها)

این پروژه از `createBrowserRouter` استفاده می‌کند، بنابراین برای جلوگیری از 404 در Refresh، فایل `vercel.json` اضافه شده تا همه مسیرها به `index.html` ریدایرکت شوند.

## ساخت ریپو GitHub (خیلی سریع)

```bash
git init
git add .
git commit -m "Initial commit"
# سپس ریپو بساز و remote اضافه کن
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```
