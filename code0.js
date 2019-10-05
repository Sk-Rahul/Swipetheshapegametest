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

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDTriangleFilledObjects1Objects = Hashtable.newFrom({"TriangleFilled": gdjs.NewSceneCode.GDTriangleFilledObjects1});gdjs.NewSceneCode.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7032068);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDTriangleFilledObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDTriangleFilledObjects1Objects, 95, 92, "8");
}}

}


{


{
gdjs.NewSceneCode.GDTriangleFilledObjects1.createFrom(runtimeScene.getObjects("TriangleFilled"));
{for(var i = 0, len = gdjs.NewSceneCode.GDTriangleFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTriangleFilledObjects1[i].addForce(0, 50, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDTriangleFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTriangleFilledObjects1[i].setHeight(38);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDTriangleFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTriangleFilledObjects1[i].setWidth(55);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDTriangleFilledObjects1.createFrom(runtimeScene.getObjects("TriangleFilled"));
{for(var i = 0, len = gdjs.NewSceneCode.GDTriangleFilledObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTriangleFilledObjects1[i].setX(187);
}
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

gdjs.NewSceneCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
