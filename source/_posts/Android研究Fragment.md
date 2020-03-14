---
title: Android研究Fragment
author: Tamsiree
date: 2020-03-05 14:56:50
description:
tags:
categories:
cover:
---
# 前言
这里是前言介绍。

# 正文
这里是讲述正文。

# 问题归纳

## Could not find Fragment constructor
本次排查Bug的fragment基于AndroidX1.1.0
线上bugly报了一个Could not find Fragment constructor，先看一下Fragment的构造函数

```java
/**
     * Constructor used by the default {@link FragmentFactory}. You must
     * {@link FragmentManager#setFragmentFactory(FragmentFactory) set a custom FragmentFactory}
     * if you want to use a non-default constructor to ensure that your constructor
     * is called when the fragment is re-instantiated.
     *
     * <p>It is strongly recommended to supply arguments with {@link #setArguments}
     * and later retrieved by the Fragment with {@link #getArguments}. These arguments
     * are automatically saved and restored alongside the Fragment.
     *
     * <p>Applications should generally not implement a constructor. Prefer
     * {@link #onAttach(Context)} instead. It is the first place application code can run where
     * the fragment is ready to be used - the point where the fragment is actually associated with
     * its context. Some applications may also want to implement {@link #onInflate} to retrieve
     * attributes from a layout resource, although note this happens when the fragment is attached.
     */
    public Fragment() {
        initLifecycle();
    }
```

主要看一下注释说明，如果你想要的使用非默认的构造函数，需要自己实现一个FragmentFactory去初始化，然后强烈推荐使用setArguments和getArguments存取参数。看了一下报错的类，可以基本确定是使用了带参数的构造函数

然后看一下报错的位置，在Fragment里搜索could not find Fragment constructor

```java
public static Fragment instantiate(@NonNull Context context, @NonNull String fname,
            @Nullable Bundle args) {
        try {
            Class<? extends Fragment> clazz = FragmentFactory.loadFragmentClass(
                    context.getClassLoader(), fname);
            Fragment f = clazz.getConstructor().newInstance();
            if (args != null) {
                args.setClassLoader(f.getClass().getClassLoader());
                f.setArguments(args);
            }
            return f;
        } catch (java.lang.InstantiationException e) {
            throw new InstantiationException("Unable to instantiate fragment " + fname
                    + ": make sure class name exists, is public, and has an"
                    + " empty constructor that is public", e);
        } catch (IllegalAccessException e) {
            throw new InstantiationException("Unable to instantiate fragment " + fname
                    + ": make sure class name exists, is public, and has an"
                    + " empty constructor that is public", e);
        } catch (NoSuchMethodException e) {
            throw new InstantiationException("Unable to instantiate fragment " + fname
                    + ": could not find Fragment constructor", e);
        } catch (InvocationTargetException e) {
            throw new InstantiationException("Unable to instantiate fragment " + fname
                    + ": calling Fragment constructor caused an exception", e);
        }
    }
```

可以看到这里通过反射，调用了空的构造函数

```java
Fragment f = clazz.getConstructor().newInstance();
```

但是对应的类没有空的构造函数，所以抛出了这个异常。然后看一下初始的地方，是FragmentActivity在onCreate中调用的mFragments.restoreSaveState(p);

解决方案：
Fragment必须有一个无参public的构造函数，否则在数据恢复的时候，会报crash  
ps：手动测试发现私有的构造函数无法通过该Constructor.newInstance方法调用




---
> to be continued...
