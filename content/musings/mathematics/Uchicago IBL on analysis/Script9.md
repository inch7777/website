# SHEET 9: SEQUENCES and LIMITS

We will now work with the real numbers $\mathbb{R}$ instead of an arbitrary continuum $C$. Accordingly, let us now use the usual notation $(a,b)$ for the region $ab = \{x \in \mathbb{R} \mid a < x < b\}$. This is not the ordered pair $(a,b)$, and we must be vigilant that we do not confuse the two concepts.

**Definition 9.1.** A **sequence** is a function $a: \mathbb{N} \longrightarrow \mathbb{R}$ from the natural numbers to the real numbers.

By setting $a_n = a(n)$, we can think of a sequence $a$ as a list $a_1, a_2, a_3, \ldots$ of real numbers. We use the notation $(a_n)_{n=1}^{\infty}$ for such a sequence, or if there is no possibility of confusion, we sometimes abbreviate this and write simply $(a_n)$. More generally, we also use the term sequence to refer to a function defined on $\{n \in \mathbb{N} \mid n \geq n_0\}$ for any fixed $n_0 \in \mathbb{N}$. We notate this by writing $(a_n)_{n=n_0}^{\infty}$ for such a sequence.

**Definition 9.2.** We say that a sequence $(a_n)$ **converges** to a point $p \in \mathbb{R}$ if, for every region $R$ containing $p$, there exists $N \in \mathbb{N}$ such that if $n \geq N$, then $a_n \in R$. If $(a_n)$ converges to $p$, we write this as:

$$
\lim_{n \to \infty} a_n = p,
$$

and call $p$ the **limit** of $(a_n)$. If $(a_n)$ does not converge to any point $p$, we say that the sequence **diverges**.

**Exercise 9.3.** Show that if a sequence $(a_n)$ converges to $p$, then any region containing $p$ contains all but~={red} finitely =~many terms in the sequence.

**Exercise 9.4.** Which of the following sequences converge? Which diverge? If one converges, what does it converge to? If one diverges, what can you say about the nature of its divergence?

1. $a_n = 5$
2. $a_n = n$
3. $a_n = 1/n$
4. $a_n = (-1)^n$
5. $a_n = (-1)^n \cdot n$
6. $a_n = (-1)^n \cdot \frac{1}{n}$

~={orange}Suppose the region $(a,b)$=~

The next theorem tells us that the limits of sequences are unique:

**Theorem 9.5.** Suppose that

$$
\lim_{n \to \infty} a_n = p \quad \text{and} \quad \lim_{n \to \infty} a_n = p'.
$$

Then $p = p'$.

Sometimes divergent sequences have points that behave like limits, but are not necessarily unique:

**Definition 9.6.** A point $p \in \mathbb{R}$ is a **sublimit point** of $(a_n)$ if, for every region $R$ containing $p$, there exist infinitely many $n \in \mathbb{N}$ with $a_n \in R$.

**Exercise 9.7.** Construct a sequence with two distinct sublimit points. ~={yellow}Construct a sequence with infinitely many sublimit points.=~

**Theorem 9.8.** Suppose that $\lim_{n \to \infty} a_n = p$. Then $p$ is the only sublimit point of the sequence $(a_n)$.

**Definition 9.9.** Let $(a_n)$ be a sequence. A **subsequence** of $(a_n)$ is a sequence $b: \mathbb{N} \to \mathbb{R}$ defined by the composition $b = a \circ i$, where $i: \mathbb{N} \to \mathbb{N}$ is an injective, order-preserving function. (By order-preserving, we mean that $i$ has the property that if $n < m$, then $i(n) < i(m)$.)

If we let $n_k = i(k) \in \mathbb{N}$, we can write $b_k = a_{n_k}$, so that $(b_k)$ is the sequence $b_1, b_2, b_3, \ldots$ which is equal to the sequence $a_{n_1}, a_{n_2}, a_{n_3}, \ldots$, where $n_1 < n_2 < n_3 < \cdots$.

**Theorem 9.10.** If $(a_n)$ converges to $p$, then so do all of its subsequences.

**Theorem 9.11.** Let $(a_n)$ be a sequence and suppose that there exists a subsequence $(b_k = a_{n_k})$ that converges to $p$. Then $p$ is a sublimit point of $(a_n)$.

