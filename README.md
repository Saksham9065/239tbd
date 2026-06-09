# 239tbdllp-Website

This is a modern, high-performance web application built with **Next.js (App Router)** and **MongoDB**. It features an integrated inquiry system, administrative authentication, and service-based case studies.

## 🔗 Live Demo

Explore the live website here: [https://239tbdllp.vercel.app/](https://239tbdllp.vercel.app/)

## 🚀 Key Features

* **Authentication:** Secure admin login system.
* **Inquiry Management:** Seamless contact form with automated email notifications via [Resend](https://resend.com/).
* **Responsive Design:** Built with [Tailwind CSS v4](https://tailwindcss.com/) for a sleek, fast UI.
* **Database Integration:** Reliable data storage using [MongoDB](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/).

## 🛠 Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Database:** MongoDB / Mongoose
* **Styling:** Tailwind CSS
* **Email:** Resend
* **Validation:** Zod

## 📦 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v20 or higher)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Saksham9065/239tbd
cd 239-website

```
2. Install dependencies:
```bash
npm install

```
3. Set up your environment variables by creating a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
ADMIN_SECRET_KEY=your_secret_key
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=your_verified_email@example.com
ADMIN_EMAIL=your_admin_email@example.com

```
4. Run the development server:
```bash
npm run dev

```
5. Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser.

## 🚢 Deployment

This project is deployed on [Vercel](https://vercel.com). To deploy your own version:

* Push your code to your GitHub `main` branch.
* Add all Environment Variables listed above in the **Vercel Dashboard > Settings > Environment Variables**.

## 🛡 License

This project is licensed under the ISC License.