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
    {
        type:"number",
        name:"age",
        label:"manufacturer age",
        required:true,
        placeHolder:"enter the age of the selected manufacturer"
    },
    {
        type:"email",
        name:"email",
        label:"manufacturer email",
        required:true,
        placeHolder:"enter the email of the selected manufacturer"
    },
    // {
    //     type:"file",
    //     name:"image",
    //     label:"manufacturer image",
    //     required:false,
    //     placeHolder:"enter the image of the selected manufacturer"
    // },
    {
        type:"text",
        name:"gender",
        label:"manufacturer gender",
        required:true,
        placeHolder:"enter the gender of the selected manufacturer"
    },
    {
        type:"text",
        name:"about",
        label:"manufacturer about",
        required:false,
        placeHolder:"enter the about of the selected manufacturer"
    },
]

export {goldsFields,manufacturersFields}