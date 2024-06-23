import express from 'express';
import mysql from 'mysql';
import cors from "cors"

const app = express();
const port = 3005;
app.use(express.json())
app.use(cors())


app.listen(port , ()=>{
    console.log(`server is running on port no ${port}`)
})



// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'karnas',
  password: '7266046',
  database: 'sun'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});












  
app.post('/api/formdata', (req, res) => {
  console.log(req.body)
  const {
    currency,
    invBasicAmount,
    invTaxAmount,
    totalInvAmount,
    advancePaid,
    tcsApplicable,
    netPayableAmount,
    alternatePayee1,
    alternatePayee2,
    city,
    street,
    country,
    bankKey,
    bankAccNo,
    reference
  } = req.body;





  let query = `
  INSERT INTO invoices(
    currency,
    invBasicAmount,
    invTaxAmount,
    totalInvAmount,
    advancePaid,
    tcsApplicable,
    netPayableAmount,
    alternatePayee1,
    alternatePayee2,
    city,
    street,
    country,
    bankKey,
    bankAccNo,
    referencex
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;


  // Parameters for the query
  const values = [
    currency,
    invBasicAmount,
    invTaxAmount,
    totalInvAmount,
    advancePaid,
    tcsApplicable,
    netPayableAmount,
    alternatePayee1,
    alternatePayee2,
    city,
    street,
    country,
    bankKey,
    bankAccNo,
    reference
  ];

  // Execute the query
  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error occurred while inserting data:', err);
      res.status(500).json({ error: 'Error occurred while inserting data' });
    } else {
      console.log('Data inserted successfully');
      res.status(200).json({ message: 'Data inserted successfully' });
    }
  });
});














  
