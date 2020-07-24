let emp_List = {};

$.ajax({
  url: 'https://randomuser.me/api/?results=200',
  dataType: 'json',
  success: function(data) {
    emp_List = data;
    console.log(data);
    console.log(emp_List);
  }
});