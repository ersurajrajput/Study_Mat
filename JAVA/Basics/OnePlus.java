public class OnePlus {
    public static void main(String[] args) {
        int[] arr = {9,9,9};

        int num = 0;
        for (int i : arr) {
            num = (num * 10 ) + i;
        }
        num++;
        int size = String.valueOf(num).length() -1;
        String[] temp = new String[size];
        System.out.println(size+" "+num);
        String s = Integer.toString(num);
      for(int i =0; i<s.length(); i++){
         
        temp[i] = s.charAt(i);
      }



    }
}
