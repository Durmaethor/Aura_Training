({
    onFormSubmit : function(component, event, helper) {
        var data = even.getParam("formData");

        var boatSearchResultsCmp = component.find("boatSearchResultsCmp");
        if(boatSearchResultsCmp) {
            boatSearchResultsCmp.search(data.boatTypeId);
        }

    }
})
