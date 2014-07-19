$(function () {

    var getConfig = _.partial(couchr.get, '/_api/app/config');
    var setConfig = _.partial(couchr.put, '/_api/app/config');

    function updateConfig(obj, callback) {
        getConfig(function (err, doc) {
            if (err) {
                return callback(err);
            }
            if (!_.isObject(doc.config.s3)) {
              doc.config.s3 = {}
            }
            doc.config.s3 = _.extend(doc.config.s3, obj);
            setConfig(doc, callback);
        });
    }

    // set initial form values
    getConfig(function (err, doc) {
        if (err) {
            return alert(err);
        }
        if (!_.isObject(doc.config.s3)) {
          doc.config.s3 = {}
        }
        $('[name=accessKey]').val(doc.config.s3.accessKey);
        $('[name=accessSecret]').val(doc.config.s3.accessSecret);
        $('[name=bucketName]').val(doc.config.s3.bucketName);
        $('[name=pathPrefix]').val(doc.config.s3.pathPrefix);

    });

    function setSubmitButtonToSaving(form){
        $btn = $(form).find('button[type="submit"]');
        $btn.data('originalButtonText', $btn.text());
        $btn.data('disabled', 'disabled');
        $btn.text('Saving');
    }

    function setSubmitButtonToSuccess(form){
        $btn.text('Successfully saved!').addClass('success');
        _.delay(function(){
            $(form).find('button[type="submit"]').data('disabled', null);
            $btn.text($btn.data('originalButtonText')).removeClass('success');;
        }, 2000);
    }

    function setSubmitButtonToError(form, error){
        $btn.text('Something went wrong, sorry.').addClass('error');
        $btn.after('<p class="help-block">'+error+'</p>');
        _.delay(function(){
            $(form).find('button[type="submit"]').data('disabled', null);
            $btn.text($btn.data('originalButtonText')).removeClass('error');;
        }, 2000);
    }

    // save config on submit
    $('#plugin-s3-config-form').submit(function (ev) {
        var el = this;
        ev.preventDefault();
        setSubmitButtonToSaving(this);
        var cfg = {
            accessKey: $('[name=accessKey]').val(),
            accessSecret: $('[name=accessSecret]').val(),
            bucketName: $('[name=bucketName]').val(),
            pathPrefix: $('[name=pathPrefix]').val()
        };
        updateConfig(cfg, function (err) {
            if (err) {
                return alert(err);
            }
            else {
                setSubmitButtonToSuccess(el);
            }
        });
        return false;
    });

});