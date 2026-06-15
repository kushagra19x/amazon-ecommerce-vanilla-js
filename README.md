# Amazon Clone — Dynamic E-Commerce Frontend

A fully responsive, interactive e-commerce storefront built from scratch using clean semantic HTML, CSS grid layouts, and modular Vanilla JavaScript (ES6+). This project serves as a comprehensive exploration of dynamic DOM rendering, data architecture management, and state persistence.

## 🚀 Live Demo
-Stay tuned !!

---

## 🛠️ Technical Highlights & Concepts Mastered

Instead of relying on heavy frameworks, this application leverages pure modern JavaScript to manage complex data structures and UI syncing, replicating features found in modern production environments.

* **Data-Driven UI Rendering:** Designed a decoupled data architecture where the entire product grid is generated dynamically by looping through a centralized array of product objects.
* **State Management & Synchronization:** Implemented a synchronous **Event → Data → DOM** architectural loop. User actions update the underlying data structures first, which surgically trigger interface updates across multiple components (e.g., matching the navigation bar cart count with individual item adjustments).
* **DOM Event Decoupling:** Migrated away from outdated inline HTML attributes (`onclick`) in favor of programmatic, optimized `.addEventListener()` loops to maintain clean separation of concerns.
* **Local Storage Persistence:** Integrated browser `localStorage` to ensure the shopping cart state, quantities, and user selections persist seamlessly across page reloads.
* **Array Optimization Patterns:** Handled data mutation using idiomatic JavaScript methods such as `.forEach()` for clean traversal and `.splice()` for precise indices management during cart item deletion.

---

## 📦 Features

* **Interactive Product Catalog:** Dynamic grid display rendering product titles, ratings, images, and prices from a structural data file.
* **Real-time Cart Mechanics:** Full scale checkout logic that handles addition of items, duplicate checking, quantity accumulation, and real-time total updates.
* **Responsive Layouts:** Built utilizing CSS Flexbox and CSS Grid to ensure an adaptive user experience across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

* **Structure:** Semantic HTML5
* **Styling:** CSS3 (Flexbox, Grid, Custom Variables)
* **Logic:** Vanilla JavaScript (ES6+, Modules, LocalStorage API)
* **Testing:** Jasmine Framework

---

