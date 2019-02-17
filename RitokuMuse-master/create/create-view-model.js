var observableModule = require("tns-core-modules/data/observable");

function HomeViewModel() {
  var viewModel = observableModule.fromObject({
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
