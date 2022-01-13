
exports.getDate = function() {
    let today = new Date();

    let options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    }
    let day = today.toLocaleDateString("en-US", options);        
    console.log(day)

    return day;

}
