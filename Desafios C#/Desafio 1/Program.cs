using System;

namespace Desafio_1
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] viagem = Console.ReadLine().Split(' ');
            int horas = Int32.Parse(viagem[0]);
            int vel = Int32.Parse(viagem[1]);
            float qtdeLitros = ((float)horas * (float)vel)/12;
            Console.WriteLine(qtdeLitros.ToString("0.000"));
        }
    }
}
