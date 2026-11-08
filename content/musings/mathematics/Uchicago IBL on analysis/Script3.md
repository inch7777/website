# MATH 161, SHEET 3: TOPOLOGY OF THE CONTINUUM

In this sheet we give the continuum $C$ a topology. Roughly speaking, this is a way to describe how the points of $C$ are 'glued together'.

**Definition 3.1.** A subset of the continuum is **closed** if it contains all of its limit points.

**Theorem 3.2.** The sets $\emptyset$ and $C$ are closed.

**Theorem 3.3.** A subset of $C$ containing a finite number of points is closed.

**Definition 3.4.** Let $X$ be a subset of $C$. The **closure** of $X$ is the subset $\overline{X}$ of $C$ defined by:

$$
\overline{X} = X \cup \{x \in C \mid x \text{ is a limit point of } X\}.
$$

**Theorem 3.5.** $X \subset C$ is closed if and only if $X = \overline{X}$.

**Theorem 3.6.** The closure of $X \subset C$ satisfies $\overline{X} = \overline{\overline{X}}$.

**Corollary 3.7.** Given any subset $X \subset C$, the closure $\overline{X}$ is closed.

**Definition 3.8.** A subset $U$ of the continuum is **open** if its complement $C \setminus U$ is closed.

~={orange}Doesn't mean that not closed=open. For example: $(0,1]$=~

**Theorem 3.9.** The sets $\emptyset$ and $C$ are open.

The following is a very useful criterion to determine whether a set of points is open.

**Theorem 3.10.** Let $U \subset C$. Then $U$ is open if and only if for all $x \in U$, there exists a region $R$ such that $x \in R \subset U$.

**Corollary 3.11.** Every region $R$ is open. Every complement of a region $C \setminus R$ is closed.

**Corollary 3.12.** Let $a \in C$. Then the sets $\{x \mid x < a\}$ and $\{x \mid a < x\}$ are open.

~={orange}**Theorem 3.13.** Let $U$ be a nonempty open set. Then $U$ is the union of a collection of regions.=~

**Exercise 3.14.** Do there exist subsets $X \subset C$ that are neither open nor closed?

**Theorem 3.15.** Let $\{X_\lambda\}$ be an arbitrary collection of closed subsets of the continuum. Then the intersection $\bigcap_\lambda X_\lambda$ is closed.

**Theorem 3.16.** Let $U_1, \ldots, U_n$ be a finite collection of open subsets of the continuum. Then the intersection $U_1 \cap \dots \cap U_n$ is open.

~={red}**Exercise 3.17.** Is it necessarily the case that the intersection of an infinite number of open sets is open?=~



**Theorem 3.18.** Let $\{U_\lambda\}$ be an arbitrary collection of open subsets of the continuum. Then the union $\bigcup_\lambda U_\lambda$ is open. Let $X_1, \ldots, X_n$ be a finite collection of closed subsets of the continuum. Then the union $X_1 \cup \dots \cup X_n$ is closed.

Theorem 3.9 and Corollary 3.18 say that the collection $\mathcal{T}$ of open subsets of the continuum is a topology on $C$, in the following sense:

**Definition 3.19.** Let $X$ be any set. A **topology** on $X$ is a collection $\mathcal{T}$ of subsets of $X$ that satisfy the following properties:

1. $X$ and $\emptyset$ are elements of $\mathcal{T}$.
2. The union of an arbitrary collection of sets in $\mathcal{T}$ is also in $\mathcal{T}$.
3. The intersection of a finite number of sets in $\mathcal{T}$ is also in $\mathcal{T}$.

The elements of $\mathcal{T}$ are called the **open sets** of $X$. The set $X$ with the structure of the topology $\mathcal{T}$ is called a **topological space**.

**Theorem 3.13** says that every nonempty open set is the union of a collection of regions. This necessary condition for open sets is also sufficient:

**Theorem 3.20.** Let $U \subset C$ be nonempty. Then $U$ is open if and only if $U$ is the union of a collection of regions.

**Definition 3.21.** A topological space $X$ is **discrete** if every subset of $X$ is open.

**Exercise 3.22.** Find a realization of the continuum that is discrete. Must every realization be discrete?

**Definition 3.23.** Let $A$ and $B$ be nonempty disjoint subsets of a topological space $X$. We say that $A$ and $B$ are **separated** if each contains no point of the closure of the other, i.e. $A \cap \overline{B} = \emptyset$ and $\overline{A} \cap B = \emptyset$.

**Theorem 3.24.** Let $ab$ be a region in $C$. Then the sets $ab$ and $\operatorname{ext} ab$ are separated.

**Definition 3.25.** Let $X$ be a topological space. $X$ is **disconnected** if it may be written as the union $X = A \cup B$ of two separated sets. $X$ is **connected** if it is not disconnected.

**Exercise 3.26.** Is the continuum connected?