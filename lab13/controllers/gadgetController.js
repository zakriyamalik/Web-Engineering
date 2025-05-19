const fs = require('fs');
const path = require('path');
const { get_character_by_id } = require('./character_controller');

const gadget_file = path.join(__dirname, '../data/gadgets.json');

function read_gadget_file() 
{
    let data = fs.readFileSync(gadget_file);
    return JSON.parse(data);
}

function write_gadget_file(data) 
{
    fs.writeFileSync(gadget_file, JSON.stringify(data, null, 2));
}

exports.create_gadget = (req, res) => 
{
    const { name, description, added_by } = req.body;
    const character = get_character_by_id(added_by);

    if (!character) 
    {
        return res.status(404).json({ error: 'character not found' });
    }

    if (character.role === 'human') 
    {
        return res.status(403).json({ error: 'humans cant add gadgets' });
    }

    let all = read_gadget_file();

    let gadget = 
    {
        id: all.length + 1,
        name,
        description,
        added_by: parseInt(added_by),
        created_at: new Date(),
        updated_at: new Date()
    };

    all.push(gadget);
    write_gadget_file(all);
    res.status(201).json(gadget);
}

exports.get_all_gadgets = (req, res) => 
{
    let gadgets = read_gadget_file();

    if (req.query.name) 
    {
        let result = gadgets.filter(g => g.name.toLowerCase().includes(req.query.name.toLowerCase()));
        return res.json(result);
    }

    res.json(gadgets);
}

exports.get_gadget_by_id = (req, res) => 
{
    let id = req.params.id;
    let gadgets = read_gadget_file();
    let gadget = gadgets.find(x => x.id == id);

    if (!gadget) 
    {
        return res.status(404).json({ msg: 'not found' });
    }

    res.json(gadget);
}

exports.get_gadgets_by_character = (req, res) => 
{
    let id = req.params.id;
    const character = get_character_by_id(id);

    if (!character) 
    {
        return res.status(404).json({ msg: 'character not found' });
    }

    if (character.role === 'human') 
    {
        return res.status(403).json({ msg: 'humans dont have gadgets' });
    }

    let all = read_gadget_file();
    let result = all.filter(g => g.added_by == id);
    res.json(result);
}

exports.update_gadget = (req, res) => 
{
    let id = req.params.id;
    let all = read_gadget_file();
    let index = all.findIndex(x => x.id == id);

    if (index === -1) 
    {
        return res.status(404).json({ msg: 'not found' });
    }

    let updated = 
    {
        ...all[index],
        ...req.body,
        updated_at: new Date()
    };

    all[index] = updated;
    write_gadget_file(all);
    res.json(updated);
}

exports.delete_gadget = (req, res) => 
{
    let id = req.params.id;
    let all = read_gadget_file();
    let exists = all.find(x => x.id == id);

    if (!exists) 
    {
        return res.status(404).json({ msg: 'not found' });
    }

    all = all.filter(x => x.id != id);
    write_gadget_file(all);
    res.status(204).send();
}
