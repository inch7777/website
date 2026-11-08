# MATH 161, SHEET 10: MATRIX THEORY I — EIGENVALUES, CHARACTERISTIC POLYNOMIAL, AND MINIMAL POLYNOMIAL

This sheet introduces the fundamental concepts of linear transformations, eigenvalues, eigenvectors, characteristic polynomials, and minimal polynomials—the essential machinery for understanding linear transformations and their canonical forms.

**Commentary.** A linear transformation $T: V \to V$ is completely determined by its matrix representation. But a single matrix contains $n^2$ entries—far too many to understand at a glance. Eigenvalues and eigenvectors reduce this complexity: if $v$ is an eigenvector, then $T$ acts on $v$ by simple scalar multiplication. The minimal polynomial captures the essential algebraic behavior of $T$ with a polynomial of degree at most $n$, distilling all the structural information into a concise form. These concepts are the foundation for the rational and Jordan canonical forms developed in Sheet 11.

**Prerequisites.** This sheet uses the following results from earlier sheets:
- Vector spaces, linear independence, basis, dimension (Sheet 12 — yes, we are jumping ahead slightly; Sheet 12 covers field extensions but also includes vector space fundamentals. Alternatively, this material is standard from linear algebra.)
- Determinants (standard linear algebra)
- Polynomial rings over a field (Sheet 9)
- PIDs and UFDs (Sheet 9)

---

## Linear Transformations and Matrices

**Definition 10.1.** Let $V$ and $W$ be vector spaces over a field $F$. A function $T: V \to W$ is a **linear transformation** (or **linear map**) if for all $u, v \in V$ and $c \in F$:
$$T(u + v) = T(u) + T(v), \qquad T(cv) = cT(v).$$

**Definition 10.2.** Let $V$ be a finite-dimensional vector space over $F$. The set of all linear transformations $T: V \to V$ is denoted $\operatorname{End}_F(V)$.

**Theorem 10.3.** Let $V$ be an $n$-dimensional vector space over $F$. For any basis $\mathcal{B}$ of $V$, the map
$$\Phi: \operatorname{End}_F(V) \to M_n(F), \qquad \Phi(T) = [T]_{\mathcal{B}}$$
is a ring isomorphism. In particular, $\operatorname{End}_F(V) \cong M_n(F)$.

**Corollary 10.4.** Eigenvalues, characteristic polynomials, and minimal polynomials are well-defined for linear transformations (independent of the choice of basis).

**Corollary 10.5.** Two matrices are similar iff they represent the same linear transformation in different bases.

**Exercise 10.6.** Let $T: \mathbb{R}^2 \to \mathbb{R}^2$ be defined by $T(x, y) = (y, 0)$. Find the matrix of $T$ with respect to the standard basis.

**Exercise 10.7.** Prove that composition of linear transformations corresponds to matrix multiplication.

---

## Eigenvalues and Eigenvectors

**Definition 10.8.** Let $V$ be a finite-dimensional vector space over a field $F$, and let $T: V \to V$ be a linear transformation. A scalar $\lambda \in F$ is an **eigenvalue** of $T$ if there exists a nonzero vector $v \in V$ such that:
$$T(v) = \lambda v.$$
Such a vector $v$ is an **eigenvector** of $T$ corresponding to $\lambda$.

**Definition 10.9.** For an $n \times n$ matrix $A \in M_n(F)$, a scalar $\lambda \in F$ is an **eigenvalue** of $A$ if there exists a nonzero vector $v \in F^n$ such that:
$$A v = \lambda v.$$

**Definition 10.10.** The **eigenspace** of $A$ corresponding to $\lambda$ is:
$$E_\lambda = \{v \in F^n \mid A v = \lambda v\} = \ker(A - \lambda I).$$

**Theorem 10.11.** $\lambda \in F$ is an eigenvalue of $A$ iff $\det(A - \lambda I) = 0$.

**Theorem 10.12 (Distinct Eigenvectors are Independent).** If $\lambda_1, \ldots, \lambda_k$ are distinct eigenvalues of $A$, and $v_i$ is an eigenvector for $\lambda_i$, then $\{v_1, \ldots, v_k\}$ is linearly independent.

