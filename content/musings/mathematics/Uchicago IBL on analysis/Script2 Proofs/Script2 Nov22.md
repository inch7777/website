# MATH 161, SHEET 2: INTRODUCING THE CONTINUUM

This sheet introduces the continuum $C$ through a series of axioms.

**Axiom 1.** The continuum is a nonempty set $C$.

We often refer to elements of $C$ as points.

**Definition 2.1.** Let $X$ be a set. An ordering on the set $X$ is a subset $<$ of $X \times X$, with elements $(x,y) \in <$ written as $x < y$, satisfying the following properties:

(a) 'For all $x, y \in X$ such that $x \neq y$, either $x < y$ or $y < x$.  
(b) For all $x, y \in X$, if $x < y$ then $x \neq y$.  
(c) For all $x, y, z \in X$, if $x < y$ and $y < z$ then $x < z$.

**Axiom 2.** There exists an ordering $<$ on $C$.

**Theorem 2.2.** If $x$ and $y$ are points of $C$, then $x < y$ and $y < x$ are not both true.

$Proof.$
By Axiom2 there exists an ordering $<$ on $C$.
Suppose for contradiction both of them are true, then by (c), $$
x<y<x \implies x<x
$$
which is a contradiction because $x=x$.

**Definition 2.3.** If $A \subset C$ is a subset of $C$, then a point $a \in A$ is a **first point** of $A$ if, for every element $x \in A$, either $a < x$ or $a = x$. Similarly, a point $b \in A$ is called a **last point** of $A$ if, for every $x \in A$, either $x < b$ or $x = b$.

**Lemma 2.4.** If $A$ is a nonempty, finite subset of $C$, then $A$ has a first and last point.

~={red}Suppose for contradiction, $A$ has no first point or last point.=~
~={green}(Can it be proved by contradiction?)=~

$Proof.$
In set $A\subset C$, all the elements belong to $C$ and are distinct. 
By definition 2.1 and theorem2.2, pick arbitrary $x,y\in A$, either $x<y$ or $y<x$.
Let's take $x<y$ here, without the loss of generality.
Then we add another element $z$, either $z<x$ or $z>x$; either$z<y$ or $z>y$.
Then there would be these cases: $z<x<y;\text{ }x<z<y;\text{ }x<y<z$.
Let's take $x<y<z$ here, without the loss of generality.
Similarly, as we take more elements into account, it will always form a ordered chain like $a_{1}<a_{2}<\dots<a_{k}$. 
Since here $A$ is finite, there will be maximum $|A|$ elements in the chain.
Therefore, as shown above, $a_{1}<$ all other distinct elements, and also all other distinct elements $<a_{|A|}$, which is exactly the definition of first and last point.
Hence, we have proved the lemma.


**Theorem 2.5.** ~={red}Suppose that $A$ is a set of $n$ distinct points in $C$=~, ~={green}(since when did we introduce cadinality as the number as elements?)=~ or, in other words, $A \subset C$ has cardinality $n$. Then symbols $a_1, \ldots, a_n$ may be assigned to each point of $A$ so that $a_1 < a_2 < \dots < a_n$, i.e. $a_i < a_{i+1}$ for $1 \leq i \leq n-1$.

$Proof.1$
By lemma 2.4, we choose frist point $p_{1}$ and last point $p_{2}$, and form a set $A_{1}=A/\{p_{1},p_{2}  \}$. $A_{1}$ is a nonempty, finite subset of C, so $A_{1}$ also has a frist and last point. Again, choose $p_{3},p_{4}$ and form $A_{2}$. Repeat the process, and we have $p_{1}<p_{3}<\dots<p_{4}<p_{2}$
Then we assign them as $a_{i,}$ such that $a_i < a_{i+1}$ for $1 \leq i \leq n-1$.

$Proof.2$
Almost do the same as we did in the proof for Lemma2.4

**Definition 2.6.** If $x, y, z \in C$ and both $x < y$ and $y < z$, then we say that $y$ is **between** $x$ and $z$.

**Corollary 2.7.** Of three distinct points, one must be between the other two.

$Proof.$
Let's say we have 3 distinct points $x,y,z$.
Without the loss of generosity, assume $x<y$.
Similar to the proof of Lemma2.4, consider $z$: 
either $z<x$ or $z>x$; either$z<y$ or $z>y$.
Then there would be these cases: $z<x<y;\text{ }x<z<y;\text{ }x<y<z$.
In each cases, there exists one point between the order two.

**Axiom 3.** $C$ has no first or last point.

**Definition 2.8.** If $a, b \in C$ and $a < b$, then the set of points between $a$ and $b$ is called a **region**, denoted by $ab$.

**Warning 2.9.** One often sees the notation $(a, b)$ for regions. We will reserve the notation $(a, b)$ for ordered pairs in a product $A \times B$. These are very different things.

