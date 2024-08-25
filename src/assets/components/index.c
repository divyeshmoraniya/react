#include <stdio.h>
#include <stdlib.h>
int *insert(int arr[], int size, int index, int element) {
int *narr = (int *)malloc((size + 1) * sizeof(int));
for (int i = 0; i < index; i++) {
narr[i] = arr[i];
}
narr[index] = element;
for (int i = index; i < size; i++) {
narr[i + 1] = arr[i];
}
return narr;
}
int main() {
int size = 5;
int arr[5] = {1, 2, 3, 4, 5};
int index ;
printf("enter the index");
scanf("%d", &index);
int element;
printf("enter the element -->");
scanf("%d", &element);
int *narr = insert(arr, size, index, element);
for (int i = 0; i < size + 1; i++) {
printf("%d ", narr[i]);
}
printf("\n");
return 0;
}