const db = require('../database');

class User {
    constructor(name, surrname, email, role, phone) {
        this.name = name;
        this.surrname = surrname;
        this.email = email;
        this.role = role;
        this.phone = phone;
    }

    save() {
        let date = new Date();
        const createdAtDate = date.toLocaleDateString();  

        const sql = `
        
            INSERT INTO users(
                id, name, surrname, email, role, phone, createdAt
            ) VALUES(
                NULL, '${this.name}', '${this.surrname}', '${this.email}', '${this.role}', '${this.phone}', '${createdAtDate}'
            );
        
        `;

        return db.execute(sql); 
    }

    static findAll() {
        const sql = 'SELECT * FROM users;';
        return db.execute(sql);
    }

    static findById(id) {
        const sql = `SELECT * FROM users WHERE id=${id};`;
        return db.execute(sql);
    }

    static deleteById(id) {
        const sql = `DELETE FROM users WHERE id=${id}`;
        return db.execute(sql);
    }
}

module.exports = User;