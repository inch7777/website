
# MATH 161, SHEET 5: GROUP ACTIONS AND CAYLEY'S THEOREM

This sheet introduces group actions—a powerful way of viewing groups as acting on sets—and proves Cayley's theorem, which shows that every group is isomorphic to a group of permutations. It also develops the orbit-stabilizer theorem and Cauchy's theorem.

**Commentary.** Group actions are one of the most versatile tools in group theory. By letting a group act on a set, we can study the group's structure through the orbits and stabilizers of the action. The orbit-stabilizer theorem is a counting tool that generalizes Lagrange's theorem. Cayley's theorem shows that every abstract group can be realized as a concrete group of permutations. Cauchy's theorem, which follows from group actions, provides the first partial converse to Lagrange's theorem.

---

## Group Actions

**Definition 5.1.** Let $G$ be a group and $X$ a nonempty set. A **(left) group action** of $G$ on $X$ is a function
$$\cdot: G \times X \to X, \qquad (g, x) \mapsto g \cdot x$$
such that for all $g, h \in G$ and $x \in X$:

1. $(gh) \cdot x = g \cdot (h \cdot x)$.
2. $e \cdot x = x$.

When such an action exists, we say that $G$ **acts on** $X$, and $X$ is called a **$G$-set**.

**【新增 5.1.1】 Theorem 5.1.1.** Let $G$ act on $X$. Then the map
$$\rho: G \to \operatorname{Sym}(X), \qquad \rho(g)(x) = g \cdot x$$
is a group homomorphism. Conversely, any group homomorphism $\rho: G \to \operatorname{Sym}(X)$ defines a group action by $g \cdot x = \rho(g)(x)$.

**Corollary 5.1.2.** A group action is faithful iff $\rho$ is injective.

**Example 5.2.** The symmetric group $S_n$ acts on $X = \{1, 2, \ldots, n\}$ by $\sigma \cdot i = \sigma(i)$.

**Example 5.3.** Any group $G$ acts on itself by left multiplication: $g \cdot x = gx$.

**Example 5.4.** Any group $G$ acts on itself by conjugation: $g \cdot x = gxg^{-1}$.

**Example 5.5.** The dihedral group $D_n$ acts on the vertices of a regular $n$-gon.

**Example 5.6.** $\mathrm{GL}_n(\mathbb{R})$ acts on $\mathbb{R}^n$ by matrix multiplication: $A \cdot v = Av$.

**Exercise 5.7.** Verify that left multiplication $g \cdot x = gx$ is indeed a group action.

**Exercise 5.8.** Verify that conjugation $g \cdot x = gxg^{-1}$ is indeed a group action.

**Exercise 5.9.** Let $G$ act on $X$. Prove that for each $g \in G$, the map $\sigma_g: X \to X$ defined by $\sigma_g(x) = g \cdot x$ is a bijection.

---

## Orbits and Stabilizers

**Definition 5.10.** Let $G$ act on $X$. For $x \in X$, the **orbit** of $x$ is:
$$Gx = \{g \cdot x \mid g \in G\}.$$

**Definition 5.11.** For $x \in X$, the **stabilizer** of $x$ is:
$$G_x = \{g \in G \mid g \cdot x = x\}.$$

**Theorem 5.12.** The orbits of a group action partition $X$.

**Theorem 5.13.** For each $x \in X$, the stabilizer $G_x$ is a subgroup of $G$.

**Theorem 5.14 (Orbit-Stabilizer Theorem).** If $G$ acts on $X$ and $x \in X$, then:
$$|Gx| = (G : G_x).$$
In particular, if $G$ is finite, then $|Gx|$ divides $|G|$.

**Example 5.15.** Let $S_3$ act on $X = \{1, 2, 3\}$. The stabilizer of $1$ is $G_1 = \{\iota, (23)\}$, which has order $2$. The orbit of $1$ is $\{1, 2, 3\}$, and indeed $3 = 6/2$.

**Exercise 5.16.** Let $D_4$ act on the vertices of a square. Find the orbit and stabilizer of vertex $1$.

**Exercise 5.17.** Let $G$ act on $X$. Prove that for $x, y \in X$, $Gx = Gy$ iff $y = gx$ for some $g \in G$.

---

## Fixed Points and the Class Equation

**【新增 5.18.1】 Theorem 5.18.1 (Conjugation Action).** Let $G$ act on itself by conjugation. Then:

1. The orbit of $g$ is its conjugacy class $Cl(g) = \{xgx^{-1} \mid x \in G\}$.
2. The stabilizer of $g$ is its centralizer $C_G(g) = \{x \in G \mid xg = gx\}$.
3. $$|Cl(g)| = (G : C_G(g)).$$
4. $g \in Z(G)$ iff $|Cl(g)| = 1$.

**Definition 5.19.** Let $G$ act on $X$. The set of **fixed points** of the action is:
$$X^G = \{x \in X \mid g \cdot x = x \text{ for all } g \in G\}.$$