The next two lemmas will help prove the converse to Theorem 9.11. Let $p \in \mathbb{R}$ and for each natural number $k \geq 1$, define $R_k$ to be the region $(p - \frac{1}{k}, p + \frac{1}{k})$.

**Lemma 9.12.** The $R_k$ form a descending collection of regions $R_1 \supset R_2 \supset R_3 \supset \cdots$ whose intersection is the point $p$:

$$
\bigcap_{k \geq 1} R_k = \{p\}.
$$

**Lemma 9.13.** Let $R$ be a region containing $p$. Then there exists a natural number $N$ such that $R_k \subset R$ for all $k \geq N$.

~={orange}**Theorem 9.14.** Let $(a_n)$ be a sequence with a sublimit point $p$. Then there exists a subsequence $(b_k = a_{n_k})$ that converges to $p$.=~

Here is another nice application of Lemmas 9.12 and 9.13:

**Theorem 9.15.** Let $A \subset \mathbb{R}$. Then $p \in \overline{A}$ if and only if there exists a sequence $(a_n)$, with each $a_n \in A$, that converges to $p$.

**Definition 9.16.** A sequence $(a_n)$ is **bounded above** if there exists $u \in \mathbb{R}$ such that $u \geq a_n$ for all $n \in \mathbb{N}$. Similarly, $(a_n)$ is **bounded below** if there exists $l \in \mathbb{R}$ such that $l \leq a_n$ for all $n \in \mathbb{N}$. We say that $(a_n)$ is **bounded** if it is both bounded above and bounded below.

**Remark 9.17.** Note that the sequence $(a_n)$ is bounded precisely when the set $\{a_n \mid n \in \mathbb{N}\}$ is bounded.

**Theorem 9.18.** Every convergent sequence is bounded.

The converse is not always true, but we do have the following:

~={red}**Theorem 9.19.** Every bounded sequence has a convergent subsequence.  =~
~={red}(Hint: sometimes this is called the Bolzano–Weierstrass theorem.)=~

The rest of the sheet is a natural continuation of the idea behind Lemmas 9.12 and 9.13. Mathematicians often use the letters $\delta$ and $\epsilon$ to denote "small" positive numbers. For example, $\frac{1}{k}$ is small when $k$ is large. Keeping this in mind, we can rephrase Lemma 9.13 as follows:

**Lemma 9.20.** Let $R$ be a region containing the point $p$. Then there exists a number $\delta > 0$ such that $(p - \delta, p + \delta) \subset R$.

**Theorem 9.21.** A function $f: \mathbb{R} \longrightarrow \mathbb{R}$ is continuous if and only if the following condition holds for each point $p \in \mathbb{R}$: for all $\epsilon > 0$, there exists $\delta > 0$ such that

$$
(p - \delta, p + \delta) \subset f^{-1}\big( (f(p) - \epsilon, f(p) + \epsilon) \big).
$$

~={red}By Theorem 5.4=~
There is a slightly nicer way of writing this theorem. First, we define the absolute value of a real number:

**Definition 9.22.** The **absolute value** of a real number $x$ is the non-negative number $|x|$ defined by:

$$
|x| = \begin{cases}
x, & \text{if } x \geq 0, \\
-x, & \text{if } x < 0.
\end{cases}
$$

**Exercise 9.23.** Prove that:

$$
(p - \delta, p + \delta) = \{ x \in \mathbb{R} \mid |x - p| < \delta \}.
$$

Our reformulation of Theorem 9.21 is then:

**Theorem 9.24.** A function $f: \mathbb{R} \longrightarrow \mathbb{R}$ is continuous if and only if the following condition holds for each point $p \in \mathbb{R}$: for every $\epsilon > 0$, there exists $\delta > 0$ such that

$$
\text{if } |x - p| < \delta, \text{ then } |f(x) - f(p)| < \epsilon.
$$

Calculus textbooks often give the condition in this theorem as the definition of continuity. Notice that we have shifted focus to the local behavior of $f$ at a point $p$. This suggests that we can define continuity "one point at a time":

**Definition 9.25.** A function $f: \mathbb{R} \longrightarrow \mathbb{R}$ is **continuous at $p$** if, for every $\epsilon > 0$, there exists $\delta > 0$ such that

$$
\text{if } |x - p| < \delta, \text{ then } |f(x) - f(p)| < \epsilon.
$$