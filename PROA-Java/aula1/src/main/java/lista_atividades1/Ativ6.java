package lista_atividades1;
import java.util.Scanner;

public class Ativ6 {
    public static void main(String[] args) {

        int num;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite um numero inteiro para saber se ele é par ou impar: ");
        num = sc.nextInt();

        if (num % 2 == 0){
            System.out.println("O numero é par!");
        } else {
            System.out.println("O numero é impar!");
        }
    }
}
