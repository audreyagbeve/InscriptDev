# InScript

A web application for managing and displaying InScript's phone case inventory and catalogue.

InScript is a Christian-themed phone case business. The website will provide customers with a public-facing catalogue where they can browse available phone cases by phone model, view case details, prices, images, and availability status.

The application will also include an **admin portal** for managing inventory. The inventory will be maintained through Google Sheets, with the website eventually syncing inventory information from Google Sheets to the public catalogue.

---

## Project Goals

The InScript website will provide:

- A public-facing landing page for the business
- A searchable phone case catalogue
- Phone case information including:
  - Case ID
  - Phone model
  - Colour
  - Inscription/design
  - Price
  - Availability status
  - Product image
- Filtering by phone model and other relevant attributes
- Individual case/product detail pages
- An admin portal for inventory management
- Google Sheets integration for inventory data
- Automatic synchronization between inventory and the public catalogue
- Responsive design for desktop, tablet, and mobile devices

---

## Technology Stack

### Frontend

- **React** — UI library
- **Vite** — Frontend development and build tool
- **React Router** — Client-side routing
- **CSS** — Styling

### Data & Inventory

- **Google Sheets** — Inventory management and data source
- **Google Drive** — Product/case image storage

### Planned Architecture

The initial version uses local JavaScript data while the application is being developed.

```text
Current:

cases.js
   ↓
React
   ↓
Catalogue
   ↓
CaseCard
```

The planned production architecture is:

```text
Google Sheets
      ↓
Backend / API
      ↓
React Application
      ↓
Public Catalogue
```

---

# Project Structure

```text
InscriptDev/
│
├── public/
│   └── ...
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── CaseCard.jsx
│   │
│   ├── data/
│   │   └── cases.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Catalogue.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

# Source Directory

The main application code is contained inside the `src` directory.

```text
src/
```

It contains the application's components, pages, data, routing, and styling.

---

# Components

Components are reusable pieces of the user interface.

## Navbar

**File:**

```text
src/components/Navbar.jsx
```

Responsible for the website's navigation bar.

Currently provides navigation to:

- Home
- Catalogue

It uses React Router's `Link` component to navigate between pages without reloading the application.

---

## Footer

**File:**

```text
src/components/Footer.jsx
```

Contains the website footer.

Currently displays the InScript copyright notice.

---

## CaseCard

**File:**

```text
src/components/CaseCard.jsx
```

Displays information about an individual phone case.

A `CaseCard` receives a case as a prop:

```jsx
<CaseCard caseItem={caseItem} />
```

It currently displays:

- Phone model
- Colour
- Inscription
- Price
- Status
- Product image placeholder

The component is designed to be reusable so that the catalogue can generate multiple case cards from inventory data.

---

# Pages

Pages represent the major views of the application.

## Home

**File:**

```text
src/pages/Home.jsx
```

The landing page of the InScript website.

The current version contains basic introductory content.

The planned landing page will include:

- InScript branding
- Hero section
- Introduction to the brand
- Featured cases
- Call-to-action to browse the catalogue
- Information about the brand
- Links to social media/contact channels

---

## Catalogue

**File:**

```text
src/pages/Catalogue.jsx
```

The public-facing product catalogue.

The catalogue currently imports case data from:

```text
src/data/cases.js
```

and uses `.map()` to generate a `CaseCard` for each case.

Current data flow:

```text
cases.js
   ↓
Catalogue.jsx
   ↓
cases.map()
   ↓
CaseCard
```

Planned catalogue functionality includes:

- Search by phone model
- Filter by phone model
- Filter by colour
- Filter by inscription/design
- Filter by availability
- Display case images
- Display prices
- Display stock status
- Individual case detail pages

---

# Data

## cases.js

**File:**

```text
src/data/cases.js
```

Currently contains sample inventory data used while developing the application.

Example:

```javascript
export const cases = [
  {
    id: "01-001-01",
    model: "iPhone 13",
    colour: "Black",
    inscription: "Faith",
    price: 120,
    status: "In Stock"
  }
];
```

Each object represents one physical phone case.

### Current role

This file is temporary development data.

### Planned role

Eventually, the catalogue will receive inventory data from the business's Google Sheets inventory rather than relying on manually maintained JavaScript data.

---

# Application Entry Point

## main.jsx

**File:**

```text
src/main.jsx
```

This is the entry point of the React application.

It renders the `App` component into the HTML element with the ID:

```html
<div id="root"></div>
```

`main.jsx` is responsible for starting the React application.

---

# App.jsx

**File:**

```text
src/App.jsx
```

This is the main application component.

It currently contains:

- `BrowserRouter`
- `Navbar`
- `Routes`
- `Footer`

Current routing structure:

```text
/
└── Home

