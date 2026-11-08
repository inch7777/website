# MATH 162, SHEET 6: THE FIELD AXIOMS

We will formalize the notions of addition and multiplication in structures called fields. A field with a compatible order is called an ordered field. We will see that $\mathbb{Q}$ and $\mathbb{R}$ are both examples of ordered fields.

**Definition 6.1.** A **binary operation** on a set $X$ is a function

$$
f: X \times X \longrightarrow X.
$$

We say that $f$ is **associative** if:

$$
f(f(x,y),z) = f(x,f(y,z)) \qquad \text{for all } x,y,z \in X.
$$

We say that $f$ is **commutative** if:

$$
f(x,y) = f(y,x) \qquad \text{for all } x,y \in X.
$$

An **identity element** of a binary operation $f$ is an element $e \in X$ such that:

$$
f(x,e) = f(e,x) = x \qquad \text{for all } x \in X.
$$

**Remark 6.2.** Frequently, we denote a binary operation differently. If $*: X \times X \longrightarrow X$ is the binary operation, we often write $a * b$ in place of $*(a,b)$. We sometimes indicate this same operation by writing $(a,b) \mapsto a * b$.

## Examples 6.3.

1. The function $+: \mathbb{Z} \times \mathbb{Z} \longrightarrow \mathbb{Z}$ which sends a pair of integers $(m,n)$ to $+(m,n) = m + n$ is a binary operation on the integers, called addition. Addition is associative, commutative and has identity element $0$.
2. The maximum of $m$ and $n$, denoted $\max(m,n)$, is an associative and commutative binary operation on $\mathbb{Z}$. Is there an identity element for $\max$?
3. Let $P(Y)$ be the power set of a set $Y$. Recall that the power set consists of all subsets of $Y$. Then the intersection of sets, $(A,B) \mapsto A \cap B$, defines an associative and commutative binary operation on $P(Y)$. Is there an identity element for $\cap$?

**Exercise 6.4.** Find a binary operation on a set that is not commutative. Find a binary operation on a set that is not associative.

~={red}$A\setminus B$=~

**Exercise 6.5.** Let $X$ be a finite set, and let $Y = \{f: X \longrightarrow X \mid f \text{ is bijective}\}$. Consider the binary operation of composition of functions, denoted $\circ: Y \times Y \longrightarrow Y$ and defined by $(f \circ g)(x) = f(g(x))$. Decide whether or not composition is commutative and/or associative and whether or not it has an identity.

~={red}Associative not commutative, $e$=$f:x\to x$ =~

**Theorem 6.6.** Identity elements are unique. That is, suppose that $f$ is a binary operation on a set $X$ that has two identity elements $e$ and $e'$. Then $e = e'$.

**Definition 6.7.** A **field** is a set $F$ with two binary operations on $F$ called addition, denoted $+$, and multiplication, denoted $\cdot$, satisfying the following field axioms:

- **FA1 (Commutativity of Addition):** For all $x,y \in F$, $x + y = y + x$.
- **FA2 (Associativity of Addition):** For all $x,y,z \in F$, $(x + y) + z = x + (y + z)$.
- **FA3 (Additive Identity):** There exists an element $0 \in F$ such that $x + 0 = 0 + x = x$ for all $x \in F$.
- **FA4 (Additive Inverses):** For any $x \in F$, there exists $y \in F$ such that $x + y = y + x = 0$.
- **FA5 (Commutativity of Multiplication):** For all $x,y \in F$, $x \cdot y = y \cdot x$.
- **FA6 (Associativity of Multiplication):** For all $x,y,z \in F$, $(x \cdot y) \cdot z = x \cdot (y \cdot z)$.
- **FA7 (Multiplicative Identity):** There exists an element $1 \in F$ such that $x \cdot 1 = 1 \cdot x = x$ for all $x \in F$.
- **FA8 (Multiplicative Inverses):** For any $x \in F$ such that $x \neq 0$, there exists $y \in F$ such that $x \cdot y = y \cdot x = 1$.
- **FA9 (Distributivity of Multiplication over Addition):** For all $x,y,z \in F$, $x \cdot (y + z) = x \cdot y + x \cdot z$.
- **FA10 (Distinct Additive and Multiplicative Identities):** $1 \neq 0$.

**Exercise 6.8.** Consider the set $\mathbb{F}_2 = \{0,1\}$, and define binary operations $+$ and $\cdot$ on $\mathbb{F}_2$ by:

$$
\begin{aligned}
0+0 &= 0, \quad 0+1 = 1, \quad 1+0 = 1, \quad 1+1 = 0,\\
0\cdot0 &= 0, \quad 0\cdot1 = 0, \quad 1\cdot0 = 0, \quad 1\cdot1 = 1.
\end{aligned}
$$

Show that $\mathbb{F}_2$ is a field.

**Theorem 6.9.** Suppose that $F$ is a field. Then additive and multiplicative inverses are unique. This means:

1. Let $x \in F$. If $y, y' \in F$ satisfy $x + y = 0$ and $x + y' = 0$, then $y = y'$.
2. Let $x \in F$. If $y, y' \in F$ satisfy $x \cdot y = 1$ and $x \cdot y' = 1$, then $y = y'$.

We usually write $-x$ for the additive inverse of $x$ and $x^{-1}$ or $\frac{1}{x}$ for the multiplicative inverse of $x$.

**Corollary 6.10.** If $x \in F$, then $-(-x) = x$.

**Corollary 6.11.** If $x \in F$ and $x \neq 0$, then $(x^{-1})^{-1} = x$.

**Theorem 6.12.** Let $F$ be a field, and let $a,b,c \in F$. If $a + b = a + c$, then $b = c$.

**Theorem 6.13.** Let $F$ be a field, and let $a,b,c \in F$. If $a \cdot b = a \cdot c$ and $a \neq 0$, then $b = c$.

**Theorem 6.14.** Let $F$ be a field. If $a \in F$, then $a \cdot 0 = 0$.

**Theorem 6.15.** Let $F$ be a field, and let $a,b \in F$. If $a \cdot b = 0$, then $a = 0$ or $b = 0$.

Next, we discuss the notion of an ordered field.

**Definition 6.16.** An **ordered field** is a field $F$ equipped with an ordering $<$ such that:

- **Addition respects the ordering:** if $x < y$, then $x + z < y + z$ for all $z \in F$.
- **Multiplication respects the ordering:** if $0 < x$ and $0 < y$, then $0 < x \cdot y$.

**Definition 6.17.** Suppose $F$ is an ordered field and $x \in F$. If $0 < x$, we say that $x$ is **positive**. If $x < 0$, we say that $x$ is **negative**.

For the remaining theorems, assume $F$ is an ordered field.

**Lemma 6.18.** If $0 < x$, then $-x < 0$. Similarly, if $x < 0$, then $0 < -x$.

**Lemma 6.19.** If $a,b \in F$, then $a \cdot (-b) = -(a \cdot b) = (-a) \cdot b$.

**Lemma 6.20.** If $a,b \in F$, then $a \cdot b = (-a) \cdot (-b)$.

**Lemma 6.21.** If $x \in F$, then $0 \leq x^2$.

**Corollary 6.22.** $0 < 1$.

**Theorem 6.23.** If $F$ is an ordered field, then $F$ has no first or last point.