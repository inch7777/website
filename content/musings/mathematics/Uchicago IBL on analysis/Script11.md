# SHEET 11: UNIFORM CONTINUITY, INTEGRATION

**Definition 11.1.** Let $f: A \longrightarrow \mathbb{R}$ be a function. We say that $f$ is **uniformly continuous** if for all $\epsilon > 0$, there exists a $\delta > 0$ such that for all $x, y \in A$,

$$
\text{if } |x - y| < \delta, \text{ then } |f(x) - f(y)| < \epsilon.
$$

By Definition 9.25


**Theorem 11.2.** If $f$ is uniformly continuous, then $f$ is continuous.

**Exercise 11.3.** Determine with proof whether the following functions $f$ are uniformly continuous on the given intervals $A$:

$$
\begin{aligned}
f(x) &= x^2 \text{ on } A = \mathbb{R}, \\
f(x) &= x^2 \text{ on } A = (-2,2), \\
f(x) &= \frac{1}{x} \text{ on } A = (0, +\infty), \\
f(x) &= \frac{1}{x} \text{ on } A = [1, +\infty), \\
f(x) &= \sqrt{x} \text{ on } A = [0, +\infty), \\
f(x) &= \sqrt{x} \text{ on } A = [1, +\infty).
\end{aligned}
$$

导数有最大值

**Exercise 11.4.** Let $p: \mathbb{R} \to \mathbb{R}$ be a polynomial with real coefficients. Show that $p$ is uniformly continuous on $\mathbb{R}$ if and only if $\deg(p) \leq 1$.

**Exercise 11.5.** Let $f$ and $g$ be uniformly continuous on $A \subset \mathbb{R}$. Show that:

1. The function $f + g$ is uniformly continuous on $A$.
2. For any constant $c \in \mathbb{R}$, the function $c \cdot f$ is uniformly continuous on $A$.

We will now prove that continuous functions with compact domain are automatically uniformly continuous. To this end, first consider:

**Lemma 11.6.** Let $f: A \longrightarrow \mathbb{R}$ be continuous. Fix $\epsilon > 0$. By the definition of continuity, for each $p \in A$ there exists $\delta(p) > 0$ such that for all $x \in A$,

$$
\text{if } |x - p| < \delta(p), \text{ then } |f(x) - f(p)| < \frac{\epsilon}{2}.
$$

For each $p \in A$, define $U(p) = \{ x \in \mathbb{R} \mid |x - p| < \frac{1}{2}\delta(p) \}$. Then the collection $\{U(p) \mid p \in A\}$ is an open cover of $A$.

**Theorem 11.7.** Suppose that $X \subset \mathbb{R}$ is compact and $f: X \longrightarrow \mathbb{R}$ is continuous. Then $f$ is uniformly continuous.

~={cyan}By Theorem 4.22, $X$ is bounded and closed=~
~={cyan}By Collary 5.13, if $X$ is bounded and closed, then $f(X)$ has first point and last point.=~

**Corollary 11.8.** Suppose that $f: [a,b] \longrightarrow \mathbb{R}$ is continuous. Then $f$ is uniformly continuous.

~={cyan}By Theorem 4.29. The set $[a,b]$ is compact.=~

**Definition 11.9.** We say that a function $f: A \to \mathbb{R}$ is **bounded** if $f(A)$ is a bounded subset of $\mathbb{R}$.

**Theorem 11.10.** Suppose that $X \subset \mathbb{R}$ is compact and $f: X \longrightarrow \mathbb{R}$ is continuous. Then $f$ is bounded.

**Exercise 11.11.** Show that if $f$ and $g$ are bounded on $A$ and uniformly continuous on $A$, then $fg$ is uniformly continuous on $A$.

We are now ready to turn to integration.

**Definition 11.12.** A **partition** of the interval $[a,b]$ is a finite set of points in $[a,b]$ that includes $a$ and $b$:

$$
a = t_0 < t_1 < \dots < t_{n-1} < t_n = b.
$$

If $P$ and $Q$ are partitions of the interval $[a,b]$ and $P \subset Q$, we refer to $Q$ as a **refinement** of $P$.

We usually write partitions as ordered lists $P = \{t_0, t_1, \ldots, t_n\}$ with $t_{i-1} < t_i$ for each $i = 1, \ldots, n$.

**Definition 11.13.** Suppose that $f: [a,b] \longrightarrow \mathbb{R}$ is bounded and that $P = \{t_0, t_1, \ldots, t_n\}$ is a partition of $[a,b]$. Define:

$$
m_i = \inf \{ f(x) \mid t_{i-1} < x < t_i \}, \qquad
M_i = \sup \{ f(x) \mid t_{i-1} < x < t_i \}.
$$

The **lower sum** of $f$ for the partition $P$ is the number:

$$
L(f,P) = \sum_{i=1}^{n} m_i (t_i - t_{i-1}).
$$

The **upper sum** of $f$ for the partition $P$ is the number:

$$
U(f,P) = \sum_{i=1}^{n} M_i (t_i - t_{i-1}).
$$

