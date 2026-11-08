# SHEET 10: LIMITS AND DERIVATIVES OF FUNCTIONS

Throughout this sheet, we let $f: A \longrightarrow \mathbb{R}$ be a real valued function with domain $A \subset \mathbb{R}$.

**Remark 10.0.** Theorem 9.21 holds for a function $f: A \longrightarrow \mathbb{R}$ if we change "$p \in \mathbb{R}$" to "$p \in A$" and "$(p - \delta, p + \delta)$" to "$A \cap (p - \delta, p + \delta)$". Similarly, Theorem 9.24 and Definition 9.25 hold for $f: A \longrightarrow \mathbb{R}$ so long as we take $p \in A$ and change the condition "if $|x - p| < \delta$" to "if $x \in A$ and $|x - p| < \delta$".

**Definition 10.1.** Let $a \in \mathbb{R}$ such that there exists a region $R$ containing $a$ with $R \setminus \{a\} \subset A$. The **limit** of $f$ at a point $a \in \mathbb{R}$ is a number $L \in \mathbb{R}$ satisfying the following condition: for every $\epsilon > 0$, there exists a $\delta > 0$ such that

$$
\text{if } x \in A \text{ and } 0 < |x - a| < \delta, \quad \text{then } |f(x) - L| < \epsilon.
$$

If the limit $L$ of $f$ at $a$ exists, we write this as:

$$
\lim_{x \to a} f(x) = L.
$$

More generally, we can extend the above definition to any $a \in \mathbb{R}$ such that $a$ is a limit point of $A$. In this case, the fact that $a$ is a limit point guarantees that for all $\delta > 0$ there exists an $x$ such that $x \in A$ and $0 < |x - a| < \delta$. So the "if" part of the statement is never vacuous.

**Proposition 10.2.** Limits are unique: if $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} f(x) = L'$, then $L = L'$.

集合不相交（还原回region的形式，借鉴数列极限unique的证明（连续的数列）/当...时，有...

**Exercise 10.3.** Give an example of a set $A \subset \mathbb{R}$, a function $f: A \longrightarrow \mathbb{R}$, and a point $a$ (such that there exists a region $R$ with $R \setminus \{a\} \subset A$) such that $\lim_{x \to a} f(x)$ does not exist.

**Theorem 10.4.** A function $f$ is continuous at $a$ if and only if:

$$
\lim_{x \to a} f(x) = f(a).
$$

**Exercise 10.5.** (i) For every $c \in \mathbb{R}$, the constant function $f: \mathbb{R} \to \mathbb{R}$, defined by $f(x) = c$ for all $x \in \mathbb{R}$, is continuous.  
(ii) The identity function, defined by $g(x) = x$, is continuous.

The following lemma is very useful in proofs involving inequalities. (Hint: the second inequality follows from the first.)

**Lemma 10.6.** For any real numbers $x$ and $y$, we have:

$$
\text{The Triangle Inequality: } |x + y| \leq |x| + |y|,
$$
$$
\text{The Reverse Triangle Inequality: } \big||x| - |y|\big| \leq |x - y|.
$$

**Exercise 10.7.** Show that the absolute value function $f: \mathbb{R} \to \mathbb{R}$, $f(x) = |x|$, is continuous.

Given real-valued functions $f$ and $g$, we define new functions $f + g$, $fg$ and $\frac{1}{f}$ by:

$$
(f + g)(x) = f(x) + g(x), \qquad
(fg)(x) = f(x) \cdot g(x), \qquad
\frac{1}{f}(x) = \frac{1}{f(x)}, \text{ provided that } f(x) \neq 0.
$$

We wish to understand the limits of $f + g$, $fg$ and $\frac{1}{f}$ in terms of the limits of $f$ and $g$.

**Lemma 10.8.** If $|x - x_0| < \frac{\epsilon}{2}$ and $|y - y_0| < \frac{\epsilon}{2}$, then $|(x + y) - (x_0 + y_0)| < \epsilon$.

**Theorem 10.9.** Suppose that $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$. Then:

$$
\lim_{x \to a} (f + g)(x) = L + M.
$$

**Lemma 10.10.** If

$$
|x - x_0| < \min\!\left(1, \frac{\epsilon}{2(|y_0| + 1)}\right) \quad \text{and} \quad |y - y_0| < \frac{\epsilon}{2(|x_0| + 1)},
$$

