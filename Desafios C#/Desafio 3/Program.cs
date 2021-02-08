using System;

namespace Desafio_3
{
    class Program
    {
        static void Main(string[] args)
        {
            String p1 = Console.ReadLine();
            String p2 = Console.ReadLine();
            String p3 = Console.ReadLine();

            if ((p1=="vertebrado") && (p2=="ave") && (p3=="carnivoro"))
            {
                //complete o desafio
                Console.WriteLine("aguia\n");
            }

            if ((p1=="vertebrado") && (p2=="ave") && (p3=="onivoro"))
            {
                //complete o desafio
                Console.WriteLine("pomba\n");
            }

            if ((p1=="vertebrado") && (p2=="mamifero") && (p3=="onivoro"))
            {
                //complete o desafio
                Console.WriteLine("homem\n");
            }

            if ((p1=="vertebrado") && (p2=="mamifero") && (p3=="herbivoro"))
            {
                //complete o desafio
                Console.WriteLine("vaca\n");
            }

            if ((p1=="invertebrado") && (p2=="inseto") && (p3=="hematofago"))
            {
                //complete o desafio
                Console.WriteLine("pulga\n");
            }

            if ((p1=="invertebrado") && (p2=="inseto") && (p3=="herbivoro"))
            {
                //complete o desafio
                Console.WriteLine("lagarta\n");
            }

            if ((p1== "invertebrado") && (p2== "anelideo") && (p3== "hematofago"))
            {
                Console.WriteLine("sanguessuga\n");
            }
            if ((p1== "invertebrado") && (p2== "anelideo") && (p3== "onivoro"))
            {
                Console.WriteLine("minhoca\n");
            }
        }
    }
}
