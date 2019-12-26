---
title: MathJax 引擎数学符号说明
date: 2019-10-08 23:38:47
tags:
  - Research
  - Math
  - MathJax
categories:
  - Research
  - Math
  - MathJax
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/longsahidsa.jpeg
---
# 关于 MathJax

> 使用 MathJax 渲染 `LaTex` 数学公式，详见 [math.stackexchange.com](http://math.stackexchange.com/)，在 Markdown 中输入数学公式需要 `LaTeX` 语法的支持。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/wallhaven-0wy2z7.jpg)

_例如:_

* 行内公式，数学公式为：$\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$
* 块级公式：
$$x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

更多LaTex语法请参考 [这里](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).

# 基本语法
## 公式出现的位置

* 正文行内的 `LaTex` 公式或符号使用 `$...$` 表示

    　例如：`\$X\$` ，显示为　$X$

* 单独成行显示的 `LaTeX` 公式或符号用 `\$\$...\$\$` 定义，此时公式或符号居中并放大显示  
    　例如:`\$\$ x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \$\$` ,显示为

$$ x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

## 常见的希腊字母

**若不是特别说明,默认使用行内符号，即用 `\$...\$` 显示**

|  序号  |  大写  |  小写  |  LaTex 代码  |  汉语注音  |
| :-------: | ------------- | ------------- | ------------- | ------------- |
| 1 | A| α| \\alpha     | 阿尔法    |
| 2 | B| β| \\beta      | 贝塔      |
| 3 | Γ| γ| \\gamma     | 伽马      | 
| 4 | Δ| δ| \\delta     | 德尔塔    | 
| 5 | E| ϵ| \\epsilon   | 伊普西隆   |
| 6 | Z| ζ| \\zeta      | 泽塔|
| 7 | H| η| \\eta       | 伊塔|
| 8 | Θ| θ| \\theta     | 西塔|
| 9 | I| ι| \\iot       | 约塔|
| 10| K| κ| \\kappa     | 卡帕|
| 11| Λ| λ| \\lambda    | 兰姆达|
| 12| M| μ| \\mu        | 缪|
| 13| N| ν| \\nu        | 纽|
| 14| X| ξ| \\xi        | 克西|
| 15| O| ο| \\omicron   | 欧米克隆|
| 16| P| π| \\pi        | 派|
| 17| R| ρ| \\rho       | 柔|
| 18| Σ| σ| \\sigma     | 西格玛|
| 19| T| τ| \\tau       | 陶|
| 20| Υ| υ| \\upsilon   | 宇普西隆|
| 21| Φ| ϕ| \\phi       | 弗爱|
| 22| X| χ| \\chi       | 卡|
| 23| Ψ| ψ| \\psi       | 普赛|
| 24| Ω| ω| \\omega     | 欧米伽|

| 斜体|  大写  |  小写  |  LaTex 代码  |  汉语注音  |
| :-------: | ------------- | ------------- | ------------- | ------------- |  
| | E      | ε      | \\varepsilon| 伊普西隆
| |K      | ϰ       | \\varkappa| 卡帕
| |Θ      | ϑ      | \\vartheta| 西塔
| |P      | ϖ      | \\varpi| 派
| |R      | ϱ      | \\varrho| 柔
| |Σ      | ς      | \\varsigma| 西格玛
| |Φ      | φ      | \\varphi| 弗爱|  

**Note:**关于希腊字母格式

* 大写希腊字母，首字母大写  
    　例如，`$\Gamma$` ,显示为 $\Gamma$
* 斜体希腊字母，加上 `var` 前缀  
    　例如，`$\varGamma$` ，显示为 $\varGamma$

## 数学字母修饰

**1\. 上下标表示**

* 上标：`^`  
    例如：`$X^2$` ，显示 $X^2$

* 下标: `_`  
    例如：`$log_24$` ，显示为 $log_24$

* 上划线  
    例如：`$\overline{X}$` ，显示 $\overline{X}$
* 下划线  
    例如：`$\underline{X}$` ，显示 $\underline{X}$

**2\. 矢量表示以及重音符号、变音符表示**

* 向量 `vec`  
    例如：   
    `$\vec a$` ,显示 $\vec a$ ;
    `$\overrightarrow{xy}$`，显示 $\overrightarrow{xy}$；`$\overleftrightarrow{xy}$` 显示 $\overleftrightarrow{xy}$
* 重音符:`\hat`  
    例如：`$\hat x$` 显示为 $\hat x$
* 变音符:`widehat`  
    例如:`$\widehat {xy}$` 显示为 $\widehat {xy}$
* 逻辑表示 `Not`:`\bar`  
    例如: `$\bar xyz$` 显示为 $\bar xyz$

**3\. 字体**

* 打印机字体（Typewriter）：`$\mathtt{A}$`，显示 $\mathtt{A}$
* 黑体（Blackboard Bold）：`$\mathbb{A}$` ，显示为 $\mathbb{A}$
* 无衬线体（Sans Serif）：`$\mathsf{A}$` ，显示为 $\mathsf{A}$
* boldface 字体:`$\mathbf{A}$`，显示为 $\mathbf{A}$
* roman 字体：`$\mathrm{A}$`，显示为 $\mathrm{A}$
* calligraphic 字体:`$\mathcal{A}$` ，显示为 $\mathcal{A}$
* script 字体：`$\mathscr{A}$`，显示为 $\mathscr{A}$
* Fraktur 字体：`$\mathfrak{A}$`，显示为 $\mathfrak{A}$

**4.字母组合**

* 使用 `{}` 将相同等级的内容扩入其中，成组处理  
    例如： `$10^{10}$` ,表示 $10^{10}$ ；  
    如果 `$10^10$` ,显示 $10^10$
    
* 组合数：`${n+1 \choose 2k}$` 或 `$\binom{n+1}{2k}$`，显示为 ${n+1 \choose 2k}$
    

**5.括号**

* 小括号：`$()$` 显示为 $()$
* 中括号：`$[]$` 显示为 $[]$
* 大括号：`$\{\}$` 显示为 $\{\}$
* 尖括号：`$\langle \rangle$` 显示为 $\langle \rangle$

**注意几点：**

* 大括号 \\{\\}\\{\\} 与分组符号 `{}` 的区别，表示大括号使用转义字符 `\`　
* 使用 `\left(` 或 `\right)` 使符号大小与邻近的公式相适应；该语句适用于所有括号类型  
    例如：`$(\frac{x}{y})$` 显示为 $(\frac{x}{y})$ ，   
    而 `$\left(\frac{x}{y}\right)$` 显示为 $\left(\frac{x}{y}\right)$

**6.求和、积分、取模以及求极限**

| 名称 |显示|Latex式|例子|例子Latex式|
| --- | :---: | --- | --- | --- |
| 求和 | $\sum$ | \\sum | $\sum_{i=1}^n{a_i}$ | `$\sum_{i=1}^n{a_i}$` |
| 累乘 | $\prod$ | \\prod | $\prod_{i=1}^{n}{f(x)}$ | `$\prod_{i=1}^{n}{f(x)}$` |
| 极限 | $\lim$ | \\lim | $\lim_{x\to 0}lnx$ | `$\lim_{x\to 0}lnx$` |
| 积分 | $\int$ | \\int | $\int_{0}^{\infty}{f(x)dx}$ | `$\int_{0}^{\infty}{f(x)dx}$` |
| 二重积分 | $\iint$ | \\iint | $\iint_{0}^{\infty}{f(x)dx}$ | `$\iint_{0}^{\infty}{f(x)dx}$` |
| 三重积分 | $\iiint$ | \\iiint | $\iiint_{0}^{\infty}{f(x)dx}$ | `$\iiint_{0}^{\infty}{f(x)dx}$` |
| 四重积分 | $\iiiint$ | \\iiiint | $\iiiint_{0}^{\infty}{f(x)dx}$ | `$\iiiint_{0}^{\infty}{f(x)dx}$` |
| 曲线积分 | $\oint$ | \\oint | $\oint{fds}$ | `$\oint{fds}$` |
| 取模 | $b \pmod n$ | b \\pmod n | $a \equiv b \pmod n$ | `$a \equiv b \pmod n$` |

**7\. 分式与根式**

* 分式(fractions)：`\frac`  
    例如：`$\frac{a}{b}$` 显示为 $\frac{a}{b}$
* 根式：`\sqrt`  
    例如: `$\sqrt[x]{y}$` 显示为 $\sqrt[x]{y}$

## 基本函数

* `数学函数名简称`  
    　例如：`$sinx$` ，显示为 $sinx$

**9.特殊符号**

| 显示 | Latex 式  |  
| :-------: | ------------- |  
| $\infty$| \\infty
| $\cup$| \\cup
| $\cap$| \\cap
| $\subset$| \\subset
| $\subseteq$| \\subseteq
| $\supset$| \\supset
| $\in$| \\in
| $\notin$| \\notin
| $\varnothing$| \\varnothing
| $\forall$| \\forall
| $\exists$| \\exists
| $\lnot$| \\lnot
| $\nabla$| \\nabla
| $\partial$| \\partial
| $\gt$| \\gt
| $\lt$| \\lt
| $\ge$| \\ge
| $\le$| \\le
| $\neq$| \\neq
| $\not\lt$| \\not\\lt
| $\setminus$| \\setminus
| $\subsetneq$| \\subsetneq
| $\star$| \\star
| $\ast$| \\ast
| $\oplus$| \\oplus
| $\circ$| \\circ
| $\bullet$| \\bullet
| $\to$| \\to
| $\rightarrow$| \\rightarrow
| $\leftarrow$| \\leftarrow
| $\Rightarrow$| \\Rightarrow
| $\Leftarrow$| \\Leftarrow
| $\mapsto$| \\mapsto
| $\approx$| \\approx
| $\sim$ | \\sim
| $\simeq$ | \\simeq
| $\cong$| \\cong
| $\equiv$ | \\equiv
| $\prec$ | \\prec|  
| $\lhd$ | \\lhd|  
| $y\prime$ | y\\prime |
| $\pm$ | \\pm |
| $\mp$ | \\mp |

## 空格

`Latex` 语法本身忽略空格的存在，空格用 `\`+`空格字符`

* 小空格 `$a\ b$` ，显示为 $a\ b$
* 四字格： `$a\quad b$` ，显示为 $a\quad b$

## 矩阵

基本说明

* 起始标记：`\begin{matrix}` ；结束标记：`\end{matrix}`
* 每一行以 `\\` 结尾，行间元素以 `&` 隔开  
    例如：
```
$$\\begin{matrix}  
1&0&0&1&1\\  
0&1&0&0&1\\  
1&1&0&1&1\\  
0&1&0&1&1\\  
\end{matrix}$$
```

显示为

\$\$\\begin{matrix}  
1&0&0&1&1\\\\  
0&1&0&0&1\\\\  
1&1&0&1&1\\\\  
0&1&0&1&1\\\\  
\\end{matrix}\$\$

> **Note:**一般情况下可用 `\` 来作转义，但如果想要表示 `\` 本身，需要用 `$\backslash$`，因为`\\` 表示换行。

## 矩阵边框

在起始、结束标记处用下列词替换 `matrix`

* pmatrix：小括号边框 ,例如 $\begin{pmatrix} \ \ \ \  \end{pmatrix}$
* bmatrix：中括号边框, 例如 $\begin{bmatrix} \ \ \ \ \end{bmatrix}$
* Bmatrix：大括号边框, 例如 $\begin{Bmatrix} \ \ \ \ \end{Bmatrix}$
* vmatrix：单竖线边框, 例如 $\begin{vmatrix} \ \ \ \ \end{vmatrix}$
* Vmatrix：双竖线边框, 例如 $\begin{Vmatrix} \ \ \ \ \end{Vmatrix}$

## 省略号表示

* 横省略号：`\cdots`,例如 $\cdots$
* 竖省略号：`\vdots`,例如 $\vdots$
* 斜省略号：`\ddots`,例如 $\ddots$

_实例_
```
    $$\begin{bmatrix}
    {a_{11}}&{a_{12}}&{\cdots}&{a_{1n}}\\
    {a_{21}}&{a_{22}}&{\cdots}&{a_{2n}}\\
    {\vdots}&{\vdots}&{\cdots}&{\vdots}\\
    {a_{m1}}&{a_{m2}}&{\cdots}&{a_{mn}}\\
    \end{bmatrix}$$
```
显示  

\$\$\\begin{bmatrix} 
{a\_{11}}&{a\_{12}}&{\\cdots}&{a\_{1n}}\\\\ 
{a\_{21}}&{a\_{22}}&{\\cdots}&{a\_{2n}}\\\\ 
{\\vdots}&{\\vdots}&{\\cdots}&{\\vdots}\\\\ 
{a\_{m1}}&{a\_{m2}}&{\\cdots}&{a\_{mn}}\\\\ 
\\end{bmatrix}\$\$

## 阵列

* 需要 array 环境：起始、结束处以 `{array}` 声明
* 对齐方式：在 `{array}` 后以 `{}` 逐行统一声明  
    * 左对齐：`l`；居中：`c`；右对齐：`r`
    * 竖直线：在声明对齐方式时，插入 `|` 建立竖直线
* 插入水平线：`\hline`

_例如_
```
    $$\begin{array}{c|lll}
    {↓}&{a}&{b}&{c}\\
    \hline
    {R_1}&{c}&{b}&{a}\\
    {R_2}&{b}&{c}&{c}\\
    \end{array}$$
```

显示为

\$\$\\begin{array}{c|lll}
{↓\\\\}&{a}&{b}&{c}\\\\
\\hline
{R_1}&{c}&{b}&{a}\\\\
{R_2}&{b}&{c}&{c}\\\\
\\end{array}\$\$

## 方程组

需要 `cases` 环境：起始、结束处以 `{cases}` 声明  
_例如_
```
    $$\begin{cases}
    a_1x+b_1y+c_1z=d_1\\
    a_2x+b_2y+c_2z=d_2\\
    a_3x+b_3y+c_3z=d_3\\
    \end{cases}$$
```

显示为

\$\$\\begin{cases}  
a\_1x+b\_1y+c\_1z=d\_1\\\\  
a\_2x+b\_2y+c\_2z=d\_2\\\\  
a\_3x+b\_3y+c\_3z=d\_3\\\\
\\end{cases}\$\$  


---
> to be continued...