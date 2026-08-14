const lessons = [
  {
    id: 1,
    short: "The Bible",
    title: "The Bible: God's Word",
    era: "Foundations",
    summary: "Begin with the Bible itself: how the written Word came to us, how Scripture is arranged, why the course treats it as reliable and true, and how a student should respond to God's Word.",
    objectives: [
      "Explain what the Bible is and identify benefits of studying God's Word.",
      "Examine the lesson's evidences for reliability and develop a desire to know and understand Scripture."
    ],
    timeline: { steps: ["Innocence", "Conscience", "Human Government", "Promise", "Law", "Church Age"], active: [] },
    sections: [
      { title: "The Journey of the Bible", intro: "The lesson begins with God's communication to humanity and traces the movement from spoken revelation to the written Word.", body: "Before the written Scriptures, the lesson describes God communicating in different ways. It then focuses on Moses, the covenant at Sinai, and the careful preservation and transmission of the written Word.", key: "The course begins by asking students to approach the Bible as God's communication to humanity.", refs: ["Hebrews 1:1", "Deuteronomy 31:9-11"] },
      { title: "Arrangement of the Bible", intro: "Learn the basic structure of Scripture so you can find your way around the Bible confidently.", body: "The material introduces the Bible as a library of books and helps students see the broad Old Testament and New Testament arrangement rather than treating it as one unbroken book.", refs: ["Luke 24:44", "2 Timothy 3:15"] },
      { title: "The Bible Is God's Word", intro: "The lesson presents Scripture as inspired by God and useful for teaching and spiritual formation.", body: "Students are invited to consider what the Bible says about its own source and purpose, and why its message deserves attention and obedience.", key: "Studying Scripture is not only about gaining information; the lesson connects knowing the Word with responding to God.", refs: ["2 Timothy 3:16-17", "2 Peter 1:20-21"] },
      { title: "Why the Bible Is Reliable", intro: "Review the lesson's facts and evidences that support confidence in Scripture.", body: "This part of the course asks students to examine the Bible's preservation, consistency, fulfilled prophecy, historical setting and continuing influence as evidence for its reliability.", refs: ["Isaiah 40:8", "Matthew 24:35"] },
      { title: "Faith and the Word", intro: "The lesson connects hearing God's Word with faith.", body: "Faith is not presented as a vague feeling. Students are directed back to God's Word as the basis for knowing what God has said and deciding how to respond.", refs: ["Romans 10:17", "Hebrews 11:6"] },
      { title: "How Should I Respond?", intro: "End the lesson by moving from understanding to application.", body: "The course encourages students to receive the Word with an open heart, study it consistently, allow it to guide their lives and put what they learn into practice.", key: "Open the Word with an open heart, then live out what you learn.", refs: ["James 1:22-25", "Psalm 119:105"] }
    ],
    quiz: { q: "According to this lesson, studying the Bible should lead to what?", options: ["Only collecting facts", "Knowing and responding to God's Word", "Avoiding every question", "Reading only one section"], answer: 1, feedback: "The lesson joins understanding Scripture with a willing response to God's Word." },
    reflection: "What would help you become more consistent in reading and understanding the Bible?"
  },
  {
    id: 2,
    short: "Creation & Sin",
    title: "Creation, Sin & God's Promise",
    era: "Innocence → Conscience",
    summary: "Explore God's work of creation, the creation of humanity, the fall, the consequences of sin, and the lesson's contrast between humanity's way of dealing with sin and God's way of salvation.",
    objectives: [
      "List characteristics of God seen in creation, judgment and redemption, and define sin and its consequences.",
      "Distinguish between man's attempt to deal with sin and God's way of saving man."
    ],
    timeline: { steps: ["Innocence", "Conscience", "Human Government", "Promise", "Law", "Church Age"], active: ["Innocence", "Conscience"] },
    sections: [
      { title: "God", intro: "The lesson starts with God before focusing on what He made.", body: "Students are introduced to God's nature through the biblical creation account and are asked to notice what His works reveal about His power, order, authority and holiness.", refs: ["Genesis 1:1", "Isaiah 45:5-6"] },
      { title: "What Creation Teaches Us", intro: "Creation is used as a window into the character and authority of the Creator.", body: "The lesson directs attention to God's design, His spoken command and the goodness of what He made, establishing a foundation for the rest of the Bible story.", key: "The Creator has authority over His creation.", refs: ["Genesis 1:3-31", "Psalm 19:1"] },
      { title: "Angels and Humanity", intro: "The course moves from spiritual beings to the creation of man and woman.", body: "Humanity is presented as uniquely created by God and placed in the garden with a relationship, responsibility and command to obey.", refs: ["Genesis 1:26-28", "Genesis 2:7-9"] },
      { title: "The Fall of Man", intro: "Temptation and disobedience introduce sin into the human story.", body: "Adam and Eve choose to disobey God's command after the serpent's temptation. The lesson uses this turning point to define sin and show how separation, shame and judgment enter the story.", refs: ["Genesis 3:1-13", "Romans 5:12"] },
      { title: "Consequences of Sin", intro: "Sin is shown to have real spiritual and human consequences.", body: "The lesson follows the judgment announced in Genesis and emphasizes that sin is not solved simply by hiding it, excusing it or trying to cover it by human effort.", refs: ["Genesis 3:14-24", "Romans 6:23"] },
      { title: "God's Way of Saving Man", intro: "Judgment is followed by mercy and the promise of future salvation.", body: "The course points students toward God's initiative: He provides a covering and gives a promise that moves the Bible story toward a coming Savior.", key: "Even in the account of the fall, the lesson keeps the focus on God's plan for redemption.", refs: ["Genesis 3:15", "Genesis 3:21"] }
    ],
    quiz: { q: "What turning point moves humanity from innocence into the problem of sin?", options: ["The building of Babel", "Adam and Eve's disobedience", "Israel entering Egypt", "The Day of Pentecost"], answer: 1, feedback: "Lesson 2 centers the fall of man in Genesis 3 as the entrance of sin and its consequences." },
    reflection: "Where do you see the difference between trying to hide a problem and allowing God to deal with it?"
  },
  {
    id: 3,
    short: "Grace & Faith",
    title: "Grace, Faith & Obedience",
    era: "Conscience → Human Government",
    summary: "Follow the story after Eden through Cain and Abel, Seth, Enoch and Noah. The lesson develops the relationship between grace, faith and obedience and compares Noah's day with the present day.",
    objectives: [
      "Explain the lesson's concepts of grace, faith and obedience and compare Noah's day with the present day.",
      "Examine Cain, Abel and Noah and identify why the lesson connects salvation with grace, faith and obedience."
    ],
    timeline: { steps: ["Innocence", "Conscience", "Human Government", "Promise", "Law", "Church Age"], active: ["Conscience", "Human Government"] },
    sections: [
      { title: "Cain and Abel", intro: "The problem of sin continues outside the Garden.", body: "The brothers bring offerings to God, but the story develops into jealousy, anger and murder. The lesson uses their different responses to God to continue the theme of faith and obedience.", refs: ["Genesis 4:1-8", "Hebrews 11:4"] },
      { title: "God's Mercy and Cain's Response", intro: "God confronts Cain, yet Cain must still decide how he will respond.", body: "This section highlights both judgment and mercy. It asks students to notice that receiving correction is different from resisting God's voice.", refs: ["Genesis 4:9-16"] },
      { title: "Seth and Enoch", intro: "The lesson follows another family line and introduces a life described as walking with God.", body: "Seth's line helps move the story toward Noah, while Enoch becomes an example of a person whose life is marked by relationship with God.", refs: ["Genesis 4:25-26", "Genesis 5:21-24"] },
      { title: "Noah and God's Plan", intro: "A corrupt world faces judgment, but Noah finds grace.", body: "God gives Noah specific instructions for the ark. The lesson emphasizes that Noah believed God's warning and acted on what God told him to do.", key: "Grace provided the plan; faith believed the Word; obedience acted on it.", refs: ["Genesis 6:5-8", "Genesis 6:13-22", "Hebrews 11:7"] },
      { title: "Covenant After the Flood", intro: "After judgment, God establishes a covenant with Noah.", body: "The rainbow becomes the sign attached to God's covenant promise, and the story moves into the age of human government.", refs: ["Genesis 9:8-17"] },
      { title: "Noah's Day and Our Day", intro: "The lesson closes by comparing the moral and spiritual climate of Noah's day with the present.", body: "Students are asked to move beyond prediction and consider personal readiness, faith and obedience in light of Jesus' reference to the days of Noah.", refs: ["Matthew 24:37-39"] }
    ],
    quiz: { q: "How does Lesson 3 summarize Noah's response to God's plan?", options: ["Grace, faith and obedience", "Knowledge without action", "Fear without instruction", "Tradition alone"], answer: 0, feedback: "The lesson repeatedly connects Noah's salvation story with grace, faith and obedience." },
    reflection: "What is one area where believing God's Word should change what you do?"
  },
  {
    id: 4,
    short: "Abraham to Joseph",
    title: "Abraham, Jacob & Joseph: A Walk of Faith",
    era: "Human Government → Promise",
    summary: "After Babel, the Bible story narrows to Abraham and his family. Follow God's call and covenant, Abraham's tests, Jacob's transformation and Joseph's journey into Egypt.",
    objectives: [
      "Relate your walk of faith to Abraham's life and recognize the need to trust God's strength rather than your own.",
      "Identify ways Abraham, Jacob and Joseph demonstrate trust and surrender to God."
    ],
    timeline: { steps: ["Innocence", "Conscience", "Human Government", "Promise", "Law", "Church Age"], active: ["Human Government", "Promise"] },
    sections: [
      { title: "Babel and Human Rule", intro: "After the flood, humanity gathers again and Babel becomes another picture of rebellion.", body: "The lesson presents Babel as the setting from which God calls Abram. Human ambition and self-rule are contrasted with a life that follows God's direction.", refs: ["Genesis 11:1-9"] },
      { title: "God Calls Abram", intro: "Abram is called to leave what is familiar and follow God's promise.", body: "The course follows Abram's background, God's calling and the first steps of a faith journey that will shape the rest of the biblical story.", refs: ["Genesis 12:1-4", "Hebrews 11:8"] },
      { title: "Promise, Impatience and Covenant", intro: "Abraham believes God, but the lesson also shows his flaws and impatience.", body: "God's promise of descendants appears impossible by human reasoning. Abraham's story becomes a repeated lesson in waiting for God rather than forcing the promise through human strength.", key: "Faith is not presented as a flawless life; it is a growing life that learns to trust God's promise.", refs: ["Genesis 15:1-6", "Genesis 16:1-4", "Genesis 17:1-8"] },
      { title: "Sodom, Isaac and Abraham's Test", intro: "Judgment and promise appear side by side in Abraham's story.", body: "The lesson moves through Sodom and Gomorrah, Isaac's promised birth and Abraham's severe test of faith when asked to offer Isaac.", refs: ["Genesis 18:20-33", "Genesis 21:1-3", "Genesis 22:1-14"] },
      { title: "Jacob Becomes Israel", intro: "Jacob's story is used to teach dependence on God's strength rather than self-reliance.", body: "His life includes striving, consequences, encounters with God and finally a new name: Israel. The lesson calls students to surrender rather than depend entirely on their own ability.", refs: ["Genesis 28:10-17", "Genesis 32:24-30"] },
      { title: "Joseph: God at Work in the Journey", intro: "Joseph's suffering moves the family story toward Egypt.", body: "Betrayal, slavery, imprisonment and eventual authority become part of the path God uses to preserve Jacob's family during famine.", refs: ["Genesis 37:23-28", "Genesis 50:19-20"] }
    ],
    quiz: { q: "What central lesson is drawn from Abraham, Jacob and Joseph?", options: ["Trust and surrender to God", "Avoid every difficult journey", "Depend only on personal strength", "Promises are always immediate"], answer: 0, feedback: "The lesson objectives explicitly connect these lives with faith, trust and surrender." },
    reflection: "What promise or situation is hardest for you to entrust to God instead of controlling yourself?"
  },
  {
    id: 5,
    short: "Exodus & Passover",
    title: "Exodus: Deliverance & Passover",
    era: "Promise → Law",
    summary: "Israel moves from protected guests in Egypt to an enslaved people. God raises Moses as a deliverer, judges Egypt, gives the Passover and brings Israel out toward covenant life as a nation.",
    objectives: [
      "Identify man's need for a deliverer from the bondage of sin and the lesson's emphasis on innocent blood in salvation.",
      "Relate the Exodus story to the student's present spiritual condition."
    ],
    timeline: { steps: ["Innocence", "Conscience", "Human Government", "Promise", "Law", "Church Age"], active: ["Promise", "Law"] },
    sections: [
      { title: "Israel in Bondage", intro: "A new Pharaoh changes Israel's situation in Egypt from security to slavery.", body: "The lesson intentionally compares Israel's bondage in Egypt with the bondage of sin, preparing students to see why a deliverer is needed.", refs: ["Exodus 1:8-14", "Exodus 1:22"] },
      { title: "Moses: God's Chosen Deliverer", intro: "God preserves Moses, meets him in the wilderness and sends him back to Egypt.", body: "Moses' calling shows that deliverance begins with God's initiative. The lesson follows his reluctance, God's commission and his return to confront Pharaoh.", refs: ["Exodus 3:1-10", "Exodus 4:10-12"] },
      { title: "Judgment on Egypt", intro: "Pharaoh's resistance is met with a series of judgments.", body: "The plagues demonstrate God's authority over Egypt and bring the conflict to the final judgment involving the firstborn.", refs: ["Exodus 7:3-5", "Exodus 11:4-7"] },
      { title: "Passover: A Plan of Salvation", intro: "God provides a specific way for Israelite households to be spared from judgment.", body: "A lamb is killed and its blood is applied to the home. The lesson stresses both the shedding and the application of innocent blood, not simply knowing that a sacrifice existed.", key: "The blood had to be provided and applied according to God's instruction.", refs: ["Exodus 12:3-13"] },
      { title: "The Exodus", intro: "God brings His people out of Egypt and through the sea.", body: "Deliverance is shown as a decisive break from bondage. The story then shifts from rescue out of Egypt to learning how to live as God's covenant people.", refs: ["Exodus 14:13-16", "Exodus 14:29-31"] },
      { title: "Birth of the Nation of Israel", intro: "The delivered people arrive at Sinai and are prepared for covenant.", body: "This transition sets up Lesson 6: Israel is not only rescued from something; the nation is being formed for God's purpose and holiness.", refs: ["Exodus 19:3-6"] }
    ],
    quiz: { q: "What did the Passover lesson emphasize about the blood?", options: ["It only needed to be discussed", "It had to be shed and applied", "It belonged only inside the tabernacle", "It replaced Moses"], answer: 1, feedback: "Lesson 5 explicitly emphasizes both the shedding and application of innocent blood." },
    reflection: "What does the idea of moving from bondage into a new life with God mean to you personally?"
  },
  {
    id: 6,
    short: "Holiness & Tabernacle",
    title: "Holiness & the Tabernacle",
    era: "Age of Law",
    summary: "At Sinai, God forms Israel as a holy nation. Study God's holiness, His law, the Tabernacle and its furnishings, and the lesson's connections between the Tabernacle and Jesus Christ.",
    objectives: [
      "List ways God introduces His holiness to Israel and identify the Tabernacle's major articles and purposes.",
      "State the lesson's correlations between the Tabernacle and Jesus Christ."
    ],
    timeline: { steps: ["Innocence", "Conscience", "Human Government", "Promise", "Law", "Church Age"], active: ["Law"] },
    sections: [
      { title: "A Holy Nation", intro: "Israel is called to be a special people who reveal God's holiness.", body: "The lesson contrasts the practices of surrounding nations with God's call for Israel to be set apart and obey His covenant.", refs: ["Exodus 19:5-6", "Leviticus 18:3"] },
      { title: "God's Desire for a Holy People", intro: "Holiness is presented as part of God's character and His desire for His people.", body: "The course carries the theme forward to the New Testament, showing that being set apart for God remains part of the believer's calling.", refs: ["Leviticus 11:44", "1 Peter 2:9"] },
      { title: "God's Presence, Power and Law", intro: "Sinai displays God's presence and introduces His law to Israel.", body: "The law teaches the nation how to live in covenant with a holy God. The lesson uses this to show that God's holiness shapes worship, conduct and community life.", refs: ["Exodus 19:16-20", "Exodus 20:1-17"] },
      { title: "The Tabernacle", intro: "God gives Moses a pattern for a holy place in the midst of Israel.", body: "The Tabernacle becomes the center of worship and provides a visual pathway from the outer court toward God's presence.", key: "The course treats the Tabernacle as both a real place of worship for Israel and a teaching picture that points ahead.", refs: ["Exodus 25:8-9", "Exodus 40:34-38"] },
      { title: "Furnishings of the Tabernacle", intro: "Walk through the major articles and what each one was used for.", body: "Students study the altar, laver, lampstand, table of showbread, altar of incense and Ark of the Covenant as parts of the worship system God gave Israel.", refs: ["Exodus 27:1-8", "Exodus 30:17-21", "Exodus 25:10-22"] },
      { title: "The Tabernacle and a Holy Savior", intro: "The lesson finishes by connecting Tabernacle themes with Jesus Christ.", body: "Rather than leaving the Tabernacle as an Old Testament artifact, the course uses its worship, sacrifice and access to God's presence to prepare for the coming Savior.", refs: ["John 1:14", "Hebrews 9:11-12"] }
    ],
    quiz: { q: "Why is the Tabernacle important in Lesson 6?", options: ["It is only an architecture study", "It shows Israel's worship and points toward Jesus", "It replaces the whole Old Testament", "It belongs to Egypt"], answer: 1, feedback: "The objectives explicitly ask students to connect the Tabernacle and its articles with Jesus Christ." },
    reflection: "Which part of the Tabernacle picture most helps you understand approaching a holy God?"
  },
  {
    id: 7,
    short: "Jesus Christ",
    title: "Jesus Christ: God With Us",
    era: "Law → Church Age",
    summary: "Enter the New Testament and follow the birth, ministry, identity, authority, death, burial and resurrection of Jesus Christ. The lesson compares Jesus with the God revealed in the Old Testament.",
    objectives: [
      "Describe the purpose of Jesus' coming.",
      "Compare Jesus with the God of the Old Testament according to the lesson and conclude that they are One."
    ],
    timeline: { steps: ["Innocence", "Conscience", "Human Government", "Promise", "Law", "Church Age"], active: ["Law", "Church Age"] },
    sections: [
      { title: "Introduction to the New Testament", intro: "The lesson divides the New Testament into Gospels, Acts, Epistles and Revelation.", body: "The Gospels introduce Christ, Acts records the life of the original Church, the Epistles instruct believers and Revelation looks toward the completion of the story.", refs: ["Hebrews 9:16-17"] },
      { title: "The Birth of Jesus", intro: "Mary is told she will give birth to Jesus, whose identity and mission are described before His birth.", body: "The lesson emphasizes the miraculous conception, the name Jesus and the title Immanuel, 'God with us,' as foundations for understanding who Jesus is.", refs: ["Luke 1:31-35", "Matthew 1:20-23"] },
      { title: "John the Baptist", intro: "John prepares people for the coming Messiah.", body: "His preaching calls people to repentance and points away from himself toward the One who is coming after him.", refs: ["Matthew 3:1-3", "John 1:29-34"] },
      { title: "The Life and Ministry of Jesus", intro: "Jesus teaches, heals, delivers and announces the kingdom of God.", body: "The lesson follows His public ministry to show both compassion and authority, preparing students for the question at the center of the lesson: who does the Bible say Jesus is?", refs: ["Luke 4:18-19", "Acts 10:38"] },
      { title: "Who Does the Bible Say Jesus Is?", intro: "The course compares Old Testament descriptions of God with New Testament descriptions of Jesus.", body: "Students are asked to examine names, actions and claims across Scripture and to understand the lesson's Oneness conclusion about Jesus and the God of the Old Testament.", key: "This lesson's doctrinal focus is the identity of Jesus Christ.", refs: ["Isaiah 9:6", "John 10:30", "Colossians 2:9"] },
      { title: "Jesus Forgave Sins", intro: "The authority to forgive becomes another key sign in the lesson's case for Jesus' identity.", body: "When Jesus forgives sins, the response of His hearers raises the question of divine authority and who can truly forgive sin.", refs: ["Mark 2:5-12"] },
      { title: "Death, Burial and Resurrection", intro: "The Gospel events bring the lesson to its climax.", body: "Jesus dies, is buried and rises again. These events become the foundation for the next lesson's study of the Gospel and how the original Church responded to it.", refs: ["1 Corinthians 15:1-4", "Luke 24:46-47"] }
    ],
    quiz: { q: "What three events form the core Gospel sequence highlighted at the end of Lesson 7?", options: ["Birth, baptism, temptation", "Death, burial and resurrection", "Creation, flood and Babel", "Law, temple and exile"], answer: 1, feedback: "Lesson 7 ends with the death, burial and resurrection of Jesus Christ, preparing for Lesson 8." },
    reflection: "Which part of Jesus' identity or ministry stood out most to you in this lesson, and why?"
  },
  {
    id: 8,
    short: "Gospel & Baptism",
    title: "The Gospel: Repentance & Baptism",
    era: "Church Age",
    summary: "After the resurrection, Jesus commissions His disciples. This lesson defines the Gospel, studies faith as knowledge, agreement and obedience, and follows repentance and water baptism in the original Church.",
    objectives: [
      "Explain what the Gospel is, how the lesson says it is obeyed, and how baptism was administered in the original Church.",
      "Respond personally to the lesson's call to repentance and water baptism in Jesus' name."
    ],
    timeline: { steps: ["Innocence", "Conscience", "Human Government", "Promise", "Law", "Church Age"], active: ["Church Age"] },
    sections: [
      { title: "New Testament Plan of Salvation", intro: "The lesson connects previous salvation pictures with the New Testament new-birth message.", body: "Noah had the ark, Abraham had covenant signs and Israel had the Tabernacle. The course now turns to the Gospel and the new birth as taught by Jesus and His apostles.", refs: ["Luke 24:46-49", "John 3:3-5"] },
      { title: "Biblical Faith: Know, Agree, Obey", intro: "Faith is presented as more than mental knowledge.", body: "The material describes true biblical faith as involving knowledge of God's Word, agreement with it and an obedient response.", key: "The lesson repeatedly asks not only 'What do you believe?' but also 'How will you respond?'", refs: ["James 2:17-20", "Hebrews 11:7"] },
      { title: "Repentance", intro: "Repentance is the first major response studied in the New Testament plan of salvation.", body: "Students are led to consider a change of heart, direction and attitude toward sin and God rather than reducing repentance to regret alone.", refs: ["Acts 2:37-38", "2 Corinthians 7:10"] },
      { title: "Water Baptism", intro: "The course studies baptism as practiced in Acts.", body: "The lesson explores baptism's purpose and follows conversion accounts to see how the early Church administered it.", refs: ["Acts 8:35-38", "Romans 6:3-4"] },
      { title: "Purpose of Baptism", intro: "Baptism is connected with remission of sins, burial with Christ and the believer's response to the Gospel.", body: "The course places baptism within the overall death-burial-resurrection pattern rather than treating it as an isolated ritual.", refs: ["Acts 2:38", "Colossians 2:12"] },
      { title: "Baptisms in the Early Church", intro: "Jews, Samaritans, Gentiles and former disciples of John are examined across Acts.", body: "Students compare multiple conversion accounts and are invited to notice the consistent place of water baptism in the Church's evangelistic practice.", refs: ["Acts 2:38-41", "Acts 8:12-16", "Acts 10:47-48", "Acts 19:1-5"] },
      { title: "The Name of Jesus in Baptism", intro: "The lesson specifically focuses on baptism in the name of Jesus Christ.", body: "By comparing the commands of Jesus with the recorded practice of the apostles, the course teaches baptism in Jesus' name as the original Church's pattern.", refs: ["Matthew 28:19", "Acts 2:38", "Acts 10:48", "Acts 19:5"] }
    ],
    quiz: { q: "How does Lesson 8 describe true biblical faith?", options: ["Knowledge only", "Knowledge, agreement and obedience", "Emotion without Scripture", "Tradition without response"], answer: 1, feedback: "The lesson outline explicitly describes biblical faith as knowledge, agreement and obedience." },
    reflection: "After studying the Gospel response in Acts, what question or personal response do you want to explore further?"
  },
  {
    id: 9,
    short: "Holy Spirit",
    title: "The Promise of the Holy Spirit",
    era: "Church Age",
    summary: "Study who the Holy Spirit is, the Old Testament promise, Jesus' reaffirmation of the promise, the first outpouring at Pentecost and the lesson's teaching on receiving the Spirit by faith.",
    objectives: [
      "Recognize the lesson's teaching that God desires to fill every person with His Spirit and identify its stated initial biblical evidence.",
      "Respond personally by considering the desire to receive the Holy Spirit."
    ],
    timeline: { steps: ["Innocence", "Conscience", "Human Government", "Promise", "Law", "Church Age"], active: ["Church Age"] },
    sections: [
      { title: "Recap: The Plan of Salvation", intro: "Lesson 9 begins where repentance and baptism left off.", body: "Acts 2:38 and John 3 frame the Holy Spirit as part of the new-birth experience taught by Jesus and proclaimed by Peter.", refs: ["Acts 2:38", "John 3:5-7"] },
      { title: "Who Is the Holy Spirit?", intro: "The course identifies the Holy Spirit as the Spirit of God working in and through people.", body: "This section establishes the identity of the Spirit before tracing the promise through both Testaments.", refs: ["John 4:24", "2 Corinthians 3:17"] },
      { title: "The Promise in the Old Testament", intro: "Prophets looked ahead to a time when God's Spirit would be poured out in a new way.", body: "The lesson follows promises that God would put His Spirit within people and pour His Spirit on all flesh.", refs: ["Ezekiel 36:26-27", "Joel 2:28-29"] },
      { title: "Jesus Reaffirms the Promise", intro: "Before His ascension, Jesus tells His disciples to wait for the promise of the Father.", body: "The disciples are not told to begin their mission in their own strength. They are told to wait until they receive power from on high.", refs: ["Luke 24:49", "Acts 1:4-8"] },
      { title: "The First Outpouring", intro: "Acts 2 records the Spirit being poured out on the waiting disciples.", body: "The lesson highlights speaking in other tongues as the initial biblical evidence accompanying the reception of the Holy Spirit, then traces similar experiences in Acts.", key: "This is a central doctrinal claim of the source curriculum and is presented as the biblical pattern for receiving the Spirit.", refs: ["Acts 2:1-4", "Acts 10:44-46", "Acts 19:6"] },
      { title: "Why Do We Need the Spirit?", intro: "The Spirit is connected with new birth, power, guidance and life in Christ.", body: "The lesson moves beyond the moment of reception to the continuing work of God's Spirit in the believer.", refs: ["Romans 8:9-11", "John 16:13"] },
      { title: "Receiving the Spirit by Faith", intro: "The course encourages students to receive God's promise with faith rather than fear or striving.", body: "The closing sections compare physical and spiritual birth and call students to respond personally to the promise of the Spirit.", refs: ["Luke 11:13", "Galatians 3:14"] }
    ],
    quiz: { q: "What initial evidence does the source curriculum identify with receiving the Holy Spirit?", options: ["Speaking in tongues", "Receiving a written certificate", "Traveling to Jerusalem", "Keeping silent"], answer: 0, feedback: "Lesson 9 explicitly teaches speaking in tongues as the initial biblical evidence accompanying the reception of the Holy Spirit." },
    reflection: "What questions or desires do you have after studying the promise and outpouring of the Holy Spirit?"
  },
  {
    id: 10,
    short: "Apostles' Doctrine",
    title: "The Apostles' Doctrine",
    era: "Church Age",
    summary: "After Pentecost, the new believers continue steadfastly in the apostles' doctrine. Study who the apostles were, where their teaching came from, why it became foundational to the Church, and why believers were willing to suffer for it.",
    objectives: [
      "State the importance of the apostles' doctrine to a believer's faith and explain who the apostles were.",
      "Compare current beliefs with the apostles' doctrine and identify similarities or differences."
    ],
    timeline: { steps: ["Innocence", "Conscience", "Human Government", "Promise", "Law", "Church Age"], active: ["Church Age"] },
    sections: [
      { title: "After the Day of Pentecost", intro: "Three thousand people receive the word and are added to the Church.", body: "Acts describes them continuing steadfastly in the apostles' doctrine, fellowship, breaking of bread and prayers. The lesson defines steadfastness as living in and practicing the truth.", refs: ["Acts 2:41-43"] },
      { title: "What Is the Apostles' Doctrine?", intro: "The course asks what the early believers were actually taught to continue in.", body: "The apostles' doctrine is presented as the body of teaching handed down through the apostles and preserved in the New Testament witness.", key: "The lesson's first key is to continue steadfastly in the apostles' doctrine after being born again.", refs: ["Acts 2:42", "Jude 1:3"] },
      { title: "Where Did Their Doctrine Come From?", intro: "The apostles were not presented as inventing a new message independently.", body: "They had been chosen and taught by Jesus, witnessed His resurrection and were commissioned to carry His teaching to the nations.", refs: ["Luke 24:45-49", "Acts 1:1-3"] },
      { title: "What Were They Commanded to Do?", intro: "Jesus sends the apostles to teach and make disciples.", body: "The course emphasizes the authority and responsibility attached to their commission, linking the apostles' doctrine back to Jesus' own instruction.", refs: ["Matthew 28:18-20", "John 17:18-20"] },
      { title: "Foundation of the Church", intro: "Apostolic teaching is described as foundational to the Church's faith and life.", body: "The lesson calls students to examine their own beliefs in light of the doctrine recorded by the apostles rather than relying only on later tradition.", refs: ["Ephesians 2:19-22", "1 Corinthians 3:10-11"] },
      { title: "Persecution for the Doctrine", intro: "The early Church's teaching brought opposition as well as growth.", body: "The material follows examples of believers who continued preaching and teaching despite threats and persecution, showing how deeply they valued the message they had received.", refs: ["Acts 4:18-20", "Acts 5:27-29"] }
    ],
    quiz: { q: "What did the new believers continue steadfastly in after Pentecost?", options: ["The apostles' doctrine", "Roman politics", "Temple architecture", "Egyptian customs"], answer: 0, feedback: "Acts 2:42 is the lesson's starting point: the believers continued steadfastly in the apostles' doctrine." },
    reflection: "Which belief would you most like to compare carefully with the teaching and practice of the apostles in Scripture?"
  },
  {
    id: 11,
    short: "End Times",
    title: "The Return of Jesus & the End Times",
    era: "Signs → Rapture → Tribulation",
    summary: "Study Jesus' promised return, signs described in the world, Israel and the Church, the Rapture, and the source curriculum's outline of the Great Tribulation.",
    objectives: [
      "Recognize the lesson's sequence from present signs toward the Rapture and Great Tribulation.",
      "Consider salvation, holiness and priorities in light of the promised return of Jesus."
    ],
    timeline: { steps: ["Signs Now", "Rapture", "Tribulation", "Millennium", "Judgment", "Eternity"], active: ["Signs Now", "Rapture", "Tribulation"] },
    sections: [
      { title: "Jesus Spoke of His Return", intro: "The lesson opens with Jesus' promise to come again and receive His disciples.", body: "His ascension is paired with the promise of His return. The course then turns to signs that it says characterize the period before the end.", refs: ["John 14:2-3", "Acts 1:11"] },
      { title: "Signs of the End: Global", intro: "Matthew 24 provides the lesson's main global sign list.", body: "The material highlights deception, wars, conflict between nations, famines, pestilence, earthquakes, persecution, betrayal, false prophets, lawlessness and diminishing love. It also discusses characteristics of people in the last days.", refs: ["Matthew 24:3-13", "2 Timothy 3:1-7", "1 Thessalonians 5:1-4"] },
      { title: "Signs of the End: Israel", intro: "The curriculum treats the regathering of Israel as part of its prophetic timeline.", body: "Jeremiah and Amos are used to discuss Israel's return to the land, and the student material connects this with the modern State of Israel.", refs: ["Jeremiah 30:3", "Amos 9:14-15"] },
      { title: "Signs Within the Church", intro: "The lesson presents two simultaneous themes: falling away and revival/expansion.", body: "Warnings about deception and apostasy appear alongside promises of the Spirit's outpouring and the Gospel being preached to the nations.", refs: ["Matthew 24:24", "2 Thessalonians 2:3", "Joel 2:27-29", "Matthew 24:14"] },
      { title: "The Rapture", intro: "The lesson describes the Rapture as Jesus gathering His Church to be with Him.", body: "It distinguishes the Rapture from the second coming, emphasizes its suddenness and connects readiness with salvation, holiness and kingdom priorities.", key: "The student material tells learners not to focus on guessing a date, but on being ready and being witnesses.", refs: ["1 Thessalonians 4:15-18", "1 Corinthians 15:51-54", "Acts 1:6-8"] },
      { title: "The Great Tribulation", intro: "The course outlines a period of unprecedented tribulation and judgment.", body: "It acknowledges that Bible scholars differ on the timing, then surveys the Seven Seals, Seven Trumpets, the Antichrist and False Prophet, and the Seven Vials as presented in Revelation.", refs: ["Matthew 24:21", "Revelation 6:1-17", "Revelation 8:1-13", "Revelation 16:1-21"] },
      { title: "Antichrist, False Prophet & Armageddon", intro: "The lesson identifies two Revelation figures who rise during the Tribulation.", body: "The student material describes the Antichrist as a political world leader and the False Prophet as a religious deceiver, then leads toward the gathering for the Battle of Armageddon and Lesson 12.", refs: ["Revelation 13:1-18", "2 Thessalonians 2:3-10"] }
    ],
    quiz: { q: "What does Lesson 11 say students should focus on instead of guessing the date of the Rapture?", options: ["Being a witness and ready for Christ", "Ignoring Scripture", "Calculating political dates", "Avoiding every responsibility"], answer: 0, feedback: "The student material explicitly redirects attention from guessing times to obeying Jesus' command to be witnesses and live ready." },
    reflection: "If you truly lived with eternity in view, what is one priority you would change now?"
  },
  {
    id: 12,
    short: "Eternity",
    title: "Eternity: Judgment & New Creation",
    era: "Millennium → Judgment → Eternity",
    summary: "Continue from the Tribulation to the Marriage Supper of the Lamb, the second coming, Armageddon, the Millennium, God's judgments, the Lake of Fire and the New Heaven and New Earth.",
    objectives: [
      "Recall the lesson's sequence of events after the Tribulation and describe its teaching about heaven and the Lake of Fire.",
      "Reassess life and priorities in light of eternity."
    ],
    timeline: { steps: ["Signs Now", "Rapture", "Tribulation", "Millennium", "Judgment", "Eternity"], active: ["Millennium", "Judgment", "Eternity"] },
    sections: [
      { title: "Marriage Supper of the Lamb", intro: "Before the second coming in the lesson's sequence, the raptured Church is pictured as the Bride at the Marriage Supper of the Lamb.", body: "Revelation 19 opens the lesson with celebration, readiness and the relationship between Christ and His people.", refs: ["Revelation 19:7-9"] },
      { title: "The Second Coming of Jesus", intro: "Jesus returns with His saints to establish His kingdom and defeat the opposing powers.", body: "The material distinguishes this event from the Rapture studied in Lesson 11 and connects it with Old Testament prophecies of God's kingdom.", refs: ["Revelation 19:11-16", "Daniel 2:44"] },
      { title: "The Battle of Armageddon", intro: "The armies gathered against Israel meet the returning Christ.", body: "This event closes the Tribulation conflict in the course timeline and leads into the thousand-year kingdom.", refs: ["Revelation 16:16", "Revelation 19:19-21"] },
      { title: "The Millennium Kingdom", intro: "The lesson describes a thousand-year reign of Christ on earth.", body: "Satan is restrained for the Millennium and later released for a final rebellion before the final judgment.", refs: ["Revelation 20:1-10"] },
      { title: "Judgments of God", intro: "The curriculum distinguishes the Judgment Seat of Christ and the Great White Throne Judgment.", body: "Students are asked to recognize the seriousness of accountability before God and the finality of the Great White Throne scene.", refs: ["2 Corinthians 5:10", "Revelation 20:11-15"] },
      { title: "The Lake of Fire", intro: "The lesson presents the Lake of Fire as the final destination of those judged outside the Book of Life.", body: "This section is intentionally sobering and is placed beside the lesson's picture of eternal life with God.", refs: ["Revelation 20:14-15"] },
      { title: "A New Heaven and a New Earth", intro: "The 12-lesson journey ends with God's renewed creation and His dwelling with His people.", body: "Revelation's final vision brings the course from Genesis creation to eternal restoration: sorrow, death and pain are pictured as passing away in God's final future.", key: "The final lesson asks students to reassess present priorities in light of eternity.", refs: ["Revelation 21:1-5", "Revelation 22:1-5"] }
    ],
    quiz: { q: "What comes at the end of the course's timeline after judgment?", options: ["A return to Egypt", "Eternity and the New Heaven and New Earth", "Another flood", "Babel"], answer: 1, feedback: "Lesson 12 ends the Bible-study journey with eternity, including the New Heaven and New Earth." },
    reflection: "What does the promise of eternity change about how you want to live today?"
  }
];


