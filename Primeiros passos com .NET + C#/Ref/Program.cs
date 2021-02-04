using System;

namespace Ref
{
  class Program
  {
    static void Inverter(ref int x, ref int y)
    {
      int temp = x;
      x = y;
      y = temp;
    }

    public static void Main()
    {
      int i = 1, j = 2;
      Inverter(ref i, ref j);
      System.Console.WriteLine($"{i} {j}");
    }
  }
}
