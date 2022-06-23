import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveItem(listItem){
    listItem.id = new Date().getTime;
    let savedItem = []
    const response = await AsyncStorage.getItem('items');

    if (response) savedItem = JSON.parse(response);
    savedItem.push(listItem);

    return AsyncStorage.setItem('items', JSON.stringify(savedItem));
}

function getItem(){
    return AsyncStorage.getItem('items')
        .then(response => {
            if (response) 
                return Promise.resolve(JSON.parse(response))
            else
                return Promise.resolve([]);
        })
}

module.exports = {
    saveItem,
    getItem
}