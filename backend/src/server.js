import app from "./app.js";
import conn from "./config/dbconn.js";

conn().then(() =>
  app.listen(process.env.PORT, () => {
    console.log('server Running on port '+process.env.PORT);
  })
).catch(err => {
  console.log(err)
})