window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCounts();
})
const funcApi = '';

const getVisitCounts = () => {
    let count = 30;
    fetch(funcApi).then(response => {
        return response.json()
    }).then(response => {
        console.log('called api');
        count = response.count
        document.getElementById("counter").innerText = count
    }).catch(function(error){
        console.log(error);
    });
    return count;
}