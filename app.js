const { command, parse } = require("yargs");
const yargs = require("yargs");
const yargsParser = require("yargs-parser");

//Require atau import FileSync//
const fs = require('fs');

yargs.command({
    command:'add',
    describe:'add new contact',
    builder:{

        name:{
            describe:'Contact Name',
            demandOption: true,
            type:'string',
        },

        email:{
            describe:'contact email',
            demandOption: false,
            type:'string',
        },

        mobile:{
            describe:'contact mobile phone number',
            demandOption: true,
            type:'string',
        },
    },

    handler(argv){
        const contact = {
            name:argv.name,
            email:argv.email,
            mobile:argv.mobile,
        };

        const file = fs.readFileSync('data/contact.json', 'utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync('data/contact.json', JSON.stringify(contacts));


        console.log(contact);

    },
});

yargs.parse();