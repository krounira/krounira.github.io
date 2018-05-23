function formChecker(sSelector) {
	var f = this;
	
	f.form = $(sSelector);
	f.fields = f.form.find('.form-control');
	f.agreement = f.form.find('.form-check-input')
	f.fieldErrors = {};
	
	f.onFieldBlur = function() {
        var jqField = $(this);
        f.checkField(jqField);
    }
    f.checkField = function (jqField) {
		var sFieldName = jqField.attr('id'),
		sRegExp = data[sFieldName],
		oRegExp	= new RegExp(sRegExp);
		if (!jqField.val().match(oRegExp)) {
			jqField.removeClass('is-valid').addClass('is-invalid');
			f.fieldErrors[sFieldName] = true;
            return true; 
		}
		else{
			jqField.removeClass('is-invalid').addClass('is-valid');
            f.fieldErrors[sFieldName] = false;
            return false; 
		}
	}
	f.checkAgreement = function () {
		if (f.agreement.is(':checked')) {
			f.agreement.addClass('is-valid').removeClass('is-invalid');
			return false;
		}
		else {
			f.agreement.removeClass('is-valid').addClass('is-invalid');
			return true;
		}
	}
	f.check = function (event){
		var bFormError = false;
		f.fields.each(function(){
			var jqField = $(this),
			sFieldName = jqField.attr('id');

			if (f.fieldErrors[sFieldName] !== false) {
                var fieldError = f.checkField(jqField);
                bFormError = bFormError || fieldError;
            }
		});
		if (f.checkAgreement()) {
			bFormError = true;
		};
		if (bFormError) {
			event.preventDefault();
		};
	}

	f.fields.blur(f.onFieldBlur);
	f.agreement.change(f.checkAgreement);
	f.form.submit(f.check);
}