**Theorem 2.10.** If $x$ is a point of $C$, then there exists a region $ab$ such that $x \in ab$.

$Proof.$
By Axiom 3, there exists a point $a<x$ and $b>x$.
Then region $ab$ is what we desired.

We now come to one of the most important definitions of this course:

**Definition 2.11.** Let $A$ be a nonempty subset of $C$. A point $p$ of $C$ is called a **limit point** of $A$ if every region $R$ containing $p$ has nonempty intersection with $A \setminus \{p\}$. Explicitly, this means:

> for every region $R$ with $p \in R$, we have $R \cap (A \setminus \{p\}) \neq \emptyset$.

Notice that we do not require that a limit point $p$ of $A$ be an element of $A$.
~={red}(Remarks: This is crucial for defining closed interval)=~
~={orange}Which actually means: p is the limit first/ last point, when $p$ is not an element of $A$. For elements $\in A$, when $A$ is a connected interval, every element can be limit point.=~

**Theorem 2.12.** If $p$ is a limit point of $A$ and $A \subset B$, then $p$ is a limit point of $B$.

$Proof.$
Since $A \subset B$, $(A \setminus \{p\})\subset(B \setminus \{p\})$.
Since $p$ is a limit point of $A$, for every region $R$ with $p \in R$, we have $$R \cap (A \setminus \{p\}) \neq \emptyset \implies R \cap (B \setminus \{p\}) \neq \emptyset$$
Therefore, $p$ is a limit point of $B$.


**Lemma 2.13.** If $ab$ is a region in $C$, then:

$$
C = \{x \in C \mid x < a\} \cup \{a\} \cup ab \cup \{b\} \cup \{x \in C \mid b < x\}.
$$


$Proof.$
On the one hand, since $ab$ is a region in $C$, we have $$\{x \in C \mid x < a\} \cup \{a\} \cup ab \cup \{b\} \cup \{x \in C \mid b < x\}\subset C$$.
On the other hand, we prove that $C\subset\{x \in C \mid x < a\} \cup \{a\} \cup ab \cup \{b\} \cup \{x \in C \mid b < x\}$,
For an arbitrary element belonging to $C$, there are only these possible cases:
1) $x<a$, that is $x \in\{x \in C \mid x < a\}$
2) $x=a$, that is $x \in \{ a \}$
3) $a<x<b$, that is equavalent to $x \in ab$
4) $b=x$, that is $x \in \{ b \}$
5) $b<x$, that is $x \in\{x \in C \mid b < x\}$
Therefore, for all $x \in C$, $x \in\{x \in C \mid x < a\} \cup \{a\} \cup ab \cup \{b\} \cup \{x \in C \mid b < x\}\subset C$, that is $$C\subset\{x \in C \mid x < a\} \cup \{a\} \cup ab \cup \{b\} \cup \{x \in C \mid b < x\}$$
Hence, $$C = \{x \in C \mid x < a\} \cup \{a\} \cup ab \cup \{b\} \cup \{x \in C \mid b < x\}.$$
**Definition 2.14.** If $ab$ is a region in $C$, then $C \setminus (\{a\} \cup ab \cup \{b\})$ is called the **exterior** of $ab$ and is denoted by $\operatorname{ext} ab$.

**Lemma 2.15.** If $ab$ is a region in $C$, then:

$$
C = \operatorname{ext}ab \cup \{a\} \cup \{b\} \cup ab.
$$
$Proof.$
By Lemma2.13, 

$$
C = \{x \in C \mid x < a\} \cup \{a\} \cup ab \cup \{b\} \cup \{x \in C \mid b < x\}.
$$
Then, by definition 2.14, $$C \setminus (\{a\} \cup ab \cup \{b\})=\text{ext }ab=\{x \in C \mid x < a\} \cup \{x \in C \mid b < x\}.$$
Therefore, $$
C = \operatorname{ext}ab \cup \{a\} \cup \{b\} \cup ab.
$$

**Lemma 2.16.** No point in the exterior of a region is a limit point of that region. No point of a region is a limit point of the exterior of that region.

$Proof.$
Let a region be $ab$.

Suppose for contradiction that there exists a point $x$ in the exterior of a region that is a limit point of that region. 
If $$x<a \in\text{ext }ab=\{x \in C \mid x < a\} \cup \{x \in C \mid b < x\}$$
By Corollary 2.7, of three distinct points, one must be between the other two, therefore there exists $x<y<a$, and since $C$ has no last point there exists $t<x$
Then we take region $ty$ containing $x$.
Since $y<a<b$, the intersection between $ty$ and $ab$ is the empty set, which contradicts to the definition of limit point.
Similarly, if $b<x$, there exists $b<z<x<t$ such that $zt\cap ab=\emptyset$.
Therefore, $x \in \text{ext } ab$ and it's a limit point necessarily leads to a contradiction, so no point in the exterior of a region is a limit point of that region.

