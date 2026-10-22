# MATH 161, SHEET 1: SETS, FUNCTIONS and CARDINALITY

Sets and functions are among the most fundamental objects in mathematics. A formal treatment of set theory was first undertaken at the end of the 19th Century and was finally codified in the form of the Zermelo-Fraenkel axioms. While fascinating in its own right, pursuit of these formalisms at this point would distract us from our main purpose of studying Calculus. Thus, we present a simplified version that will suffice for our immediate purposes.

## Sets

**Definition 1.1.** (Working Definition) A set is an object $S$ with the property that, given any $x$, we have the dichotomy that precisely one of the two conditions $x \in S$ or $x \notin S$ is true. In the former case, we say that $x$ is an element of $S$, and in the latter, we say that $x$ is not an element of $S$.

A set is often presented in one of the following forms:

- A complete listing of its elements. Example: the set $S = \{1,2,3,4,5\}$ contains precisely the five smallest positive integers.  
- A listing of some of its elements with ellipses to indicate unnamed elements. Example 1: the set $S = \{3,4,5,\ldots,100\}$ contains the positive integers from 3 to 100, including 6 through 99, even though these latter are not explicitly named. Example 2: the set $S = \{2,4,6,\ldots,2n,\ldots\}$ is the set of all positive even integers.  
- A two-part indication of the elements of the set by first identifying the source of all elements and then giving additional conditions for membership in the set. Example 1: $S = \{x \in \mathbb{N} \mid x \text{ is prime}\}$ is the set of primes. Example 2: $S = \{x \in \mathbb{Z} \mid x^2 < 3\}$ is the set of integers whose squares are less than 3.

**Definition 1.2.** Two sets $A$ and $B$ are **equal** if they contain precisely the same elements, that is, $x \in A$ if and only if $x \in B$. When $A$ and $B$ are equal, we denote this by $A = B$.

**Definition 1.3.** A set $A$ is a **subset** of a set $B$ if every element of $A$ is also an element of $B$; that is, if $x \in A$, then $x \in B$. When $A$ is a subset of $B$, we denote this by $A \subset B$.

**Theorem 1.4.** $A = B$ if and only if $A \subset B$ and $B \subset A$.

~={pink}Proof:=~

~={pink}Sufficiency:=~
~={pink}Assume $A=B$ i.e. $x \in A$ if and only if $x \in B$=~
~={pink}If $x \in A$, $x \in B$. Thus by definition1.3, $A \subset B$=~
~={pink}	If $x \in B$, $x \in A$. Thus by definition1.3, $B \subset A$=~


~={pink}Necessity:=~
~={pink}Assume  $A \subset B$ and $B \subset A$.=~
~={pink}$A\subset B$, then by definition 1.3, if $x \in A$, then $x \in B$.=~
~={pink}$B \subset A$, then by definition 1.2, if $x \in B$, then $x \in A$=~
~={pink}i.e. $x \in A$ if and only if $x \in B$ ; by definition 1.2, $A=B$=~



**Exercise 1.5.** Let $A = \{1,\{2\}\}$. Is $1 \in A$? Is $2 \in A$? Is $\{1\} \subset A$? Is $\{2\} \subset A$? Is $\{1\} \in A$? Is $\{2\} \in A$? Is $\{\{2\}\} \subset A$? Explain.

~={pink}Yes, No, Yes, No, No, Yes, Yes.=~
~={pink}1 is the element of A. {2} is the element of A while 2 itself is not.=~
~={pink} {1}and {{2}} are subsets and not the elements of A.=~

**Definition 1.6.** Let $A$ and $B$ be two sets. The **union** of $A$ and $B$ is the set

$$
A \cup B = \{x \mid x \in A \text{ or } x \in B\}.
$$

**Definition 1.7.** Let $A$ and $B$ be two sets. The **intersection** of $A$ and $B$ is the set

$$
A \cap B = \{x \mid x \in A \text{ and } x \in B\}.
$$

**Theorem 1.8.** Let $A$ and $B$ be two sets. Then:

1. $A \subset A \cup B$
2. $A \cap B \subset A$

~={pink}Proof:=~
~={pink}If $x \in A$, then by definition1.6, $x \in A \cup B$. Thus, by definition 1.3, $A \subset A\cup B$=~
~={pink}If, $x \in A\cap B$, then by definition 1.7, $x \in A$. Thus, by definition 1.3, $A\cap B \subset A$=~


A special example of the intersection of two sets is when the two sets have no elements in common. This motivates the following definition.

**Definition 1.9.** The **empty set** is the set with no elements, and it is denoted $\emptyset$. That is, no matter what $x$ is, we have $x \notin \emptyset$.

