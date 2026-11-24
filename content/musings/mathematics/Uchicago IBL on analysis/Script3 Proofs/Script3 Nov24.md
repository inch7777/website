# MATH 161, SHEET 3: TOPOLOGY OF THE CONTINUUM

In this sheet we give the continuum $C$ a topology. Roughly speaking, this is a way to describe how the points of $C$ are 'glued together'.

**Definition 3.1.** A subset of the continuum is **closed** if it contains all of its limit points. (where the fact that the subset is infinite is implied by theorem2.25)

**Theorem 3.2.** The sets $\emptyset$ and $C$ are closed.

$Proof.$
Suppose an arbitrary limit point $p$ for $C$. Apparently $p \in C$, thus $C$ is closed.

Suppose there exists a limit point $p$ for $\emptyset$.
For whichever region $R$ containing $p$ as a limit point, $R \cap \emptyset/\{ p \}=\emptyset$, which contradicts to the supposition. Therefore, there exists no limit point for $\emptyset$.
Suppose $\emptyset$ is not closed, then there exists a limit point $p$ of $\emptyset$ that is not contained in $\emptyset$.
However, there is no limit point at all for $\emptyset$, therefore the supposition fails.
Hence, $\emptyset$ is closed.

**Theorem 3.3.** A subset of $C$ containing a finite number of points is closed.

$Proof.$
By theorem2.25, a finite subset of $C$ has no limit points.
Therefore, we derive the same conclusion using the same approach as the proof of that the emptyset is closed: 
A subset of $C$ containing a finite number of points is closed.


**Definition 3.4.** Let $X$ be a subset of $C$. The **closure** of $X$ is the subset $\overline{X}$ of $C$ defined by:

$$
\overline{X} = X \cup \{x \in C \mid x \text{ is a limit point of } X\}.
$$

**Theorem 3.5.** $X \subset C$ is closed if and only if $X = \overline{X}$.

$Proof.$
If $X = \overline{X}$, then $X=X \cup \{x \in C \mid x \text{ is a limit point of } X\}$, which contains all the limit points of $X$. Therefore, $X\subset C$ is closed.
If $X \subset C$ is closed, then $X$ contains all its limit points, that is, $$
\{x \in C \mid x \text{ is a limit point of } X\}\subset X
$$
Then $$
\overline{X} = X \cup \{x \in C \mid x \text{ is a limit point of } X\}=X
$$
since $A\cup B$ where $B\subset A$ equals to $A$.

Hence,  $X \subset C$ is closed if and only if $X = \overline{X}$.


**Theorem 3.6.** The closure of $X \subset C$ satisfies $\overline{X} = \overline{\overline{X}}$.

$Proof.$
We need to prove $\overline{X}$ is closed.
If $X$ is finite or is emptyset, then $X$ is closed, $X = \overline{X}=\overline{\overline{X}}$.



**Corollary 3.7.** Given any subset $X \subset C$, the closure $\overline{X}$ is closed.

$Proof.$
By **Theorem 3.6.** The closure of $X \subset C$ satisfies $\overline{X}\subset C = \overline{\overline{X}}$.
Then by **Theorem 3.5.** $X \subset C$ is closed if and only if $X = \overline{X}$.
Thus, $\overline{X}$ is closed.

**Definition 3.8.** A subset $U$ of the continuum is **open** if its complement $C \setminus U$ is closed.

~={orange}Doesn't mean that not closed=open. For example: $(0,1]$=~

**Theorem 3.9.** The sets $\emptyset$ and $C$ are open.

$Proof.$
$C \setminus C=\emptyset$ is closed by therorem 3.2, so $C$ is open.
$C \setminus \emptyset=C$ is closed by therorem 3.2, so $\emptyset$ is open.

The following is a very useful criterion to determine whether a set of points is open.

~={orange}**Theorem 3.10.** Let $U \subset C$. Then $U$ is open if and only if for all $x \in U$, there exists a region $R$ such that $x \in R \subset U$.=~ (Proof by contradiction!!)