**Example 10.13.** For $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$:
$$\det(A - \lambda I) = \det\begin{pmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{pmatrix} = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda - 1)(\lambda - 3).$$
Eigenvalues: $\lambda = 1, 3$. Eigenvector for $\lambda = 1$: $(1, -1)$. Eigenvector for $\lambda = 3$: $(1, 1)$.

**Exercise 10.14.** Find the eigenvalues and eigenvectors of $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$.

**Exercise 10.15.** Show that $\lambda = 0$ is an eigenvalue of $A$ iff $A$ is singular.

**Exercise 10.16.** Prove Theorem 10.12.

---

## The Characteristic Polynomial

**Definition 10.17.** The **characteristic polynomial** of $A \in M_n(F)$ is:
$$\chi_A(t) = \det(tI - A) = t^n + c_{n-1}t^{n-1} + \cdots + c_0.$$

**Theorem 10.18.** Similar matrices have the same characteristic polynomial. That is, if $B = P^{-1}AP$, then $\chi_B(t) = \chi_A(t)$.

**Theorem 10.19.** The constant term of $\chi_A(t)$ is $\chi_A(0) = (-1)^n \det A$.

**Theorem 10.20.** The coefficient of $t^{n-1}$ in $\chi_A(t)$ is $-\operatorname{tr}(A)$, where $\operatorname{tr}(A)$ is the sum of the diagonal entries.

**Example 10.21.** For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, $\chi_A(t) = t^2 - (a+d)t + (ad - bc)$.

**Exercise 10.22.** Compute the characteristic polynomial of $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$.

**Exercise 10.23.** Show that similar matrices have the same trace and determinant.

---

## The Cayley-Hamilton Theorem

**Theorem 10.24 (Cayley-Hamilton).** Every square matrix $A$ satisfies its own characteristic polynomial:
$$\chi_A(A) = 0.$$

**Example 10.25.** For $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, $\chi_A(t) = t^2 - 4t + 3$. Indeed:
$$A^2 - 4A + 3I = 0.$$

**Theorem 10.26.** The Cayley-Hamilton theorem provides an algorithm for computing $A^{-1}$:
$$A^{-1} = -\frac{1}{c_0}(A^{n-1} + c_{n-1}A^{n-2} + \cdots + c_1 I)$$
provided $\det A \neq 0$.

**Example 10.27.** For $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $\chi_A(t) = t^2 - 5t - 2$. Thus $A^2 - 5A - 2I = 0$, so $A^{-1} = \frac{1}{2}(A - 5I)$.

**Exercise 10.28.** Verify Cayley-Hamilton for $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.

**Exercise 10.29.** Use the Cayley-Hamilton theorem to find $A^{-1}$ for $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.

---

## The Minimal Polynomial

**Definition 10.30.** The **minimal polynomial** of $A \in M_n(F)$, denoted $m_A(t)$, is the monic polynomial of least degree such that:
$$m_A(A) = 0.$$

**Theorem 10.31.** For any matrix $A$, the minimal polynomial exists and is unique.

**Theorem 10.32.** The minimal polynomial divides every polynomial that annihilates $A$. In particular, $m_A(t)$ divides $\chi_A(t)$.

**Theorem 10.33.** If $B = P^{-1}AP$, then $m_B(t) = m_A(t)$. (Similar matrices have the same minimal polynomial.)

**Theorem 10.34.** $\lambda \in F$ is an eigenvalue of $A$ iff $\lambda$ is a root of $m_A(t)$.

**Theorem 10.35.** The roots of the minimal polynomial are exactly the eigenvalues of $A$.

**Example 10.36.** For $A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$, $\chi_A(t) = (t-2)^2(t-3)$. The minimal polynomial is $m_A(t) = (t-2)(t-3)$.

**Example 10.37.** For $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$, $\chi_A(t) = (t-2)^2(t-3)$. The minimal polynomial is $m_A(t) = (t-2)^2(t-3)$.

**Exercise 10.38.** Find the minimal polynomial of $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.

**Exercise 10.39.** Show that if $A$ is diagonalizable, then $m_A(t)$ has no repeated roots.

**Exercise 10.40.** Prove Theorem 10.31.

---

## Diagonalizability

**Definition 10.41.** A matrix $A \in M_n(F)$ is **diagonalizable** over $F$ if there exists an invertible matrix $P \in M_n(F)$ such that:
$$P^{-1}AP = D$$
is a diagonal matrix.

