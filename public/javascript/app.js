

var ar = [1,3,2];

function selectionSort(ar){
	var i, j, minIx, minVal;

	for(i=0;i<ar.length; ++1){
	minVal = ar[minIx = i];
	for(j=1;j<ar.length;++j){
	ar[j] < minVal && (minVal = ar[minIx = j]);}
	temp = ar[i]; ar[i] = ar[minIx]; ar[minIx] = temp;
	}
	return ar;
	}
console.log(selectionSort(ar));




//i   =   0/1
//minVal  1/3
//ar[j]   3/2
//j   =   1/2
//minIx   1/1
//ar[i]   1/3
