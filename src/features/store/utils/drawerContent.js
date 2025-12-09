import goldsList from "./goldsList"
let goldsFields =[
    {
        type:"text",
        name:"category",
        label:"golds category",
        required:true,
         placeHolder:"enter the category of the selected golds"
    },
    {
        type:"number",
        name:"quantity",
        label:"golds quantity",
        required:true,
        placeHolder:"enter the quantity of the selected golds"
    },
    {
        type:"number",
        name:"totalWeight",
        label:"golds totalWeight",
        required:true,
        placeHolder:"enter the totalWeight of the selected golds"
    },
]

let manufacturersFields = [
    {
        type:"text",
        name:"companyName",
        label:"manufacturer companyName",
        required:true,
         placeHolder:"enter the companyName of the selected manufacturer"
    },
    {
        type:"text",
        name:"contactPerson",
        label:"manufacturer contactPerson",
        required:true,
        placeHolder:"enter the contactPerson of the selected manufacturer"
    },
    {
        type:"number",
        name:"phone",
        label:"manufacturer phone",
        required:true,
        placeHolder:"enter the phone of the selected manufacturer"
    },
]

export {goldsFields,manufacturersFields}