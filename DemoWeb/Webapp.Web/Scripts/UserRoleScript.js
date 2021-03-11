function PopulateUserRoleGrid() {
    var url = DemoAppWebAPIURL + "api/UserRole/GetAll";
    // prepare the data
    var source =
    {
        datatype: "json",
        datafields: [
            { name: 'Id', type: 'int' },
            { name: 'UserId' },
            { name: 'RollId' },
            { name: 'IsActive', type: 'bool' }
        ],
        id: 'Id',
        url: url,
        root: 'data'
    };
    var dataAdapter = new $.jqx.dataAdapter(source);

    $("#UserRoleGrid").jqxGrid(
        {

            
            source: dataAdapter,
            columnsresize: true,
            columns: [
                { text: 'Id', dataField: 'Id', width: 150 },
                { text: 'UserId', dataField: 'UserId', width: 150 },
                { text: 'RollId', dataField: 'RollId', width: 150 },
                { text: 'IsActive', dataField: 'IsActive' }
               ]
        });
}