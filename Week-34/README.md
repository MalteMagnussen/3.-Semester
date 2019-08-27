# Excercises for Week-34 - #1 Week - Flow 1 - 2019

[Use the release.](https://github.com/MalteMagnussen/Week-34/releases/tag/1.0) This release marks the state of the repository at the deadline of Hand-in. I will be continuing work on these projects post-deadline. 

### Monday

__Day where we had to do our setup__

[Domain](http://www.maltemagnussen.com) - maltemagnussen.com - Currently just redirects to my github page.

[Droplet](http://165.22.94.28:8080/)

__Questions__
1. How far you got with a solution
2. Where the solution to each exercise can be found in your commit
3. Which of the weekly learnings goals were covered by your solution

## Tuesday - d. 20-08

__[Plain JPA and Facades](https://docs.google.com/document/d/1Uib8GtBXmQZJ9x5tqXXHt1UYkkRPo9zKwugWa87bzUI/edit#)__
1. I think I finished it all.
2. [myFirstJavaJpaApplication](/01-tuesday-exercises/myFirstJavaJpaApplication)
3. Oprette et basalt Java projekt med JPA og benytte annoteringer til at persistere entiteter i database. Redegøre for og demonstrere brug af begreber som EntityManager, EntityManagerFactory samt Persistence.xml. Demonstrere Insert og Select.

__[JPA flow-1](https://docs.google.com/document/d/1JVXSMz_pw-Fnsid6Eihpam8P2eMd9phqwTQOFRzvrug/edit)__
1. I think I finished it all.
2. [point](/01-tuesday-exercises/point) & [extwo](/02-wednesday-exercises/extwo)
3. Same as above.

## Wednesday - d. 21-08

__[Excercise 1-3](https://docs.google.com/document/d/1gdtrSIb_RiEE3qv5hPwrzBrNaowHA-MPFXR8LP9CKJk/edit)__
1. I think I finished it all.
2. [rest1](/02-wednesday-exercises/rest1)
3.  Oprette et Java projekt med REST endpoints. Implementere kode indeholdende de mest grundlæggende REST annotationer (GET kun). Håndtere parametre i REST endpoints i egne kodeeksempler. Redegøre for, og demonstrere det udleverede start project til brug for JPA/REST-projekter.

__[Excercise 4](https://docs.google.com/document/d/1gdtrSIb_RiEE3qv5hPwrzBrNaowHA-MPFXR8LP9CKJk/edit#heading=h.p9890zykjtxh)__
1. I think I finished it all. 
2. [extwo](/02-wednesday-exercises/extwo)
3. Same as above.

## Thursday - d. 22-08
__[Day-4-JPA_REST_JSON](https://docs.google.com/document/d/1c4uti7oLiipp1Sdny9Rwc1aOStfn9aasmWhhhzuTQS8/edit)__
1. I think I finished it all. [Deployment](http://165.22.94.28:8080/thursday/api/employee/all)
2. [JPA REST JSON](/03-thursday-exercises/JPA%20REST%20JSON)
3.  
    * Designe simple GET-endpoints med brug af en underliggende database tilgået via JPA
    * Kunne redegøre for nødvendigheden af i brug af JSON
    * Kunne redegøre for korrekt JSON syntaks
    * Kunne redegøre for Data Tranfer Objects (DTO's) og serialisering mellem Java objekter og JSON
    * Kunne konvertere frem og tilbage mellem Java objekter og JSON i egen kode

## Friday - d. 23-08
__[Friday JPA REST DTO](https://docs.google.com/document/d/1HdHiORGNyteRpn7MoOixowxL10LQuUHt9XxAKtL9r0o/edit)__
1. I think I finished it all. [Deployment](http://165.22.94.28:8080/friday/api/customer/all)
2. [JPA REST DTO](/04-friday-exercises/JPA_REST_DTO)
3. Same as above


[Example of testing in extwo project.](02-wednesday-exercises/extwo/src/test/java/dbfacade/CustomerFacadeTest.java)
You make a test database, then point to that via a [new persistance connection](02-wednesday-exercises/extwo/src/main/resources/META-INF/persistence.xml) and then choose that when you make your EntityManagerFactory("putest");

[Another example of testing](https://github.com/MalteMagnussen/Week-34/blob/master/04-friday-exercises/JPA_REST_DTO/src/test/java/facades/CustomerFacadeTest.java) - Made post-deadline though, but it follows the same principles as above. This is a better example of testing though imo. 