/catalogue
└── Catalogue
```

The application currently uses a single `BrowserRouter`.

---

# Styling

## index.css

**File:**

```text
src/index.css
```

Contains the global CSS styles for the application.

Current styling includes:

- Global page styles
- Navigation bar
- Catalogue grid
- Case cards
- Footer
- Responsive layouts

The styling will be expanded as the application's visual design develops.

---

# Current Application Architecture

At the current stage, the application works approximately like this:

```text
                         InScript React App
                                │
                         ┌──────┴──────┐
                         │   App.jsx   │
                         └──────┬──────┘
                                │
                         BrowserRouter
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
           Navbar            Routes            Footer
                                │
                         ┌──────┴──────┐
                         │             │
                       Home       Catalogue
                                      │
                                  cases.js
                                      │
                                    .map()
                                      │
                                 CaseCard
```

---

# Planned Application Structure

As development continues, the project is expected to grow into something similar to:

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── CaseCard.jsx
│   ├── SearchBar.jsx
│   ├── FilterBar.jsx
│   └── ...
│
├── pages/
│   ├── Home.jsx
│   ├── Catalogue.jsx
│   ├── CaseDetails.jsx
│   ├── Admin.jsx
│   └── ...
│
├── data/
│   └── cases.js
│
├── services/
│   └── ...
│
├── hooks/
│   └── ...
│
├── App.jsx
├── main.jsx
└── index.css
```

These folders and components will be added only when they become necessary.

---

# Planned Admin Portal

The admin side of the application will eventually allow authorized users to manage inventory.

Potential functionality includes:

- View inventory
- Search inventory
- View stock status
- Update case status
- Add new cases
- Edit case information
- Mark cases as sold
- Mark cases as unavailable
- Monitor inventory

The intended workflow is:

```text
Admin
  ↓
Google Sheets Inventory
  ↓
Inventory Data
  ↓
Website
  ↓
Public Catalogue
```

The public catalogue should reflect the current inventory status so customers can distinguish between available and unavailable cases.

---

# Planned Google Sheets Integration

Google Sheets will serve as the business's inventory management interface.

The long-term system will allow the business to continue managing inventory in Google Sheets while the website consumes the updated data.

Conceptually:

```text
                  Google Sheets
                       │
                       │ Inventory data
                       ↓
                  Backend/API
                       │
                       ↓
                  React App
                       │
              ┌────────┴────────┐
              ↓                 ↓
       Public Catalogue     Admin Portal
```

The exact backend/API architecture will be determined during the integration stage.

---

# Development Roadmap

## Phase 1 — React Foundation

- [x] Create Vite React application
- [x] Configure React Router
- [x] Create Home page
- [x] Create Catalogue page
- [x] Create Navbar
- [x] Create Footer
- [x] Create CaseCard
- [x] Create initial case data
- [x] Display cases dynamically
- [x] Add basic responsive styling

## Phase 2 — Catalogue

- [ ] Add real case images
- [ ] Improve CaseCard design
- [ ] Add search
- [ ] Add filtering
- [ ] Add stock-status handling
- [ ] Add individual case detail pages
- [ ] Improve mobile experience

## Phase 3 — Landing Page

- [ ] Design hero section
- [ ] Add brand introduction
- [ ] Add featured products
- [ ] Add calls-to-action
- [ ] Add social media/contact information
- [ ] Complete responsive design

## Phase 4 — Inventory Integration

- [ ] Define final inventory schema
- [ ] Connect Google Sheets
- [ ] Create data retrieval layer
- [ ] Replace temporary `cases.js` data
- [ ] Synchronize inventory status
- [ ] Connect case images

## Phase 5 — Admin Portal

- [ ] Create admin login
- [ ] Create inventory dashboard
- [ ] Display inventory
- [ ] Add inventory management functionality
- [ ] Implement appropriate access control
- [ ] Connect admin interface to inventory data

## Phase 6 — Production

- [ ] Test application
- [ ] Test mobile responsiveness
- [ ] Test catalogue search and filtering
- [ ] Test inventory synchronization
- [ ] Test admin functionality
- [ ] Optimize images and performance
- [ ] Configure production environment
- [ ] Deploy application

---

# Development

To start the development server:

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

---

# Project Status

**Current stage:** Phase 1 — React Foundation

The application currently has a working React/Vite structure, client-side routing, basic pages, reusable components, sample inventory data, and initial catalogue styling.

The next development stage is to improve the catalogue with real product images and interactive search/filter functionality.