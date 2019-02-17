import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { getRootView } from "tns-core-modules/application";
import { EventData } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";
import { getFrameById } from "tns-core-modules/ui/frame";

export function navigateToFeatured(args: EventData) {
    const sideDrawer: RadSideDrawer = <RadSideDrawer>getRootView();
    const featuredFrame = getFrameById("root");
    featuredFrame.navigate({
        moduleName: "featured-page",
        clearHistory: true
    });
    sideDrawer.closeDrawer();
}

export function navigateToBrowse(args: EventData) {
    const sideDrawer: RadSideDrawer = <RadSideDrawer>getRootView();
    const featuredFrame = getFrameById("root");
    featuredFrame.navigate({
        moduleName: "browse-page",
        clearHistory: true
    });
    sideDrawer.closeDrawer();
}

export function navigateToSearch(args: EventData) {
    const sideDrawer: RadSideDrawer = <RadSideDrawer>getRootView();
    const featuredFrame = getFrameById("root");
    featuredFrame.navigate({
        moduleName: "search-page",
        clearHistory: true
    });
    sideDrawer.closeDrawer();
}

export function navigateToHome(args: EventData) {
    const sideDrawer: RadSideDrawer = <RadSideDrawer>getRootView();
    const featuredFrame = getFrameById("root");
    featuredFrame.navigate({
        moduleName: "home-page",
        clearHistory: true
    });
    sideDrawer.closeDrawer();
}

export function navigateToCreate(args: EventData) {
    const sideDrawer: RadSideDrawer = <RadSideDrawer>getRootView();
    const featuredFrame = getFrameById("root");
    featuredFrame.navigate({
        moduleName: "create",
        clearHistory: true
    });
    sideDrawer.closeDrawer();
}

export function navigateToCurrent(args: EventData) {
    const sideDrawer: RadSideDrawer = <RadSideDrawer>getRootView();
    const featuredFrame = getFrameById("root");
    featuredFrame.navigate({
        moduleName: "quest-page",
        clearHistory: true
    });
    sideDrawer.closeDrawer();
}