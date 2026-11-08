
# MATH 161, SHEET 9: POLYNOMIAL RINGS AND FACTORIZATION

This sheet introduces polynomial rings and develops their factorization theory. Polynomial rings over fields are principal ideal domains and unique factorization domains—properties that make them essential for constructing field extensions and for Galois theory.

**Commentary.** Just as the integers $\mathbb{Z}$ are the prototypical Euclidean domain, polynomial rings $F[x]$ over a field are also Euclidean domains. This means we have a division algorithm, greatest common divisors, and unique factorization into irreducibles—exactly the machinery needed for Galois theory. The analogy between $\mathbb{Z}$ and $F[x]$ is one of the deepest and most fruitful in algebra.

**Prerequisites.** This sheet uses the following results from earlier sheets:
- Ring definition, integral domains, fields (Sheet 7)
- Ideals, quotient rings, prime/maximal ideals (Sheet 8)
- Isomorphism theorems for rings (Sheet 8)
- Field of fractions (Sheet 7)

---

## Polynomial Rings

**Definition 9.1.** Let $R$ be a commutative ring with unity. The **polynomial ring** $R[x]$ consists of all finite formal sums:
$$f(x) = a_0 + a_1 x + \cdots + a_n x^n, \quad a_i \in R.$$
Addition and multiplication are defined coefficient-wise and by convolution:
- $(f + g)(x) = \sum (a_i + b_i)x^i$
- $(fg)(x) = \sum_k (\sum_{i+j=k} a_i b_j)x^k$

**Definition 9.2.** The **degree** of a nonzero polynomial $f(x) = a_n x^n + \cdots + a_0$ with $a_n \neq 0$ is $n$, denoted $\deg f(x)$. The zero polynomial has degree undefined (or $-\infty$).

**Definition 9.3.** A polynomial is **monic** if its leading coefficient is $1$.

~={orange}**Theorem 9.4.** If $R$ is an integral domain, then $R[x]$ is an integral domain. Moreover, for nonzero $f, g \in R[x]$:=~
~={orange}$$\deg(fg) = \deg f + \deg g.$$=~

**Theorem 9.5.** If $R$ is a commutative ring with unity, then $R[x]$ is a commutative ring with unity.

**Example 9.6.** $\mathbb{Z}[x]$ is an integral domain. Its units are $\pm 1$.

**Example 9.7.** $\mathbb{Z}_5[x]$ has units $1, 2, 3, 4$.

**Example 9.8.** $\mathbb{Z}[x]$ has infinitely many irreducible polynomials.

**Exercise 9.9.** Show that $R[x]$ is commutative iff $R$ is commutative.

**Exercise 9.10.** Prove Theorem 9.4.

**Exercise 9.11.** Show that the units of $F[x]$ (where $F$ is a field) are precisely the nonzero constant polynomials.

---

## The Division Algorithm

~={green}**Theorem 9.12 (Division Algorithm).** Let $F$ be a field, and let $f(x), g(x) \in F[x]$ with $g(x) \neq 0$. Then there exist unique polynomials $q(x), r(x) \in F[x]$ such that:=~
~={green}$$f(x) = g(x)q(x) + r(x),$$=~
~={green}where either $r(x) = 0$ or $\deg r(x) < \deg g(x)$.=~

**Corollary 9.13 (Remainder Theorem).** When $f(x)$ is divided by $x - a$, the remainder is $f(a)$.

**Corollary 9.14 (Factor Theorem).** For $a \in F$, $x - a$ divides $f(x)$ iff $f(a) = 0$.

**Example 9.15.** Divide $x^3 + 2x^2 + 3x + 4$ by $x^2 + 1$ in $\mathbb{Q}[x]$. Quotient: $x + 2$, Remainder: $2x + 2$.

**Example 9.16.** In $\mathbb{Z}_3[x]$, divide $x^4 + 2x^3 + x + 1$ by $x + 1$. Remainder: $f(-1) = f(2) = 16 + 16 + 2 + 1 = 35 \equiv 2 \pmod{3}$.

**Exercise 9.17.** Divide $x^5 - 2x^3 + x^2 - 1$ by $x^2 + x + 1$ in $\mathbb{Q}[x]$.

