using System;

namespace Ponto
{
  class Program
  {
    static void Main(string[] args)
    {
      Ponto p1 = new Ponto(3, 4);
      Ponto p2 = new Ponto(10, 20);
      Console.WriteLine($"Ponto p1: ({p1.x},{p1.y})");
      Console.WriteLine($"Ponto p2: ({p2.x},{p2.y})");
    }
  }
}
