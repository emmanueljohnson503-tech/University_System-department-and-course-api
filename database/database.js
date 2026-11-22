const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI
mongoose.connect(URI)
.then(() => {
    console.log('Connected to database successfully');
})

.catch((error) => {
    console.log('Connection to database failed: ', error.message);
});