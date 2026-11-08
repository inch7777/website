

# MATH 161, SHEET 6: THE SYLOW THEOREMS

This sheet introduces the Sylow theorems—one of the most powerful tools in finite group theory. They provide a partial converse to Lagrange's theorem and give deep structural information about finite groups.

**Commentary.** Lagrange's theorem tells us that the order of any subgroup divides the order of the group. The converse is false in general: a group of order 12 need not have a subgroup of order 6 (as $A_4$ demonstrates). The Sylow theorems rescue this situation for subgroups of prime power order. They guarantee existence (Sylow I), conjugacy (Sylow II), and counting (Sylow III) of maximal prime-power subgroups.

**Prerequisites.** This sheet uses the following results from Sheet 5:
- Orbit-Stabilizer Theorem (Theorem 5.14)
- Cauchy's Theorem (Theorem 5.42)
- Group action on subgroups by conjugation (moved from Sheet 5 to here, see Definition 6.7-6.9)

---

## p-Groups

**Definition 6.1.** Let $p$ be a prime. A **$p$-group** is a group in which every element has order a power of $p$.

**Theorem 6.2.** A finite group is a $p$-group iff its order is a power of $p$.

**Theorem 6.3.** If $G$ is a finite $p$-group, then $Z(G) \neq \{e\}$.

**Definition 6.4.** Let $G$ be a finite group and $p$ a prime. A subgroup $P \leq G$ is a **Sylow $p$-subgroup** if $P$ is a maximal $p$-subgroup of $G$, i.e., if $|P| = p^n$ where $p^n$ is the highest power of $p$ dividing $|G|$.

---

## Lemma 1: p-Group Action on Finite Sets

**Theorem 6.5 (p-Group Action Lemma).** Let $G$ be a finite $p$-group acting on a finite set $X$. Then:
$$|X| \equiv |X^G| \pmod{p},$$
where $X^G = \{x \in X \mid g \cdot x = x \text{ for all } g \in G\}$ is the set of fixed points.

**Corollary 6.6.** If $G$ is a finite $p$-group acting on a finite set $X$ and $p$ does not divide $|X|$, then $G$ has a fixed point in $X$.

**Exercise 6.7.** Prove Theorem 6.5 using the Orbit-Stabilizer theorem.

**Exercise 6.8.** Let $G$ be a $p$-group acting on itself by conjugation. Show that $|G| \equiv |Z(G)| \pmod{p}$. Deduce that $Z(G) \neq \{e\}$.

---

## Lemma 2: The Normalizer

**Definition 6.9.** Let $H \leq G$. The **normalizer** of $H$ in $G$ is:
$$N_G(H) = \{g \in G \mid gHg^{-1} = H\}.$$

**Theorem 6.10.** $N_G(H)$ is a subgroup of $G$ containing $H$.

**Theorem 6.11.** $H \triangleleft N_G(H)$, and $N_G(H)$ is the largest subgroup of $G$ in which $H$ is normal.

**Definition 6.12.** Let $G$ act on the set of all subgroups of $G$ by conjugation:
$$g \cdot H = gHg^{-1}.$$

**Theorem 6.13.** The stabilizer of $H$ under this action is the normalizer:
$$(G_H) = N_G(H).$$

The orbit of $H$ is the set of all subgroups conjugate to $H$.

**Corollary 6.14.** The number of distinct conjugates of $H$ in $G$ is $(G : N_G(H))$.

**Exercise 6.15.** Prove Theorem 6.10.

**Exercise 6.16.** Let $H \leq G$. Prove that $H \triangleleft G$ iff $N_G(H) = G$.

---

## Lemma 3: Normalizer Index Lemma

**Theorem 6.17 (Normalizer Index Lemma).** Let $H$ be a $p$-subgroup of a finite group $G$. Then:
$$(G : H) \equiv (N_G(H) : H) \pmod{p}.$$

**Proof Idea.** Let $G$ act on the set of left cosets of $H$ by left multiplication. By Theorem 6.5, $|X| \equiv |X^G| \pmod{p}$. The fixed points are exactly the cosets contained in $N_G(H)$. Hence $(G : H) \equiv (N_G(H) : H) \pmod{p}$.

**Corollary 6.18.** If $p$ divides $(G : H)$, then $N_G(H) \neq H$.

**Exercise 6.19.** Prove Theorem 6.17 by filling in the details of the proof idea above.

---

## Sylow I: Existence

