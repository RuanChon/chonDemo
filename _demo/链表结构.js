// 以下是一个简单的单向链表的示例，其中包含三个节点
// 定义一个节点
class Node {
  constructor(data) {
    this.data = data // 存储节点的数据
    this.next = null // 存储指向下一个节点的指针
  }
}

// 定义链表
class LinkedList {
  constructor() {
    this.head = null // 存储链表的头节点
    this.size = 0 // 存储链表的大小
  }

  // 在链表末尾添加一个节点
  add(data) {
    let node = new Node(data)
    if (this.head == null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }

  // 从链表中删除一个节点
  remove(data) {
    let current = this.head
    let previous = null
    while (current != null) {
      if (current.data === data) {
        if (previous == null) {
          this.head = current.next
        } else {
          previous.next = current.next
        }
        this.size--
        return current.data
      }
      previous = current
      current = current.next
    }
    return null
  }

  // 将链表转换成数组
  toArray() {
    let arr = []
    let current = this.head
    while (current != null) {
      arr.push(current.data)
      current = current.next
    }
    return arr
  }
}

// 创建链表对象
let list = new LinkedList()

// 添加节点
list.add("a")
list.add("b")
list.add("c")

// 打印链表
console.log(list.toArray()) // ["a", "b", "c"]

// 删除节点
list.remove("b")

// 打印链表
console.log(list.toArray()) // ["a", "c"]

// 在上述示例中，我们创建了一个包含三个节点的单向链表，然后添加、删除节点，并将链表转换成数组进行打印。这个示例中的链表可以存储任意类型的数据。
