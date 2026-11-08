# MATH 162, SHEET 8: THE REAL NUMBERS

This sheet is concerned with proving that the continuum $\mathbb{R}$ is an ordered field. Addition and multiplication on $\mathbb{R}$ are defined in terms of addition and multiplication on $\mathbb{Q}$, so we will use $\oplus$ and $\otimes$ for addition and multiplication of real numbers, to make sure that there is no confusion with $+$ and $\cdot$ on $\mathbb{Q}$.

## 8A. Construction of the real numbers via cuts, Addition and Order

**Definition 8.1.** A subset $A$ of $\mathbb{Q}$ is said to be a **cut** (or Dedekind cut) if it satisfies the following:

(a) $A \neq \emptyset$ and $A \neq \mathbb{Q}$  
~={red}(b) If $r \in A$ and $s \in \mathbb{Q}$ satisfies $s < r$, then $s \in A$  =~
(c) If $r \in A$ then there is some $s \in \mathbb{Q}$ with $s > r$ and $s \in A$

We denote the collection of all cuts by $\mathbb{R}$.

**Definition 8.2.** We define $\oplus$ on $\mathbb{R}$ as follows. Let $A, B \in \mathbb{R}$ be Dedekind cuts. Define

$$
A \oplus B = \{ a + b \mid a \in A,\; b \in B \}.
$$

**Exercise 8.3.** (a) Prove that $A \oplus B$, $\mathbf{0}$, and $\mathbf{1}$ are all Dedekind cuts.  
(b) Prove that $\{x \in \mathbb{Q} \mid x \leq 0\}$ is not a Dedekind cut.  
(c) Prove that $\{x \in \mathbb{Q} \mid x < 0\} \cup \{x \in \mathbb{Q} \mid x^2 < 2\}$ is a Dedekind cut.

*Hint:* In Exercise 4.20 last quarter we showed that if $x \in \mathbb{Q}$, $x \geq 0$, and $x^2 < 2$, then there is some $\delta \in \mathbb{Q}$, $\delta > 0$ such that $(x + \delta)^2 < 2$.

**Exercise 8.4.** (Homework) Prove that if $A \in \mathbb{R}$ then $A = \mathbf{0} \oplus A$.

**Definition 8.5.** If $A, B \in \mathbb{R}$, we say that $A < B$ if $A$ is a proper subset of $B$, i.e. $A \subset B$ but $A \neq B$.

**Exercise 8.6.** Show that $<$ satisfies

~={red}(a) (Trichotomy) If $A, B \in \mathbb{R}$ then exactly one of the following holds: $A < B$, $A = B$, $B < A$.  =~
(b) (Transitivity) If $A, B, C \in \mathbb{R}$ with $A < B$ and $B < C$ then $A < C$.  
(c) (Additivity) If $A, B, C \in \mathbb{R}$ with $A < B$ then $A \oplus C < B \oplus C$.

Note: to prove part (c) you may assume Theorem 8.11 and associativity of addition.

**Exercise 8.7.** (Homework) Show that if $A \in \mathbb{R}$ and $\mathbf{0} < A$, then $0 \in A$.

~={red}**Lemma 8.8.**=~ Let $A \in \mathbb{R}$. Then define

$$
-A = \{ r \in \mathbb{Q} \mid \exists \epsilon > 0,\; \epsilon \in \mathbb{Q} \text{ such that } -r - \epsilon \notin A \}.
$$

Then  
(a) $-A \in \mathbb{R}$,  
(b) $-(-A) = A$.

**Exercise 8.9.** (Homework) Show that if $p \in \mathbb{Q}$ and $A = \{x \in \mathbb{Q} \mid x < p\}$, then $-A = \{x \in \mathbb{Q} \mid x < -p\}$.

**Lemma 8.10.** If $A \in \mathbb{R}$, $r \in \mathbb{Q}$, $r > 0$, then there exist $s \in A$ and $t \in \mathbb{Q} \setminus A$ such that $t - s = r$.

**Theorem 8.11.** If $A \in \mathbb{R}$ then $A \oplus (-A) = \mathbf{0}$.

