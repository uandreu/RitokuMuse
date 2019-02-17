import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { getRootView } from "tns-core-modules/application";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";

export function navigateToItem(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("item-page");
}

export function onDrawerButtonTap(args: EventData) {
    const sideDrawer: RadSideDrawer = <RadSideDrawer>getRootView();
    sideDrawer.showDrawer();
}