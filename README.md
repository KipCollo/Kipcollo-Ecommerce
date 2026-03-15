# Kipcollo E-Commerce

A full-stack, multi-platform e-commerce solution featuring a **Node.js/Express REST API**, a **Flutter admin dashboard**, a **Flutter mobile app**, and a **React web storefront**.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Features](#features)
  - [Backend API](#backend-api)
  - [Admin Dashboard](#admin-dashboard)
  - [Mobile App](#mobile-app)
  - [Customer Web Frontend](#customer-web-frontend)
- [Database Models](#database-models)
- [API Reference](#api-reference)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Admin Dashboard Setup](#admin-dashboard-setup)
  - [Mobile App Setup](#mobile-app-setup)
  - [Web Frontend Setup](#web-frontend-setup)
- [Environment Variables](#environment-variables)
- [File Uploads](#file-uploads)
- [Payments](#payments)
- [Push Notifications](#push-notifications)
- [Features To Be Added](#features-to-be-added)
- [License](#license)

---

## Overview

**Kipcollo E-Commerce** is a production-ready, open-source e-commerce platform with:

- A **RESTful backend** built with Node.js and Express, backed by MongoDB.
- A **Flutter admin panel** for managing products, orders, coupons, and more, targeting web, macOS, and tablets.
- A **Flutter mobile app** providing a full shopping experience for Android and iOS customers.
- A **React + TypeScript** customer-facing web storefront (foundation in place, feature development in progress).

---

## Project Structure

```
Kipcollo-Ecommerce/
├── backend/            # Node.js/Express REST API
│   ├── model/          # Mongoose schemas (11 models)
│   ├── routes/         # API route handlers (12 route files)
│   ├── public/         # Uploaded image storage
│   │   ├── products/
│   │   ├── category/
│   │   └── posters/
│   ├── uploadFile.js   # Multer configuration
│   └── index.js        # Server entry point
│
├── ui/                 # React + TypeScript customer web frontend
│   ├── src/
│   └── vite.config.ts
│
├── admin/              # Flutter admin dashboard (web/macOS/tablet)
│   └── lib/
│       ├── screens/    # 12 management screens
│       ├── widgets/
│       └── services/
│
├── mobile/             # Flutter mobile app (Android/iOS)
│   └── lib/
│       ├── screen/     # 11 customer screens
│       ├── models/
│       └── services/
│
└── LICENSE
```

---

## Tech Stack

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js + Express | 5.1.0 | REST API server |
| MongoDB + Mongoose | 8.15.1 | Database and ODM |
| Multer | 2.0.1 | Image file uploads |
| Stripe | 18.2.1 | Payment processing |
| OneSignal Node | 3.4.0 | Push notifications |
| CORS | 2.8.5 | Cross-origin requests |
| Dotenv | 16.5.0 | Environment variables |
| Express Async Handler | 1.2.0 | Async error handling |

### Admin Dashboard (Flutter)
| Package | Purpose |
|---|---|
| Provider | State management |
| GetX | Navigation and routing |
| FL Chart | Analytics charts |
| Google Fonts | Typography |
| Image Picker | Image selection for uploads |
| Dropdown Button 2 | Enhanced dropdown menus |

### Mobile App (Flutter)
| Package | Purpose |
|---|---|
| GetX | State management and navigation |
| Get Storage | Persistent local storage |
| Flutter Stripe | Stripe payment integration |
| Razorpay Flutter | Razorpay payment integration |
| OneSignal Flutter | Push notifications |
| Flutter Cart | Shopping cart management |
| Flutter Rating Bar | Product ratings |
| Bottom Navy Bar | Bottom navigation bar |
| WebView Flutter | Embedded web content |

### Web Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19.1.0 | UI library |
| TypeScript | 5.8.3 | Type safety |
| Vite | 6.3.5 | Build tool and dev server |

---

## Features

### Backend API

- **60+ RESTful endpoints** covering all core e-commerce resources.
- Full **CRUD** operations for products, categories, subcategories, brands, variants, orders, coupons, posters, and notifications.
- **Multi-image product uploads** (up to 5 images per product) via Multer.
- **Coupon validation** endpoint to apply discount codes at checkout.
- **Stripe payment intent** creation with ephemeral key support.
- **Razorpay key** delivery endpoint.
- **OneSignal push notification** broadcasting and tracking.
- Static file serving for product, category, and poster images.

### Admin Dashboard

- **Analytics dashboard** with product summaries and order KPIs.
- **Product management** — create, edit, and delete products with multiple images, pricing (regular + offer price), and variant assignment.
- **Category & subcategory management** — with image uploads.
- **Brand management**.
- **Variant types & variants** — e.g., Size → [S, M, L, XL].
- **Order management** — view all orders, update statuses (pending → processing → shipped → delivered → cancelled).
- **Coupon code management** — fixed or percentage discounts, expiry dates, minimum purchase amounts, and category/product targeting.
- **Poster / banner management** — upload and manage promotional banners.
- **Push notification broadcasting** — send targeted notifications via OneSignal.
- Responsive layout — works on web, macOS, and tablets.

### Mobile App

- **User authentication** — register and login with persistent session via GetStorage.
- **Home screen** — featured products, promotional posters, and category browsing.
- **Product catalog** — browse all products or filter by category.
- **Product detail page** — images, description, price, offer price, variant selector, and ratings.
- **Wishlist / favourites** — save and manage favourite products.
- **Shopping cart** — add products, select variants, adjust quantities, and proceed to checkout.
- **Checkout** — apply coupon codes, choose payment method (Stripe, Razorpay, or Cash on Delivery).
- **Order history** — view past orders with statuses.
- **Order tracking** — live tracking via tracking URL.
- **Address management** — save and manage multiple delivery addresses.
- **User profile** — view and edit profile information.
- **Push notifications** — receive updates via OneSignal.
- **Product ratings** — rate purchased products.

### Customer Web Frontend

- React + TypeScript + Vite foundation is in place.
- Feature implementation is in progress (see [Features To Be Added](#features-to-be-added)).

---

## Database Models

| Model | Key Fields |
|---|---|
| **User** | name, password *(plain text — password hashing is on the roadmap)* |
| **Product** | name, description, quantity, price, offerPrice, images, category, subcategory, brand, variantType, variants |
| **Category** | name, image |
| **SubCategory** | name, categoryId |
| **Brand** | name, subCategoryId |
| **VariantType** | name, type |
| **Variant** | name, variantTypeId |
| **Order** | userID, items, totalPrice, shippingAddress, paymentMethod, orderStatus, trackingUrl |
| **CouponCode** | couponCode, discountType, discountAmount, minimumPurchaseAmount, endDate, status, applicableCategory/SubCategory/Product |
| **Poster** | posterName, imageUrl |
| **Notification** | notificationId, title, description, imgUrl |

---

## API Reference

### Base URL
```
http://localhost:<PORT>
```

### Endpoints Summary

| Resource | Method | Path | Description |
|---|---|---|---|
| **Users** | GET | `/users` | List all users |
| | GET | `/users/:id` | Get user by ID |
| | POST | `/users` | Create user |
| | POST | `/users/login` | User login |
| | PUT | `/users/:id` | Update user |
| | DELETE | `/users/:id` | Delete user |
| **Products** | GET | `/products` | List all products |
| | GET | `/products/:id` | Get product |
| | POST | `/products` | Create product (multipart) |
| | PUT | `/products/:id` | Update product |
| | DELETE | `/products/:id` | Delete product |
| **Categories** | GET | `/categories` | List categories |
| | GET | `/categories/:id` | Get category |
| | POST | `/categories` | Create category (multipart) |
| | PUT | `/categories/:id` | Update category |
| | DELETE | `/categories/:id` | Delete category |
| **SubCategories** | GET | `/subCategories` | List subcategories |
| | POST | `/subCategories` | Create subcategory |
| | PUT | `/subCategories/:id` | Update subcategory |
| | DELETE | `/subCategories/:id` | Delete subcategory |
| **Brands** | GET | `/brands` | List brands |
| | POST | `/brands` | Create brand |
| | PUT | `/brands/:id` | Update brand |
| | DELETE | `/brands/:id` | Delete brand |
| **Variant Types** | GET | `/variantTypes` | List variant types |
| | POST | `/variantTypes` | Create variant type |
| | PUT | `/variantTypes/:id` | Update variant type |
| | DELETE | `/variantTypes/:id` | Delete variant type |
| **Variants** | GET | `/variants` | List variants |
| | POST | `/variants` | Create variant |
| | PUT | `/variants/:id` | Update variant |
| | DELETE | `/variants/:id` | Delete variant |
| **Orders** | GET | `/orders` | List all orders |
| | GET | `/orders/:id` | Get order |
| | GET | `/orders/orderByUserId/:userId` | Get orders by user |
| | POST | `/orders` | Place order |
| | PUT | `/orders/:id` | Update order |
| | DELETE | `/orders/:id` | Cancel order |
| **Coupon Codes** | GET | `/couponCodes` | List coupons |
| | POST | `/couponCodes` | Create coupon |
| | POST | `/couponCodes/check-coupon` | Validate coupon |
| | PUT | `/couponCodes/:id` | Update coupon |
| | DELETE | `/couponCodes/:id` | Delete coupon |
| **Posters** | GET | `/posters` | List posters |
| | POST | `/posters` | Create poster (multipart) |
| | PUT | `/posters/:id` | Update poster |
| | DELETE | `/posters/:id` | Delete poster |
| **Notifications** | POST | `/notification/send-notification` | Send push notification |
| | GET | `/notification/all-notification` | List notifications |
| | GET | `/notification/track-notification/:id` | Track notification |
| | DELETE | `/notification/delete-notification/:id` | Delete notification |
| **Payments** | POST | `/payment/stripe` | Create Stripe payment intent |
| | POST | `/payment/razorpay` | Get Razorpay key |
| **Images** | GET | `/image/products/:filename` | Serve product image |
| | GET | `/image/category/:filename` | Serve category image |
| | GET | `/image/poster/:filename` | Serve poster image |

---

## Getting Started

### Prerequisites

- **Node.js** v18+ and **npm**
- **MongoDB** (local instance or MongoDB Atlas)
- **Flutter** SDK 3.3.3+
- **Stripe** account (test keys)
- **Razorpay** account (test keys)
- **OneSignal** account and App ID

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory (see [Environment Variables](#environment-variables)), then start the server:

```bash
npm run dev
```

The API will be available at `http://localhost:<PORT>`.

### Admin Dashboard Setup

```bash
cd admin
flutter pub get
```

Update the base API URL in `lib/utility/constants.dart`:

```dart
const String MAIN_URL = 'http://localhost:<PORT>';
```

Run the app:

```bash
flutter run -d chrome   # web
flutter run -d macos    # macOS desktop
```

### Mobile App Setup

```bash
cd mobile
flutter pub get
```

Update the base API URL in `lib/utility/constants.dart`:

```dart
const String MAIN_URL = 'http://<your-local-ip>:<PORT>';
```

Update your OneSignal App ID in `lib/main.dart`.

Run the app:

```bash
flutter run   # connected Android or iOS device / emulator
```

### Web Frontend Setup

```bash
cd ui
npm install
npm run dev
```

The dev server will start at `http://localhost:5173`.

---

## Environment Variables

Create a `.env` file inside the `backend/` directory with the following keys:

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/kipcollo-ecommerce

# Stripe
STRIPE_SKRT_KET_TST=sk_test_...
STRIPE_PBLK_KET_TST=pk_test_...

# Razorpay
RAZORPAY_KEY_TEST=rzp_test_...

# OneSignal
ONESIGNAL_APP_ID=...
ONESIGNAL_REST_API_KEY=...
```

---

## File Uploads

Multer handles image uploads for products, categories, and posters.

| Resource | Field Names | Storage Path |
|---|---|---|
| Products | `image1` – `image5` | `backend/public/products/` |
| Categories | `image` | `backend/public/category/` |
| Posters | `image` | `backend/public/posters/` |

**Constraints:** JPEG/JPG/PNG only, 5 MB maximum per file.

Uploaded images are served at `/image/products/:filename`, `/image/category/:filename`, and `/image/poster/:filename`.

---

## Payments

### Stripe
1. The mobile app calls `POST /payment/stripe` with the `amount` and `currency` in the request body.
2. The backend creates a Stripe **Customer**, an **Ephemeral Key**, and a **PaymentIntent**, returning all three to the client.
3. The Flutter Stripe package completes the payment sheet on the device.

### Razorpay
1. The mobile app calls `POST /payment/razorpay` to receive the publishable test key.
2. The Razorpay Flutter SDK is used to complete the payment.

### Cash on Delivery
Orders placed with `paymentMethod: "cod"` require no payment-gateway interaction.

---

## Push Notifications

Notifications are sent via **OneSignal**.

- The backend exposes `POST /notification/send-notification` which accepts `title`, `description`, and an optional `imageUrl`.
- The admin dashboard provides a UI to compose and broadcast notifications.
- The mobile app subscribes to OneSignal and displays push notifications.
- All sent notifications are stored in the database and retrievable via `GET /notification/all-notification`.

---

## Features To Be Added

The following enhancements are planned for future releases:

### Authentication & Security
- [ ] JWT-based authentication for all API endpoints
- [ ] Password hashing with bcrypt
- [ ] Role-based access control (admin vs. customer)
- [ ] API rate limiting
- [ ] Input validation and sanitisation middleware (e.g., Joi / express-validator)
- [ ] Helmet.js for HTTP security headers
- [ ] Restrict CORS to known origins in production

### Customer Web Frontend (React)
- [ ] User registration and login pages
- [ ] Product listing with search and filters
- [ ] Product detail page
- [ ] Shopping cart and checkout flow
- [ ] Stripe and Razorpay payment integration
- [ ] Order history and tracking pages
- [ ] Wishlist / favourites
- [ ] User profile management
- [ ] Responsive design for mobile browsers

### Mobile App
- [ ] Product search with autocomplete
- [ ] Product reviews and review listing
- [ ] Social / OAuth login (Google, Facebook)
- [ ] Deep-link support for order tracking
- [ ] Offline mode with cached product data

### Admin Dashboard
- [ ] Revenue and sales analytics charts
- [ ] Customer management screen
- [ ] Inventory / stock-level alerts
- [ ] Bulk product import via CSV
- [ ] Role management for admin staff

### Backend API
- [ ] Pagination and filtering for all list endpoints
- [ ] Product search endpoint (text-based and faceted)
- [ ] Webhook handler for Stripe payment events
- [ ] Email notifications for order updates (e.g., Nodemailer / SendGrid)
- [ ] Product review and rating endpoints
- [ ] Inventory tracking and low-stock alerts
- [ ] API versioning (`/api/v1/...`)
- [ ] Swagger / OpenAPI documentation

### DevOps & Quality
- [ ] Automated tests (Jest for backend, Vitest for UI, Flutter unit/widget tests)
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Docker and Docker Compose setup for local development
- [ ] Production deployment guides (Render, Railway, Fly.io)
- [ ] Environment-specific configuration (dev / staging / production)
- [ ] Database seeding scripts for local development

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

Copyright © 2025 Collins Kipkosgei
