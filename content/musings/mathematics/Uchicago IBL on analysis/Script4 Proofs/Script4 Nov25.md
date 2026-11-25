# MATH 161, SHEET 4: CONNECTEDNESS, BOUNDEDNESS, COMPACTNESS

We will introduce a new axiom for the continuum $C$ and derive many interesting properties from it. From now on, we will always assume axiom 4.

**Axiom 4.** The continuum is connected.

**Theorem 4.1.** The only subsets of the continuum that are both open and closed are $\emptyset$ and $C$.

$Proof.$
Suppose for contradiction that there exists $A \subset C$ such that $A$ is both open and closed, and it's not $\emptyset$ or $C$. Also $C \setminus A\neq \emptyset$
By definition, $A \cap (C \setminus A)=\emptyset$ , that is, they are disjoint.
Since $A$ is open, $C \setminus A$ is closed, meaning $\overline{C \setminus A}=C \setminus A$.
Similarly, since $A$ is closed, $\overline{A}=A$.
Substiting these into $A \cap (C \setminus A)=\emptyset$ , we have $A \cap (\overline{C \setminus A)}=\emptyset$ and  $\overline{A} \cap C \setminus A=\emptyset$ , which shows $A$ and $C \setminus A$ are separated.
Since by axiom4, $C$ is connected, i.e. $C$ is not disconnected, that is, it cannot be written as the union of two separated subsets.
However, by definition, $A \cup (C \setminus A)=C$, and here they are two separated sets, contradicting to connectedness.
Hence, the supposition fails. The only subsets of the continuum that are both open and closed are $\emptyset$ and $C$.

**Theorem 4.2.** For all $x,y \in C$, if $x < y$, then there exists $z \in C$ such that $z$ is in between $x$ and $y$.

$Proof.$
We had proved this before in Script2:
**Definition 2.8.** If $a, b \in C$ and $a < b$, then the set of points between $a$ and $b$ is called a **region**, denoted by $ab$.
Well-definedness : $ab$ is not emptyset. In other words, for $a<b$, there must exists $x$ such that $a<x<b$.
$Proof.$
We need to prove there exists $a<x<b$.
Suppose for contradiction that for all $x$ such that $a<x$, $b<x$ or $b=x$.
But since there is no last point in $C$, there must be $a<b<x$, which contradicts to the supposition.
Therefore, there exists $a<x<b$.


**Corollary 4.3.** Every region is infinite.

$Proof.$ 
Suppose, for conradiction, there exists a region $a_{1}a_{n}$ that is finite with $n$ elements, then all of its elements could be ordered. $$
a_{1}<a_{2}<\dots a_{n-1}<a_{n}
$$
By theorem4.2, there exists $a_{1}<z<a_{2}$, which makes $n+1$ elements contained in the region, which contradicts to our supposition.
Thus, every region is infinite.


**Corollary 4.4.** Every point of $C$ is a limit point of $C$.

$Proof.$
By **Theorem 2.10.** If $x$ is a point of $C$, then there exists a region $ab$ such that $x \in ab$, which necessarily has a nonempty intersection with $C \setminus \{ x \}$, meaning $x$ is a limit point of $C$.
Therefore, every point of $C$ is a limit point of $C$.

**Corollary 4.5.** Every point of the region $ab$ is a limit point of $ab$.

$Proof.$
Take an arbitrary $x$ such that $a<x<b$, then by theorem4.2, there must exist $c,d$ such that $a<c<x<d<b$, where $cd\cap ab \setminus \{ x \}\neq \emptyset$, implying that $x$ is a limit point of $ab$.

**Exercise 4.6.** Construct an infinite collection of open sets whose intersection is not open. ~={red}Equivalently, construct an infinite collection of closed sets whose union is not closed.=~

We will now introduce boundedness. The first definition should be intuitively clear. The second is subtle and powerful. Just to be clear, by $x \leq y$, we mean $x < y$ or $x = y$ and similarly for $x \geq y$.

**Definition 4.7.** Let $X$ be a subset of $C$. A point $u$ is called an **upper bound** of $X$ if for all $x \in X$, $x \leq u$. A point $l$ is called a **lower bound** of $X$ if for all $x \in X$, $l \leq x$. If there exists an upper bound of $X$, then we say that $X$ is **bounded above**. If there exists a lower bound of $X$, then we say that $X$ is **bounded below**. If $X$ is bounded above and below, then we simply say that $X$ is **bounded**.

