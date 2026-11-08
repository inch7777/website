# MATH 161, SHEET 2: INTRODUCING THE CONTINUUM

This sheet introduces the continuum $C$ through a series of axioms.

**Axiom 1.** The continuum is a nonempty set $C$.

We often refer to elements of $C$ as points.

**Definition 2.1.** Let $X$ be a set. An ordering on the set $X$ is a subset $<$ of $X \times X$, with elements $(x,y) \in <$ written as $x < y$, satisfying the following properties:

(a) For all $x, y \in X$ such that $x \neq y$, either $x < y$ or $y < x$.  
(b) For all $x, y \in X$, if $x < y$ then $x \neq y$.  
(c) For all $x, y, z \in X$, if $x < y$ and $y < z$ then $x < z$.

**Axiom 2.** There exists an ordering $<$ on $C$.

**Theorem 2.2.** If $x$ and $y$ are points of $C$, then $x < y$ and $y < x$ are not both true.

**Definition 2.3.** If $A \subset C$ is a subset of $C$, then a point $a \in A$ is a **first point** of $A$ if, for every element $x \in A$, either $a < x$ or $a = x$. Similarly, a point $b \in A$ is called a **last point** of $A$ if, for every $x \in A$, either $x < b$ or $x = b$.

**Lemma 2.4.** If $A$ is a nonempty, finite subset of $C$, then $A$ has a first and last point.

**Theorem 2.5.** Suppose that $A$ is a set of $n$ distinct points in $C$, or, in other words, $A \subset C$ has cardinality $n$. Then symbols $a_1, \ldots, a_n$ may be assigned to each point of $A$ so that $a_1 < a_2 < \dots < a_n$, i.e. $a_i < a_{i+1}$ for $1 \leq i \leq n-1$.

~={orange}proof 1: use lemma 2.4, choose frist point $p_{1}$ and last point $p_{2}$, and form a set $A_{1}=A/\{p_{1},p_{2}  \}$. $A_{1}$ is a nonempty, finite subset of C, so $A_{1}$ also has a frist and last point. Again, choose $p_{3},p_{4}$ and form $A_{2}$. Repeat the process.=~

~={orange}proof 2: use definitioon 2.1 design an algorithm=~

**Definition 2.6.** If $x, y, z \in C$ and both $x < y$ and $y < z$, then we say that $y$ is **between** $x$ and $z$.

**Corollary 2.7.** Of three distinct points, one must be between the other two.

**Axiom 3.** $C$ has no first or last point.

**Definition 2.8.** If $a, b \in C$ and $a < b$, then the set of points between $a$ and $b$ is called a **region**, denoted by $ab$.

**Warning 2.9.** One often sees the notation $(a, b)$ for regions. We will reserve the notation $(a, b)$ for ordered pairs in a product $A \times B$. These are very different things.

**Theorem 2.10.** If $x$ is a point of $C$, then there exists a region $ab$ such that $x \in ab$.

~={red}Proof: By Axiom 3. There exists a point $a<x$ and $b>x$.=~

We now come to one of the most important definitions of this course:

**Definition 2.11.** Let $A$ be a nonempty subset of $C$. A point $p$ of $C$ is called a **limit point** of $A$ if every region $R$ containing $p$ has nonempty intersection with $A \setminus \{p\}$. Explicitly, this means:

> for every region $R$ with $p \in R$, we have $R \cap (A \setminus \{p\}) \neq \emptyset$.

Notice that we do not require that a limit point $p$ of $A$ be an element of $A$.

~={orange}Which actually means: p is the limit first/ last point, when $p$ is not an element of $A$. For elements $\in A$, when $A$ is a connected interval, every element can be limit point.=~

**Theorem 2.12.** If $p$ is a limit point of $A$ and $A \subset B$, then $p$ is a limit point of $B$.

~={green}**Lemma 2.13.** =~If $ab$ is a region in $C$, then:

$$
C = \{x \in C \mid x < a\} \cup \{a\} \cup ab \cup \{b\} \cup \{x \in C \mid b < x\}.
$$

**Definition 2.14.** If $ab$ is a region in $C$, then $C \setminus (\{a\} \cup ab \cup \{b\})$ is called the **exterior** of $ab$ and is denoted by $\operatorname{ext} ab$.

**Lemma 2.15.** If $ab$ is a region in $C$, then:

$$
C = \operatorname{ext}ab \cup \{a\} \cup \{b\} \cup ab.
$$

**Lemma 2.16.** No point in the exterior of a region is a limit point of that region. No point of a region is a limit point of the exterior of that region.

**Theorem 2.17.** If two regions have a point $x$ in common, their intersection is a region containing $x$.

**Corollary 2.18.** If $n$ regions $R_1, \ldots, R_n$ have a point $x$ in common, then their intersection $R_1 \cap \dots \cap R_n$ is a region containing $x$.

**Theorem 2.19.** Let $A, B \subset C$. If $p$ is a limit point of $A \cup B$, then $p$ is a limit point of $A$ or $B$.

**Corollary 2.20.** Let $A_1, \ldots, A_n$ be $n$ subsets of $C$. If $p$ is a limit point of $A_1 \cup \dots \cup A_n$, then $p$ is a limit point of at least one of the sets $A_k$.

The converse is also true, so we have both directions:

**Corollary 2.21.** Let $A_1, \ldots, A_n$ be $n$ subsets of $C$. Then $p$ is a limit point of $A_1 \cup \dots \cup A_n$ if and only if $p$ is a limit point of at least one of the sets $A_k$.

**Definition 2.22.** Two sets $A$ and $B$ are **disjoint** if $A \cap B = \emptyset$.

**Theorem 2.23.** If $p$ and $q$ are distinct points of $C$, then there exist disjoint regions $R$ and $S$ containing $p$ and $q$, respectively.

**Corollary 2.24.** A subset of $C$ consisting of one point has no limit points.

**Theorem 2.25.** A finite subset $A \subset C$ has no limit points.

**2.26.** If $A \subset C$ is finite and $x \in A$, then there exists a region $R$ such that $A \cap R = \{x\}$.

**Definition 2.27.** A set is **infinite** if it is not finite.

**Theorem 2.28.** If $p$ is a limit point of $A$ and $R$ is a region containing $p$, then the set $R \cap A$ is infinite.

**Exercise 2.29.** Find realizations of the continuum $(C, <)$. That is, find concrete sets $C$ endowed with a relation $<$ satisfying all of the axioms (so far). Are they the same? What does "the same" mean here?