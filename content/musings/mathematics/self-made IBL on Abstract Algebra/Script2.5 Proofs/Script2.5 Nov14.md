
# MATH 161, SHEET 2.5: PERMUTATIONS

This sheet introduces permutations—bijections from a set to itself—and their properties. Permutations form the symmetric group $S_n$, which is the prototypical example of a non-abelian group and the foundation for Galois theory.

**Commentary.** Permutations are one of the oldest and most important objects in algebra. They arise naturally in counting problems, geometry, and the study of polynomial equations. The fact that every group can be realized as a group of permutations (Cayley's Theorem, Sheet 5) makes permutations fundamental to all of group theory.

---

## Definition of Permutations

**Definition 2.5.1.** Let $X$ be a nonempty set. A **permutation** of $X$ is a bijection $\sigma: X \to X$.

**Definition 2.5.2.** The set of all permutations of $X$, with the operation of composition of functions, is called the **symmetric group** on $X$, denoted $\operatorname{Sym}(X)$ or $S_X$.

**Definition 2.5.3.** When $X = \{1, 2, \ldots, n\}$, we write $S_n$ for the symmetric group on $n$ elements. The elements of $S_n$ are called **permutations of degree $n$**.

**Theorem 2.5.4.** For any nonempty set $X$, $\operatorname{Sym}(X)$ is a group under composition. (See Sheet 1.)

$Proof:$
Identity: By definition 2.5.1, the identity bijection $e=\sigma:X\to X,\sigma(x)=x$ must be in $Sym(X)$. It also implies that $Sym(X)$ is non empty.
Closure: $\alpha, \beta \in Sym(X), \alpha \cdot \beta$ is still a bijection $\sigma: X \to X$ .
Associativity: $\alpha, \beta, \theta\in Sym(X)$.
$[(\alpha \cdot \beta)\cdot \theta](x)=\alpha(\beta(\theta(x)))=[\alpha \cdot (\beta \cdot \theta)](x)$
Inverse: for all $\alpha \in Sym(X)$, since it is bijection, there must exists $\alpha^{-1}$ such that $\alpha \cdot \alpha^{-1}=e$
Therefore, For any nonempty set $X$, $\operatorname{Sym}(X)$ is a group under composition. 


**Theorem 2.5.5.** The order of $S_n$ is $|S_n| = n!$.

$Proof:$
Suppose $\sigma \in S_{n}, \sigma(1)\to x_{1}, \sigma(2)\to x_{2}\dots \sigma(n)\to x_{n},x_{i}\neq x_{j},\text{ for all }i\neq j$.
Then there is $n$ possible values for $x_{1}$, $n-1$ possible values for $x_{2}$,$\dots$, $1$ possible value for $x_{n}.$
Thus, the number of elements in $S_{n}$ is $n!$. 
The order of $S_n$ is $|S_n| = n!$.

**Example 2.5.6.** $S_3$ has $3! = 6$ elements: the identity, three transpositions, and two 3-cycles.

**Exercise 2.5.7.** Let $X = \{1, 2, 3\}$. List all 6 permutations of $X$. Write them in product of transports.

$(1,2,3);(1,3,2)=(2,3);(2,1,3)=(2,3)(1,3);(2,3,1)=(1,2)(1,3);(3,2,1)=(1,3)(1,2);(3,1,2)=(2,3)(1,2)$

**Exercise 2.5.8.** Show that $S_n$ is non-abelian for $n \geq 3$. (Hint: Compute $(1 \ 2)(1 \ 3)$ and $(1 \ 3)(1 \ 2)$.)

$Proof:$
For all $S_n$ where $n \geq 3$:
$(2,3,1),(3,2,1),(1,2),(1,3) \in S_{n}$
$(2,3,1)=(1,2)(1,3) \neq(3,2,1)=(1,3)(1,2)$
Thus, it is non-abelian.

---

## Two-Row Notation

**Definition 2.5.9.** A permutation $\sigma \in S_n$ can be written in **two-row notation** as:
$$\sigma = \begin{pmatrix} 1 & 2 & \cdots & n \\ \sigma(1) & \sigma(2) & \cdots & \sigma(n) \end{pmatrix}.$$

**Example 2.5.10.** The permutation $\sigma \in S_3$ with $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 1$ is written:
$$\sigma = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \end{pmatrix}.$$

**Exercise 2.5.11.** Write the permutation $\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 \\ 3 & 1 & 4 & 2 \end{pmatrix}$ in two-row notation with the top row in order.

**Exercise 2.5.12.** Compute the product $\sigma \circ \tau$ where:
$$\sigma = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 1 & 3 \end{pmatrix}, \qquad \tau = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 3 & 2 \end{pmatrix}.$$
Is $\sigma \circ \tau = \tau \circ \sigma$?

---

## Cycle Notation

**Definition 2.5.13.** A **cycle** of length $k$ is a permutation $(a_1 \ a_2 \ \cdots \ a_k)$ that sends $a_i \mapsto a_{i+1}$ for $1 \leq i < k$, sends $a_k \mapsto a_1$, and fixes all other elements.

**Definition 2.5.14.** A cycle of length 2 is called a **transposition**.

**Definition 2.5.15.** Two cycles are **disjoint** if they have no elements in common.

**Theorem 2.5.16.** Every permutation can be written uniquely (up to order) as a product of disjoint cycles.

$Proof:$
Take any $\sigma \in S_{n}$
$$\sigma = \begin{pmatrix} 1 & 2 & 3  & \dots & n \\ \sigma(1) & \sigma(2) & \sigma(3)  & \dots & \sigma(n) \end{pmatrix}$$
Since a cycle $(a_1 \ a_2 \ \cdots \ a_k)$ always sends $a_k \mapsto a_1$,
We take a cycle starting with $a$, the smallest element in $\{ 1,2,\dots n \}$ that is not fixed: $(a,\sigma(a),\sigma^2(a),\dots \sigma^{k-1}(a)),\text{where }\sigma^k(a)=a$, and since $\sigma$ is bijection so $0<m\neq n<k,\sigma^m(a)\neq \sigma^n(a)$. If we start with $\sigma^t(a), t \in \{ 0,1,\dots k-1 \}$ , the cycle would remain the same although in a different form $(\sigma^p(a),\sigma^{p+1}(a),\dots,a, \dots \sigma^{p-1}(a)),\text{where }\sigma^k(a)=a$.

Similarly, take another cycle starting with $b$, the smallest non-fixed element among $b\neq \sigma^t(a), t\in \{ 0,1,\dots k-1 \}$, which is disjoint with the cycle above.
Keep taking cycles this way until no more cycles can be taken, and multiply them together. 
Now we have proved that every permutation can be written as a product of disjoint cycles.

Uniqueness:
Suppose $\sigma=C_{1}C_{2}\dots C_{n}$ is a product of disjoint cycles, and the only cycle containing $a$ is $C_{i}$.
Since it is a cycle, $C_{i}$ would map $a\to \sigma(a)\to\dots\to \sigma^{k-1}(a),\sigma^{k-1}(a)\to a$. Therefore, $C_{i}$ is exactly $(a,\sigma(a),\sigma^2(a),\dots \sigma^{k-1}(a)),\text{where }\sigma^k(a)=a$. The same applies for other cycles.

Remarks: This cycle is unique for :
1) $a$ is unique given a $\sigma$;
2) If $b\neq \sigma^t(a), t\in \{ 0,1,\dots k-1 \}$, then obviously a cycle invoving $b$ would not be able to function the same as $(a,\sigma(a),\sigma^2(a),\dots \sigma^{k-1}(a))$. In order words, this cycle must consist of only $\sigma^t(a), t \in \{ 0,1,\dots k-1 \}$; 