then $|xy - x_0 y_0| < \epsilon$.

**Theorem 10.11.** Suppose that $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$. Then:

$$
\lim_{x \to a} (fg)(x) = L \cdot M.
$$

**Lemma 10.12.** If $x_0 \neq 0$ and

$$
|x - x_0| < \min\!\left(\frac{|x_0|}{2}, \frac{\epsilon |x_0|^2}{2}\right),
$$

then $x \neq 0$ and

$$
\left|\frac{1}{x} - \frac{1}{x_0}\right| < \epsilon.
$$

**Theorem 10.13.** Suppose that $\lim_{x \to a} f(x) = L \neq 0$. Then:

$$
\lim_{x \to a} \frac{1}{f}(x) = \frac{1}{L}.
$$

**Corollary 10.14.** If $f$ and $g$ are continuous at $a$, then $f + g$, $fg$ and $1/f$ are continuous at $a$ (the latter provided that $f(a) \neq 0$).

**Definition 10.15.** A **polynomial** in one variable with real coefficients is a function $f$ of the form

$$
f(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0
$$

for some $n \in \mathbb{N} \cup \{0\}$, where $a_i \in \mathbb{R}$ for $0 \leq i \leq n$. A **rational function** in one variable with real coefficients is a function of the form $h(x) = \frac{f(x)}{g(x)}$ where $f$ and $g$ are polynomials in one variable with real coefficients.

**Corollary 10.16.** Polynomials in one variable with real coefficients are continuous. A rational function in one variable with real coefficients $h(x) = \frac{f(x)}{g(x)}$ is continuous at all $a \in \mathbb{R}$ where $g(a) \neq 0$.

Now we want to look at limits of the composition of functions. It is not quite true in general that if $\lim_{x \to a} g(x) = M$ and $\lim_{y \to M} f(y) = L$, then $\lim_{x \to a} f(g(x)) = L$, but it is true in some cases.

**Proposition 10.17.** Let $a \in \mathbb{R}$. Then

$$
\lim_{x \to a} f(x) = \lim_{h \to 0} f(a + h),
$$

assuming that the limit on the left exists. (Hint: You can think of the right hand side as the composition of $f$ with the function $g(h) = a + h$.)

**Theorem 10.18.** If $\lim_{x \to a} g(x) = M$ and $f$ is continuous at $M$, then $\lim_{x \to a} f(g(x)) = f(M)$.

**Remark 10.19.** This theorem can also be rewritten as

$$
\lim_{x \to a} f(g(x)) = f\!\left(\lim_{x \to a} g(x)\right),
$$

which can be remembered as "limits pass through continuous functions."

**Corollary 10.20.** If $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then $f \circ g$ is continuous at $a$.

We now assume the domain $A \subset \mathbb{R}$ is open.

**Definition 10.21.** The **derivative** of $f$ at a point $a \in A$ is the number $f'(a)$ defined by the following limit:

$$
f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h},
$$

provided the limit on the right hand side exists. If $f'(a)$ exists, we say that $f$ is **differentiable** at $a$. If $f$ is differentiable at all points of its domain, we say that $f$ is **differentiable**. In this case, the values $f'(a)$ define a new function $f': A \longrightarrow \mathbb{R}$ called the derivative of $f$.

Here is a useful reformulation of the definition of the derivative.

**Theorem 10.22.** If $f$ is differentiable at $a$, the derivative of $f$ at $a$ is given by the limit:

$$
f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}.
$$

**Theorem 10.23.** If $f$ is differentiable at $a$, then $f$ is continuous at $a$.

**Exercise 10.24.** Show that the converse of Theorem 10.23 is not true in general.

**Exercise 10.25.** (i) Show that for all $n \in \mathbb{N}$,

$$
x^n - a^n = (x - a)(x^{n-1} + a x^{n-2} + a^2 x^{n-3} + \dots + a^{n-2} x + a^{n-1}),
$$

or more formally,

$$
x^n - a^n = (x - a)\left( \sum_{i=0}^{n-1} x^{n-1-i} a^i \right).
$$

(ii) Use this to prove that if $f(x) = x^n$ for some $n \in \mathbb{N}$, then $f'(a) = n a^{n-1}$.

**Exercise 10.26.** Suppose that $f$ and $g$ are differentiable at $a$.