**Exercise 9.18.** Show that $x^3 + 1$ is divisible by $x + 1$ in $\mathbb{Z}_3[x]$.

**Exercise 9.19.** Prove the Remainder Theorem using the Division Algorithm.

---

~={orange}## Greatest Common Divisors=~

**Definition 9.20.** Let $f, g \in F[x]$ be nonzero. A polynomial $d \in F[x]$ is a **greatest common divisor** (gcd) of $f$ and $g$ if:

1. $d$ divides both $f$ and $g$.
2. If $h$ divides both $f$ and $g$, then $h$ divides $d$.

We take the gcd to be monic, denoted $\gcd(f, g)$.

**Theorem 9.21 (Euclidean Algorithm).** The gcd of two polynomials in $F[x]$ can be computed by repeated application of the division algorithm.

**Theorem 9.22.** For any nonzero $f, g \in F[x]$, there exist polynomials $s, t \in F[x]$ such that:
$$\gcd(f, g) = s f + t g.$$

**Definition 9.23.** Polynomials $f, g \in F[x]$ are **relatively prime** if $\gcd(f, g) = 1$.

**Example 9.24.** In $\mathbb{Q}[x]$, $\gcd(x^4 - 1, x^3 - 1) = x - 1$.

**Exercise 9.25.** Find $\gcd(x^4 - 1, x^3 - 1)$ in $\mathbb{Q}[x]$ and express it as a linear combination of the two polynomials.

**Exercise 9.26.** Show that $x^2 + 1$ and $x^3 + x$ are not relatively prime in $\mathbb{R}[x]$.

**Exercise 9.27.** Prove Theorem 9.22.

---

## Irreducible Polynomials

**Definition 9.28.** A nonconstant polynomial $f \in F[x]$ is **irreducible** over $F$ if whenever $f = gh$ with $g, h \in F[x]$, either $g$ or $h$ is constant. Otherwise, $f$ is **reducible**.

**Theorem 9.29.** A polynomial $f \in F[x]$ of degree $2$ or $3$ is irreducible over $F$ iff it has no root in $F$.

**Theorem 9.30.** If $f \in F[x]$ is irreducible and $\deg f = n$, then $f$ has no roots in $F$.

**Theorem 9.31.** A polynomial has at most $\deg f$ roots in $F$.

**Example 9.32.** $x^2 + 1$ is irreducible over $\mathbb{R}$ but reducible over $\mathbb{C}$.

**Example 9.33.** $x^2 - 2$ is irreducible over $\mathbb{Q}$ but reducible over $\mathbb{R}$.

**Example 9.34.** $x^3 + x + 1$ is irreducible over $\mathbb{Z}_2$ (no roots: $f(0) = 1, f(1) = 1$).

**Exercise 9.35.** Determine whether $x^3 + x^2 + 1$ is irreducible over $\mathbb{Z}_2$.

**Exercise 9.36.** Show that $x^4 + 4$ is reducible over $\mathbb{Q}$. (Hint: $x^4 + 4 = (x^2 - 2x + 2)(x^2 + 2x + 2)$.)

**Exercise 9.37.** Prove Theorem 9.29.

---

## Unique Factorization in $F[x]$

**Theorem 9.38.** Every nonconstant polynomial in $F[x]$ factors uniquely (up to order and constant factors) into a product of irreducible polynomials.

**Definition 9.39.** An integral domain $R$ is a **unique factorization domain** (UFD) if every nonzero nonunit element factors uniquely into irreducibles.

**Theorem 9.40.** If $F$ is a field, then $F[x]$ is a UFD.

**Theorem 9.41.** In a UFD, irreducible elements are prime.

**Theorem 9.42.** If $R$ is a UFD, then $R[x]$ is a UFD.

**Example 9.43.** $\mathbb{Z}$ is a UFD. $\mathbb{Z}[x]$ is a UFD.

**Exercise 9.44.** Factor $x^4 - 1$ into irreducibles over $\mathbb{Q}$, over $\mathbb{R}$, and over $\mathbb{C}$.

**Exercise 9.45.** Show that $\mathbb{Z}[x]$ is a UFD but not a PID.

---

## Principal Ideal Domains

