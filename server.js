const app= require('./app');
const sequelize = require('./config/db');

sequelize.authenticate()
  .then(() => console.log("✅ DB Connected Successfully"))
  .catch(err => console.error("❌ DB Connection Error:", err));

sequelize.sync().then(()=>{
    app.listen(5000, ()=>{
        console.log('Server is running on port 5000');
    })
})