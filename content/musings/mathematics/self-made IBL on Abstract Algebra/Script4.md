
# MATH 161, SHEET 4: THE ISOMORPHISM THEOREMS

This sheet introduces the three isomorphism theorems—the backbone of group theory—and their applications. These theorems describe the relationships between groups, their subgroups, and their quotient groups.

**Commentary.** The isomorphism theorems are the fundamental tools for understanding the structure of groups. The First Isomorphism Theorem says that every homomorphic image of a group is a quotient of that group. The Second and Third Isomorphism Theorems describe how subgroups and quotient groups interact. Together, they form the foundation for much of group theory, including the study of solvable groups and the Jordan-Hölder theorem.

---

## The First Isomorphism Theorem

**Definition 4.1.** Let $\varphi: G \to H$ be a group homomorphism. The **image** of $\varphi$ is:
$$\operatorname{im}(\varphi) = \{\varphi(g) \mid g \in G\} \leq H.$$
The **kernel** of $\varphi$ is:
$$\ker(\varphi) = \{g \in G \mid \varphi(g) = e_H\} \triangleleft G.$$

**Theorem 4.2 (First Isomorphism Theorem).** If $\varphi: G \to H$ is a group homomorphism, then:
$$G / \ker(\varphi) \cong \operatorname{im}(\varphi).$$

~={red}Define: $\Phi: G/ker(\varphi)\to \mathrm{Im}(\varphi),\Phi(gK)=\varphi(g)$.=~
~={red}Then we prove it's both surjective and injective.=~
~={red}Injectivity: we have $a^{-1}b \in H$, and by Theorem 3.4.=~
~={yellow}Key is to find the valid bijective function in the first place.=~

**Corollary 4.3.** If $\varphi: G \to H$ is surjective, then:
$$G / \ker(\varphi) \cong H.$$

**Corollary 4.4.** If $\varphi: G \to H$ is a homomorphism, then $\varphi$ is injective iff $\ker(\varphi) = \{e\}$.

**Corollary 4.5.** If $G$ is finite and $\varphi: G \to H$ is a homomorphism, then:
$$|G| = |\ker(\varphi)| \cdot |\operatorname{im}(\varphi)|.$$

**Example 4.6.** The map $\varphi: \mathbb{Z} \to \mathbb{Z}_n$ given by $\varphi(m) = m \bmod n$ has kernel $n\mathbb{Z}$ and image $\mathbb{Z}_n$. Hence $\mathbb{Z}/n\mathbb{Z} \cong \mathbb{Z}_n$.

**Example 4.7.** The sign map $\operatorname{sgn}: S_n \to \{\pm 1\}$ has kernel $A_n$ and image $\{\pm 1\} \cong \mathbb{Z}_2$. Hence $S_n/A_n \cong \mathbb{Z}_2$.

**Exercise 4.8.** Let $\varphi: G \to H$ be a homomorphism. Prove that $\operatorname{im}(\varphi) \leq H$ and $\ker(\varphi) \triangleleft G$.

**Exercise 4.9.** Use the First Isomorphism Theorem to prove that $\mathbb{Z}[x]/(x) \cong \mathbb{Z}$.

**Exercise 4.10.** Let $G$ be a group and $N \triangleleft G$. Prove that $G/N$ is abelian iff $N$ contains all commutators $aba^{-1}b^{-1}$ for $a, b \in G$.

---

## The Second Isomorphism Theorem

**Definition 4.11.** For subgroups $H, K \leq G$, define:
$$HK = \{hk \mid h \in H, k \in K\}.$$

**Theorem 4.12 (Second Isomorphism Theorem).** Let $H \leq G$ and $N \triangleleft G$. Then:
1. $HN$ is a subgroup of $G$.
2. $H \cap N \triangleleft H$.
3. $$HN/N \cong H/(H \cap N).$$

**Example 4.13.** Let $G = \mathbb{Z}$, $H = m\mathbb{Z}$, $N = n\mathbb{Z}$. Then $H + N = \gcd(m,n)\mathbb{Z}$, $H \cap N = \operatorname{lcm}(m,n)\mathbb{Z}$, and:
$$(H+N)/N \cong H/(H \cap N).$$

**Exercise 4.14.** Prove the Second Isomorphism Theorem by defining a map $\varphi: H \to HN/N$ given by $\varphi(h) = hN$, and applying the First Isomorphism Theorem.

**Exercise 4.15.** Let $G$ be a group, $H \leq G$, $N \triangleleft G$, and suppose $H \cap N = \{e\}$. Show that $H \cong HN/N$.

**Exercise 4.16.** Let $G$ be a group, $H \leq G$, $N \triangleleft G$. Prove that $[HN : N] = [H : H \cap N]$.

---

## The Third Isomorphism Theorem

**Theorem 4.17 (Third Isomorphism Theorem).** Let $K \triangleleft G$ and $N \triangleleft G$ with $K \leq N$. Then:
1. $N/K \triangleleft G/K$.
2. $$(G/K)/(N/K) \cong G/N.$$

**Corollary 4.18.** If $K \triangleleft N \triangleleft G$, then $G/N \cong (G/K)/(N/K)$.

**Example 4.19.** Let $G = \mathbb{Z}$, $K = n\mathbb{Z}$, $N = m\mathbb{Z}$ with $m \mid n$. Then $(\mathbb{Z}/n\mathbb{Z})/(m\mathbb{Z}/n\mathbb{Z}) \cong \mathbb{Z}/m\mathbb{Z}$.

