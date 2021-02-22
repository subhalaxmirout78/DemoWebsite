function PopulateRolGrid() {
    var url = DemoAppWebAPIURL + "api/Role/GetAll";
    // prepare the data
    var source =
    {
        datatype: "json",
        datafields: [
            { name: 'Id', type: 'int' },
            { name: 'Name' },
            { name: 'Description' },
            { name: 'IsActive', type: 'bool' }
        ],
        id: 'Id',
        url: url,
        root: 'data'
    };
    var dataAdapter = new $.jqx.dataAdapter(source);

    $("#roleGrid").jqxGrid(
        {
            width: '100%',
            source: dataAdapter,
            columnsresize: true,
            columns: [
                { text: 'Id', dataField: 'Id', width: 200 },
                { text: 'Role Name', dataField: 'Name', width: 200 },
                { text: 'Description', dataField: 'Description', width: 180 },
                { text: 'IsActive', dataField: 'IsActive' }
            ]
        });
}

function AddRole() {
    var roleName = $("#roleName").val();
    var roleDesc = $("#roleDesc").val();

    var postData = {
        "Name": roleName,
        "Desc": roleDesc
    };

    $.ajax({
        type: "POST",
        url: DemoAppWebAPIURL + 'api/Role/Add',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(postData),
        dataType: "json",
        success: function (msg) {

            alert(msg);
            window.location.reload();
        },
        error: function (req, status, error) {
            alert("Error try again");
        }
    });
}