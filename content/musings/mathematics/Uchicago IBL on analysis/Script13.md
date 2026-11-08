# SHEET 13: SERIES

In this sheet we use many results about limits of sequences, though we will not prove each of them explicitly. We remark that most theorems about limits of functions have completely analogous statements for limits of sequences (and exactly the same proofs). Specifically, recall that increasing sequences that are bounded above converge, as do decreasing sequences that are bounded below.

**Definition 13.1.** An **infinite series** (or, simply, a **series**) is a sequence $(a_n)$ of real numbers that we intend to sum, if possible, and thus write as:

$$
\sum_{n=1}^{\infty} a_n.
$$

We may start the series at $n = 0$ or at any other point after which $a_n$ is defined. We define the sequence of **partial sums** $(p_n)$ of the series by:

$$
p_n = a_1 + \dots + a_n = \sum_{i=1}^{n} a_i.
$$

We say that the series **converges** if there exists $L \in \mathbb{R}$ such that $\lim_{n \to \infty} p_n = L$. When this is the case, we write this as:

$$
\sum_{n=1}^{\infty} a_n = L,
$$

and we say that $L$ is the **sum** of the series. When there does not exist such an $L$, we say that the series **diverges**.

**Theorem 13.2.** If $\sum_{n=1}^{\infty} a_n = L$ and $\sum_{n=1}^{\infty} b_n = M$ and $c \in \mathbb{R}$, then

$$
\sum_{n=1}^{\infty} (a_n + b_n) = L + M, \qquad
\sum_{n=1}^{\infty} (c \cdot a_n) = c \cdot L.
$$

**Lemma 13.3.** Let $x \in \mathbb{R}$ with $|x| < 1$. Given the sequence $a_n = x^n$, we have $\lim_{n \to \infty} a_n = 0$.

**Theorem 13.4 (Geometric Series).** Let $-1 < x < 1$. Then:

$$
\sum_{n=1}^{\infty} x^n = \frac{x}{1 - x}.
$$

**Theorem 13.5.** If $\sum_{n=1}^{\infty} a_n$ converges, then $\lim_{n \to \infty} a_n = 0$.

The converse of this theorem is however not true, as we see from the next theorem.

**Theorem 13.6 (Harmonic Series).** The series $\sum_{n=1}^{\infty} \frac{1}{n}$ diverges.

**Definition 13.7.** We say that the series $\sum_{n=1}^{\infty} a_n$ **converges absolutely** if the series $\sum_{n=1}^{\infty} |a_n|$ converges.

**Theorem 13.8.** If a series converges absolutely, then it converges.

**Theorem 13.9 (Alternating Series Test).** Suppose that $(a_n)$ is a decreasing sequence of positive numbers and that $\lim_{n \to \infty} a_n = 0$. Then $\sum_{n=1}^{\infty} (-1)^{n+1} a_n$ converges.

The following theorem will be useful to prove more specialized tests for convergence of series:

**Theorem 13.10 (Comparison Test).** Suppose that $(c_n)$ is a sequence of positive numbers and that $(a_n)$ is a sequence such that $|a_n| \leq c_n$ for all $n > N_0$, where $N_0$ is some fixed integer. If $\sum_{n=1}^{\infty} c_n$ converges, then $\sum_{n=1}^{\infty} a_n$ converges.

**Theorem 13.11 (Ratio Test).** Let $(a_n)$ be a sequence such that each $a_n > 0$ and suppose that:

$$
\lim_{n \to \infty} \frac{a_{n+1}}{a_n} < 1.
$$

Then $\sum_{n=1}^{\infty} a_n$ converges.

~={pink}Proof:=~

~={pink}Suppose that $\lim_{ {n} \to {\infty} } \frac{a_{n+1}}{a_{n}}=L<\alpha<1$=~

