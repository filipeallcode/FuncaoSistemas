
function PesqBeneficiario() {
    
    $('#gridBeneficiarios').jtable({
        paging: true, //Enable paging
        pageSize: 5, //Set page size (default: 10)
        sorting: true, //Enable sorting
        defaultSorting: 'Nome ASC', //Set default sorting
        actions: {
            listAction: urlBeneficiarioList,
        },
        fields: {
            CPF: {
                title: 'CPF',
                width: '40%'
            },
            Nome: {
                title: 'Nome',
                width: '40%'
            },
            Alterar: {
                title: '',
                display: function (data) {
                    return '<button class="btn btn-primary btn-sm">Alterar</button>';
                }
            },
            Excluir: {
                title: '',
                display: function (data) {
                    return '<button class="btn btn-primary btn-sm">Excluir</button>';
                }
            }
        }
    });

    $('#gridBeneficiarios').jtable('load');
}