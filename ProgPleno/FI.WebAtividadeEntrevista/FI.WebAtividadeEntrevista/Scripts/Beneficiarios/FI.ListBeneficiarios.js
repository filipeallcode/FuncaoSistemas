
function PesqBeneficiario() {

    $.ajax({
        url: urlBeneficiarioList,
        type: "GET",
        data: { idCliente },
        success: function (models) {
            if (models != null) {
                
                var newHtml = "";
                $.each(models, function (index, model) {
                    newHtml += '<hr style="margin-top:10px margin-bottom:10px"/>'
                    newHtml += '<div class="col-md-4" style="margin-top:5px">' + model.CPF + '</div>';
                    newHtml += '<div class="col-md-4">' + model.Nome + '</div>';
                    newHtml += '<button class="btn btn-sm btn-primary" style="margin-left:15px">Alterar</button>';
                    newHtml += '<button class="btn btn-sm btn-primary" style="margin-left:15px">Excluir</button>';
                });
                
                $("#gridBeneficiarios").html(newHtml);
            }
        },
        error: function () {
            /* ...show an error... */
        }
    });

    //$('#gridBeneficiarios').jtable({
    //    paging: true, //Enable paging
    //    pageSize: 5, //Set page size (default: 10)
    //    sorting: true, //Enable sorting
    //    defaultSorting: 'Nome ASC', //Set default sorting
    //    actions: {
    //        listAction: urlBeneficiarioList,
    //    },
    //    fields: {
    //        CPF: {
    //            title: 'CPF',
    //            width: '40%'
    //        },
    //        Nome: {
    //            title: 'Nome',
    //            width: '40%'
    //        },
    //        Alterar: {
    //            title: '',
    //            display: function (data) {
    //                return '<button class="btn btn-primary btn-sm">Alterar</button>';
    //            }
    //        },
    //        Excluir: {
    //            title: '',
    //            display: function (data) {
    //                return '<button class="btn btn-primary btn-sm">Excluir</button>';
    //            }
    //        }
    //    }
    //});

    //$('#gridBeneficiarios').jtable('load');
}