function PopulateUserGrid() {
    var url = DemoAppWebAPIURL + "api/User/GetAll";
    // prepare the data
    var style = {
        headerBackgroundColor: '#4267B2',
        headerColor: '#fff',
        headerBackgroundHoveredColor: '#FE6602',
        headerHoveredColor: '#fff',
        headerBackgroundSelectedColor: '#FC3752',
        headerSelectedColor: '#fff',
        backgroundColor: '#fff',
        color: '#333',
        backgroundHoveredColor: '#FE6602',
        hoveredColor: '#fff',
        backgroundSelectedColor: '#FC3752',
        selectedColor: '#fff'
    };


    var source =
    {
        datatype: "json",
        datafields: [
            { name: 'Id', type: 'int' },
            { name: 'UserName' },
            { name: 'Password' },
            { name: 'IsActive', type: 'bool' }
        ],
        id: 'Id',
        url: url,
        root: 'data'
    };
    var dataAdapter = new $.jqx.dataAdapter(source);

    $("#userGrid").jqxGrid(
        {
            width: '100%',
            source: dataAdapter,
            columnsresize: true,
            columns: [
                { text: 'Id', dataField: 'Id', width: 200, style: style },
                { text: 'User Name', dataField: 'UserName', width: 200, style: style },
                { text: 'Password', dataField: 'Password', width: 180, style: style },
                { text: 'IsActive', dataField: 'IsActive', style: style }
            ]
        });
}

function AddUser() {
    var userName = $("#userName").val();
    var Password = $("#password").val();

    var postData = {
        "Name": userName,
        "Password": Password
    };

    $.ajax({
        type: "POST",
        url: DemoAppWebAPIURL + 'api/User/Add',
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