**Definition 9.46.** An integral domain $R$ is a **principal ideal domain** (PID) if every ideal is principal, i.e., every ideal is of the form $(a) = \{ra \mid r \in R\}$.

**Theorem 9.47.** If $F$ is a field, then $F[x]$ is a PID.

**Theorem 9.48.** Every PID is a UFD.

**Theorem 9.49.** In a PID, irreducible elements are prime.

**Example 9.50.** $\mathbb{Z}$ is a PID. $\mathbb{Z}[x]$ is not a PID.

**Theorem 9.51.** In a PID, every proper ideal is contained in a maximal ideal.

**Theorem 9.52.** In a PID, an ideal $(a)$ is maximal iff $a$ is irreducible.

**Theorem 9.53.** In a PID, an ideal $(a)$ is prime iff $a = 0$ or $a$ is irreducible.

**Exercise 9.54.** Show that the ideal $(x, 2)$ in $\mathbb{Z}[x]$ is not principal, proving $\mathbb{Z}[x]$ is not a PID.

**Exercise 9.55.** Prove that in a PID, every prime ideal is maximal.

**Exercise 9.56.** Prove Theorem 9.47.

---

## Content and Gauss's Lemma

**Definition 9.57.** Let $D$ be a UFD and $f(x) \in D[x]$. The **content** of $f$, denoted $\operatorname{cont}(f)$, is the gcd of all coefficients of $f$.

**Definition 9.58.** A polynomial is **primitive** if $\operatorname{cont}(f) = 1$.