const lessonDecor = {
  1: { icon: '✦', note: 'Scripture is the starting point for the whole journey.' },
  2: { icon: '◌', note: 'Creation, the fall, and God’s first promise of redemption.' },
  3: { icon: '⌁', note: 'Grace, faith and obedience become visible in Noah’s story.' },
  4: { icon: '✧', note: 'A family line of promise points the story forward.' },
  5: { icon: '✣', note: 'Deliverance, Passover and covenant identity shape God’s people.' },
  6: { icon: '▥', note: 'The tabernacle reveals holiness, worship and a shadow of Christ.' },
  7: { icon: '†', note: 'The life, death and resurrection of Jesus stand at the center.' },
  8: { icon: '≈', note: 'The Gospel calls for a real response in repentance and baptism.' },
  9: { icon: '◇', note: 'God’s Spirit brings promise, power and new birth.' },
  10: { icon: '§', note: 'The apostles’ doctrine anchors the Church in truth.' },
  11: { icon: '⌛', note: 'Signs, the Rapture and the Tribulation place eternity in view.' },
  12: { icon: '∞', note: 'The story ends in judgment, restoration and forever with God.' }
};

const STORAGE = {
  lastLesson: 'utb:lastLesson',
  completed: 'utb:completed',
  recentRefs: 'utb:recentRefs',
  font: 'utb:font'
};

