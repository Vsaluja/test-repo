const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware (optional but good practice)
app.use(express.json());

/**
 * Home route
 */
app.get("/", (req, res) => {
    res.send("🚀 API is running on EC2-ready server!");
});

/**
 * Health check route
 */
app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: Date.now()
    });
});

/**
 * Simple GET API
 */
app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from Express API 👋",
        success: true
    });
});

/**
 * GET with parameter
 */
app.get("/api/user/:id", (req, res) => {
    const userId = req.params.id;

    res.json({
        userId: userId,
        name: "Test User",
        role: "developer"
    });
});

/**
 * Dummy list API
 */
app.get("/api/products", (req, res) => {
    res.json([
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Phone", price: 800 },
        { id: 3, name: "Headphones", price: 150 }
    ]);
});

// IMPORTANT: listen on 0.0.0.0 for cloud deployment
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});