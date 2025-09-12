import java.util.Scanner;;
public class LargestElement {
    
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
        int[] myarr = {1,5,4,8,6,9,7,2,5,6,8,9,12,45,78,2,56,9,8,99,78,12,154,15,1,56,8964,45};
       int lar = myarr[0];
       for (int i : myarr) {
            if (i>lar) {
                lar = i;
            }
       }  
       System.out.println(lar);
       
    }
    
}
