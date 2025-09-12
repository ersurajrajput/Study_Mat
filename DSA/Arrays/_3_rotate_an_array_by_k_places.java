public class _3_rotate_an_array_by_k_places {
  ////////this methods works fine but TC = O(n*k)
    // public void rotate(int[] nums, int k) {
    //     int kt = k%nums.length ;

    //     for(int j = 0; j<kt;j++){
    //     int t = nums[nums.length-1];
    //     for(int i = nums.length-1; i>0;i--){
    //         nums[i] = nums[i-1];
    //     }
    //     nums[0] = t;
    //     }
        
    //     for(int i:nums){
    //         System.out.print(i);
    //     }
    // }


    //methode 2 (reversal method)

    /*
     *  
        public void rotate(int[] nums, int k) {
        int kt = k%nums.length ;
        int size = nums.length -1;
        if(size<=0){
            return;
        }
        reverse(0,size,nums);
        reverse(0,kt-1,nums);
        reverse(kt,size,nums);

        

    }
    public void reverse(int p,int q,int[] myarr){
        while(p<q){
        int t = myarr[p];
        myarr[p] = myarr[q];
        myarr[q] = t;
        p++;
        q--;
        }
       }
     */


}