const els = {
  shell: document.querySelector('.app-shell'),
  nav: document.getElementById('lessonNav'),
  hero: document.getElementById('lessonHero'),
  utility: document.getElementById('lessonUtility'),
  timeline: document.getElementById('timeline'),
  content: document.getElementById('lessonContent'),
  end: document.getElementById('lessonEnd'),
  search: document.getElementById('lessonSearch'),
  journeyCard: document.getElementById('journeyCard'),
  progressChip: document.getElementById('progressChip'),
  currentChip: document.getElementById('currentChip'),
  lessonSidebar: document.getElementById('lessonSidebar'),
  biblePanel: document.getElementById('biblePanel'),
  lessonMenuBtn: document.getElementById('lessonMenuBtn'),
  bibleMobileBtn: document.getElementById('bibleMobileBtn'),
  bibleCloseBtn: document.getElementById('bibleCloseBtn'),
  scrim: document.getElementById('scrim'),
  focusBtn: document.getElementById('focusBtn'),
  fontDecreaseBtn: document.getElementById('fontDecreaseBtn'),
  fontIncreaseBtn: document.getElementById('fontIncreaseBtn'),
  bibleForm: document.getElementById('bibleSearchForm'),
  bibleInput: document.getElementById('bibleSearchInput'),
  bibleView: document.getElementById('bibleView'),
  bibleStatus: document.getElementById('bibleStatus'),
  translationTabs: document.getElementById('translationTabs'),
  recentRefs: document.getElementById('recentRefs'),
  demoVerseBtn: document.getElementById('demoVerseBtn'),
  brandHome: document.getElementById('brandHome')
};

function safeJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function getHashLesson() {
  const match = window.location.hash.match(/lesson-(\d+)/i);
  return match ? Number(match[1]) : null;
}

let completedLessons = new Set(safeJSON(STORAGE.completed, []));
let recentRefs = safeJSON(STORAGE.recentRefs, []);
let currentLesson = getHashLesson() || Number(localStorage.getItem(STORAGE.lastLesson)) || 1;
let currentVersion = 'KJV';
let currentReference = 'Acts 2:38';
let noteTimer = null;

applyFont(localStorage.getItem(STORAGE.font) || 'md');

function escapeHTML(str='') {
  return String(str).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function applyFont(size) {
  const order = ['sm', 'md', 'lg'];
  const safe = order.includes(size) ? size : 'md';
  document.body.dataset.font = safe;
  localStorage.setItem(STORAGE.font, safe);
}

function adjustFont(direction) {
  const order = ['sm', 'md', 'lg'];
  const current = document.body.dataset.font || 'md';
  let idx = order.indexOf(current);
  idx += direction;
  idx = Math.max(0, Math.min(order.length - 1, idx));
  applyFont(order[idx]);
}

function readingMinutes(lesson) {
  const words = lesson.sections.reduce((sum, section) => sum + `${section.intro} ${section.body} ${section.key || ''}`.split(/\s+/).length, 0);
  return Math.max(8, Math.round(words / 120));
}

function lessonRefCount(lesson) {
  return new Set(lesson.sections.flatMap(section => section.refs)).size;
}

function getCompleteCount() {
  return completedLessons.size;
}

function getNextRecommended() {
  return lessons.find(l => !completedLessons.has(l.id)) || lessons[lessons.length - 1];
}

function persistCompleted() {
  localStorage.setItem(STORAGE.completed, JSON.stringify([...completedLessons]));
}

function updateTopMeta() {
  const completeCount = getCompleteCount();
  const percent = Math.round((completeCount / lessons.length) * 100);
  els.progressChip.textContent = `${completeCount} / ${lessons.length} completed · ${percent}%`;
  const lesson = lessons.find(l => l.id === currentLesson) || lessons[0];
  els.currentChip.textContent = `Lesson ${lesson.id}: ${lesson.short}`;
}

function renderJourneyCard() {
  const completeCount = getCompleteCount();
  const percent = Math.round((completeCount / lessons.length) * 100);
  const next = getNextRecommended();
  const allDone = completeCount === lessons.length;

  els.journeyCard.innerHTML = `
    <p class="eyebrow">Your progress</p>
    <h3>${allDone ? 'You finished the journey 🎉' : 'Keep moving forward'}</h3>
    <p>${allDone ? 'Every lesson is marked complete on this device. You can revisit any part of the study any time.' : `You have completed <strong>${completeCount}</strong> out of <strong>${lessons.length}</strong> lessons on this device.`}</p>
    <div class="progress-wrap">
      <div class="progress-meta"><span>Course progress</span><span>${percent}%</span></div>
      <div class="progress-bar"><span style="width:${percent}%"></span></div>
    </div>
    <div class="journey-actions">
      <button class="primary-btn" id="continueJourneyBtn">${allDone ? 'Review Lesson 12' : `Continue with Lesson ${next.id}`}</button>
      <button class="mini-btn" id="resetProgressBtn">Reset progress</button>
    </div>`;

  document.getElementById('continueJourneyBtn')?.addEventListener('click', () => {
    selectLesson(allDone ? 12 : next.id);
    closeOverlays();
  });

  document.getElementById('resetProgressBtn')?.addEventListener('click', () => {
    if (!confirm('Reset all completed lessons and saved progress on this device?')) return;
    completedLessons = new Set();
    persistCompleted();
    renderJourneyCard();
    renderNav(els.search.value);
    renderLesson(currentLesson, { preserveScroll: true });
  });

  updateTopMeta();
}

function renderNav(query='') {
  const needle = query.trim().toLowerCase();
  els.nav.innerHTML = lessons
    .filter(l => !needle || `${l.id} ${l.short} ${l.title} ${l.summary}`.toLowerCase().includes(needle))
    .map(l => `
      <button class="lesson-link ${l.id === currentLesson ? 'active' : ''}" data-lesson="${l.id}">
        <span class="lesson-number">${String(l.id).padStart(2,'0')}</span>
        <span><strong>${escapeHTML(l.short)}</strong><span>${escapeHTML(l.era)}</span></span>
        <span class="lesson-done ${completedLessons.has(l.id) ? 'complete' : ''}">${completedLessons.has(l.id) ? '✓' : ''}</span>
      </button>`).join('');

  els.nav.querySelectorAll('.lesson-link').forEach(btn => btn.addEventListener('click', () => {
    selectLesson(Number(btn.dataset.lesson));
    closeOverlays();
  }));
}

function renderHero(lesson) {
  const decor = lessonDecor[lesson.id] || { icon: '📖', note: '' };
  const takeaway = lesson.sections.find(section => section.key)?.key || lesson.objectives[0];

  els.hero.innerHTML = `
    <div class="hero-card">
      <div class="hero-copy">
        <div class="lesson-kicker">Lesson ${String(lesson.id).padStart(2,'0')} · ${escapeHTML(lesson.era)}</div>
        <h1>${escapeHTML(lesson.title)}</h1>
        <p class="hero-summary">${escapeHTML(lesson.summary)}</p>
        <div class="hero-pills">
          <span class="info-pill"><small>READ</small><strong>${readingMinutes(lesson)} min</strong></span>
          <span class="info-pill"><small>REFS</small><strong>${lessonRefCount(lesson)}</strong></span>
          <span class="info-pill"><small>SECTIONS</small><strong>${lesson.sections.length}</strong></span>
        </div>
        <div class="objective-grid">
          <div class="objective-card"><small>Primary objective</small><p>${escapeHTML(lesson.objectives[0])}</p></div>
          <div class="objective-card"><small>Study response</small><p>${escapeHTML(lesson.objectives[1])}</p></div>
        </div>
      </div>
      <div class="hero-art">
        <div class="hero-orb" aria-hidden="true">${decor.icon}</div>
        <div class="hero-note">
          <small>Big idea</small>
          <h3>What to notice</h3>
          <p>${escapeHTML(takeaway)}</p>
          ${decor.note ? `<p style="margin-top:8px;">${escapeHTML(decor.note)}</p>` : ''}
        </div>
      </div>
    </div>`;
}

function renderUtility(lesson) {
  const isComplete = completedLessons.has(lesson.id);
  const topRefs = [...new Set(lesson.sections.flatMap(section => section.refs))].slice(0, 5);
  const lessonLink = `${location.origin}${location.pathname}#lesson-${lesson.id}`;

  els.utility.innerHTML = `
    <div class="utility-grid">
      <section class="utility-card">
        <h3>Study actions</h3>
        <p>Use these quick actions while you work through the lesson.</p>
        <div class="button-row action-grid">
          <button class="soft-btn complete-btn ${isComplete ? 'complete-state' : ''}" id="completeLessonBtn">${isComplete ? '✓ Completed on this device' : 'Mark lesson complete'}</button>
          <button class="soft-btn" id="shareLessonBtn">Copy lesson link</button>
          <button class="soft-btn" id="openBibleActionBtn">Open Bible panel</button>
        </div>
        <div class="inline-status" id="actionStatus">${isComplete ? 'Nice work — this lesson is already marked complete.' : 'Tip: mark lessons complete as you go.'}</div>
      </section>

      <section class="utility-card">
        <h3>Jump to a section</h3>
        <p>No endless scrolling. Go straight to the part you want.</p>
        <div class="jump-chips">
          ${lesson.sections.map((section, index) => `<button class="jump-chip" data-jump="section-${lesson.id}-${index+1}">${index + 1}. ${escapeHTML(section.title)}</button>`).join('')}
        </div>
      </section>

      <section class="utility-card">
        <h3>Key verses in this lesson</h3>
        <p>Open a verse instantly in the Bible panel on the right.</p>
        <div class="verse-list">
          ${topRefs.map(ref => `<button class="verse-chip" data-ref="${escapeHTML(ref)}">↗ ${escapeHTML(ref)}</button>`).join('')}
        </div>
      </section>
    </div>`;

  document.getElementById('completeLessonBtn')?.addEventListener('click', () => toggleComplete(lesson.id));
  document.getElementById('shareLessonBtn')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(lessonLink);
      setActionStatus('Lesson link copied to clipboard.');
    } catch {
      setActionStatus(`Copy this link: ${lessonLink}`);
    }
  });
  document.getElementById('openBibleActionBtn')?.addEventListener('click', () => openBiblePanel());

  els.utility.querySelectorAll('[data-jump]').forEach(btn => btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.jump);
    if (!target) return;
    target.classList.add('open');
    target.querySelector('.section-toggle')?.setAttribute('aria-expanded', 'true');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

  els.utility.querySelectorAll('.verse-chip').forEach(btn => btn.addEventListener('click', () => {
    currentReference = btn.dataset.ref;
    els.bibleInput.value = currentReference;
    openBiblePanel();
    loadBible(currentReference, currentVersion);
  }));
}

