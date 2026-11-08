
# MATH 161, SHEET 9.5: VECTOR SPACES AND LINEAR TRANSFORMATIONS

This sheet introduces vector spaces and linear transformations—the fundamental structures underlying matrix theory and many parts of advanced algebra. Vector spaces provide the language for discussing linear equations, eigenvalues, and canonical forms. Linear transformations are the structure-preserving maps between vector spaces.

**Commentary.** A vector space is an abstraction of Euclidean space \(\mathbb{R}^n\). The key idea is that we can add vectors and multiply them by scalars (elements of a field). Linear transformations preserve these operations. This framework is essential for understanding matrices, linear systems, and the structural results (rational and Jordan canonical forms) that follow.

**Prerequisites.** This sheet uses the following results from earlier sheets:
- Fields (Sheet 7, Definition 7.42)
- Rings, fields as commutative rings with unity (Sheet 7)
- Groups and abelian groups (Sheet 1)

---

## Fields and Scalars

**Definition 9.5.1.** A **field** is a commutative ring with unity \(1 \neq 0\) in which every nonzero element has a multiplicative inverse.

**Remark.** We will use \(F\) to denote an arbitrary field. The elements of \(F\) are called **scalars**.

**Example 9.5.2.** \(\mathbb{Q}\), \(\mathbb{R}\), \(\mathbb{C}\), and \(\mathbb{Z}_p\) (for prime \(p\)) are fields.

---

## Vector Spaces

**Definition 9.5.3.** Let \(F\) be a field. A **vector space** over \(F\) (or \(F\)-**vector space**) is a set \(V\) together with two operations:
- **Vector addition:** \(+ : V \times V \to V\), denoted \(v + w\)
- **Scalar multiplication:** \(\cdot : F \times V \to V\), denoted \(a v\)

such that for all \(u, v, w \in V\) and \(a, b \in F\):

1. \((V, +)\) is an abelian group.
2. \(a(v + w) = av + aw\) (distributivity over vector addition)
3. \((a + b)v = av + bv\) (distributivity over scalar addition)
4. \(a(bv) = (ab)v\) (associativity of scalar multiplication)
5. \(1v = v\) (identity for scalar multiplication)

The elements of \(V\) are called **vectors**. The additive identity of \(V\) is denoted \(\mathbf{0}\) (or simply \(0\)).

**Example 9.5.4.** \(\mathbb{R}^n = \{(x_1, \ldots, x_n) \mid x_i \in \mathbb{R}\}\) is a vector space over \(\mathbb{R}\) with component-wise addition and scalar multiplication.

**Example 9.5.5.** \(F^n\) is a vector space over \(F\) for any field \(F\).

**Example 9.5.6.** The set of all polynomials \(F[x]\) is a vector space over \(F\).

**Example 9.5.7.** The set of all \(m \times n\) matrices over \(F\), denoted \(M_{m \times n}(F)\), is a vector space over \(F\).

**Exercise 9.5.8.** Verify that \(\mathbb{R}^2\) satisfies all vector space axioms.

**Exercise 9.5.9.** Show that \(V = \{0\}\) is a vector space over any field \(F\).

---

## Subspaces

**Definition 9.5.10.** A **subspace** of a vector space \(V\) over \(F\) is a nonempty subset \(W \subseteq V\) that is itself a vector space over \(F\) with the induced operations.

**Theorem 9.5.11 (Subspace Criterion).** A nonempty subset \(W \subseteq V\) is a subspace iff for all \(w_1, w_2 \in W\) and \(a \in F\):
$$w_1 + w_2 \in W \quad \text{and} \quad a w_1 \in W.$$

**Example 9.5.12.** The set \(\{(x, y) \in \mathbb{R}^2 \mid y = 2x\}\) is a subspace of \(\mathbb{R}^2\).

**Example 9.5.13.** The set of polynomials of degree \(\leq n\) is a subspace of \(F[x]\).

**Exercise 9.5.14.** Prove Theorem 9.5.11.

**Exercise 9.5.15.** Show that the intersection of any collection of subspaces of \(V\) is a subspace.

---

## Linear Combinations, Span, and Linear Independence

**Definition 9.5.16.** Let \(v_1, \ldots, v_n \in V\). A **linear combination** of these vectors is an expression:
$$a_1 v_1 + a_2 v_2 + \cdots + a_n v_n, \quad a_i \in F.$$

