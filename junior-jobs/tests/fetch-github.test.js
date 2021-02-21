const fetchGithub = require('../worker/tasks/fetch-github');

async function getData() {
    const res = await fetchGithub();
    const data_arr = [];
    data_arr.push(...res);

    return data_arr;
}

const expected = 'senior' || 'lead' || 'sr' || 'architect' || 'manager';

test('there are no senior level entries after filtering', async () => {
    const data_arr = await getData();
    data_arr.forEach(entry => {
        expect(entry.title.toLowerCase()).toEqual(expect.not.stringContaining(expected));
    });
}, 20000)