function renderTimeline(lesson) {
  els.timeline.innerHTML = `
    <div class="timeline-label">Bible story timeline</div>
    <div class="timeline">
      ${lesson.timeline.steps.map((step, index) => `${index ? '<span class="timeline-arrow">→</span>' : ''}<span class="timeline-step ${lesson.timeline.active.includes(step) ? 'active' : ''}">${escapeHTML(step)}</span>`).join('')}
    </div>`;
}

function renderSections(lesson) {
  return lesson.sections.map((section, index) => `
    <article class="section-card ${index === 0 ? 'open' : ''}" id="section-${lesson.id}-${index+1}" data-section-card>
      <button class="section-toggle" data-toggle aria-expanded="${index === 0 ? 'true' : 'false'}">
        <div class="section-index">${String(index + 1).padStart(2, '0')}</div>
        <div class="section-copy">
          <h2>${escapeHTML(section.title)}</h2>
          <p>${escapeHTML(section.intro)}</p>
        </div>
        <div class="section-toggle-meta">
          <span class="section-mini">${section.refs.length} verse${section.refs.length > 1 ? 's' : ''}</span>
          <span class="chevron">⌄</span>
        </div>
      </button>
      <div class="section-body">
        <p>${escapeHTML(section.body)}</p>
        ${section.key ? `<div class="key-idea"><strong>Key idea</strong><p>${escapeHTML(section.key)}</p></div>` : ''}
        <div class="scripture-row">
          ${section.refs.map(ref => `<button class="scripture-chip" data-ref="${escapeHTML(ref)}">↗ ${escapeHTML(ref)}</button>`).join('')}
        </div>
      </div>
    </article>`).join('');
}

