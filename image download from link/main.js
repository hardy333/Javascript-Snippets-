
const downalodBtn = document.querySelector(".download-btn");

downalodBtn.addEventListener("click", () => {
    fetchData();
})

/*  axios version */

function fetchData(){
    axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
        let link = res.data.message;
        getBlobImage(link);
    });

    function getBlobImage(link){
        axios({
            url:link,
            method: "GET",
            responseType: "blob", // IMportant
        }).then(res => {
            console.log(res.data);
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const a = document.createElement("a");
            a.href = url;
            a.setAttribute("download", "name.jpeg");
            document.body.append(a);
            a.click();
        })
    }
}



/* Fetch version */
// ar mushaobs aq 
// async function fetchData(){
//     await fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()).then(res => {
//         const link = res.message;
//         console.log(link);
//         getBlobImage(link);
        
//     })




//     function getBlobImage(link){
//         fetch({
//             url:link,
//             method:"GET",
//             // responseType:"blob"

//         }).then(res => {
//             const url = window.URL.createObjectURL(new Blob([res]));
//             const a = document.createElement("a");
//             a.href = url;
//             a.setAttribute("download", "name.jpeg");
//             document.body.append(a);
//             a.click();
//         })

//     }
    


// }