**Definition 4.8.** Let $X$ be a subset of $C$. We say that $u$ is the **least upper bound** of $X$ and write $u = \sup X$ if:

1. $u$ is an upper bound of $X$, and
2. if $u'$ is an upper bound of $X$, then $u \leq u'$.

We say that $l$ is the **greatest lower bound** and write $l = \inf X$ if:

1. $l$ is a lower bound of $X$, and
2. if $l'$ is a lower bound of $X$, then $l' \leq l$.

The notation $\sup$ is pronounced "sup" and comes from the word *supremum*, which is another name for least upper bound. The notation $\inf$ is pronounced "inf" and comes from the word *infimum*, which is another name for greatest lower bound.

**Exercise 4.9.** If $\sup X$ exists, then it is unique, and similarly for $\inf X$.

$Proof.$
Suppose for contradiction that there exists $a=b=\text{sup }X$. Then $$
a\leq b,b\leq a\implies a=b
$$
Similarly we draw to the same conclusion for $\text{inf }X$.

**Theorem 4.10.** Let $a < b$. The least upper bound and greatest lower bound of the region $ab$ are:

$$
\sup ab = b \quad \text{and} \quad \inf ab = a.
$$

$Proof.$
Suppose for contradiction that there exists a $u$ such that $a<u< b$, $x\leq u$ for all $x \in ab$ .
Since $u< b$, by theorem4.2, there exists $p$ such that $a<u< p<b$.
Since $a<p<b$, $p \in ab$, but $u<p$, which contradicts to our supposition that $p$ is an upper bound of $ab$.
Therefore, there does not exist an upper bound $u$ such that $u<b$, and thus $\text{sup }ab=b$. 
Similarly, we could draw to the same conclusion that there does not exists a lower bound such that $a<u$, and thus $\text{inf }ab=a$.

**Theorem 4.11.** Let $X$ be a subset of $C$. Suppose that $\sup X$ exists and $\sup X \notin X$. Then $\sup X$ is a limit point of $X$. The same holds for $\inf X$.

$Proof.$
Suppose $\text{sup }X=p \not\in X$, $x< p$ for all $x \in X$.


**Corollary 4.12.** Both $a$ and $b$ are limit points of the region $ab$.

$Proof.$
By theorem4.10, the least upper bound and greatest lower bound of the region $ab$ are $\sup ab = b \quad \text{and} \quad \inf ab = a.$, and they don't belong to $ab$. By Theorem 4.11, they are the limit points of $X$.

Let $[a,b]$ denote the closure $\overline{ab}$ of the region $ab$.

**Corollary 4.13.** $[a,b] = U=\{x \in C \mid a \leq x \leq b\}$.

$Proof.$
$U \subset [a,b]$, since all the elements in $U$ are the limit points of $ab$, by corollary4.12 and corollary4.4.
Since $U=\{x \in C \mid a \leq x \leq b\}=ab\cup \{ a \}\cup \{ b \}$, $C \setminus U=\text{ext ab}$.
By **Lemma 2.16.** No point in the exterior of a region is a limit point of that region, that is no $x \not\in U$ is the limit point of $ab$. Therefore, all the limit points of $ab$ belong to $U$. 
Given the fact that also $ab \subset U$, $[a,b] \subset U$. 
Thus, $[a,b] = U=\{x \in C \mid a \leq x \leq b\}$.

**Lemma 4.14.** Let $X \subset C$ and define:

$$
\Psi(X) = \{x \in C \mid x \text{ is not an upper bound of } X\}.
$$

Then $\Psi(X)$ is open. Define:

$$
\Omega(X) = \{x \in C \mid x \text{ is not a lower bound of } X\}.
$$

Then $\Omega(X)$ is open.

$Proof.$
If $X$ has no lower bound,  $\Omega(X)$ is an emptyset and thus is open. The same holds for $\Psi(X)$ when $X$ has no upper bound.
If $X$ has upper bound, By theorem 4.14, $\sup X$ exists.
Suppose the least upper bound of $X$ is $b$. 
Then $\Psi(X) = \{x \in C \mid x \text{ is not an upper bound of } X\}=\{ x \in C|x<b \}$.
Similarly, if $X$ has least bound $a$, $\Omega(X) = \{x \in C \mid x \text{ is not a lower bound of } X\}=\{ x \in C| a<x \}$
By **Corollary 3.12.** (Let $a \in C$. Then the sets $\{x \mid x < a\}$ and $\{x \mid a < x\}$ are open.), we know that both $\Psi(X)$ and $\Omega(X)$ are open.
Therefore, in cases that $X$ is not bounded, bounded above, bounded below, or bounded, both of  $\Psi(X)$ and $\Omega(X)$ are open.