Suppose for contradiction that there exists a point $x$ in the region that is a limit point of its exterion.
Since $a<x<b$, by corollary2.7 again, there exists $a<c<x<d<b$.
Region $cd$ containing $x$ has no intersecteion with the exterior $\{x \in C \mid x < a\} \cup \{x \in C \mid b < x\}$ 
Therefore, no point of a region is a limit point of the exterior of that region.

**Theorem 2.17.** If two regions have a point $x$ in common, their intersection is a region containing $x$.

$Proof.$
Let the two regions be $ab$, $cd$, and $x \in ab,x \in cd$.
That is, $a<x<b$ and $c<x<d$, and it's either $a<c$ or $c<a$; $b<d$ or $d<b$.
Without loss of generality, assume $a<c<x<b<d$.
Then region $cb$ containing $x$ is the intersection of there two regions since $cb\subset ab \cap cd$ and $ab \cap cd \subset cb$
Therefore, if two regions have a point $x$ in common, their intersection is a region containing $x$.

**Corollary 2.18.** If $n$ regions $R_1, \ldots, R_n$ have a point $x$ in common, then their intersection $R_1 \cap \dots \cap R_n$ is a region containing $x$.

$Proof.$
For $n=2$, it holds as we shown in Theorem2.17.
Suppose for $n=k-1$, this statement holds, that is, if $k-1$ regions $R_1, \ldots, R_{k-1}$ have a point $x$ in common$$
R_1 \cap \dots \cap R_{k-1}=R_{0},\text{ }x \in R_{0}
$$
Now we prove it holds for $n=k$.
Since $(R_{1}\cap R_{2})\cap R_{3}=R_{1}\cap (R_{2}\cap R_{3})=\{ x|x \in R_{1},R_{2},R_{3} \}$, associativity holds for intersection operation.
Then $$
R_1 \cap \dots \cap R_{k-1}\cap R_{k}=(R_1 \cap \dots \cap R_{k-1})\cap R_{k}=R_{0}\cap R_{k}
$$
Since $x \in R_{0},R_{k}$, By Theorem2.17, $R_{0}\cap R_{k}$ is a region containing $x$.
Thus it holds for $n=k$ too.

Therefore, by the principle of mathematical induction, this proposition holds for all $n\geq 2$.



**Theorem 2.19.** Let $A, B \subset C$. If $p$ is a limit point of $A \cup B$, then $p$ is a limit point of $A$ or $B$.

$Proof.$
If $p$ is a limit point of $A \cup B$, then every region $R\cap (A \cup B)/\{ p \}\neq \emptyset$.
That is, every such region has some elements say $a$ here in common with $$\{ x|x \in A\text{ or }x \in B ,x\neq p\}$$
If $a\in A$, then $R\cap A/\{p\}\neq \emptyset$ for every such region containing $p$.
If $a\in B$, then $R\cap B/\{p\}\neq \emptyset$ for every such region containing $p$.
Therefore, $p$ is a limit point of $A$ or $B$.

**Corollary 2.20.** Let $A_1, \ldots, A_n$ be $n$ subsets of $C$. If $p$ is a limit point of $A_1 \cup \dots \cup A_n$, then $p$ is a limit point of at least one of the sets $A_k$.

$Proof.$
For $n=2$,  it holds as we shown in Theorem2.19.
Suppose for $n=m-1$, this statement holds, that is, if $p$ is a limit point of $A_1 \cup \dots \cup A_{m-1}$, then $p$ is a limit point of at least one of the sets $A_k$.
Now we prove for $n=m$.
Since $(A_{1}\cup A_{2})\cup A_{3}=A_{1}\cup (A_{2}\cup A_{3})=\{ x|x \in A_{1}\text{ or }A_{2},\text{ or }A_{3} \}$, associativity holds for union operation.
Therefore, $$A_1 \cup \dots \cup A_{{m-1}}\cup A_m=(A_1 \cup \dots \cup A_{{m-1}})\cup A_m=A_{0}\cup A_{m}$$
Then by Theorem2.19,  $p$ is a limit point of $A_{0}$ or $A_{m}$.
If $p$ is a limit point of $A_{0}$, then $p$ is a limit point of $A_1 \cup \dots \cup A_{{m-1}}$. Then by supposition for $n=m-1$,  $p$ is a limit point of at least one of the sets $A_k$ among $A_{1}$ to $A_{m-1}$. 
Otherwise $p$ is a limit point of $A_{m}$.
Therefore, it holds for $n=m$ too.
Hence, by the principle of mathematical induction, this proposition holds for all $n\geq 2$.

It's not hard to see that the converse is also true, so we have both directions:

