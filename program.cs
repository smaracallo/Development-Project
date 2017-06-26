using System;
using sc = System.Console; // Can now write sc.WriteLine("");

namespace RevatureSeed.Shape

{
class Program
{
    public static void Main()
    {
        System.Console.WriteLine("Hello World");
    
    //PlayWithRectangle();
    //PlayWIthSquare();
    //PlayWIthShapes();
    }

    public static void PlayWithRectangle()
    {
        var r1 = new Rectangle();
        var r2 = new Rectangle(){ Width = 2,Height = 2};
        var r3 = new Rectangle(2,2);  

        r1.Width = 2;
        r1.Height = 2;

       sc.WriteLine(r1.Perimeter());  
    }
     public static void PlayWIthSquare()
    {
       var s = new Square(2);

        sc.WriteLine(s.Perimeter());  
    }

    public static void PlayWIthShapes()
    {
        var r = new Rectangle(2,2);
        var s = new Square(2);
        var c = new Circle(2);
        var arr = new AShape[]{r,s,c};

        foreach(var item in arr)
        {
            PrintVolume(item);
        }
    }

     public static void PrintPerimeter(IShape i)
    {
        sc.WriteLine(i.Perimeter());
    }
    public static void PrintVolume(IShape i)
    {
        sc.WriteLine(i.Volume());   // will print no matter what shape is in volume
    }
}
}