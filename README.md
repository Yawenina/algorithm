# algorithm
Algorithm achieved through JavaScript

## Collections(集合)
- 数组: 有索引，添加删除很麻烦，要移动后面的元素
- 链表(Linked list): 没有索引，存储了后一个元素的索引，相对数组来说添加删除要方便一些
- 双向链表(Double linked list) 存储了前后元素的位置
- 栈(stacks): 关注最近的一个元素。L.I.F.O(last in -- push, first out)。可以用链表实现
- 队列(queue): First in(enqueue), first out(dequeue)

## 查找和排序
- 一个个查找是最慢的，时间度为O(n)
- 求某种算法的最坏情况，把数据分成0-8个长度，算一下用该算法查找的次数，要查找的数据在这些列表之外
- 二分查找法(binary search): 对**已排序**的数组使用二分法查找。查找中间的位置，比较大小。时间复杂度： O(log(n))
- 