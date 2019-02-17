import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { getRootView } from "tns-core-modules/application";
import { EventData } from "tns-core-modules/data/observable";

export function onDrawerButtonTap(args: EventData) {
    const sideDrawer: RadSideDrawer = <RadSideDrawer>getRootView();
    sideDrawer.showDrawer();
}