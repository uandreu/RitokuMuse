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
        countries: [
            { name: "Ace The Final!", imageSrc: "https://png.pngtree.com/svg/20161122/quest_27373.png", exp: "EXP: 100", pts: "PTS: 100", reward: "reward: Lego Set" },
            { name: "Takin out the Trash!", imageSrc: "https://png.pngtree.com/svg/20161122/quest_27373.png", exp: "EXP: 50", pts: "PTS: 10", reward: "reward: 1 dollars" },
            { name: "Gutter Cleanser!", imageSrc: "https://png.pngtree.com/svg/20161122/quest_27373.png", exp: "EXP: 200", pts: "PTS: 150", reward: "reward: 5 dollars" },
            { name: "Feed Friskers", imageSrc: "https://png.pngtree.com/svg/20161122/quest_27373.png", exp: "EXP: 200", pts: "PTS: 150", reward: "reward: + 30mins TV" },
            { name: "Pass with all A's", imageSrc: "https://png.pngtree.com/svg/20161122/quest_27373.png", exp: "EXP: 1000", pts: "PTS: 10", reward: "reward: Disney World!" },
            { name: "Help Grandma", imageSrc: "https://png.pngtree.com/svg/20161122/quest_27373.png", exp: "EXP: 100", pts: "PTS: 70", reward: "reward: Sleep @ 12AM" }
        ],

        onItemTap: function (args) {
            console.log('Item with index: ' + args.index + ' tapped');
        },


    });

    return viewModel;
}

module.exports = HomeViewModel;