Reflection: This is ~={red}INVALID=~ since we didn't prove that if a set is bounded then its $sup$ and $inf$ exist. Instead, this lemma should serve to prove this proposition(theorem4.15). Now we revise the proof of this lemma.

$Proof.$
If $X$ has no lower bound,  $\Omega(X)$ is an emptyset and thus is open. The same holds for $\Psi(X)$ when $X$ has no upper bound.
If $X$ is only bounded above, take an arbitrary upper bound $u$ and take an arbitrary $x \in \Psi(X)$ and $x<u$ .
If $X$ is finite, then there obviously exists $\text{sup X}=a$ and $\text{inf X}=b$. Then we could prove the lemma by the proof above. 
If $X$ is infinite, there are infinite elements in $X$ such that $y \in X$, $y<u$, $y \in \Psi(X)$ Then either $x \in X$ or not, there will exist $c<x<y<u$, where $c,y \in \Psi(X)$. Thus, for all $x \in \Psi(X)$, there exists region $cy$ such that $x \in cy \subset \Psi(X)$.
Therefore, by Theorem 3.10, $\Psi(X)$ is open while $\Omega(X)=\emptyset$ is also open.
Similarly, if $X$ is only bounded below, $\Omega(X)$ is open while $\Psi(X)=\emptyset$ is also open.
Similarly, we could use the same approach to derive that when $X$ is bounded, both of these sets are still open.
Thus, we have proved the lemma.

**Theorem 4.15.** Suppose that $X$ is nonempty and bounded. Then $\sup X$ and $\inf X$ both exist.

$Proof.$
Since $\Psi(X)$ is open, $U=C \setminus\Psi(X)=\{ x \in C| x \text{ is an upper bound of X} \}$ is closed. 
Since $X$ is bounded, $U$ is nonempty.

**Supposition 1.** Suppose for contradiction that $\text{sup }X$ does not exist, that is, for an upper bound $u_{1}$, there always exists another upper bound $u_{2}$ such that $u_{2}<u_{1}$.

**Supposition 2.** Now we suppose for contradiction that there exists $p$ as the limit point of $\Psi(X)$ such that $p \not\in \Psi(X)$ that is $p$ is an upper bound of $X$. 

Since $p$ is a limit point of $\Psi(X)$, every region $R$ containing $p$ should have nonempty intersection with it. However, there exists another upper bound $u_{1}<p$ , and naturally there exists some $u_{2}$ such that $p<u_{2}$. Then the region $u_{1}u_{2} \cap\Psi(X) \setminus \{ p \}=\emptyset$ since all the elements of $u_{1}u_{2}$ are upper bounds of $X$, which contradicts to **Supposition 1.** 
Thus, all the limit points of $\Psi(X)$ are contained in $\Psi(X)$, meaning that $\Psi(X)$ is closed. 

However, this contradicts to **Supposition 2.** Hence, $\text{sup }X$ does exist. Similarly,  $\inf X$ does exist too. Therefore, $\sup X$ and $\inf X$ both exist.

~={red}**Corollary 4.16.** Every nonempty closed and bounded set $X$ has a first point and a last point.=~

$Proof.$
By theorem 4.15, $X$ has both $\sup X=b$ and $\inf X=a$.
Suppose for contradiction that $a \not\in X$.
Take an arbitrary $x \in X$, $a<x$ .
Since there exists no lower bound $l$ such that $a<l$, then the elements $x_{1}$ such that $a<x_{1}<x$ must belong to $X$. 
Since $C$ has no first point there exists $p<a$. Then for every region $px_{1}$ containing $x$, $px_{1}\cap X\setminus \{ x \}\neq \emptyset$, meaning $a$ is a limit point of $X$. Since $X$ is closed, $a \in X$, which contradicts to the supposition that $a \not\in X$. 
Therefore, $\inf X=a \in X$, by definition we know that $\inf X$ is the first point of $X$.
Similarly, $\sup X$ is the last point of $X$.
Thus,  Every nonempty closed and bounded set $X$ has a first point and a last point.