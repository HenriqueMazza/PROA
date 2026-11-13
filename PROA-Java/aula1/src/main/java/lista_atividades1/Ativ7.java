package lista_atividades1;
import java.util.Scanner;

public class Ativ7 {
    public static void main(String[] args) {

        double salariobase;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite seu salario base: ");
        salariobase = sc.nextDouble();

        double salariototal = salariobase + (salariobase*0.10);

        System.out.println("O salario liquido do funcionario é de: "+salariototal);
    }
}
