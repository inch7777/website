

# MATH 161, SHEET 15: INSOLVABILITY OF THE QUINTIC

This sheet culminates the course by proving the Abel-Ruffini theorem: there exist quintic polynomials that cannot be solved by radicals. We construct an explicit polynomial whose Galois group is $S_5$, which is not solvable.

**Commentary.** The Abel-Ruffini theorem is one of the most celebrated results in mathematics. It states that there is no formula (involving only addition, subtraction, multiplication, division, and roots) that gives the solutions of every quintic polynomial. This does not mean that *every* quintic is unsolvable—indeed, $x^5 - 1$ is trivially solvable. Rather, it means that *there exist* quintics whose solutions cannot be expressed in radicals. The proof uses all the machinery we have developed: field extensions, Galois groups, and solvable groups. The result is not just negative—it explains why the quintic formula that mathematicians had sought for centuries does not exist.

**Prerequisites.** This sheet uses the following results from earlier sheets:
- Solvable groups; subgroups of solvable groups are solvable (Sheet 14, Theorems 14.1, 14.3)
- $S_5$ is not solvable (Sheet 13, Theorem 13.49; Sheet 14)
- Galois's criterion: polynomial solvable by radicals iff its Galois group is solvable (Sheet 14, Theorem 14.22)
- The Galois group of a polynomial is a subgroup of $S_n$ (Sheet 13, Theorem 13.40)
- Irreducible polynomials over $\mathbb{Q}$ and Eisenstein's criterion (Sheet 9, Theorem 9.66)
- Transpositions and 5-cycles in $S_5$; $A_5$ is simple (Sheet 2.5, Sheet 13)
- The Fundamental Theorem of Galois Theory (Sheet 13, Theorem 13.33)
- Splitting fields (Sheet 12)
- Real roots of polynomials (calculus facts, assumed)

---

## Review: $S_5$ Is Not Solvable

**Theorem 15.1.** The symmetric group $S_n$ is not solvable for $n \geq 5$.

**Corollary 15.2.** Every group containing $A_5$ as a subgroup is not solvable.

**Exercise 15.3.** Explain why $S_5$ is not solvable using the definition of solvable groups.

---

## Strategy for the Quintic

**Lemma 15.4 (Sufficient Condition for $G_f = S_5$).** Let $f(x) \in \mathbb{Q}[x]$ be irreducible of degree $5$. Suppose:

1. $f$ has exactly two nonreal roots (hence three real roots).
2. The Galois group $G_f$ contains a transposition (via complex conjugation).

Then $G_f = S_5$.

**Exercise 15.5.** Prove that a transitive subgroup of $S_5$ contains an element of order $5$, and hence a 5-cycle.

**Exercise 15.6.** Show that a subgroup of $S_5$ containing a 5-cycle and a transposition is all of $S_5$.

---

## An Explicit Non-Solvable Quintic

**Theorem 15.7.** The polynomial $f(x) = x^5 - 5x + 2 \in \mathbb{Q}[x]$ is not solvable by radicals.

**Exercise 15.8.** Verify that $f(x) = x^5 - 5x + 2$ is irreducible over $\mathbb{Q}$ by applying Eisenstein's criterion to a suitable shift $f(x+1)$ or $f(x+2)$.

**Exercise 15.9.** Show that $f(x) = x^5 - 5x + 2$ has no rational roots. Why does this alone not prove irreducibility for quintics?

**Exercise 15.10.** Verify the sign analysis for $f(-1)$ and $f(1)$, and explain why this implies at least three real roots.

---

## The Abel-Ruffini Theorem

**Theorem 15.11 (Abel-Ruffini).** There exists a polynomial of degree $5$ over $\mathbb{Q}$ that is not solvable by radicals. Hence there is no general formula for solving quintic equations by radicals.

**Exercise 15.12.** Explain why the existence of one non-solvable quintic implies there is no universal radical formula for all quintics.

---

## Classification of Quintic Galois Groups

**Theorem 15.13.** For an irreducible quintic over $\mathbb{Q}$, the possible Galois groups (as subgroups of $S_5$) are:
$$S_5, \quad A_5, \quad \operatorname{F}_{20}, \quad D_5, \quad C_5.$$

**Theorem 15.14.** If the discriminant of $f$ is a square in $\mathbb{Q}$, then $G_f \subseteq A_5$. Otherwise, $G_f$ contains odd permutations.

**Theorem 15.15.** If $G_f$ is $S_5$ or $A_5$, then $f$ is not solvable by radicals.

**Theorem 15.16.** If $G_f$ is $C_5$, $D_5$, or $\operatorname{F}_{20}$, then $f$ is solvable by radicals.

**Example 15.17.** $f(x) = x^5 - x - 1$ has Galois group $S_5$, hence is not solvable.

**Example 15.18.** $f(x) = x^5 - 2$ has Galois group $\operatorname{F}_{20}$, hence is solvable.

**Exercise 15.19.** Compute the discriminant of $x^5 - 5x + 2$ and determine whether it is a square.

**Exercise 15.20.** Explain why a quintic with Galois group $A_5$ is not solvable by radicals.

---

## Historical Context

**Definition 15.21.** The **Abel-Ruffini theorem** states that there is no general formula for solving polynomial equations of degree $5$ or higher using radicals.

**Historical Note.** Niels Henrik Abel proved the theorem in 1824, but his proof was incomplete. Évariste Galois provided the complete theory in 1830, introducing the concepts of Galois groups and solvability. His work was not fully appreciated until after his death in 1832.

**Remark.** The insolvability of the quintic does not mean that all quintics are impossible to solve. Many quintics are solvable by radicals, including $x^5 - 1$ and $x^5 - 2$. The theorem says that there is no *universal formula* that works for every quintic.

---

## Generalizations

**Theorem 15.22.** For any $n \geq 5$, there exists an irreducible polynomial of degree $n$ over $\mathbb{Q}$ with Galois group $S_n$.

**Corollary 15.23.** For any $n \geq 5$, there exists a polynomial of degree $n$ over $\mathbb{Q}$ that is not solvable by radicals.

---

## Summary

We have proven:

- $S_5$ is not solvable
- $f(x) = x^5 - 5x + 2$ is irreducible over $\mathbb{Q}$
- $f(x)$ has exactly three real roots and two nonreal roots
- Therefore $\operatorname{Gal}(f) \cong S_5$
- Since $S_5$ is not solvable, $f$ is not solvable by radicals
- Hence the quintic is, in general, unsolvable by radicals

---

## Final Summary of the Course

We have journeyed from the foundations of sets and functions through:

- **Group theory:** subgroups, cosets, Lagrange's theorem, normal subgroups, quotient groups, isomorphism theorems, group actions, Sylow theorems, solvable groups
- **Matrix theory:** eigenvalues, minimal polynomial, rational canonical form, Jordan canonical form
- **Ring theory:** integral domains, fields, ideals, quotient rings, polynomial rings, UFDs, PIDs
- **Field theory:** algebraic extensions, splitting fields, algebraic closures, finite fields
- **Galois theory:** automorphisms, fixed fields, Galois groups, the Galois correspondence, solvability by radicals
- **The crowning achievement:** the insolvability of the quintic
