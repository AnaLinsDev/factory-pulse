# 🚀 Real-Time Shopfloor Dashboard (Backend)

A **real-time industrial simulation API** built with **Node.js, Express, TypeScript, and Socket.IO**, designed to mimic a shopfloor environment with machines, production orders, and live metrics.

---

### 🔌 Communication layers

* REST provides the **initial state**
* WebSockets provide **live updates**

---

# 🔄 Real-Time Simulation

The backend simulates a factory environment:

* Machines randomly change status (`running`, `idle`, `stopped`)
* Active machines produce items for their assigned orders
* Orders progress until completion
* Metrics are recalculated and emitted in real-time

### 📡 Socket events **live updates**

* `machine:update`
* `order:update`
* `metrics:update`

---

# 🌐 API Endpoints **initial state**

Base route: `/api/dashboard`

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| GET    | `/machines` | List all machines     |
| GET    | `/orders`   | List all orders       |
| GET    | `/metrics`  | Get dashboard metrics |

---

# 🚀 How to run the project

## 📦 1. Install dependencies

```
npm install
```

---

## ⚙️ 2. Create `.env` file

```
PORT=3000
CLIENT_URL=http://localhost:3001
```

---

## 🧪 3. Run in development

```
npm run dev
```

---

## 🏗 4. Build project

```
npm run build
```

---

## ▶️ 5. Run production

```
npm start
```

---
## ▶️ 6. Run tests

```
npm run test
```

---
