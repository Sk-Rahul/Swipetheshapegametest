gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDBoxFilledObjects1_1final = [];

gdjs.NewSceneCode.GDCircelFilledObjects1_1final = [];

gdjs.NewSceneCode.GDLineUpObjects1_1final = [];

gdjs.NewSceneCode.GDTriangleFilledObjects1_1final = [];

gdjs.NewSceneCode.GDBackgroundObjects1= [];
gdjs.NewSceneCode.GDBackgroundObjects2= [];
gdjs.NewSceneCode.GDBackgroundObjects3= [];
gdjs.NewSceneCode.GDLinesObjects1= [];
gdjs.NewSceneCode.GDLinesObjects2= [];
gdjs.NewSceneCode.GDLinesObjects3= [];
gdjs.NewSceneCode.GDUpBannerObjects1= [];
gdjs.NewSceneCode.GDUpBannerObjects2= [];
gdjs.NewSceneCode.GDUpBannerObjects3= [];
gdjs.NewSceneCode.GDBoxFilledObjects1= [];
gdjs.NewSceneCode.GDBoxFilledObjects2= [];
gdjs.NewSceneCode.GDBoxFilledObjects3= [];
gdjs.NewSceneCode.GDCircelFilledObjects1= [];
gdjs.NewSceneCode.GDCircelFilledObjects2= [];
gdjs.NewSceneCode.GDCircelFilledObjects3= [];
gdjs.NewSceneCode.GDTriangleFilledObjects1= [];
gdjs.NewSceneCode.GDTriangleFilledObjects2= [];
gdjs.NewSceneCode.GDTriangleFilledObjects3= [];
gdjs.NewSceneCode.GDBoxspaceObjects1= [];
gdjs.NewSceneCode.GDBoxspaceObjects2= [];
gdjs.NewSceneCode.GDBoxspaceObjects3= [];
gdjs.NewSceneCode.GDCirclespaceObjects1= [];
gdjs.NewSceneCode.GDCirclespaceObjects2= [];
gdjs.NewSceneCode.GDCirclespaceObjects3= [];
gdjs.NewSceneCode.GDTrianglespaceObjects1= [];
gdjs.NewSceneCode.GDTrianglespaceObjects2= [];
gdjs.NewSceneCode.GDTrianglespaceObjects3= [];
gdjs.NewSceneCode.GDHeartObjects1= [];
gdjs.NewSceneCode.GDHeartObjects2= [];
gdjs.NewSceneCode.GDHeartObjects3= [];
gdjs.NewSceneCode.GDLiveTextObjects1= [];
gdjs.NewSceneCode.GDLiveTextObjects2= [];
gdjs.NewSceneCode.GDLiveTextObjects3= [];
gdjs.NewSceneCode.GDScoreTxtObjects1= [];
gdjs.NewSceneCode.GDScoreTxtObjects2= [];
gdjs.NewSceneCode.GDScoreTxtObjects3= [];
gdjs.NewSceneCode.GDLineUpObjects1= [];
gdjs.NewSceneCode.GDLineUpObjects2= [];
gdjs.NewSceneCode.GDLineUpObjects3= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_1 = {val:false};


