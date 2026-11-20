

**Theorem 3.29.** If $N \triangleleft G$ and $H \leq G$, then $HN = \{hn \mid h \in H, n \in N\}$ is a subgroup of $G$.

$Proof:$
We only need to prove that for all $h_{1}n_{1},h_{2}n_{2}$,  $h_{1}n_{1}n_{2}^{-1}h_{2}^{-1}\in HN$.
Since  $N \triangleleft G$ and $H \leq G$,  $$h_{2}n_{2}^{-1}h_{2}^{-1}=n_{3} \implies n_{2}^{-1}h_{2}^{-1}=h_{2}^{-1}n_{3}\in HN$$
Similarly, $$h_{2}n_{1}h_{2}^{-1}=n_{4} \implies n_{1}h_{2}^{-1}=h_{2}^{-1}n_{4}\in HN$$
Then $h_{1}n_{1}n_{2}^{-1}h_{2}^{-1}=h_{1}n_{1}h_{2}^{-1}n_{3}=h_{1}h_{2}^{-1}n_{4}n_{3}=h_{3}n_{5}\in HN$
Thus, for all $h_{1}n_{1},h_{2}n_{2}$,  $h_{1}n_{1}n_{2}^{-1}h_{2}^{-1}\in HN$; by theorem 2.2, $HN \leq G$.
**Theorem 3.30.** If $N \triangleleft G$ and $M \triangleleft G$, then $NM \triangleleft G$.

$Proof:$
By Theorem 3.29, we know that $NM\leq G$.
We now only need to prove it is a normal subgroup, that is, $$
gNMg^{-1}=NM \iff gnmg^{-{1}}\in NM\text{ for all g belongs to G}  
$$
Since$N \triangleleft G$, $gng^{-1}=n_{2} \implies gn=n_{2}g$.
Similarly, $gmg^{-1}=m_{2}$
Then, $gnmg^{-{1}}=n_{2}gmg^{-1}=n_{2}m_{2}\in NM$.
Thus,  If $N \triangleleft G$ and $M \triangleleft G$, then $NM \triangleleft G$.

~={red}**Exercise 3.31.** Prove that if $G$ is a finite group and $H \leq G$ with $(G:H) = p$ where $p$ is the smallest prime dividing $|G|$, then $H$ is normal in $G$.=~

Remarks: This proof is actually the generalization of **Theorem 3.27.** If $H \leq G$ and $(G:H) = 2$, then $H \triangleleft G$. We use a similar approach here.

$Proof:$
Since $(G:H)=p$, 
Suppose there are distinct $H,aH,a_{2}H\dots,a_{p-1}H$ .
We need to prove that for all $h\in H$, $ghg^{-1}=h_{1}\in H$ for all $g\in G$.
If $g\in H$ , then apparently it holds.
If $g=a_{k}h_{3}\in a_{k}H,k\in \{ 1,2,\dots p-1 \}$,  suppose for contradiction that $ghg^{-1}=a_{m}h_{2},m\in \{ 1,2,\dots p-1 \}$, then
$$ghg^{-1}=a_{k}h_{3}hh_{3}^{-1}a_{k}^{-1}=a_{k}h_{4}a_{k}^{-1}=a_{m}h_{2} \implies ???$$


**Exercise 3.32.** Show that $A_3 \triangleleft S_3$.

---

## The Quotient Group

**Definition 3.35.** Let $N \triangleleft G$. The **quotient group** (or **factor group**) $G/N$ is the set of left cosets of $N$ in $G$ with operation:
$$(aN)(bN) = (ab)N.$$

**Theorem 3.36.** If $N \triangleleft G$, then the set of left cosets of $N$ in $G$, $G/N$ forms a group under the operation:
$$(aN)(bN) = (ab)N.$$
$Proof:$
~={red}Well-definedness of the operation=~:
We need to prove $(aN)(bN) = (ab)N=(a_{1}N)(b_{1}N)= (a_{1}b_{1})N\text{ for all}\text{ }a_{1}\in aN,b_{1}\in bN$.
We thus need to prove $(ab)N=(a_{1}b_{1})N$
Since $a_{1}\in aN,b_{1}\in bN$, $a_{1}=an_{1};b_{1}=bn_{2}$,
then $a_{1}b_{1}=an_{1}bn_{2}$.
Notice: $$N \triangleleft G\implies b^{-1}n_{1}b=n_{3} \implies n_{1}b=bn_{3}$$
then$$a_{1}b_{1}=an_{1}bn_{2}=abn_{3}n_{2}=abn_{4}\in(ab)N$$
Thus by theorem 3.4, $(ab)N=(a_{1}b_{1})N$.
Therefore this is a legitimate operation. That is no matter which $a,b$ we pick from the cosets $aN,bN$, the output $(ab)N$ would be the same.

