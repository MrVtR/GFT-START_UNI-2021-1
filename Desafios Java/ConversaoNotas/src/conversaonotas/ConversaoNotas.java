/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package conversaonotas;

import java.io.IOException;
import java.util.Scanner;

/**
 *
 * @author vitor
 */
public class ConversaoNotas {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException{
        // TODO code application logic here
        Scanner scanner = new Scanner(System.in);
        int nota = scanner.nextInt();
        if(nota==0)
            System.out.println("E");
        else if(nota>=1 && nota<=35)
            System.out.println("D");
        else if(nota>=36 && nota<=60)
            System.out.println("C");
        else if(nota>=61 && nota<=85)
            System.out.println("B");
        else if(nota>=86 && nota<=100)
            System.out.println("A");
        else
            throw new IOException("Erro: nota inválida");
    }
}
