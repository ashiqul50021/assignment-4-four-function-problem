// problem-4
const friendName= ['Raselul', 'Ashiqul', 'Ahnaf', 'Basir', 'Nasirul','Asif','Ariful','Rofiq'];

function perfactFriend(names) {
    let uniqueName = '';
    for (const name of names)
    {
        if (name.length == 5)
        {
           return uniqueName = name; 
        }
    }
    if (typeof names != 'object')
    {
        return 'error please input a array string and number not extepable';
    }
    else if(uniqueName != 5)
    {
        return 'error not found any five character name in an array';

    }
    return uniqueName;
}
const result = perfactFriend(friendName);
console.log(result)