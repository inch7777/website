
# MATH 161, SHEET 7: INTRODUCTION TO RINGS

This sheet introduces rings—algebraic structures with two operations: addition and multiplication. Rings generalize the integers and provide the foundation for field theory and algebraic geometry.

**Commentary.** Where groups model symmetry, rings model algebraic systems where we can both add and multiply. The integers $\mathbb{Z}$ are the prototypical ring. By abstracting the properties of $\mathbb{Z}$, we obtain structures that appear throughout mathematics: polynomials, matrices, functions, and number systems.

---

## Definition of a Ring

**Definition 7.1.** A **ring** is a set $R$ together with two binary operations $+$ and $\cdot$ (called addition and multiplication) such that:

1. $(R, +)$ is an abelian group.
2. Multiplication is associative: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
3. The distributive laws hold:
   - $a \cdot (b + c) = a \cdot b + a \cdot c$
   - $(a + b) \cdot c = a \cdot c + b \cdot c$

**Definition 7.2.** A ring is **commutative** if $a \cdot b = b \cdot a$ for all $a, b \in R$.

**Definition 7.3.** A ring has **unity** (or is a **ring with unity**) if there exists an element $1 \in R$ such that $1 \cdot a = a \cdot 1 = a$ for all $a \in R$.

**Definition 7.4.** The **zero ring** is the ring with a single element $0$, where $0 + 0 = 0$ and $0 \cdot 0 = 0$. In a nonzero ring, we require $1 \neq 0$.

**Example 7.5.** $(\mathbb{Z}, +, \cdot)$ is a commutative ring with unity.

**Example 7.6.** $(\mathbb{Q}, +, \cdot)$, $(\mathbb{R}, +, \cdot)$, $(\mathbb{C}, +, \cdot)$ are commutative rings with unity.

**Example 7.7.** $(\mathbb{Z}_n, +, \cdot)$ is a commutative ring with unity.

**Example 7.8.** The set $M_n(\mathbb{R})$ of $n \times n$ matrices with real entries, with matrix addition and multiplication, is a ring with unity. It is not commutative for $n \geq 2$.

**Example 7.9.** The set of all functions $f: \mathbb{R} \to \mathbb{R}$, with pointwise addition and multiplication, is a commutative ring with unity.

**Example 7.10.** The set $2\mathbb{Z}$ of even integers with usual addition and multiplication is a commutative ring **without unity**.

**Exercise 7.11.** Verify that $(\mathbb{Z}, +, \cdot)$ satisfies all ring axioms.

**Exercise 7.12.** Show that $M_2(\mathbb{Z})$ is a ring. Is it commutative? What is its unity?

---

## Basic Properties of Rings

**Theorem 7.13.** In any ring $R$, for all $a \in R$:
$$a \cdot 0 = 0 \cdot a = 0.$$ where zero is identity for $(R,+)$.


**Theorem 7.14.** In any ring $R$, for all $a, b \in R$:
$$a \cdot (-b) = -(a \cdot b) = (-a) \cdot b.$$

**Theorem 7.15.** In any ring $R$, for all $a, b \in R$:
$$(-a) \cdot (-b) = a \cdot b.$$


---

## Subrings

**Definition 7.18.** A nonempty subset $S \subseteq R$ is a **subring** of $R$ if $S$ is closed under addition, subtraction, and multiplication. Equivalently, $S$ is a ring with the induced operations.

**Theorem 7.19 (Subring Criterion).** A nonempty subset $S \subseteq R$ is a subring iff for all $a, b \in S$:
$$a - b \in S \quad \text{and} \quad a \cdot b \in S.$$

**Example 7.20.** $\mathbb{Z} \subseteq \mathbb{Q}$ is a subring.

**Example 7.21.** The set of diagonal matrices is a subring of $M_n(\mathbb{R})$.

**Example 7.22.** $n\mathbb{Z}$ is a subring of $\mathbb{Z}$.

**Exercise 7.23.** Show that the set of upper triangular $2 \times 2$ matrices is a subring of $M_2(\mathbb{R})$.

**Exercise 7.24.** Let $R$ be a ring and $a \in R$. Show that the set $\{n \cdot a \mid n \in \mathbb{Z}\}$ is a subring of $R$.