**Corollary 8.12.** $A < \mathbf{0} \Longleftrightarrow \mathbf{0} < -A$.

## 8B. Multiplication, the real numbers form an ordered field

**Definition 8.13.** For $A, B \in \mathbb{R}$ with $\mathbf{0} < A$, $\mathbf{0} < B$, we define

$$
A \otimes B = \{ ab \mid a \in A,\; b \in B,\; a > 0,\; b > 0 \} \cup \{ x \in \mathbb{Q} \mid x \leq 0 \}.
$$

If $A = \mathbf{0}$ or $B = \mathbf{0}$ we define $A \otimes B = \mathbf{0}$.  
If $A < \mathbf{0}$ but $\mathbf{0} < B$ we replace $A$ with $-A$ and use the definition of multiplication of positive elements. Hence, in this case,

$$
A \otimes B = -[(-A) \otimes B].
$$

Similarly, if $\mathbf{0} < A$ but $B < \mathbf{0}$, then

$$
A \otimes B = -[A \otimes (-B)],
$$

and if $A < \mathbf{0}$, $B < \mathbf{0}$ then

$$
A \otimes B = [(-A) \otimes (-B)].
$$

**Exercise 8.14.** (a) ~={red}Show that if $A, B \in \mathbb{R}$, then $A \otimes B \in \mathbb{R}$.  （第二个规则）=~
(b) Show that if $A, B \in \mathbb{R}$, $\mathbf{0} < A$, $\mathbf{0} < B$ then $\mathbf{0} < A \otimes B$.  
(c) Show that if $A \in \mathbb{R}$, then $\mathbf{1} \otimes A = A$.

**Definition 8.15.** If $A \in \mathbb{R}$, $\mathbf{0} < A$, then define

$$
A^{-1} = \{ r \in \mathbb{Q} \mid r \leq 0 \} \cup \left\{ r \in \mathbb{Q} \mid r > 0 \text{ and } \frac{1}{r} \notin A,\; \frac{1}{r} \text{ is not the smallest element of } \mathbb{Q} \setminus A \right\}.
$$

For $A < \mathbf{0}$ we have $\mathbf{0} < -A$ and so $(-A)^{-1}$ can be defined as above. Then, for $A < \mathbf{0}$, we define

$$
A^{-1} = -[(-A)^{-1}].
$$

**Lemma 8.16.** Let $A \in \mathbb{R}$. Then,

(a) If $\mathbf{0} < A$,

$$
A^{-1} = \{ r \in \mathbb{Q} \mid r \leq 0 \} \cup \left\{ r \in \mathbb{Q} \mid r > 0 \text{ and } \exists \epsilon > 0,\; \epsilon \in \mathbb{Q} \text{ such that } \frac{1}{r + \epsilon} \notin A \right\}.
$$

(b) If $A \neq \mathbf{0}$, then $A^{-1} \in \mathbb{R}$.

**Exercise 8.17.** Show that if $p \in \mathbb{Q}$ with $p \neq 0$ and $A = \{x \in \mathbb{Q} \mid x < p\}$, then $A^{-1} = \{x \in \mathbb{Q} \mid x < 1/p\}$.

**Lemma 8.18.** If $A \in \mathbb{R}$, $A > \mathbf{0}$, $r \in \mathbb{Q}$, $r > 1$, then there exist $s \in A$, $t \in \mathbb{Q} \setminus A$ such that $\frac{t}{s} = r$.

**Theorem 8.19.** If $A \in \mathbb{R}$, $A \neq \mathbf{0}$, then $A \otimes A^{-1} = \mathbf{1}$.

**Theorem 8.20.** $\mathbb{R}$ is an ordered field.

## 8C. The Archimedean property of the real numbers

For every rational number $q \in \mathbb{Q}$, define the corresponding real number as the Dedekind cut

$$
i(q) = \{ x \in \mathbb{Q} \mid x < q \}.
$$

