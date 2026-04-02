# zorvyn-assignment

# 💰 Finance Dashboard UI

A clean and interactive **personal finance dashboard** built using React and Redux Toolkit.
This project demonstrates how to design intuitive user interfaces, manage state effectively, and present financial data through meaningful visualizations.

---

live-link : https://incredible-otter-9a77b0.netlify.app/

## 🚀 Overview

This dashboard allows users to:

* View overall financial summary (balance, income, expenses)
* Explore and filter transactions
* Understand spending patterns using charts
* Switch between Viewer and Admin roles
* Export transaction data as a CSV file

The application is fully frontend-based using mock data and focuses on **UI/UX clarity, state management, and component design**.

---

## ✨ Features

### 📊 Dashboard Overview

* Summary cards for:

  * Total Balance
  * Total Income
  * Total Expenses
  * Net Savings
* Monthly income vs expense visualization
* Category-wise spending breakdown

---

### 📋 Transactions Section

* List of all transactions with:

  * Title, Date, Amount, Category, Type
* Features:

  * 🔍 Search
  * 🧩 Filter by type and category
  * 🔃 Sorting (date & amount)
* Handles empty states gracefully

---

### 👤 Role-Based UI (Frontend Simulation)

* **Viewer**

  * Can only view data
* **Admin**

  * Can add/edit transactions (UI-level simulation)

Switch roles using a dropdown in the header.

---

### 💡 Insights Section

* Highlights useful observations:

  * Highest spending category
  * Net balance insight
  * General spending observations

---

### 🌙 Dark Mode

* Toggle between light and dark themes
* Theme persists using localStorage

---

### 📁 Export Functionality

* Export transactions as CSV
* Exports **filtered data** based on current view
* File naming includes current date

---

### 📱 Responsive Design

* Works across:

  * Desktop
  * Tablet
  * Mobile
* Adaptive layouts for tables and cards

---

## 🧠 State Management

Redux Toolkit is used for managing application state.

### State includes:

* Transactions data
* Selected role (Viewer/Admin)
* Filters (search, category, type)
* Sorting preference
* Theme (light/dark)

### Approach:

* **Single slice (`financeSlice`)**
* Minimal stored state
* Derived values (totals, charts, insights) computed using helper functions

---

## 🛠️ Tech Stack

* **React (Vite)**
* **Redux Toolkit**
* **Tailwind CSS**
* **Recharts** (for charts)
* **Lucide React** (icons)
* **JavaScript (ES6+)**

---

## 📂 Project Structure

```
src/
  components/        # Reusable UI components
  sections/          # Page sections (Dashboard parts)
  store/
    slices/          # Redux slices
    store.js
  utils/             # Helper functions (formatting, filtering, charts)
  data/              # Mock data
```

---

## ⚙️ Setup Instructions

Clone the repository:

```bash
git clone <your-repo-link>
cd finance-dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 📌 Assumptions

* Data is static (mock data)
* No backend or API integration
* Role-based behavior is simulated on frontend
* Charts and insights are derived from available transaction data

---

## 🔮 Future Improvements

* Backend integration (real data)
* Authentication & real RBAC
* Budget tracking and alerts
* Recurring transactions
* Advanced analytics (weekly/monthly comparisons)
* Export to PDF / Excel
* Multi-account support

---

## 🎯 Key Highlights

* Clean and intuitive UI design
* Well-structured component architecture
* Effective use of Redux Toolkit
* Thoughtful UX (filters, empty states, role behavior)
* Practical feature: CSV export

---

## 📷 Demo (Optional)

*Add screenshots or GIFs here if available*

---

## 👨‍💻 Author

* Built as part of a frontend assessment to demonstrate UI design, state management, and interaction handling.
