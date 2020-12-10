var alertSuccessHtml = '<div class="alert alert-success">' + 
                        '<strong>Success!</strong> Your Item has submitted. </div>',
    alertTimeout = null;

function buyNowSelected(cardId) {
    clearTimeout(alertTimeout);
    var alertContainer = $('#globalAlertContainer');
    alertContainer.html(alertSuccessHtml);
    alertTimeout = setTimeout(function() {
        alertContainer.empty();
    }, 3000);

    var selectedCard = $(cardId);
    $('#card-section .card').removeClass('bg-selected');
    $('#card-section .card button').removeAttr('disabled');

    selectedCard.addClass('bg-selected');
    selectedCard.find('button').attr('disabled', true);
};

function disabledButton(enabled){
    enabled == false;

};