**Theorem 10.42.** $A$ is diagonalizable over $F$ iff $F^n$ has a basis consisting of eigenvectors of $A$.

**Theorem 10.43.** If $A$ has $n$ distinct eigenvalues in $F$, then $A$ is diagonalizable over $F$.

**Theorem 10.44.** $A$ is diagonalizable over $F$ iff the minimal polynomial $m_A(t)$ factors into distinct linear factors over $F$.

**Theorem 10.45.** The **geometric multiplicity** of an eigenvalue $\lambda$ (dimension of its eigenspace $E_\lambda$) is at most its **algebraic multiplicity** (multiplicity as a root of $\chi_A(t)$):
$$\dim E_\lambda \leq \operatorname{mult}_{\chi_A}(\lambda).$$

**Theorem 10.46.** $A$ is diagonalizable iff equality holds in Theorem 10.45 for every eigenvalue.

**Example 10.47.** $A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ is not diagonalizable over $\mathbb{R}$. Its characteristic polynomial is $(t-2)^2$, but $\dim E_2 = 1 < 2$.

**Exercise 10.48.** Determine whether $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ is diagonalizable over $\mathbb{R}$. If so, find $P$ and $D$.

**Exercise 10.49.** Show that if $A$ is diagonalizable, then every eigenvalue has algebraic multiplicity equal to geometric multiplicity.

**Exercise 10.50.** Prove Theorem 10.44.

---

## Invariant Subspaces

**Definition 10.51.** A subspace $W \subseteq V$ is **$T$-invariant** if $T(W) \subseteq W$.

**Theorem 10.52.** If $W$ is $T$-invariant, then the restriction $T|_W: W \to W$ is a linear transformation.

**Theorem 10.53.** Eigenspaces are invariant subspaces.

**Theorem 10.54.** If $V$ decomposes as a direct sum of $T$-invariant subspaces $V = W_1 \oplus \cdots \oplus W_k$, then the matrix of $T$ is block diagonal with respect to a basis adapted to this decomposition.

**Exercise 10.55.** Show that $\ker(T - \lambda I)$ and $\operatorname{im}(T - \lambda I)$ are $T$-invariant subspaces.

**Exercise 10.56.** Let $V = \mathbb{R}^2$, $T(x, y) = (y, 0)$. Find all $T$-invariant subspaces of $V$.

**Exercise 10.57.** Prove that if $W$ is $T$-invariant, then the characteristic polynomial of $T|_W$ divides the characteristic polynomial of $T$.

---

## Schur's Triangularization Theorem

**Theorem 10.58 (Schur's Triangularization Theorem).** If $A \in M_n(\mathbb{C})$, then there exists a unitary matrix $U$ such that $U^{-1}AU$ is upper triangular.

**Corollary 10.59.** Every complex matrix is triangularizable.

**Corollary 10.60.** The eigenvalues of $A$ appear on the diagonal of the triangular matrix.

**Corollary 10.61.** Every complex matrix has at least one eigenvector.

**Exercise 10.62.** Why does Schur's theorem imply that every complex matrix has at least one eigenvector?

**Exercise 10.63.** Show that the eigenvalues of a triangular matrix are exactly its diagonal entries.

---

## The Characteristic Polynomial of a Block Triangular Matrix

**Theorem 10.64.** If $A = \begin{pmatrix} B & C \\ 0 & D \end{pmatrix}$ is a block upper triangular matrix, then:
$$\chi_A(t) = \chi_B(t) \cdot \chi_D(t).$$

**Corollary 10.65.** The eigenvalues of $A$ are the eigenvalues of $B$ together with the eigenvalues of $D$.

**Exercise 10.66.** Let $A$ be a block diagonal matrix with blocks $A_1, \ldots, A_k$. Show that $\chi_A(t) = \chi_{A_1}(t) \cdots \chi_{A_k}(t)$.

**Exercise 10.67.** Let $A$ be upper triangular. Show that the eigenvalues of $A$ are the diagonal entries.

---

## Summary

We have introduced:

- Linear transformations and their matrix representations
- Eigenvalues and eigenvectors
- Characteristic polynomials and their properties
- The Cayley-Hamilton Theorem
- Minimal polynomials
- Diagonalizability criteria
- Algebraic vs. geometric multiplicity
- Invariant subspaces
- Schur's Triangularization Theorem
- Characteristic polynomial of block triangular matrices
