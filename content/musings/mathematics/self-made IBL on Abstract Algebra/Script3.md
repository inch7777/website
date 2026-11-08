# MATH 161, SHEET 3: COSETS, LAGRANGE'S THEOREM, AND NORMAL SUBGROUPS

This sheet introduces cosets, derives Lagrange's Theorem—one of the most important counting theorems in group theory—and defines normal subgroups.

**Commentary.** Cosets are the fundamental tool for understanding the relationship between a group and its subgroups. They partition a group into equal-sized pieces, which leads directly to Lagrange's Theorem: the order of any subgroup divides the order of the group. This simple counting theorem has profound consequences—it tells us, for example, that every group of prime order is cyclic, and that the order of every element divides the order of the group. Normal subgroups, which are subgroups whose left and right cosets coincide, are exactly the subgroups that can serve as kernels of homomorphisms.

## Equivalence Relations and Equivalence Classes

**Definition 3.0.1(Equivalence Relation).** Let $S$ be a set. A relation $\sim$ on $S$ is an **equivalence relation** if for all $a, b, c \in S$:

1. **Reflexive:** $a \sim a$.
2. **Symmetric:** If $a \sim b$, then $b \sim a$.
3. **Transitive:** If $a \sim b$ and $b \sim c$, then $a \sim c$.

**Definition 3.0.2 (Equivalence Class).** For $a \in S$, the **equivalence class** of $a$ is:
$$[a] = \{x \in S \mid x \sim a\}.$$

The set of all equivalence classes is denoted $S/\sim$.

**Theorem 3.0.3(Equivalence Classes Partition the Set).** If $\sim$ is an equivalence relation on $S$, then the equivalence classes of $\sim$ form a partition of $S$. That is:
- Every element of $S$ belongs to at least one equivalence class.
- If two equivalence classes intersect, they are equal.

**Theorem 3.0.4(Equivalence Relation from a Partition).** Conversely, if $S$ is partitioned into a collection of nonempty disjoint subsets, then the relation $a \sim b$ iff $a$ and $b$ belong to the same subset is an equivalence relation.

**Corollary.3.0.5** There is a one-to-one correspondence between equivalence relations on $S$ and partitions of $S$.

**Example.3.0.6** On $\mathbb{Z}$, define $a \sim b$ iff $a - b$ is divisible by $n$. The equivalence classes are the residue classes modulo $n$:
$$[0], [1], \ldots, [n-1].$$

**Remark.** In Sheet 3, left cosets of a subgroup $H$ in a group $G$ are precisely the equivalence classes of the relation $a \sim b$ iff $a^{-1}b \in H$. In Sheet 8, ideals and quotient rings use the same construction.
## Cosets

**Definition 3.1.** Let $H \leq G$ and $a \in G$. The **left coset** of $H$ in $G$ containing $a$ is:
$$aH = \{ah \mid h \in H\}.$$
The **right coset** of $H$ in $G$ containing $a$ is:
$$Ha = \{ha \mid h \in H\}.$$

**Theorem 3.2.**  Let $H \leq G$. The left cosets of $H$ in $G$ form a partition of $G$.

**Theorem 3.3.** For any $a \in G$, the map $h \mapsto ah$ is a bijection from $H$ to $aH$. Hence all left cosets have the same cardinality as $H$.

**Theorem 3.4.** For $a, b \in G$, the following are equivalent:

1. $aH = bH$
2. $a^{-1}b \in H$
3. $b \in aH$
4. $a \in bH$

**Theorem 3.5.** Two left cosets of $H$ in $G$ are either equal or disjoint.

**Example 3.6.** In $\mathbb{Z}$, the cosets of $3\mathbb{Z}$ are:
$$3\mathbb{Z}, \quad 1 + 3\mathbb{Z}, \quad 2 + 3\mathbb{Z}.$$

**Example 3.7.** In $S_3$, let $H = \{\iota, (12)\}$. The left cosets are:
$$H = \{\iota, (12)\}, \quad (13)H = \{(13), (123)\}, \quad (23)H = \{(23), (132)\}.$$