For example, $\mathbf{0} = i(0)$. This gives a well-defined injective function $i: \mathbb{Q} \longrightarrow \mathbb{R}$. We identify $\mathbb{Q}$ with its image $i(\mathbb{Q}) \subset \mathbb{R}$ so that the rational numbers $\mathbb{Q}$ are a subset of the real numbers $\mathbb{R}$. (Hence $\mathbb{N}$ and $\mathbb{Z}$ are also subsets of $\mathbb{R}$.) Note that in this case, this is the same map $i$ that you identified in Theorem 7.27, so that in fact $\mathbb{Q}$ is a subfield of $\mathbb{R}$.

**Exercise 8.21.** Show that $\mathbb{R}$ satisfies Axioms 1–3.

**Lemma 8.22.** A nonempty subset of $\mathbb{R}$ that is bounded above has a supremum.

**Exercise 8.23.** Show that $\mathbb{R}$ satisfies Axiom 4.

**Lemma 8.24.** $\mathbb{N}$ is an unbounded subset of $\mathbb{R}$.

**Theorem 8.25 (The Archimedean Property).** Let $A \in \mathbb{R}$ be a positive real number. Then there exist nonzero natural numbers $m, n \in \mathbb{N}$ such that $\frac{1}{n} < A < m$.

**Corollary 8.26.** If $A \in \mathbb{R}$ is a real number, then there is an integer $n$ such that $n-1 \leq A < n$.

**Definition 8.27.** Consider a subset $X \subset C$ of the continuum. We say that $X$ is **dense** in $C$ if every $p \in C$ is a limit point of $X$.

**Lemma 8.28.** A subset $X \subset C$ is dense in $C$ if and only if $\overline{X} = C$.

**Lemma 8.29.** A subset $X \subset C$ is dense in $C$ if and only if, for every non-empty open set $U \subset C$, we have $U \cap X \neq \emptyset$.

**Lemma 8.30.** Given $A, B \in \mathbb{R}$ with $A < B$, there exists $p \in \mathbb{Q}$ such that $A < p < B$.

**Theorem 8.31.** $\mathbb{Q}$ is dense in $\mathbb{R}$.

## 8D. The continuum is isomorphic to the real numbers

**Axiom 5.** The continuum contains a countable dense subset.

**Exercise 8.32.** Let $K \subset C$ be a countable dense subset of $C$. Construct an order-preserving bijection $f: \mathbb{Q} \longrightarrow K$.  
(A map $f: \mathbb{Q} \longrightarrow K$ is order-preserving if $r < s$ in $\mathbb{Q}$ implies $f(r) <_C f(s)$ in $K$.)

**Exercise 8.33.** Let $f: \mathbb{Q} \longrightarrow K$ be an order-preserving bijection, as found in the previous exercise. Let $A \in \mathbb{R}$. Then $A \subset \mathbb{Q}$ and so $f(A) \subset K \subset C$. Define $F: \mathbb{R} \longrightarrow C$ by

$$
F(A) = \sup f(A).
$$

Show:  
1. $\sup f(A)$ exists, so $F$ is well-defined.  
2. $F$ is injective and order-preserving.

**Theorem 8.34.** Suppose that $C$ is a continuum satisfying Axioms 1–5. Then $C$ is isomorphic to the real numbers $\mathbb{R}$. That is, if we let $<$ be the order on $\mathbb{R}$ and $<_C$ be the order on $C$, then there is a bijection $F: \mathbb{R} \longrightarrow C$ such that, for all $A, B \in \mathbb{R}$,

$$
A < B \Longrightarrow F(A) <_C F(B).
$$

Axioms 1–5 completely characterize the continuum in the sense that there is only one model for them, namely the real numbers. The main consequence for us is that we will no longer refer to $C$ as anything but $\mathbb{R}$.

In addition, now that we have constructed $\mathbb{R}$ and proved the fundamental facts about it, we will forget about Dedekind cuts and think of elements of $\mathbb{R}$ as numbers. From now on, we will agree to use lower-case letters like $x$ for real numbers and to write $+$ and $\cdot$ for $\oplus$ and $\otimes$ like people usually do.