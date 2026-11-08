# MATH 162, SHEET 7: THE RATIONAL NUMBERS

In this script, we define the rational numbers $\mathbb{Q}$ and show that they form an ordered field. At the end of this script, we show that any ordered field contains a canonical copy of the rational numbers.

**Definition 7.1.** Let $X = \{(a,b) \mid a,b \in \mathbb{Z}, b \neq 0\}$. We define a relation $\sim$ on $X$ as:

$$
(a,b) \sim (c,d) \quad \text{if and only if} \quad ad = bc.
$$

**Lemma 7.2.** The relation $\sim$ is reflexive. That is, $(a,b) \sim (a,b)$ for every $(a,b) \in X$.

**Lemma 7.3.** The relation $\sim$ is symmetric. That is, if $(a,b) \sim (c,d)$, then $(c,d) \sim (a,b)$.

**Lemma 7.4.** The relation $\sim$ is transitive. That is, if $(a,b) \sim (c,d)$ and $(c,d) \sim (e,f)$, then $(a,b) \sim (e,f)$.

**Remark 7.5.** A relation on any set that is reflexive, symmetric, and transitive is called an **equivalence relation**. Thus, the preceding lemmas show that $\sim$ is an equivalence relation on $X$.

**Remark 7.6.** A partition of a set is a collection of non-empty disjoint subsets whose union is the original set. Any equivalence relation on a set creates a partition of that set by collecting into subsets all of the elements that are equivalent (related) to each other. When the partition of a set arises from an equivalence relation in this manner, the subsets are referred to as **equivalence classes**.

**Remark 7.7.** If we think of the set $X$ as representing the collection of all fractions whose denominators are not zero, then the relation $\sim$ may be thought of as representing the equivalence of two fractions.

**Definition 7.8.** As a set, the **rational numbers**, denoted $\mathbb{Q}$, are the equivalence classes in the set $X$ under the equivalence relation $\sim$. If $(a,b) \in X$, we denote the equivalence class of this element as $[(a,b)]$. Thus,

$$
\mathbb{Q} = \{ [(a,b)] \mid (a,b) \in X \}.
$$

**Definition 7.9.** We define addition and multiplication in $\mathbb{Q}$ as follows. If $[(a,b)]$ and $[(c,d)]$ are in $\mathbb{Q}$, then:

$$
[(a,b)] +_{\mathbb{Q}} [(c,d)] = [(ad + bc,\, bd)], \qquad
[(a,b)] \cdot_{\mathbb{Q}} [(c,d)] = [(ac,\, bd)].
$$

We use the notation $+_{\mathbb{Q}}$ and $\cdot_{\mathbb{Q}}$ to represent addition and multiplication in $\mathbb{Q}$ so as to distinguish these operations from the usual addition $(+)$ and multiplication $(\cdot)$ in $\mathbb{Z}$.

**Theorem 7.10.** Addition in $\mathbb{Q}$ is well-defined. That is, if $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$, then

$$
[(a,b)] +_{\mathbb{Q}} [(c,d)] = [(a',b')] +_{\mathbb{Q}} [(c',d')].
$$

**Theorem 7.11.** Multiplication in $\mathbb{Q}$ is well-defined. That is, if $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$, then

$$
[(a,b)] \cdot_{\mathbb{Q}} [(c,d)] = [(a',b')] \cdot_{\mathbb{Q}} [(c',d')].
$$

**Theorem 7.12.** The rational numbers $\mathbb{Q}$ satisfy axiom FA1 for fields.

**Theorem 7.13.** The rational numbers $\mathbb{Q}$ satisfy axiom FA2 for fields.

**Theorem 7.14.** The rational numbers $\mathbb{Q}$ satisfy axiom FA3 for fields, where the additive identity is the element $[(0,1)]$.

**Theorem 7.15.** The rational numbers $\mathbb{Q}$ satisfy axiom FA4 for fields, where the additive inverse of the element $[(a,b)]$ is given by $-[(a,b)] = [(-a,b)]$.

**Theorem 7.16.** The rational numbers $\mathbb{Q}$ satisfy axiom FA5 for fields.

**Theorem 7.17.** The rational numbers $\mathbb{Q}$ satisfy axiom FA6 for fields.

**Theorem 7.18.** The rational numbers $\mathbb{Q}$ satisfy axiom FA7 for fields, where the multiplicative identity is the element $[(1,1)]$.

**Theorem 7.19.** The rational numbers $\mathbb{Q}$ satisfy axiom FA8 for fields, where the multiplicative inverse of the element $[(a,b)] \neq [(0,1)]$ is given by $[(a,b)]^{-1} = [(b,a)]$.

**Theorem 7.20.** The rational numbers $\mathbb{Q}$ satisfy axiom FA9 for fields.

**Theorem 7.21.** The rational numbers $\mathbb{Q}$ satisfy axiom FA10 for fields.

**Remark 7.22.** Thus, the rational numbers $\mathbb{Q}$ with $+_{\mathbb{Q}}$ and $\cdot_{\mathbb{Q}}$ form a field.

Next, we define an ordering on $\mathbb{Q}$.

**Definition 7.23.** Let $[(a,b)], [(c,d)] \in \mathbb{Q}$. Assuming $b,d > 0$ in $\mathbb{Z}$, we say that $[(a,b)] <_{\mathbb{Q}} [(c,d)]$ if and only if $ad < bc$. Note that we use the symbol $<_{\mathbb{Q}}$ to denote our ordering relation in $\mathbb{Q}$ so as to distinguish it from the usual ordering $<$ in $\mathbb{Z}$. Note also that, given an element in $\mathbb{Q}$, it is always possible to choose a representative $(a,b)$ with $b > 0$.

**Theorem 7.24.** Ordering in $\mathbb{Q}$ is well-defined. That is, if $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$, then

$$
[(a,b)] <_{\mathbb{Q}} [(c,d)] \quad \text{if and only if} \quad [(a',b')] <_{\mathbb{Q}} [(c',d')].
$$

**Theorem 7.25.** The relation $<_{\mathbb{Q}}$ is an ordering on the rational numbers $\mathbb{Q}$.

**Theorem 7.26.** The rational numbers $\mathbb{Q}$ form an ordered field.

There is an important sense in which every ordered field contains a "copy" of the rational numbers. Let $F$ be an ordered field with additive identity $0_F$ and multiplicative identity $1_F$. To prevent ambiguity, denote the additive identity in the rational numbers by $0_{\mathbb{Q}}$ and the multiplicative identity in the rational numbers by $1_{\mathbb{Q}}$.

~={red}**Theorem 7.27.** =~Any ordered field $F$ contains a copy of the rational numbers $\mathbb{Q}$ in the following sense. There exists an injective map $i: \mathbb{Q} \longrightarrow F$ that respects all of the axioms for an ordered field. In particular:

$$
\begin{aligned}
i(0_{\mathbb{Q}}) &= 0_F, \\
i(1_{\mathbb{Q}}) &= 1_F, \\
\text{If } a,b \in \mathbb{Q}, &\text{ then } i(a + b) = i(a) + i(b), \\
\text{If } a,b \in \mathbb{Q}, &\text{ then } i(a \cdot b) = i(a) \cdot i(b), \\
\text{If } a,b \in \mathbb{Q} \text{ and } a < b, &\text{ then } i(a) < i(b).
\end{aligned}
$$

Since we know that $\mathbb{Q}$ is an ordered field, this result says that $\mathbb{Q}$ is the "minimal" ordered field.