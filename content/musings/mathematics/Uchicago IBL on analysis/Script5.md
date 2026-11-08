# MATH 162, SHEET 5: CONTINUOUS FUNCTIONS

**Definition 5.1.** A function $f: C \longrightarrow C$ is **continuous** if for every open set $U \subset C$, the preimage $f^{-1}(U) = \{x \in C \mid f(x) \in U\}$ is open in $C$.

Notice that this definition depends only on the topology of $C$. Continuous functions are the "right" notion of functions between topological spaces.

**Lemma 5.2.** If $X, Y \subset C$, then:

$$
f^{-1}(X \cup Y) = f^{-1}(X) \cup f^{-1}(Y) \quad \text{and} \quad f^{-1}(X \cap Y) = f^{-1}(X) \cap f^{-1}(Y).
$$

**Exercise 5.3.** Let $X \subset C$. Is it always true that $f(f^{-1}(X)) = X$? Is it always true that $f^{-1}(f(X)) = X$?

**Theorem 5.4.** $f: C \longrightarrow C$ is continuous if and only if for all $x \in C$ and regions $R$ containing $f(x)$, there exists a region $S$ containing $x$ such that $f(S) \subset R$.

**Lemma 5.5.** If $X, Y \subset C$, then:

$$
f(X \cap Y) \subset f(X) \cap f(Y).
$$

**Exercise 5.6.** Show that $f(X \cap Y) = f(X) \cap f(Y)$ is not always true by providing a counterexample.

**Theorem 5.7.** Let $f: C \longrightarrow C$ be continuous and suppose that $x$ is a limit point of $A \subset C$. Then $f(x)$ is a limit point of $f(A)$ or $f(x) \in f(A)$.

**Definition 5.8.** A set $X \subset C$ is **connected** if it cannot be written as the union $X = A \cup B$ of two separated sets. (See Definition 3.23 for what it means for two sets $A, B \subset C$ to be separated.)

**Theorem 5.9.** Every region $R \subset C$ is connected.

**Theorem 5.10 (Intermediate Value Theorem).** Suppose that $X \subset C$ is a connected subset of $C$ and $f: C \longrightarrow C$ is continuous. Then $f(X)$ is connected.

In ordinary calculus textbooks, the intermediate value theorem is often stated as follows. Assuming that the real numbers $\mathbb{R}$ are a valid model for the continuum, it says that if $f: \mathbb{R} \longrightarrow \mathbb{R}$ is continuous and $a < b$, then for every point $p$ between $f(a)$ and $f(b)$, there exists $c$ such that $a < c < b$ and $f(c) = p$.

**Exercise 5.11.** Derive the usual formulation of the intermediate value theorem from Theorem 5.10.

~={red}think the opposite: uncontinuous situatiion=~

~={orange}**Theorem 5.12.** Suppose that $X \subset C$ is a compact subset of the continuum and $f: C \longrightarrow C$ is continuous. Then $f(X)$ is also compact.=~

**Corollary 5.13 (Extreme Value Theorem).** If $X \subset C$ is nonempty, closed, and bounded and $f: C \longrightarrow C$ is continuous, then $f(X)$ has a first and last point.

**Exercise 5.14.** Prove the usual version of the extreme value theorem: if $f: \mathbb{R} \longrightarrow \mathbb{R}$ is continuous and $a < b$, then there exists a point $c \in [a,b]$ such that $f(c) \geq f(x)$ for all $x \in [a,b]$. Similarly, there exists a point $d \in [a,b]$ such that $f(d) \leq f(x)$ for all $x \in [a,b]$.

Before moving on, there is a potentially tricky issue that should be discussed. Often, a function is not defined on all of the continuum. For example, the function $f(x) = 1/x$ is only defined on the set of nonzero real numbers. So far, we have only defined continuity for functions defined on all of $C$. It turns out that the definition of continuity that we have given in terms of open sets only works if the domain of the function $f$ is open.

**Exercise 5.15.** Find a function $f: [0,1] \longrightarrow \mathbb{R}$ that appears to be continuous (in the "not lifting your pencil" sense), but for which there exists an open set $U \subset \mathbb{R}$ such that $f^{-1}(U)$ is not open.

~={red}$f:[0,1]\to 1$=~

To remedy this, we follow Theorem 5.4 in making the following definition of continuity for functions defined on subsets $A \subset C$:

**Definition 5.16 (General Definition of Continuity).** Let $A \subset C$ be a subset of the continuum and let $f: A \longrightarrow C$ be a function defined on $A$. We say that $f$ is **continuous** if for all $x \in A$ and regions $R$ containing $f(x)$, there exists a region $S$ containing $x$ such that $f(S \cap A) \subset R$.

**Exercise 5.17.** Discuss whether or not the theorems on this sheet remain true for a function $f$ whose domain is not $C$ but instead some subset $A \subset C$, provided that we use Definition 5.16 for continuity.