function renderQuiz(lesson) {
  return `
    <article class="section-card open">
      <button class="section-toggle" aria-expanded="true">
        <div class="section-index">✓</div>
        <div class="section-copy">
          <h2>Check Your Understanding</h2>
          <p>A simple knowledge check to help the lesson stay with you.</p>
        </div>
        <div class="section-toggle-meta"><span class="section-mini">Quick quiz</span></div>
      </button>
      <div class="section-body" style="display:block;">
        <div class="check-card" data-quiz>
          <h3>${escapeHTML(lesson.quiz.q)}</h3>
          <p>Choose the answer that best matches the lesson summary above.</p>
          <div class="quiz-options">
            ${lesson.quiz.options.map((option, index) => `<button class="quiz-option" data-option="${index}"><span>${String.fromCharCode(65 + index)}.</span><span>${escapeHTML(option)}</span></button>`).join('')}
          </div>
          <div class="quiz-feedback" aria-live="polite"></div>
        </div>
      </div>
    </article>`;
}

function renderNotes(lesson) {
  const saved = localStorage.getItem(`utb:notes:${lesson.id}`) || '';
  return `
    <section class="notes-card">
      <h2>Reflect & Apply</h2>
      <p><strong>Reflection:</strong> ${escapeHTML(lesson.reflection)} Your note stays only in this browser.</p>
      <textarea id="lessonNotes" placeholder="Write your reflection, prayer, or questions here...">${escapeHTML(saved)}</textarea>
      <div class="notes-actions">
        <span class="note-status" id="noteStatus">${saved ? 'Saved on this device' : 'Start typing — notes auto-save locally'}</span>
        <button class="save-note" id="saveNoteBtn">Save now</button>
      </div>
    </section>`;
}

