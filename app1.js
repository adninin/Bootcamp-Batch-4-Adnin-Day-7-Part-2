//Require atau import FileSync//
const fs = require('fs');
const save = (name, email, mobile) => {
const file = fs.readFileSync('data/contact.json', 'utf-8');
        const contact = {name, email, mobile}
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
}

module.exports = {save}