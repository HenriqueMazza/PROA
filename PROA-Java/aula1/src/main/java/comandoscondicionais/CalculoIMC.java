package comandoscondicionais;
import java.util.Scanner;

public class CalculoIMC {
    public static void main(String[] args) {

        float altura;
        float peso;

        Scanner sc = new Scanner(System.in);

        System.out.println("==== Calculo de IMC ====");

        System.out.println("Digite seu peso em kg: ");
        peso = sc.nextFloat();

        System.out.println("Digite sua altura em metros: ");
        altura = sc.nextFloat();

        float imc = peso / (altura * altura);

        System.out.printf("Seu IMC é: %.2f%n",imc);
        if(imc < 18.5){
            System.out.println("Abaixo do peso");
        } else if (imc>=18.5 && imc<25){
            System.out.println("Peso normal");
        } else if (imc >= 25 && imc<30){
            System.out.println("Sobrepeso");
        } else if (imc >=30 && imc<35){
            System.out.println("Obesidade Grau 1");
        } else if (imc >=35 && imc<40){
            System.out.println("Obesidade Grau 2");
        } else {
            System.out.println("Obesidade Grau 3 (Grave)");
        }







    }
}