Identity: $N$ is the identity since $N(aN)=aN$
Associativy holds trivially.
Closure: $(aN)(bN) = (ab)N$ is stil a left coset of $N$ and thus is in $G/N$.
Inverse: for every $aN$, since $a^{-1}$ must be in $G$ too, there exists $(a^{-1}N)(aN)=eN=N$

**Theorem 3.37 (The Natural Homomorphism).** If $N \triangleleft G$, the map
$$\pi: G \to G/N, \qquad \pi(g) = gN$$
is a surjective homomorphism with kernel $N$.

$Proof:$
We first prove it is a homomorphism:
$\pi(g)\pi(h)=(gN)(hN)=(gh)N=\pi(gh)$
$\pi$ is surjective as long as for all $gN\in G/N$, there exists some $g\in G$, such that $\pi(g)=gN$, which by definition of $gN$ and $\pi$ holds.

**Theorem 3.38.** If $G$ is finite, then $|G/N| = |G|/|N|$.

$Proof:$
$|G|/|N|=(G:N)$ which is the number of distinct left cosets of $N$ in $G$, by Lagrange's Theorem while the group $G/N$ is exactly the group of distinct left cosets of $N$ in $G$. Therefore, the order of $G/N,$ $|G/N| \text{ equals to }|G|/|N|$.

~={red}**Theorem 3.39.** If $N \triangleleft G$ and $G/N$ is finite, then for every $g \in G$:=~
$$g^{|G/N|} \in N.$$
$Proof:$
Suppose, for contradiction, that  If $N \triangleleft G$ and $G/N$ is finite, then for every $g \in G$, $g^{|G/N|} \in N$ does not always hold. 
By theorem 3.38, $|G/N| = |G|/|N|$, and to prove theorem3.39 we only need to prove $g^{|G/N|}=g^{-|N|} \in N.\iff g^{|N|}\in N$

Both of these attempts above failed because I was tring to consider each $g$ solely seperately, instead, we must consider this under the context of $G/N$ and cosets. 

Now take an arbitrary $g\in G$, by Lagrange's theorem $$(gN)^{|G/N|}=(g^{|G/N|})N=N$$
Then $g^{|G/N|}\in N$.
Hence If $N \triangleleft G$ and $G/N$ is finite, then for every $g \in G$: $g^{|G/N|} \in N.$

**Theorem 3.40.** If $G$ is cyclic, then every quotient group $G/N$ is cyclic.

**Theorem 3.41.** If $G$ is abelian, then every quotient group $G/N$ is abelian.

Remarks on 3.40&3.41: The bases of these 2 theorems are the operation defined for quotient group, which bases on the operation of group $G$. Therefore, the property of $G$ is in some sense inheritanted to the quotient groups.

**Theorem 3.42.** If $N \triangleleft G$ and $H \leq G$ with $N \leq H$, then $H/N \leq G/N$. Moreover, $H/N \triangleleft G/N$ iff $H \triangleleft G$.

$Proof:$
We already know that both $H/N, G/N$ are groups and are of a same kind of operation.
Then we only need to prove that for all $hN\in H/N,hN\in G/N$, which is trivial since $H \leq G\implies h\in G\implies hN\in G/N$. Therefore, $H/N \leq G/N$.

If $H \triangleleft G$, for all $h\in H,g\in G$, $ghg^{-1}\in H$ that is $ghg^{-1}=h_{1}$
Therefore, for all $gN \in G/N,hN\in H/N$, $(gN)(hN)(g^{-1}N)=(ghg^{-1})N=h_{1}N\in H/N$.
Therefore, $H/N \triangleleft G/N$.

If $H/N \triangleleft G/N$,  for all $gN \in G/N,hN\in H/N$, $(gN)(hN)(g^{-1}N)=(ghg^{-1})N=h_{1}N\in H/N$.
Then, that is, for all $g\in G,h\in H$, $ghg^{-1}=h_{1}\in H$. 
Therefore, $H \triangleleft G$.

**Exercise 3.47.** Let $N \triangleleft G$. Prove that if $a \in G$ has finite order, then the order of $aN$ in $G/N$ divides the order of $a$.

