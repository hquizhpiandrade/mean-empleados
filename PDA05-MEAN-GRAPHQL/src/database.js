import mongoose from 'mongoose';

const URI = 'mongodb://127.0.0.1:27017/usuarios_db';

mongoose.connect(URI)
    .then(db => console.log('Base conectada'))
    .catch(err => console.error('❌ Error BD:', err));

export default mongoose;
