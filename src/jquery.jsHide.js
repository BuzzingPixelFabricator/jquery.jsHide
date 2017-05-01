/*----------------------------------------------------------------------------*\
 # Copyright 2017, BuzzingPixel, LLC

 # This program is free software: you can redistribute it and/or modify
 # it under the terms of the Apache License 2.0.
 # http://www.apache.org/licenses/LICENSE-2.0
 \*----------------------------------------------------------------------------*/

function runFabJqueryJsHide() {
    'use strict';

    if (window.jQuery === undefined) {
        setTimeout(function() {
            runFabJqueryJsHide();
        }, 10);
        return;
    }

    window.jQuery.fn.jsHide = function() {
        this.addClass('js-hide');
        return this;
    };

    window.jQuery.fn.jsShow = function() {
        this.removeClass('js-hide');
        return this;
    };
}

runFabJqueryJsHide();
