const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../data/characters.json');

function read_file() 
{
    let data = fs.readFileSync(file);
    return JSON.parse(data);
}

function write_file(characters) 
{
    fs.writeFileSync(file, JSON.stringify(characters, null, 2));
}

exports.create_character = (req, res) => 
{
    let all = read_file();
    let new_char = 
    {
        id: all.length + 1,
        character_name: req.body.character_name,
        role: req.body.role
    };
    all.push(new_char);
    write_file(all);
    res.status(201).json(new_char);
}

exports.get_all_characters = (req, res) => 
{
    let all = read_file();
    res.json(all);
}

exports.get_character_by_id = (id) => 
{
    let all = read_file();
    return all.find(x => x.id == id);
}