Notice that it is always the case that $L(f,P) \leq U(f,P)$.

**Lemma 11.14.** Suppose that $P$ and $Q$ are partitions of $[a,b]$ and that $Q$ is a refinement of $P$. Then:

$$
L(f,P) \leq L(f,Q) \quad \text{and} \quad U(f,P) \geq U(f,Q).
$$

**Theorem 11.15.** Let $P_1$ and $P_2$ be partitions of $[a,b]$ and suppose that $f: [a,b] \longrightarrow \mathbb{R}$ is bounded. Then:

$$
L(f,P_1) \leq U(f,P_2).
$$

**Definition 11.16.** Let $f: [a,b] \to \mathbb{R}$ be bounded. We define

$$
L(f) = \sup \{ L(f,P) \mid P \text{ a partition of } [a,b] \}, \qquad
U(f) = \inf \{ U(f,P) \mid P \text{ a partition of } [a,b] \},
$$

to be, respectively, the **lower integral** and **upper integral** of $f$ from $a$ to $b$.

**Exercise 11.17.** Why do $L(f)$ and $U(f)$ exist? Find a function $f$ for which $L(f) = U(f)$. Find a function $f$ for which $L(f) \neq U(f)$. Is there a relationship between $L(f)$ and $U(f)$ in general?

**Definition 11.18.** Let $f: [a,b] \longrightarrow \mathbb{R}$ be bounded. We say that $f$ is **integrable** on $[a,b]$ if $L(f) = U(f)$. In this case, the common value $L(f) = U(f)$ is called the **integral** of $f$ from $a$ to $b$ and we write it as:

$$
\int_a^b f.
$$

When we want to display the variable of integration, we write the integral as follows, including the symbol $dx$ to indicate the variable of integration:

$$
\int_a^b f(x) \, dx.
$$

For example, if $f(x) = x^2$, we would write $\int_a^b x^2 \, dx$ but not $\int_a^b x^2$.

**Theorem 11.19.** Let $f: [a,b] \longrightarrow \mathbb{R}$ be bounded. Then $f$ is integrable if and only if for every $\epsilon > 0$ there exists a partition $P$ of $[a,b]$ such that:

$$
U(f,P) - L(f,P) < \epsilon.
$$

**Theorem 11.20.** If $f: [a,b] \longrightarrow \mathbb{R}$ is continuous, then $f$ is integrable.  
(Hint: Use theorem 11.19 and uniform continuity.)

~={red}**Exercise 11.21.** Fix $c \in \mathbb{R}$ and let $f: [a,b] \to \mathbb{R}$ be defined by $f(x) = c$ for each $x \in [a,b]$. Show that $f$ is integrable on $[a,b]$ and that $\int_a^b f = c(b - a)$.=~

**Exercise 11.22.** Define $f: [0,b] \to \mathbb{R}$ by the formula $f(x) = x$. Show that $f$ is integrable on $[0,b]$ and that $\int_0^b f = \frac{b^2}{2}$.

**Exercise 11.23.** Show that the converse of theorem 11.20 is false in general.

**Exercise 11.24.** Let $f: [0,1] \to \mathbb{R}$ be defined by

$$
f(x) = \begin{cases}
1, & x \in \mathbb{Q}, \\
0, & x \notin \mathbb{Q}.
\end{cases}
$$

Show that $f$ is not integrable on $[0,1]$. Compute the upper and lower integrals of $f$ on $[0,1]$.

**Theorem 11.25.** Let $a < b < c$. A function $f: [a,c] \longrightarrow \mathbb{R}$ is integrable on $[a,c]$ if and only if $f$ is integrable on $[a,b]$ and $[b,c]$. When $f$ is integrable on $[a,c]$, we have

$$
\int_a^c f = \int_a^b f + \int_b^c f.
$$

If $b < a$, we define

$$
\int_a^b f = -\int_b^a f,
$$

whenever the latter integral exists. With this notational convention, it follows that the equation

$$
\int_a^c f = \int_a^b f + \int_b^c f
$$

always holds, regardless of the ordering of $a$, $b$ and $c$, whenever $f$ is integrable on the largest of the three intervals.

**Theorem 11.26.** Suppose that $f$ and $g$ are integrable functions on $[a,b]$ and that $c \in \mathbb{R}$ is a constant. Then:

$$
\int_a^b (f + g) = \int_a^b f + \int_a^b g, \qquad
\int_a^b c \cdot f = c \int_a^b f.
$$

**Theorem 11.27.** Suppose that $f$ is integrable on $[a,b]$ and that there exist numbers $m$ and $M$ such that:

$$
m \leq f(x) \leq M \quad \text{for all } x \in [a,b].
$$

Then:

$$
m(b - a) \leq \int_a^b f \leq M(b - a).
$$

**Theorem 11.28.** Suppose that $f$ is integrable on $[a,b]$. Define $F: [a,b] \longrightarrow \mathbb{R}$ by

$$
F(x) = \int_a^x f.
$$

Then $F$ is continuous.