$Proof.$
If $U=C$ or $U=\emptyset$, it's trivial.
If $U$ is open and does not equal to continuum or the emptyset, then $C \setminus U$ is closed, containing all its limit points.
Suppose there exists some $x \in U$ such that for all regions $R$ containing $x$, $R \not\subset U$, that is, $R\cap C  \setminus (U\cup \{ x \})\neq \emptyset$, which means that $x$ is a limit point of $C \setminus U$.
Since $x \in U$, $x \not\in C \setminus U$ as a limit point. This is a contradiction. 
Therefore, the supposition fails. For all $x \in U$, there exists a region $R$ such that $x \in R \subset U$.

If for all $x \in U$, there exists a region $R$ such that $x \in R \subset U$.
For $C \setminus U$, suppose for contradiction that it is not closed. Then there exists limit point $p \in U$, that does not belong to $C \setminus U$. 
But then since for all $x \in U$, there exists a region $R$ such that $x \in R \subset U$, there exists a region $R$ such that  $p \in R \subset U$. 
By definition of $C \setminus U$, it has no intersection with $U$, and thus none with $R$, which contradicts to the supposition that $p$ is a limit point. 
Therefore,  $C \setminus U$ is closed and thus $U$ is open.

**Corollary 3.11.** Every region $R$ is open. Every complement of a region $C \setminus R$ is closed.

$Proof.$
To prove the corollary, by theorem3.10, we only need to prove that for a region $ab$, all $x \in ab$, there exists a region $R_{0}$ such that $x \in R_{0} \subset ab$.
By $a<x<b$ and the well definedness of region, there must exists $a<c<x<d<b$.
Region $cd$ is the $R_{0}$ desired.
Thus, every region $R$ is open. Every complement of a region $C \setminus R$ is closed.

**Corollary 3.12.** Let $a \in C$. Then the sets $\{x \mid x < a\}$ and $\{x \mid a < x\}$ are open.

$Proof.$
For an arbitrary $y \in \{x \mid x < a\}$, $y<a$.
By the well-definedness of region, there exists $z$ such that $y<z<a$.
Since $C$ has no last point, there exists $t<y<a$.
Therefore we have the region $tz$ such that $y \in tz \subset \{x \mid x < a\}$.
By theorem3.10, $\{x \mid x < a\}$ is open.
Similarly, we could prove that $\{x \mid a < x\}$ is open.

~={red}**Theorem 3.13.** Let $U$ be a nonempty open set. Then $U$ is the union of a collection of regions.=~

$Proof.$
By theorem3.10, for an arbitrary $x_{1} \in U$, there exists a region $R_{1}=a_{1}a_{2}$ such that $x \in R_{1} \subset U$.
If all $u \in U$ belongs to $a_1a_2$, then $U\subset a_{1}a_{2}$, then $U=a_{1}a_{2}$.
If there exists some $u \in U,u \not\in a_{1}a_{2}$:
Without loss of generality, assume $a_{1}<a_{2}<u$.


**Exercise 3.14.** Do there exist subsets $X \subset C$ that are neither open nor closed?

$A=(x,y]$ Since neither is $A$ nor it's supplement set is closed.

**Theorem 3.15.** Let $\{X_\lambda\}$ be an arbitrary collection of closed subsets of the continuum. Then the intersection $\bigcap_\lambda X_\lambda$ is closed.

$Proof.$
By **Theorem 2.12.** If $p$ is a limit point of $A$ and $A \subset B$, then $p$ is a limit point of $B$.

If there does not exists a limit point for  $\bigcap_\lambda X_\lambda$, then it's of course closed.
If there exists limit points for  $\bigcap_\lambda X_\lambda$, considering an arbitrary limit point $p$ , by **Theorem 2.12.**, it must also be a limit point for all the $X_{\lambda}$, that is, $p \in X_{\lambda}$ for all $X_{\lambda}$. 
Therefore, $p \in \bigcap_\lambda X_\lambda$. 
$\bigcap_\lambda X_\lambda$ is closed since it contains all of its limit points.


**Theorem 3.16.** Let $U_1, \ldots, U_n$ be a finite collection of open subsets of the continuum. Then the intersection $U_1 \cap \dots \cap U_n$ is open.

$Proof.$
**Theorem 3.10.** Let $U \subset C$. Then $U$ is open if and only if for all $x \in U$, there exists a region $R$ such that $x \in R \subset U$.
**Theorem 3.13.** Let $U$ be a nonempty open set. Then $U$ is the union of a collection of regions.
**Theorem 2.17.** If two regions have a point $x$ in common, their intersection is a region containing $x$.

