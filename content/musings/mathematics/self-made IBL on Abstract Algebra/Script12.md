
# MATH 161, SHEET 12: FIELD EXTENSIONS

This sheet introduces field extensions—the central objects of Galois theory. We study how fields can be enlarged by adjoining new elements, and we develop the machinery of degrees, algebraic elements, and splitting fields.

**Commentary.** Just as groups have subgroups and vector spaces have subspaces, fields have subfields and extension fields. A field extension $E/F$ is a way of "expanding" a field $F$ to a larger field $E$. The degree $[E:F]$ measures how much larger $E$ is, analogous to the index of a subgroup. Understanding field extensions is essential for solving polynomial equations—the roots of a polynomial naturally live in extensions of the coefficient field. The theory of field extensions culminates in Galois theory, where the structure of extensions is translated into the language of groups.

**Prerequisites.** This sheet uses the following results from earlier sheets:
- Fields, integral domains (Sheet 7)
- Polynomial rings, irreducibility, Eisenstein's criterion (Sheet 9)
- Ideals, maximal ideals, quotient rings (Sheet 8)
- Vector spaces, bases, dimension (Sheet 9.5)

---

## Field Extensions

**Definition 12.1.** A **field extension** is a pair of fields $E$ and $F$ such that $F \subseteq E$. We write $E/F$ (read "$E$ over $F$") and say that $E$ is an **extension field** of $F$.

**Definition 12.2.** If $E/F$ is a field extension, then $E$ is a vector space over $F$ (with scalar multiplication given by field multiplication). The **degree** of the extension is:
$$[E:F] = \dim_F E.$$
The extension is **finite** if $[E:F] < \infty$.

**Example 12.3.** $\mathbb{C}/\mathbb{R}$ has degree $2$ since $\{1, i\}$ is a basis over $\mathbb{R}$.

**Example 12.4.** $\mathbb{R}/\mathbb{Q}$ has infinite degree (uncountable).

**Example 12.5.** $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$ has degree $2$ since $\{1, \sqrt{2}\}$ is a basis.

**Theorem 12.6 (Tower Law).** If $F \subseteq K \subseteq E$, then:
$$[E:F] = [E:K][K:F].$$

**Exercise 12.7.** Compute $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}]$.

**Exercise 12.8.** Let $E/F$ be a field extension with $[E:F] = 1$. Prove that $E = F$.

**Exercise 12.9.** Show that $\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$ has degree $3$.

---

## Algebraic and Transcendental Elements

**Definition 12.10.** Let $E/F$ be a field extension. An element $\alpha \in E$ is **algebraic** over $F$ if there exists a nonzero polynomial $f(x) \in F[x]$ such that $f(\alpha) = 0$. Otherwise, $\alpha$ is **transcendental** over $F$.

**Definition 12.11.** The **minimal polynomial** of an algebraic element $\alpha$ over $F$, denoted $m_{\alpha,F}(x)$, is the unique monic irreducible polynomial in $F[x]$ of smallest degree such that $m_{\alpha,F}(\alpha) = 0$.

**Theorem 12.12.** If $\alpha \in E$ is algebraic over $F$, then the minimal polynomial $m_{\alpha,F}(x)$ exists and is unique. Moreover, $m_{\alpha,F}(x)$ divides every polynomial in $F[x]$ that has $\alpha$ as a root.

**Example 12.13.** $m_{\sqrt{2},\mathbb{Q}}(x) = x^2 - 2$.

**Example 12.14.** $m_{i,\mathbb{R}}(x) = x^2 + 1$.

**Example 12.15.** $m_{\sqrt[3]{2},\mathbb{Q}}(x) = x^3 - 2$.

**Theorem 12.16.** If $\alpha$ is algebraic over $F$, then:
$$F(\alpha) \cong F[x]/(m_{\alpha,F}(x)).$$

**Theorem 12.17.** If $\alpha$ is algebraic over $F$, then:
$$[F(\alpha) : F] = \deg m_{\alpha,F}(x).$$

**Exercise 12.18.** Find the minimal polynomial of $\sqrt{2} + \sqrt{3}$ over $\mathbb{Q}$.

**Exercise 12.19.** Show that $\pi$ is transcendental over $\mathbb{Q}$ (you may assume this known fact). What is $[\mathbb{Q}(\pi) : \mathbb{Q}]$?

**Exercise 12.20.** Let $\alpha \in E$ be algebraic over $F$. Prove that $\alpha^{-1}$ is algebraic over $F$.

---

## Simple Extensions

**Definition 12.21.** A field extension $E/F$ is **simple** if $E = F(\alpha)$ for some $\alpha \in E$.

**Theorem 12.22.** If $\alpha$ is algebraic over $F$, then $F(\alpha)$ consists of all polynomial expressions in $\alpha$:
$$F(\alpha) = \{a_0 + a_1\alpha + \cdots + a_{n-1}\alpha^{n-1} \mid a_i \in F\},$$
where $n = [F(\alpha) : F]$.

**Theorem 12.23.** If $\alpha$ is transcendental over $F$, then $F(\alpha) \cong F(x)$, the field of rational functions in one variable.

**Example 12.24.** $\mathbb{Q}(\sqrt{2}) = \{a + b\sqrt{2} \mid a, b \in \mathbb{Q}\}$.

**Example 12.25.** $\mathbb{Q}(\sqrt[3]{2}) = \{a + b\sqrt[3]{2} + c\sqrt[3]{4} \mid a, b, c \in \mathbb{Q}\}$.

**Exercise 12.26.** Describe $\mathbb{Q}(i)$ explicitly.

**Exercise 12.27.** Show that $\mathbb{Q}(\sqrt{2} + \sqrt{3}) = \mathbb{Q}(\sqrt{2}, \sqrt{3})$.

