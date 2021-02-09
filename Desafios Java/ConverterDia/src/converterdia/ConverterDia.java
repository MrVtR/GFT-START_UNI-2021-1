/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package converterdia;

import java.io.IOException;
import java.util.Scanner;

/**
 *
 * @author vitor
 */
public class ConverterDia {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int idadeDias = leitor.nextInt();
        int anos = idadeDias / 365;
        idadeDias -= anos * 365;
        int meses = idadeDias / 30;
        idadeDias -= meses * 30;
        int dias = idadeDias;
        if (meses == 12 && dias >= 0) {
            throw new IOException("Erro: Data inválida");
        } else {
            System.out.println(anos + " ano(s)");
            System.out.println(meses + " mes(es)");
            System.out.println(dias + " dia(s)");
        }
    }
}
