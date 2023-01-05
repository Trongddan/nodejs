import mongoose from 'mongoose';
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/danken');
        console.log('connect sucessfully');
    } catch (error) {
        console.log('failure');
    }
}
export default connect;