gdjs.NewSceneCode.eventsList0x6ebe14 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDBoxFilledObjects2.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBoxFilledObjects2[i].getX() == 19 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects2[k] = gdjs.NewSceneCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBoxFilledObjects2[i].getY() <= (( gdjs.NewSceneCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects2[k] = gdjs.NewSceneCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBoxFilledObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBoxFilledObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBoxFilledObjects2[i].setX(102);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDBoxFilledObjects2.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBoxFilledObjects2[i].getY() <= (( gdjs.NewSceneCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects2[k] = gdjs.NewSceneCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBoxFilledObjects2[i].getX() == 102 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects2[k] = gdjs.NewSceneCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBoxFilledObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBoxFilledObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBoxFilledObjects2[i].setX(187);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.NewSceneCode.GDTriangleFilledObjects2.createFrom(runtimeScene.getObjects("TriangleFilled"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDTriangleFilledObjects2[i].getX() == 12 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDTriangleFilledObjects2[k] = gdjs.NewSceneCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDTriangleFilledObjects2[i].getY() <= (( gdjs.NewSceneCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDTriangleFilledObjects2[k] = gdjs.NewSceneCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDTriangleFilledObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDTriangleFilledObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTriangleFilledObjects2[i].setX(95);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.NewSceneCode.GDTriangleFilledObjects2.createFrom(runtimeScene.getObjects("TriangleFilled"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDTriangleFilledObjects2[i].getX() == 95 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDTriangleFilledObjects2[k] = gdjs.NewSceneCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDTriangleFilledObjects2[i].getY() <= (( gdjs.NewSceneCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDTriangleFilledObjects2[k] = gdjs.NewSceneCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDTriangleFilledObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDTriangleFilledObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTriangleFilledObjects2[i].setX(181);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDCircelFilledObjects2.createFrom(runtimeScene.getObjects("CircelFilled"));
gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDCircelFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDCircelFilledObjects2[i].getX() == 18 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDCircelFilledObjects2[k] = gdjs.NewSceneCode.GDCircelFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDCircelFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDCircelFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDCircelFilledObjects2[i].getY() <= (( gdjs.NewSceneCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDCircelFilledObjects2[k] = gdjs.NewSceneCode.GDCircelFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDCircelFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDCircelFilledObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDCircelFilledObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDCircelFilledObjects2[i].setX(101);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDCircelFilledObjects1.createFrom(runtimeScene.getObjects("CircelFilled"));
gdjs.NewSceneCode.GDLineUpObjects1.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDCircelFilledObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDCircelFilledObjects1[i].getX() == 101 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDCircelFilledObjects1[k] = gdjs.NewSceneCode.GDCircelFilledObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDCircelFilledObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDCircelFilledObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDCircelFilledObjects1[i].getY() <= (( gdjs.NewSceneCode.GDLineUpObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDLineUpObjects1[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDCircelFilledObjects1[k] = gdjs.NewSceneCode.GDCircelFilledObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDCircelFilledObjects1.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDCircelFilledObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDCircelFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDCircelFilledObjects1[i].setX(186);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x6ebe14
gdjs.NewSceneCode.eventsList0x6ed604 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDBoxFilledObjects2.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBoxFilledObjects2[i].getX() == 187 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects2[k] = gdjs.NewSceneCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBoxFilledObjects2[i].getY() <= (( gdjs.NewSceneCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects2[k] = gdjs.NewSceneCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBoxFilledObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBoxFilledObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBoxFilledObjects2[i].setX(102);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDBoxFilledObjects2.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBoxFilledObjects2[i].getX() == 102 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects2[k] = gdjs.NewSceneCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBoxFilledObjects2[i].getY() <= (( gdjs.NewSceneCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects2[k] = gdjs.NewSceneCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBoxFilledObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBoxFilledObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBoxFilledObjects2[i].setX(19);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.NewSceneCode.GDTriangleFilledObjects2.createFrom(runtimeScene.getObjects("TriangleFilled"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDTriangleFilledObjects2[i].getX() == 181 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDTriangleFilledObjects2[k] = gdjs.NewSceneCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDTriangleFilledObjects2[i].getY() <= (( gdjs.NewSceneCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDTriangleFilledObjects2[k] = gdjs.NewSceneCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDTriangleFilledObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDTriangleFilledObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTriangleFilledObjects2[i].setX(95);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.NewSceneCode.GDTriangleFilledObjects2.createFrom(runtimeScene.getObjects("TriangleFilled"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDTriangleFilledObjects2[i].getX() == 95 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDTriangleFilledObjects2[k] = gdjs.NewSceneCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDTriangleFilledObjects2[i].getY() <= (( gdjs.NewSceneCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDTriangleFilledObjects2[k] = gdjs.NewSceneCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDTriangleFilledObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDTriangleFilledObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTriangleFilledObjects2[i].setX(12);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDCircelFilledObjects2.createFrom(runtimeScene.getObjects("CircelFilled"));
gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDCircelFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDCircelFilledObjects2[i].getX() == 186 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDCircelFilledObjects2[k] = gdjs.NewSceneCode.GDCircelFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDCircelFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDCircelFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDCircelFilledObjects2[i].getY() <= (( gdjs.NewSceneCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDCircelFilledObjects2[k] = gdjs.NewSceneCode.GDCircelFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDCircelFilledObjects2.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDCircelFilledObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDCircelFilledObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDCircelFilledObjects2[i].setX(101);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDCircelFilledObjects1.createFrom(runtimeScene.getObjects("CircelFilled"));
gdjs.NewSceneCode.GDLineUpObjects1.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDCircelFilledObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDCircelFilledObjects1[i].getX() == 101 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDCircelFilledObjects1[k] = gdjs.NewSceneCode.GDCircelFilledObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDCircelFilledObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDCircelFilledObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDCircelFilledObjects1[i].getY() <= (( gdjs.NewSceneCode.GDLineUpObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDLineUpObjects1[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDCircelFilledObjects1[k] = gdjs.NewSceneCode.GDCircelFilledObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDCircelFilledObjects1.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDCircelFilledObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDCircelFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDCircelFilledObjects1[i].setX(18);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x6ed604
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBoxFilledObjects2Objects = Hashtable.newFrom({"BoxFilled": gdjs.NewSceneCode.GDBoxFilledObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDTriangleFilledObjects2Objects = Hashtable.newFrom({"TriangleFilled": gdjs.NewSceneCode.GDTriangleFilledObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCircelFilledObjects1Objects = Hashtable.newFrom({"CircelFilled": gdjs.NewSceneCode.GDCircelFilledObjects1});gdjs.NewSceneCode.eventsList0x673e2c = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 0;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDBoxFilledObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBoxFilledObjects2Objects, 19, -(13), "");
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDTriangleFilledObjects2Objects, 12, -(13), "");
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 2;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDCircelFilledObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCircelFilledObjects1Objects, 18, -(13), "");
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x673e2c
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBoxFilledObjects2Objects = Hashtable.newFrom({"BoxFilled": gdjs.NewSceneCode.GDBoxFilledObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDTriangleFilledObjects2Objects = Hashtable.newFrom({"TriangleFilled": gdjs.NewSceneCode.GDTriangleFilledObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCircelFilledObjects1Objects = Hashtable.newFrom({"CircelFilled": gdjs.NewSceneCode.GDCircelFilledObjects1});gdjs.NewSceneCode.eventsList0x751284 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 0;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDBoxFilledObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBoxFilledObjects2Objects, 102, -(13), "");
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDTriangleFilledObjects2Objects, 95, -(13), "");
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 2;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDCircelFilledObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCircelFilledObjects1Objects, 101, -(13), "");
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x751284
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBoxFilledObjects2Objects = Hashtable.newFrom({"BoxFilled": gdjs.NewSceneCode.GDBoxFilledObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDTriangleFilledObjects2Objects = Hashtable.newFrom({"TriangleFilled": gdjs.NewSceneCode.GDTriangleFilledObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCircelFilledObjects1Objects = Hashtable.newFrom({"CircelFilled": gdjs.NewSceneCode.GDCircelFilledObjects1});gdjs.NewSceneCode.eventsList0x703f64 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 0;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDBoxFilledObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBoxFilledObjects2Objects, 187, -(13), "");
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDTriangleFilledObjects2Objects, 181, -(13), "");
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 2;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDCircelFilledObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCircelFilledObjects1Objects, 186, -(13), "");
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x703f64
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLineUpObjects2Objects = Hashtable.newFrom({"LineUp": gdjs.NewSceneCode.GDLineUpObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBoxFilledObjects2Objects = Hashtable.newFrom({"BoxFilled": gdjs.NewSceneCode.GDBoxFilledObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLineUpObjects2Objects = Hashtable.newFrom({"LineUp": gdjs.NewSceneCode.GDLineUpObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDTriangleFilledObjects2Objects = Hashtable.newFrom({"TriangleFilled": gdjs.NewSceneCode.GDTriangleFilledObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLineUpObjects2Objects = Hashtable.newFrom({"LineUp": gdjs.NewSceneCode.GDLineUpObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCircelFilledObjects2Objects = Hashtable.newFrom({"CircelFilled": gdjs.NewSceneCode.GDCircelFilledObjects2});gdjs.NewSceneCode.eventsList0x70d50c = function(runtimeScene) {

{

gdjs.NewSceneCode.GDBoxFilledObjects2.createFrom(gdjs.NewSceneCode.GDBoxFilledObjects1);


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBoxFilledObjects2[i].getX() == 187 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects2[k] = gdjs.NewSceneCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects2.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("score").add(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "RightAns.mp3", false, 80, 1);
}}

}


{

/* Reuse gdjs.NewSceneCode.GDBoxFilledObjects1 */

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDBoxFilledObjects1[i].getX() == 187) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects1[k] = gdjs.NewSceneCode.GDBoxFilledObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Lives").sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 30, 1);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x70d50c
gdjs.NewSceneCode.eventsList0x70f4cc = function(runtimeScene) {

{

gdjs.NewSceneCode.GDTriangleFilledObjects2.createFrom(gdjs.NewSceneCode.GDTriangleFilledObjects1);


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDTriangleFilledObjects2[i].getX() == 95 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDTriangleFilledObjects2[k] = gdjs.NewSceneCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("score").add(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "RightAns.mp3", false, 80, 1);
}}

}


{

/* Reuse gdjs.NewSceneCode.GDTriangleFilledObjects1 */

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDTriangleFilledObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDTriangleFilledObjects1[i].getX() == 95) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDTriangleFilledObjects1[k] = gdjs.NewSceneCode.GDTriangleFilledObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDTriangleFilledObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Lives").sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 30, 1);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x70f4cc
gdjs.NewSceneCode.eventsList0x66f26c = function(runtimeScene) {

{

gdjs.NewSceneCode.GDCircelFilledObjects2.createFrom(gdjs.NewSceneCode.GDCircelFilledObjects1);


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDCircelFilledObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDCircelFilledObjects2[i].getX() == 18 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDCircelFilledObjects2[k] = gdjs.NewSceneCode.GDCircelFilledObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDCircelFilledObjects2.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("score").add(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "RightAns.mp3", false, 80, 1);
}}

}


{

/* Reuse gdjs.NewSceneCode.GDCircelFilledObjects1 */

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDCircelFilledObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDCircelFilledObjects1[i].getX() == 18) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDCircelFilledObjects1[k] = gdjs.NewSceneCode.GDCircelFilledObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDCircelFilledObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Lives").sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 30, 1);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x66f26c
gdjs.NewSceneCode.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("SwipeSlide").setNumber(0);
}{runtimeScene.getVariables().get("InstansiateShapes").setNumber(gdjs.randomInRange(0, 2));
}{runtimeScene.getVariables().get("InstansiateShapesPos").setNumber(gdjs.randomInRange(0, 2));
}{runtimeScene.getVariables().get("CreateGameObj").setNumber(1);
}{runtimeScene.getVariables().get("boxtouched").setNumber(0);
}{runtimeScene.getVariables().get("LineTouch").setNumber(-(45));
}{runtimeScene.getVariables().get("score").setNumber(0);
}{runtimeScene.getVariables().get("Lives").setNumber(3);
}}

}


{



}


{


{
gdjs.NewSceneCode.GDBoxFilledObjects1.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.NewSceneCode.GDCircelFilledObjects1.createFrom(runtimeScene.getObjects("CircelFilled"));
gdjs.NewSceneCode.GDLiveTextObjects1.createFrom(runtimeScene.getObjects("LiveText"));
gdjs.NewSceneCode.GDScoreTxtObjects1.createFrom(runtimeScene.getObjects("ScoreTxt"));
gdjs.NewSceneCode.GDTriangleFilledObjects1.createFrom(runtimeScene.getObjects("TriangleFilled"));
{for(var i = 0, len = gdjs.NewSceneCode.GDTriangleFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTriangleFilledObjects1[i].addForce(0, 50, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBoxFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBoxFilledObjects1[i].addForce(0, 50, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDCircelFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDCircelFilledObjects1[i].addForce(0, 50, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDTriangleFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTriangleFilledObjects1[i].setLayer("3");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBoxFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBoxFilledObjects1[i].setLayer("3");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDCircelFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDCircelFilledObjects1[i].setLayer("3");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDScoreTxtObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDScoreTxtObjects1[i].setString("Score : " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("score")));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDLiveTextObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDLiveTextObjects1[i].setString("X" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Lives")));
}
}}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x6ebe14(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("SwipeSlide").setNumber(0);
}}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x6ed604(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("SwipeSlide").setNumber(0);
}}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapesPos")) == 0;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("CreateGameObj")) == 1;
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("CreateGameObj").setNumber(0);
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x673e2c(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapesPos")) == 1;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("CreateGameObj")) == 1;
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("CreateGameObj").setNumber(0);
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x751284(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapesPos")) == 2;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("CreateGameObj")) == 1;
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("CreateGameObj").setNumber(0);
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x703f64(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.NewSceneCode.GDBoxFilledObjects1.length = 0;

gdjs.NewSceneCode.GDCircelFilledObjects1.length = 0;

gdjs.NewSceneCode.GDLineUpObjects1.length = 0;

gdjs.NewSceneCode.GDTriangleFilledObjects1.length = 0;


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.GDBoxFilledObjects1_1final.length = 0;gdjs.NewSceneCode.GDCircelFilledObjects1_1final.length = 0;gdjs.NewSceneCode.GDLineUpObjects1_1final.length = 0;gdjs.NewSceneCode.GDTriangleFilledObjects1_1final.length = 0;gdjs.NewSceneCode.condition0IsTrue_1.val = false;
gdjs.NewSceneCode.condition1IsTrue_1.val = false;
gdjs.NewSceneCode.condition2IsTrue_1.val = false;
{
gdjs.NewSceneCode.GDBoxFilledObjects2.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.NewSceneCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLineUpObjects2Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBoxFilledObjects2Objects, false, runtimeScene, false);
if( gdjs.NewSceneCode.condition0IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.NewSceneCode.GDBoxFilledObjects2.length;j<jLen;++j) {
        if ( gdjs.NewSceneCode.GDBoxFilledObjects1_1final.indexOf(gdjs.NewSceneCode.GDBoxFilledObjects2[j]) === -1 )
            gdjs.NewSceneCode.GDBoxFilledObjects1_1final.push(gdjs.NewSceneCode.GDBoxFilledObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.NewSceneCode.GDLineUpObjects2.length;j<jLen;++j) {
        if ( gdjs.NewSceneCode.GDLineUpObjects1_1final.indexOf(gdjs.NewSceneCode.GDLineUpObjects2[j]) === -1 )
            gdjs.NewSceneCode.GDLineUpObjects1_1final.push(gdjs.NewSceneCode.GDLineUpObjects2[j]);
    }
}
}
{
gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.NewSceneCode.GDTriangleFilledObjects2.createFrom(runtimeScene.getObjects("TriangleFilled"));
gdjs.NewSceneCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLineUpObjects2Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDTriangleFilledObjects2Objects, false, runtimeScene, false);
if( gdjs.NewSceneCode.condition1IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.NewSceneCode.GDLineUpObjects2.length;j<jLen;++j) {
        if ( gdjs.NewSceneCode.GDLineUpObjects1_1final.indexOf(gdjs.NewSceneCode.GDLineUpObjects2[j]) === -1 )
            gdjs.NewSceneCode.GDLineUpObjects1_1final.push(gdjs.NewSceneCode.GDLineUpObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.NewSceneCode.GDTriangleFilledObjects2.length;j<jLen;++j) {
        if ( gdjs.NewSceneCode.GDTriangleFilledObjects1_1final.indexOf(gdjs.NewSceneCode.GDTriangleFilledObjects2[j]) === -1 )
            gdjs.NewSceneCode.GDTriangleFilledObjects1_1final.push(gdjs.NewSceneCode.GDTriangleFilledObjects2[j]);
    }
}
}
{
gdjs.NewSceneCode.GDCircelFilledObjects2.createFrom(runtimeScene.getObjects("CircelFilled"));
gdjs.NewSceneCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.NewSceneCode.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLineUpObjects2Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCircelFilledObjects2Objects, false, runtimeScene, false);
if( gdjs.NewSceneCode.condition2IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.NewSceneCode.GDCircelFilledObjects2.length;j<jLen;++j) {
        if ( gdjs.NewSceneCode.GDCircelFilledObjects1_1final.indexOf(gdjs.NewSceneCode.GDCircelFilledObjects2[j]) === -1 )
            gdjs.NewSceneCode.GDCircelFilledObjects1_1final.push(gdjs.NewSceneCode.GDCircelFilledObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.NewSceneCode.GDLineUpObjects2.length;j<jLen;++j) {
        if ( gdjs.NewSceneCode.GDLineUpObjects1_1final.indexOf(gdjs.NewSceneCode.GDLineUpObjects2[j]) === -1 )
            gdjs.NewSceneCode.GDLineUpObjects1_1final.push(gdjs.NewSceneCode.GDLineUpObjects2[j]);
    }
}
}
{
gdjs.NewSceneCode.GDBoxFilledObjects1.createFrom(gdjs.NewSceneCode.GDBoxFilledObjects1_1final);
gdjs.NewSceneCode.GDCircelFilledObjects1.createFrom(gdjs.NewSceneCode.GDCircelFilledObjects1_1final);
gdjs.NewSceneCode.GDLineUpObjects1.createFrom(gdjs.NewSceneCode.GDLineUpObjects1_1final);
gdjs.NewSceneCode.GDTriangleFilledObjects1.createFrom(gdjs.NewSceneCode.GDTriangleFilledObjects1_1final);
}
}
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6939892);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("CreateGameObj").setNumber(1);
}{runtimeScene.getVariables().get("InstansiateShapesPos").setNumber(gdjs.randomInRange(0, 2));
}{runtimeScene.getVariables().get("InstansiateShapes").setNumber(gdjs.randomInRange(0, 2));
}}

}


{

gdjs.NewSceneCode.GDBoxFilledObjects1.createFrom(runtimeScene.getObjects("BoxFilled"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBoxFilledObjects1[i].getY() >= 275 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects1[k] = gdjs.NewSceneCode.GDBoxFilledObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBoxFilledObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBoxFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBoxFilledObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x70d50c(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDTriangleFilledObjects1.createFrom(runtimeScene.getObjects("TriangleFilled"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDTriangleFilledObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDTriangleFilledObjects1[i].getY() >= 274 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDTriangleFilledObjects1[k] = gdjs.NewSceneCode.GDTriangleFilledObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDTriangleFilledObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDTriangleFilledObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDTriangleFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTriangleFilledObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x70f4cc(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDCircelFilledObjects1.createFrom(runtimeScene.getObjects("CircelFilled"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDCircelFilledObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDCircelFilledObjects1[i].getY() >= 273 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDCircelFilledObjects1[k] = gdjs.NewSceneCode.GDCircelFilledObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDCircelFilledObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDCircelFilledObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDCircelFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDCircelFilledObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Lives").sub(1);
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x66f26c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.NewSceneCode.eventsList0xb43b0


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDBackgroundObjects1.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects2.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects3.length = 0;
gdjs.NewSceneCode.GDLinesObjects1.length = 0;
gdjs.NewSceneCode.GDLinesObjects2.length = 0;
gdjs.NewSceneCode.GDLinesObjects3.length = 0;
gdjs.NewSceneCode.GDUpBannerObjects1.length = 0;
gdjs.NewSceneCode.GDUpBannerObjects2.length = 0;
gdjs.NewSceneCode.GDUpBannerObjects3.length = 0;
gdjs.NewSceneCode.GDBoxFilledObjects1.length = 0;
gdjs.NewSceneCode.GDBoxFilledObjects2.length = 0;
gdjs.NewSceneCode.GDBoxFilledObjects3.length = 0;
gdjs.NewSceneCode.GDCircelFilledObjects1.length = 0;
gdjs.NewSceneCode.GDCircelFilledObjects2.length = 0;
gdjs.NewSceneCode.GDCircelFilledObjects3.length = 0;
gdjs.NewSceneCode.GDTriangleFilledObjects1.length = 0;
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = 0;
gdjs.NewSceneCode.GDTriangleFilledObjects3.length = 0;
gdjs.NewSceneCode.GDBoxspaceObjects1.length = 0;
gdjs.NewSceneCode.GDBoxspaceObjects2.length = 0;
gdjs.NewSceneCode.GDBoxspaceObjects3.length = 0;
gdjs.NewSceneCode.GDCirclespaceObjects1.length = 0;
gdjs.NewSceneCode.GDCirclespaceObjects2.length = 0;
gdjs.NewSceneCode.GDCirclespaceObjects3.length = 0;
gdjs.NewSceneCode.GDTrianglespaceObjects1.length = 0;
gdjs.NewSceneCode.GDTrianglespaceObjects2.length = 0;
gdjs.NewSceneCode.GDTrianglespaceObjects3.length = 0;
gdjs.NewSceneCode.GDHeartObjects1.length = 0;
gdjs.NewSceneCode.GDHeartObjects2.length = 0;
gdjs.NewSceneCode.GDHeartObjects3.length = 0;
gdjs.NewSceneCode.GDLiveTextObjects1.length = 0;
gdjs.NewSceneCode.GDLiveTextObjects2.length = 0;
gdjs.NewSceneCode.GDLiveTextObjects3.length = 0;
gdjs.NewSceneCode.GDScoreTxtObjects1.length = 0;
gdjs.NewSceneCode.GDScoreTxtObjects2.length = 0;
gdjs.NewSceneCode.GDScoreTxtObjects3.length = 0;
gdjs.NewSceneCode.GDLineUpObjects1.length = 0;
gdjs.NewSceneCode.GDLineUpObjects2.length = 0;
gdjs.NewSceneCode.GDLineUpObjects3.length = 0;

gdjs.NewSceneCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
