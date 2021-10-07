$(document).ready(() =>{
    let users = [];
    let filtered = [];
    let global = '';
    let limit = 0;
    let sortColum = '';
    let sortOrder = '';

    $.getJSON('https://jsonplaceholder.typicode.com/users', (data) => {
        users = data;
        filtered = users;

        limit = users.length;
        limitOptions(limit);

        createGridHeader();
        createGridBody(filtered);
    });

    $('#global-filter').keyup(() => {
        global = $('#global-filter').val().toLowerCase();
        applyFilters();
    });
    
    $('#limit-filter').change(() => {
        limit = $('#limit-filter').val();
        applyFilters();
    });

    function globalFilter(){    
        filtered = filtered.filter(row => {
            let found = -1;

            for(let key of Object.keys(row)){
                found = String(row[key]).toLowerCase().indexOf(global);                

                if(found != -1) break;
            }

            return found != -1;
        });
    }

    function limitFilter(){
        filtered = filtered.filter((row, index) => index < limit);
    }

    function applyFilters(){
        filtered = users;

        globalFilter();
        sortGrid();
        limitFilter();

        createGridBody(filtered);
    }

    function createGridHeader(){
        let keys = Object.keys(users[0]);

        keys.forEach(key => {
            let content = $('<span>').append(key+'&nbsp;&nbsp;');

            if(key != 'address' && key != 'company')
                content.append(
                    $('<i>', {
                        'class': 'fas fa-sort',
                        'data-column': key
                    })
                );


            $('thead tr').append(
                $('<th>', {
                    'class': 'font-weight-bold text-center px-0 text-nowrap'
                }).html(content)
            );
        });

        $('th i').click(changeSortIcon);
    }

    function createGridBody(users){
        $('tbody').html('');

        if(users.length > 0){
            let keys = Object.keys(users[0]);    

            users.forEach(user => {
                let row = $('<tr>', {
                    'class': 'py-3'
                });

                keys.forEach(key => {
                    let field = user[key];

                    switch(key){
                        case 'address':
                            field = `${field.street}-${field.suite}, ${field.city} (${field.zipcode})`;
                            break;
                        case 'company':
                            field = `${field.name} (${field.catchPhrase})`;
                            break;
                    }

                    row.append(
                        $('<td>', {
                            'class': 'text-center'
                        }).html(field)
                    )
                });

                $('tbody').append(row);
            });
        }        
    }

    function limitOptions(max){
        $('#limit-filter').append(
            $('<option>', {
                'value': parseInt(max/3),
                'text': parseInt(max/3)
            })
        ).append(
            $('<option>', {
                'value': parseInt(max/2),
                'text': parseInt(max/2)
            })
        ).append(
            $('<option>', {
                'value': parseInt(max),
                'text': parseInt(max),
                'selected': true
            })
        );
    }

    function changeSortIcon(){
        let classes = ['fa-sort', 'fa-sort-up', 'fa-sort-down', 'fa-sort'];
        let currentClass = $(this).attr('class').split(' ')[1];
        let nextClass = classes[classes.findIndex(item => item == currentClass) + 1];

        $('th i').removeClass(classes.join(' '));
        $('th i').not($(this)).addClass('fa-sort');
        $(this).addClass(nextClass);

        sortColum = $(this).data('column');
        sortOrder = nextClass;

        applyFilters();
    }

    function sortGrid(){
        filtered = filtered.sort(function(a, b){
            if(a[sortColum] > b[sortColum]){
                return sortOrder == 'fa-sort-up' ? 1 : -1;
            }else{
                return sortOrder == 'fa-sort-down' ? 1 : -1;
            }
        });
    }
});