**Definition 9.5.17.** The **span** of a set \(S \subseteq V\) is the set of all finite linear combinations of vectors in \(S\):
$$\operatorname{span}(S) = \left\{ \sum_{i=1}^k a_i v_i \mid v_i \in S, a_i \in F \right\}.$$
If \(\operatorname{span}(S) = V\), we say \(S\) **spans** \(V\) (or generates \(V\)).

**Definition 9.5.18.** A set of vectors \(\{v_1, \ldots, v_n\}\) is **linearly independent** if:
$$a_1 v_1 + \cdots + a_n v_n = 0 \implies a_1 = \cdots = a_n = 0.$$
Otherwise, it is **linearly dependent**.

**Example 9.5.19.** In \(\mathbb{R}^3\), \(\{(1,0,0), (0,1,0), (0,0,1)\}\) is linearly independent and spans \(\mathbb{R}^3\).

**Example 9.5.20.** In \(\mathbb{R}^2\), \(\{(1,2), (2,4)\}\) is linearly dependent (since \((2,4) = 2(1,2)\)).

**Exercise 9.5.21.** Determine whether the following sets are linearly independent:
(a) \(\{(1,0), (0,1)\}\) in \(\mathbb{R}^2\)
(b) \(\{(1,2), (3,6)\}\) in \(\mathbb{R}^2\)
(c) \(\{1, x, x^2\}\) in \(F[x]\)

**Exercise 9.5.22.** Prove that a set containing the zero vector is linearly dependent.

**Exercise 9.5.23.** Prove that \(\operatorname{span}(S)\) is a subspace of \(V\).

---

## Bases and Dimension

**Definition 9.5.24.** A **basis** of a vector space \(V\) is a linearly independent set that spans \(V\).

**Theorem 9.5.25 (Existence of Basis).** Every vector space has a basis. In particular, every finite-dimensional vector space has a finite basis.

**Theorem 9.5.26 (Replacement Theorem).** If \(\{v_1, \ldots, v_n\}\) is a basis of \(V\), then any linearly independent set has at most \(n\) elements, and any spanning set has at least \(n\) elements.

**Corollary 9.5.27.** Any two bases of a finite-dimensional vector space have the same number of elements.

**Definition 9.5.28.** The **dimension** of a finite-dimensional vector space \(V\) over \(F\), denoted \(\dim_F V\), is the number of elements in any basis.

**Example 9.5.29.** \(\dim_F F^n = n\).

**Example 9.5.30.** \(\dim_F F[x]\) is infinite.

**Example 9.5.31.** \(\dim_\mathbb{R} \mathbb{C} = 2\) (basis \(\{1, i\}\)).

**Exercise 9.5.32.** Find a basis for the subspace \(\{(x, y, z) \in \mathbb{R}^3 \mid x + y + z = 0\}\).

**Exercise 9.5.33.** Show that \(\dim_F M_{m \times n}(F) = mn\).

**Exercise 9.5.34.** Prove the Replacement Theorem.

---

## Linear Transformations

**Definition 9.5.35.** Let \(V, W\) be vector spaces over the same field \(F\). A function \(T: V \to W\) is a **linear transformation** (or **linear map**) if for all \(u, v \in V\) and \(a \in F\):
$$T(u + v) = T(u) + T(v), \qquad T(a v) = a T(v).$$

**Definition 9.5.36.** The **kernel** (or **null space**) of \(T\) is:
$$\ker(T) = \{v \in V \mid T(v) = 0_W\}.$$
The **image** (or **range**) of \(T\) is:
$$\operatorname{im}(T) = \{T(v) \mid v \in V\}.$$

**Theorem 9.5.37.** \(\ker(T)\) is a subspace of \(V\), and \(\operatorname{im}(T)\) is a subspace of \(W\).

**Theorem 9.5.38 (Dimension Theorem).** If \(V\) is finite-dimensional and \(T: V \to W\) is linear, then:
$$\dim_F V = \dim_F \ker(T) + \dim_F \operatorname{im}(T).$$

**Definition 9.5.39.** A linear transformation \(T: V \to W\) is:
- **injective** if \(\ker(T) = \{0\}\)
- **surjective** if \(\operatorname{im}(T) = W\)
- **bijective** (or an **isomorphism**) if both injective and surjective

