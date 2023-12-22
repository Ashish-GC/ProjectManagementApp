

export const fetchData= async()=>{
    const response = await fetch('https://project-management-app-eafde-default-rtdb.firebaseio.com/manage.json');
       
       if(!response.ok){
        throw new Error("Error occured during fetching");
       }
       const data = await response.json();
        
       return data;
}

export const SendData= async(data)=>{
 const response = await fetch('https://project-management-app-eafde-default-rtdb.firebaseio.com/manage.json',{
        method:'PUT',
        body:JSON.stringify({
            selectedProjectId:data.selectedProjectId,
            projects:data.projects,
            task:data.tasks
        })
    })

 if(!response.ok){
    throw new Error('Error occured while sending data');
 }

}