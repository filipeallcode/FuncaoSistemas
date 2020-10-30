
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
            var newHtml = "Não foi possível carregar os beneficiários";
        }
    });
}