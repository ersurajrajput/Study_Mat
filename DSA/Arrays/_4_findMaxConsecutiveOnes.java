public class _4_findMaxConsecutiveOnes {
    public int findMaxConsecutiveOnes(int[] nums) {
        int c = 0;
        int m = 0;
        for(int i:nums){
            if(i==1){
                c++;
                m = Math.max(c,m);
            }else{
                c =0;
            }
        }
        return m;
    }
}
