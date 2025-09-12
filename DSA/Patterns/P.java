
import java.util.Scanner;;
public class P {
    static void P1(int n){
        // * * * *
        // * * * *
        // * * * *
        // * * * *
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
    static void P2(int n){
        // * 
        // * * 
        // * * * 
        // * * * * 

        for (int i = 0; i < n; i++) {
            for (int j = 0; j <=i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    static void P3(int n) {
    /* 1
     * 1 2
     * 1 2 3
     * 1 2 3 4
     */

        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print(j+1 +" ");
            }
            System.out.println();
        }
    }
    
    static void P4(int n) {
        /*
        1
        2 2
        3 3 3
        4 4 4 4
         */

        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print(i + 1 + " ");
            }
            System.out.println();
        }
    }
    
    static void P5(int n) {
        /*

        * * * *
        * * *
        * *
        *

         */

        for (int i = 0; i < n; i++) {
            for (int j = n-i; j > 0; j--) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
    
    static void P6(int n) {
        /*
                    *  
                  * * *
                * * * * *
              * * * * * * *
         
         */

        for (int i = 0; i < n; i++) {
            for (int j = 0; j<n-i; j++) { // fof printing start space
                System.out.print(" ");
            }
            for(int j = 0; j< (2*i + 1); j++){
                System.out.print("*");

            }
            for (int j = 0; j < n - i; j++) { // fof printing start space
                System.out.print(" ");
            }
            System.out.println();
        }
        // System.out.print(" ");
    }
    
    static void P7(int n) {
      

        for (int i = 0; i < n; i++) {
            System.out.print(" ");
            for (int j = 0; j < i; j++) { // fof printing start space
                System.out.print(" ");
            }
            for (int j = 0; j < (2*n-1) -2*i; j++) {
                System.out.print("*");

            }
            for (int j = 0; j <i; j++) { // fof printing start space
                System.out.print(" ");
            }
            System.out.println();
        }
    }

    static void P8(int n) {
        int t = 1;

        for (int i = 0; i < n; i++) {
           for(int j =0; j<=i; j++){
            System.out.print(t+" ");
            t = 1- t;
           }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // P1(n);
        // P2(n);
        // P3(n);
        // P4(n);
        // P5(n);
        // P6(n);
        // P7(n);
        
        // P2(n);
        // P5(n -1);
        P8(n);
        
    }
}