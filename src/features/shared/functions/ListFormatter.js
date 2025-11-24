
function listFormatter(list) {
    let bodyItems= list?.body?.map((b)=>{
        let headItems = list?.head?.map((h)=>{
          return b[h]
        })
        return headItems
       })
        return {...list,body:bodyItems}
}

export default listFormatter