**Definition 1.10.** Two sets $A$ and $B$ are **disjoint** if $A \cap B = \emptyset$.

**Exercise 1.11.** Show that if $A$ is any set, then $\emptyset \subset A$.

~={pink}Proof:=~

~={pink}Assume, for contradiction, that there exists set $A$ that $\emptyset \not\subset A$  =~
~={pink}i.e. there exists  $x \in \emptyset$ that $x \not\in A$. =~
~={pink}However, by definition 1.9, no matter what $x$ is, $x \not\in \emptyset$.=~
~={pink}This contradicts to the assumption. =~
~={pink}Therefore, the assumption is not true. i.e. for all set $A$,  $\emptyset \subset A$.=~

**Definition 1.12.** Let $A$ and $B$ be two sets. The **difference** of $B$ from $A$ is the set

$$
A \setminus B = \{x \in A \mid x \notin B\}.
$$

The set $A \setminus B$ is also called the complement of $B$ relative to $A$. When the set $A$ is clear from the context, this set is sometimes denoted $B^c$, but we will try to avoid this imprecise formulation and use it only with warning.

**Theorem 1.13.** (DeMorgan's Laws) Let $X$ be a set, and let $A, B \subset X$. Then:

1. $X \setminus (A \cup B) = (X \setminus A) \cap (X \setminus B)$
2. $X \setminus (A \cap B) = (X \setminus A) \cup (X \setminus B)$

**Definition 1.14.** Let $A$ and $B$ be two nonempty sets. The **Cartesian product** of $A$ and $B$ is the set of ordered pairs

$$
A \times B = \{(a,b) \mid a \in A \text{ and } b \in B\}.
$$

**Definition 1.15.** Let $A$ be a set. The **power set** of $A$ is the set of all subsets of $A$ and is denoted $\wp(A)$. That is, $\wp(A) = \{B \mid B \subset A\}$.

**Exercise 1.16.** Let $A = \{1,2,3\}$. Identify $\wp(A)$ by explicitly listing its elements.

**Definition 1.17.** Let $A$ and $B$ be two nonempty sets. A **function** $f$ from $A$ to $B$ is a subset $f \subset A \times B$ such that for all $a \in A$ there exists a unique $b \in B$ satisfying $(a,b) \in f$. To express the idea that $(a,b) \in f$, we most often write $f(a) = b$. To express that $f$ is a function from $A$ to $B$ in symbols we write $f: A \to B$.

**Exercise 1.18.** Let the function $f: \mathbb{Z} \to \mathbb{Z}$ be defined by $f(n) = 2n$. Describe $f$ as a subset of $\mathbb{Z} \times \mathbb{Z}$.

**Definition 1.19.** Let $f: A \to B$ be a function. The **domain** of $f$ is $A$. If $X \subset A$, then the **image** of $X$ under $f$ is the set

$$
f(X) = \{b \in B \mid f(x) = b \text{ for some } x \in X\}.
$$

If $Y \subset B$, then the **preimage** of $Y$ under $f$ is the set

$$
f^{-1}(Y) = \{a \in A \mid f(a) \in Y\}.
$$

**Definition 1.20.** A function $f: A \to B$ is **surjective** (also known as 'onto') if, for every $b \in B$, there is some $a \in A$ such that $f(a) = b$. The function $f$ is **injective** (also known as 'one-to-one') if for all $a, a' \in A$, if $f(a) = f(a')$, then $a = a'$. The function $f$ is **bijective** (also known as a bijection or a 'one-to-one correspondence') if it is surjective and injective.

**Exercise 1.21.** Let $f: \mathbb{N} \to \mathbb{N}$ be defined by $f(n) = n^2$. Is $f$ injective? Is $f$ surjective?

**Exercise 1.22.** Let $f: \mathbb{N} \to \mathbb{N}$ be defined by $f(n) = n + 2$. Is $f$ injective? Is $f$ surjective?

**Exercise 1.23.** Let $f: \mathbb{Z} \to \mathbb{Z}$ be defined by $f(x) = x^2$. Is $f$ injective? Is $f$ surjective?

**Exercise 1.24.** Let $f: \mathbb{Z} \to \mathbb{Z}$ be defined by $f(x) = x + 2$. Is $f$ injective? Is $f$ surjective?

**Lemma 1.25.** Suppose that $f: A \to B$ is bijective. Then there exists a bijection $g: B \to A$.

**Definition 1.26.** We say that two sets $A$ and $B$ are in **bijective correspondence** when there exists a bijection from $A$ to $B$ or, equivalently, from $B$ to $A$.

## Cardinality

**Definition 1.27.** Let $n \in \mathbb{N}$ be a natural number. We define $[n]$ to be the set $\{1,2,\ldots,n\}$. Additionally, we define $[0] = \emptyset$.

