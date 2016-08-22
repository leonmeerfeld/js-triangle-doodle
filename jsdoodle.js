var triangleObj = 
{
    xPos1: GenerateRandomNumber(0, 700),
    yPos1: GenerateRandomNumber(0, 700),
    
    xPos2: GenerateRandomNumber(0, 700),
    yPos2: GenerateRandomNumber(0, 700),
    
    xPos3: GenerateRandomNumber(0, 700),
    yPos3: GenerateRandomNumber(0, 700),
}

var iterations = 70;
var trianglePhase = 0;
var i = 0;

var triangle;

function onFrame(event)
{
    triangle = new Path
    ([
        new Point(triangleObj.xPos1, triangleObj.yPos1),
        new Point(triangleObj.xPos2, triangleObj.yPos2),
        new Point(triangleObj.xPos3, triangleObj.yPos3)
    ]);
    
    triangle.closed = true;
    //triangle.strokeColor = 'black';
    triangle.fillColor = 'grey';
    triangle.fillColor.saturation -= i * 0.05;
    
    if(i < iterations)
    {
        switch(trianglePhase)
        {
            case 0:
                triangleObj.xPos1 = ((triangleObj.xPos2 - triangleObj.xPos1) / 5) + triangleObj.xPos1;
                triangleObj.yPos1 = ((triangleObj.yPos2 - triangleObj.yPos1) / 5) + triangleObj.yPos1;
                break;
            
            case 1:
                triangleObj.xPos2 = ((triangleObj.xPos3 - triangleObj.xPos2) / 5) + triangleObj.xPos2;
                triangleObj.yPos2 = ((triangleObj.yPos3 - triangleObj.yPos2) / 5) + triangleObj.yPos2;
                break;
                
            case 2:
                triangleObj.xPos3 = ((triangleObj.xPos1 - triangleObj.xPos3) / 5) + triangleObj.xPos3;
                triangleObj.yPos3 = ((triangleObj.yPos1 - triangleObj.yPos3) / 5) + triangleObj.yPos3;
                break;
        }
        
        i++;   
        trianglePhase++;
        
        if(trianglePhase == 3)
         {
             trianglePhase = 0;
         }
         
    }else
    {
        resetPos();
    }
}

function resetPos()
{
    triangle.xPos1 = GenerateRandomNumber(0,700);
    triangle.yPos1 = GenerateRandomNumber(0,700);
    
    triangle.xPos2 = GenerateRandomNumber(0,700);
    triangle.yPos2 = GenerateRandomNumber(0,700);
    
    triangle.xPos3 = GenerateRandomNumber(0,700);
    triangle.yPos3 = GenerateRandomNumber(0,700);
    
    iterations = 0;
}

function GenerateRandomNumber(min, max) 
{
    return (Math.random() * (max - min)) + min;
}
