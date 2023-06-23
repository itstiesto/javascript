/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = j = 0;
    while (i < nums.length){
        let count = 1;
        while(i+1<nums.length && nums[i]===nums[i+1]){
            i += 1;
            count++;
        }
        for(let x =0; x<(Math.min(2,count)); x++){
            nums[j] = nums[i];
            j++;
        }
        i++
    }
    return i-(i-j) 
    
};