**Exercise 3.8.** Let $G = \mathbb{Z}_{12}$ and $H = \langle 3 \rangle$. List all left cosets of $H$ in $G$.

**Exercise 3.9.** Let $G = D_4$ and $H = \langle \rho \rangle$ (the rotations). List all left cosets of $H$ in $G$.

---

## Connecting Cosets to Equivalence Classes

**Theorem 3.9.1(Cosets as Equivalence Classes).** Let $H \leq G$. Define a relation $\sim_L$ on $G$ by:
$$a \sim_L b \iff a^{-1}b \in H.$$

Then $\sim_L$ is an equivalence relation, and for each $a \in G$, the equivalence class of $a$ is:
$$[a] = aH = \{ah \mid h \in H\}.$$

 Similarly, define $a \sim_R b \iff ab^{-1} \in H$. Then $\sim_R$ is an equivalence relation, and the equivalence class of $a$ is:
$$[a] = Ha = \{ha \mid h \in H\}.$$

**Remark.** The correspondence between equivalence classes and cosets is the reason we can form quotient groups $G/H$: the elements of $G/H$ are equivalence classes under $\sim_L$, and the coset multiplication is well-defined when $H$ is normal.

---

## Lagrange's Theorem

**Theorem 3.10 (Lagrange's Theorem).** If $G$ is finite and $H \leq G$, then $|H|$ divides $|G|$. Moreover,
$$|G| = (G:H) \cdot |H|,$$
where $(G:H)$ is the **index** of $H$ in $G$, i.e., the number of distinct left cosets of $H$ in $G$; $G$ is finite if there exists $n\in \mathbb{N}$, $|G|=n$

**Corollary 3.11.** The order of any element of a finite group divides the order of the group.

~={red}Say $a\in G$, consider $<a>\leq G$ and $|<a>|=|a|$. =~
~={red}By Theorem 3.10, $|a|$ devides $|G|$.=~

**Corollary 3.12.** Every group of prime order is cyclic.

~={red}By corollary 3.11, we know that the order of all elements in $G$ with a prime order $p$, is either $p$ or 1. =~
~={red}Pick $a, b$ that $a\neq b\in G$, $a^p=b^p=e$.=~
~={red}Suppose for contradiction that $a\neq b^k$, $k\in \mathbb{Z}$ then $a^{p}\neq b^{pk}=(b^{p})^k=e^k=e$.=~
~={red}Contradiction arises.=~
~={red}Thus, the supposition is wrong, $a=b^k$.=~
~={red}So except from the identity with the order of 1, all other elements could be expressed as other elements to k powers. That fits the definition of cyclic group.=~

~={red}Alternative proof: We have $<a>\leq G$ and prove $<a> =G$. Then G is cyclic.=~

**Corollary 3.13.** If $G$ is finite of order $n$, then $a^n = e$ for every $a \in G$.

~={red}By theorem 3.11.=~

**Corollary 3.14.** If $H \leq G$ and $K \leq H$, then $(G:K) = (G:H)(H:K)$.

~={red}Use Lagrange's Theorem respectively to G,H; G,K, and H,K.=~

**Theorem 3.15.** If $(G:H) = 2$, then $H$ contains the square of every element of $G$.

~={red}Theorem 3.4. what about the intuition solution here?=~



**Example 3.16.** A group of order $7$ is cyclic; every nonidentity element is a generator.

**Exercise 3.17.** Let $G$ be a group of order $pq$ where $p$ and $q$ are distinct primes. Show that every proper subgroup of $G$ is cyclic.

~={orange}**Exercise 3.19.** Show that a group of order $15$ has an element of order $3$ and an element of order $5$.=~

**Exercise 3.20.** Prove that if $G$ is a finite group and $H \leq G$ with $(G:H) = p$ where $p$ is the smallest prime dividing $|G|$, then $H$ is normal in $G$.

---

## Normal Subgroups

**Definition 3.21.** A subgroup $N \leq G$ is **normal** in $G$, denoted $N \triangleleft G$, if for all $g \in G$ and $n \in N$:
$$gng^{-1} \in N.$$

**Theorem 3.22.** The following are equivalent for $N \leq G$:

1. $N \triangleleft G$.
2. $gNg^{-1} = N$ for all $g \in G$.
3. $gN = Ng$ for all $g \in G$.
4. $N$ is the kernel of some homomorphism from $G$ to another group. ~={red}(no need to do it until u know what the kernel and homomorphism are)=~
5. Every left coset of $N$ is also a right coset of $N$.

**Theorem 3.23.** If $N \triangleleft G$, then the set of cosets $G/N$ forms a group under the operation:
$$(aN)(bN) = (ab)N.$$

~={red}1, This operation is Closed--$(ab)N$ is a coset of G.=~
~={red}2, Identity: $(aN)(N)=aN\implies N$ is identity.=~
~={red}3, Inverse: $(aN)(a^{-1}N)=(a^{-1}a)N=N$=~
~={red}4, Associativity: $[(aN)(bN)](cN)=[(ab)N](cN)=(abc)N=(aN)[(bN)(cN)]=(aN)[(bc)N]=(abc)N$=~

**Example 3.24.** Every subgroup of an abelian group is normal.

~={orange}**Example 3.25.** $A_n \triangleleft S_n$.=~

**Example 3.26.** The subgroup of rotations in $D_n$ is normal. The subgroup generated by a reflection is not normal when $n \geq 3$.

**Theorem 3.27.** The intersection of normal subgroups is normal.

~={orange}**Theorem 3.28.** If $H \leq G$ and $(G:H) = 2$, then $H \triangleleft G$.=~

**Theorem 3.29.** If $N \triangleleft G$ and $H \leq G$, then $N \cap H \triangleleft H$.

~={red}First of all, $N \cap H\leq H$.=~
~={red}Secondly, we prove it is normal.=~
~={red}Let $n\in N\cap H$ i.e. $n\in N$ and $n\in H$=~
~={red}Because H is closed, for all $h\in H$, $hnh^{-1}\in H$  .=~
~={red}By $N\triangleleft G$ and $h\in G$, $hnh^{-1}\in N$.=~
~={red}Thus, for all $h\in H,$ $hnh^{-1}\in N\cap H.$=~
~={red}Overall,  $N \cap H \triangleleft H$.=~

~={orange}**Theorem 3.30.** If $N \triangleleft G$ and $H \leq G$ with $N \leq H$, then $H/N \leq G/N$. Moreover, $H/N \triangleleft G/N$ iff $H \triangleleft G$.=~

**Theorem 3.31.** If $N \triangleleft G$ and $H \leq G$, then $HN = \{hn \mid h \in H, n \in N\}$ is a subgroup of $G$.

~={red}$|HN|\leq |G|$=~
~={red}$e\in HN$.=~
~={red}Associativity holds.=~
~={red}All the $h$ and $n$ are in $HN$ $(he=h,en=n)$.=~
~={red}Closed: $hnh_{1}n_{1}=(hnh_{1})n=n'n=n_{0}\in HN$ (By N is normal, N is closed and $n\in HN$ respectively.)=~
~={red}Since it's closed, and that for arbitrary $h ,n$ ; $n^{-1},h^{-1}\in HN$, =~
~={red}the inverse of $hn$, $n^{-1}h^{-1}\in HN$.=~
~={red}Therefore,  $HN = \{hn \mid h \in H, n \in N\}$ is a subgroup of $G$.=~


**Theorem 3.32.** If $N \triangleleft G$ and $M \triangleleft G$, then $NM \triangleleft G$.

~={red}$gnmg^{-1}=gnemg^{-1}=gn(g^{-1}g)mg^{-1}=(gng^{-1})(gmg^{-1})=n'm'\in NM$=~

~={orange}**Exercise 3.33.** Show that $A_3 \triangleleft S_3$.=~


~={orange}**Exercise 3.37.** Let $N \triangleleft G$. Prove that if $a \in G$ has finite order, then the order of $aN$ in $G/N$ divides the order of $a$.=~

---

## The Quotient Group

**Definition 3.38.** Let $N \triangleleft G$. The **quotient group** (or **factor group**) $G/N$ is the set of left cosets of $N$ in $G$ with operation:
$$(aN)(bN) = (ab)N.$$

**Theorem 3.39.** If $N \triangleleft G$, then $G/N$ is a group.

~={red}Theorem 3.23.=~

~={orange}**Theorem 3.40 (The Natural Homomorphism).** If $N \triangleleft G$, the map=~
~={orange}$$\pi: G \to G/N, \qquad \pi(g) = gN$$=~
~={orange}is a surjective homomorphism with kernel $N$.=~

**Theorem 3.41.** If $G$ is cyclic, then every quotient group $G/N$ is cyclic.

**Theorem 3.42.** If $G$ is abelian, then every quotient group $G/N$ is abelian.

**Theorem 3.43.** If $G$ is finite, then $|G/N| = |G|/|N|$.

By lagrange theorem.

**Theorem 3.44.** If $N \triangleleft G$ and $G/N$ is finite, then for every $g \in G$:
$$g^{|G/N|} \in N.$$

~={red}Now normal group is not only about itself and its definition. It's an elements in the quotient group whose properties can be used.=~

**Example 3.45.** $\mathbb{Z}/n\mathbb{Z} \cong \mathbb{Z}_n$.

**Example 3.46.** $S_n/A_n \cong \mathbb{Z}_2$.

**Example 3.47.** $D_n/\langle \rho \rangle \cong \mathbb{Z}_2$ (where $\rho$ is rotation).

**Exercise 3.48.** Let $G = \mathbb{Z}_{12}$ and $N = \langle 3 \rangle$. List the elements of $G/N$ and write its Cayley table. To which familiar group is $G/N$ isomorphic?

**Exercise 3.49.** Let $G = D_4$ and $N = \langle \rho^2 \rangle$. Compute $G/N$. Is it abelian?

**Exercise 3.50.** Let $G$ be a group and $N \triangleleft G$. Prove that if $G/N$ and $N$ are both cyclic, it does **not** necessarily follow that $G$ is cyclic. Find a counterexample.

---

~={orange}## The Correspondence Theorem for Groups=~

**Theorem 3.51 (Correspondence Theorem).** Let $N \triangleleft G$. There is a bijection between:

- Subgroups $H$ of $G$ with $N \leq H \leq G$, and
- Subgroups $\overline{H}$ of $G/N$,

given by:
$$H \mapsto H/N, \qquad \overline{H} \mapsto \pi^{-1}(\overline{H}).$$

Moreover, this bijection preserves inclusions, intersections, products, and normality. Specifically:

- $H_1 \leq H_2$ iff $H_1/N \leq H_2/N$.
- $H \triangleleft G$ iff $H/N \triangleleft G/N$.

**Corollary 3.52.** The subgroups of $G/N$ are exactly the subgroups of $G$ that contain $N$.

**Exercise 3.53.** Let $G = \mathbb{Z}_{12}$ and $N = \langle 3 \rangle$. List all subgroups of $G/N$ using the Correspondence Theorem.

**Exercise 3.54.** Let $G$ be a finite group and $N \triangleleft G$. Prove that $G/N$ has a subgroup of order $d$ for every $d$ dividing $|G/N|$ iff $G$ has a subgroup of order $d \cdot |N|$ containing $N$.

---

## Summary

We have introduced:

- Left and right cosets
- The partition of a group into cosets
- Lagrange's Theorem and its corollaries
- The index of a subgroup
- Normal subgroups and their characterizations
- The quotient group $G/N$
- The natural homomorphism $G \to G/N$
- Properties of quotient groups: cyclic, abelian, order
- The Correspondence Theorem for groups
- Applications to subgroups and quotients

