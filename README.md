# 🏦 Bank Dashboard

A modern, responsive banking dashboard built with **Next.js 15**, **React**, and **Tailwind CSS**.
This application provides users with an intuitive interface to manage finances, view transaction history, and track expenses.

---

## ✨ Features

### Dashboard Overview

* Account balance summary
* Expense statistics with interactive charts
* Recent transactions
* Weekly activity tracking

### Account Management

* View all accounts
* Transaction history
* Paginated transaction lists

### User Experience

* Fully responsive design for all devices
* Light mode support
* Smooth animations and transitions
* Interactive charts and data visualization

---

## 🚀 Technologies Used

* **Framework**: Next.js 15 with App Router
* **Styling**: Tailwind CSS + Shadcn components
* **UI Components**: Radix UI Primitives
* **Data Visualization**: Recharts
* **Icons**: Lucide React
* **Type Safety**: TypeScript

---

## 🛠️ Getting Started

### Prerequisites

* Node.js 20+
* npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mahmoud-dev97/bank-dash.git
   cd bank-dash
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Login Credentials

You can login using the following dummy account:

```json
{
  "username": "emilys",
  "password": "emilyspass"
}
```

Alternatively, you can use [DummyJSON Auth](https://dummyjson.com/docs/auth) for testing with other credentials.

---

## 📂 Project Structure

```
bank-dash/
├── app/                    # App router pages and layouts
├── components/             # Reusable UI components
│   ├── accounts/           # Account-related components
│   ├── auth/               # Authentication components
│   ├── dashboard/          # Dashboard components
│   ├── layouts/            # Layout components
│   └── ui/                 # Base UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and configs
└── public/                 # Static assets
```

---

## 📝 Available Scripts

* `dev` - Start development server
* `build` - Build for production
* `start` - Start production server
* `lint` - Run ESLint

---

## 🎨 Styling & UI

* Tailwind CSS with custom theming and responsive utilities
* Shadcn components for consistent design
* Animations and transitions for smooth user experience

---

## 🌐 APIs & Data

* **Accounts Data**: Fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
* **Authentication**: DummyJSON for login testing

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

* Built with [Next.js](https://nextjs.org/)
* UI Components powered by [Radix UI](https://www.radix-ui.com/)
* Components & Styling via [Shadcn](https://ui.shadcn.com/)
* Icons by [Lucide](https://lucide.dev/)

---

## 🚀 Deployment

The easiest way to deploy your app is via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