$Proof:$
Let the order of $a$ be $n$. Apparently $(a^n)N=eN=N$
Suppose, for contradiction, that the order of $aN$ say $t\leq n$, in $G/N$ does not divide the order of $a$., that is, $n\equiv k \text{  (mod t)}\iff n=mt+k,k<t<n$.
Then for $aN\in G/N$, on the one hand, $$(aN)^n=(a^n)N=eN=N$$
On the other hand, $$(aN)^n=(aN)^{mt+k}=(aN)^{mt}(aN)^k=N(aN)^k=a^kN\neq N$$
which is a contradiction.
Thus, our supposition fails, instead, if $a \in G$ has finite order, then the order of $aN$ in $G/N$ divides the order of $a$.

**Exercise 3.50.** Let $G$ be a group and $N \triangleleft G$. Prove that if $G/N$ and $N$ are both cyclic, it does **not** necessarily follow that $G$ is cyclic. Find a counterexample.

$D_{n}$ where $N=\{ e,r,r^2,\dots r^{n-1} \}$.
$D_{n}=<r,s>\text{ such that }srs^{-1}=r^{-1}, r^n=e=s^2$
Then by this definition, $D_{n}$ is not cyclic and $N$ is a legitimate cyclic normal subgroup.
Besides, $D_{n}/N=\{  sN,N\}$  is cyclic.

---

## The Correspondence Theorem for Groups

**Theorem 3.51 (Correspondence Theorem).** Let $N \triangleleft G$. There is a bijection between:

- Subgroups $H$ of $G$ with $N \leq H \leq G$, and
- Subgroups $\overline{H}$ of $G/N$,

given by:
$$\phi:H \mapsto H/N, \qquad \phi^{-1}:\overline{H} \mapsto \pi^{-1}(\overline{H}).$$
Moreover, this bijection preserves inclusions, intersections, products, and normality. Specifically:

- $H_1 \leq H_2$ iff $H_1/N \leq H_2/N$.
- $H \triangleleft G$ iff $H/N \triangleleft G/N$.

$Proof:$
$\phi(h)=hN$, $\phi^{-1}(hN)=h$
$\phi \phi^{-1}(hN)=hN;\phi^{-1}\phi(h)=h$.
Therefore, $\phi$ is a bijection between $H$ and $\overline{H}$.
As most parts of the proof of the property of preservation is shown in **Theorem 3.42.** If $N \triangleleft G$ and $H \leq G$ with $N \leq H$, then $H/N \leq G/N$, and $H/N \triangleleft G/N$ iff $H \triangleleft G$.
We only need to prove $H/N \leq G/N\implies N\leq H\leq G\leq P$.(here we add a larger $P$ to make $G$a subgroup too)
We had proved $H/N$ is a group only if $N\triangleleft H$, that is also $N\leq H$. Similarly it holds for $G$.
For all $hN\in H/N$, $hN\in G/N$.
Then, $hN=gN$ for some $g\in G$.
Therefore, $h\in gN \implies h=gn\in G\implies H\leq G$ (since $N\triangleleft G$, $n\in G,gn\in G$)
Hence, $H\leq G$ as desired.

**Corollary 3.52.** The subgroups of $G/N$ are exactly the subgroups of $G$ that contain $N$.

It's shown in the proof for theorem 3.51.

**Exercise 3.54.** Let $G$ be a finite group and $N \triangleleft G$. Prove that $G/N$ has a subgroup of order $d$ for every $d$ dividing $|G/N|$ iff $G$ has a subgroup of order $d \cdot |N|$ containing $N$.

$Proof:$

Take an arbitrary $d$ dividing $|G/N|=|G|/|N|$. 
If $N\triangleleft H\leq G$, $|H|=d\cdot|N|$. 
By theorem 3.51, $H_1/N \leq H_2/N$ if $H_1 \leq H_2$, then $H/N\leq G/N$.
Then the order of $H/N$ is $|H/N|=|H|/|N|=d$.
Therfore,  $G/N$ has a subgroup of order $d$ for every $d$ dividing $|G/N|$ if $G$ has a subgroup of order $d \cdot |N|$ containing $N$.

If $G/N$ has a subgroup of order $d$ for every $d$ dividing $|G/N|$.
Call the subgroup $H/N\leq G/N$ and then by theorem3.51,$H/N\leq G/N\implies H\leq G$ .
Besides, $|H/N|=|H|/|N|=d \implies|H|=|N|\cdot d$.
Then $G$ has a subgroup of order $d \cdot |N|$ containing $N$.