---

## Units

**Definition 7.25.** Let $R$ be a ring with unity. An element $u \in R$ is a **unit** if it has a multiplicative inverse, i.e., there exists $v \in R$ such that:
$$uv = vu = 1.$$
The set of all units of $R$ is denoted $R^\times$.

**Theorem 7.26.** $R^\times$ is a group under multiplication.

**Example 7.27.** $\mathbb{Z}^\times = \{\pm 1\}$.

**Example 7.28.** $(\mathbb{Z}_n)^\times = \{a \in \mathbb{Z}_n \mid \gcd(a, n) = 1\}$.

**Example 7.29.** $\mathbb{Q}^\times = \mathbb{Q} \setminus \{0\}$.

**Exercise 7.30.** Find the units of $\mathbb{Z}_{12}$.

**Exercise 7.31.** Prove Theorem 7.26.

---

## Integral Domains

**Definition 7.32.** A nonzero commutative ring with unity is an **integral domain** if it has no zero divisors, i.e. :
$$a \cdot b = 0 \implies a = 0 \text{ or } b = 0.$$

**Definition 7.33.** A nonzero element $a \in R$ is a **zero divisor** if there exists $b \neq 0$ such that $a \cdot b = 0$ or $b \cdot a = 0$.

**Example 7.34.** $\mathbb{Z}$ is an integral domain.

**Example 7.35.** $\mathbb{Z}_p$ (where $p$ is prime) is an integral domain.

**Example 7.36.** $\mathbb{Z}_6$ is **not** an integral domain since $2 \cdot 3 = 0$.

**Example 7.37.** $M_2(\mathbb{R})$ is not an integral domain (zero divisors exist).

**Theorem 7.38.** In an integral domain, the cancellation law holds:
$$a \neq 0 \text{ and } a b = a c \implies b = c.$$

**Theorem 7.39.** Every finite integral domain is a field.

Math Language: mapping!!

**Exercise 7.40.** Show that $\mathbb{Z}_{12}$ has zero divisors. Find all of them.

**Exercise 7.41.** Prove that in an integral domain, the only idempotent elements (elements satisfying $a^2 = a$) are $0$ and $1$.

---

## Fields

**Definition 7.42.** A **field** is a commutative ring with unity $1 \neq 0$ in which every nonzero element has a multiplicative inverse. Equivalently, $R^\times = R \setminus \{0\}$.

**Example 7.43.** $\mathbb{Q}, \mathbb{R}, \mathbb{C}$ are fields.

**Example 7.44.** $\mathbb{Z}_p$ (where $p$ is prime) is a field.

**Example 7.45.** $\mathbb{Z}$ is **not** a field.

**Theorem 7.46.** Every field is an integral domain.

**Theorem 7.47.** Every finite integral domain is a field.

**Exercise 7.48.** Show that $\mathbb{Q}(\sqrt{2}) = \{a + b\sqrt{2} \mid a, b \in \mathbb{Q}\}$ is a field.

**Exercise 7.49.** Prove Theorem 7.47.

---

## The Field of Fractions

**Definition 7.50.0 (Frac(D)).** Let D be an integral domain. Define an equivalence relation on $D × (D\setminus\{ 0 \})$ by:
$$(a, b) \sim (c, d) \iff ad = bc.$$
Let $F = (D \times (D \setminus \{0\})) / \sim$ be the set of equivalence classes. Denote the class of $(a, b)$ by $a/b$ or $\frac{a}{b}$.
Define:
$$\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}, \qquad \frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}.$$
Then $(F, +, \cdot)$ is a field. It is called the **field of fractions** of $D$, denoted $\operatorname{Frac}(D)$.

**Theorem7.50.1** Let $R$ and $S$ be rings. An injective homomorphism $\varphi:R\to S$ is called an embedding.)

**Theorem 7.50.2** The map $\varphi: D \to \operatorname{Frac}(D)$ defined by $\varphi(a) = a/1$ is an embedding.


