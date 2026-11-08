# MATH 161, SHEET 0: The Natural Numbers and Mathematical Induction

**Axioms (Peano’s Postulates).** The natural numbers are defined as a set $\mathbb{N}$ together with a unary “successor” function $S : \mathbb{N} \to \mathbb{N}$ and a special element $1 \in \mathbb{N}$ satisfying the following postulates:

I. $1 \in \mathbb{N}$.

II. If $n \in \mathbb{N}$, then $S(n) \in \mathbb{N}$.

III. There is no $n \in \mathbb{N}$ such that $S(n) = 1$.

IV. If $n, m \in \mathbb{N}$ and $S(n) = S(m)$, then $n = m$.

V. If $A \subset \mathbb{N}$ is a subset satisfying the two properties:
   - $1 \in A$
   - if $n \in A$, then $S(n) \in A$,
   then $A = \mathbb{N}$.

---

**Theorem (Mathematical Induction).** For each $n \in \mathbb{N}$, let $P(n)$ be a proposition. Suppose the following two results:


(A) $P(1)$ is true.

(B) If $P(n)$ is true, then $P(S(n))$ is true.

Then $P(n)$ is true for all $n \in \mathbb{N}$.


Statement (A) is called the base case and statement (B) is called the inductive step. The assumption that $P$ is true of $n$ is called the inductive hypothesis.

1. Prove that for all positive integers $n$,
$$


   1^2 + 2^2 + 3^2 + \cdots + n^2 = \frac{n(2n+1)(n+1)}{6}. 
   $$

~={pink}Proof:=~

~={pink}For each $n\in \mathbb{N}$, Let $P(n)$ be a supposition that  $1^2 + 2^2 + 3^2 + \cdots + n^2 = \frac{n(2n+1)(n+1)}{6}$=~
~={pink} When $n=1$, $1^2=\frac{1(2\cdot1+1)(1+1)}{6}=1$  $\implies P(1)$ is true=~

~={pink}Suppose $P(n)$ is true:=~

~={pink}Since $1^2+2^2+3^2\dots+(n+1)^2=(1^2+2^2+3^2\dots+n^2)+(n+1)^2$=~
~={pink}Replace $1^2 + 2^2 + 3^2 + \cdots + n^2$ with $\frac{n(2n+1)(n+1)}{6}$=~
~={pink}Then $$1^2+2^2+3^2\dots+(n+1)^2=(1^2+2^2+3^2\dots+n^2)+(n+1)^2=\frac{n(2n+1)(n+1)}{6}+(n+1)^2=(n+1)\left(\frac{2n^2+7n+6}{6} \right)=\frac{(n+1)(2n+3)(n+2)}{6}$$=~
~={pink}$P(n+1)$ holds.=~

~={pink}Thus, by mathematical induction, $P(n)$ holds for all $n \in \mathbb{N}$ =~

2. Prove that if $n \geq 4$, then $n^2 \leq 2^n$.

~={pink}Proof: =~

~={pink}Let $P(n)$ be the proposition that  $n^2 \leq 2^n$ for all $n\geq4$.=~
~={pink}When $n=4$, $4^2=2^4$. $P(4)$ holds.=~

~={pink}Suppose $P(n)$ holds i.e. $n^2\leq2^n$=~
~={pink}$(n+1)^2=n^2+2n+1\leq2^n+2n+1<2^n+2^n=2^{n+1}$ ,$(n\geq4,2n+1\leq n^2)$=~
~={pink}i.e. $P(n+1)$ holds.=~

~={pink}Thus, by mathematical induction, $P(n)$ holds for each $n\in \mathbb{N}$=~

3. Prove Bernoulli’s Inequality:

   $$
   \text{If } 1 + x > 0, \text{ then } (1 + x)^n \geq 1 + nx \text{ for any } n \in \mathbb{N}.
   $$

~={pink}Proof:=~

~={pink}let $P(n)$ be the proposistion that  $\text{If } 1 + x > 0, \text{ then } (1 + x)^n \geq 1 + nx$, for all $n\in \mathbb{N}.$=~

~={pink}When $n=1$, $1+x\geq1+x$, $P(1)$ holds.=~

~={pink}Suppose $P(n)$ is true i.e. $\text{If } 1 + x > 0, \text{ then } (1 + x)^n \geq 1 + nx$=~
~={pink}Then $(1+x)^{n+1}=(1+x)^n(1+x)\geq(1+nx)(1+x)=1+(n+1)x+nx^2>1+(n+1)x$=~
~={pink}i.e. $P(n+1)$ is true.=~

~={pink}Thus, by mathematical induction, $P(n)$ is true for all $n\in \mathbb{N}$.=~


4. Prove the theorem.

~={pink}Proof:=~

~={pink}Suppose that (A) $P(1)$ is true, and (B) If $P(n)$ is true, then $P(S(n))$ is true.=~

~={pink}Noticing that the condition we have and what we want to prove has similar form with axiom V, we consider constructing a subset $A\in \mathbb{N}$ and prove $A=\mathbb{N}$:=~

~={pink}Let set $A=\{  n\in \mathbb{N}| \ P(n) \text{ is true }\}\subset \mathbb{N}$=~

~={pink}Given that:=~

~={pink}- $1\in A$ by (A)=~
~={pink}- if $n\in A$ , then $S(n) \in A$ by (B)=~

~={pink}By Axiom V, $A=\mathbb{N}$. i.e. $P(n)$ is true for all $n\in \mathbb{N}$=~

~={pink}Thus, if (A) and (B) hold, then  $P(n)$ is true for all $n \in \mathbb{N}$.=~


