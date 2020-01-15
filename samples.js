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

    //POST GET
    fetch('api/GetSomething').then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
    });

    //POST FETCH
    fetch('api/PostSomething', { objKey: "objValue" }).then(
        data => console.log(data)
    ).catch(error => console.error(error));

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

    //Check if CheckBox is Checked
    $('input[type=checkbox]').prop('checked'); //true
    $('input[name=checkbox]').prop('checked'); //true
    $('input[id=checkbox]').prop('checked'); //true

    //Insert data in datatable
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
        lengthMenu: [10, 25, 50, 75, 100],
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

    //FOR EACH LOOP
    data.forEach(function(d) {
        console.log(d.Key)
    })


    //JQUERY VALIDATOR
    $('#FORM-ID').validate({
        rules: {
            FieldName: {
                required: true,
                minlength: 10,
                normalizer: function(value) {
                    return $.trim(value);
                },
                digits: true,
                min: 23,
                max: 2000,
                email: true,
                date: true,
            }
        },
        messages: {
            FieldName: "FieldName is required"
        }
    })

    //Get random password
    function generatePassword(len) {
        var length = (len) ? (len) : (20);
        var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
        var numeric = '0123456789';
        var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        var password = "";
        var character = "";
        var crunch = true;
        while (password.length < length) {
            entity1 = Math.ceil(string.length * Math.random() * Math.random());
            entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
            entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
            hold = string.charAt(entity1);
            hold = (password.length % 2 === 0) ? (hold.toUpperCase()) : (hold);
            character += hold;
            character += numeric.charAt(entity2);
            character += punctuation.charAt(entity3);
            password = character;
        }
        password = password.split('').sort(function() { return 0.5 - Math.random() }).join('');
        var generatedPassword = password.substr(0, len);
        console.log(generatedPassword);
        //return generatedPassword;
    }

    function getFileExtension(fileName) {
        return fileName.replace(/^.*\./, '');
    }

    function getFileName(fileName) {
        return fileName.replace(/\.[^/.]+$/, "");
    }

    // Get Values from FormData()
    var formData = new FormData();
    for (var value of formData.values()) { console.log(value); }

    // https://stackoverflow.com/questions/30058927/format-a-phone-number-as-a-user-types-using-pure-javascript
    // Format US Phone Number while typing
    // <input id="phoneNumber" maxlength="16" />
    const isNumericInput = (event) => {
        const key = event.keyCode;
        return ((key >= 48 && key <= 57) || // Allow number line
            (key >= 96 && key <= 105) // Allow number pad
        );
    };

    const isModifierKey = (event) => {
        const key = event.keyCode;
        return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
            (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
            (key > 36 && key < 41) || // Allow left, up, right, down
            (
                // Allow Ctrl/Command + A,C,V,X,Z
                (event.ctrlKey === true || event.metaKey === true) &&
                (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
            )
    };

    const enforceFormat = (event) => {
        // Input must be of a valid number format or a modifier key, and not longer than ten digits
        if (!isNumericInput(event) && !isModifierKey(event)) {
            event.preventDefault();
        }
    };

    const formatToPhone = (event) => {
        if (isModifierKey(event)) { return; }

        // I am lazy and don't like to type things more than once
        const target = event.target;
        const input = target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
        const zip = input.substring(0, 3);
        const middle = input.substring(3, 6);
        const last = input.substring(6, 10);

        if (input.length > 6) { target.value = `(${zip}) ${middle} - ${last}`; } else if (input.length > 3) { target.value = `(${zip}) ${middle}`; } else if (input.length > 0) { target.value = `(${zip}`; }
    };

    const inputElement = document.getElementById('phoneNumber');
    inputElement.addEventListener('keydown', enforceFormat);
    inputElement.addEventListener('keyup', formatToPhone);

    class SoundEmitter {
        constructor() {
            this.sounds = [];
        }
        record(sound) {
            this.record.sounds.push(sound)
        }
    }

    class Cat {
        constructor(soundEmitter) {
            this.soundEmitter = soundEmitter;
        }
        seesSomeone() {
            this.record("meow");
        }
    }

    class Dog {
        constructor(soundEmitter) {
            this.soundEmitter = soundEmitter;
        }
        seesSomeone() {
            this.record("bark");
        }
    }

    //Implement a function that takes an array of integers and finds two values in the array that add up to a given sum.
    //E.g.: ([1, 3, 4, 7], 8) -> [1, 7]

    function returnSum(numArr, sum) {
        for (var i = 0; i < numArr.length; i++) {
            var temp = numArr[i];
            for (var j = (i + 1); j < numArr.length; j++) {
                if (temp + numArr[j] === sum) {
                    return [temp, numArr[j]];
                }
            }
        }
    }

});