function renderEnd(lesson) {
  const prev = lessons.find(l => l.id === lesson.id - 1);
  const next = lessons.find(l => l.id === lesson.id + 1);
  const isComplete = completedLessons.has(lesson.id);

  els.end.innerHTML = `
    <div class="lesson-nav-bottom">
      ${prev ? `<button class="nav-card" data-go="${prev.id}"><small>← Previous lesson</small><strong>${escapeHTML(prev.title)}</strong></button>` : '<div></div>'}
      ${next ? `<button class="nav-card" data-go="${next.id}"><small>Next lesson →</small><strong>${escapeHTML(next.title)}</strong></button>` : '<div></div>'}
    </div>
    <div class="lesson-finish">
      <div>
        <h3>${isComplete ? 'Lesson completed 🎉' : 'Finish this lesson well'}</h3>
        <p>${isComplete ? 'You marked this lesson as complete on this device.' : 'When you are done, mark it complete so your progress is easier to track.'}</p>
      </div>
      <button class="soft-btn complete-btn ${isComplete ? 'complete-state' : ''}" id="completeLessonBottomBtn">${isComplete ? '✓ Completed' : 'Mark complete'}</button>
    </div>`;

  els.end.querySelectorAll('[data-go]').forEach(btn => btn.addEventListener('click', () => selectLesson(Number(btn.dataset.go))));
  document.getElementById('completeLessonBottomBtn')?.addEventListener('click', () => toggleComplete(lesson.id));
}

