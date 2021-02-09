/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pares;

import java.io.IOException;
import java.util.Scanner;

/**
 *
 * @author vitor
 */
public class Pares {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        if(num<=0)
            throw new IOException("Erro: número inválido");
        for (int i = 1; i <= num; i++) {
            if (i % 2 == 0) {
                System.out.println(i);
            }
        }
    }

}
