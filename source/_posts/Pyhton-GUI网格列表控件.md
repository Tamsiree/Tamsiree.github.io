---
title: Pyhton GUI网格列表控件
date: 2019-10-18 00:23:49
description: 有位朋友需要在Python下开发GUI，想要做一个网格列表，所以动手做了一个MultiListbox网格列表控件。
tags:
  - Python
categories:
  - Technical Research
  - Python
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/hulicaihong.jpg
---
# 前言
> 有位朋友需要在Python下开发GUI，想要做一个网格列表，所以动手做了一个MultiListbox网格列表控件。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/68482ac78adc6b56cce974575f6c1f85.jpg)

# 正文

```python
import apply as apply
import pandas as pd
import numpy as np
#GUI
from tkinter import*


"""
使用tklinter下的Listbox控件  
实现一个单行多值的网格列表控件
"""  
class MultiListbox(Frame):

    def __init__(self,master,lists):
        Frame.__init__(self,master)
        self.lists = []
        for l, w in lists:
            frame = Frame(self)
            frame.pack(side=LEFT, expand=YES, fill=BOTH)
            Label(frame, text=l, borderwidth=1, relief=RAISED).pack(fill=X)
            lb = Listbox(frame, width=w, borderwidth=0, selectborderwidth=0, relief=FLAT, exportselection=FALSE)
            lb.pack(expand=YES, fill=BOTH)
            self.lists.append(lb)
            lb.bind("<B1-Motion>",lambda e, s=self: s._select(e.y))
            lb.bind("<Button-1>",lambda e,s=self: s._select(e.y))
            lb.bind("<Leave>",lambda e: "break")
            lb.bind("<B2-Motion>",lambda e,s=self: s._b2motion(e.x,e.y))
            lb.bind("<Button-2>",lambda e,s=self: s._button2(e.x,e.y))
        frame = Frame(self)
        frame.pack(side=LEFT, expand=YES, fill=BOTH)

        Label(frame, borderwidth=1, relief=RAISED).pack(fill=X)
        sb = Scrollbar(frame,orient=VERTICAL, command=self._scroll)
        sb.pack(side=LEFT, fill=Y)
        self.lists[0]["yscrollcommand"] = sb.set

    def _select(self, y):
        row = self.lists[0].nearest(y)
        self.selection_clear(0, END)
        self.selection_set(row)
        return "break"

    def _button2(self, x, y):
        for l in self.lists:
            l.scan_mark(x,y)
        return "break"

    def _b2motion(self, x, y):
        for l in self.lists:
            l.scan_dragto(x, y)
        return "break"

    def _scroll(self, *args):
        for l in self.lists:
            apply(l.yview, args)
        return "break"

    def curselection(self):
        return self.lists[0].curselection()

    def delete(self, first, last=None):
        for l in self.lists:
            l.delete(first,last)

    def get(self, first, last=None):
        result = []
        for l in self.lists:
            result.append(l.get(first,last))
        if last:
            return apply(map, [None] + result)
        return result

    def index(self, index):
        self.lists[0],index(index)

    def insert(self, index, *elements):
        for e in elements:
            i = 0
            for l in self.lists:
                l.insert(index, e[i])
                i = i + 1

    def size(self):
        return self.lists[0].size()

    def see(self, index):
        for l in self.lists:
            l.see(index)

    def selection_anchor(self, index):
        for l in self.lists:
            l.selection_anchor(index)

    def selection_clear(self, first, last=None):
        for l in self.lists:
            l.selection_clear(first,last)

    def selection_includes(self, index):
        return self.lists[0].seleciton_includes(index)

    def selection_set(self, first, last=None):
        for l in self.lists:
            l.selection_set(first, last)

```


测试运行的代码  

```python
if __name__ == "__main__":
    tk = Tk()
    Label(tk, text="MultiListbox").pack()
    mlb = MultiListbox(tk,(('ID', 10),('Name', 20),("Date", 10)))
    for i in range(100):
        mlb.insert(END,('Important Message: %d' % i,'John Doe', '10/10/%4d' % (1900+i)))
    mlb.pack(expand=YES, fill=BOTH)
    # 指定控件的位置与大小
    # mlb.place(x=1,y=100,width=500,height=150)
    tk.mainloop()
```

代码还存在些许需要改进的地方，`TODO` 。