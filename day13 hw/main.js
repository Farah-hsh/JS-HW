///////////////////////////////////////////////////////////////////////////
// TO-do list ->


let button = document.getElementById("addButton");

button.addEventListener("click", function () {
  ///////////////////////////////////////////////////////////////////////////
  // اضافة مهمة جديدة
  let newTask = prompt("أضف مهمة جديدة:");

  if (newTask) {
    let newRow = document.createElement("tr");
  
    let taskCell = document.createElement("td");
    taskCell.textContent = newTask;


    ///////////////////////////////////////////////////////////////////////////
    // السؤال عن حالة المهمة
    let statusCell = document.createElement("td");
    let getstatus = prompt("هل اتممت المهمة؟ ") ;
  
    if(getstatus === "نعم"|| getstatus === "yes" ){

      statusCell.textContent = "تم" + "finished";

    }else if(getstatus === "لا" || getstatus === "no" ){

      statusCell.textContent = "لم تتم" + "unfinished";

    }else if(getstatus === "تقريبا" || getstatus === "almost" ) {

      statusCell.textContent = "تقريبا" + "almost";

    }else{

      statusCell.textContent = "حالة المهمة غير معروفة" + "status unknown";

    }
  

    ///////////////////////////////////////////////////////////////////////////
    //  وقت انشاء المهمة
    let createdTimeCell = document.createElement("td");
    const creatingTime = new Date();
    createdTimeCell.textContent = creatingTime.toLocaleString();


    ///////////////////////////////////////////////////////////////////////////
    // التعديل على المهمة
    let editCell = document.createElement("td");
    editCell.id = "editcell"
    let editButton = document.createElement("button");
    editButton.textContent = "تعديل";
    editButton.id ="editbutton"
    editButton.addEventListener("click", function () {
    let editedTask = prompt("قم بتعديل المهمة:", newTask );
    let editstatus = prompt("هل اتممت المهمة الأن؟  ", statusCell)


    ///////////////////////////////////////////////////////////////////////////
    // التعديل على اسم المهمة
    if (editedTask !== null) {
        if (editedTask !== newTask) {
          newTask = editedTask;
          taskCell.textContent = newTask;

          const editTime = new Date();
          editCell.textContent = "تم التعديل في " + editTime.toLocaleString();
        } else {
          alert("لم تقم بتعديل المهمة.");
        }
      }



      ///////////////////////////////////////////////////////////////////////////
      // التعديل على حالة المهمة
      if (editstatus !== null) {
        if (editstatus !== getstatus) {
          getstatus = editstatus;
          statusCell.textContent = editstatus;
          if(editstatus === "نعم" || editstatus === "yes" ){

            statusCell.textContent = "تم" + "finished";

          }else if(editstatus === "لا" || editstatus === "no" ){

            statusCell.textContent = "لم تتم" + "unfinished";

          }else if(editstatus === "تقريبا" || editstatus === "no" ){

            statusCell.textContent = "تقريبا" + "almost";

          }else{

            statusCell.textContent = "حالة المهمة غير معروفة" + "status unknown"

          }
        } else {
          alert("لم تقم بتعديل حالة المهمة.");
        }
      }
    });
    editCell.appendChild(editButton);
    

    ///////////////////////////////////////////////////////////////////////////
    // زر الحذف
    let deleteCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "حذف";
    deleteButton.id ="deletebutton"
    deleteButton.addEventListener("click", function () {
      newRow.remove();
    });
    deleteCell.appendChild(deleteButton);
    

    ///////////////////////////////////////////////////////////////////////////
    // الترتيب يفرق في ايش يظهر قبل ايش
    newRow.appendChild(taskCell);
    newRow.appendChild(statusCell);
    newRow.appendChild(createdTimeCell);
    newRow.appendChild(editCell);
    newRow.appendChild(deleteCell);

    let table = document.getElementById("todo-list-table");
    table.appendChild(newRow);
  }
});