**Definition 5.20.** Let $G$ act on itself by conjugation. The orbits are called **conjugacy classes**. The class equation is:
$$|G| = |Z(G)| + \sum_{i=1}^k |C_i|,$$
where $C_1, \ldots, C_k$ are the conjugacy classes with more than one element.

**Example 5.21.** In $S_3$, the conjugacy classes are $\{\iota\}$, $\{(12), (13), (23)\}$, and $\{(123), (132)\}$. The class equation is $6 = 1 + 3 + 2$.

**Exercise 5.22.** Find the conjugacy classes of $D_4$ and write the class equation.

**Exercise 5.23.** Prove that if $G$ acts on $X$, then the kernel of the induced homomorphism $G \to \operatorname{Sym}(X)$ is $\bigcap_{x \in X} G_x$.

---

## Cayley's Theorem

**Theorem 5.24 (Cayley's Theorem).** Every group $G$ is isomorphic to a subgroup of the symmetric group $\operatorname{Sym}(G)$.

**Corollary 5.25.** Every finite group of order $n$ is isomorphic to a subgroup of $S_n$.

**Example 5.26.** The cyclic group $\mathbb{Z}_3$ is isomorphic to a subgroup of $S_3$, namely $\langle (123) \rangle$.

**Example 5.27.** The Klein four-group $V_4$ is isomorphic to a subgroup of $S_4$.

**Exercise 5.28.** Find the image of $\mathbb{Z}_4$ under the Cayley embedding into $S_4$.

---

## Transitive and Faithful Actions

**Definition 5.29.** A group action is **transitive** if for all $x, y \in X$, there exists $g \in G$ such that $g \cdot x = y$. Equivalently, $X$ consists of a single orbit.

**Definition 5.30.** A group action is **faithful** if the map $G \to \operatorname{Sym}(X)$ is injective, i.e., if $g \cdot x = x$ for all $x \in X$ implies $g = e$.

**Theorem 5.31.** If $G$ acts transitively on $X$ and $x \in X$, then:
$$|X| = (G : G_x).$$

**Theorem 5.32.** The action is faithful iff $\bigcap_{x \in X} G_x = \{e\}$.

**Corollary 5.33.** The left regular action (action of $G$ on itself by left multiplication) is faithful.

**Exercise 5.34.** Let $G$ act on $X$ by conjugation. Describe the kernel of the induced homomorphism $G \to \operatorname{Sym}(G)$.

**Exercise 5.35.** Show that $D_n$ acts transitively on the vertices of a regular $n$-gon. Find the stabilizer of a vertex.

---

## Burnside's Lemma

**Definition 5.36.** For $g \in G$, let $\operatorname{Fix}(g) = \{x \in X \mid g \cdot x = x\}$.

**Theorem 5.37 (Burnside's Lemma).** If $G$ is finite and acts on a finite set $X$, then the number of orbits is:
$$\frac{1}{|G|} \sum_{g \in G} |\operatorname{Fix}(g)|.$$

**Example 5.38.** How many inequivalent colorings of the vertices of a square are there using two colors? The dihedral group $D_4$ acts on the $2^4 = 16$ colorings. Burnside's Lemma gives:
- Identity: fixes $16$
- Rotations by $90^\circ$ and $270^\circ$: fix $2$ each
- Rotation by $180^\circ$: fixes $4$
- Reflections: fix $4$ each

Total orbits = $(16 + 2 + 2 + 4 + 4 + 4 + 4 + 4)/8 = 40/8 = 5$.

**Exercise 5.39.** How many inequivalent ways are there to color the vertices of a triangle using three colors?

**Exercise 5.40.** Use Burnside's Lemma to count the number of distinct necklaces with $6$ beads, each bead either black or white.

**Exercise 5.41.** How many inequivalent ways are there to color the edges of a square using two colors?


---

## Cauchy's Theorem

**Theorem 5.42 (Cauchy's Theorem).** Let $G$ be a finite group and let $p$ be a prime dividing $|G|$. Then $G$ has an element of order $p$.

**Corollary 5.43.** If $p$ divides $|G|$, then $G$ has a subgroup of order $p$.

**Example 5.44.** Every group of order $6$ has an element of order $2$ and an element of order $3$.

**Exercise 5.45.** Use Cauchy's theorem to prove that every group of order $2p$ (where $p$ is an odd prime) has a normal subgroup of order $p$.

**Exercise 5.46.** Let $G$ be a finite group and let $p$ be a prime dividing $|G|$. Prove that $G$ has a subgroup of order $p$ using Cauchy's theorem.

---

## Summary

We have introduced:

- Group actions: definition and examples
- Group actions as homomorphisms $G \to \operatorname{Sym}(X)$
- Orbits and stabilizers
- Orbit-Stabilizer Theorem
- Conjugation action: conjugacy classes and centralizers
- Fixed points and the class equation
- Cayley's Theorem: every group is a permutation group
- Transitive and faithful actions
- Burnside's Lemma for counting orbits
- Cauchy's Theorem: existence of elements of prime order
