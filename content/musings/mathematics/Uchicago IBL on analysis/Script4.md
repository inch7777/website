# MATH 161, SHEET 4: CONNECTEDNESS, BOUNDEDNESS, COMPACTNESS

We will introduce a new axiom for the continuum $C$ and derive many interesting properties from it. From now on, we will always assume axiom 4.

**Axiom 4.** The continuum is connected.

**Theorem 4.1.** The only subsets of the continuum that are both open and closed are $\emptyset$ and $C$.

**Theorem 4.2.** For all $x,y \in C$, if $x < y$, then there exists $z \in C$ such that $z$ is in between $x$ and $y$.

**Corollary 4.3.** Every region is infinite.

**Corollary 4.4.** Every point of $C$ is a limit point of $C$.

**Corollary 4.5.** Every point of the region $ab$ is a limit point of $ab$.

**Exercise 4.6.** Construct an infinite collection of open sets whose intersection is not open. ~={red}Equivalently, construct an infinite collection of closed sets whose union is not closed.=~

We will now introduce boundedness. The first definition should be intuitively clear. The second is subtle and powerful. Just to be clear, by $x \leq y$, we mean $x < y$ or $x = y$ and similarly for $x \geq y$.

**Definition 4.7.** Let $X$ be a subset of $C$. A point $u$ is called an **upper bound** of $X$ if for all $x \in X$, $x \leq u$. A point $l$ is called a **lower bound** of $X$ if for all $x \in X$, $l \leq x$. If there exists an upper bound of $X$, then we say that $X$ is **bounded above**. If there exists a lower bound of $X$, then we say that $X$ is **bounded below**. If $X$ is bounded above and below, then we simply say that $X$ is **bounded**.

**Definition 4.8.** Let $X$ be a subset of $C$. We say that $u$ is the **least upper bound** of $X$ and write $u = \sup X$ if:

1. $u$ is an upper bound of $X$, and
2. if $u'$ is an upper bound of $X$, then $u \leq u'$.

We say that $l$ is the **greatest lower bound** and write $l = \inf X$ if:

1. $l$ is a lower bound of $X$, and
2. if $l'$ is a lower bound of $X$, then $l' \leq l$.

The notation $\sup$ is pronounced "sup" and comes from the word *supremum*, which is another name for least upper bound. The notation $\inf$ is pronounced "inf" and comes from the word *infimum*, which is another name for greatest lower bound.

**Exercise 4.9.** If $\sup X$ exists, then it is unique, and similarly for $\inf X$.

**Theorem 4.10.** Let $a < b$. The least upper bound and greatest lower bound of the region $ab$ are:

$$
\sup ab = b \quad \text{and} \quad \inf ab = a.
$$

**Theorem 4.11.** Let $X$ be a subset of $C$. Suppose that $\sup X$ exists and $\sup X \notin X$. Then $\sup X$ is a limit point of $X$. The same holds for $\inf X$.

**Corollary 4.12.** Both $a$ and $b$ are limit points of the region $ab$.

Let $[a,b]$ denote the closure $\overline{ab}$ of the region $ab$.

**Corollary 4.13.** $[a,b] = \{x \in C \mid a \leq x \leq b\}$.

**Lemma 4.14.** Let $X \subset C$ and define:

$$
\Psi(X) = \{x \in C \mid x \text{ is not an upper bound of } X\}.
$$

Then $\Psi(X)$ is open. Define:

$$
\Omega(X) = \{x \in C \mid x \text{ is not a lower bound of } X\}.
$$

Then $\Omega(X)$ is open.

**Theorem 4.15.** Suppose that $X$ is nonempty and bounded. Then $\sup X$ and $\inf X$ both exist.

~={red}**Corollary 4.16.** Every nonempty closed and bounded set has a first point and a last point.=~

**Exercise 4.17.** Is this true for $\mathbb{Q}$?

The next new concept is compactness. Compactness is the right notion of "smallness" in mathematics, although the definition can be intimidating at first. We recommend thinking about it visually.

**Definition 4.18.** Let $X$ be a subset of $C$ and let $\mathcal{U} = \{U_\lambda\}_{\lambda \in \Lambda}$ be a collection of subsets of $C$. We say that $\mathcal{U}$ is a **cover** of $X$ if every point of $X$ is in some $U_\lambda$, or in other words:

$$
X \subset \bigcup_{\lambda \in \Lambda} U_\lambda.
$$

We say that the collection $\mathcal{U}$ is an **open cover** if each $U_\lambda$ is open.

**Definition 4.19.** Let $X$ be a subset of $C$. $X$ is **compact** if for every open cover $\mathcal{U}$ of $X$ there exists a finite subset $\mathcal{U}' \subset \mathcal{U}$ that is also an open cover.

A good summary of the definition of compactness is "every open cover contains a finite subcover".

~={orange}**Lemma 4.20.** No finite collection of regions covers $C$.=~

~={red} By Corollary 4.16, $C$ is not bounded=~

**Theorem 4.21.** $C$ is not compact.

**Theorem 4.22.** If $X$ is compact, then $X$ is bounded.

This is a direct consequence of our work from sheet 3, but let's record it here explicitly:

**Lemma 4.23.** The exterior $\operatorname{ext}(ab)$ of a region $ab$ is open.

**Lemma 4.24.** Let $p \in C$ and consider the set:

$$
\mathcal{U} = \{\operatorname{ext}(ab) \mid p \in ab\}.
$$

No finite subset of $\mathcal{U}$ covers $C \setminus \{p\}$.

**Theorem 4.25.** If $X$ is compact, then $X$ is closed.

It will turn out that the two properties of compactness in 4.21 and 4.24 characterize compact sets completely, meaning that every bounded closed set is compact. The rest of the sheet is concerned with proving this fact.

**Definition 4.26.** Let $x, y \in C$. A **simple chain of regions** from $x$ to $y$ is a finite collection of regions $R_1, \ldots, R_n$ satisfying:

1. $x \in R_i$ if and only if $i = 1$
2. $y \in R_i$ if and only if $i = n$
3. $R_i \cap R_j \neq \emptyset$ if and only if $j = i+1$

**Lemma 4.27.** Let $a < x < b$, and let $R_1, \ldots, R_n$ form a simple chain of regions from $a$ to $b$. Then there exists $k$ such that $1 \leq k \leq n$ and $R_1, \ldots, R_k$ form a simple chain of regions from $a$ to $x$.

~={red}Contradiction: exist a $R_{i}$ ; 截断来satisfy 唯一性（pick）=~

**Lemma 4.28.** If $\mathcal{U}$ is a collection of regions covering $[a,b]$, then $\mathcal{U}$ has a finite subset that is a simple chain of regions from $a$ to $b$.

**Theorem 4.29.** The set $[a,b]$ is compact.

**Theorem 4.30 (Heine-Borel).** Let $X \subset C$. $X$ is compact if and only if $X$ is closed and bounded.

~={orange}**Theorem 4.31 (Bolzano-Weierstrass).** Every bounded infinite subset of $C$ has at least one limit point.=~