const users = [
    {name : "Alferds Futterkiste" , country : "Germany"},
    {name : "Berglunds Snabbkop" , country : "Sweden"},
    {name : "Island Trending" , country : "Uk"},
    {name : "Konigliich Essen" , country : "Germany"},
    {name : "Lughhing Bacchus Winecellers" , country : "Candsa"},
    {name : "Magazzini Alimentari Riunti" , country : "Italy"},
    {name : "North/South" , country : "Uk"},
    {name : "Paris Speciallites" , country : "France"},
];

let invoked = false;

const showUser  = (data , macthed="") => {
 document.getElementById("macthes").innerHTML = "Matched " + data.length;
const html = data.map(user => {
    const regex = new RegExp(macthed , 'gi');
    const name = user.name.replace(regex , `<span class="hl">${macthed}</span>`)
    console.log(name)
        const {country} = user;
        return ` 
                <tr>
                    <td>${name}</td>
                    <td>${country}</td>
                </tr>
                `
    });

    document.getElementById('t-body').innerHTML = html.join("");
}


function search(userName , inputValue , country){
    return userName.toLowerCase().includes(inputValue) || country.toLowerCase().includes(inputValue)
}

const filterTabel = (e) => {
    const inputValue = e.target.value.trim();
    const data = [...users]
    const newUser = data.filter(user => search(user.name , inputValue , user.country));
    if(newUser.length <= 0){
        document.getElementById('t-body').innerHTML = "<tr><td style='border:none'>No user Found 😒</td></tr>";
        return;
    }
    showUser(newUser , inputValue , invoked);
}

document.getElementById('input').addEventListener('keyup' , filterTabel);
showUser(users)