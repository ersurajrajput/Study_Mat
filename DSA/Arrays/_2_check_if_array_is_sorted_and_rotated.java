public class Check_if_array_is_sorted_and_rotated {
    public boolean check(int[] nums) {
        int b = 0;
        int n = nums.length;
        ///// counting drops
        for (int i = 0; i < n; i++) {
            if (nums[i] > nums[(i + 1) % n]) {
                b++;
            }
        }

        /// if drop is more than one than not sorted And rotated
        if (b <= 1) {
            return true;
        } else {
            return false;
        }
    }
    
}