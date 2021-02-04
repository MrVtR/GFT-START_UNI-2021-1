using System;

namespace Out
{
  class Program
  {
    static void Dividir(int x, int y, out int resultado, out int resto)
    {
      resultado = x / y;
      resto = x % y;
    }
    static void Main(string[] args)
    {
      Dividir(10, 3, out int resultado, out int resto);
      Console.WriteLine("{0} {1}", resultado, resto);
    }
  }
}
