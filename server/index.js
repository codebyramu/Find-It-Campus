const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const dataFilePath = path.join(dataDir, 'data.json');

// Initialize data.json if it doesn't exist
if (!fs.existsSync(dataFilePath)) {
  const initialData = {
    items: [
      {
        id: '1',
        type: 'lost',
        title: 'Blue Water Bottle',
        description: 'Lost a blue water bottle near the library',
        location: 'Library',
        date: '2026-10-01',
        status: 'open'
      },
      {
        id: '2',
        type: 'found',
        title: 'Keys with a dog keychain',
        description: 'Found a set of keys near the cafeteria',
        location: 'Cafeteria',
        date: '2026-10-05',
        status: 'open'
      }
    ],
    issues: []
  };
  fs.writeFileSync(dataFilePath, JSON.stringify(initialData, null, 2));
}

// Helper to read data
const readData = () => {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
};

// Helper to write data
const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Fetch lost/found items
app.get('/api/items', (req, res) => {
  try {
    const data = readData();
    res.json(data.items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read items' });
  }
});

// Submit a new item
app.post('/api/items', (req, res) => {
  try {
    const { type, title, description, location, date } = req.body;
    
    if (!type || !title) {
      return res.status(400).json({ error: 'Type and title are required' });
    }

    const data = readData();
    const newItem = {
      id: Date.now().toString(),
      type,
      title,
      description: description || '',
      location: location || '',
      date: date || new Date().toISOString().split('T')[0],
      status: 'open'
    };

    data.items.push(newItem);
    writeData(data);

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// Report an issue
app.post('/api/issues', (req, res) => {
  try {
    const { subject, description, reporterEmail } = req.body;

    if (!subject || !description) {
      return res.status(400).json({ error: 'Subject and description are required' });
    }

    const data = readData();
    const newIssue = {
      id: Date.now().toString(),
      subject,
      description,
      reporterEmail: reporterEmail || '',
      date: new Date().toISOString()
    };

    data.issues.push(newIssue);
    writeData(data);

    res.status(201).json({ message: 'Issue reported successfully', issueId: newIssue.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to report issue' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
