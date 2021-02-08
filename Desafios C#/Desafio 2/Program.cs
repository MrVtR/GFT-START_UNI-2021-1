using System;
using System.Collections.Generic;
using System.Linq;

namespace Desafio_2
{
    class Program
    {
        static void Main(string[] args)
        {
            int numeroDeFigurinhas = Int32.Parse(Console.ReadLine());
            int numeroDeFigurinhasCompradas = Int32.Parse(Console.ReadLine());
            int totalDeFigurinhas = 0;
            List<int> album = new List<int>();
            for (int i = 0; i < numeroDeFigurinhasCompradas; i++)
            {
                album.Add(Convert.ToInt32(Console.ReadLine()));
            }
            var diff = album.Distinct().ToList();
            totalDeFigurinhas = numeroDeFigurinhas - diff.Count;
            Console.WriteLine(totalDeFigurinhas);
        }
    }
}
