String.prototype.IsNullOrEmpty = function() {
    if(!this.replace(/\s/g, '').length) { return true; }
    else return false;
}

function CheckValidationAndSendForm() {
    let empty = 0;
    document.querySelectorAll('.user-form-input').forEach(element => {
        if(element.value.IsNullOrEmpty()) {
            empty++;
            if(document.getElementById('validation-text').innerHTML == '') {
                document.getElementById('validation-text').innerHTML = 'Some fields are empty!';
            } 
        }
    })

    if(empty == 0) {
        document.getElementById('validation-text').innerHTML = '';
        document.getElementById('form').submit();
    }
}