**Example 2.5.17.** The permutation
$$\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\ 3 & 5 & 1 & 6 & 2 & 4 \end{pmatrix}$$
has disjoint cycle decomposition $(1 \ 3)(2 \ 5)(4 \ 6)$.

**Example 2.5.18.** The cycle $(1 \ 3 \ 5 \ 2)$ sends $1 \mapsto 3$, $3 \mapsto 5$, $5 \mapsto 2$, $2 \mapsto 1$, and fixes all other elements.

**Exercise 2.5.19.** Write the following permutation in disjoint cycle notation:
$$\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\ 4 & 5 & 6 & 7 & 1 & 2 & 3 \end{pmatrix}.$$

**Exercise 2.5.20.** Compute the product of cycles $(1 \ 2 \ 3)(2 \ 3 \ 4)$ in $S_4$. Write the result in disjoint cycle notation.

**Exercise 2.5.21.** Show that $(a_1 \ a_2 \ \cdots \ a_k) = (a_1 \ a_k)(a_1 \ a_{k-1}) \cdots (a_1 \ a_2)$. (Hint: Compute the product of transpositions.)

$Proof:$
$k=1$ is trivial.
Apparently for $k=2$, $(a_{1},a_{2})=(a_{1},a_{2})$.
Suppose for $k=t-1$, $(a_1 \ a_2 \ \cdots \ a_{t-1}) = (a_1 \ a_{t-1})(a_1 \ a_{t-2}) \cdots (a_1 \ a_2)$.
Then for $k=t$, $(a_{1},a_{t})(a_1 \ a_{t-1})(a_1 \ a_{t-2}) \cdots (a_1 \ a_2)=(a_{1},a_{t})(a_1 \ a_2 \ \cdots \ a_{t-1})= (a_1 \ a_2 \ \cdots \ a_t)$.
Therefore, it holds for all $k \in \mathbb{Z}_{+}$


