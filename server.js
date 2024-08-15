// Import ES module syntax
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Initialize Express application
const app = express();
const port = process.env.PORT || 8080;

// Get the current directory of the module (ES module equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve the React app on all routes
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')));

// Start listening on the specified port
app.listen(port, () => console.log(`Server listening on port ${port}`));
