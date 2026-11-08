
# MATH 161, SHEET 14: GALOIS THEORY II — SOLVABILITY AND RADICAL EXTENSIONS

This sheet connects Galois theory to the classical problem of solving polynomial equations by radicals. We introduce solvable groups and radical extensions, and prove that a polynomial is solvable by radicals iff its Galois group is solvable.

**Commentary.** For centuries, mathematicians sought formulas for solving polynomial equations. The quadratic formula has been known since antiquity; cubic and quartic formulas were discovered in the Renaissance. But the quintic resisted all attempts. Galois theory explains why: a polynomial is solvable by radicals iff its Galois group is solvable. Since the symmetric group $S_5$ is not solvable (proved in Sheet 13), there exist quintics with Galois group $S_5$ that cannot be solved by radicals. This is the crowning achievement of Galois theory.

**Prerequisites.** This sheet uses the following results from earlier sheets:
- Groups, subgroups, normal subgroups, quotient groups (Sheets 1-4)
- Solvable groups (introduced in Sheet 13, Definition 13.47 and Theorem 13.49)
- Field extensions, splitting fields, Galois extensions (Sheets 12-13)
- The Fundamental Theorem of Galois Theory (Sheet 13, Theorem 13.33)
- The simplicity of $A_5$ (Sheet 13, Theorem 13.48)

---

## Solvable Groups

**Definition 14.1.** A group $G$ is **solvable** if there exists a chain of subgroups:
$$\{e\} = G_0 \triangleleft G_1 \triangleleft \cdots \triangleleft G_n = G$$
such that each quotient $G_{i+1}/G_i$ is abelian.

**Theorem 14.2.** Every abelian group is solvable.

**Theorem 14.3.** Every subgroup of a solvable group is solvable.

**Theorem 14.4.** Every homomorphic image of a solvable group is solvable.

**Theorem 14.5.** If $N \triangleleft G$ and both $N$ and $G/N$ are solvable, then $G$ is solvable.

**Example 14.6.** $S_3$ is solvable:
$$\{e\} \triangleleft A_3 \triangleleft S_3.$$
The quotients are $A_3 \cong \mathbb{Z}_3$ and $S_3/A_3 \cong \mathbb{Z}_2$, both abelian.

**Example 14.7.** $S_4$ is solvable:
$$\{e\} \triangleleft V_4 \triangleleft A_4 \triangleleft S_4.$$

**Example 14.8.** $S_5$ is not solvable (proved in Sheet 13, Theorem 13.49). Its only nontrivial normal subgroup is $A_5$, which is nonabelian simple.

**Exercise 14.9.** Show that every $p$-group is solvable.

**Exercise 14.10.** Prove that $A_4$ is solvable.

**Exercise 14.11.** Show that $S_n$ is not solvable for $n \geq 5$.

---

## Radical Extensions

**Definition 14.12.** A field extension $E/F$ is a **radical extension** if there exists a chain of fields:
$$F = F_0 \subseteq F_1 \subseteq \cdots \subseteq F_n = E$$
such that for each $i$, $F_{i+1} = F_i(\alpha_i)$ where $\alpha_i^{n_i} \in F_i$ for some positive integer $n_i$.

**Definition 14.13.** A polynomial $f(x) \in F[x]$ is **solvable by radicals** over $F$ if its splitting field is contained in some radical extension of $F$.

**Example 14.14.** The splitting field of $x^2 - 2$ over $\mathbb{Q}$ is $\mathbb{Q}(\sqrt{2})$, which is a radical extension. So $x^2 - 2$ is solvable by radicals.

**Example 14.15.** The splitting field of $x^3 - 2$ over $\mathbb{Q}$ is $\mathbb{Q}(\sqrt[3]{2}, \omega)$, where $\omega = e^{2\pi i/3}$. This is a radical extension since:
$$\mathbb{Q} \subseteq \mathbb{Q}(\sqrt[3]{2}) \subseteq \mathbb{Q}(\sqrt[3]{2}, \omega),$$
with $\omega^3 = 1 \in \mathbb{Q}(\sqrt[3]{2})$. So $x^3 - 2$ is solvable by radicals.

**Example 14.16.** The general quadratic $ax^2 + bx + c$ is solvable by radicals over any field of characteristic $\neq 2$.

**Exercise 14.17.** Show that the splitting field of $x^4 - 4x^2 + 2$ over $\mathbb{Q}$ is a radical extension.

**Exercise 14.18.** Show that any extension obtained by adjoining a square root and then a cube root is a radical extension.

**Exercise 14.19.** Show that $\mathbb{Q}(\sqrt{2}, \sqrt{3})/\mathbb{Q}$ is a radical extension.

