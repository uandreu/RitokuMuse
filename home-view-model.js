var frame = require("tns-core-modules/ui/frame");
var observableModule = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");

function HomeViewModel() {
  var viewModel = observableModule.fromObject({
    expandRewards: function () {
      dialogs.alert({
        title: "Rewards",
        message: "Willy \nWonka",
        okButtonText: "return"
      });
    },

    expandXP: function () {
      dialogs.alert({
        title: "Experience",
        message: "80/100xp",
        okButtonText: "return"
      });
    },


    name: "Child",
    tokens: 20000,
    exp: 60,
    level: 4,

    qname: "Quest",
    qexp: "10 xp",
    qtokens: "1000 Tokens",
    qdesc: "Description this part shows more details for the quest.",
    qrew: "2 Rewards",

  });

  return viewModel;
}

module.exports = HomeViewModel;
