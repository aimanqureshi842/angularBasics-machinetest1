import { Component } from "@angular/core";
import { IaiArr, IbiologyArr, IbusinessArr, IcloudArr, IeducationArr, IgeographyArr, ImathArr, IpsychologyArr, IroboticsArr, ItechToolsArr } from "../../models/cards";
import { aiArr, biologyArr, businessArr, cloudArr, educationArr, geographyArr, mathArr, psychologyArr, roboticsArr, techToolsArr } from "../../const/cardsConst";


@Component({
    selector:'app-cards',
    templateUrl:'./cards.component.html',
    styleUrls:['./cards.component.scss']
})
export class CardsComponent{
    aiArr:IaiArr[]=aiArr
    mathArr:ImathArr[]=mathArr
    roboticsArr:IroboticsArr[]=roboticsArr
    businessArr:IbusinessArr[]=businessArr
    geographyArr:IgeographyArr[]=geographyArr
    psychologyArr:IpsychologyArr[]=psychologyArr
    // biologyArr:IbiologyArr[]=biologyArr
    techToolsArr:ItechToolsArr[]=techToolsArr
    educationArr:IeducationArr[]=educationArr
    cloudArr:IcloudArr[]=cloudArr

}