**Exercise 12.28.** Prove Theorem 12.22.

---

## Algebraic Extensions

**Definition 12.28.** A field extension $E/F$ is **algebraic** if every element of $E$ is algebraic over $F$.

**Theorem 12.29.** Every finite extension is algebraic.

**Theorem 12.30.** If $E/F$ is algebraic and $K/E$ is algebraic, then $K/F$ is algebraic.

**Theorem 12.31.** If $E = F(\alpha_1, \ldots, \alpha_n)$ where each $\alpha_i$ is algebraic over $F$, then $E/F$ is finite (and hence algebraic).

**Definition 12.32.** The **algebraic closure of $F$ in $E$** is:
$$\overline{F}_E = \{\alpha \in E \mid \alpha \text{ is algebraic over } F\}.$$

**Theorem 12.33.** The algebraic closure of $F$ in $E$ is a subfield of $E$.

**Exercise 12.34.** Show that $\mathbb{Q}(\sqrt{2}, \sqrt{3}, \sqrt{5})/\mathbb{Q}$ is finite. Compute its degree.

**Exercise 12.35.** Prove that if $E/F$ is algebraic and $E$ is finitely generated as a field over $F$, then $E/F$ is finite.

**Exercise 12.36.** Let $\alpha, \beta \in E$ be algebraic over $F$. Prove that $\alpha + \beta$ and $\alpha\beta$ are algebraic over $F$.

---

## Splitting Fields

**Definition 12.37.** Let $f(x) \in F[x]$. A field extension $E/F$ is a **splitting field** for $f$ over $F$ if:

1. $f$ splits completely into linear factors in $E[x]$.
2. $E = F(\alpha_1, \ldots, \alpha_n)$ where $\alpha_1, \ldots, \alpha_n$ are the roots of $f$ in $E$.

**Theorem 12.38.** For every nonconstant polynomial $f(x) \in F[x]$, a splitting field for $f$ over $F$ exists and is unique up to isomorphism.

**Example 12.39.** The splitting field of $x^2 - 2$ over $\mathbb{Q}$ is $\mathbb{Q}(\sqrt{2})$.

**Example 12.40.** The splitting field of $x^3 - 2$ over $\mathbb{Q}$ is $\mathbb{Q}(\sqrt[3]{2}, \omega)$, where $\omega = e^{2\pi i/3}$.

**Example 12.41.** The splitting field of $x^2 + 1$ over $\mathbb{R}$ is $\mathbb{C}$.

**Theorem 12.42.** If $E$ is a splitting field of $f \in F[x]$, then every irreducible polynomial over $F$ that has one root in $E$ splits completely in $E$.

**Exercise 12.43.** Find the splitting field of $x^4 - 4$ over $\mathbb{Q}$.

**Exercise 12.44.** Find the splitting field of $x^3 + 1$ over $\mathbb{Q}$.

**Exercise 12.45.** Show that the splitting field of $x^2 - 2x - 1$ over $\mathbb{Q}$ is $\mathbb{Q}(\sqrt{2})$.

---

## Algebraic Closure

**Definition 12.46.** A field $F$ is **algebraically closed** if every nonconstant polynomial in $F[x]$ has a root in $F$.

**Definition 12.47.** A field $\overline{F}$ is an **algebraic closure** of $F$ if:

1. $\overline{F}$ is algebraic over $F$.
2. $\overline{F}$ is algebraically closed.

**Theorem 12.48.** Every field $F$ has an algebraic closure $\overline{F}$, unique up to isomorphism.

**Theorem 12.49.** The field of complex numbers $\mathbb{C}$ is algebraically closed (Fundamental Theorem of Algebra).

**Example 12.50.** $\overline{\mathbb{Q}}$ is the field of all algebraic numbers.

**Example 12.51.** $\overline{\mathbb{F}_p}$ is the algebraic closure of the finite field with $p$ elements.

**Theorem 12.52.** If $F$ is algebraically closed, then every polynomial in $F[x]$ splits completely into linear factors.

**Exercise 12.53.** Why is $\mathbb{R}$ not algebraically closed? What polynomial demonstrates this?

**Exercise 12.54.** Show that $\overline{\mathbb{Q}}$ is countable.

**Exercise 12.55.** Prove that if $F$ is algebraically closed, then $F$ has no proper algebraic extensions.

---

## Finite Fields (Preview)

**Definition 12.56.** A **finite field** is a field with finitely many elements.

**Theorem 12.57.** A finite field $F$ has $p^n$ elements for some prime $p$ and positive integer $n$. The prime $p$ is the characteristic of $F$.

**Theorem 12.58.** For every prime $p$ and positive integer $n$, there exists a finite field with $p^n$ elements. This field is unique up to isomorphism and is denoted $\mathbb{F}_{p^n}$ or $\mathrm{GF}(p^n)$.

**Theorem 12.59.** The multiplicative group $\mathbb{F}_{p^n}^\times$ of nonzero elements of a finite field is cyclic.

**Example 12.60.** $\mathbb{F}_4$ has elements $\{0, 1, \alpha, \alpha+1\}$ with $\alpha^2 = \alpha + 1$.

**Exercise 12.61.** Construct the addition and multiplication tables for $\mathbb{F}_4$.

**Exercise 12.62.** Show that $\mathbb{F}_4$ is not isomorphic to $\mathbb{Z}_4$.

---

## Summary

We have introduced:

- Field extensions $E/F$ and the degree $[E:F]$
- The Tower Law for degrees
- Algebraic and transcendental elements
- Minimal polynomials
- Simple extensions $F(\alpha)$
- Algebraic extensions and finite extensions
- Splitting fields
- Algebraic closures
- Finite fields
