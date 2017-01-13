import db from './db'

const User = db.define('users', {
    id: { type: 'serial', key: true }
})


export default User