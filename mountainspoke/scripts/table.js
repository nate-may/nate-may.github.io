/*tabulator.info*/
$("servicesTable").tabulator({
    layout: "fitColumns",
    tooltips: true,
    addRowPos: "top",
    history: true,
    pagination: "local",
    paginationSize: 7,
    movableColumns: true,
    resizableRows: true,
    initialSort: [
        {
            column: "name",
            dir: "asc"
        },
    ],

    columns: [
        {
            title: "ServiceType",
            field: "servicetype",
            sortable: true,
            width: 250
        },
        {
            title: "ServiceDate",
            field: "date",
            sortable: true,
            width: 200
        },
        {
            title: "Part",
            field: "part",
            sortable: true,
            width: 200
        },
        {
            title: "ServicePrice",
            field: "currency",
            sortable: true,
            width: 200,
            sorter: "number"
        },

    ]

})
