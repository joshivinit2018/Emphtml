window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//template literal Es6 feature

const createInnerHtml = () =>{
    const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Action</th>";

const innerHtml = ${headerHtml}
    <tr>
        <td><img class src="../assets/profile-images/Ellipse -2.png" alt=""></td>
        <td>Narayan Mahadevan</td>
                    <td>Male</td>
                    <td>
                        <div class="dept-lable">HR</div>
                        <div class="dept-lable">Finance</div>
                    </td>
                    <td>3000000</td>
                    <td>1 nov 2020</td>
                    <td>
                        <img id="1" onclick="remove(this)" alt="delete"
                        src="../assets/icons/delete-black-18dp.svg">
                        <img id="1" alt="edit" onclick="update(this)" 
                        src="../assets/icons/create-black-18dp.svg">
                    </td>
    </tr>                
    ;
    document.querySelector('#table-display').innerHtml= innerHtml;           
}