**Theorem 6.20 (Sylow I).** Let $G$ be a finite group and let $p$ be a prime. If $p^k$ divides $|G|$, then $G$ has a subgroup of order $p^k$. In particular, Sylow $p$-subgroups exist.

**Corollary 6.21.** Every finite group of order $p^n m$ (with $\gcd(p, m) = 1$) has a subgroup of order $p^n$.

**Proof Idea.** By Cauchy's theorem (Sheet 5, Theorem 5.44), $G$ has a subgroup of order $p$. Suppose $H$ has order $p^i$ with $i < n$. Then $p$ divides $(G : H)$. By Corollary 6.18, $N_G(H) \neq H$. Thus $p$ divides $(N_G(H) : H)$. By Cauchy's theorem, $N_G(H)/H$ has a subgroup of order $p$, whose preimage in $N_G(H)$ is a subgroup of order $p^{i+1}$. By induction, a subgroup of order $p^n$ exists.

**Exercise 6.22.** Show that every group of order 12 has a subgroup of order 3 and a subgroup of order 4.

**Exercise 6.23.** Show that every group of order 30 has a subgroup of order 5.

---

## Lemma 4: Sylow Subgroups Are Conjugate

**Theorem 6.24 (Conjugacy Lemma).** Let $P$ be a Sylow $p$-subgroup of $G$, and let $Q$ be any $p$-subgroup of $G$. Then $Q$ is contained in some conjugate of $P$.

**Proof Idea.** Let $Q$ act on the set of left cosets of $P$ by left multiplication. Since $p$ does not divide $(G : P)$, by Corollary 6.6 $Q$ has a fixed point. Thus $Q \leq gPg^{-1}$ for some $g$.

**Corollary 6.25.** If $Q$ is also a Sylow $p$-subgroup, then $Q = gPg^{-1}$ for some $g$.

---

## Sylow II: Conjugacy

**Theorem 6.26 (Sylow II).** All Sylow $p$-subgroups of a group $G$ are conjugate. That is, if $P$ and $Q$ are Sylow $p$-subgroups, then there exists $g \in G$ such that:
$$Q = gPg^{-1}.$$

**Corollary 6.27.** A Sylow $p$-subgroup is normal iff it is the unique Sylow $p$-subgroup of $G$.

**Corollary 6.28.** Every $p$-subgroup of $G$ is contained in some Sylow $p$-subgroup.

**Exercise 6.29.** Let $G$ have order 15. Show that the Sylow 5-subgroup is normal.

**Exercise 6.30.** Let $P$ be a Sylow $p$-subgroup of $G$. Prove that $P \triangleleft G$ iff $P$ is the only Sylow $p$-subgroup of $G$.

---

## Lemma 5: Counting Sylow Subgroups

**Theorem 6.31 (Counting Lemma).** Let $P$ be a Sylow $p$-subgroup of $G$. The number of Sylow $p$-subgroups of $G$ is $(G : N_G(P))$.

**Proof.** By Corollary 6.14, the number of conjugates of $P$ is $(G : N_G(P))$. By Sylow II, all Sylow $p$-subgroups are exactly the conjugates of $P$.

---

## Sylow III: Counting

**Theorem 6.32 (Sylow III).** Let $G$ be a finite group and $p$ a prime. If $|G| = p^n m$ with $\gcd(p, m) = 1$, let $n_p(G)$ denote the number of Sylow $p$-subgroups of $G$. Then:

1. $n_p(G) \equiv 1 \pmod{p}$.
2. $n_p(G)$ divides $m$.

**Proof of (1).** Let $P$ be a Sylow $p$-subgroup, and let $P$ act by conjugation on the set of all Sylow $p$-subgroups. The only fixed point is $P$ itself. By Theorem 6.5, $n_p(G) \equiv 1 \pmod{p}$.

**Proof of (2).** By Theorem 6.31, $n_p(G) = (G : N_G(P))$, which divides $|G|$. Since $P \leq N_G(P)$, $p^n$ divides $|N_G(P)|$. Thus $(G : N_G(P))$ divides $m$.

**Corollary 6.33.** If $p$ is the smallest prime dividing $|G|$ and $p^2 \nmid |G|$, then the Sylow $p$-subgroup is normal.

**Example 6.34.** For $|G| = 30 = 2 \cdot 3 \cdot 5$:

- $n_5 \equiv 1 \pmod{5}$ and $n_5 \mid 6$, so $n_5 = 1$ or $6$.
- $n_3 \equiv 1 \pmod{3}$ and $n_3 \mid 10$, so $n_3 = 1$ or $10$.
- $n_2 \equiv 1 \pmod{2}$ and $n_2 \mid 15$, so $n_2 = 1, 3, 5, 15$.

**Exercise 6.35.** Compute $n_2$, $n_3$, and $n_5$ for a group of order 60.

**Exercise 6.36.** Show that every group of order 35 is cyclic.

---

## Applications of Sylow Theorems

**Theorem 6.37.** If $|G| = pq$ where $p < q$ are primes, then $G$ has a normal Sylow $q$-subgroup. Moreover, if $p \nmid q - 1$, then $G$ is cyclic.

**Theorem 6.38.** There is no simple group of order $pq$ where $p, q$ are primes.

**Theorem 6.39.** There is no simple group of order $p^n$ for $n \geq 1$.

**Theorem 6.40.** There is no simple group of order $p^2 q$ for distinct primes $p, q$ in certain cases (e.g., $p > q$ and $p \not\equiv 1 \pmod{q}$).

**Example 6.41.** No group of order 12 is simple: $n_3 \equiv 1 \pmod{3}$ and $n_3 \mid 4$, so $n_3 = 1$ or $4$. If $n_3 = 1$, the Sylow 3-subgroup is normal. If $n_3 = 4$, then the four Sylow 3-subgroups each contain 2 elements of order 3, giving 8 elements of order 3. The remaining elements include the identity and a Sylow 2-subgroup of order 4, which must be normal.

**Exercise 6.42.** Prove that there is no simple group of order 56.

**Exercise 6.43.** Prove that every group of order 45 is abelian.

**Exercise 6.44.** Show that every group of order 100 has a nontrivial normal subgroup.

---

## Classification of Groups of Small Order

**Theorem 6.45.** Up to isomorphism, the only groups of order $p$ (prime) are $\mathbb{Z}_p$.

**Theorem 6.46.** Up to isomorphism, the only groups of order $p^2$ are $\mathbb{Z}_{p^2}$ and $\mathbb{Z}_p \times \mathbb{Z}_p$.

**Theorem 6.47.** Up to isomorphism, the groups of order $2p$ (where $p$ is an odd prime) are $\mathbb{Z}_{2p}$ and $D_p$.

**Exercise 6.48.** Classify all groups of order 6.

**Exercise 6.49.** Classify all groups of order 10.

**Exercise 6.50.** Let $G$ be a group of order 21. Show that either $G \cong \mathbb{Z}_{21}$ or $G \cong \mathbb{Z}_7 \rtimes \mathbb{Z}_3$ (the nonabelian semidirect product).

---

## The Sylow Theorems and Normal Subgroups

**Theorem 6.51.** If $P$ is a Sylow $p$-subgroup of $G$, then:
$$|G : N_G(P)| = n_p(G).$$

**Theorem 6.52.** $P \triangleleft G$ iff $n_p(G) = 1$.

**Theorem 6.53.** If $P$ is a Sylow $p$-subgroup of $G$, then $N_G(N_G(P)) = N_G(P)$.

**Exercise 6.54.** Let $G$ be a group of order $p^n m$ with $\gcd(p, m) = 1$. Prove that $n_p(G) = 1$ iff the Sylow $p$-subgroup is characteristic (i.e., fixed by all automorphisms of $G$).

**Exercise 6.55.** Let $P$ be a Sylow $p$-subgroup of $G$. Show that if $P \leq H \leq G$, then $P$ is a Sylow $p$-subgroup of $H$.

---

## Summary

We have introduced:

- $p$-groups and their basic properties
- Lemma 1: $p$-group action on finite sets: $|X| \equiv |X^G| \pmod{p}$
- Lemma 2: The normalizer $N_G(H)$ and group action on subgroups
- Lemma 3: Normalizer index lemma: $(G : H) \equiv (N_G(H) : H) \pmod{p}$
- Sylow I: Existence of Sylow $p$-subgroups
- Lemma 4: Sylow subgroups are conjugate
- Sylow II: Conjugacy of Sylow $p$-subgroups
- Lemma 5: Counting Sylow subgroups via normalizer
- Sylow III: Counting Sylow $p$-subgroups ($n_p \equiv 1 \pmod{p}$, $n_p \mid m$)
- Applications: groups of order $pq$, $p^2$, $2p$
- Classification results for small orders
- The connection between Sylow subgroups and normal subgroups

---

**Next: Sheet 7 — Introduction to Rings**