**Exercise 4.20.** Prove the Third Isomorphism Theorem by defining a map $\varphi: G/K \to G/N$ given by $\varphi(gK) = gN$, and applying the First Isomorphism Theorem.

**Exercise 4.21.** Let $G = \mathbb{Z}_{12}$, $K = \langle 4 \rangle$, $N = \langle 2 \rangle$. Compute $(G/K)/(N/K)$ and verify it is isomorphic to $G/N$.

---

## The Correspondence Theorem

**Theorem 4.22 (Correspondence Theorem).** Let $N \triangleleft G$, and let $\pi: G \to G/N$ be the natural homomorphism. There is a bijection between:
- Subgroups $H$ of $G$ with $N \leq H \leq G$, and
- Subgroups $\overline{H}$ of $G/N$.

given by:
$$H \mapsto \pi(H) = H/N, \qquad \overline{H} \mapsto \pi^{-1}(\overline{H}).$$

Moreover, this bijection preserves inclusions, intersections, products, and normality:
- $H_1 \leq H_2$ iff $H_1/N \leq H_2/N$.
- $H \triangleleft G$ iff $H/N \triangleleft G/N$.

**Corollary 4.23.** The subgroups of $G/N$ are exactly the subgroups of $G$ that contain $N$.

**Exercise 4.24.** Let $G = \mathbb{Z}_{12}$ and $N = \langle 3 \rangle$. Use the Correspondence Theorem to list all subgroups of $G/N$.

**Exercise 4.25.** Let $N \triangleleft G$. Prove that if $G/N$ is cyclic, then $G$ has a cyclic subgroup containing $N$ whose quotient is $G/N$.

---

## The $G/Z(G)$ Theorem

**Definition 4.26.** The **center** of a group $G$ is:
$$Z(G) = \{g \in G \mid gx = xg \text{ for all } x \in G\}.$$

**Theorem 4.27 ($G/Z(G)$ Theorem).** If $G/Z(G)$ is cyclic, then $G$ is abelian.

**Corollary 4.28.** If $G$ is non-abelian, then $G/Z(G)$ is not cyclic.

**Corollary 4.29.** If $|G| = p^2$ where $p$ is prime, then $G$ is abelian.

**Exercise 4.30.** Prove the $G/Z(G)$ theorem: assume $G/Z(G) = \langle gZ(G) \rangle$, then show any two elements of $G$ commute.

**Exercise 4.31.** Show that $Z(S_3)$ is trivial.

---

~={orange}## The Commutator Subgroup=~

**Definition 4.32.** For $a, b \in G$, the element $[a, b] = aba^{-1}b^{-1}$ is called a **commutator**.

**Definition 4.33.** The **commutator subgroup** (or **derived subgroup**) of $G$, denoted $G'$ or $[G, G]$, is the subgroup generated by all commutators:
$$G' = \langle [a, b] \mid a, b \in G \rangle.$$

**Theorem 4.34.** $G' \triangleleft G$.

**Theorem 4.35.** $G/G'$ is abelian.

**Theorem 4.36 (Abelianization).** $G/G'$ is the largest abelian quotient of $G$. That is, if $\varphi: G \to A$ is a homomorphism to an abelian group $A$, then $\varphi$ factors uniquely through $G/G'$. Equivalently, the map $\operatorname{Hom}(G/G', A) \to \operatorname{Hom}(G, A)$ given by $\psi \mapsto \psi \circ \pi$ is a bijection, where $\pi: G \to G/G'$ is the natural map.

**Theorem 4.37.** If $N \triangleleft G$ and $G/N$ is abelian, then $G' \leq N$.

**Example 4.38.** $S_3' = A_3$. Hence $S_3/A_3 \cong \mathbb{Z}_2$.

**Exercise 4.39.** Compute the commutator subgroup of $D_4$.

**Exercise 4.40.** Prove that $G/G'$ is abelian.

**Exercise 4.41.** Let $G$ be a group. Prove that $G$ is abelian iff $G' = \{e\}$.

**Exercise 4.42.** Let $\varphi: G \to H$ be a homomorphism. Prove that $\varphi(G') \leq H'$.

---

## Order of Elements in Quotient Groups

**Theorem 4.43.** Let $N \triangleleft G$ and $g \in G$. Then the order of $gN$ in $G/N$ divides the order of $g$ in $G$:
$$|gN| \mid |g|.$$

**Corollary 4.44.** If $G$ is finite and $N \triangleleft G$, then for every $g \in G$:
$$g^{|G/N|} \in N.$$

**Exercise 4.45.** Let $N \triangleleft G$ and $g \in G$. Prove Theorem 4.43.

**Exercise 4.46.** Let $G$ be a finite group and $N \triangleleft G$. Prove that if $\gcd(|g|, |G/N|) = 1$, then $g \in N$.

---

## Summary

We have introduced:

- The First Isomorphism Theorem: $G/\ker \varphi \cong \operatorname{im} \varphi$
- The Second Isomorphism Theorem: $HN/N \cong H/(H \cap N)$
- The Third Isomorphism Theorem: $(G/K)/(N/K) \cong G/N$
- The Correspondence Theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$
- The $G/Z(G)$ Theorem: if $G/Z(G)$ is cyclic, $G$ is abelian
- The commutator subgroup $G'$ and abelianization $G/G'$
- The order of elements in quotient groups