**Definition 1.28.** A set $A$ is **finite** if $A = \emptyset$ or if there exists a natural number $n$ and a bijective correspondence between $A$ and the set $[n]$. In this case, we say that the **cardinality** of $A$ is $n$, and we write $|A| = n$. If $A$ is not finite, we say that $A$ is **infinite**. In either case, if there exists a bijection between two sets $A$ and $B$, then we say that $A$ and $B$ have the same cardinality and write $|A| = |B|$.

~={pink}(Supplementary Corollary: $|[n]|=n$ because, of course, there is a bijective correspondence between such a set and itself, for example, $f(x)=x$)=~

**Theorem 1.29.** Let $A$, $B$, and $C$ be sets and suppose that there is a bijective correspondence between $A$ and $B$ and a bijective correspondence between $B$ and $C$. Then there is a bijective correspondence between $A$ and $C$.

The following two results show that the cardinality of a finite set is well-defined.

**Theorem 1.30.** (The Pigeonhole Principle) Let $n, m \in \mathbb{N}$ with $n < m$. Then there does not exist an injective function $f: [m] \to [n]$.

~={pink}Proof:=~

~={pink}Suppose, for contradiction, that there exists such an injective function $f: [m] \to [n]$.=~

~={pink}Then for all $x, x' \in[m]$ ,if $f(x)=f(x')$ then $x=x'$. i.e. $a$ and $f(a)$ is "one to one".=~
~={pink}Then $|[n]|\geq|[m]|$=~
~={pink}However, By definition 1.27 and 1.28, we know that $|[m]|=m>|[n]|=n$.=~
~={pink}This is a contradiction. =~
~={pink}Thus, the supposition must be wrong: There does not exist an injective function  $f: [m] \to [n]$..=~

~={pink}Similarly, Let $n, m \in \mathbb{N}$ with $n < m$. Then there does not exist an surjective function $f: [n] \to [m]$.=~

~={yellow}**Corollary 1.30'.** Let $n,m \in \mathbb{N}$, for a injective function $f:[m]\to[n]$, $n\geq m$. =~

~={pink}Proof:=~

~={pink}Suppose , for contradiction, that $n<m$. =~
~={pink}By theorem 1.30, there doesn't exist an injective function $f:[m]\to[n]$.=~
~={pink}This is a contradiction to the supposition.=~
~={pink}Thus $n,m \in \mathbb{N}$, for a injective function $f:[m]\to[n]$, $n\geq m$. =~


**Theorem 1.31.** Let $A$ be a finite set and suppose that $|A| = m$ and $|A| = n$. Then $m = n$.

~={pink}Proof:=~

~={pink}If  $|A| = m$ and $|A| = n$, then there exists a bijective correspondence between $A$ and $[m]$, and $A$ and $[n]$.=~

~={pink}By Theorem 1.29, there is a bijective correspondence between $[m]$ and $[n]$. By definition 1.28, cardinalities of $[m]$ and $[n]$ are equal.=~
~={pink}By corollary of definition 1.28, $|[m]|=m$ and $|[n]|=n$=~
~={pink}Thus, $m=n$.=~


**Exercise 1.32.** Let $A$ and $B$ be finite sets. If $A \subset B$, then $|A| \leq |B|$.

Proof:

Suppose $g:A\to[m]$ and $i:B\to[n]$ are bijections. 
By Lemma 1.25, there exists bijective $j:[m]\to A$.
Let $f:A\to B, f(a)=a$, which by definition 1.20 is injective.
Construct function $h:[m]\to [n], i\circ f\circ j$.
Then $h(a)=i(f(j(x)))$
Now we prove $h(a)$ is injective. i.e. for every $b \in B$, there is some $a \in A$ such that $f(a) = b$. 
Then by Corollary 1.30',  

**Exercise 1.33.** (The Inclusion/Exclusion Principle) Let $A$ and $B$ be two finite sets. Then:

$$
|A \cup B| + |A \cap B| = |A| + |B|.
$$

**Exercise 1.34.** Let $A$ and $B$ be two finite sets. Then $|A \times B| = |A| \cdot |B|$.

**Exercise 1.35.** How many subsets does the empty set have?

~={pink}One, namely $\emptyset$ itself. 
The only subset of $\emptyset$ is $\emptyset$, because if $A \subset \emptyset$, then every element of $A$ must be in $\emptyset$, which contains no elements; hence $A$ must have no elements, so $A = \emptyset$.=~

**Exercise 1.36.** How many subsets does $[n]$ have?

$2^n$.

**Exercise 1.37.** Show that if $A$ is a finite set, then $|\wp(A)| = 2^{|A|}$.