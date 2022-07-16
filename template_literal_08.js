const firstName = 'Sara';
const age = 32;
const job = 'Developer';
const city = 'Kuala Lumpur';
let val;

// Without template literals

val = '<ul>'+
'<li>firstName: '+firstName+ '</li>'
'<li>age: '+age+ '</li>'+
'<li>job: '+job+ '</li>'+
'<li>city: '+city+ '</li>'+
'</ul>';

// With template literals
val = `
<ul>
<li><firstName : s(firstName)</li>
<li><firstName : s(firstName)</li>
<li><firstName : s(firstName)</li>
<li><firstName : s(firstName)</li>
</ul>
`;

document.body.innerHTML=val;