init();
function init(){
    const labelElement = document.getElementById('chronometerText');
    const buttonStart = document.getElementById('button1');
    const buttonStop = document.getElementById('button2');
    
    const changeTime = clock();
    const attributesFromButtons = definingEvents();

    function definingEvents(){

        start();
        stop();

        function start(){
            buttonStart.onclick = () => {
                changeTime.start();
            };
        };
        function stop(){
            buttonStop.onclick = () => {
                changeTime.stop();
            };

        };

        return{
            start,
            stop
        };
    };
    function clock(){

        var intM = 000;
        var intS = 00;
        var intMin = 00;
        var i = 0;
        
        function change(){
            
            const interval = setInterval(() => {
                if(i = 1){


                        intM = intM + 1;
                        if(intM == 100){
                            intS = intS + 1;
                            intM = 000;
                        };
                        if(intS == 60){
                            intMin = intMin + 1;
                            intS = 0;
                        };
                    
                    
                        var stringFromIntMin = 0
                        var stringFromIntS = 0
                        var stringFromIntM = 0

                        if( intMin < 10){
                            stringFromIntMin = '0' + intMin;
                            
                        };
                        if(intMin >= 10){
                            stringFromIntMin = intMin;
                            
                        };
                        if(intS < 10){
                            stringFromIntS = '0' + intS;
                            
                        };
                        if(intS >= 10){
                            stringFromIntS = intS;
                            
                        };
                        if(intM < 10){
                            stringFromIntM = '0' + intM;
                            
                        };
                        if(intM >= 10){
                            stringFromIntM = intM;
                        }

                        labelElement.textContent = stringFromIntMin + ':' + stringFromIntS + ':' + stringFromIntM;
                    };
                    
                
            }, 10);
            buttonStop.onclick = () => {
                clearInterval(interval);
            };
                    
        
    
    

            
        };
        function start(){
            i = 1;
            change();
        };
        function stop(){
            i = 0;
            change();
        };

        return{
            start,
            stop,
            change
        };
    };

    return{
        definingEvents,
        clock
    };
};