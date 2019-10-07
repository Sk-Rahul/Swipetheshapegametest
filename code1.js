gdjs.GameOverCode = {};
gdjs.GameOverCode.GDBGObjects1= [];
gdjs.GameOverCode.GDBGObjects2= [];
gdjs.GameOverCode.GDGameOverTxtObjects1= [];
gdjs.GameOverCode.GDGameOverTxtObjects2= [];
gdjs.GameOverCode.GDHighScoreTXTObjects1= [];
gdjs.GameOverCode.GDHighScoreTXTObjects2= [];
gdjs.GameOverCode.GDYourScoreTXTObjects1= [];
gdjs.GameOverCode.GDYourScoreTXTObjects2= [];
gdjs.GameOverCode.GDhighScoreObjects1= [];
gdjs.GameOverCode.GDhighScoreObjects2= [];
gdjs.GameOverCode.GDRestartTxtObjects1= [];
gdjs.GameOverCode.GDRestartTxtObjects2= [];
gdjs.GameOverCode.GDscoreObjects1= [];
gdjs.GameOverCode.GDscoreObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};


gdjs.GameOverCode.eventsList0x694d5c = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("save", "Hi_score");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("save", "Hi_score", runtimeScene, runtimeScene.getVariables().get("highScore"));
}}

}


}; //End of gdjs.GameOverCode.eventsList0x694d5c
gdjs.GameOverCode.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.GameOverCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "GameOver.wav", false, 100, 1);
}
{ //Subevents
gdjs.GameOverCode.eventsList0x694d5c(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("highScore"));
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("highScore").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("score")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("save", "Hi_score", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("highScore")));
}}

}


{


{
gdjs.GameOverCode.GDhighScoreObjects1.createFrom(runtimeScene.getObjects("highScore"));
{for(var i = 0, len = gdjs.GameOverCode.GDhighScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDhighScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("highScore")));
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", true);
}}

}


}; //End of gdjs.GameOverCode.eventsList0xb43b0


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDBGObjects1.length = 0;
gdjs.GameOverCode.GDBGObjects2.length = 0;
gdjs.GameOverCode.GDGameOverTxtObjects1.length = 0;
gdjs.GameOverCode.GDGameOverTxtObjects2.length = 0;
gdjs.GameOverCode.GDHighScoreTXTObjects1.length = 0;
gdjs.GameOverCode.GDHighScoreTXTObjects2.length = 0;
gdjs.GameOverCode.GDYourScoreTXTObjects1.length = 0;
gdjs.GameOverCode.GDYourScoreTXTObjects2.length = 0;
gdjs.GameOverCode.GDhighScoreObjects1.length = 0;
gdjs.GameOverCode.GDhighScoreObjects2.length = 0;
gdjs.GameOverCode.GDRestartTxtObjects1.length = 0;
gdjs.GameOverCode.GDRestartTxtObjects2.length = 0;
gdjs.GameOverCode.GDscoreObjects1.length = 0;
gdjs.GameOverCode.GDscoreObjects2.length = 0;

gdjs.GameOverCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['GameOverCode'] = gdjs.GameOverCode;