function renderLesson(id, options = {}) {
  const lesson = lessons.find(l => l.id === id) || lessons[0];
  currentLesson = lesson.id;
  localStorage.setItem(STORAGE.lastLesson, String(currentLesson));
  document.title = `Lesson ${lesson.id}: ${lesson.title} | Unlocking the Bible`;
  history.replaceState(null, '', `#lesson-${lesson.id}`);

  renderHero(lesson);
  renderUtility(lesson);
  renderTimeline(lesson);
  els.content.innerHTML = renderSections(lesson) + renderQuiz(lesson) + renderNotes(lesson);
  renderEnd(lesson);
  bindLessonInteractions(lesson);
  renderNav(els.search.value);
  renderJourneyCard();
  if (!options.preserveScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleComplete(lessonId) {
  let message = '';
  if (completedLessons.has(lessonId)) {
    completedLessons.delete(lessonId);
    message = 'Lesson removed from completed list.';
  } else {
    completedLessons.add(lessonId);
    message = 'Lesson marked complete on this device.';
  }
  persistCompleted();
  renderLesson(currentLesson, { preserveScroll: true });
  setActionStatus(message);
}

function bindLessonInteractions(lesson) {
  document.querySelectorAll('[data-toggle]').forEach(btn => btn.addEventListener('click', () => {
    const card = btn.closest('.section-card');
    const isOpen = card.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  }));

  document.querySelectorAll('.scripture-chip').forEach(btn => btn.addEventListener('click', () => {
    currentReference = btn.dataset.ref;
    els.bibleInput.value = currentReference;
    openBiblePanel();
    loadBible(currentReference, currentVersion);
  }));

  const quiz = document.querySelector('[data-quiz]');
  quiz?.querySelectorAll('.quiz-option').forEach(btn => btn.addEventListener('click', () => {
    const chosen = Number(btn.dataset.option);
    quiz.querySelectorAll('.quiz-option').forEach(option => option.disabled = true);
    btn.classList.add(chosen === lesson.quiz.answer ? 'correct' : 'wrong');
    if (chosen !== lesson.quiz.answer) quiz.querySelector(`[data-option="${lesson.quiz.answer}"]`)?.classList.add('correct');
    const feedback = quiz.querySelector('.quiz-feedback');
    feedback.textContent = (chosen === lesson.quiz.answer ? 'Correct. ' : 'Review this one. ') + lesson.quiz.feedback;
  }));

  const noteField = document.getElementById('lessonNotes');
  const noteStatus = document.getElementById('noteStatus');
  const saveNote = () => {
    localStorage.setItem(`utb:notes:${lesson.id}`, noteField.value);
    noteStatus.textContent = 'Saved on this device';
  };

  noteField?.addEventListener('input', () => {
    noteStatus.textContent = 'Saving locally...';
    clearTimeout(noteTimer);
    noteTimer = setTimeout(saveNote, 450);
  });
  document.getElementById('saveNoteBtn')?.addEventListener('click', saveNote);
}

function setActionStatus(message) {
  const status = document.getElementById('actionStatus');
  if (status) status.textContent = message;
}

function selectLesson(id, options = {}) {
  renderLesson(id, options);
  closeOverlays();
}

function openBiblePanel() {
  if (window.innerWidth <= 980) {
    els.biblePanel.classList.add('open');
    els.lessonSidebar.classList.remove('open');
    els.scrim.classList.add('show');
  }
}

function closeOverlays() {
  els.biblePanel.classList.remove('open');
  els.lessonSidebar.classList.remove('open');
  els.scrim.classList.remove('show');
}

function setBibleStatus(text, mode='') {
  els.bibleStatus.innerHTML = `<span class="status-dot ${mode}"></span><span>${escapeHTML(text)}</span>`;
}

function rememberReference(ref) {
  if (!ref) return;
  recentRefs = [ref, ...recentRefs.filter(item => item !== ref)].slice(0, 6);
  localStorage.setItem(STORAGE.recentRefs, JSON.stringify(recentRefs));
  renderRecentRefs();
}

function renderRecentRefs() {
  const content = recentRefs.length
    ? `<small>Recent references</small><div class="verse-list">${recentRefs.map(ref => `<button class="verse-chip recent-ref" data-ref="${escapeHTML(ref)}">${escapeHTML(ref)}</button>`).join('')}</div>`
    : `<small>Quick ideas</small><div class="verse-list"><button class="verse-chip recent-ref" data-ref="Acts 2:38">Acts 2:38</button><button class="verse-chip recent-ref" data-ref="John 3:5">John 3:5</button><button class="verse-chip recent-ref" data-ref="Romans 10:17">Romans 10:17</button></div>`;
  els.recentRefs.innerHTML = content;
  els.recentRefs.querySelectorAll('.recent-ref').forEach(btn => btn.addEventListener('click', () => {
    currentReference = btn.dataset.ref;
    els.bibleInput.value = currentReference;
    loadBible(currentReference, currentVersion);
  }));
}

async function loadBible(reference, version) {
  currentReference = reference;
  currentVersion = version;
  els.bibleView.innerHTML = `<div class="bible-empty"><span class="bible-icon">⌛</span><h3>Loading ${escapeHTML(reference)}</h3><p>Looking up ${escapeHTML(version)}…</p></div>`;
  setBibleStatus('Connecting to Bible service…');
  try {
    const res = await fetch(`/api/bible?reference=${encodeURIComponent(reference)}&version=${encodeURIComponent(version)}`);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || data.error || `Bible request failed (${res.status})`);

    if (data.type === 'passage') {
      els.bibleView.innerHTML = `
        <div class="verse-header"><small>${escapeHTML(data.versionLabel || version)}</small><h3>${escapeHTML(data.reference || reference)}</h3></div>
        <div class="verse-content">${data.content || ''}</div>
        ${data.copyright ? `<div class="verse-copyright">${data.copyright}</div>` : ''}`;
    } else if (data.type === 'search') {
      els.bibleView.innerHTML = `
        <div class="verse-header"><small>${escapeHTML(data.versionLabel || version)} · SEARCH</small><h3>${escapeHTML(reference)}</h3></div>
        <div>${(data.items || []).map(item => `<button class="nav-card bible-result" data-ref="${escapeHTML(item.reference)}"><small>${escapeHTML(item.reference)}</small><strong>${escapeHTML(item.text)}</strong></button>`).join('') || '<p>No results found.</p>'}</div>`;
      els.bibleView.querySelectorAll('.bible-result').forEach(btn => btn.addEventListener('click', () => loadBible(btn.dataset.ref, currentVersion)));
    }
    rememberReference(reference);
    setBibleStatus(`Connected · ${data.versionLabel || version}`, 'ok');
  } catch (err) {
    els.bibleView.innerHTML = `
      <div class="bible-empty">
        <span class="bible-icon">🔌</span>
        <h3>Bible connection not configured yet</h3>
        <p>${escapeHTML(err.message)}</p>
        <p>The learning system still works. Add your API.Bible key as <strong>API_BIBLE_KEY</strong> in Vercel to enable live KJV, NIV, NLT and available Tagalog translations.</p>
      </div>`;
    setBibleStatus('Bible API needs configuration', 'error');
  }
}

els.search.addEventListener('input', e => renderNav(e.target.value));
els.lessonMenuBtn.addEventListener('click', () => {
  els.lessonSidebar.classList.add('open');
  els.biblePanel.classList.remove('open');
  els.scrim.classList.add('show');
});
els.bibleMobileBtn.addEventListener('click', () => openBiblePanel());
els.bibleCloseBtn.addEventListener('click', closeOverlays);
els.scrim.addEventListener('click', closeOverlays);
els.focusBtn.addEventListener('click', () => {
  els.shell.classList.toggle('focus');
  els.focusBtn.textContent = els.shell.classList.contains('focus') ? 'Exit focus' : 'Focus mode';
});
els.fontDecreaseBtn.addEventListener('click', () => adjustFont(-1));
els.fontIncreaseBtn.addEventListener('click', () => adjustFont(1));
els.bibleForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = els.bibleInput.value.trim();
  if (query) loadBible(query, currentVersion);
});
els.translationTabs.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
  els.translationTabs.querySelectorAll('button').forEach(tab => tab.classList.remove('active'));
  btn.classList.add('active');
  currentVersion = btn.dataset.version;
  if (currentReference) loadBible(currentReference, currentVersion);
}));
els.demoVerseBtn.addEventListener('click', () => {
  els.bibleInput.value = 'Acts 2:38';
  loadBible('Acts 2:38', currentVersion);
});
els.brandHome.addEventListener('click', e => {
  e.preventDefault();
  selectLesson(1);
});
window.addEventListener('hashchange', () => {
  const hashLesson = getHashLesson();
  if (hashLesson && hashLesson !== currentLesson) renderLesson(hashLesson, { preserveScroll: true });
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) closeOverlays();
});

renderRecentRefs();
renderNav();
renderJourneyCard();
renderLesson(currentLesson, { preserveScroll: true });