**Theorem 7.50.** Every integral domain $D$ can be embedded in a field $F = \operatorname{Frac}(D)$, called the **field of fractions** of $D$. Every element of $\operatorname{Frac}(D)$ can be written as $a/b$ with $a, b \in D$, $b \neq 0$.



**Example 7.51.** $\operatorname{Frac}(\mathbb{Z}) = \mathbb{Q}$.

**Example 7.52.** $\operatorname{Frac}(F[x]) = F(x)$.

**Exercise 7.53.** Construct $\operatorname{Frac}(\mathbb{Z}[i])$ explicitly.

---

## Characteristic of a Ring

**Definition 7.54.** Let $R$ be a ring. If there exists a positive integer $n$ such that $n \cdot 1 = 0$, the **characteristic** of $R$, denoted $\operatorname{char}(R)$, is the smallest such $n$. If no such $n$ exists, $\operatorname{char}(R) = 0$.

**Theorem 7.55.** The characteristic of an integral domain is either $0$ or a prime number.

**Theorem 7.56.** If $\operatorname{char}(R) = n > 0$, then $n \cdot a = 0$ for all $a \in R$.

**Example 7.57.** $\operatorname{char}(\mathbb{Z}) = 0$, $\operatorname{char}(\mathbb{Z}_p) = p$, $\operatorname{char}(\mathbb{Q}) = 0$.

**Example 7.58.** $\operatorname{char}(\mathbb{Z}_6) = 6$ (not an integral domain).

**Exercise 7.59.** What is the characteristic of $\mathbb{Z}_2 \times \mathbb{Z}_3$? Of $\mathbb{Z}_2 \times \mathbb{Z}_2$?

**Exercise 7.60.** Prove Theorem 7.55.

---

## Ring Homomorphisms and Isomorphisms

**Definition 7.61.** Let $R, S$ be rings. A function $\varphi: R \to S$ is a **ring homomorphism** if for all $a, b \in R$:
$$\varphi(a + b) = \varphi(a) + \varphi(b), \quad \varphi(a \cdot b) = \varphi(a) \cdot \varphi(b).$$

**Definition 7.62.** A **ring isomorphism** is a bijective ring homomorphism. We write $R \cong S$ if such an isomorphism exists.

**Definition 7.63.** The **kernel** of a ring homomorphism $\varphi: R \to S$ is:
$$\ker \varphi = \{a \in R \mid \varphi(a) = 0_S\}.$$

**Theorem 7.64.** If $\varphi: R \to S$ is a ring homomorphism, then $\ker \varphi$ is a subring of $R$.

**Theorem 7.65.** A ring homomorphism $\varphi: R \to S$ is injective iff $\ker \varphi = \{0\}$.

**Theorem 7.66.** Let $\varphi: R \to S$ be a ring homomorphism.

1. $\varphi(0) = 0$.
2. $\varphi(-a) = -\varphi(a)$.
3. If $R$ has unity $1$, then $\varphi(1)$ is unity for $\varphi(R)$.
4. If $u \in R$ is a unit, then $\varphi(u)$ is a unit in $S$.

**Example 7.67.** The map $\varphi: \mathbb{Z} \to \mathbb{Z}_n$ given by $\varphi(m) = m \bmod n$ is a ring homomorphism.

**Example 7.68.** The evaluation map $\varphi_a: \mathbb{Z}[x] \to \mathbb{Z}$ given by $\varphi_a(f(x)) = f(a)$ is a ring homomorphism.

**Exercise 7.69.** Show that the map $\varphi: \mathbb{Z} \to \mathbb{Z}$ given by $\varphi(n) = 2n$ is **not** a ring homomorphism.

**Exercise 7.70.** Find all ring homomorphisms from $\mathbb{Z}$ to $\mathbb{Z}$.

**Exercise 7.71.** Prove Theorem 7.66(1) and (2).

---

## Summary

We have introduced:

- The definition of a ring (additive abelian group + associative multiplication + distributivity)
- Commutative rings, rings with unity, the zero ring
- Units and the unit group $R^\times$
- Subrings and the subring criterion
- Zero divisors and integral domains
- Fields and finite integral domains
- The field of fractions of an integral domain
- Characteristic of a ring
- Ring homomorphisms, isomorphisms, and kernels
