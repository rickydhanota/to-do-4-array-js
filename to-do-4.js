
//In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?

function shuffle(arr){
    for (var i=0; i<arr.length; i++){// start at 0
        rPlacement = Math.floor(Math.random()*arr.length);//gives us a new random number everytime we 
        console.log("The random number is", rPlacement);
        for (var j=0; j<rPlacement; j++){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
        console.log("The shuffled array is", arr)
        console.log("-----------------------------------")
    }
    return arr;
}
// console.log(shuffle([1,2,3,4,5]));


//Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

function removeRange(arr, start, end){
    for (i = 0; i<arr.length-1; i++){
        console.log("start of for loop", i)
        if(i >= start && i<=end){
            console.log("this is i", i)
            for (var j = i; j<arr.length-1; j++){
                console.log("made it to second loop")
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; //easier way to swap = [a,b] = [b,a]
                //[arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                console.log("shifted array, prior to cutting off end", arr)
            }
            arr.length = arr.length-1;
            i--;
            console.log("shifted array", arr)
        }
    }
    return arr;
}
console.log(removeRange([1,2,3,4], 1,2));


//You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].





//Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].





//Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

//Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun!