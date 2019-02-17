var appModule = require("tns-core-modules/application");

var frame = require("tns-core-modules/ui/frame");
var observableModule = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");

function HomeViewModel() {
    const sideDrawer = appModule.getRootView();

    var viewModel = observableModule.fromObject({

        onOpenDrawerTap: function () {
            console.log("Hello!");
            sideDrawer.showDrawer();
        },
        onCloseDrawerTap: function () {
            sideDrawer.showDrawer();
        },
        onButtonTap: function () {
            console.log("Button was pressed");
        },

        currentHour: new Date().getHours(),
        currentMinute: new Date().getMinutes(),

        points: "",
        experience: "",
        rewards: "",
        objectName: "",
        objectDescription: "",

    });

    return viewModel;
}

module.exports = HomeViewModel;