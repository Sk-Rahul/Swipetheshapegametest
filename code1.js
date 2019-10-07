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


document.addEventListener("DOMContentLoaded", () => {
    // getKaiAd( config )
    

    getKaiAd({
        publisher: '3b38ba5c-be76-40f3-9bec-a1f37e7a7378',
        app: 'Swipe',
        slot: 'yourSlotName',
        
        h: 264,
        w: 240,
        // Max supported size is 240x264
        
    
        // If container (HTMLElement) is not provided,
        // a fullscreen ad will be requested
    
        // A fullscreen ad it will be
        // absolutely positioned and document.body appended
    
        // if container provided,
        // a responsive banner type ad will be requested
        container: document.getElementById('ad-container'),
    
        onerror: err => console.error('Custom catch:', err),
        onready: ad => {
            // Ad is resolved, loaded, and is ready to be displayed
            // calling 'display' will display the ad
    
            ad.call('display', {
                // In KaiOS the app developer is responsible
                // for user navigation, and as such can provide
                // navigational className and/or a tabindex
    
                tabindex: 0,
    
                // if the application is using
                // a classname to navigate
                // this classname will be applied
                // to the container
                navClass: 'items',
    
                // display style will be applied
                // to the container block or inline-block
                display: 'block',
            })
        }
    })
    })








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
