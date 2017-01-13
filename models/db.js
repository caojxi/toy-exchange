import orm from 'orm'

const db = orm.connect('mysql://127.0.0.1:3306/exchange')

export default db