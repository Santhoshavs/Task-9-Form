const h1=document.createElement("h1")
h1.setAttribute("id","title")
h1.innerHTML="Creating Form Using DOM"
document.body.append(h1)
const form=document.createElement("form")
form.setAttribute("id","form")
document.body.append(form)
const paragraph=document.createElement("p")
paragraph.setAttribute("id","description")
paragraph.innerHTML="Getting user details dynamically and appending in a table using DOM"
form.appendChild(paragraph)

let formFields=[
    {label:"FirstName",type:"text",id:"first-name",name:"name",required:"true"},
    {label:"LastName",type:"text",id:"last-name",name:"name",required:"true"},
    {label:"Address",type:"textarea",id:"address",name:"address",required:"true"},
    {label:"Pincode",type:"text",id:"pincode",name:"pincode",required:"true"},
    {label:"Gender",type:"radio",name:"gender",options:["Male","Female"],required:"true"},
    {label:"Choice Of Food(Any Two)",type:"checkbox",name:"food choices",options:["Biriyani","Dosa","Poori","Idly","Chapathi"],required:"true"},
    {label:"State",type:"text",id:"state",name:"state",required:"true"},
    {label:"Country",type:"text",id:"country",name:"country",required:"true"}
]
formFields.forEach(field => {
    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group');
    form.appendChild(formGroup);

    let label = document.createElement("label")
    label.innerHTML = field.label;
    form.appendChild(label)


if (field.type==="textarea"){
    let textarea=document.createElement("textarea")
    textarea.setAttribute("name",field.name)
    textarea.setAttribute("id",field.id)
    if (field.required){
        textarea.setAttribute("required","true")
    }
    form.appendChild(textarea)
}
else if (field.type==="radio" || field.type==="checkbox") {
    field.options.forEach(option=>{
        let label=document.createElement("label")
        label.innerHTML=option
        let input=document.createElement("input")
        input.setAttribute("name",field.name)
        input.setAttribute("type",field.type)
        input.setAttribute("value",option.toLowerCase())
label.appendChild(input)
        form.appendChild(label)
    })
}
else {
    // Create input element
const input = document.createElement('input');
input.setAttribute('type', field.type);
input.setAttribute('name', field.name);
input.setAttribute('id', field.id); // Optional chaining operator to handle potential undefined
if (field.required) input.setAttribute('required', 'true');
form.appendChild(input);

        }
    })

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute("id", "submit");
    submitButton.innerHTML = 'Submit';
    form.appendChild(submitButton);

    const division = document.createElement('div');
    document.body.append(division);
        const table = document.createElement('table');
        division.appendChild(table);
        const thead = document.createElement('thead');
    const Row = document.createElement('tr');
    formFields.forEach(field => {
      const th = document.createElement('th');
      th.innerHTML = field.label.replace(':', '');
      Row.appendChild(th);
    });
    thead.appendChild(Row);
    table.appendChild(thead);
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(this);    
        const tbody = document.createElement('tbody');
        const newRow = tbody.insertRow(0);
        formFields.forEach(field => {
            const cell = newRow.insertCell();
            cell.appendChild(document.createTextNode(formData.get(field.name)));
          });
          table.appendChild(tbody);
          this.reset();
        }); 