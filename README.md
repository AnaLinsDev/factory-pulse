# 🚀 Real-Time Shopfloor Dashboard

A real-time industrial monitoring dashboard that simulates a shopfloor environment with machines and production orders.

This project focuses on mimicking real-time data flow and frontend visualization.

---
✨ Features
- Simulated production environment
- Dashboard showing the machine and production order status in real time
- Page with full list of machine, being updated in real time
- Page with full list of production order, being updated in real time
---

✨ Technologies
- Typescript
- Express
- CORS
- Next
- Tailwind
- socket.io
- socket.io-client
---

🚀 How to run the project in your machine
```
cd clone https://github.com/AnaLinsDev/factory-pulse.git
cd factory-pulse
```
BACKEND - First cmd
```
cd backend
npm install

 -> Add the .env with the PORT and CLIENT_URL

npm run dev
```

FRONTEND  - Second cmd
```
cd frontend
npm install

 -> Add the .env.local with the NEXT_PUBLIC_API_URL

npm run dev
```
---
## 🚀 How did I built it

### Backend

I chose to build a small API using Express.js to provide the initial dashboard data through HTTP GET requests, while also running a Socket.IO server for real-time communication.

The API is responsible for returning the base data when the application loads, and the socket server keeps the frontend updated with the latest changes in real time. This avoids the need for constant polling requests, because the frontend is notified automatically whenever the data changes.

Another reason for keeping the REST API layer is scalability. In the future, it will be easier to add features such as authentication, authorization, logging, caching, and other business rules without depending only on WebSocket communication.

### Frontend

I chose Next.js because it provides a complete React environment with routing, project structure, and built-in optimizations, allowing me to focus mainly on the real-time communication implementation. However, the same architecture could also be built using React.js alone.

For global data sharing, I created a `DashboardProvider` that wraps the entire application. This provider is responsible for:

* establishing the socket connection,
* loading the initial data,
* registering real-time event listeners,
* and sharing the dashboard state globally.

Any page or component can then access the real-time data through the custom `useDashboard` hook.

---

🎯 Purpose
- Real-time system design
- Frontend data visualization 
- Backend event simulation
---

📌 Future Improvements
- Add filters (by machine, status, etc.)
- Control simulation (pause/resume)
- Historical data charts
- Authentication layer

Video
<video src="https://github.com/user-attachments/assets/46a099d8-df2d-4072-95e7-13f966a8826c" width="300" controls></video>
