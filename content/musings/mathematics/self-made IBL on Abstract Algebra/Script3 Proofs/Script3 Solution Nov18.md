## Cosets

**Definition 3.1.** Let $H \leq G$ and $a \in G$. The **left coset** of $H$ in $G$ containing $a$ is:
$$aH = \{ah \mid h \in H\}.$$
The **right coset** of $H$ in $G$ containing $a$ is:
$$Ha = \{ha \mid h \in H\}.$$

**Theorem 3.2.** For any $a \in G$, the map $h \mapsto ah$ is a bijection from $H$ to $aH$. Hence all left cosets have the same cardinality as $H$.

$Proof:$
For any $a \in G$, and the map $f:H\to aH,f(h)=ah$, since $a^{-1}\in G$, there exists $f^{-1}:aH\to H, g\to a^{-1}g$, such that $$
f^{-1}f:H\to H, f^{-1}f(h)=f^{-1}(ah)=a^{-1}ah=eh=h
$$
Therefore, $f$ is bijection from $H$ to $aH$. Hence all left cosets have the same cardinality as $H$.

**Theorem 3.3.** Let $H \leq G$. The left cosets of $H$ in $G$ form a partition of $G$. (A [Partition of a set](https://en.wikipedia.org/wiki/Partition_of_a_set) divides a set into non-empty, non-overlapping subsets (called **blocks** or **cells**) whose union equals the original set.)

$Proof:$

Since$H \leq G$, $e\in H$.
For all elements $g \in G$, $g=g \cdot e\in gH$
So all the elements of $G$ are included in all the cosets.

Now we prove that each left coset of $H$ has no intersection.
Suppose, for contradiction, there exists two left cosets $mH$ and $nH$ such that $mH\neq nH,mH \cap nH\neq \emptyset$.
Then  $$\text{there exists }mh_{1}=nh_{2}\implies m=nh_{2}h_{1}^{-1}=nh_{3}\implies mh=nh_{3}h=nh_{4}\in nH$$ meaning that $mH \subset nH$.
Since in the meantime $|mH|=|nH|$, $$
mH=nH
$$
which contradicts to the assumption that they are not equal.
Therefore, for all  $mH\neq nH,mH \cap nH=\emptyset$. 
Thus, the left cosets of $H$ form a partition of $G$. 


**Theorem 3.4.** For $a, b \in G$, the following are equivalent:

1. $aH = bH$
2. $a^{-1}b \in H$
3. $b \in aH$
4. $a \in bH$

**Theorem 3.5.** Two left cosets of $H$ in $G$ are either equal or disjoint.

As shown in Theorem 3.3.

---

## Lagrange's Theorem

**Theorem 3.10 (Lagrange's Theorem).** If $G$ is finite and $H \leq G$, then $|H|$ divides $|G|$. Moreover,
$$|G| = (G:H) \cdot |H|,$$
where $(G:H)$ is the **index** of $H$ in $G$, i.e., the number of distinct left cosets of $H$ in $G$.

$Proof:$
By Theorem 3.3. Let $H \leq G$. The left cosets of $H$ in $G$ form a partition of $G$, that is, $$G=\bigcup_{g\in G}gH$$
Therefore, $$
|G|=|\bigcup_{g\in G}gH|=\sum_{g\in G}^{}|gH|= (G:H) \cdot |H|
$$since $|gH|=|H|$ and the fact that Two left cosets of $H$ in $G$ are either equal or disjoint by theorem3.5.

**Corollary 3.11.** The order of any element of a finite group $G$ divides the order of the group.

$Proof:$
Since apparently $\langle a \rangle \leq G$, for all $a\in G$, by Langrange's Theorem,$$
|G| = (G:\langle a \rangle) \cdot |\langle a \rangle|=(G:\langle a \rangle) \cdot|a|
$$
 Thus, the order of any element of a finite group $G$ divides the order of the group.

**Corollary 3.12.** Every group of prime order is cyclic.

$Proof:$
Let's consider $G$ of prime order $p$.
By corollary 3.11, for all nontrivial $g\in G$, $|g|=p$.
For $\langle g \rangle \subset G$, since $|\langle g \rangle| = |G|$, $$
\langle g \rangle = G
$$
Therefore, $G$ is cyclic. Every group of prime order is cyclic.

**Corollary 3.13.** If $G$ is finite of order $n$, then $a^n = e$ for every $a \in G$.

$Proof:$
By corollary3.11, for every $g\in G$ of order $k_{g}$, $k_{g}m=n,m\in \mathbb{Z}_{+}$,
then $g^n=g^{k_{g}m}=e^m=e$.

**Corollary 3.14.** If $H \leq G$ and $K \leq H$, then $(G:K) = (G:H)(H:K)$.

$Proof:$
By Lagrange's Theorem, $|G| = (G:H) \cdot |H|$ and $|H| = (H:K) \cdot |K|$ and $|G| = (G:K) \cdot |K|$.
Solve simultaneously, we get $(G:K) = (G:H)(H:K)$.

**Theorem 3.15.** If $(G:H) = 2$, then $H$ contains the square of every element of $G$.

$Proof:$
Suppose there are $H \neq aH$, and for every $g\in G$, since $(G:H) = 2$, either $g\in H$ or $g\in aH$.
If $g\in H$, naturally $g^2\in H$.
If $g\in aH$, then $g=ah \implies g^2=ahah$

Suppose, for contradiction, that $g^2 \in aH$, then $$hah \in H \implies hah=h_{1} \implies a=h^{-1}h_{1}h^{-1}\in H \implies aH=H$$ which contradicts to $H \neq aH$.
Therefore, $g^2 \notin aH$ and $g^2 \in H$.
Then in either case, $g^2\in H$.
Thus, If $(G:H) = 2$, then $H$ contains the square of every element of $G$.

**Example 3.16.** A group of order $7$ is cyclic; every nonidentity element is a generator.

**Exercise 3.17.** Let $G$ be a group of order $pq$ where $p$ and $q$ are distinct primes. Show that every proper subgroup of $G$ is cyclic.

**Exercise 3.19.** Show that a group of order $15$ has an element of order $3$ and an element of order $5$.

**Exercise 3.20.** Prove that if $G$ is a finite group and $H \leq G$ with $(G:H) = p$ where $p$ is the smallest prime dividing $|G|$, then $H$ is normal in $G$.

---

## Normal Subgroups

**Definition 3.21.** A subgroup $N \leq G$ is **normal** in $G$, denoted $N \triangleleft G$, if for all $g \in G$ and $n \in N$:
$$gng^{-1} \in N.$$

**Theorem 3.22.** The following are equivalent for $N \leq G$:

1. $N \triangleleft G$.
2. $gNg^{-1} = N$ for all $g \in G$.
3. $gN = Ng$ for all $g \in G$.
4. $N$ is the kernel of some homomorphism from $G$ to another group.
5. Every left coset of $N$ is also a right coset of $N$.

**Theorem 3.23.** If $N \triangleleft G$, then the set of left cosets of $N$ in $G$, $G/N$ forms a group under the operation:
$$(aN)(bN) = (ab)N.$$
$Proof:$
Identity: $N$ is the identity since $N(aN)=aN$
Associativy holds trivially.
Closure: $(aN)(bN) = (ab)N$ is stil a left coset of $N$ and thus is in $G/N$.
Inverse: for every $aN$, since $a^{-1}$ must be in $G$ too, there exists $(a^{-1}N)(aN)=eN=N$

**Example 3.24.** Every subgroup of an abelian group is normal.

**Example 3.25.** $A_n \triangleleft S_n$.

$Proof:$
$A_{n}$ is the set of all even permutations, so let $\alpha \in A_{n},\alpha \text{ is even}$.
For all $\sigma \in S_{n}$, $\sigma \alpha \sigma^{-1}$, no matter the parity of $\sigma$, since the parity of $\sigma$ is equal to $\sigma^{-1}$, they add an even amount of transpositions to $\alpha$, which does not affect its original parity. 
Therefore, $\sigma \alpha \sigma^{-1}$ is still even and thus belongs to $A_{n}$. 
Thus, $A_n \triangleleft S_n$

**Example 3.26.** The subgroup of rotations in $D_n$ is normal. The subgroup generated by a reflection is not normal when $n \geq 3$.

**Theorem 3.27.** The intersection of normal subgroups is normal.

**Theorem 3.28.** If $H \leq G$ and $(G:H) = 2$, then $H \triangleleft G$.

$Proof:$
Suppose there are $H\neq aH$
We need to prove that for all $h\in H$, $ghg^{-1}=h_{1}\in H$ for all $g\in G$.
If $g\in H$ , then apparently it holds.
If $g=ah_{3}\in aH$,  suppose for contradiction that $ghg^{-1}=ah_{2}$, then
$$ghg^{-1}=ah_{3}hh_{3}^{-1}a^{-1}=ah_{4}a=ah_{2} \implies a=h_{4}^{-1}h_{2}\implies a\in H\implies aH=H$$
which is a contradiction.
Thus, $ghg^{-1}\not\in aH$, but rather $ghg^{-1}\in H$.
Therefore, in either case $ghg^{-1}\in H$ for all $g\in G$.
If $H \leq G$ and $(G:H) = 2$, then $H \triangleleft G$.

**Theorem 3.29.** If $N \triangleleft G$ and $H \leq G$, then $N \cap H \triangleleft H$.

Remarks: that is to say, take an arbitrary normal subgroup and a subgroup, their intersection is the subgroup of the original subgroup.
