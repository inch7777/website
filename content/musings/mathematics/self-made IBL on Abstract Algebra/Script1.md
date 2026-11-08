
# MATH 161, SHEET 1: BINARY OPERATIONS AND GROUPS

This sheet introduces the fundamental objects of abstract algebra: sets equipped with operations. We begin with binary operations and build toward the definition of a group.

**Commentary.** The concept of a group abstracts the idea of symmetry. Just as the symmetries of a geometric object can be composed and inverted, the elements of a group can be combined and inverted. Groups appear throughout mathematics—in geometry, number theory, physics, and beyond. The definition is intentionally minimal: only three axioms are needed to capture this rich structure.

---

## Binary Operations

**Definition 1.1.** Let $S$ be a nonempty set. A **binary operation** on $S$ is a function
$$*: S \times S \to S.$$
For $a, b \in S$, we write $a * b$ for the image of $(a, b)$.

We call $S$ is closed under the operation $*$ when $ab \in S$ for all $a, b \in S$

**Definition 1.2.** A binary operation $*$ on $S$ is **associative** if for all $a, b, c \in S$:
$$(a * b) * c = a * (b * c).$$

**Definition 1.3.** A binary operation $*$ on $S$ is **commutative** if for all $a, b \in S$:
$$a * b = b * a.$$

**Definition 1.4.** An **identity element** for a binary operation $*$ on $S$ is an element $e \in S$ such that for all $a \in S$:
$$a * e = a \quad \text{and} \quad e * a = a.$$

**Theorem 1.5.** If a binary operation has an identity element, it is unique.

**Definition 1.6.** If $*$ on $S$ has identity $e$, then for $a \in S$, an **inverse** of $a$ is an element $b \in S$ such that:
$$a * b = e \quad \text{and} \quad b * a = e.$$

**Theorem 1.7.** If a binary operation is associative and an element has an inverse, that inverse is unique.

**Example 1.8.** Addition $+$ on $\mathbb{Z}$ is associative, commutative, has identity $0$, and every $n \in \mathbb{Z}$ has inverse $-n$.

**Example 1.9.** Multiplication $\cdot$ on $\mathbb{Q}^*$ (nonzero rationals) is associative, commutative, has identity $1$, and every $q$ has inverse $1/q$.

**Example 1.10.** Subtraction on $\mathbb{Z}$ is neither associative nor commutative.

**Exercise 1.11.** Determine whether each operation is associative and/or commutative:

(a) Addition on $\mathbb{N}$.

(b) Multiplication on $\mathbb{Z}$.

(c) Division on $\mathbb{Q}^*$.

(d) $\max(a, b)$ on $\mathbb{Z}$.

**Exercise 1.12.** Let $S = \{a, b\}$. How many binary operations can be defined on $S$?

---

## Groups

**Definition 1.13.** A **group** is a set $G$ together with a binary operation $*$ satisfying:

1. **(Associativity)** $(a * b) * c = a * (b * c)$ for all $a, b, c \in G$.

2. **(Identity)** There exists $e \in G$ such that $a * e = e * a = a$ for all $a \in G$.

3. **(Inverses)** For every $a \in G$, there exists $a^{-1} \in G$ such that $a * a^{-1} = a^{-1} * a = e$.

**Definition 1.14.** A group is **abelian** (or commutative) if $a * b = b * a$ for all $a, b \in G$.

**Theorem 1.15.** In any group $G$:

1. The identity element is unique.
2. The inverse of each element is unique.
3. $(a^{-1})^{-1} = a$ for all $a \in G$.
4. $(a * b)^{-1} = b^{-1} * a^{-1}$ for all $a, b \in G$.

**Theorem 1.16 (Cancellation Laws).** In any group $G$, if $a * b = a * c$, then $b = c$. Similarly, if $b * a = c * a$, then $b = c$.

**Theorem 1.17.** In any group $G$, the equation $a * x = b$ has a unique solution for $x \in G$ for any $a, b \in G$.

**Definition 1.17.1.** Let $n$ be a positive integer. For $a \in G$, define:
$$a^n = \underbrace{a * a * \cdots * a}_{n \text{ times}}, \qquad a^{-n} = (a^{-1})^n, \qquad a^0 = e.$$

**Theorem 1.17.2 (Laws of Exponents).** For any $a \in G$ and $m, n \in \mathbb{Z}$:
$$a^m a^n = a^{m+n}, \qquad (a^m)^n = a^{mn}.$$

**Example 1.18.** $(\mathbb{Z}, +)$ is an abelian group.

**Example 1.19.** $(\mathbb{Q}^*, \cdot)$ is an abelian group.

**Example 1.20.** $(\mathbb{Z}_n, +_n)$ is an abelian group.

**Example 1.21.** The set of all bijections from a set $X$ to itself, with composition, forms a group denoted $\operatorname{Sym}(X)$. When $X = \{1, 2, \ldots, n\}$, this is $S_n$, the **symmetric group** on $n$ elements.

**Definition (Symmetric Group).** Let $n$ be a positive integer. The **symmetric group** $S_n$ is the set of all bijections (permutations) from the set $\{1, 2, \ldots, n\}$ to itself, with the operation of composition of functions. Its order is $|S_n| = n!$.

**Example 1.22.** The set of invertible $n \times n$ matrices over $\mathbb{R}$, with matrix multiplication, forms the **general linear group** $\mathrm{GL}_n(\mathbb{R})$.

**Example 1.23.** The **dihedral group** $D_n$ is the group of symmetries of a regular $n$-gon. It has $2n$ elements: $n$ rotations and $n$ reflections.

**Exercise 1.24.** Show that $(\mathbb{Z}, \cdot)$ is not a group.

**Exercise 1.25.** Show that the set $\{1, -1\}$ with multiplication is a group.

**Exercise 1.26.** 

**Exercise 1.27.** Prove that if $G$ has exactly two elements, it is abelian.

**Exercise 1.28.** Let $G$ be a group such that $a^2 = e$ for all $a \in G$. Prove that $G$ is abelian.

---

## Cayley Tables

**Definition 1.29.** A **Cayley table** (or group table) for a finite group $(G, *)$ is a table whose rows and columns are labeled by elements of $G$, and whose entry in row $a$ and column $b$ is $a * b$.

**Theorem 1.30.** In any Cayley table for a group, each element appears exactly once in each row and exactly once in each column.
answer.


## Summary

We have introduced:

- Binary operations: associativity, commutativity, identity, inverses
- The definition of a group
- Abelian groups
- Elementary properties: uniqueness of identity and inverses, cancellation laws, unique solutions to equations
- Cayley tables for finite groups
- Laws of exponents
- Examples: $\mathbb{Z}$, $\mathbb{Q}^*$, $\mathbb{Z}_n$, $S_n$, $\mathrm{GL}_n(\mathbb{R})$, $D_n$