If the intersection $U_1 \cap \dots \cap U_n$ is empty, then of course it's open.
If the intersection $U_1 \cap \dots \cap U_n$ is not empty, let's take an arbitrary $x \in U_1 \cap \dots \cap U_n$.
$x \in U_{k},\text{ for all }k \in \{ 1,2\dots n \}$.  By theorem3.13, all $U_{k}$ can be written as a union of a collection of regions. Then $x$ belongs to each of these regions consisting of $U_{k}$. 
By theorem2.17, If two regions have a point $x$ in common, their intersection is a region containing $x$, and actually it's easy to prove that it holds not only for $2$ but further for $n$ such regions. 
Therefore,  $U_1 \cap \dots \cap U_n=\bigcap_{R\subset U_{k},x \in R} R$ is a nonempty region(containing $x$) and thus is open.

~={red}**Exercise 3.17.** Is it necessarily the case that the intersection of an infinite number of open sets is open?=~

Proposition: The infinite intersection of $(-\frac{1}{n}, \frac{1}{n}),n \in \mathbb{Z}_{+}$ is $\{ 0 \}$ which is closed.
$Proof.$
Suppose for contradiction that The infinite intersection of $(-\frac{1}{n}, \frac{1}{n}),n \in \mathbb{Z}_{+}$ is an open set, which is a union of regions.
Since apparently  $(-\frac{1}{n}, \frac{1}{n}) \cap(-\frac{1}{n+1}, \frac{1}{n+1})=(-\frac{1}{n+1}, \frac{1}{n+1})$, the final result could only be a region in such form.
Suppose the intersection is $(-\frac{1}{k}, \frac{1}{k}),k \in \mathbb{Z}_{+}$, then since there must exist $(-\frac{1}{k+1}, \frac{1}{k+1})$ such that the intersection should at least be  $(-\frac{1}{k+1}, \frac{1}{k+1})$ , that's a contradiction.
Therfore, the supposition fails. Given that only $0$ always belongs to  $(-\frac{1}{n}, \frac{1}{n}),n \in \mathbb{Z}_{+}$, the infinite intersection of $(-\frac{1}{n}, \frac{1}{n}),n \in \mathbb{Z}_{+}$ is $\{ 0 \}$ which is closed.

Reflection: ~={red}This proof is INVALID=~ due to this flaw: Since apparently  $(-\frac{1}{n}, \frac{1}{n}) \cap(-\frac{1}{n+1}, \frac{1}{n+1})=(-\frac{1}{n+1}, \frac{1}{n+1})$, the final result could only be a region in such form.

Now we refine the proof. What we are gonna do is to replace this part by proving that no elements other than $0$ lies in the intersection. 
Suppose there is $0<x$ such that $x \in$ the intersection. 
Since $\mathbb{Z}_{+}\subset C$ and has no last point just as $C$, there must exist $k \in \mathbb{Z}_{+}$ such that $\frac{1}{x}\leq \left\lfloor  \frac{1}{x}  \right\rfloor+1<k$ . 
Then $\frac{1}{k}<x$. Therefore $x \not\in (-\frac{1}{k}, \frac{1}{k})$ and thus $x \not\in$ the infinite intersection, which is a contradiction.
For $x<0$, similarly we could draw to the same conclusion. 
Hence, for all $x\neq 0$, $x \notin$ the infinite intersection. Then given that $0$ always belongs to  $(-\frac{1}{n}, \frac{1}{n}),n \in \mathbb{Z}_{+}$ for all $n$, the infinite intersection of $(-\frac{1}{n}, \frac{1}{n}),n \in \mathbb{Z}_{+}$ is $\{ 0 \}$ which is closed.


**Theorem 3.18.** Let $\{U_\lambda\}$ be an arbitrary collection of open subsets of the continuum. Then the union $\bigcup_\lambda U_\lambda$ is open. Let $X_1, \ldots, X_n$ be a finite collection of closed subsets of the continuum. Then the union $X_1 \cup \dots \cup X_n$ is closed.

