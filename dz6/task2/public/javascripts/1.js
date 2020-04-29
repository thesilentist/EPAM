const table = $('.employees-list');
const clearButton = $('.buttons-clear');
const getButton = $('.buttons-get');

clearButton.click( function() {
    table.html('');
});

getButton.click( function() {
    table.html('');
    $.get("http://dummy.restapiexample.com/api/v1/employees",
        function (data) {
            data.data.forEach(element => {
                addNewRow(element, table);
            });
        }
    );
});

function addNewRow(element, table) {
    const name = $("<td></td>").text(element.employee_name);
    const id = $("<td></td>").text(element.id);
    const age = $("<td></td>").text(element.employee_age);
    const salary = $("<td></td>").text(element.employee_salary);

    table.append($("<tr></tr>").append(id,name,age,salary));
}