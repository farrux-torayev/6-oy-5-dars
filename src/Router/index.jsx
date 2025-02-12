import React from "react";
import Home from "../home";
import Admin from "../admin";
import { Route, Routes } from "react-router";
const Router = () => {
  return (
    <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Router;

// React.js — bu JavaScript kutubxonasi bo'lib, u foydalanuvchi interfeyslarini yaratish uchun mo'ljallangan. Facebook tomonidan ishlab chiqilgan va ochiq manba kodida taqdim etilgan. React-ning asosiy maqsadi foydalanuvchilar uchun tezkor, samarali va modulli interfeyslarni ishlab chiqishni osonlashtirishdir. Quyida React haqida asosiy tushunchalarni ko'rib chiqamiz:

// React ning asosiy xususiyatlari
// Komponentga asoslangan arxitektura:

// React-da ilova kichik, qayta foydalaniladigan komponentlarga bo'linadi.
// Har bir komponent o'z funksionalligiga ega va interfeysning bir qismini aks ettiradi.
// Masalan: Header, Footer, Navbar kabi qismlar alohida komponentlar bo'lishi mumkin Virtual DOM:

// React Virtual DOM texnologiyasidan foydalanadi, bu haqiqiy DOM bilan ishlashdan ko'ra tezroq.
// Virtual DOM-da o'zgarishlar amalga oshiriladi va faqat kerakli joylar haqiqiy DOMga qo'llaniladi.
// Bu ishlash tezligini oshiradi.
// Deklarativ yondashuv:

// React deklarativ dasturlash uslubini qo'llaydi, ya'ni foydalanuvchi interfeysini qanday ko'rinishi kerakligini tasvirlaymiz.
// React o'zi kutilgan natijani amalga oshiradi.
// React Hooks:

// React 16.8 versiyasidan boshlab Hooks taqdim etilgan. Bu funksional komponentlarda holat (state) va sikl funksiyalarini ishlatish imkonini beradi.
// Server-Side Rendering (SSR):

// React ilovalari serverda ishlov berish imkoniyatiga ega (masalan, Next.js yordamida).
// Bu SEO uchun qulaylik yaratadi.
// Kengaytirilishi va kuchli ekotizim:

// React Redux, React Router kabi qo‘shimchalar bilan osongina kengaytiriladi.
// React’ning asosiy tushunchalari
// JSX (JavaScript XML):

// JSX — bu JavaScript va HTML’ni birlashtiruvchi maxsus sintaksis.
// Bu React komponentlarini osonroq va tushunarliroq yozishga yordam beradi.


// Ikkita turga bo'linadi:
// Funksional komponentlar: Oddiy JavaScript funksiyalari.
// Klass komponentlar: React.Component’dan meros oladi.

// // Funksional komponent
// function MyComponent() {
//     return <div>Bu mening komponentim</div>;
// }

// // Klass komponent
// class MyComponent extends React.Component {
//     render() {
//         return <div>Bu mening komponentim</div>;
//     }
// }

// State va Props:

// State: Komponentning ichki holatini boshqaradi.
// Props: Tashqaridan komponentga uzatiladigan ma'lumotlar (o‘zgarmas).

// Holat boshqaruvi:

// Katta loyihalarda Redux, Context API, yoki boshqa boshqaruv vositalaridan foydalaniladi.
// React dan foydalanishning afzalliklari
// Tezkor va samarali ishlash.
// Kodni modullashtirish va qayta ishlatish oson.
// Katta hamjamiyat va boy resurslar.
// Frontend dasturlarni qurishda eng mashhur vositalardan biri.
// React ilovasini yaratish
// React ilovasini yaratish uchun quyidagi buyruqdan foydalanish mumkin:

// npx create-react-app my-app
// cd my-app
// npm start
// Ushbu buyruqlar yangi React ilovasini ishga tushiradi.


// REST API asosiy xususiyatlari
// Klient-server arxitekturasi:

// Klient (masalan, frontend ilova) va server (backend ilova) bir-biridan mustaqil ishlaydi.
// Server ma'lumotlarni boshqaradi, klient esa ulardan foydalanadi.
// Stateless (holatsiz):

// Har bir so‘rov (request) alohida ishlov beriladi va server hech qanday holatni saqlamaydi.
// Har bir so'rovda zarur barcha ma'lumotlar (auth token, parametrlari) uzatiladi.

// Resurslarga asoslangan:

// REST API resurslarni URL orqali ifodalaydi.
// Har bir resurs o'ziga xos URLga ega (masalan, /users yoki /products).

// HTTP metodlari:

// REST API HTTP metodlaridan foydalanadi:
// GET: Ma'lumotlarni olish uchun.
// POST: Yangi ma'lumot qo'shish uchun.
// PUT/PATCH: Ma'lumotni yangilash uchun.
// DELETE: Ma'lumotni o'chirish uchun.
// JSON formatida ma'lumot almashish:

// REST API odatda ma'lumotlarni JSON formatida yuboradi va qabul qiladi.
// XML ham ishlatilishi mumkin, ammo JSON ko'proq qulay va tezkor.
// REST API ning afzalliklari
// Platformaga bog'liq emas: Har qanday dasturlash tilida ishlatish mumkin.
// Oson integratsiya: Klient va server o'rtasida samarali aloqa o'rnatadi.
// Tushunarli va soddalik: URL orqali resurslar boshqarilishi intuitiv.
// Moslashuvchanlik: Kengaytirilishi oson va o'lchami katta loyihalar uchun mos.
// REST API tuzilishi
// REST API quyidagi tuzilishda ishlaydi:

// Endpoint (manzil): Bu resursga kirish uchun URL.

// Masalan:
// GET /users - foydalanuvchilar ro‘yxatini olish.
// POST /users - yangi foydalanuvchi yaratish.
// HTTP metodlari:

// Turli amallarni bajarish uchun ishlatiladi:
// HTTP Metodi	Amali
// GET	Resursni olish
// POST	Resursni qo‘shish
// PUT	Resursni to‘liq yangilash
// PATCH	Resursni qisman yangilash
// DELETE	Resursni o‘chirish
// Headers (Sarlavhalar):


// Body (So'rov tanasi):

// Faqat POST, PUT yoki PATCH metodlarida ishlatiladi.
// Masalan, yangi foydalanuvchini qo‘shish uchun:
// REST API bilan ishlashga misol
// Foydalanuvchi ma'lumotlarini boshqarish uchun REST API yaratamiz:

// Amaliyot	HTTP Metod	URL	Izoh
// Foydalanuvchilar ro‘yxati	GET	/users	Barcha foydalanuvchilarni olish
// Foydalanuvchi yaratish	POST	/users	Yangi foydalanuvchi qo‘shish
// Foydalanuvchi ma'lumotlari	GET	/users/{id}	ID bo‘yicha foydalanuvchini olish
// Foydalanuvchini yangilash	PUT/PATCH	/users/{id}	ID bo‘yicha yangilash
// Foydalanuvchini o‘chirish	DELETE	/users/{id}	ID bo‘yicha o‘chirish

// Xususiyat	REST API	GraphQL
// Ma'lumot olish	Oldindan belgilangan URL'lar	O'zingizga kerakli maydonlarni aniq so'rashingiz mumkin
// Moslashuvchanlik	Past	Yuqori
// Overfetching	Ko'p hollarda bo'ladi	Yo'q