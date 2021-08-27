const db = require('../database');

class User {
    constructor(firstName, lastName, surrname, email, role, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
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
                id, firstName, lastName, surrname, email, role, phone, createdAt
            ) VALUES(
                NULL, '${this.firstName}', '${this.lastName}', '${this.surrname}', '${this.email}', '${this.role}', '${this.phone}', '${createdAtDate}'
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

    updateById(id) {
        const sql = `UPDATE users SET 
        firstName="${this.firstName}", lastName="${this.lastName}", surrname="${this.surrname}", 
        email="${this.email}", role="${this.role}", phone="${this.phone}" WHERE id=${id}`;
        return db.execute(sql);
    }

    static search(search) {
        const sql = `SELECT * FROM users WHERE firstName='${search}' OR lastName='${search}' OR surrname='${search}' OR email='${search}'`;
        return db.execute(sql);
    }
}

module.exports = User;