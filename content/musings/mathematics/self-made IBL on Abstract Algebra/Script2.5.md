
# MATH 161, SHEET 2.5: PERMUTATIONS

This sheet introduces permutations—bijections from a set to itself—and their properties. Permutations form the symmetric group $S_n$, which is the prototypical example of a non-abelian group and the foundation for Galois theory.

**Commentary.** Permutations are one of the oldest and most important objects in algebra. They arise naturally in counting problems, geometry, and the study of polynomial equations. The fact that every group can be realized as a group of permutations (Cayley's Theorem, Sheet 5) makes permutations fundamental to all of group theory.

---

## Definition of Permutations

**Definition 2.5.1.** Let $X$ be a nonempty set. A **permutation** of $X$ is a bijection $\sigma: X \to X$.

**Definition 2.5.2.** The set of all permutations of $X$, with the operation of composition of functions, is called the **symmetric group** on $X$, denoted $\operatorname{Sym}(X)$ or $S_X$.

**Definition 2.5.3.** When $X = \{1, 2, \ldots, n\}$, we write $S_n$ for the symmetric group on $n$ elements. The elements of $S_n$ are called **permutations of degree $n$**.

**Theorem 2.5.4.** For any nonempty set $X$, $\operatorname{Sym}(X)$ is a group under composition. (See Sheet 1.)

**Theorem 2.5.5.** The order of $S_n$ is $|S_n| = n!$.

**Example 2.5.6.** $S_3$ has $3! = 6$ elements: the identity, three transpositions, and two 3-cycles.

**Exercise 2.5.7.** Let $X = \{1, 2, 3\}$. List all 6 permutations of $X$. Write them in two-row notation.

**Exercise 2.5.8.** Show that $S_n$ is non-abelian for $n \geq 3$. (Hint: Compute $(1 \ 2)(1 \ 3)$ and $(1 \ 3)(1 \ 2)$.)

---

## Two-Row Notation

**Definition 2.5.9.** A permutation $\sigma \in S_n$ can be written in **two-row notation** as:
$$\sigma = \begin{pmatrix} 1 & 2 & \cdots & n \\ \sigma(1) & \sigma(2) & \cdots & \sigma(n) \end{pmatrix}.$$

**Example 2.5.10.** The permutation $\sigma \in S_3$ with $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 1$ is written:
$$\sigma = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \end{pmatrix}.$$

**Exercise 2.5.11.** Write the permutation $\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 \\ 3 & 1 & 4 & 2 \end{pmatrix}$ in two-row notation with the top row in order.

**Exercise 2.5.12.** Compute the product $\sigma \circ \tau$ where:
$$\sigma = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 1 & 3 \end{pmatrix}, \qquad \tau = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 3 & 2 \end{pmatrix}.$$
Is $\sigma \circ \tau = \tau \circ \sigma$?

---

## Cycle Notation

**Definition 2.5.13.** A **cycle** of length $k$ is a permutation $(a_1 \ a_2 \ \cdots \ a_k)$ that sends $a_i \mapsto a_{i+1}$ for $1 \leq i < k$, sends $a_k \mapsto a_1$, and fixes all other elements.

**Definition 2.5.14.** A cycle of length 2 is called a **transposition**.

**Definition 2.5.15.** Two cycles are **disjoint** if they have no elements in common.

~={red}**Theorem 2.5.16.** Every permutation can be written uniquely (up to order) as a product of disjoint cycles.=~

**Example 2.5.17.** The permutation
$$\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\ 3 & 5 & 1 & 6 & 2 & 4 \end{pmatrix}$$
has disjoint cycle decomposition $(1 \ 3)(2 \ 5)(4 \ 6)$.

**Example 2.5.18.** The cycle $(1 \ 3 \ 5 \ 2)$ sends $1 \mapsto 3$, $3 \mapsto 5$, $5 \mapsto 2$, $2 \mapsto 1$, and fixes all other elements.

**Exercise 2.5.19.** Write the following permutation in disjoint cycle notation:
$$\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\ 4 & 5 & 6 & 7 & 1 & 2 & 3 \end{pmatrix}.$$

**Exercise 2.5.20.** Compute the product of cycles $(1 \ 2 \ 3)(2 \ 3 \ 4)$ in $S_4$. Write the result in disjoint cycle notation.

**Exercise 2.5.21.** Show that $(a_1 \ a_2 \ \cdots \ a_k) = (a_1 \ a_k)(a_1 \ a_{k-1}) \cdots (a_1 \ a_2)$. (Hint: Compute the product of transpositions.)

---

## Order of a Permutation

**Definition 2.5.22.0**  
Let $\sigma$ be a permutation of a finite set. The **order** of $\sigma$, denoted $|\sigma|$ is the smallest positive integer $n$ such that
$$
\sigma^n=1
$$

where 1 denotes the **identity permutation** (i.e., the permutation that fixes every element). 
If no such positive integer exists, the order is said to be infinite (though for permutations of a finite set, the order is always finite).

**Theorem 2.5.22.** The order of a cycle $(a_1 \ a_2 \ \cdots \ a_k)$ is $k$.

**Theorem 2.5.23.** If $\sigma = \sigma_1 \sigma_2 \cdots \sigma_r$ is a product of disjoint cycles of lengths $k_1, k_2, \ldots, k_r$, then:
$$|\sigma| = \operatorname{lcm}(k_1, k_2, \ldots, k_r).$$

**Example 2.5.24.** The permutation $\sigma = (1 \ 2 \ 3)(4 \ 5)$ has order $\operatorname{lcm}(3, 2) = 6$.

**Exercise 2.5.25.** Find the order of $(1 \ 2 \ 3 \ 4)(5 \ 6 \ 7)$.

**Exercise 2.5.26.** Find the order of $(1 \ 2)(3 \ 4 \ 5 \ 6)$.

---

## Transpositions and Parity

**Definition 2.5.27.** A **transposition** is a cycle of length 2, i.e., a permutation $(i \ j)$ that swaps $i$ and $j$ and fixes all other elements.

**Theorem 2.5.28.** Every permutation can be written as a product of transpositions.

By exercise 2.521.

**Example 2.5.29.** $(1 \ 2 \ 3 \ 4) = (1 \ 4)(1 \ 3)(1 \ 2)$.

**Definition 2.5.30.** A permutation is **even** if it can be expressed as a product of an even number of transpositions. It is **odd** if it can be expressed as a product of an odd number of transpositions.

**Theorem 2.5.31 (Well-Definedness).** No permutation can be both even and odd.

多项式证法

**Theorem 2.5.32.** A cycle of length $k$ is even iff $k$ is odd. That is:
- A cycle of odd length is even.
- A cycle of even length is odd.

**Example 2.5.33.** $(1 \ 2 \ 3)$ is even (product of 2 transpositions). $(1 \ 2 \ 3 \ 4)$ is odd (product of 3 transpositions).

**Exercise 2.5.34.** Determine whether the following permutations are even or odd:
(a) $(1 \ 2 \ 3 \ 4 \ 5)$
(b) $(1 \ 2)(3 \ 4 \ 5)$
(c) $(1 \ 2 \ 3)(4 \ 5)$

---

~={orange}## The Alternating Group=~

**Definition 2.5.35.** The set of all even permutations in $S_n$ forms a subgroup called the **alternating group** $A_n$.

**Theorem 2.5.36.** For $n \geq 2$, the order of $A_n$ is $|A_n| = n!/2$.

**Theorem 2.5.37.** $A_n \triangleleft S_n$ for $n \geq 2$.

**Example 2.5.38.** $A_3 = \{\iota, (1 \ 2 \ 3), (1 \ 3 \ 2)\} \cong \mathbb{Z}_3$.

**Example 2.5.39.** $A_4$ has order 12 and contains the Klein four-group $V_4 = \{\iota, (1 \ 2)(3 \ 4), (1 \ 3)(2 \ 4), (1 \ 4)(2 \ 3)\}$.

**Exercise 2.5.40.** List all elements of $A_4$.

**Exercise 2.5.41.** Show that $A_3$ is cyclic but $A_4$ is not.

**Exercise 2.5.42.** Prove that $A_n$ is generated by the set of all 3-cycles for $n \geq 3$.

---

~={orange}## Conjugacy in $S_n$=~  （need to refine the def of conjuacy"

**Theorem 2.5.43.** Two permutations in $S_n$ are conjugate iff they have the same cycle type. That is, $\sigma, \tau \in S_n$ are conjugate iff their disjoint cycle decompositions have the same number of cycles of each length.

**Example 2.5.44.** In $S_5$, $(1 \ 2 \ 3)(4 \ 5)$ and $(1 \ 3 \ 5)(2 \ 4)$ are conjugate (both have one 3-cycle and one 2-cycle).

**Example 2.5.45.** In $S_4$, $(1 \ 2)(3 \ 4)$ and $(1 \ 2 \ 3)$ are not conjugate (different cycle types).

**Exercise 2.5.46.** Find the conjugacy class of $(1 \ 2 \ 3)$ in $S_4$. How many elements does it have?

**Exercise 2.5.47.** How many conjugacy classes are there in $S_3$? List them.

---

~={orange}## Generators of $S_n$=~  Def not clear enough

**Theorem 2.5.48.** $S_n$ is generated by the set of all transpositions.

**Theorem 2.5.49.** $S_n$ is generated by $\{(1 \ 2), (1 \ 3), \ldots, (1 \ n)\}$.

**Theorem 2.5.50.** $S_n$ is generated by the transposition $(1 \ 2)$ and the $n$-cycle $(1 \ 2 \ 3 \ \cdots \ n)$.

**Theorem 2.5.51.** $A_n$ is generated by the set of all 3-cycles.

**Exercise 2.5.52.** Show that $S_3$ is generated by $(1 \ 2)$ and $(1 \ 2 \ 3)$.

**Exercise 2.5.53.** Show that $A_4$ is generated by $(1 \ 2 \ 3)$ and $(1 \ 2 \ 4)$.

---

## Summary

We have introduced:

- Permutations as bijections from a set to itself
- The symmetric group $S_n$ and its order
- Two-row notation and cycle notation
- Composition of permutations
- The order of a permutation (lcm of cycle lengths)
- Transpositions and parity (even/odd permutations)
- The alternating group $A_n$
- Conjugacy in $S_n$ (same cycle type)
- Generators of $S_n$ and $A_n$