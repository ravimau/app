/*window.onload(myfun())

function myfun(){
    document.write("hdfjhdfs")
}*/

window.onload = async function () {
    // fetch().then().then().catch()
    var comment = document.getElementById("comment");

    let res = await fetch("http://localhost:1000", { method: "GET" });
    //console.log(res.json());
    let datas = await res.json();
    //console.log(datas);
    for (let data of datas) {
        //console.log(data)
        let div = '<div class="mx-[7%] my-3" id>
            < div class="bg-white shadow rounded p-2" >
            <div class="flex justify-between">
                <h3 class="mb-3 font-bold text-1x1">${data.title}</h3>
                <div>
                    <button class="me-2" id="${data.id}" onclick="editData(${data.id})"><i class="fa fa-edit"></i></button>
                    <button class="me-2" id="${data.id}" onclick="deleteData(${data.id})"><i class="fa fa-trash"></i></button>
                </div>
            </div>
            
        <p>${data.body}</p>
        </div >
        </div > '
    }
}