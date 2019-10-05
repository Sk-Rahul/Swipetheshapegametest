gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDBackgroundObjects1= [];
gdjs.NewSceneCode.GDBackgroundObjects2= [];
gdjs.NewSceneCode.GDLinesObjects1= [];
gdjs.NewSceneCode.GDLinesObjects2= [];
gdjs.NewSceneCode.GDUpBannerObjects1= [];
gdjs.NewSceneCode.GDUpBannerObjects2= [];
gdjs.NewSceneCode.GDBoxFilledObjects1= [];
gdjs.NewSceneCode.GDBoxFilledObjects2= [];
gdjs.NewSceneCode.GDCircelFilledObjects1= [];
gdjs.NewSceneCode.GDCircelFilledObjects2= [];
gdjs.NewSceneCode.GDTriangleFilledObjects1= [];
gdjs.NewSceneCode.GDTriangleFilledObjects2= [];
gdjs.NewSceneCode.GDBoxspaceObjects1= [];
gdjs.NewSceneCode.GDBoxspaceObjects2= [];
gdjs.NewSceneCode.GDCirclespaceObjects1= [];
gdjs.NewSceneCode.GDCirclespaceObjects2= [];
gdjs.NewSceneCode.GDTrianglespaceObjects1= [];
gdjs.NewSceneCode.GDTrianglespaceObjects2= [];
gdjs.NewSceneCode.GDHeartObjects1= [];
gdjs.NewSceneCode.GDHeartObjects2= [];
gdjs.NewSceneCode.GDLiveTextObjects1= [];
gdjs.NewSceneCode.GDLiveTextObjects2= [];
gdjs.NewSceneCode.GDScoreTxtObjects1= [];
gdjs.NewSceneCode.GDScoreTxtObjects2= [];
gdjs.NewSceneCode.GDLineUpObjects1= [];
gdjs.NewSceneCode.GDLineUpObjects2= [];

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


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBoxFilledObjects1Objects = Hashtable.newFrom({"BoxFilled": gdjs.NewSceneCode.GDBoxFilledObjects1});gdjs.NewSceneCode.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("x").setNumber(0);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6900988);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDBoxFilledObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBoxFilledObjects1Objects, 14, -(12), "8");
}}

}


{


{
gdjs.NewSceneCode.GDBoxFilledObjects1.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.NewSceneCode.GDCircelFilledObjects1.createFrom(runtimeScene.getObjects("CircelFilled"));
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
}}

}


{

gdjs.NewSceneCode.GDBoxFilledObjects1.createFrom(runtimeScene.getObjects("BoxFilled"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBoxFilledObjects1[i].getX() == 14 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects1[k] = gdjs.NewSceneCode.GDBoxFilledObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBoxFilledObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBoxFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBoxFilledObjects1[i].setX(92);
}
}{runtimeScene.getVariables().get("x").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDBoxFilledObjects1.createFrom(runtimeScene.getObjects("BoxFilled"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.condition0IsTrue_1.val = false;
gdjs.NewSceneCode.condition1IsTrue_1.val = false;
gdjs.NewSceneCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBoxFilledObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBoxFilledObjects1[i].getX() == 92 ) {
        gdjs.NewSceneCode.condition0IsTrue_1.val = true;
        gdjs.NewSceneCode.GDBoxFilledObjects1[k] = gdjs.NewSceneCode.GDBoxFilledObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBoxFilledObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_1.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.NewSceneCode.condition1IsTrue_1.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("x")) == 0;
}}
}
gdjs.NewSceneCode.conditionTrue_1.val = true && gdjs.NewSceneCode.condition0IsTrue_1.val && gdjs.NewSceneCode.condition1IsTrue_1.val && gdjs.NewSceneCode.condition2IsTrue_1.val;
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBoxFilledObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBoxFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBoxFilledObjects1[i].setX(185);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("x").setNumber(0);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb43b0


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDBackgroundObjects1.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects2.length = 0;
gdjs.NewSceneCode.GDLinesObjects1.length = 0;
gdjs.NewSceneCode.GDLinesObjects2.length = 0;
gdjs.NewSceneCode.GDUpBannerObjects1.length = 0;
gdjs.NewSceneCode.GDUpBannerObjects2.length = 0;
gdjs.NewSceneCode.GDBoxFilledObjects1.length = 0;
gdjs.NewSceneCode.GDBoxFilledObjects2.length = 0;
gdjs.NewSceneCode.GDCircelFilledObjects1.length = 0;
gdjs.NewSceneCode.GDCircelFilledObjects2.length = 0;
gdjs.NewSceneCode.GDTriangleFilledObjects1.length = 0;
gdjs.NewSceneCode.GDTriangleFilledObjects2.length = 0;
gdjs.NewSceneCode.GDBoxspaceObjects1.length = 0;
gdjs.NewSceneCode.GDBoxspaceObjects2.length = 0;
gdjs.NewSceneCode.GDCirclespaceObjects1.length = 0;
gdjs.NewSceneCode.GDCirclespaceObjects2.length = 0;
gdjs.NewSceneCode.GDTrianglespaceObjects1.length = 0;
gdjs.NewSceneCode.GDTrianglespaceObjects2.length = 0;
gdjs.NewSceneCode.GDHeartObjects1.length = 0;
gdjs.NewSceneCode.GDHeartObjects2.length = 0;
gdjs.NewSceneCode.GDLiveTextObjects1.length = 0;
gdjs.NewSceneCode.GDLiveTextObjects2.length = 0;
gdjs.NewSceneCode.GDScoreTxtObjects1.length = 0;
gdjs.NewSceneCode.GDScoreTxtObjects2.length = 0;
gdjs.NewSceneCode.GDLineUpObjects1.length = 0;
gdjs.NewSceneCode.GDLineUpObjects2.length = 0;

gdjs.NewSceneCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
