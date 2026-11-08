# SHEET 12: FUNDAMENTAL THEOREMS OF CALCULUS, INVERSE FUNCTIONS

**Lemma 12.1.** Let $f: [a,b] \longrightarrow \mathbb{R}$ be continuous at $p \in (a,b)$. Define functions $m$ and $M$ by

$$
m(h) = \inf \{ f(x) \mid p \leq x \leq p + h \}, \quad M(h) = \sup \{ f(x) \mid p \leq x \leq p + h \} \text{ for } h > 0,
$$
and similarly for $h < 0$ with $p + h \leq x \leq p$. Then $\lim_{h \to 0} m(h) = f(p)$ and $\lim_{h \to 0} M(h) = f(p)$.

**Theorem 12.2 (The First Fundamental Theorem of Calculus).** Suppose that $f$ is integrable on $[a,b]$. Define $F: [a,b] \longrightarrow \mathbb{R}$ by

$$
F(x) = \int_a^x f.
$$

If $f$ is continuous at $p \in (a,b)$, then $F$ is differentiable at $p$ and

$$
F'(p) = f(p).
$$

**Lemma 12.3.** Suppose that $f: [a,b] \longrightarrow \mathbb{R}$ is integrable and that $I$ is a number satisfying

$$
L(f,P) \leq I \leq U(f,P) \quad \text{for every partition } P \text{ of } [a,b].
$$

Then

$$
\int_a^b f = I.
$$

**Theorem 12.4 (The Second Fundamental Theorem of Calculus).** Suppose that $f$ is integrable on $[a,b]$ and that $f = F'$ on $(a,b)$ for some function $F$. Then:

$$
\int_a^b f = F(b) - F(a).
$$

~={red}By Corollary 10.36  The Mean Value Theorem,=~

**Corollary 12.5 (Integration by Parts).** Let $f: [a,b] \longrightarrow \mathbb{R}$ and $g: [a,b] \longrightarrow \mathbb{R}$ be continuous, and suppose that $g$ is continuously differentiable on $(a,b)$. Suppose there exists $F: [a,b] \longrightarrow \mathbb{R}$ such that $F$ is differentiable on $(a,b)$ and that $F' = f$ on $(a,b)$. Then:

$$
\int_a^b f(x) \cdot g(x) \, dx = \big[ F(b)g(b) - F(a)g(a) \big] - \int_a^b F(x) \cdot g'(x) \, dx.
$$

Theorem 11.26

**Theorem 12.6 (Change of Variables).** Let $g: [a,b] \to \mathbb{R}$ be integrable on $[a,b]$ and differentiable on $(a,b)$, and suppose that $g'$ is continuous on $(a,b)$. Suppose that $[c,d]$ is a closed interval such that $g([a,b]) \subset [c,d]$, and that $f: [c,d] \to \mathbb{R}$ is a continuous function. Suppose further that there exists a function $F: [c,d] \to \mathbb{R}$ that is differentiable on $(c,d)$ and such that $F' = f$ on $(c,d)$. Then:

$$
\int_a^b f(g(x)) \cdot g'(x) \, dx = F(g(b)) - F(g(a)).
$$

By Theorem 10.30

Now, we prove another very important theorem that tells us about inverse functions and their derivatives. To get there we will need a few lemmas.

**Definition 12.7.** Let $A \subset \mathbb{R}$, and let $f: A \to \mathbb{R}$ be a function. We say that $f$ is **strictly increasing** on $A$ if, for $x, y \in A$, if $x < y$, then $f(x) < f(y)$. Similarly, we say that $f$ is **strictly decreasing** on $A$ if, for $x, y \in A$, if $x < y$, then $f(x) > f(y)$.

**Exercise 12.8.** Show that if $f$ is strictly increasing or strictly decreasing on an interval, then $f$ is injective.

**Lemma 12.9.** If $f: (a,b) \to \mathbb{R}$ is continuous and injective, then $f$ is either strictly increasing or strictly decreasing on $(a,b)$.

Theorem 5.4

**Theorem 12.10.** If $f: (a,b) \to \mathbb{R}$ is continuous and injective, then there exists a function $g: f(a,b) \to (a,b)$ such that $g(f(x)) = x$ for all $x \in (a,b)$ and $g$ is continuous.

We call the function $g$ from Theorem 12.10 the **inverse function** of $f$ and we denote it by $f^{-1}$.

**Lemma 12.11.** If $f: (a,b) \to \mathbb{R}$ is differentiable and $f'(x) > 0$ for all $x \in (a,b)$, then $f$ is strictly increasing on $(a,b)$. Similarly, if $f$ is differentiable on $(a,b)$ and $f'(x) < 0$ for all $x \in (a,b)$, then $f$ is strictly decreasing on $(a,b)$.

**Lemma 12.12.** If $f: (a,b) \to \mathbb{R}$ is continuous and $f(c) > 0$ for some $c \in (a,b)$, then there exists a region $R \subset (a,b)$ such that $c \in R$ and $f(x) > 0$ for all $x \in R$. The analogous statement is true if $f(c) < 0$.

**Theorem 12.13 (The Inverse Function Theorem).** Suppose that $f: (a,b) \to \mathbb{R}$ is differentiable and that the derivative $f': (a,b) \to \mathbb{R}$ is continuous. Also suppose that there is a point $p \in (a,b)$ such that $f'(p) \neq 0$. Then there exists a region $R \subset (a,b)$ such that $p \in R$ and $f$ with domain restricted to $R$ is injective. Furthermore, $f^{-1}: f(R) \to R$ is differentiable at the point $f(p)$ and

$$
(f^{-1})'(f(p)) = \frac{1}{f'(p)}.
$$

**Exercise 12.14.** Consider the function $f(x) = x^n$ for a fixed $n \in \mathbb{N}$. If $n$ is even, then $f$ is strictly increasing on the set of non-negative real numbers. If $n$ is odd, then $f$ is strictly increasing on all of $\mathbb{R}$. For a given $n$, let $A$ be the aforementioned set on which $f$ is strictly increasing. Define the inverse function $f^{-1}: f(A) \to A$ by $f^{-1}(x) = \sqrt[n]{x}$, which we sometimes also denote $f^{-1}(x) = x^{1/n}$. Use the Inverse Function Theorem to find the points $y \in f(A)$ at which $f^{-1}$ is differentiable, and determine $(f^{-1})'(y)$ at these points.