**Corollary 2.21.** Let $A_1, \ldots, A_n$ be $n$ subsets of $C$. Then $p$ is a limit point of $A_1 \cup \dots \cup A_n$ if and only if $p$ is a limit point of at least one of the sets $A_k$.

**Definition 2.22.** Two sets $A$ and $B$ are **disjoint** if $A \cap B = \emptyset$.

**Theorem 2.23.** If $p$ and $q$ are distinct points of $C$, then there exist disjoint regions $R$ and $S$ containing $p$ and $q$, respectively.

$Proof.$
Without loss of generality, suppose $p<q$.
Applying corollary 2.7, there must exist $p<a<q$, and then $p<b<a<q$.
Also, since there exist no first and last point in $C$, there exists $c<p$, $q<d$.
Take regions $cb,ad$, containing $p,q$ respectively.
Since $b<a$, they are disjoint.
Therefore,  If $p$ and $q$ are distinct points of $C$, then there exist disjoint regions $R$ and $S$ containing $p$ and $q$, respectively.

**Corollary 2.24.** A subset of $C$ consisting of one point has no limit points.

$Proof.$
Suppose the subset is $\{ a \}$.
Suppose there exists a limit point $p\neq a$ for $\{ a \}$, then every region containing $p$ should have some common elements with  $\{ a \}$.
However, by theorem2.23, there exist disjoint regions $R$ and $S$ containing $p$ and $a$, respectively. That is, there exists a region containing $p$ but has no intersection with $\{ a \}$.
This contradicts to that $p$ is a limit point of $\{ a \}$.
Therefore, the supposition fails, a subset of $C$ consisting of one point has no limit points.

**Theorem 2.25.** A finite subset $A \subset C$ has no limit points.

$Proof.$
Suppose for contradiction that there exists $p$ as a limit point for $A$, then every region containing $p$ should have some common elements with $A$. 
Since $A$ is finite, and $A\subset C$, the elements of $A$ are ordered (the ordering exists on $A$).
Assume that the elements in $A$ are $a_{1}<a_{2}<\dots<a_{n}$

If for some $k\in \{ 1,2\dots n-1 \}$ $a_{k}<p<a_{k+1}$.
By corollary 2.7, there exists $b,c$ such that $a_{k}<b<p<c<a_{k+1}$.
Then the region with $p$ contained  $bc\cap A/\{ p \}=\emptyset$, which contradicts to the supposition that $p$ is a limit point.

If $p<a_{1}$, similarly to the process in the proofs above, there must be $e<p<g<a_{1}$ .
Then take $eg$ containing $p$, $eg\cap A/\{ p \}=\emptyset$, which is again a contradiction.

If $a_{k}<p$, we could draw to the same conclusion applying similar method.

Therefore, at any rate, the supposition fails. Hence, a finite subset $A \subset C$ has no limit points.


Theorem **2.26.** If $A \subset C$ is finite and $x \in A$, then there exists a region $R$ such that $A \cap R = \{x\}$.

$Proof.$
This is similar to the process in the proof of theorem2.25:

Since $A$ is finite, and $A\subset C$, the elements of $A$ are ordered (the ordering exists on $A$).
The elements in $A$ can be ordered as $a_{1}<a_{2}<\dots<a_{n}$

For $x$ such that $a_{k}<x<a_{k+1}$ for some  $k\in \{ 1,2\dots n-1 \}$
By corollary 2.7, there exists $b,c$ such that $a_{k}<b<x<c<a_{k+1}$.
Then $bc\cap R=\{ x \}$.
It's similar for $x$ such that $x=a_{1}$ or $x=a_{n}$.
Therefore, if $A \subset C$ is finite and $x \in A$, then there exists a region $R$ such that $A \cap R = \{x\}$.

**Definition 2.27.** A set is **infinite** if it is not finite.

**Theorem 2.28.** If $p$ is a limit point of $A$ and $R$ is a region containing $p$, then the set $R \cap A$ is infinite.

$Proof.$
Suppose for contradiction that the set $R \cap A$ is finite with a cardinality of $n$. 
Let $R=ab$, then $R \cap A\neq \emptyset$ , for $p$ is a limit point of $A$.
Also, since by theorem 2.25 a finite subset $A \subset C$ has no limit points, $A$ here is infinite.
Since  $R \cap A$ is finite and it's a subset of $C$, the elements in $R\cap A$ can be ordered as $$a_{1}<a_{2}<\dots<a_{n}$$

Therefore, the supposition fails.
 If $p$ is a limit point of $A$ and $R$ is a region containing $p$, then the set $R \cap A$ is infinite.

**Exercise 2.29.** Find realizations of the continuum $(C, <)$. That is, find concrete sets $C$ endowed with a relation $<$ satisfying all of the axioms (so far). Are they the same? What does "the same" mean here?

$\mathbb{R}$. "the same" means they are a same thing.