**Example 9.5.40.** The map \(T: \mathbb{R}^2 \to \mathbb{R}^2\) defined by \(T(x, y) = (y, 0)\) has \(\ker(T) = \{(x, 0) \mid x \in \mathbb{R}\}\) and \(\operatorname{im}(T) = \{(0, y) \mid y \in \mathbb{R}\}\).

**Exercise 9.5.41.** Show that the map \(T: F[x] \to F[x]\) given by \(T(f) = f'\) (derivative) is linear.

**Exercise 9.5.42.** Prove Theorem 9.5.37.

**Exercise 9.5.43.** Prove the Dimension Theorem.

---

## The Matrix of a Linear Transformation

**Definition 9.5.44.** Let \(V\) be an \(n\)-dimensional vector space over \(F\) with basis \(\mathcal{B} = \{v_1, \ldots, v_n\}\). The **coordinate vector** of \(v = a_1 v_1 + \cdots + a_n v_n\) is:
$$[v]_{\mathcal{B}} = \begin{pmatrix} a_1 \\ \vdots \\ a_n \end{pmatrix} \in F^n.$$

**Definition 9.5.45.** Let \(T: V \to W\) be linear, with bases \(\mathcal{B}\) of \(V\) and \(\mathcal{C}\) of \(W\). The **matrix of \(T\)** with respect to \(\mathcal{B}\) and \(\mathcal{C}\), denoted \([T]_{\mathcal{C} \leftarrow \mathcal{B}}\), is the \(m \times n\) matrix whose \(j\)-th column is \([T(v_j)]_{\mathcal{C}}\).

**Theorem 9.5.46.** For all \(v \in V\):
$$[T(v)]_{\mathcal{C}} = [T]_{\mathcal{C} \leftarrow \mathcal{B}} \cdot [v]_{\mathcal{B}}.$$

**Theorem 9.5.47.** The map \(\Phi: \operatorname{End}_F(V) \to M_n(F)\) defined by \(\Phi(T) = [T]_{\mathcal{B}}\) (with respect to a fixed basis \(\mathcal{B}\)) is a ring isomorphism. In particular, composition of linear transformations corresponds to matrix multiplication.

**Example 9.5.48.** Let \(T: \mathbb{R}^2 \to \mathbb{R}^2\) be \(T(x, y) = (y, 0)\). With the standard basis \(e_1 = (1,0), e_2 = (0,1)\), we have:
$$[T] = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}.$$

**Exercise 9.5.49.** Let \(T: \mathbb{R}^3 \to \mathbb{R}^3\) be \(T(x, y, z) = (x + y, y + z, z)\). Find the matrix of \(T\) with respect to the standard basis.

**Exercise 9.5.50.** Prove Theorem 9.5.46.

---

## Change of Basis and Similarity

**Definition 9.5.51.** Let \(\mathcal{B}\) and \(\mathcal{B}'\) be two bases of \(V\). The **change-of-basis matrix** from \(\mathcal{B}\) to \(\mathcal{B}'\), denoted \(P_{\mathcal{B}' \leftarrow \mathcal{B}}\), is the matrix whose columns are \([v_i]_{\mathcal{B}'}\) for each \(v_i \in \mathcal{B}\).

**Theorem 9.5.52.** For any vector \(v \in V\):
$$[v]_{\mathcal{B}'} = P_{\mathcal{B}' \leftarrow \mathcal{B}} \cdot [v]_{\mathcal{B}}.$$

