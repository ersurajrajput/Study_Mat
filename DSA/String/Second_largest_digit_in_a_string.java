import java.util.*;
public class Second_largest_digit_in_a_string {
 
    public int secondHighest(String s) {
        int firstMax = -1, secondMax = -1; // Track the largest and second largest digits

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (Character.isDigit(ch)) { // Check if it's a digit
                int num = ch - '0'; // Convert character to integer

                if (num > firstMax) { // New largest found
                    secondMax = firstMax; // Update second largest
                    firstMax = num; // Update largest
                } else if (num > secondMax && num < firstMax) { // New second largest found
                    secondMax = num;
                }
            }
        }

        return secondMax; // Return the second largest, or -1 if not found
    }
}

 