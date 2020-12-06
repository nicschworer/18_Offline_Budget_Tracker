function saveRecord (data) {
    console.log(data);
    

    let db;
    const request = indexedDB.open('budget', 1);

    request.onupgradeneeded = ({ target }) => {};

    request.onsuccess = () => {};


    // create budget db + bulk (pending) collection into indexedDB
    // saveRecord -> save to indexedDB
    // listen to when we are back online and send records
};

function saveRecord (record) {

};


function checkDatabase () {

};



window.addEventListener("online", checkDatabase);