---

## Order of a Permutation

**Definition 2.5.22.0**  
Let $\sigma$ be a permutation of a finite set. The **order** of $\sigma$, denoted $|\sigma|$ is the smallest positive integer $n$ such that
$$
\sigma^n=1
$$

where 1 denotes the **identity permutation** (i.e., the permutation that fixes every element). 
If no such positive integer exists, the order is said to be infinite (though for permutations of a finite set, the order is always finite).

**Theorem 2.5.22.** The order of a cycle $\sigma=(a_1 \ a_2 \ \cdots \ a_k)$ is $k$.

$Proof:$
We prove by induction for all the $1\leq t\leq k$:
$$\sigma^t = \begin{pmatrix} a_{_{1}} & a_{2} & \dots & a_{k-t} & a_{k-t+1} & a_{k} \\ a^{t+1} & a^{t+2} & \dots & a^k & a^1 & a^{t}  \end{pmatrix}.$$ 
where we stipulate when $a^{k+t}=a^t$.

For $t=1$, apparently it holds.
Suppose for $1\leq t=m-1\leq k$, $$\sigma^{m-1} = \begin{pmatrix} a_{_{1}} & a_{2} & \dots & a_{k-m+1} & a_{k-m+2} & a_{k} \\ a^{m} & a^{m+1} & \dots & a^k & a^1 & a^{m-1}  \end{pmatrix}.$$.

For $t=m$, $$\sigma^{m} = \sigma^{m-1}\cdot \sigma=\begin{pmatrix} a_{_{1}} & a_{2} & \dots & a_{k-m} & a_{k-m+1} & a_{k} \\ a^{m+1} & a^{m+2} & \dots & a^k & a^1 & a^{m}  \end{pmatrix}.$$.

Therefore, for all the $1\leq t\leq k$: $$
\sigma^t = \begin{pmatrix} a_{_{1}} & a_{2} & \dots & a_{k-t} & a_{k-t+1} & a_{k} \\ a^{t+1} & a^{t+2} & \dots & a^k & a^1 & a^{t}  \end{pmatrix}.
$$
When $t=k$, $\sigma^k = \begin{pmatrix} a_{_{1}} & a_{2} & \dots & a_{k-t} & a_{k-t+1} & a_{k} \\ a_{1} & a_{2} & \dots & a_{k-t} & a_{k-1} & a_{k}  \end{pmatrix}.$

The order of a cycle $\sigma=(a_1 \ a_2 \ \cdots \ a_k)$ is $k$.