---

## The Connection Between Solvability and Galois Groups

**Theorem 14.20.** Let $F$ be a field of characteristic $0$. If $f(x) \in F[x]$ is solvable by radicals, then its Galois group $G_f$ is a solvable group.

**Proof Idea.** If $E$ is the splitting field of $f$ and $K$ is a radical extension containing $E$, then $K/F$ has a chain of cyclic extensions (adjoining roots of unity and $n$th roots). The Galois group of each step is cyclic (hence abelian), so $\operatorname{Gal}(K/F)$ is solvable. Since $\operatorname{Gal}(E/F)$ is a quotient of $\operatorname{Gal}(K/F)$, it is solvable.

**Theorem 14.21.** Conversely, if $G_f$ is solvable, then $f(x)$ is solvable by radicals.

**Theorem 14.22 (Galois's Criterion).** A polynomial $f(x) \in F[x]$ (with $\operatorname{char} F = 0$) is solvable by radicals iff its Galois group $G_f$ is solvable.

**Example 14.23.** $S_3$ is solvable, so every cubic over $\mathbb{Q}$ is solvable by radicals. This is consistent with the cubic formula.

**Example 14.24.** $S_4$ is solvable, so every quartic over $\mathbb{Q}$ is solvable by radicals. This is consistent with the quartic formula.

**Example 14.25.** $S_5$ is not solvable, so there exist quintics with Galois group $S_5$ that are not solvable by radicals.

**Exercise 14.26.** Explain why every quadratic, cubic, and quartic over $\mathbb{Q}$ is solvable by radicals.

**Exercise 14.27.** Let $f(x) \in \mathbb{Q}[x]$ have Galois group $A_5$. Is $f$ solvable by radicals? Why or why not?

**Exercise 14.28.** Let $f(x) \in \mathbb{Q}[x]$ be an irreducible quintic with exactly two nonreal roots. Show that its Galois group contains a transposition.

---

## Cyclotomic Extensions and Roots of Unity

**Definition 14.29.** A **cyclotomic extension** of $\mathbb{Q}$ is a field $\mathbb{Q}(\zeta_n)$ where $\zeta_n$ is a primitive $n$th root of unity.

**Theorem 14.30.** The Galois group $\operatorname{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q})$ is isomorphic to $(\mathbb{Z}/n\mathbb{Z})^\times$, the group of units modulo $n$.

**Theorem 14.31.** $\operatorname{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q})$ is abelian.

**Corollary 14.32.** Cyclotomic extensions are solvable by radicals.

**Example 14.33.** For $p$ prime, $\operatorname{Gal}(\mathbb{Q}(\zeta_p)/\mathbb{Q}) \cong \mathbb{Z}_{p-1}$, which is cyclic.

**Example 14.34.** $\operatorname{Gal}(\mathbb{Q}(\zeta_8)/\mathbb{Q}) \cong \mathbb{Z}_2 \times \mathbb{Z}_2$.

**Exercise 14.35.** Compute $\operatorname{Gal}(\mathbb{Q}(\zeta_5)/\mathbb{Q})$.

**Exercise 14.36.** Show that $\mathbb{Q}(\zeta_n)/\mathbb{Q}$ is always abelian.

**Exercise 14.37.** What is $\operatorname{Gal}(\mathbb{Q}(\zeta_{12})/\mathbb{Q})$?

---

## Constructible Numbers and Solvability

**Definition 14.38.** A real number $\alpha$ is **constructible** if it can be obtained from $0$ and $1$ using finitely many operations of addition, subtraction, multiplication, division, and taking square roots.

**Theorem 14.39.** A real number $\alpha$ is constructible iff $[\mathbb{Q}(\alpha):\mathbb{Q}]$ is a power of $2$.

**Corollary 14.40.** The regular $n$-gon is constructible with straightedge and compass iff $\varphi(n)$ is a power of $2$.

**Corollary 14.41.** The cube cannot be doubled, the angle cannot be trisected, and the circle cannot be squared using straightedge and compass.

**Exercise 14.42.** Show that $\sqrt[3]{2}$ is not constructible.

**Exercise 14.43.** Show that $\cos 20^\circ$ is not constructible.

**Exercise 14.44.** Which regular $n$-gons are constructible for $n \leq 20$?

---

## Summary

We have introduced:

- Solvable groups and their properties
- Radical extensions
- Galois's criterion: solvable by radicals iff solvable Galois group
- Cyclotomic extensions and their abelian Galois groups
- Constructible numbers and their characterization
- Classical impossibility results: doubling the cube, trisecting the angle, squaring the circle
