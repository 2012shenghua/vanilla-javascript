var arr = [
    {
        "item": "game",
        "name": "游戏专区",
        "desc": "换上专属装备再战吧骚年"
    },
    {
        "item": "comic",
        "name": "动漫专区",
        "desc": "换上专属装备再战吧骚年"
    }
]

function filter(arr) {
    if(!Array.isArray(arr)) {
        return;
    }
    var newObj = {};
    arr.forEach(function(value, index) {
        var key = value.item;
        newObj[key] = {};
        newObj[key].name= value.name;
        newObj[key].desc = value.desc;   
           
    });
    return newObj;
}

console.log(filter(arr));