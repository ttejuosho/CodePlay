$(document).ready(() => {
    var applicationsTable;

    //Ajax Call GET
    $.ajax({
        url: '',
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {

        }
    }).done(function(data) {}).fail(function(res) {}).always(function() {});


    //Ajax Call POST
    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: '',
        data: JSON.stringify(obj),
        beforeSend: function() {
            processing(true);
        }
    }).done(function(data) {}).fail(function(res) {}).always(function() {});


    $(function() {
        $('.grid-stack').gridstack();
    });

    //Check if CheckBox is Checked
    $('input[type=checkbox]').prop('checked'); //true
    $('input[name=checkbox]').prop('checked'); //true
    $('input[id=checkbox]').prop('checked'); //true

    //Change data on datatable
    applicationsTable.row('#' + row.Id).data(newdataObject);

    //Update Values in the Datatable Data
    applicationsTable.row('#' + application.Id).data().ApplicationStatus = application.ApplicationStatus;

    //OnChange Event listener on Checkbox
    $('input[name=ConfirmDelete]').change(function() {
        if ($(this).is(':checked')) {
            // Checkbox is checked..
            $('#ConfirmDeleteButton').attr('disabled', false);
        } else {
            // Checkbox is not checked..
            $('#ConfirmDeleteButton').attr('disabled', true);
        }
    });

    //Initialize Popover
    var html = '<div style="width:295px; padding:0px 10px; min-height: 100px;">' +
        '   <form id="deleteApplicationForm">' +
        '       <div class="form-row">' +
        '           <label>' + 'Application Title' + ' will be completely <span class="text-danger">deleted and unrecoverable</span>. Are you sure you want to proceed.</label>' +
        '       </div>' +
        '       <div class="form-check"> ' +
        '           <input class="form-check-input" type="checkbox" value="" name="ConfirmDelete" id="ConfirmDelete">' +
        '           <label class="form-check-label" for="ConfirmDelete">Confirm Delete</label>' +
        '       </div>' +
        '       <div class="form-row">' +
        '           <div class="form-group pl-3 mt-3 mb-0 offset-6">' +
        '               <button type="button" class="btn btn-warning float-right btn-sm" onclick="closePopover()">Cancel</button>' +
        '               <button type="button" id="ConfirmDeleteButton" class="btn btn-danger btn-sm mr-2" onclick="DeleteApplication(' + "'" + id + "'" + ');" disabled>Delete</button>' +
        '           </div>' +
        '       </div>' +
        '   </form>' +
        '</div>';

    var deleteApplicationPopover = $('#w' + id).popover({
        title: 'Delete Application',
        html: true,
        content: html,
        placement: 'auto'
    });

    deleteApplicationPopover.popover("show");

    //Initialize DATATABLE
    var dataTable = $('#DataTableID').DataTable({
        dom: ,
        data: ,
        rowId: ,
        stateSave: false,
        rowGroup: {
            startRender: function(rows, group) {
                return $('<tr/>')
                    .append('<td class="groupNum' + groupClass + '" colspan="13">' + group + '</td>');

            }
        },
        rowCallback: function(row, data, index) {},
        order: [
            [1, 'asc']
        ],
        pagingType: 'input',
        language: {
            sEmptyTable: "No Data",
            oPaginate: { //change paginate buttons
                sNext: '<div class="btn" style="padding: 0rem"><i class="fas fa-forward"></i></div>',
                sPrevious: '<div class="btn" style="padding: 0rem"><i class="fas fa-backward"></i></div>',
                sFirst: '<div class="btn" style="padding: 0rem"><i class="fas fa-step-backward"></i></div>',
                sLast: '<div class="btn" style="padding: 0rem"><i class="fas fa-step-forward"></i></div>'
            }
        },
        columnDefs: [{
            targets: 12, //Column Number
            searchable: true,
            visible: false
        }],
        columns: [{
                data: ,
                classname: ,
                orderable: false,
                width: '90px',
                defaultContent: '',
                render: function(data, type, row, meta) {
                    return '<button></button>';
                }
            },
            {
                data: 'OpenDate',
                className: 'OpenDate',
                type: 'date',
                render: function(data, type, row) {
                    if (data !== null) {
                        return moment(data).format('MM/DD/YYYY HH:mm');
                    } else {
                        return '';
                    }
                }
            },
        ],
        buttons: [{
                text: "Group By",
                className: "btn-sm btn-secondary mr-2",
                attr: { id: "rowGroupView" },
                extend: 'collection',
                autoClose: true,
                fade: 200,
                buttons: [{
                    text: 'Disable Grouping',
                    className: "btn-sm",
                    attr: { value: 'Disable' },
                    action: function() {
                        changeRowGroup('Disabled');
                    }
                }]
            },
            {
                text: "Show/Hide Columns",
                className: "btn-sm mr-2",
                attr: {
                    id: 'showHideButton'
                },
                action: function(e, dt, node, config) {
                    $('#showHideButton').attr('data-toggle', "popover");
                    showColumnHidePopover('#showHideButton');
                }
            }
        ]
    })

    //Copy to Clipboard
    function copyToClipboard() {
        $("#metData").removeClass('d-none');
        $("#metData").select();
        document.execCommand("copy");
        $("#metData").addClass('d-none');
        showAlert("success", "MET Events copied to Clipboard");
    }




});