$Proof.$
**Theorem 3.10.** Let $U \subset C$. Then $U$ is open if and only if for all $x \in U$, there exists a region $R$ such that $x \in R \subset U$.
**Corollary 2.20**, Let $A_1, \ldots, A_n$ be $n$ subsets of $C$. If $p$ is a limit point of $A_1 \cup \dots \cup A_n$, then $p$ is a limit point of at least one of the sets $A_k$.

Open:
For all $y \in \bigcup_\lambda U_\lambda$, $y$ at least belongs to one of the $U_{\lambda}$, then by theorem 3.10, there exists a region $R$ such that $y \in R \subset U_{\lambda}\subset\bigcup_\lambda U_\lambda$. Then, for all $x \in \bigcup_\lambda U_\lambda$, there exists a region $R$ such that $x \in R \subset \bigcup_\lambda U_\lambda$. Therefore, $\bigcup_\lambda U_\lambda$ is open.

Closed:
If there exists no limit point of $X_1 \cup \dots \cup X_n$, then it's closed.
If there exists limit points of $X_1 \cup \dots \cup X_n$, we take an arbitrary limit point $p$.
By Corollary 2.20, $p$ is the limit point of at least one $X_{k},k \in \{ 1,2\dots n \}$.
Since each $X_{k}$ is closed, $p$ must belong to those $X_{k}$ with $p$ as a limit point.
Therefore, for all limit points $p$,  $p \in X_{k}\in X_1 \cup \dots \cup X_n$. 
$X_1 \cup \dots \cup X_n$ contains all its limit points and thus is closed.


Theorem 3.9 and Corollary 3.18 say that the collection $\mathcal{T}$ of open subsets of the continuum is a topology on $C$, in the following sense:
**Definition 3.19.** Let $X$ be any set. A **topology** on $X$ is a collection $\mathcal{T}$ of subsets of $X$ that satisfy the following properties:

1. $X$ and $\emptyset$ are elements of $\mathcal{T}$.
2. The union of an arbitrary collection of sets in $\mathcal{T}$ is also in $\mathcal{T}$.
3. The intersection of a finite number of sets in $\mathcal{T}$ is also in $\mathcal{T}$.

The elements of $\mathcal{T}$ are called the **open sets** of $X$. The set $X$ with the structure of the topology $\mathcal{T}$ is called a **topological space**.

Theorem 3.13 says that every nonempty open set is the union of a collection of regions. This necessary condition for open sets is also sufficient:

**Theorem 3.20.** Let $U \subset C$ be nonempty. Then $U$ is open if and only if $U$ is the union of a collection of regions.

$Proof.$
By **Theorem 3.13.** , $U$ be a nonempty open set$\implies$  $U$ is the union of a collection of regions.
If $U$ is the union of a collection of regions, since all regions are nonempty open sets, it's the union of a collection of open subsets of $C$, thus it's open by theorem3.18.
Thus, nonempty $U \subset C$ is open if and only if $U$ is the union of a collection of regions.

**Definition 3.21.** A topological space $X$ is **discrete** if every subset of $X$ is open.

**Exercise 3.22.** Find a realization of the continuum that is discrete. Must every realization be discrete?

**Definition 3.23.** Let $A$ and $B$ be nonempty disjoint subsets of a topological space $X$. We say that $A$ and $B$ are **separated** if each contains no point of the closure of the other, i.e. $A \cap \overline{B} = \emptyset$ and $\overline{A} \cap B = \emptyset$.

**Theorem 3.24.** Let $ab$ be a region in $C$. Then the sets $ab$ and $\operatorname{ext} ab$ are separated.

$Proof.$
By definition 3.23, since $ab$ and $ext\text{ }ab$ are disjoint, what we need to prove is $ab \cap \overline{ext\text{ ab}} = \emptyset \iff ab \cap \{ p|p \text{ is a limit point of ext ab} \} = \emptyset$ . 
By **Lemma 2.16.** No point in the exterior of a region is a limit point of that region. No point of a region is a limit point of the exterior of that region, which is exactly what we desire.
Therefore, let $ab$ be a region in $C$, then the sets $ab$ and $\operatorname{ext} ab$ are separated.

**Definition 3.25.** Let $X$ be a topological space. $X$ is **disconnected** if it may be written as the union $X = A \cup B$ of two separated sets. $X$ is **connected** if it is not disconnected.

**Exercise 3.26.** Is the continuum connected?

Yes.