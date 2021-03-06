/*
 * JS for SMSSuccess generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '33f72e88-f312-4e6d-866f-186e1004cd5b';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "SMSSuccess",
    "location": "SMSSuccess.html"
}, {
    "name": "mapViewPage",
    "location": "mapViewPage.html"
}, {
    "name": "loginScreen",
    "location": "loginScreen.html"
}, {
    "name": "editProfilePage",
    "location": "editProfilePage.html"
}, {
    "name": "profilePage",
    "location": "profilePage.html"
}, {
    "name": "dashboard",
    "location": "dashboard.html"
}, {
    "name": "discoveryPreferencesPage",
    "location": "discoveryPreferencesPage.html"
}, {
    "name": "otherProfilePage",
    "location": "otherProfilePage.html"
}];

function SMSSuccess_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {

    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'SMSSuccess';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var SMSSuccess_onLoad = function() {
            SMSSuccess_elementsExtraJS();

            SMSSuccess_deviceEvents();
            SMSSuccess_windowEvents();
            SMSSuccess_elementsEvents();
        };

    // screen window events


    function SMSSuccess_windowEvents() {

        $('#SMSSuccess').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function SMSSuccess_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function SMSSuccess_elementsExtraJS() {
        // screen (SMSSuccess) extra code

    };

    // screen elements handler


    function SMSSuccess_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

    };

    $(document).off("pagebeforeshow", "#SMSSuccess").on("pagebeforeshow", "#SMSSuccess", function(event, ui) {
        Apperyio.CurrentScreen = "SMSSuccess";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    SMSSuccess_onLoad();
};

$(document).off("pagecreate", "#SMSSuccess").on("pagecreate", "#SMSSuccess", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    SMSSuccess_js();
});