(i) Compute $(f + g)'(a)$ in terms of $f'(a)$ and $g'(a)$.  
(ii) Compute $(fg)'(a)$ in terms of $f(a)$, $g(a)$, $f'(a)$ and $g'(a)$.  
(iii) Compute $\left(\frac{1}{f}\right)'(a)$ in terms of $f'(a)$ and $f(a)$.

These results are known as the Sum Rule, Product Rule, and (a special case of the) Quotient Rule for Derivatives, respectively.

**Exercise 10.27.** Suppose $f$ and $g$ are differentiable at $a$ and $g(a) \neq 0$.

(i) Show that $\frac{f(x)}{g(x)}$ is continuous at $a$.  
(ii) Show that $\frac{f(x)}{g(x)}$ is differentiable at $a$, and compute $\left(\frac{f}{g}\right)'(a)$ in terms of $f(a)$, $g(a)$, $f'(a)$ and $g'(a)$.

This last result is known as the Quotient Rule for Derivatives.

One of the most important results concerning the differentiation of functions is the Chain Rule for the derivative of a composition of functions. Let $f: B \to \mathbb{R}$, $g: A \to \mathbb{R}$ be functions such that $g(A) \subset B$. Thus, the composition $(f \circ g)(x) = f(g(x))$ is defined for all $x \in A$.

**Lemma 10.28.** Given $f$ and $g$ as above, define a new function $\phi: B \to \mathbb{R}$ (note that the domain is the same as the domain of $f$) by

$$
\phi(y) = \begin{cases}
\frac{f(y) - f(g(a))}{y - g(a)}, & y \neq g(a), \\
f'(g(a)), & y = g(a).
\end{cases}
$$

Then $\phi$ is continuous at the point $g(a)$.

**Lemma 10.29.** With $f$ and $g$ as above,

$$
\lim_{x \to a} \frac{f(g(x)) - f(g(a))}{g(x) - g(a)} = f'(g(a)).
$$

(Hint: Consider the function $\phi \circ g$ and distinguish between the two cases when $g(x) \neq g(a)$ and when $g(x) = g(a)$.)

**Theorem 10.30 (Chain Rule).** Let $a \in A$, suppose that $g$ is differentiable at $a$ and $f$ is differentiable at $g(a)$. Then $f \circ g$ is differentiable at $a$ and:

$$
(f \circ g)'(a) = f'(g(a)) \cdot g'(a).
$$

We finish this sheet with a discussion of maxima and minima of real-valued functions and the most important theorem in differential Calculus, the Mean Value Theorem.

**Definition 10.31.** Let $f: A \longrightarrow \mathbb{R}$ be a function. If $f(a)$ is the last point of $f(A)$, then $f(a)$ is called the **maximum value** of $f$. If $f(a)$ is the first point of $f(A)$, then $f(a)$ is the **minimum value** of $f$. We say that $f(a)$ is a **local maximum value** of $f$ if there exists a region $R$ containing $a$ such that $f(a)$ is the last point of $f(A \cap R)$. We say that $f(a)$ is a **local minimum value** of $f$ if there exists a region $R$ containing $a$ such that $f(a)$ is the first point of $f(A \cap R)$.

**Remark 10.32.** Equivalently, $f(a)$ is a local maximum (resp. minimum) value of $f$ if there exists $U$ open in $A$ such that $f(a)$ is the last (resp. first) point of $f(U)$.

**Theorem 10.33.** Let $f: A \longrightarrow \mathbb{R}$ be differentiable at $a$. Suppose that $f(a)$ is the maximum value or minimum value of $f$. Then $f'(a) = 0$.

**Corollary 10.34.** Let $f: A \longrightarrow \mathbb{R}$ be differentiable at $a$. Suppose that $f(a)$ is a local maximum or local minimum value of $f$. Then $f'(a) = 0$.

**Theorem 10.35 (Rolle's Theorem).** Suppose that $f: [a,b] \longrightarrow \mathbb{R}$ is continuous, differentiable on $(a,b)$ and that $f(a) = f(b) = 0$. Then there exists a point $c \in (a,b)$ such that $f'(c) = 0$.

By Corollary 5.13 Extreme Value Theorem.

**Corollary 10.36 (The Mean Value Theorem).** Suppose that $f: [a,b] \longrightarrow \mathbb{R}$ is continuous and differentiable on $(a,b)$. Then there exists a point $c \in (a,b)$ such that:

$$
f(b) - f(a) = f'(c)(b - a).
$$