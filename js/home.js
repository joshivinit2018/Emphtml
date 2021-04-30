window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

// //template literal Es6 feature

// const createInnerHtml = () =>{
//     const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
//                         "<th>Salary</th><th>Start Date</th><th>Action</th>";


// let employeePayrolData=createEmployeePayrollJSON()[0];
// const innerHtml = ${headerHtml}
// <tr>
//         <td><img class="profile" alt=""
//              src="../assets/profile-images/Ellipse -2.png" >

//         </td>
//         <td>Narayan Mahadevan</td>
//                     <td>Male</td>
//                     <td>
//                         <div class="dept-lable">HR</div>
//                         <div class="dept-lable">Finance</div>
//                     </td>
//                     <td>3000000</td>
//                     <td>1 nov 2020</td>
//                     <td>
//                         <img id="1" onclick="remove(this)" alt="delete"
//                         src="../assets/icons/delete-black-18dp.svg">
//                         <img id="1" alt="edit" onclick="update(this)" 
//                         src="../assets/icons/create-black-18dp.svg">
//                     </td>
//     </tr>                
//     ;
//     document.querySelector('#table-display').innerHtml= innerHtml;           
// }

// const createEmployeePayrollJSON = () => 
// {
//     let empPayrollListLocal=[
//         {        
//         _name:'Narayan Mahadevan',
//         _gender:'male',
//         _department:['Engneering',
//                     'Finace'
//     ],
//     _salary='3000000',
//     _startDate='1 nov 2020'
//     _note:'',
//     _id: new Date().getItem,
//     _profilePic:'../assets/profile-images/Ellipse -2.png';
//         },

//         {
//             _name:'Shital Patil',
//             _gender:'female',
//             _department:[
//                      'Engineering','Hr'
//         ],
//         _salary='400000',
//         _startDate='29 oct 2019'
//         _note:'',
//         _id: new Date().getItem +1,
//         _profilePic:'../assets/profile-images/Ellipse -1.png';
//         }
//     ];    
//     return empPayrollListLocal;
// }