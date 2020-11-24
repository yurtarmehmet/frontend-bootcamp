Under Ecma, each new specification comes with a standard and a committee. In JavaScript’s case, the standard is ECMA-262 and the committee who works on the ECMA-262 standard is the TC39. If you look up the ECMA262 standard, you’ll notice that the term “JavaScript” is never used. Instead, they use the term “EcmaScript” to talk about the official language. The reason for this is because Oracle owns the trademark for the term “JavaScript”.  In the real world, ECMAScript is usually used to refer to the official standard, ECMA-262, while JavaScript is used when talking about the language in practice. Ecma262 standard is the TC39, which stands for Technical Committee 39 


Each new proposal starts off at Stage 0. This stage is called the “Straw man” stage. Stage 0 proposals are “proposals which are planned to be presented to the committee by a TC39 champion or, have been presented to the committee and not rejected definitively, but have not yet achieved any of the criteria to get into stage 1.” So the only requirement for becoming a Stage 0 proposal is that the document must be reviewed at a TC39 meeting


The next stage in the maturity of a new proposal is Stage 1. In order to progress to Stage 1, an official “champion” who is part of TC39 must be identified and is responsible for the proposal. In addition, the proposal needs to describe the problem it solves, have illustrative examples of usage, a high level API, and identify any potential concerns and implementation challenges. By accepting a proposal for stage 1, the committee signals they’re willing to spend resources to look into the proposal in more depth.

The next stage is Stage 2. At this point, it’s more than likely that this feature will eventually become part of the official specification. In order to make it to stage 2, the proposal must, in formal language, have a description of the syntax and semantics of the new feature. In other words, a draft, or a first version of what will be in the official specification is written. This is the stage to really lock down all aspects of the feature. Future changes may still likely occur, but they should only be minor, incremental changes.

Stage 3. At this point the proposal is mostly finished and now it just needs feedback from implementors and users to progress further. In order to progress to Stage 3, the spec text should be finished and at least two spec compliant implementations must be created.

The last stage is Stage 4. At this point, the proposal is ready to be included in the official specification. To get to Stage 4, tests have to be written, two spec compliant implementations should pass those tests, members should have significant practical experience with the new feature, and the EcmaScript spec editor must sign off on the spec text. Basically once a proposal makes it to stage 4, it’s ready to stop being a proposal and make its way into the official specification. 

https://javascript.info/manuals-specifications
https://ui.dev/ecmascript/
https://2ality.com/2015/11/tc39-process.html
https://javascript.christmas/2019/1