**Theorem 9.59 (Gauss's Lemma, Product Form).** If $f, g \in D[x]$ are primitive, then $fg$ is primitive. Equivalently:
$$\operatorname{cont}(fg) = \operatorname{cont}(f) \cdot \operatorname{cont}(g).$$

**Theorem 9.60 (Gauss's Lemma, Factorization Form).** If $D$ is a UFD with field of fractions $F$, and $f \in D[x]$ is primitive, then $f$ is irreducible in $D[x]$ iff $f$ is irreducible in $F[x]$.

**Corollary 9.61.** If $f \in D[x]$ is primitive and reducible in $D[x]$, it is reducible in $F[x]$. Conversely, any factorization in $F[x]$ can be cleared of denominators to give a factorization in $D[x]$.

**Example 9.62.** $2x + 2$ is irreducible over $\mathbb{Q}[x]$ but reducible over $\mathbb{Z}[x]$ (since $2$ is not a unit in $\mathbb{Z}$).

**Exercise 9.63.** Show that $f(x) = 2x^2 + 2x + 2$ has content $2$ and primitive part $x^2 + x + 1$.

**Exercise 9.64.** Prove the product form of Gauss's Lemma.

**Exercise 9.65.** Use Gauss's Lemma to show that $x^3 + x^2 + 1$ is irreducible over $\mathbb{Q}$ iff it is irreducible over $\mathbb{Z}$.

---

## Irreducibility Criteria

**Theorem 9.66 (Eisenstein's Criterion).** Let $f(x) = a_n x^n + \cdots + a_0 \in \mathbb{Z}[x]$. Suppose there exists a prime $p$ such that:

1. $p \nmid a_n$.
2. $p \mid a_i$ for all $i < n$.
3. $p^2 \nmid a_0$.

Then $f(x)$ is irreducible over $\mathbb{Q}$.

**Example 9.67.** $x^5 - 3x^2 + 6$ is irreducible over $\mathbb{Q}$ by Eisenstein with $p = 3$.

**Example 9.68.** $2x^3 + 4x^2 + 6x + 2$ is not Eisenstein (all coefficients divisible by $2$, but $2^2 \mid a_0$).

**Example 9.69.** $x^p - p$ is irreducible over $\mathbb{Q}$ by Eisenstein with $p$.

**Theorem 9.70 (Reduction Mod $p$).** Let $f \in \mathbb{Z}[x]$ be monic. If the reduction $\overline{f} \in \mathbb{Z}_p[x]$ is irreducible for some prime $p$, then $f$ is irreducible over $\mathbb{Q}$.

**Example 9.71.** $x^4 + x^3 + x^2 + x + 1$ is irreducible over $\mathbb{Q}$. Its reduction mod $2$ is irreducible.

**Example 9.72.** $x^3 - x - 1$ is irreducible over $\mathbb{Q}$ since its reduction mod $2$ is $x^3 + x + 1$, which is irreducible over $\mathbb{Z}_2$.

**Exercise 9.73.** Use Eisenstein's criterion to show $x^4 + 2x^3 + 4x^2 + 8x + 16$ is irreducible over $\mathbb{Q}$.

**Exercise 9.74.** Show that $x^3 - 2x^2 + 2x + 2$ is irreducible over $\mathbb{Q}$ by Eisenstein's criterion.

**Exercise 9.75.** Use reduction mod $2$ to show that $x^4 + x + 1$ is irreducible over $\mathbb{Q}$.

---

## Formal Derivatives and Multiple Roots

**Definition 9.76.** The **formal derivative** of $f(x) = a_n x^n + \cdots + a_0 \in F[x]$ is:
$$f'(x) = n a_n x^{n-1} + \cdots + a_1.$$

**Theorem 9.77 (Product Rule).** In any field $F$, for all $f, g \in F[x]$:
$$(fg)' = f'g + fg'.$$

**Definition 9.78.** A polynomial $f \in F[x]$ has a **multiple root** $\alpha$ (in some extension of $F$) if $(x - \alpha)^2$ divides $f(x)$.

**Theorem 9.79.** A polynomial $f \in F[x]$ has a multiple root iff $\gcd(f, f') \neq 1$.

**Theorem 9.80.** If $F$ has characteristic $0$, then every irreducible polynomial over $F$ has no multiple roots (i.e., is separable).

**Theorem 9.81.** If $F$ has characteristic $p > 0$, an irreducible polynomial $f$ may have multiple roots only if $f(x) = g(x^p)$ for some $g \in F[x]$.

**Example 9.82.** In $\mathbb{Z}_p[x]$, the polynomial $x^p - a$ may have multiple roots. For example, $x^p - 1 = (x - 1)^p$ in $\mathbb{Z}_p[x]$.

**Exercise 9.83.** Compute the derivative of $x^5 + 2x^3 + x + 1 \in \mathbb{Z}_5[x]$.

**Exercise 9.84.** Show that $x^4 - 2x^2 + 1$ has multiple roots in $\mathbb{Q}[x]$.

**Exercise 9.85.** Prove Theorem 9.79 using the product rule.

**Exercise 9.86.** Show that in characteristic $0$, every irreducible polynomial has no multiple roots.

---

## Cyclotomic Polynomials

**Definition 9.87.** The $n$th **cyclotomic polynomial** is:
$$\Phi_n(x) = \prod_{\substack{1 \leq k \leq n \\ \gcd(k,n)=1}} (x - \zeta^k),$$
where $\zeta$ is a primitive $n$th root of unity.

**Theorem 9.88.** $\Phi_n(x) \in \mathbb{Z}[x]$ for all $n$.

**Theorem 9.89.** For each $n$, $\Phi_n(x)$ is irreducible over $\mathbb{Q}$.

**Theorem 9.90.** $x^n - 1 = \prod_{d \mid n} \Phi_d(x)$.

**Example 9.91.** $\Phi_1(x) = x - 1$.
$\Phi_2(x) = x + 1$.
$\Phi_3(x) = x^2 + x + 1$.
$\Phi_4(x) = x^2 + 1$.
$\Phi_5(x) = x^4 + x^3 + x^2 + x + 1$.

**Exercise 9.92.** Compute $\Phi_6(x)$.

**Exercise 9.93.** Compute $\Phi_8(x)$.

**Exercise 9.94.** Show that $x^6 - 1 = \Phi_1(x)\Phi_2(x)\Phi_3(x)\Phi_6(x)$.

---

## Summary

We have introduced:

- Polynomial rings $R[x]$ and their properties
- The Division Algorithm for $F[x]$
- Greatest common divisors and the Euclidean Algorithm
- Irreducible polynomials
- Unique Factorization Domain (UFD) structure of $F[x]$
- Principal Ideal Domains (PIDs)
- Content and Gauss's Lemma
- Eisenstein's Criterion and Reduction Mod $p$
- Formal derivatives and multiple roots
- Cyclotomic polynomials