**Theorem 9.5.53.** If \(T: V \to V\) is a linear transformation, and \(\mathcal{B}, \mathcal{B}'\) are two bases of \(V\), then:
$$[T]_{\mathcal{B}'} = P^{-1} [T]_{\mathcal{B}} P,$$
where \(P = P_{\mathcal{B}' \leftarrow \mathcal{B}}\).

**Definition 9.5.54.** Two matrices \(A, B \in M_n(F)\) are **similar** if \(B = P^{-1}AP\) for some invertible \(P \in M_n(F)\).

**Corollary 9.5.55.** Similar matrices represent the same linear transformation in different bases.

**Exercise 9.5.56.** Let \(T: \mathbb{R}^2 \to \mathbb{R}^2\) be \(T(x, y) = (y, x)\). Find the matrix of \(T\) in the standard basis and in the basis \(\{(1,1), (1,-1)\}\). Show they are similar.

**Exercise 9.5.57.** Prove Theorem 9.5.53.

---

## Direct Sums

**Definition 9.5.58.** Let \(U_1, \ldots, U_k\) be subspaces of \(V\). Their **sum** is:
$$U_1 + \cdots + U_k = \{u_1 + \cdots + u_k \mid u_i \in U_i\}.$$

**Definition 9.5.59.** The sum \(V = U_1 + \cdots + U_k\) is a **direct sum**, denoted \(V = U_1 \oplus \cdots \oplus U_k\), if every vector \(v \in V\) can be written uniquely as \(v = u_1 + \cdots + u_k\) with \(u_i \in U_i\).

**Theorem 9.5.60.** \(V = U_1 \oplus \cdots \oplus U_k\) iff:
1. \(V = U_1 + \cdots + U_k\), and
2. \(U_i \cap \sum_{j \neq i} U_j = \{0\}\) for each \(i\).

**Theorem 9.5.61.** If \(V = U_1 \oplus \cdots \oplus U_k\), then:
$$\dim_F V = \dim_F U_1 + \cdots + \dim_F U_k.$$

**Example 9.5.62.** \(\mathbb{R}^3 = \{(x,0,0)\} \oplus \{(0,y,0)\} \oplus \{(0,0,z)\}\).

**Exercise 9.5.63.** Let \(U = \{(x,y,0) \mid x, y \in \mathbb{R}\}\) and \(W = \{(0,0,z) \mid z \in \mathbb{R}\}\). Show that \(\mathbb{R}^3 = U \oplus W\).

**Exercise 9.5.64.** Prove Theorem 9.5.60.

---

## Invariant Subspaces

**Definition 9.5.65.** Let \(T: V \to V\) be a linear transformation. A subspace \(W \subseteq V\) is **\(T\)-invariant** if \(T(W) \subseteq W\).

**Theorem 9.5.66.** If \(W\) is \(T\)-invariant, then the restriction \(T|_W: W \to W\) is a linear transformation.

**Theorem 9.5.67.** If \(V = W_1 \oplus \cdots \oplus W_k\) is a direct sum of \(T\)-invariant subspaces, then the matrix of \(T\) with respect to a basis adapted to this decomposition is block diagonal.

**Example 9.5.68.** For \(T: \mathbb{R}^2 \to \mathbb{R}^2\) with \(T(x,y) = (2x, 3y)\), the \(x\)-axis and \(y\)-axis are invariant subspaces.

**Exercise 9.5.69.** Show that \(\ker(T)\) and \(\operatorname{im}(T)\) are \(T\)-invariant subspaces.

**Exercise 9.5.70.** Let \(T\) be diagonalizable. Show that each eigenspace is \(T\)-invariant.

---

## Determinants (Review of Properties)

**Definition 9.5.71.** Let \(A \in M_n(F)\). The **determinant** of \(A\), denoted \(\det(A)\), is a scalar in \(F\) characterized by the following properties:

1. **Multilinearity:** \(\det\) is linear in each row.
2. **Alternating:** If two rows are swapped, \(\det\) changes sign.
3. **Normalization:** \(\det(I_n) = 1\).

**Theorem 9.5.72.** For all \(A, B \in M_n(F)\):
$$\det(AB) = \det(A) \det(B).$$

**Theorem 9.5.73.** \(A\) is invertible iff \(\det(A) \neq 0\).

**Theorem 9.5.74.** For any \(A \in M_n(F)\) and scalar \(\lambda \in F\):
$$\det(\lambda A) = \lambda^n \det(A).$$

**Example 9.5.75.** For \(A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}\), \(\det(A) = ad - bc\).

**Exercise 9.5.76.** Compute \(\det \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\).

**Exercise 9.5.77.** Show that \(\det(A^T) = \det(A)\).

---

## Summary

We have introduced:

- Vector spaces over a field \(F\)
- Subspaces
- Linear combinations, span, linear independence
- Bases and dimension
- Linear transformations and the Dimension Theorem
- Matrices of linear transformations
- Change of basis and similarity
- Direct sums
- Invariant subspaces
- Determinants (properties)
