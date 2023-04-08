import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get("/", async (req, res) => {
  res.send(
    `
  <h1>REST API</h1>
  <h2>Available Routes</h2>
  <h4>Service Status: 🟢 </h4>
  <pre>
    GET, POST /leads
    GET, PUT, DELETE /leads/:id
  </pre>
  `.trim(),
  );
});

// endpoint to retrieve leads
app.get('/api/leads', async (req, res) => {
  const leads = await prisma.leads.findMany();
  return res.json(leads);
});

// endpoint to validate email addresses
app.post('/api/validate-email', async (req, res) => {
  const { email } = req.body;

  // call the validation service and store the result in the database
  const isValidEmail = true; // replace with actual validation code
  const lead = await prisma.leads.update({
    where: { email },
    data: { isValidEmail },
  });

  return res.json(lead);
});

// endpoint to update lead status
app.put('/api/leads/:id', async (req, res) => {
  const { id } = req.params;
  const { isApproved, comment, personalizationLine } = req.body;

  // update the lead in the database
  const lead = await prisma.leads.update({
    where: { id: Number(id) },
    data: { isApproved, comment, personalizationLine },
  });

  return res.json(lead);
});

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