~={pink}Then when $n\geq N_{0}$, $\frac{a_{N_{0}+1}}{a_{N_{0}}}<\alpha$. i.e. $a_{N_{0}+1}<\alpha a_{N_{0}}$=~
~={pink}In the same way, $a_{N_{0}+2}<\alpha a_{N_{0}+1}<\alpha^2a_{N_{0}}$=~
~={pink}Following this pattern, we have: $a_{N_{0}+k}<\alpha^ka_{N_{0}}$=~
~={pink}Let $\alpha^ka_{N_{0}}=x_{k}$, by Theorem 13.4, $a_{n}\sum_{k=1}^{\infty}x_{k}$ converges.=~
~={pink}By Theorem 13.10, $\sum_{N_{0}}^{\infty}a_{n}$ converges.=~
~={pink}Since $\sum_{n=1}^{\infty}a_{n}=\sum_{n=1}^{N_{0}}a_{n}+\sum_{n=N_{0}}^{\infty} a_{n}$, and $\sum_{n=1}^{N_{0}}a_{n}$ is a constant,  $\sum_{n=1}^{\infty} a_n$ converges..=~

~={cyan}What I learned: =~
~={cyan}- Find a $\alpha$ between $L$ and $1$, because $L$ cant be used because it's hard to explain $\epsilon\to0$ while if we use 1, we couldn't create a converged RHS.=~
~={cyan}- Ratio form implies creating geometric sequence.=~
~={cyan}- Constant+converged sequence=converged sequence=~


**Theorem 13.12 (Root Test).** Let $(a_n)$ be a sequence such that each $a_n > 0$ and suppose that:

$$
\lim_{n \to \infty} \sqrt[n]{a_n} < 1.
$$

Then $\sum_{n=1}^{\infty} a_n$ converges.

~={pink}Similar to the proof of Theorem 13.11, Suppose that $\lim_{ {n} \to {\infty}  }\sqrt[n]{ a_{n} }=L<\alpha<1.$=~
~={pink}Then when $n\ge N$, $\sqrt[n]{ a_{n} }<\alpha$ i.e. $a_{n}<\alpha^n$.=~
~={pink}In the same way with proof above, using Theorem 13.4 and 13.10, we could finally prove that $\sum_{n=1}^{\infty} a_n$ converges.=~

**Definition 13.13.** For $n \in \mathbb{N}$, we define the **factorial** of $n$ to be the product of all natural numbers less than or equal to $n$. We denote this by the formula:

$$
n! = n \cdot (n-1) \cdot (n-2) \cdots 3 \cdot 2 \cdot 1.
$$

By convention, we also set $0! = 1$.

**Exercise 13.14.** Prove that

$$
\sum_{n=0}^{\infty} \frac{1}{n!}
$$

converges. The number that it converges to is called $e$.

We will now turn to sequences and series of functions.

**Definition 13.15.** Let $A \subset \mathbb{R}$, and consider $X = \{ f: A \to \mathbb{R} \}$, the collection of real-valued functions on $A$. A **sequence of functions** (on $A$) is an ordered list $(f_1, f_2, f_3, \ldots)$ which we will denote $(f_n)$, where each $f_n \in X$. (More formally, we can think of the sequence as a function $F: \mathbb{N} \to X$, where $f_n = F(n)$ for each $n \in \mathbb{N}$, but this degree of formality is not particularly helpful.)

Remark that we can take the sequence to start at any $n_0 \in \mathbb{Z}$ and not just at 1, just like we did for sequences of real numbers.

**Definition 13.16.** The sequence $(f_n)$ **converges pointwise** to a function $f: A \longrightarrow \mathbb{R}$ if for all $p \in A$ and $\epsilon > 0$, there exists $N \in \mathbb{N}$ such that:

$$
\text{if } n > N, \text{ then } |f_n(p) - f(p)| < \epsilon.
$$

In other words, we have that for all $p \in A$, $\lim_{n \to \infty} f_n(p) = f(p)$.

**Definition 13.17.** The sequence $(f_n)$ **converges uniformly** to a function $f: A \longrightarrow \mathbb{R}$ if for all $\epsilon > 0$, there exists $N \in \mathbb{N}$ such that:

$$
\text{if } n > N, \text{ then } |f_n(p) - f(p)| < \epsilon \quad \text{for every } p \in A.
$$

~={orange}**Exercise 13.18.** For each $n \in \mathbb{N}$, let $f_n: [0,1] \longrightarrow \mathbb{R}$ be given by $f_n(x) = x^n$. Determine what function the sequence $(f_n)$ converges to pointwise. Does this sequence converge uniformly to this function?=~

$f(x)=\begin{cases}
x=0,&0=<x<1 \\x=1,&x=1
\end{cases}$

It does not converge uniformly to $f$. 

Proof:
Let $\epsilon=0.5$ and $p=1$, then 
**Theorem 13.19.** Let $(f_n)$ be a sequence of functions, and suppose that each $f_n: A \longrightarrow \mathbb{R}$ is continuous. If $(f_n)$ converges uniformly to $f: A \longrightarrow \mathbb{R}$, then $f$ is continuous.

**Theorem 13.20.** Suppose that $(f_n)$ is a sequence of integrable functions on $[a,b]$ and suppose that $(f_n)$ converges uniformly to $f: [a,b] \longrightarrow \mathbb{R}$. Then

$$
\int_a^b f = \lim_{n \to \infty} \int_a^b f_n.
$$

**Theorem 13.21.** Let $(f_n)$ be a sequence of functions on $[a,b]$ such that each $f_n$ is differentiable and $f_n'$ is integrable on $[a,b]$. Suppose further that $(f_n)$ converges pointwise to $f$ and that $(f_n')$ converges uniformly to a continuous function $g$. Then $f$ is differentiable and

$$
f'(x) = \lim_{n \to \infty} f_n'(x).
$$

**Definition 13.22.** We define **series of functions** the same way we defined series of numbers. That is, given a sequence $(f_n)$, define the sequence of partial sums $(p_n)$ by

$$
p_n(x) = f_1(x) + \dots + f_n(x)
$$

and say that $\sum_{n=1}^{\infty} f_n$ converges pointwise or converges uniformly to $f$ if the sequence $(p_n)$ does.

**Theorem 13.23 (Weierstrass $M$-test).** Suppose that $f_n: A \longrightarrow \mathbb{R}$ is a sequence of functions and that there exists a sequence of positive real numbers $(M_n)$ such that for all $x \in A$, we have $|f_n(x)| \leq M_n$. If $\sum_{n=1}^{\infty} M_n$ converges, then for each $x \in A$, the series of numbers $\sum_{n=1}^{\infty} f_n(x)$ converges absolutely. Furthermore, $\sum_{n=1}^{\infty} f_n$ converges uniformly to the function $f$ defined by:

$$
f(x) = \sum_{n=1}^{\infty} f_n(x).
$$

The previous theorem raises the question of what functions defined as series look like.

**Definition 13.24.** A function of the form

$$
f(x) = \sum_{n=0}^{\infty} c_n (x - a)^n, \qquad c_n \in \mathbb{R}
$$

is called a **power series**. The power series is **centered** at $a$ and the numbers $c_n$ are called the **coefficients**.

The next theorem gives a way to determine where a given power series is well-defined.

**Theorem 13.25.** Let

$$
f(x) = \sum_{n=0}^{\infty} c_n x^n
$$

be a power series centered at 0. Suppose that $x_0$ is a real number such that the series

$$
f(x_0) = \sum_{n=0}^{\infty} c_n x_0^n
$$

converges. Let $r$ be any number such that $0 < r < |x_0|$. Then the following series of functions converges uniformly on $[-r, r]$ (and absolutely for each $x \in [-r, r]$):

$$
f(x) = \sum_{n=0}^{\infty} c_n x^n.
$$

The same is true for

$$
g(x) = \sum_{n=1}^{\infty} n c_n x^{n-1}.
$$

Furthermore, $f$ is differentiable on $[-r, r]$ and $f' = g$.

Theorem 11.26
Exercise 10.25